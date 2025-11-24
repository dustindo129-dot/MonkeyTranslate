import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface UploadZoneProps {
  onUpload: (files: File[]) => void;
  isUploading: boolean;
}

export function UploadZone({ onUpload, isUploading }: UploadZoneProps) {
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
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
        }
        ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <input {...getInputProps()} />
      
      <div className="flex flex-col items-center gap-4">
        {isDragActive ? (
          <>
            <ImageIcon className="w-16 h-16 text-primary-500" />
            <p className="text-lg font-medium text-primary-700">Drop images here...</p>
          </>
        ) : (
          <>
            <Upload className="w-16 h-16 text-gray-400" />
            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">
                {isUploading ? 'Uploading...' : 'Drop images here or click to browse'}
              </p>
              <p className="text-sm text-gray-500">
                Supports PNG, JPG, GIF, and WEBP (up to 10MB per image)
              </p>
              <p className="text-sm text-gray-500 mt-1">You can upload multiple images at once</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

