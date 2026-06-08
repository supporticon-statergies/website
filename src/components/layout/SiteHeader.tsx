import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import {
  Menu,
  X,
  FileText,
  BookOpen,
  Users,
  Video,
  CalendarDays,
  Package,
  CreditCard,
  Sparkles,
  Brain,
  Home,
  Zap,
  Info,
  ChevronDown,
} from "lucide-react";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import supporticonLogoIcon from "@/assets/supporticon_logo.png";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/features", label: "Features", icon: Zap },
  {
    to: "/product",
    label: "Product",
    icon: Package,
    subItems: [
      {
        to: "/product",
        label: "HelpDude",
        desc: "AI powered helpdesk platform",
        icon: Package,
      },
    ],
  },
  {
    to: "/resources",
    label: "Resources",
    icon: BookOpen,
    subItems: [
      {
        to: "/sources",
        label: "Sources",
        desc: "In depth playbooks to download",
        icon: BookOpen,
      },
      {
        to: "/resources?tab=blogs",
        label: "Blogs",
        desc: "Tips, guides & best practices",
        icon: FileText,
      },
      {
        to: "/resources?tab=case-studies",
        label: "Case Studies",
        desc: "Real world success stories",
        icon: Users,
      },
      {
        to: "/resources?tab=videos",
        label: "Videos",
        desc: "Demos & product walkthroughs",
        icon: Video,
      },
      {
        to: "/events",
        label: "Events",
        desc: "Webinars & community meetups",
        icon: CalendarDays,
      },
    ],
  },
  { to: "/pricing", label: "Pricing", icon: CreditCard },
  { to: "/about", label: "About", icon: Info },
];

export const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isNavigatingHome, setIsNavigatingHome] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setIsNavigatingHome(true);
    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
      setTimeout(() => setIsNavigatingHome(false), 100);
    }, 500);
  };

  return (
    <>
      {/* Page-transition overlay */}
      <AnimatePresence>
        {isNavigatingHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 border-[3px] border-transparent border-t-emerald-500 border-r-emerald-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 border-[2px] border-transparent border-b-green-400 border-l-green-400 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.7, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="w-9 h-9 flex items-center justify-center absolute"
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src={supporticonLogoIcon}
                    alt="Loading"
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-7 text-slate-400 font-bold tracking-[0.22em] text-[10px] uppercase"
              >
                Loading
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50">
        {/* Inner pill — starts invisible, gains glass on scroll */}
        <div
          className={`mx-auto transition-all duration-500 ease-out ${
            scrolled
              ? "max-w-5xl mt-3 rounded-2xl bg-white/80 backdrop-blur-2xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-white/60"
              : "max-w-7xl mt-0 rounded-none bg-transparent backdrop-blur-none shadow-none border-transparent"
          }`}
        >
        <div className="flex h-[64px] items-center justify-between px-5 md:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            aria-label="Supporticon home"
            className="flex items-center gap-2 mr-8 transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src={supporticonUploads.logo}
              alt="Supporticon logo"
              className="h-10 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="main"
            className="hidden gap-1 md:flex h-full items-center relative"
          >
            {nav.map((n) => (
              <div
                key={n.to}
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredPath(n.to)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <div className="relative group flex items-center h-full">
                  <NavLink
                    to={n.to}
                    end={n.to === "/"}
                    className={({ isActive }) =>
                      `relative z-10 flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-tight rounded-full transition-all duration-200
                       ${
                         isActive
                           ? "text-primary bg-primary/10"
                           : "text-slate-700 hover:text-slate-900 hover:bg-black/5"
                       }`
                    }
                  >
                    <span>{n.label}</span>
                    {n.subItems && (
                      <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </NavLink>

                  {/* Animated hover bg pill */}
                  <AnimatePresence>
                    {hoveredPath === n.to && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-slate-100/80 rounded-full -z-[1]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Dropdown */}
                  {n.subItems && (
                    <div className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 hidden group-hover:block z-[60] pt-3 min-w-[270px]">
                      <div className="bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-2">
                        <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Explore {n.label}
                        </p>
                        <div className="grid gap-0.5">
                          {n.subItems.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <NavLink
                                key={sub.to}
                                to={sub.to}
                                className="flex items-start gap-3 p-3 rounded-xl transition-all duration-150 hover:bg-slate-50 hover:translate-x-0.5"
                              >
                                <div className="mt-0.5 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/10">
                                  <SubIcon className="w-4 h-4 text-slate-400" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-slate-700 leading-none mb-0.5">
                                    {sub.label}
                                  </p>
                                  {sub.desc && (
                                    <p className="text-[11px] text-slate-400 leading-tight">
                                      {sub.desc}
                                    </p>
                                  )}
                                </div>
                              </NavLink>
                            );
                          })}
                        </div>
                        <div className="mt-1.5 p-1.5 bg-slate-50 rounded-xl border border-slate-100/80">
                          <Link
                            to="/product"
                            className="flex items-center justify-between px-2.5 py-1.5 text-[11px] font-semibold text-primary hover:underline"
                          >
                            <span>Get started with Supporticon</span>
                            <Sparkles className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden rounded-full w-10 h-10 p-0 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>

            <Button
              variant="hero"
              size="sm"
              aria-label="Book a demo"
              className="hidden sm:inline-flex rounded-full px-5 font-bold shadow-md shadow-primary/30 hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://zbooking.in/PoPU8",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Book Demo
            </Button>
          </div>{/* end right-actions */}
        </div>{/* end flex row */}
        </div>{/* end pill wrapper */}

        {/* Mobile menu — floats below the pill */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mx-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-white/70 overflow-hidden"
            >
              <nav className="px-4 py-5 space-y-1">
                {nav.map((n) => (
                  <div key={n.to} className="flex flex-col">
                    <NavLink
                      to={n.to}
                      end={n.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 py-3 px-4 text-[15px] font-semibold rounded-2xl transition-all duration-200 ${
                          isActive
                            ? "text-primary bg-primary/8"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {n.label}
                    </NavLink>
                    {n.subItems && (
                      <div className="pl-10 mt-0.5 flex flex-col gap-0.5 border-l-2 border-slate-100 ml-5">
                        {n.subItems.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <NavLink
                              key={sub.to}
                              to={sub.to}
                              className="flex items-center gap-2.5 py-2 px-3 text-sm rounded-xl text-slate-500 hover:text-primary hover:bg-primary/5 transition-all duration-150"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <SubIcon className="w-3.5 h-3.5 opacity-70" />
                              {sub.label}
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 pb-1">
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full rounded-full font-bold"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.open("https://zbooking.in/PoPU8", "_blank", "noopener,noreferrer");
                    }}
                  >
                    Book Demo
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <RequestDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
      </header>
    </>
  );
};

export default SiteHeader;
