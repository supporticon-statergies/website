import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

const TEMPLATES = [
  {
    id: 1,
    file: "Template_1.png",
    title: "How Many Tickets Could AI Resolve for You?",
    alt: "How Many Tickets Could AI Resolve for You? - HelpDude Autopilot",
  },
  {
    id: 2,
    file: "Template_2.png",
    title: "Ready to Spend Less Time on Manual Tickets?",
    alt: "Ready to Spend Less Time on Manual Tickets? - HelpDude Autopilot and Copilot",
  },
  {
    id: 3,
    file: "Template_3.png",
    title: "How Much of Your Support Could You Automate?",
    alt: "How Much of Your Support Could You Automate? - HelpDude AI",
  },
];

// Interval between unexpected pop-ups (default: 3 minutes)
const PROMO_INTERVAL_MS = 3 * 60 * 1000;

const getAssetUrl = (fileName: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${fileName.replace(/^\//, "")}`;
};

export function PromoModal() {
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
    // e.g. ?promo=1 | 2 | 3 (shows immediately)
    // or ?promo_sec=10 (test with a 10s timer instead of waiting 3 minutes)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const promoParam = params.get("promo");
      if (promoParam) {
        const pNum = parseInt(promoParam, 10);
        if (pNum >= 1 && pNum <= 3) {
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
      `[PromoModal] Active: next template will appear unexpectedly in ${intervalMs / 1000}s (3 mins)`
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

    // Testing helper in browser console: window.__triggerPromoModal(1 | 2 | 3)
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
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group select-none">
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
                src={getAssetUrl(currentTemplate.file)}
                alt={currentTemplate.alt}
                onClick={handleBookDemo}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              />
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
