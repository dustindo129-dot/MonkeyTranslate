import { TextRegion } from '../types';
import { Undo2, Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RemovedRegionItemProps {
  region: TextRegion;
  index: number;
  onUndo?: (id: string) => void;
  onPermanentDelete?: (id: string) => void;
}

export function RemovedRegionItem({ region, index, onUndo, onPermanentDelete }: RemovedRegionItemProps) {
  const { t } = useLanguage();

  return (
    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg opacity-75">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-semibold text-red-600 dark:text-red-400">
          {t('region')} #{index + 1} - {t('removed')}
        </span>
        <div className="flex gap-2">
          {onUndo && (
            <button
              onClick={() => onUndo(region.id)}
              className="p-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              title={t('undo')}
            >
              <Undo2 className="w-4 h-4" />
            </button>
          )}
          {onPermanentDelete && (
            <button
              onClick={() => onPermanentDelete(region.id)}
              className="p-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
              title={t('permanentDelete')}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div>
          <label className="text-xs font-medium text-red-600 dark:text-red-400 mb-1 block">{t('originalText')}</label>
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded text-sm text-red-800 dark:text-red-200 min-h-[2rem] break-words">
            {region.original}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-red-600 dark:text-red-400 mb-1 block">{t('translatedText')}</label>
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded text-sm text-red-800 dark:text-red-200 min-h-[2rem] break-words">
            {region.translated}
          </div>
        </div>
      </div>
    </div>
  );
}
