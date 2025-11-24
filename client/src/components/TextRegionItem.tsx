import { TextRegion } from '../types';
import { Edit2, Check, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TextRegionItemProps {
  region: TextRegion;
  index: number;
  onUpdate: (id: string, translated: string) => void;
  onDelete?: (id: string) => void;
  onHover?: (id: string | null) => void;
}

export function TextRegionItem({ region, index, onUpdate, onDelete, onHover }: TextRegionItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(region.translated);
  const { t } = useLanguage();

  const handleSave = () => {
    onUpdate(region.id, value);
    setIsEditing(false);
  };

  const hasChanged = region.original !== region.translated;

  return (
    <div
      className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-400 transition-colors relative"
      onMouseEnter={() => onHover?.(region.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      {/* X button in top right corner */}
      {onDelete && (
        <button
          onClick={() => onDelete(region.id)}
          className="absolute top-2 right-2 p-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors opacity-70 hover:opacity-100 z-10"
          title={t('removeRegion')}
        >
          <X className="w-4 h-4" />
        </button>
      )}
      
      <div className="flex items-start justify-between mb-2 pr-6">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{t('region')} #{index + 1}</span>
        {hasChanged && (
          <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded-full">
            {t('modified')}
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 block">{t('originalText')}</label>
          <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm text-gray-800 dark:text-gray-200 min-h-[2.5rem] break-words">
            {region.original}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 block">
            {t('translatedText')}
          </label>
          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-2 border border-primary-300 dark:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[4rem]"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex-1 px-3 py-1.5 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 flex items-center justify-center gap-1"
                >
                  <Check className="w-3 h-3" />
                  {t('save')}
                </button>
                <button
                  onClick={() => {
                    setValue(region.translated);
                    setIsEditing(false);
                  }}
                  className="flex-1 px-3 py-1.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  {t('cancel')}
                </button>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded text-sm text-gray-800 dark:text-gray-200 min-h-[2.5rem] break-words">
                {region.translated}
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                title={t('editTranslation')}
              >
                <Edit2 className="w-3 h-3 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

