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
      <div className="py-2 text-white hidden md:block" style={{ backgroundColor: '#5cbc8c' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">4, Babatope Bejide Crescent, Lekki, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:tech@vastracktech.com.ng" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="hidden lg:inline">tech@vastracktech.com.ng</span>
                <span className="lg:hidden">Email</span>
              </a>
              <a href="tel:+2348160443352" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="hidden lg:inline">+234(0)816-0443-352</span>
                <span className="lg:hidden">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={vastrackLogo} 
              alt="Vastrack Technologies Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              HOME
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              ABOUT US
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              PRODUCTS & SERVICES
            </Link>
            <Link to="/news-media" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              NEWS & MEDIA
            </Link>
            <Link to="/vas-solutions" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              VAS SOLUTIONS
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              RESOURCE CENTRE
            </Link>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/contact">
              <Button variant="cta" className="hidden sm:flex text-sm md:text-base px-4 md:px-6">
                CONTACT US
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 text-base font-medium hover:bg-muted/50 rounded-md mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 text-base font-medium hover:bg-muted/50 rounded-md mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 text-base font-medium hover:bg-muted/50 rounded-md mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                PRODUCTS & SERVICES
              </Link>
              <Link
                to="/news-media"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 text-base font-medium hover:bg-muted/50 rounded-md mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                NEWS & MEDIA
              </Link>
              <Link
                to="/vas-solutions"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 text-base font-medium hover:bg-muted/50 rounded-md mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                VAS SOLUTIONS
              </Link>
              <Link
                to="/resources"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 text-base font-medium hover:bg-muted/50 rounded-md mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                RESOURCE CENTRE
              </Link>
              <div className="px-6 pt-4">
                <Link to="/contact" className="block w-full">
                  <Button variant="cta" className="w-full text-base py-3" onClick={() => setIsMenuOpen(false)}>
                    CONTACT US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;