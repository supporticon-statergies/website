import { useState, useRef, lazy, Suspense } from "react";
import { toast } from "sonner";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

export const HeroSection = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (val: string): boolean => {
    const trimmed = val.trim();
    if (!trimmed) {
      setEmailError("Please enter your work email");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      setEmailError("Please enter a valid work email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleTryForFree = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const isValid = validateEmail(email);
    if (!isValid) {
      const err = !email.trim()
        ? "Please enter your work email address"
        : "Please enter a valid work email address (e.g. you@company.com)";
      setEmailError(err);
      toast.error(err);
      inputRef.current?.focus();
      return;
    }
    toast.success("Redirecting to HelpDude trial signup...");
    window.open(
      `https://helpdude-ai.supporticon.com/?email=${encodeURIComponent(email.trim())}`,
      "_blank"
    );
  };

  return (
    <section className="relative w-full bg-[#eaedf2] overflow-hidden">
      <div className="relative flex flex-col items-center text-center py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-20">
        
        {/* Centered content */}
        <div className="w-full max-w-[1400px] z-10 flex flex-col items-center text-center">
          {/* Attractive badge — centered above heading */}
          <div className="relative inline-flex items-center mb-6 group">
            {/* Glowing border ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3fae2a] via-[#00c6a7] to-[#3fae2a] opacity-70 blur-[6px] group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative inline-flex items-center gap-3 bg-white border border-[#c8edc2] px-6 py-3 rounded-full shadow-md">
              {/* Pulsing green dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3fae2a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3fae2a]" />
              </span>
              <span
                className="font-bold text-[15px] md:text-[16px] tracking-wide"
                style={{ background: "linear-gradient(90deg, #0f4a2c 0%, #3fae2a 50%, #00c6a7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                ✦ An AI-powered Customer Support platform
              </span>
            </div>
          </div>

          <h1 
            className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[1.15] mb-5 font-sans tracking-[-0.5px] text-[#10284a] max-w-[1250px] mx-auto"
            style={{ fontWeight: 600, fontFamily: "'Inter', sans-serif", letterSpacing: '-0.76px' }}
          >
            Making the customer <em className="not-italic text-[#3fae2a]" style={{ fontWeight: 600 }}>support effortless</em><br className="hidden md:block" /> for the customers and support teams.
          </h1>

          <p className="text-[#6b7a90] text-[17px] sm:text-[18px] md:text-[20px] leading-[1.6] mb-3 max-w-[1100px] mx-auto md:whitespace-nowrap">
            HelpDude help you deliver a consistent customer experiences across channels & languages.
          </p>

          <p className="text-[#334155] text-[16px] md:text-[18px] mb-8 max-w-[750px] mx-auto font-normal">
            An AI that knows when to{" "}
            <span className="relative inline-block font-semibold text-[#1e8e3e] px-1">
              <span className="absolute inset-0 bg-emerald-400/25 blur-md rounded-full -z-10 scale-125 pointer-events-none"></span>
              automate
            </span>{" "}
            and when to bring in a{" "}
            <span className="relative inline-block font-semibold text-[#0077ff] px-1">
              <span className="absolute inset-0 bg-sky-400/30 blur-md rounded-full -z-10 scale-125 pointer-events-none"></span>
              human.
            </span>
          </p>

          {/* Form container */}
          <div className="bg-[#e6f4e4] rounded-[18px] p-5 sm:p-[24px_30px] w-full max-w-[850px] shadow-sm mx-auto">
            <label htmlFor="hero-work-email" className="flex items-center justify-start gap-2.5 text-[15px] font-medium text-[#10284a] mb-2.5">
              <span>✉</span> Work email address
            </label>

            <form onSubmit={handleTryForFree} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <input
                  id="hero-work-email"
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) validateEmail(e.target.value);
                  }}
                  placeholder="you@company.com"
                  className={`w-full p-4 rounded-xl text-[16px] bg-white text-[#10284a] border outline-none transition-all ${
                    emailError
                      ? "border-red-400 focus:ring-2 focus:ring-red-300/40"
                      : "border-[#e3e9ee] focus:border-[#3fae2a] focus:ring-2 focus:ring-[#3fae2a]/20"
                  }`}
                />
                {emailError && (
                  <span className="absolute -bottom-5 left-1 text-[11px] font-semibold text-red-600 bg-white/95 px-1.5 py-0.5 rounded shadow-sm border border-red-200">
                    {emailError}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#0f4a2c] hover:bg-[#155e39] text-white font-semibold text-[17px] px-8 py-4 sm:py-0 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:brightness-110 active:scale-[0.98] whitespace-nowrap"
              >
                Try for free →
              </button>
            </form>

            <div className="flex items-center justify-center gap-2.5 my-4 text-[14px] md:text-[15px] text-[#10284a] font-normal">
              <span>🛡</span> 14-day free trial. No credit card required.
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowDemoDialog(true)}
                className="text-[#0f4a2c] font-semibold underline text-[15px] hover:text-[#3fae2a] transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Book a Demo →
              </button>
            </div>
          </div>

          <p className="text-[#6b7a90] text-[15px] mt-5 text-center mx-auto">
            Explore a smarter way to support your customers.
          </p>
        </div>

      </div>

      {showDemoDialog && (
        <Suspense fallback={null}>
          <RequestDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
        </Suspense>
      )}
    </section>
  );
};

export default HeroSection;
