import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Article {
  id: string | number;
  title: string;
  description: string;
}

interface ScrollSnapSectionProps {
  articles: Article[];
  leftPanel?: React.ReactNode;
}

const ANIMATION_DURATION = 0.55;

const ScrollSnapSection: React.FC<ScrollSnapSectionProps> = ({
  articles,
  leftPanel,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [direction, setDirection] = useState<"down" | "up">("down");

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (idx !== activeIndex) {
              setDirection(idx > activeIndex ? "down" : "up");
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      },
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [activeIndex, articles.length]);

  // Scroll snap polyfill for smoothness
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    el.style.scrollSnapType = "y mandatory";
    el.style.overflowY = "scroll";
    el.style.height = "100vh";
  }, []);

  // Responsive: disable split on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full h-screen flex flex-row">
      {/* Left Sticky Panel */}
      <div
        className={`hidden md:flex w-2/5 h-screen items-center justify-center sticky top-0 left-0 transition-transform duration-500 ease-in-out`}
        style={{
          zIndex: 2,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{
              duration: ANIMATION_DURATION,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="w-full flex items-center justify-center"
          >
            {leftPanel ? (
              leftPanel
            ) : (
              <div className="w-3/4 h-2/3 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center text-3xl font-bold text-gray-400 select-none">
                Panel {activeIndex + 1}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Right Scrollable Panel */}
      <div
        ref={containerRef}
        className={`flex-1 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white ${isMobile ? "w-full" : "w-3/5"}`}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {articles.map((article, idx) => (
          <div
            key={article.id}
            ref={(el) => (sectionRefs.current[idx] = el)}
            data-index={idx}
            className="h-screen w-full flex items-center justify-center snap-start"
            style={{ scrollSnapAlign: "start" }}
          >
            <AnimatePresence mode="wait">
              {activeIndex === idx && (
                <motion.div
                  key={article.id}
                  initial={{
                    opacity: 0,
                    y: direction === "down" ? 60 : -60,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: direction === "down" ? -40 : 40,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: ANIMATION_DURATION,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="w-full max-w-2xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center"
                >
                  <div className="text-2xl font-bold mb-4">{article.title}</div>
                  <div className="text-gray-500 text-lg mb-2">
                    {article.description}
                  </div>
                  <div className="mt-8 text-sm text-gray-400">
                    Article {idx + 1} of {articles.length}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSnapSection;
