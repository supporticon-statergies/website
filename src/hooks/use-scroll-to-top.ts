import { useEffect } from "react";

export const useScrollToTop = (dependencies: unknown[] = []) => {
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

