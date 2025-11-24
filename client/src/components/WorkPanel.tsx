import { useState } from 'react';
import { TextRegion } from '../types';
import { TextRegionItem } from './TextRegionItem';
import { Languages, Loader2, Sparkles } from 'lucide-react';

interface WorkPanelProps {
  regions: TextRegion[];
  onUpdateRegion: (id: string, translated: string) => void;
  onAutoTranslate: (targetLanguage: string) => void;
  isTranslating: boolean;
}

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'vi', name: 'Vietnamese' },
];

export function WorkPanel({ regions, onUpdateRegion, onAutoTranslate, isTranslating }: WorkPanelProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const handleAutoTranslate = () => {
    const languageName = LANGUAGES.find((l) => l.code === selectedLanguage)?.name || selectedLanguage;
    onAutoTranslate(languageName);
  };

  if (regions.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        <div className="text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium">No text extracted yet</p>
          <p className="text-sm mt-2">Upload an image and click "Extract Text" to begin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header with auto-translate */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Languages className="w-4 h-4" />
          Text Regions ({regions.length})
        </h3>
        
        <div className="flex gap-2">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                Translating...
              </>
            ) : (
              <>
                <Languages className="w-4 h-4" />
                Auto-Translate
              </>
            )}
          </button>
        </div>
      </div>

      {/* Regions list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 scrollbar-thin">
        {regions.map((region, index) => (
          <TextRegionItem
            key={region.id}
            region={region}
            index={index}
            onUpdate={onUpdateRegion}
            onHover={setHoveredRegionId}
          />
        ))}
      </div>
    </div>
  );
}

