import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import vastrackLogo from "@/assets/vastrack-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border">
      {/* Top contact bar */}
      <div className="py-2 px-4 text-white" style={{ backgroundColor: '#5cbc8c' }}>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>4, Babatope Bejide Crescent, Lekki, Lagos, Nigeria</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-1 sm:mt-0">
            <a href="mailto:tech@vastracktech.com.ng" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="h-4 w-4" />
              <span>tech@vastracktech.com.ng</span>
            </a>
            <a href="tel:+2348160443352" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+234(0)816-0443-352</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={vastrackLogo} 
              alt="Vastrack Technologies Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Products & Services
            </Link>
            <Link to="/news-media" className="text-foreground hover:text-primary transition-colors">
              News & Media
            </Link>
            <Link to="/vas-solutions" className="text-foreground hover:text-primary transition-colors">
              VAS Solutions
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
              Resource Centre
            </Link>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link to="/contact">
              <Button variant="cta" className="hidden sm:flex">
                Contact Us
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products & Services
              </Link>
              <Link
                to="/news-media"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                News & Media
              </Link>
              <Link
                to="/vas-solutions"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                VAS Solutions
              </Link>
              <Link
                to="/resources"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resource Centre
              </Link>
              <Link to="/contact">
                <Button variant="cta" className="mx-4 mt-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;