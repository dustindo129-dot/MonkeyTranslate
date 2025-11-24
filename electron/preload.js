const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  getApiKey: () => ipcRenderer.invoke('get-api-key'),
  saveApiKey: (key) => ipcRenderer.invoke('save-api-key', key),
  
  // Version info
  getVersion: () => process.versions,
  
  // Platform info
  platform: process.platform
});

// Log that preload script has loaded
console.log('Electron preload script loaded');
