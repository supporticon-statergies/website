import React, { useState } from "react";
import { X } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (isZoomed) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out p-4 animate-in fade-in duration-200"
        onClick={handleZoom}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(false);
          }}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Close zoom view"
        >
          <X className="h-6 w-6" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] object-contain scale-100 animate-in zoom-in-105 duration-300"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-zoom-in transition-all duration-200 hover:scale-[1.02] ${className}`}
      onClick={handleZoom}
    />
  );
};

export default ImageZoom;
