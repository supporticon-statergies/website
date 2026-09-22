import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
  }
}

export const VantaSection = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    
    const initVanta = () => {
      if (window.VANTA && window.VANTA.DOTS && vantaRef.current && !vantaEffect) {
        vantaEffect = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x60905
        });
      }
    };

    // Try immediately
    initVanta();

    // Also retry after a short delay in case scripts are still loading
    const timeout = setTimeout(initVanta, 500);

    return () => {
      clearTimeout(timeout);
      if (vantaEffect && vantaEffect.destroy) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="w-full min-h-[300px] md:min-h-[400px]"
    />
  );
};
