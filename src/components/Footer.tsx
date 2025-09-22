import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import vastrackLogo from "@/assets/vastrack-logo.png";
import AnimatedSocialIcon from "./AnimatedSocialIcon";

const Footer = () => {
  return (
    <footer className="text-white py-12 md:py-16"
      style={{ backgroundColor: '#0c0c0d' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
              <img 
                src={vastrackLogo} 
                alt="Vastrack Technologies Logo" 
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base max-w-xs mx-auto md:mx-0">
              Empowering businesses with cutting-edge Value-Added Services 
              that drive growth and enhance customer engagement.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
              <AnimatedSocialIcon
                icon={Facebook}
                href="https://web.facebook.com/vastracktech?_rdc=1&_rdr#"
                label="Follow us on Facebook"
                delay={0.1}
              />
              <AnimatedSocialIcon
                icon={Twitter}
                href="https://x.com/vastrack_tech"
                label="Follow us on Twitter/X"
                delay={0.2}
              />
              <AnimatedSocialIcon
                icon={Linkedin}
                href="https://www.linkedin.com/company/vastrack-tech/"
                label="Connect with us on LinkedIn"
                delay={0.3}
              />
              <AnimatedSocialIcon
                icon={Instagram}
                href="https://www.instagram.com/vastrack_tech/"
                label="Follow us on Instagram"
                delay={0.4}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
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
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-white/80 text-sm md:text-base py-1">SMS Gateway</li>
              <li className="text-white/80 text-sm md:text-base py-1">USSD Services</li>
              <li className="text-white/80 text-sm md:text-base py-1">IVR Solutions</li>
              <li className="text-white/80 text-sm md:text-base py-1">Mobile Payments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1 p-4 md:p-6 rounded-lg text-white text-center md:text-left" style={{ backgroundColor: '#0c0c0d' }}>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Contact Info</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white mt-1 flex-shrink-0" />
                <span className="text-white text-sm md:text-base text-left">
                  4, Babatope Bejide Crescent,<br />
                  Lekki, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-white mt-1 flex-shrink-0" />
                <a 
                  href="mailto:tech@vastracktech.com.ng" 
                  className="text-white hover:text-white/80 transition-colors text-sm md:text-base break-words text-left"
                >
                  tech@vastracktech.com.ng
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
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