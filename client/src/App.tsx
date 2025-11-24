import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Page } from './types';
import { apiService } from './services/api';
import { ApiKeyModal } from './components/ApiKeyModal';
import { UploadZone } from './components/UploadZone';
import { PageList } from './components/PageList';
import { PageEditor } from './components/PageEditor';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { AlertCircle, Coffee } from 'lucide-react';

function AppContent() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState<boolean | null>(null);
  const [isPageListCollapsed, setIsPageListCollapsed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

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
      alert(t('uploadError'));
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
    deleteMutation.mutate(pageId);
  };

  const handleUpdatePage = (updatedPage: Page) => {
    setPages((prev) => prev.map((p) => (p.id === updatedPage.id ? updatedPage : p)));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleUpload(files);
      // Reset input so the same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const selectedPage = pages.find((p) => p.id === selectedPageId);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white shadow-lg border-b-4 border-primary-500">
        <div className="px-4 py-[0.4rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="./logo.png" 
                alt="MonkeyTranslate" 
                className="h-24 w-auto rounded-lg object-contain" 
              />
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageSelector />
              
              <a
                href="https://ko-fi.com/dustindo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                <Coffee className="w-4 h-4" />
                {t('supportDevelopment')}
              </a>
              
              {apiKeyConfigured === false && (
                <button
                  onClick={() => setShowApiKeyModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg 
                    hover:bg-yellow-600 font-medium"
                >
                  <AlertCircle className="w-4 h-4" />
                  {t('configureApiKey')}
                </button>
              )}
              
              {apiKeyConfigured === true && (
                <div className="flex items-center gap-2 text-primary-100 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {t('apiConnected')}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Page list */}
      <PageList
        pages={pages}
        selectedPageId={selectedPageId}
        onSelectPage={setSelectedPageId}
        onDeletePage={handleDeletePage}
        isCollapsed={isPageListCollapsed}
        onToggleCollapse={() => setIsPageListCollapsed(!isPageListCollapsed)}
        onUploadClick={handleUploadClick}
        isUploading={uploadMutation.isPending}
      />

      {/* Main content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {selectedPage ? (
          <PageEditor page={selectedPage} onUpdatePage={handleUpdatePage} />
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-2xl w-full">
              {apiKeyConfigured === false && (
                <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                        {t('apiKeyNotConfigured')}
                      </p>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                        {t('apiKeyInstructions')}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <UploadZone onUpload={handleUpload} isUploading={uploadMutation.isPending} />
            </div>
          </div>
        )}
      </main>

      {/* Hidden file input for upload button */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {/* API Key Modal */}
      {showApiKeyModal && <ApiKeyModal onClose={() => setShowApiKeyModal(false)} />}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

