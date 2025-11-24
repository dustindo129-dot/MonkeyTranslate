import { useState } from 'react';
import { Page } from '../types';
import { WorkPanel } from './WorkPanel';
import { ZoomableImage } from './ZoomableImage';
import { apiService } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Loader2, Scan, Wand2 } from 'lucide-react';

interface PageEditorProps {
  page: Page;
  onUpdatePage: (page: Page) => void;
}

export function PageEditor({ page, onUpdatePage }: PageEditorProps) {
  const { t } = useLanguage();
  const [isExtracting, setIsExtracting] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  const handleExtractText = async () => {
    setIsExtracting(true);
    try {
      const { regions } = await apiService.extractText(page.id);
      onUpdatePage({ ...page, regions });
    } catch (error) {
      console.error('Failed to extract text:', error);
      alert(t('extractError'));
    } finally {
      setIsExtracting(false);
    }
  };

  const handleUpdateRegion = (id: string, translated: string) => {
    const updatedRegions = page.regions.map((region) =>
      region.id === id ? { ...region, translated } : region
    );
    onUpdatePage({ ...page, regions: updatedRegions });
  };

  const handleDeleteRegion = (id: string) => {
    const updatedRegions = page.regions.filter((region) => region.id !== id);
    onUpdatePage({ ...page, regions: updatedRegions });
  };

  const handleAutoTranslate = async (targetLanguage: string) => {
    setIsTranslating(true);
    try {
      const texts = page.regions.map((r) => r.original);
      const { translations } = await apiService.translateTexts(texts, targetLanguage);

      const updatedRegions = page.regions.map((region, index) => ({
        ...region,
        translated: translations[index] || region.translated,
      }));

      onUpdatePage({ ...page, regions: updatedRegions });
    } catch (error) {
      console.error('Failed to translate:', error);
      alert(t('translateError'));
    } finally {
      setIsTranslating(false);
    }
  };

  const handleGenerateImage = async () => {
    // Prevent multiple concurrent generations
    if (isRendering) {
      return;
    }

    setIsRendering(true);
    try {
      const result = await apiService.renderImage(page.id, page.regions);
      onUpdatePage({ ...page, renderedImageUrl: result.imageUrl });
      // Force image reload
      setImageKey((prev) => prev + 1);
    } catch (error: any) {
      console.error('Failed to render image:', error);

      // Parse error from axios response if available
      let errorMessage = 'Unknown error';
      if (error?.response?.data?.details) {
        errorMessage = error.response.data.details;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      if (errorMessage.includes('exceeds pixel limit') || errorMessage.includes('Input image exceeds')) {
        alert(`${t('generateError')}\n\n${t('imageTooLarge')}`);
      } else if (errorMessage.includes('Failed to render translated image')) {
        alert(`${t('generateError')}\n\nDetails: ${errorMessage}`);
      } else {
        alert(t('generateError'));
      }
    } finally {
      setIsRendering(false);
    }
  };

  const handleDownload = () => {
    if (!page.renderedImageUrl) {
      alert(t('noImageAvailable'));
      return;
    }
    const link = document.createElement('a');
    link.href = apiService.getImageUrl(page.id, true);
    link.download = `translated-${page.filename}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hasTranslations = page.regions.some((r) => r.original !== r.translated);

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left side - Image preview */}
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        {/* Toolbar */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={handleExtractText}
              disabled={isExtracting}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700
                disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
            >
              {isExtracting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('extracting')}
                </>
              ) : (
                <>
                  <Scan className="w-4 h-4" />
                  {t('extractText')}
                </>
              )}
            </button>

            {page.regions.length > 0 && (
              <button
                onClick={handleGenerateImage}
                disabled={isRendering || !hasTranslations}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700
                  disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 font-medium transition-colors"
                title={!hasTranslations ? t('noTranslations') : t('generateWithTranslations')}
              >
                {isRendering ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('generating')}
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    {t('generateTranslatedImage')}
                  </>
                )}
              </button>
            )}
          </div>

          {page.regions.length > 0 && page.renderedImageUrl && (
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600
                flex items-center gap-2 font-medium"
            >
              <Download className="w-4 h-4" />
              {t('downloadRegeneratedImage')}
            </button>
          )}
        </div>

        {/* Image container - Three zones */}
        <div className="flex-1 overflow-auto p-2 flex gap-2 min-h-0">
          {/* Left zone - Original uploaded image */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 px-2">
              {t('originalImage')}
            </div>
            <div className="flex-1 overflow-auto flex items-center justify-center min-h-0">
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full w-full flex items-center justify-center">
                <ZoomableImage
                  src={apiService.getImageUrl(page.id)}
                  alt={page.filename}
                  className="w-full h-full flex items-center justify-center"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-300 dark:bg-gray-600"></div>

          {/* Middle zone - Work panel */}
          <div className="w-96 border-x border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col">
            <WorkPanel
              regions={page.regions}
              onUpdateRegion={handleUpdateRegion}
              onDeleteRegion={handleDeleteRegion}
              onAutoTranslate={handleAutoTranslate}
              isTranslating={isTranslating}
            />
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-300 dark:bg-gray-600"></div>

          {/* Right zone - Regenerated image */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 px-2 flex items-center gap-2">
              {t('regeneratedImage')}
              {isRendering && (
                <Loader2 className="w-3 h-3 animate-spin text-primary-600" />
              )}
            </div>
            <div className="flex-1 overflow-auto flex items-center justify-center min-h-0">
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full w-full flex items-center justify-center">
                {page.renderedImageUrl ? (
                  <>
                    <ZoomableImage
                      key={imageKey}
                      src={apiService.getImageUrl(page.id, true)}
                      alt={`${t('translatedTag')} ${page.filename}`}
                      className="w-full h-full flex items-center justify-center"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                      ✓ {t('translatedTag')}
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-400 dark:text-gray-500 p-8">
                    <Wand2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{t('noRegeneratedImage')}</p>
                    <p className="text-xs mt-1">{t('clickToGenerate')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

