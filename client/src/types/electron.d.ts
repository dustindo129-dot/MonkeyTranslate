interface ElectronAPI {
  getApiKey: () => Promise<string | null>;
  saveApiKey: (key: string) => Promise<boolean>;
  onShowApiKeyModal: (callback: () => void) => () => void;
  getVersion: () => any;
  platform: string;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

export {};
