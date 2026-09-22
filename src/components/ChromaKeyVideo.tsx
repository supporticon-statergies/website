import React, { useRef, useEffect, useState } from "react";

interface ChromaKeyVideoProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  tolerance?: number; // 0 to 255
  keyColor?: [number, number, number]; // RGB key color, e.g. [0, 255, 0] for green
  autoDetectKey?: boolean; // if true, samples corner pixels to find background color
  playing?: boolean;
  onLoaded?: (active: boolean) => void;
  /** Set false to skip chroma-key canvas processing (use for pre-keyed transparent .webm) */
  chromaKey?: boolean;
  /** Whether the video should be muted. Defaults to true for safety with autoplay policies. */
  muted?: boolean;
  /** Optional ref forwarded to the underlying <video> element (only used when chromaKey=false) */
  videoRef?: React.MutableRefObject<HTMLVideoElement | null>;
  /** Whether the video should loop. Defaults to true. */
  loop?: boolean;
}

export const ChromaKeyVideo: React.FC<ChromaKeyVideoProps> = ({
  src,
  fallbackSrc,
  className = "",
  tolerance = 45,
  keyColor = [0, 255, 0],
  autoDetectKey = true,
  playing = true,
  onLoaded,
  chromaKey = true,
  muted = true,
  videoRef: externalVideoRef,
  loop = true,
}) => {
  /* ── Transparent-video fast path (pre-keyed .webm) ─────────────── */
  if (!chromaKey) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <video
          ref={externalVideoRef}
          src={src}
          preload="auto"
          loop={loop}
          muted={muted}
          playsInline
          autoPlay={playing}
          className="w-full h-full object-cover"
          style={{ background: "transparent" }}
          onLoadedData={() => onLoaded?.(true)}
          onError={() => {
            console.error("Error loading video src:", src);
            onLoaded?.(false);
          }}
        />
        {fallbackSrc && (
          <img
            src={fallbackSrc}
            alt="Avatar Fallback"
            className="absolute inset-0 w-full h-full object-cover object-top"
            draggable={false}
            style={{ display: "none" }}
          />
        )}
      </div>
    );
  }
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const detectedKeyColorRef = useRef<[number, number, number] | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.play().catch((err) => {
        console.warn("Video play interrupted or blocked:", err);
      });
    } else {
      video.pause();
    }
  }, [playing, src]);

  useEffect(() => {
    let animationFrameId: number;
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const processFrame = () => {
      if (video.paused || video.ended || videoError) {
        animationFrameId = requestAnimationFrame(processFrame);
        return;
      }

      const width = video.videoWidth;
      const height = video.videoHeight;

      if (width && height) {
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }

        ctx.drawImage(video, 0, 0, width, height);

        try {
          const frame = ctx.getImageData(0, 0, width, height);
          const data = frame.data;
          const len = data.length;

          // 1. Determine key color
          let targetR = keyColor[0];
          let targetG = keyColor[1];
          let targetB = keyColor[2];

          if (autoDetectKey) {
            if (!detectedKeyColorRef.current && len >= 4) {
              // Sample top-left corner color
              const r = data[0];
              const g = data[1];
              const b = data[2];
              // Avoid pure black on startup frames if video hasn't rendered content yet
              if (r > 5 || g > 5 || b > 5) {
                detectedKeyColorRef.current = [r, g, b];
              }
            }
            if (detectedKeyColorRef.current) {
              [targetR, targetG, targetB] = detectedKeyColorRef.current;
            }
          }

          // 2. Perform Chroma Keying (background removal)
          for (let i = 0; i < len; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Calculate color distance (Euclidean distance in RGB space)
            const diffR = r - targetR;
            const diffG = g - targetG;
            const diffB = b - targetB;
            const distance = Math.sqrt(diffR * diffR + diffG * diffG + diffB * diffB);

            // Special green screen handling if target color matches green signature
            const isGreenScreen = targetG > targetR && targetG > targetB && targetG > 80;
            if (isGreenScreen) {
              // green keying heuristics
              const greenness = g - Math.max(r, b);
              if (greenness > 12 || distance < tolerance) {
                if (greenness > 24 || distance < tolerance - 10) {
                  data[i + 3] = 0; // transparent
                } else {
                  // semi-transparent blend for soft edges
                  const ratio = (distance - (tolerance - 10)) / 10;
                  data[i + 3] = Math.max(0, Math.min(255, ratio * 255));
                }
              }
            } else {
              // general chroma key color distance keying (works for black, white, gray, etc.)
              if (distance < tolerance) {
                if (distance < tolerance - 15) {
                  data[i + 3] = 0; // transparent
                } else {
                  // semi-transparent blend for soft edges
                  const ratio = (distance - (tolerance - 15)) / 15;
                  data[i + 3] = Math.max(0, Math.min(255, ratio * 255));
                }
              }
            }
          }

          ctx.putImageData(frame, 0, 0);
        } catch (e) {
          console.error("Failed to process video frame:", e);
        }
      }

      animationFrameId = requestAnimationFrame(processFrame);
    };

    animationFrameId = requestAnimationFrame(processFrame);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [keyColor, autoDetectKey, tolerance, videoError, videoLoaded]);

  // Reset detected key color if source changes
  useEffect(() => {
    detectedKeyColorRef.current = null;
    setVideoError(false);
    setVideoLoaded(false);
  }, [src]);

  // Trigger parent callback when video starts successfully
  useEffect(() => {
    if (videoLoaded && !videoError) {
      onLoaded?.(true);
    }
  }, [videoLoaded, videoError, onLoaded]);

  if (videoError && fallbackSrc) {
    return (
      <img
        src={fallbackSrc}
        alt="Avatar Fallback"
        className={`${className} object-cover`}
        draggable={false}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Hidden video element used to decode frames */}
      <video
        ref={videoRef}
        src={src}
        preload="auto"
        loop={loop}
        muted={muted}
        playsInline
        autoPlay
        style={{ display: "none" }}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => {
          console.error("Error loading video src:", src);
          setVideoError(true);
          onLoaded?.(false);
        }}
      />

      {/* Canvas rendering the background-removed video */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{
          display: videoLoaded ? "block" : "none",
          transform: "scale(1.04)", // slightly scale up to crop any edge artifacts
        }}
      />

      {/* Fallback image shown during load or if video fails */}
      {(!videoLoaded || videoError) && fallbackSrc && (
        <img
          src={fallbackSrc}
          alt="Avatar Loading Fallback"
          className="absolute inset-0 w-full h-full object-cover object-top animate-pulse"
          draggable={false}
        />
      )}
    </div>
  );
};
