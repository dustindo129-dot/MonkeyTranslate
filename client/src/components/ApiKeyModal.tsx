import { useState, useEffect } from 'react';
import { AlertCircle, Key, Save, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ApiKeyModalProps {
  onClose: () => void;
}

export function ApiKeyModal({ onClose }: ApiKeyModalProps) {
  const { t } = useLanguage();
  const [showInstructions, setShowInstructions] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [existingKey, setExistingKey] = useState<string | null>(null);

  // Check if we're running in Electron
  const isElectron = typeof window !== 'undefined' && window.electronAPI;

  // Load existing API key if available (for display only)
  useEffect(() => {
    if (isElectron && window.electronAPI) {
      window.electronAPI.getApiKey().then((key) => {
        if (key) {
          setExistingKey(key);
          // Show placeholder but don't fill the field (for security)
        }
      });
    }
  }, [isElectron]);

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      setError('API key cannot be empty');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (isElectron) {
        // Save to Electron storage and restart server
        const success = await window.electronAPI.saveApiKey(apiKey.trim());
        if (success) {
          // Wait a moment for server to restart
          await new Promise(resolve => setTimeout(resolve, 2000));
          onClose();
          // Reload the page to refresh the UI
          window.location.reload();
        } else {
          setError('Failed to save API key or restart server');
        }
      } else {
        setError('Direct API key saving is only available in the desktop app. Please follow the manual setup instructions.');
      }
    } catch (err) {
      setError('Failed to save API key: ' + (err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const openGoogleAIStudio = () => {
    window.open('https://aistudio.google.com/app/apikey', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
            <Key className="w-8 h-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('apiKeyRequiredTitle')}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium mb-2">
                  {t('apiKeyRequiredDescription')}
                </p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  {isElectron ? t('enterApiKeyBelow') : t('apiKeyRequiredNote')}
                </p>
              </div>
            </div>
          </div>

          {/* API Key Input for Electron */}
          {isElectron && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{t('enterYourApiKey')}</h3>

              <div className="space-y-4">
                {existingKey && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>{t('currentApiKey')}</strong> {existingKey.substring(0, 10)}...{existingKey.substring(existingKey.length - 4)}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                      {t('enterNewKeyBelow')}
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {existingKey ? t('newApiKey') : t('geminiApiKey')}
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder={t('apiKeyPlaceholder')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                      focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                      dark:bg-gray-700 dark:text-gray-100"
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-3">
                    <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={openGoogleAIStudio}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('getApiKeyButton')}
                  </button>

                  <button
                    onClick={handleSaveApiKey}
                    disabled={isLoading || !apiKey.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg
                      hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    {isLoading ? t('saving') : t('saveAndContinue')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Manual Instructions for Web/Development */}
          {!isElectron && showInstructions && (
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t('howToGetApiKey')}</h3>

              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li className="ml-4">
                  <span className="ml-2">
                    {t('goToGoogleAIStudio')}{' '}
                    <a
                      href="https://aistudio.google.com/app/apikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      Google AI Studio
                    </a>
                  </span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">{t('signInGoogle')}</span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">{t('clickGetApiKey')}</span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">{t('copyApiKey')}</span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">
                    {t('createEnvFile')}
                  </span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">
                    {t('addToEnvFile')}{' '}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      GEMINI_API_KEY=your_api_key_here
                    </code>
                  </span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">{t('restartServer')}</span>
                </li>
              </ol>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> {t('apiKeyNote')}
                </p>
              </div>
            </div>
          )}

          <div className="flex gap-3 justify-end">
            {!isElectron && (
              <>
              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium"
              >
                {showInstructions ? t('hideInstructions') : t('showInstructions')}
              </button>
            <button
              onClick={onClose}
                  disabled={isLoading}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
                  {t('configureLater')}
            </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

