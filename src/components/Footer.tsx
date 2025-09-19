import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import vastrackLogo from "@/assets/vastrack-logo.png";

const Footer = () => {
  return (
    <footer className="text-white py-12 md:py-16"
      style={{ backgroundColor: '#0c0c0d' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 md:mb-6">
              <img 
                src={vastrackLogo} 
                alt="Vastrack Technologies Logo" 
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Empowering businesses with cutting-edge Value-Added Services 
              that drive growth and enhance customer engagement.
            </p>
            <div className="flex gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer min-w-[40px] min-h-[40px]">
                <Facebook className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer min-w-[40px] min-h-[40px]">
                <Twitter className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer min-w-[40px] min-h-[40px]">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer min-w-[40px] min-h-[40px]">
                <Instagram className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm md:text-base block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm md:text-base block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm md:text-base block py-1">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/vas-solutions" className="text-white/80 hover:text-white transition-colors text-sm md:text-base block py-1">
                  VAS Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-white/80 text-sm md:text-base py-1">SMS Gateway</li>
              <li className="text-white/80 text-sm md:text-base py-1">USSD Services</li>
              <li className="text-white/80 text-sm md:text-base py-1">IVR Solutions</li>
              <li className="text-white/80 text-sm md:text-base py-1">Mobile Payments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1 p-4 md:p-6 rounded-lg text-white" style={{ backgroundColor: '#0c0c0d' }}>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Contact Info</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white mt-1 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">
                  4, Babatope Bejide Crescent,<br />
                  Lekki, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-white mt-1 flex-shrink-0" />
                <a 
                  href="mailto:tech@vastracktech.com.ng" 
                  className="text-white hover:text-white/80 transition-colors text-sm md:text-base break-all"
                >
                  tech@vastracktech.com.ng
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                <a 
                  href="tel:+2348160443352" 
                  className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
                >
                  +234(0)816-0443-352
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
          <p className="text-white/60 text-xs md:text-sm">
            Copyright © 2025 Vastracktech Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;