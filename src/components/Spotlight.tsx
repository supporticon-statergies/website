import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export const Spotlight = ({ className }: SpotlightProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty(
      "background",
      `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--brand-blue) / 0.15), transparent 60%)`
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "pointer-events-none absolute inset-0 transition-[background] duration-300 will-change-transform",
        className
      )}
    />
  );
};

export default Spotlight;
