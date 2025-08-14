import { Link } from "react-router-dom";

export const SiteFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            to="/"
            aria-label="Supporticon home"
            className="flex items-center gap-2"
          >
            <img
              src="./lovable-uploads/2765a5e9-465e-4f44-a546-edc0809cfc34.png"
              alt="Supporticon logo"
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2025 Supporticon. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            {/* <Link to="/legal" className="hover:text-foreground">
              Legal
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
