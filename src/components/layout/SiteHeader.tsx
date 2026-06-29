import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, lazy, Suspense, useRef } from "react";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));
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
  Search,
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
        label: "Blog",
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
  const [activeMenu, setActiveMenu] = useState<"product" | "resources" | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<"product" | "resources" | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeMenuRef = useRef<"product" | "resources" | null>(null);

  const openMenu = (menu: "product" | "resources") => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menu);
    activeMenuRef.current = menu;
  };

  const startCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      activeMenuRef.current = null;
    }, 500);
  };

  const cancelCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    setActiveMenu(null);
    activeMenuRef.current = null;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        activeMenuRef.current = null;
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const headerElement = document.querySelector("header");
      if (headerElement && !headerElement.contains(e.target as Node)) {
        setActiveMenu(null);
        activeMenuRef.current = null;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
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

  const renderProductMegaMenu = () => {
    return (
      <div className="grid grid-cols-12 gap-8 p-8 text-left">
        {/* Left Side: Showcase card for HelpDude */}
        <div className="col-span-8 flex flex-col justify-center">
          <Link
            to="/product"
            onClick={() => setActiveMenu(null)}
            className="group flex items-start gap-5 p-6 rounded-2xl transition-all duration-200 hover:bg-slate-50 hover:scale-[1.01]"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-emerald-50 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                HelpDude Platform
              </p>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-primary transition-colors">
                HelpDude
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 max-w-lg">
                Our flagship AI powered customer support platform, purpose-built for modern SaaS teams. It integrates unified knowledge search, AI-generated email responses, and automatic escalation routing.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                Explore HelpDude Platform
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Right Side: Featured content */}
        <div className="col-span-4 border-l border-slate-100/80 pl-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 text-[10px] font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3 h-3 animate-pulse" />
              Now Live
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
              HelpDude for Freshdesk
            </h4>
            <p className="text-[12px] text-slate-400 leading-relaxed mb-4">
              Our flagship plugin is now available in the Freshworks Marketplace. Start your 14-day free trial.
            </p>
          </div>
          <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
            <Link
              to="/product"
              onClick={() => setActiveMenu(null)}
              className="flex items-center justify-between text-xs font-bold text-emerald-700 hover:underline"
            >
              <span>Install on Freshdesk</span>
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const renderResourcesMegaMenu = () => {
    return (
      <div className="p-8 text-left">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400 mb-6">
          Learning & Knowledge
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            {
              to: "/sources",
              label: "Playbooks & Guides",
              desc: "In depth SaaS frameworks and PDFs.",
              icon: BookOpen,
              color: "text-indigo-500 bg-indigo-50",
            },
            {
              to: "/resources?tab=blogs",
              label: "Blog",
              desc: "Tips, guides, and support engineering trends.",
              icon: FileText,
              color: "text-sky-500 bg-sky-50",
            },
            {
              to: "/resources?tab=case-studies",
              label: "Case Studies",
              desc: "Success stories from real SaaS platforms.",
              icon: Users,
              color: "text-emerald-500 bg-emerald-50",
            },
            {
              to: "/resources?tab=videos",
              label: "Video Library",
              desc: "Product demonstrations and feature guides.",
              icon: Video,
              color: "text-rose-500 bg-rose-50",
            },
            {
              to: "/events",
              label: "Webinars & Events",
              desc: "Upcoming developer panels and webinars.",
              icon: CalendarDays,
              color: "text-amber-500 bg-amber-50",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.to}
                onClick={() => setActiveMenu(null)}
                className="group flex items-start gap-4 p-3.5 rounded-2xl transition-all duration-200 hover:bg-slate-50 hover:scale-[1.01]"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-[12px] text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
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

      {/* Full screen backdrop blur when mega-menu is active */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-slate-900/10 backdrop-blur-[2px] z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header 
        className="fixed top-0 inset-x-0 z-50"
        onMouseEnter={cancelCloseTimeout}
        onMouseLeave={startCloseTimeout}
      >
        {/* Inner pill — starts invisible, gains glass on scroll */}
        <div
          className={`mx-auto transition-all duration-500 ease-out relative ${
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
            onMouseEnter={() => {
              setActiveMenu(null);
              activeMenuRef.current = null;
            }}
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
                    onMouseEnter={() => {
                      if (n.subItems) {
                        const menuKey = n.label.toLowerCase() as "product" | "resources";
                        openMenu(menuKey);
                      } else {
                        setActiveMenu(null);
                        activeMenuRef.current = null;
                      }
                    }}
                    onClick={() => {
                      setActiveMenu(null);
                      activeMenuRef.current = null;
                    }}
                    className={({ isActive }) =>
                      `relative z-10 flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-tight rounded-full transition-all duration-200
                       ${
                         isActive || activeMenu === n.label.toLowerCase()
                           ? "text-primary bg-primary/10"
                           : "text-slate-700 hover:text-slate-900 hover:bg-black/5"
                       }`
                    }
                  >
                    <span>{n.label}</span>
                    {n.subItems && (
                      <ChevronDown className={`w-3 h-3 opacity-50 transition-transform duration-200 ${
                        activeMenu === n.label.toLowerCase() ? "rotate-180 text-primary opacity-100" : "group-hover:opacity-100"
                      }`} />
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
              onMouseEnter={() => {
                setActiveMenu(null);
                activeMenuRef.current = null;
              }}
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

        {/* Mega Menus for Desktop */}
        <AnimatePresence>
          {activeMenu && (
            <div
              className="absolute top-full left-0 right-0 z-50 pt-2"
              onMouseEnter={cancelCloseTimeout}
              onMouseLeave={startCloseTimeout}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] max-h-[85vh] overflow-y-auto w-full"
              >
                {activeMenu === "product" && renderProductMegaMenu()}
                {activeMenu === "resources" && renderResourcesMegaMenu()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
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
                    {n.subItems ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const menuKey = n.label.toLowerCase() as "product" | "resources";
                          setMobileExpandedMenu((prev) => (prev === menuKey ? null : menuKey));
                        }}
                        className={`flex w-full items-center justify-between py-3 px-4 text-[15px] font-semibold rounded-2xl transition-all duration-200 text-left ${
                          location.pathname === n.to || mobileExpandedMenu === n.label.toLowerCase()
                            ? "text-primary bg-primary/8"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                        }`}
                      >
                        <span>{n.label}</span>
                        <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-200 ${
                          mobileExpandedMenu === n.label.toLowerCase() ? "rotate-180 text-primary opacity-100" : ""
                        }`} />
                      </button>
                    ) : (
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
                    )}
                    {n.subItems && mobileExpandedMenu === n.label.toLowerCase() && (
                      <div className="pl-10 mt-0.5 flex flex-col gap-0.5 border-l-2 border-slate-100 ml-5">
                        {n.subItems.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <NavLink
                              key={sub.to}
                              to={sub.to}
                              className="flex items-center gap-2.5 py-2 px-3 text-sm rounded-xl text-slate-500 hover:text-primary hover:bg-primary/5 transition-all duration-150"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileExpandedMenu(null);
                              }}
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

        {demoDialogOpen && (
          <Suspense fallback={null}>
            <RequestDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
          </Suspense>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
