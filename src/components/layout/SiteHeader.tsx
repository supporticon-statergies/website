import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/articles", label: "Articles" },
  
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
            src="./lovable-uploads/2765a5e9-465e-4f44-a546-edc0809cfc34.png"
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
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
        <div className="flex items-center gap-2">
          <Button variant="hero" size="sm" aria-label="Request a demo" onClick={() => setDemoDialogOpen(true)}>
            Request Demo
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `block py-2 text-base transition-colors ${
                    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
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
