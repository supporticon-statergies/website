import { Link } from "react-router-dom";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import { Mail, MapPin, Phone, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
  }
}

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Product", path: "/product" },
  { name: "Resources", path: "/resources" },
  { name: "FAQ's", path: "/faq" },
  { name: "About", path: "/about" },
];

export const SiteFooter = () => {
  const vantaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    
    const initVanta = () => {
      if (window.VANTA && window.VANTA.DOTS && vantaRef.current && !vantaEffect) {
        vantaEffect = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // White background with pistachio/emerald green dots
          backgroundColor: 0x060905,
          color: 0x6ee7b7,      // emerald-300 (light pistachio)
          color2: 0xa7f3d0,     // emerald-200 (even lighter pistachio)
          size: 3.00,
          spacing: 35.00,
        });
      }
    };

    // Try immediately
    initVanta();

    // Also retry after a short delay in case scripts are still loading
    const timeout = setTimeout(initVanta, 500);

    return () => {
      clearTimeout(timeout);
      if (vantaEffect && vantaEffect.destroy) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden text-white bg-[#060905]">
      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent z-10" />

      {/* Vanta Background Container - full width */}
      <div className="absolute inset-y-0 right-0 w-full pointer-events-none z-0">
        <div ref={vantaRef as React.RefObject<HTMLDivElement>} className="w-full h-[120%] -mt-[5%]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Main grid: Brand | Quick Links | Head Office */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={supporticonUploads.logo}
                alt="Supporticon logo"
                className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-[220px]">
              Empowering support teams with AI that works for people, not just metrics.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5 mt-1">
              {[
                { 
                  icon: Linkedin, 
                  label: "LinkedIn", 
                  href: "https://www.linkedin.com/company/106249765/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BGfhHwxNXTL%2Buq%2BfN3HFQjQ%3D%3D" 
                },
                { 
                  icon: Instagram, 
                  label: "Instagram", 
                  href: "https://www.instagram.com/supporticon/" 
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12 }}
                  className="w-9 h-9 rounded-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5 -ml-8">
            <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-sm text-white hover:text-emerald-300 transition-colors duration-200"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Head Office */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
              Head Office
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-white leading-relaxed">
                  7-14/4, Madam Sandhu,
                  <br />
                  Tharamangalam, Salem,
                  <br />
                  TamilNadu, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:founder@supporticon.com"
                  className="text-sm text-white hover:text-emerald-300 transition-colors duration-200"
                >
                  founder@supporticon.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-white">+91 866 734 7679</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-emerald-800/60" />

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-white/80 font-medium">
            Copyright &copy; 2025 supporticon.com. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/legal"
              className="text-xs text-white/80 hover:text-emerald-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal"
              className="text-xs text-white/80 hover:text-emerald-300 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
