const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs').promises;
const os = require('os');

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
    const serverPath = path.join(__dirname, '../server/dist/server.js');
    const env = { ...process.env };
    
    // Set the API key if available
    if (apiKey) {
      env.GEMINI_API_KEY = apiKey;
    }
    
    // Set port and other env vars
    env.PORT = '3001';
    env.NODE_ENV = 'production';
    
    console.log('Starting server with API key:', apiKey ? 'configured' : 'not configured');
    
    serverProcess = spawn('node', [serverPath], {
      env,
      stdio: ['pipe', 'pipe', 'pipe']
    });

    serverProcess.stdout.on('data', (data) => {
      console.log('Server:', data.toString());
    });

    serverProcess.stderr.on('data', (data) => {
      console.error('Server Error:', data.toString());
    });

    serverProcess.on('close', (code) => {
      console.log('Server process exited with code:', code);
      if (code !== 0) {
        reject(new Error(`Server exited with code ${code}`));
      }
    });

    // Give the server time to start
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

// Stop the server
function stopServer() {
  if (serverProcess) {
    serverProcess.kill();
    serverProcess = null;
  }
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
    
    // Check if API key is configured
    if (!apiKey) {
      showApiKeyDialog();
    }
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
          click: () => showApiKeyDialog()
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
              detail: 'Open-source image translation tool powered by Google\'s Gemini API.\n\nVisit: https://github.com/yourusername/monkey-translate'
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

// Show API key configuration dialog
async function showApiKeyDialog() {
  const result = await dialog.showInputBox(mainWindow, {
    title: 'Configure Gemini API Key',
    label: 'Please enter your Gemini API key:',
    placeholder: 'AIza...',
    value: apiKey || '',
    inputAttrs: {
      type: 'password'
    }
  });

  if (result.response === 0 && result.inputValue) { // OK button pressed
    const success = await saveApiKey(result.inputValue);
    if (success) {
      dialog.showMessageBox(mainWindow, {
        type: 'info',
        title: 'API Key Saved',
        message: 'Your API key has been saved successfully.',
        detail: 'The application will restart to apply the new configuration.'
      });
      
      // Restart the app to apply new API key
      app.relaunch();
      app.exit(0);
    } else {
      dialog.showErrorBox('Error', 'Failed to save API key. Please try again.');
    }
  } else if (result.response === 0 && !result.inputValue) {
    dialog.showErrorBox('Error', 'API key cannot be empty.');
  }
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
  return await saveApiKey(key);
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
    dialog.showErrorBox('Server Error', 'Failed to start the application server.');
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
