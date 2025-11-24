import { useState } from 'react';
import { Page, TextRegion } from '../types';
import { WorkPanel } from './WorkPanel';
import { apiService } from '../services/api';
import { Download, Loader2, Scan, Wand2 } from 'lucide-react';

interface PageEditorProps {
  page: Page;
  onUpdatePage: (page: Page) => void;
}

export function PageEditor({ page, onUpdatePage }: PageEditorProps) {
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
      alert('Failed to extract text. Please check your API key configuration.');
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
      alert('Failed to translate text. Please try again.');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleGenerateImage = async () => {
    setIsRendering(true);
    try {
      const result = await apiService.renderImage(page.id, page.regions);
      onUpdatePage({ ...page, renderedImageUrl: result.imageUrl });
      // Force image reload
      setImageKey((prev) => prev + 1);
      alert('Image generated successfully! The preview has been updated.');
    } catch (error) {
      console.error('Failed to render image:', error);
      alert('Failed to generate translated image. Please try again.');
    } finally {
      setIsRendering(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = apiService.getImageUrl(page.id);
    link.download = `translated-${page.filename}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hasTranslations = page.regions.some((r) => r.original !== r.translated);

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left side - Image preview */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
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
                  Extracting...
                </>
              ) : (
                <>
                  <Scan className="w-4 h-4" />
                  Extract Text
                </>
              )}
            </button>

            {page.regions.length > 0 && (
              <button
                onClick={handleGenerateImage}
                disabled={isRendering || !hasTranslations}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 
                  disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
                title={!hasTranslations ? 'No translations to apply' : 'Generate image with translations'}
              >
                {isRendering ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    Generate Translated Image
                  </>
                )}
              </button>
            )}
          </div>

          {page.regions.length > 0 && (
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 
                flex items-center gap-2 font-medium"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          )}
        </div>

        {/* Image container */}
        <div className="flex-1 overflow-auto p-8 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              key={imageKey}
              src={apiService.getImageUrl(page.id)}
              alt={page.filename}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {page.renderedImageUrl && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                ✓ Translated
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right side - Work panel */}
      <div className="w-96 border-l border-gray-200 bg-white flex flex-col">
        <WorkPanel
          regions={page.regions}
          onUpdateRegion={handleUpdateRegion}
          onAutoTranslate={handleAutoTranslate}
          isTranslating={isTranslating}
        />
      </div>
    </div>
  );
}

