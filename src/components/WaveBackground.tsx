import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Minimal ambient background — soft radial glows that add depth
 * without competing with content. Keeps the premium "breathing" feel.
 */
export const WaveBackground = () => {
  const isMobile = useIsMobile();
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      {/* Top-right warm glow */}
      <div
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(209,250,229,0.55) 0%, rgba(167,243,208,0.25) 45%, transparent 70%)",
          animation: isMobile ? "none" : "wave-breathe 20s ease-in-out infinite",
        }}
      />

      {/* Top-left cool blue tint */}
      <div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(186,230,255,0.4) 0%, rgba(147,197,253,0.15) 50%, transparent 70%)",
          animation: isMobile ? "none" : "wave-float-1 28s ease-in-out infinite",
        }}
      />

      {/* Mid-page center subtle warmth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(240,253,244,0.45) 0%, transparent 65%)",
          animation: isMobile ? "none" : "wave-float-2 35s ease-in-out infinite",
        }}
      />

      {/* Bottom-left green accent */}
      <div
        className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(187,247,208,0.35) 0%, transparent 65%)",
          animation: isMobile ? "none" : "wave-breathe 24s ease-in-out infinite reverse",
        }}
      />

      {/* Soft vignette to keep edges clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />
    </div>
  );
};

export default WaveBackground;
