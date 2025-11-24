const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  getApiKey: () => ipcRenderer.invoke('get-api-key'),
  saveApiKey: (key) => ipcRenderer.invoke('save-api-key', key),

  // Listen for show API key modal event from menu
  onShowApiKeyModal: (callback) => {
    ipcRenderer.on('show-api-key-modal', callback);
    // Return cleanup function
    return () => ipcRenderer.removeListener('show-api-key-modal', callback);
  },

  // Version info
  getVersion: () => process.versions,

  // Platform info
  platform: process.platform
});
