import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

interface PromoTemplate {
  id: number;
  file: string;
  title: string;
  alt: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryAction: "features" | "close";
  primaryBounds: { left: string; top: string; width: string; height: string };
  secondaryBounds: { left: string; top: string; width: string; height: string };
}

const TEMPLATES: PromoTemplate[] = [
  {
    id: 1,
    file: "Template-1.png",
    title: "Discover what HelpDude can do for your team",
    alt: "Discover what HelpDude can do for your team - HelpDude AI Features",
    primaryLabel: "Book a Demo",
    secondaryLabel: "Explore Features",
    secondaryAction: "features",
    primaryBounds: { left: "5.5%", top: "79.8%", width: "25.5%", height: "11.8%" },
    secondaryBounds: { left: "34.1%", top: "79.8%", width: "31.5%", height: "11.8%" },
  },
  {
    id: 2,
    file: "Template-2.png",
    title: "Still handling tickets manually?",
    alt: "Still handling tickets manually? - HelpDude Autopilot and Copilot",
    primaryLabel: "See It in Action",
    secondaryLabel: "Maybe Later",
    secondaryAction: "close",
    primaryBounds: { left: "5.8%", top: "79.6%", width: "27.8%", height: "11.5%" },
    secondaryBounds: { left: "36.6%", top: "79.6%", width: "25.0%", height: "11.5%" },
  },
  {
    id: 3,
    file: "Template-3.png",
    title: "Too many channels, one support team?",
    alt: "Too many channels, one support team? - HelpDude Omnichannel Support",
    primaryLabel: "Book a Demo",
    secondaryLabel: "Maybe Later",
    secondaryAction: "close",
    primaryBounds: { left: "5.2%", top: "79.9%", width: "27.9%", height: "11.4%" },
    secondaryBounds: { left: "36.2%", top: "79.9%", width: "25.1%", height: "11.4%" },
  },
  {
    id: 4,
    file: "Template-4.png",
    title: "Could HelpDude be the right fit for your company?",
    alt: "Could HelpDude be the right fit for your company? - HelpDude AI Support",
    primaryLabel: "Schedule a Demo",
    secondaryLabel: "Keep Exploring",
    secondaryAction: "close",
    primaryBounds: { left: "5.0%", top: "79.7%", width: "31.3%", height: "11.4%" },
    secondaryBounds: { left: "39.3%", top: "79.7%", width: "28.7%", height: "11.4%" },
  },
];

// Interval between unexpected pop-ups (default: 3 minutes)
const PROMO_INTERVAL_MS = 3 * 60 * 1000;

const getAssetUrl = (fileName: string) => {
  const clean = fileName.replace(/^\//, "");

  if (typeof window !== "undefined") {
    // Detect GitHub Pages repo subpath (e.g. /website/)
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const isGithubIo = window.location.hostname.includes("github.io");

    if (isGithubIo && pathSegments.length > 0) {
      return `/${pathSegments[0]}/${clean}`;
    }

    if (pathSegments.length > 0 && pathSegments[0] === "website") {
      return `/website/${clean}`;
    }
  }

  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${clean}`;
};

export function PromoModal() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Clear any stale sessionStorage keys from previous versions that blocked pop-ups
    try {
      sessionStorage.removeItem("hd_site_visit_start");
      sessionStorage.removeItem("hd_shown_milestones");
    } catch {
      // ignore
    }

    let intervalMs = PROMO_INTERVAL_MS;

    // Quick test options via URL:
    // e.g. ?promo=1 | 2 | 3 | 4 (shows immediately)
    // or ?promo_sec=10 (test with a 10s timer instead of waiting 3 minutes)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const promoParam = params.get("promo");
      if (promoParam) {
        const pNum = parseInt(promoParam, 10);
        if (pNum >= 1 && pNum <= TEMPLATES.length) {
          setCurrentIndex(pNum - 1);
        }
        setIsOpen(true);
      }

      const secParam = params.get("promo_sec") || params.get("promo_delay");
      if (secParam) {
        const sec = parseInt(secParam, 10);
        if (!isNaN(sec) && sec > 0) {
          intervalMs = sec * 1000;
          console.log(`[PromoModal] Test mode: timer interval set to ${sec}s`);
        }
      }
    }

    console.log(
      `[PromoModal] Active: next template will appear in ${intervalMs / 1000}s (3 mins)`
    );

    let templateIndex = 0;
    const timer = setInterval(() => {
      console.log(
        `[PromoModal] Triggering template ${templateIndex + 1} of ${TEMPLATES.length}:`,
        TEMPLATES[templateIndex].title
      );
      setCurrentIndex(templateIndex);
      setIsOpen(true);
      templateIndex = (templateIndex + 1) % TEMPLATES.length;
    }, intervalMs);

    // Testing helper in browser console: window.__triggerPromoModal(1 | 2 | 3 | 4)
    (window as any).__triggerPromoModal = (num = 1) => {
      const idx = Math.max(0, Math.min(TEMPLATES.length - 1, num - 1));
      setCurrentIndex(idx);
      setIsOpen(true);
    };

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleBookDemo = useCallback(() => {
    setIsOpen(false);
    setIsDemoOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const currentTemplate = TEMPLATES[currentIndex];

  const handleSecondaryClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(false);
    if (
      currentTemplate.secondaryAction === "features" ||
      currentTemplate.secondaryLabel.toLowerCase().includes("feature")
    ) {
      navigate("/features");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentTemplate, navigate]);

  const [imageSrc, setImageSrc] = useState<string>(() => getAssetUrl(currentTemplate.file));
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  useEffect(() => {
    setImageSrc(getAssetUrl(currentTemplate.file));
    setFallbackAttempt(0);
  }, [currentIndex]);

  const handleImageError = () => {
    const clean = currentTemplate.file.replace(/^\//, "");
    const fallbacks = [
      `/${clean}`,
      `/website/${clean}`,
      `./${clean}`,
      `${import.meta.env.BASE_URL || "/"}${clean}`,
    ];

    if (fallbackAttempt < fallbacks.length) {
      const nextUrl = fallbacks[fallbackAttempt];
      console.warn(`[PromoModal] Image failed to load, attempting fallback ${fallbackAttempt + 1}: ${nextUrl}`);
      setFallbackAttempt((prev) => prev + 1);
      setImageSrc(nextUrl);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) handleClose();
        }}
      >
        <DialogContent className="max-w-[94vw] sm:max-w-2xl md:max-w-[680px] p-0 overflow-hidden bg-transparent border-0 shadow-none focus-visible:outline-none">
          <DialogTitle className="sr-only">
            {currentTemplate.title} - Book a Demo with HelpDude
          </DialogTitle>

          <div className="relative flex flex-col items-center">
            {/* Template Card Showcase */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group select-none bg-white">
              {/* Close (X) button on top right of the card */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Template Graphic & Hotspot Container */}
              <div className="relative w-full">
                <img
                  src={imageSrc}
                  alt={currentTemplate.alt}
                  onError={handleImageError}
                  className="w-full h-auto block rounded-2xl select-none"
                  loading="eager"
                  draggable={false}
                />

                {/* Primary CTA (Book a Demo / See It in Action / Schedule a Demo) */}
                <button
                  type="button"
                  id="promo-primary-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookDemo();
                  }}
                  style={{
                    left: currentTemplate.primaryBounds.left,
                    top: currentTemplate.primaryBounds.top,
                    width: currentTemplate.primaryBounds.width,
                    height: currentTemplate.primaryBounds.height,
                  }}
                  className="absolute rounded-xl cursor-pointer bg-transparent hover:bg-white/10 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-20"
                  aria-label={currentTemplate.primaryLabel}
                  title={currentTemplate.primaryLabel}
                />

                {/* Secondary CTA (Explore Features / Maybe Later / Keep Exploring) */}
                <button
                  type="button"
                  id="promo-secondary-btn"
                  onClick={handleSecondaryClick}
                  style={{
                    left: currentTemplate.secondaryBounds.left,
                    top: currentTemplate.secondaryBounds.top,
                    width: currentTemplate.secondaryBounds.width,
                    height: currentTemplate.secondaryBounds.height,
                  }}
                  className="absolute rounded-xl cursor-pointer bg-transparent hover:bg-slate-900/5 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-20"
                  aria-label={currentTemplate.secondaryLabel}
                  title={currentTemplate.secondaryLabel}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {isDemoOpen && (
        <Suspense fallback={null}>
          <RequestDemoDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} />
        </Suspense>
      )}
    </>
  );
}
