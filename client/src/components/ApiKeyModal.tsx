import { useState } from 'react';
import { AlertCircle, Key } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ApiKeyModalProps {
  onClose: () => void;
}

export function ApiKeyModal({ onClose }: ApiKeyModalProps) {
  const { t } = useLanguage();
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Key className="w-8 h-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('apiKeyRequiredTitle')}</h2>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium mb-2">
                  {t('apiKeyRequiredDescription')}
                </p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  {t('apiKeyRequiredNote')}
                </p>
              </div>
            </div>
          </div>

          {showInstructions && (
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
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium"
            >
{showInstructions ? t('hideInstructions') : t('showInstructions')}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
            >
{t('configureLater')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

