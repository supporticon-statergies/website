import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

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

// Scheduled milestones: 3 mins -> Template 1, 6 mins -> Template 2, 9 mins -> Template 3
const SCHEDULE = [
  { index: 0, minute: 3, delayMs: 3 * 60 * 1000 },
  { index: 1, minute: 6, delayMs: 6 * 60 * 1000 },
  { index: 2, minute: 9, delayMs: 9 * 60 * 1000 },
];

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
    // Quick test bypass via URL query param: e.g. ?promo=1, ?promo=2, or ?promo=3
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const promoParam = params.get("promo");
      if (promoParam) {
        const pNum = parseInt(promoParam, 10);
        if (pNum >= 1 && pNum <= 3) {
          setCurrentIndex(pNum - 1);
          setIsOpen(true);
        } else {
          setIsOpen(true);
        }
      }
    }

    // Track total site visit start time in sessionStorage across route changes
    const now = Date.now();
    const storedStart = sessionStorage.getItem("hd_site_visit_start");
    let startTime = storedStart ? parseInt(storedStart, 10) : now;
    if (!storedStart || isNaN(startTime)) {
      sessionStorage.setItem("hd_site_visit_start", String(now));
      startTime = now;
    }

    // Helper to get milestones already shown in this browsing session
    const getShown = (): number[] => {
      try {
        return JSON.parse(sessionStorage.getItem("hd_shown_milestones") || "[]");
      } catch {
        return [];
      }
    };

    const timers: NodeJS.Timeout[] = [];

    // Schedule 3-minute, 6-minute, and 9-minute milestone triggers
    SCHEDULE.forEach((item) => {
      const shown = getShown();
      if (shown.includes(item.index)) return;

      const elapsed = now - startTime;
      const remainingTime = Math.max(0, item.delayMs - elapsed);

      const timer = setTimeout(() => {
        // Record milestone as shown so it doesn't duplicate
        const updatedShown = Array.from(new Set([...getShown(), item.index]));
        sessionStorage.setItem("hd_shown_milestones", JSON.stringify(updatedShown));

        setCurrentIndex(item.index);
        setIsOpen(true);
      }, remainingTime);

      timers.push(timer);
    });

    // Testing helper in browser console: window.__triggerPromoModal(1 | 2 | 3)
    (window as any).__triggerPromoModal = (num = 1) => {
      const idx = Math.max(0, Math.min(TEMPLATES.length - 1, num - 1));
      setCurrentIndex(idx);
      setIsOpen(true);
    };

    // Testing helper to reset all timers: window.__resetPromoTimer()
    (window as any).__resetPromoTimer = () => {
      sessionStorage.removeItem("hd_site_visit_start");
      sessionStorage.removeItem("hd_shown_milestones");
      console.log("[PromoModal] Timers reset. Refresh to start a new 3m, 6m, 9m session.");
    };

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  const handleBookDemo = useCallback(() => {
    setIsOpen(false);
    setIsDemoOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextTemplate = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TEMPLATES.length);
  }, []);

  const prevTemplate = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TEMPLATES.length) % TEMPLATES.length);
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

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevTemplate();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 opacity-75 group-hover:opacity-100 cursor-pointer"
                aria-label="Previous template"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextTemplate();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 opacity-75 group-hover:opacity-100 cursor-pointer"
                aria-label="Next template"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Clickable Template Image */}
              <img
                src={getAssetUrl(currentTemplate.file)}
                alt={currentTemplate.alt}
                onClick={handleBookDemo}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>

            {/* Template Selector Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-3.5">
              {TEMPLATES.map((tmpl, idx) => (
                <button
                  key={tmpl.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View template ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 shadow-sm"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                  style={{
                    backgroundColor: idx === currentIndex ? "#93D152" : undefined,
                  }}
                />
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-3.5 flex items-center justify-center gap-3 w-full">
              <button
                onClick={handleBookDemo}
                className="px-7 py-3 rounded-full text-white font-bold text-sm shadow-xl transition-all duration-200 hover:scale-105 hover:brightness-110 flex items-center gap-2 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #1A7FB5 0%, #157ea8 45%, #93D152 100%)",
                  boxShadow: "0 10px 25px -5px rgba(26, 127, 181, 0.4)",
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                Book A Demo
              </button>

              <button
                onClick={handleClose}
                className="px-5 py-3 rounded-full bg-white/90 hover:bg-white text-slate-700 font-semibold text-sm shadow-md transition-all hover:shadow-lg backdrop-blur-md cursor-pointer"
              >
                Maybe Later
              </button>
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
