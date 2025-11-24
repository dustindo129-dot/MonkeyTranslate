import { useState } from 'react';
import { AlertCircle, Key } from 'lucide-react';

interface ApiKeyModalProps {
  onClose: () => void;
}

export function ApiKeyModal({ onClose }: ApiKeyModalProps) {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Key className="w-8 h-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">Gemini API Key Required</h2>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800 font-medium mb-2">
                  MonkeyTranslate requires a Gemini API key to function
                </p>
                <p className="text-sm text-yellow-700">
                  This is an open-source application. You need to provide your own Google Gemini API key,
                  which will be stored locally on your machine and never shared.
                </p>
              </div>
            </div>
          </div>

          {showInstructions && (
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">How to get your API key:</h3>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li className="ml-4">
                  <span className="ml-2">
                    Go to{' '}
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
                  <span className="ml-2">Sign in with your Google account</span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">Click "Get API Key" or "Create API Key"</span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">Copy your API key</span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">
                    Create a file named <code className="bg-gray-100 px-2 py-1 rounded">.env</code> in the
                    project root directory
                  </span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">
                    Add this line to the .env file:{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      GEMINI_API_KEY=your_api_key_here
                    </code>
                  </span>
                </li>
                <li className="ml-4">
                  <span className="ml-2">Restart the server</span>
                </li>
              </ol>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> The .env file is already in .gitignore, so your API key will
                  never be committed to version control. Keep your API key private and secure.
                </p>
              </div>
            </div>
          )}

          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              {showInstructions ? 'Hide' : 'Show'} Instructions
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
            >
              I'll Configure It Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

