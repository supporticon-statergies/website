import { Link } from "react-router-dom";

export const SiteFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/2765a5e9-465e-4f44-a546-edc0809cfc34.png"
                alt="Supporticon logo"
                className="h-6 w-6"
                loading="lazy"
              />
              <span className="font-display text-lg font-bold">Supporticon</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Strategy-first SaaS improving customer support with AI-driven automation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Navigation</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/product" className="hover:text-foreground">Product</Link></li>
              <li><Link to="/articles" className="hover:text-foreground">Articles</Link></li>
              
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/legal" className="hover:text-foreground">Legal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Availability</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Available in the Freshdesk Marketplace.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Supporticon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
