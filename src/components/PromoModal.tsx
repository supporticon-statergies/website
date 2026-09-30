import { useState, useEffect, lazy, Suspense } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useLocation } from "react-router-dom";
import { X, Sparkles } from "lucide-react";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [templateUrl, setTemplateUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    // 3 minutes timer
    const timer = setTimeout(() => {
      let nextTemplate = "";

      // Check if on a pricing page
      if (location.pathname.includes("/pricing")) {
        nextTemplate = "/template3.png";
      } else {
        // Toggle between template 1 and 2 based on past visits
        const visitCount = parseInt(localStorage.getItem("promoVisitCount") || "0", 10);
        if (visitCount % 2 === 0) {
          nextTemplate = "/template1.png";
        } else {
          nextTemplate = "/template2.png";
        }
        localStorage.setItem("promoVisitCount", (visitCount + 1).toString());
      }

      setTemplateUrl(nextTemplate);
      setIsOpen(true);
    }, 3 * 60 * 1000); // 3 minutes

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleBookDemo = () => {
    setIsOpen(false);
    setIsDemoOpen(true);
  };

  if (!templateUrl && !isDemoOpen) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-none shadow-none">
          <div className="relative flex flex-col items-center">

            {/* X close button — top-right corner above the image */}
            <DialogClose
              className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors shadow-lg"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </DialogClose>

            <img
              src={templateUrl}
              alt="Promotional offer - Click to Book a Demo"
              onClick={handleBookDemo}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl cursor-pointer hover:opacity-95 transition-opacity"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                if (img.src.endsWith(".png")) {
                  img.src = img.src.replace(".png", ".jpg");
                } else if (img.src.endsWith(".jpg")) {
                  img.src = img.src.replace(".jpg", ".jpeg");
                } else {
                  img.style.display = "none";
                }
              }}
            />

            {/* Action buttons below the image */}
            <div className="mt-3 flex items-center justify-center gap-3 w-full">
              <button
                onClick={handleBookDemo}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm shadow-xl shadow-red-500/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Book a Demo
              </button>

              <DialogClose className="px-6 py-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 font-semibold text-sm shadow-lg transition-all hover:shadow-xl">
                Cancel
              </DialogClose>
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
