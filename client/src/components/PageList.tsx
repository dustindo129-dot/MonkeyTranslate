import { Page } from '../types';
import { X, FileImage, ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { apiService } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

interface PageListProps {
  pages: Page[];
  selectedPageId: string | null;
  onSelectPage: (pageId: string) => void;
  onDeletePage: (pageId: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onUploadClick?: () => void;
  isUploading?: boolean;
}

export function PageList({ pages, selectedPageId, onSelectPage, onDeletePage, isCollapsed, onToggleCollapse, onUploadClick, isUploading }: PageListProps) {
  const { t } = useLanguage();

  // Don't show at all if no pages (original behavior)
  if (pages.length === 0) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className={`px-6 ${isCollapsed ? 'pt-4 pb-0' : 'py-4'}`}>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <FileImage className="w-4 h-4" />
            {t('pages')} ({pages.length})
          </h3>
          <button
            onClick={onToggleCollapse}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title={isCollapsed ? t('expandPages') : t('collapsePages')}
          >
            {isCollapsed ? (
              <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
        
        {!isCollapsed && (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {pages.map((page) => (
            <div
              key={page.id}
              className={`
                relative flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden cursor-pointer
                border-2 transition-all group
                ${
                  selectedPageId === page.id
                    ? 'border-primary-500 ring-2 ring-primary-200 dark:ring-primary-400/30'
                    : 'border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-400'
                }
              `}
              onClick={() => onSelectPage(page.id)}
            >
              <img
                src={apiService.getImageUrl(page.id)}
                alt={page.filename}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-2">
                <p className="text-xs text-white truncate font-medium">{page.filename}</p>
                {page.regions.length > 0 && (
                  <p className="text-xs text-white/80">{page.regions.length} {t('regions')}</p>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeletePage(page.id);
                }}
                className="absolute top-1 right-1 p-1.5 bg-white/95 text-gray-700 rounded-full
                  hover:bg-white transition-colors shadow-md z-10
                  flex items-center justify-center backdrop-blur-sm"
                title={t('deletePage')}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          
          {/* Upload placeholder */}
          {onUploadClick && (
            <div
              className="relative flex-shrink-0 w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 
                hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all cursor-pointer
                flex items-center justify-center bg-gray-50 dark:bg-gray-700/50"
              onClick={onUploadClick}
              title={t('uploadImages')}
            >
              {isUploading ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{t('uploading')}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <Plus className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 text-center px-2">{t('uploadImages')}</span>
                </div>
              )}
            </div>
          )}
          </div>
        )}
      </div>
    </div>
  );
}

