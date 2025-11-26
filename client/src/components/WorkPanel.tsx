import { useState } from 'react';
import { TextRegion } from '../types';
import { TextRegionItem } from './TextRegionItem';
import { RemovedRegionItem } from './RemovedRegionItem';
import { Languages, Loader2, Sparkles } from 'lucide-react';
import { LANGUAGES } from '../i18n/translations';
import { useLanguage } from '../contexts/LanguageContext';

interface WorkPanelProps {
  regions: TextRegion[];
  onUpdateRegion: (id: string, translated: string) => void;
  onDeleteRegion?: (id: string) => void;
  onUndoRemoveRegion?: (id: string) => void;
  onPermanentDeleteRegion?: (id: string) => void;
  onAutoTranslate: (targetLanguage: string) => void;
  isTranslating: boolean;
}

export function WorkPanel({ regions, onUpdateRegion, onDeleteRegion, onUndoRemoveRegion, onPermanentDeleteRegion, onAutoTranslate, isTranslating }: WorkPanelProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { t } = useLanguage();

  const handleAutoTranslate = () => {
    const languageName = LANGUAGES.find((l) => l.code === selectedLanguage)?.name || selectedLanguage;
    onAutoTranslate(languageName);
  };

  const activeRegions = regions.filter(r => !r.status || r.status === 'active');
  const removedRegions = regions.filter(r => r.status === 'removed');

  if (activeRegions.length === 0 && removedRegions.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500">
        <div className="text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium">{t('noTextExtracted')}</p>
          <p className="text-sm mt-2">{t('uploadAndExtract')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header with auto-translate */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
          <Languages className="w-4 h-4" />
          {t('textRegions')} ({activeRegions.length})
        </h3>

        <div className="flex gap-2">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={isTranslating}
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleAutoTranslate}
            disabled={isTranslating}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700
              disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 text-sm font-medium"
          >
            {isTranslating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t('translating')}
              </>
            ) : (
              <>
                <Languages className="w-4 h-4" />
                {t('autoTranslate')}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Regions list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900 scrollbar-thin">
        {regions.map((region, index) => {
          if (region.status === 'removed') {
            return (
              <RemovedRegionItem
                key={region.id}
                region={region}
                index={index}
                onUndo={onUndoRemoveRegion}
                onPermanentDelete={onPermanentDeleteRegion}
              />
            );
          } else if (!region.status || region.status === 'active') {
            return (
              <TextRegionItem
                key={region.id}
                region={region}
                index={index}
                onUpdate={onUpdateRegion}
                onDelete={onDeleteRegion}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

