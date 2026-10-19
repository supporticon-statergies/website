import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

const TEMPLATES = [
  {
    id: 1,
    file: "Template-1.png",
    title: "Discover what HelpDude can do for your team",
    alt: "Discover what HelpDude can do for your team - HelpDude AI Features",
    primaryLabel: "Book a Demo",
    secondaryLabel: "Explore Features",
    secondaryAction: "features",
  },
  {
    id: 2,
    file: "Template-2.png",
    title: "Still handling tickets manually?",
    alt: "Still handling tickets manually? - HelpDude Autopilot and Copilot",
    primaryLabel: "See It in Action",
    secondaryLabel: "Maybe Later",
    secondaryAction: "close",
  },
  {
    id: 3,
    file: "Template-3.png",
    title: "Too many channels, one support team?",
    alt: "Too many channels, one support team? - HelpDude Omnichannel Support",
    primaryLabel: "Book a Demo",
    secondaryLabel: "Maybe Later",
    secondaryAction: "close",
  },
  {
    id: 4,
    file: "Template-4.png",
    title: "Could HelpDude be the right fit for your company?",
    alt: "Could HelpDude be the right fit for your company? - HelpDude AI Support",
    primaryLabel: "Schedule a Demo",
    secondaryLabel: "Keep Exploring",
    secondaryAction: "close",
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
    setIsOpen(false);
    if (currentTemplate.secondaryAction === "features") {
      navigate("/features");
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
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group select-none bg-white min-h-[300px] flex items-center justify-center">
              {/* Close (X) button on top right of the card */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Clickable Template Image */}
              <img
                src={imageSrc}
                alt={currentTemplate.alt}
                onClick={handleBookDemo}
                onError={handleImageError}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01] block"
                loading="eager"
              />

              {/* Clickable Action Hotspots over the buttons in the graphic */}
              <div
                className="absolute bottom-[6%] left-[5%] right-[5%] h-[16%] flex gap-4 pointer-events-auto z-20"
                style={{ maxWidth: "600px" }}
              >
                {/* Primary CTA (Book a Demo / See It in Action / Schedule a Demo) */}
                <button
                  type="button"
                  onClick={handleBookDemo}
                  className="w-[45%] h-full rounded-xl cursor-pointer bg-transparent hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
                  aria-label={currentTemplate.primaryLabel}
                  title={currentTemplate.primaryLabel}
                />

                {/* Secondary CTA (Explore Features / Maybe Later / Keep Exploring) */}
                <button
                  type="button"
                  onClick={handleSecondaryClick}
                  className="w-[45%] h-full rounded-xl cursor-pointer bg-transparent hover:bg-slate-900/5 active:scale-95 transition-all focus:outline-none"
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
