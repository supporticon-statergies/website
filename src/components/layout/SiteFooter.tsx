import { Link } from "react-router-dom";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import { Mail, MapPin, Phone, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Product", path: "/product" },
  { name: "Resources", path: "/resources" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

export const SiteFooter = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden bg-[#052e16]">
      {/* Ambient glows */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[300px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[280px] bg-green-500/8 rounded-full blur-[100px] pointer-events-none" />
      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Main grid */}
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

          {/* Quick links */}
          <div className="flex flex-col gap-5 md:pl-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-sm text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">
              Head Office
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-white/75 leading-relaxed">
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
                  className="text-sm text-white/75 hover:text-white transition-colors duration-200"
                >
                  founder@supporticon.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-white/75">+91 866 734 7679</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-emerald-800/60" />

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-white/50 font-medium">
            Copyright &copy; 2025 supporticon.com. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/legal"
              className="text-xs text-white/50 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal"
              className="text-xs text-white/50 hover:text-white transition-colors duration-200"
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
