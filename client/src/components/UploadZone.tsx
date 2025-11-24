import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface UploadZoneProps {
  onUpload: (files: File[]) => void;
  isUploading: boolean;
}

export function UploadZone({ onUpload, isUploading }: UploadZoneProps) {
  const { t } = useLanguage();
  
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
    },
    disabled: isUploading,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
        transition-all duration-200
        ${
          isDragActive
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
        }
        ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <input {...getInputProps()} />
      
      <div className="flex flex-col items-center gap-4">
        {isDragActive ? (
          <>
            <ImageIcon className="w-16 h-16 text-primary-500" />
            <p className="text-lg font-medium text-primary-700 dark:text-primary-300">{t('dropImagesHereActive')}</p>
          </>
        ) : (
          <>
            <Upload className="w-16 h-16 text-gray-400 dark:text-gray-500" />
            <div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                {isUploading ? t('uploading') : t('dropImagesHere')}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('supportedFormats')}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('multipleUpload')}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

