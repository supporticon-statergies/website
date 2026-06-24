import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export const Spotlight = ({ className }: SpotlightProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const onMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (!rectRef.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
    const rect = rectRef.current;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.setProperty(
          "background",
          `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--brand-green) / 0.15), transparent 60%)`,
        );
      }
    });
  };

  const onMouseLeave = () => {
    rectRef.current = null;
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "pointer-events-none absolute inset-0 transition-[background] duration-300 will-change-transform",
        className,
      )}
    />
  );
};

export default Spotlight;
