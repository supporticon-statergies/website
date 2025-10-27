import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import { Menu, X } from "lucide-react";
import { supporticonUploads } from "@/assets/supporticon-uploads";

const nav = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/articles", label: "Articles" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
];

export const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          aria-label="Supporticon home"
          className="flex items-center gap-2 mr-8"
        >
          <img
            src={supporticonUploads.logo}
            alt="Supporticon logo"
            className="h-11 w-auto"
            loading="eager"
          />
        </Link>
        <nav aria-label="main" className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden transition-all duration-200 hover:bg-muted/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative">
            <Menu 
              className={`h-5 w-5 transition-all duration-200 ${
                mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`} 
            />
            <X 
              className={`h-5 w-5 absolute inset-0 transition-all duration-200 ${
                mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`} 
            />
          </div>
        </Button>
        
        <div className="flex items-center gap-2">
          <Button variant="hero" size="sm" aria-label="Request a demo" onClick={() => setDemoDialogOpen(true)}>
            Request Demo
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur overflow-hidden animate-in slide-in-from-top-2 duration-300 ease-out">
          <nav 
            className="container mx-auto px-4 py-4 space-y-3"
            style={{
              animation: 'slideDown 0.3s ease-out forwards'
            }}
          >
            {nav.map((n, index) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `block py-2 text-base transition-all duration-200 transform hover:bg-muted/30 rounded-md px-2 ${
                    isActive ? "text-primary font-medium bg-primary/10" : "text-muted-foreground hover:text-foreground"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  animation: `slideInFromTop 0.3s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                  transform: 'translateY(-20px)'
                }}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
      
      <RequestDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </header>
  );
};

export default SiteHeader;
