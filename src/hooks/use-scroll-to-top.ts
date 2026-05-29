import { useEffect } from "react";

export const useScrollToTop = (dependencies: unknown[] = []) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
