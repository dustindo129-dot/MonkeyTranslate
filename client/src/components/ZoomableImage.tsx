import { useState, useRef, useCallback, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className = '' }: ZoomableImageProps) {
  const { t } = useLanguage();
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const maxZoom = 5;
  const zoomStep = 0.2;

  // Reset position when scale changes to 1
  useEffect(() => {
    if (scale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  const constrainPosition = useCallback((x: number, y: number, currentScale: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const img = imageRef.current;
    
    if (!rect || !img) return { x, y };
    
    // Get image dimensions
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const scaledWidth = imgWidth * currentScale;
    const scaledHeight = imgHeight * currentScale;
    
    // If image fits entirely within container, center it
    if (scaledWidth <= rect.width && scaledHeight <= rect.height) {
      return { x: 0, y: 0 };
    }
    
    let constrainedX = x;
    let constrainedY = y;
    
    // Horizontal boundaries - only constrain if image is wider than container
    if (scaledWidth > rect.width) {
      const maxX = 0; // Left edge at container left
      const minX = (rect.width - scaledWidth) * currentScale; // Right edge at container right
      constrainedX = Math.min(Math.max(x, minX), maxX);
    }
    
    // Vertical boundaries - only constrain if image is taller than container
    if (scaledHeight > rect.height) {
      const maxY = 0; // Top edge at container top
      const minY = (rect.height - scaledHeight) * currentScale; // Bottom edge at container bottom
      constrainedY = Math.min(Math.max(y, minY), maxY);
    }
    
    // Return constrained position
    return {
      x: constrainedX,
      y: constrainedY
    };
  }, []);

  // Use native wheel event listener to prevent passive listener warning
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const rect = container.getBoundingClientRect();
      if (!rect) return;

      // Calculate zoom
      const delta = -e.deltaY * 0.01;
      const newScale = Math.min(Math.max(scale + delta, 1), maxZoom);
      
      if (newScale !== scale) {
        // Always zoom towards the center of the container
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const scaleRatio = newScale / scale;
        const newX = centerX - (centerX - position.x) * scaleRatio;
        const newY = centerY - (centerY - position.y) * scaleRatio;
        
        // Constrain the new position within boundaries
        const constrainedPos = constrainPosition(newX, newY, newScale);
        
        setScale(newScale);
        setPosition(constrainedPos);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [scale, position, constrainPosition, maxZoom]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0 && scale > 1) { // Left mouse button and zoomed in
      e.preventDefault();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  }, [position, scale]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      e.preventDefault();
      e.stopPropagation();
      
      // Calculate desired position with smoother movement
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Constrain position within boundaries
      const constrainedPos = constrainPosition(newX, newY, scale);
      setPosition(constrainedPos);
    }
  }, [isDragging, dragStart, scale, constrainPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const zoomIn = useCallback(() => {
    const newScale = Math.min(scale + zoomStep, maxZoom);
    if (newScale !== scale) {
      const constrainedPos = constrainPosition(position.x, position.y, newScale);
      setScale(newScale);
      setPosition(constrainedPos);
    }
  }, [scale, position, constrainPosition]);

  const zoomOut = useCallback(() => {
    const newScale = Math.max(scale - zoomStep, 1);
    if (newScale !== scale) {
      const constrainedPos = constrainPosition(position.x, position.y, newScale);
      setScale(newScale);
      setPosition(constrainedPos);
    }
  }, [scale, position, constrainPosition]);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-lg origin-top-left"
        style={{
          transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
          transformOrigin: '0 0',
          transition: isDragging ? 'none' : 'transform 0.2s ease-out'
        }}
        draggable={false}
        onDoubleClick={resetZoom}
      />
      
      {/* Zoom controls */}
      <div className="absolute bottom-2 right-2 flex flex-col gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-1 shadow-lg">
        <button
          onClick={zoomIn}
          disabled={scale >= maxZoom}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title={t('zoomIn')}
        >
          <Plus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        
        <div className="text-xs text-center text-gray-600 dark:text-gray-400 px-1 min-w-[3rem]">
          {Math.round(scale * 100)}%
        </div>
        
        <button
          onClick={zoomOut}
          disabled={scale <= 1}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title={t('zoomOut')}
        >
          <Minus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
      
      {/* Reset zoom hint */}
      {scale !== 1 && (
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {t('doubleClickToResetZoom')}
        </div>
      )}
    </div>
  );
}
