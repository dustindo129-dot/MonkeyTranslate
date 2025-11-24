import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Page } from './types';
import { apiService } from './services/api';
import { ApiKeyModal } from './components/ApiKeyModal';
import { UploadZone } from './components/UploadZone';
import { PageList } from './components/PageList';
import { PageEditor } from './components/PageEditor';
import { AlertCircle, Upload } from 'lucide-react';

function App() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState<boolean | null>(null);
  const queryClient = useQueryClient();

  // Check API key status
  const { data: healthData } = useQuery({
    queryKey: ['health'],
    queryFn: apiService.checkHealth,
    refetchInterval: 10000, // Check every 10 seconds
  });

  useEffect(() => {
    if (healthData) {
      setApiKeyConfigured(healthData.apiKeyConfigured);
      if (!healthData.apiKeyConfigured && pages.length === 0) {
        setShowApiKeyModal(true);
      }
    }
  }, [healthData, pages.length]);

  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: apiService.uploadImages,
    onSuccess: (data) => {
      setPages((prev) => [...prev, ...data.pages]);
      if (data.pages.length > 0 && !selectedPageId) {
        setSelectedPageId(data.pages[0].id);
      }
    },
    onError: (error) => {
      console.error('Upload failed:', error);
      alert('Failed to upload images. Please try again.');
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: apiService.deletePage,
    onSuccess: (_, pageId) => {
      setPages((prev) => prev.filter((p) => p.id !== pageId));
      if (selectedPageId === pageId) {
        setSelectedPageId(pages.length > 1 ? pages[0].id : null);
      }
    },
  });

  const handleUpload = (files: File[]) => {
    uploadMutation.mutate(files);
  };

  const handleDeletePage = (pageId: string) => {
    if (confirm('Are you sure you want to delete this page?')) {
      deleteMutation.mutate(pageId);
    }
  };

  const handleUpdatePage = (updatedPage: Page) => {
    setPages((prev) => prev.map((p) => (p.id === updatedPage.id ? updatedPage : p)));
  };

  const selectedPage = pages.find((p) => p.id === selectedPageId);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                🐵 MonkeyTranslate
              </h1>
              <p className="text-primary-100 text-sm mt-1">
                AI-powered image translation using Gemini API
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {apiKeyConfigured === false && (
                <button
                  onClick={() => setShowApiKeyModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg 
                    hover:bg-yellow-600 font-medium"
                >
                  <AlertCircle className="w-4 h-4" />
                  Configure API Key
                </button>
              )}
              
              {apiKeyConfigured === true && (
                <div className="flex items-center gap-2 text-primary-100 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  API Connected
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Page list */}
      {pages.length > 0 && (
        <PageList
          pages={pages}
          selectedPageId={selectedPageId}
          onSelectPage={setSelectedPageId}
          onDeletePage={handleDeletePage}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {selectedPage ? (
          <PageEditor page={selectedPage} onUpdatePage={handleUpdatePage} />
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-2xl w-full">
              {apiKeyConfigured === false && (
                <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-800 font-medium">
                        API Key Not Configured
                      </p>
                      <p className="text-sm text-yellow-700 mt-1">
                        You need to configure your Gemini API key before using the app.
                        Click "Configure API Key" above for instructions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <UploadZone onUpload={handleUpload} isUploading={uploadMutation.isPending} />
              
              {pages.length === 0 && (
                <div className="mt-8 text-center text-gray-500">
                  <p className="text-sm">
                    Upload images to get started with text extraction and translation
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* API Key Modal */}
      {showApiKeyModal && <ApiKeyModal onClose={() => setShowApiKeyModal(false)} />}
    </div>
  );
}

export default App;

