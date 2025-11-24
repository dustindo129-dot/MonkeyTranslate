import { TextRegion } from '../types';
import { Edit2, Check } from 'lucide-react';
import { useState } from 'react';

interface TextRegionItemProps {
  region: TextRegion;
  index: number;
  onUpdate: (id: string, translated: string) => void;
  onHover?: (id: string | null) => void;
}

export function TextRegionItem({ region, index, onUpdate, onHover }: TextRegionItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(region.translated);

  const handleSave = () => {
    onUpdate(region.id, value);
    setIsEditing(false);
  };

  const hasChanged = region.original !== region.translated;

  return (
    <div
      className="p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
      onMouseEnter={() => onHover?.(region.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-semibold text-gray-500">Region #{index + 1}</span>
        {hasChanged && (
          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
            Modified
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">Original Text</label>
          <div className="p-2 bg-gray-50 rounded text-sm text-gray-800 min-h-[2.5rem] break-words">
            {region.original}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">
            Translated / Replacement Text
          </label>
          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-2 border border-primary-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[4rem]"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex-1 px-3 py-1.5 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 flex items-center justify-center gap-1"
                >
                  <Check className="w-3 h-3" />
                  Save
                </button>
                <button
                  onClick={() => {
                    setValue(region.translated);
                    setIsEditing(false);
                  }}
                  className="flex-1 px-3 py-1.5 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <div className="p-2 bg-primary-50 rounded text-sm text-gray-800 min-h-[2.5rem] break-words">
                {region.translated}
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="absolute top-2 right-2 p-1 bg-white border border-gray-200 rounded hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Edit translation"
              >
                <Edit2 className="w-3 h-3 text-gray-600" />
              </button>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-500">
          Position: {region.bbox.map((v) => (v * 100).toFixed(1) + '%').join(', ')}
        </div>
      </div>
    </div>
  );
}

