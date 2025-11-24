import { Page } from '../types';
import { X, FileImage } from 'lucide-react';
import { apiService } from '../services/api';

interface PageListProps {
  pages: Page[];
  selectedPageId: string | null;
  onSelectPage: (pageId: string) => void;
  onDeletePage: (pageId: string) => void;
}

export function PageList({ pages, selectedPageId, onSelectPage, onDeletePage }: PageListProps) {
  if (pages.length === 0) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="px-6 py-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <FileImage className="w-4 h-4" />
          Uploaded Pages ({pages.length})
        </h3>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {pages.map((page) => (
            <div
              key={page.id}
              className={`
                relative flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden cursor-pointer
                border-2 transition-all
                ${
                  selectedPageId === page.id
                    ? 'border-primary-500 ring-2 ring-primary-200'
                    : 'border-gray-200 hover:border-primary-300'
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
                  <p className="text-xs text-white/80">{page.regions.length} regions</p>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeletePage(page.id);
                }}
                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full
                  hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                title="Delete page"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

