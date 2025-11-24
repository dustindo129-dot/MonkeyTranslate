const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require('electron');
const path = require('path');
const { spawn, fork } = require('child_process');
const fs = require('fs').promises;
const os = require('os');

// Single instance lock - prevent multiple instances from running
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  // Another instance is already running, quit this one
  console.log('Another instance is already running. Quitting...');
  app.quit();
} else {
  // Handle second instance attempt - focus the existing window
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    console.log('Second instance detected, focusing existing window...');
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

// Keep a global reference of the window object
let mainWindow;
let serverProcess;
let apiKey = null;

// Get user data path for storing API key
const getUserDataPath = () => {
  return path.join(os.homedir(), '.monkeytranslate');
};

const getApiKeyPath = () => {
  return path.join(getUserDataPath(), 'config.json');
};

// Load API key from storage
async function loadApiKey() {
  try {
    const configPath = getApiKeyPath();
    const data = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(data);
    apiKey = config.apiKey;
    return apiKey;
  } catch (error) {
    console.log('No API key found, will prompt user');
    return null;
  }
}

// Save API key to storage
async function saveApiKey(key) {
  try {
    const userDataDir = getUserDataPath();
    await fs.mkdir(userDataDir, { recursive: true });

    const configPath = getApiKeyPath();
    const config = { apiKey: key };
    await fs.writeFile(configPath, JSON.stringify(config, null, 2));

    apiKey = key;
    console.log('API key saved successfully');
    return true;
  } catch (error) {
    console.error('Failed to save API key:', error);
    return false;
  }
}

// Start the Express server
function startServer() {
  return new Promise((resolve, reject) => {
    // Determine server path based on whether app is packaged
    const serverPath = app.isPackaged
      ? path.join(process.resourcesPath, 'app', 'server', 'dist', 'server.js')
      : path.join(__dirname, '..', 'server', 'dist', 'server.js');

    const env = { ...process.env };

    // Set the API key if available
    if (apiKey) {
      env.GEMINI_API_KEY = apiKey;
    }

    // Set port and other env vars
    env.PORT = '3001';
    env.NODE_ENV = 'production';

    // Check if server file exists
    const fs = require('fs');
    if (!fs.existsSync(serverPath)) {
      return reject(new Error(`Server file not found at: ${serverPath}`));
    }

    // Use fork() - it uses Node.js bundled with Electron automatically
    // silent: true means we'll manually capture stdout/stderr via .stdout and .stderr streams
    serverProcess = fork(serverPath, [], {
      env,
      silent: true // We'll capture stdout/stderr manually
    });

    serverProcess.stdout.on('data', (data) => {
      console.log('Server:', data.toString());
    });

    serverProcess.stderr.on('data', (data) => {
      console.error('Server Error:', data.toString());
    });

    serverProcess.on('error', (error) => {
      console.error('Failed to start server process:', error);
      reject(new Error(`Failed to start server: ${error.message}`));
    });

    serverProcess.on('close', (code) => {
      console.log('Server process exited with code:', code);
      if (code !== 0 && code !== null) {
        reject(new Error(`Server exited with code ${code}`));
      }
    });

    // Give the server more time to start (especially on first run)
    // Server needs to load dependencies, connect to APIs, etc.
    setTimeout(() => {
      if (serverProcess && !serverProcess.killed) {
        resolve();
      } else {
        reject(new Error('Server process died during startup'));
      }
    }, 8000); // Increased from 3 to 8 seconds
  });
}

// Stop the server
function stopServer() {
  return new Promise((resolve) => {
  if (serverProcess) {
      console.log('Stopping server...');
      serverProcess.on('close', () => {
        serverProcess = null;
        resolve();
      });
    serverProcess.kill();
    } else {
      resolve();
    }
  });
}

// Restart the server (used when API key changes)
async function restartServer() {
  console.log('Restarting server with new configuration...');
  await stopServer();
  await startServer();
  console.log('Server restarted successfully');
}

// Create the main window
function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, '../client/public/favicon.png'),
    show: false, // Don't show until ready
    title: 'MonkeyTranslate'
  });

  // Load the client
  const isDev = process.env.NODE_ENV === 'development';
  const clientPath = isDev
    ? 'http://localhost:5173'
    : `file://${path.join(__dirname, '../client/dist/index.html')}`;

  mainWindow.loadURL(clientPath);

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // API key modal now handled by React - shown automatically if not configured
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
    stopServer();
  });

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Set up menu
  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Configure API Key',
          click: () => {
            if (mainWindow) {
              mainWindow.webContents.send('show-api-key-modal');
            }
          }
        },
        {
          type: 'separator'
        },
        {
          role: 'quit'
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About MonkeyTranslate',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About MonkeyTranslate',
              message: 'MonkeyTranslate v1.0.0',
              detail: 'Open-source image translation tool powered by Google\'s Gemini API.\n\nVisit: https://github.com/dustindo129-dot/monkey-translate'
            });
          }
        },
        {
          label: 'Get Gemini API Key',
          click: () => {
            shell.openExternal('https://aistudio.google.com/app/apikey');
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}


// Custom dialog for input
async function showInputBox(parentWindow, options) {
  return new Promise((resolve) => {
    const inputWindow = new BrowserWindow({
      width: 400,
      height: 200,
      parent: parentWindow,
      modal: true,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    });

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${options.title || 'Input'}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              padding: 20px;
              margin: 0;
            }
            .container { display: flex; flex-direction: column; height: 100%; }
            .label { margin-bottom: 10px; }
            .input {
              padding: 8px;
              border: 1px solid #ccc;
              border-radius: 4px;
              margin-bottom: 20px;
              flex: 1;
            }
            .buttons {
              display: flex;
              justify-content: flex-end;
              gap: 10px;
            }
            .button {
              padding: 8px 16px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            .button.cancel { background: #f0f0f0; }
            .button.ok { background: #007acc; color: white; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="label">${options.label || 'Enter value:'}</div>
            <input
              type="${options.inputAttrs?.type || 'text'}"
              class="input"
              placeholder="${options.placeholder || ''}"
              value="${options.value || ''}"
              id="input"
              autofocus
            />
            <div class="buttons">
              <button class="button cancel" onclick="cancel()">Cancel</button>
              <button class="button ok" onclick="ok()">OK</button>
            </div>
          </div>
          <script>
            const { ipcRenderer } = require('electron');

            function cancel() {
              ipcRenderer.send('input-dialog-response', { response: 1 });
            }

            function ok() {
              const value = document.getElementById('input').value;
              ipcRenderer.send('input-dialog-response', { response: 0, inputValue: value });
            }

            // Handle Enter key
            document.getElementById('input').addEventListener('keydown', (e) => {
              if (e.key === 'Enter') ok();
              if (e.key === 'Escape') cancel();
            });
          </script>
        </body>
      </html>
    `;

    inputWindow.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);
    inputWindow.show();

    ipcMain.once('input-dialog-response', (event, result) => {
      inputWindow.close();
      resolve(result);
    });
  });
}

// Add the input box method to dialog
dialog.showInputBox = showInputBox;

// IPC handlers
ipcMain.handle('get-api-key', () => {
  return apiKey;
});

ipcMain.handle('save-api-key', async (event, key) => {
  try {
    const success = await saveApiKey(key);

    if (success) {
      // Restart the server with the new API key
      try {
        await restartServer();
        return true;
      } catch (error) {
        console.error('Failed to restart server:', error);
        return false;
      }
    }
    return false;
  } catch (error) {
    console.error('Error in save-api-key handler:', error);
    return false;
  }
});

// App event handlers
app.whenReady().then(async () => {
  // Load API key first
  await loadApiKey();

  // Start the server
  try {
    await startServer();
    console.log('Server started successfully');
  } catch (error) {
    console.error('Failed to start server:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    dialog.showErrorBox(
      'Server Startup Error',
      `Failed to start the application server.\n\nError: ${errorMessage}\n\nPlease check the console logs for more details.`
    );
    app.quit();
    return;
  }

  // Create the main window
  createWindow();
});

app.on('window-all-closed', () => {
  stopServer();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('before-quit', () => {
  stopServer();
});
