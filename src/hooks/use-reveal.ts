import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },

      
      {
        threshold: 0.05, // Trigger as soon as 5% is visible
        rootMargin: "0px 0px 50px 0px", // Trigger 50px BEFORE it enters the viewport
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    visible,
    revealClasses: `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
  };
}
