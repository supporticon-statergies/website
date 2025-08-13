import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string; // applied to the img itself
}

export default function ImageWithLoader({ className, onLoad, onError, alt, ...imgProps }: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true);
    onLoad?.(e);
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true); // hide loader even if error
    onError?.(e);
  };

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16 rounded-full bg-background shadow-lg flex items-center justify-center">
              <img src="/favicon.ico" alt="Help Dude logo" className="h-8 w-8" />
              <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-primary/30" />
              <div className="pointer-events-none absolute inset-0 rounded-full border-t-2 border-primary animate-[spin_1.2s_linear_infinite]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary/90 animate-bounce [animation-delay:-0.2s]" />
              <span className="h-2 w-2 rounded-full bg-primary/70 animate-bounce" />
              <span className="h-2 w-2 rounded-full bg-primary/50 animate-bounce [animation-delay:0.2s]" />
            </div>
          </div>
        </div>
      )}

      <img
        {...imgProps}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </>
  );
}
