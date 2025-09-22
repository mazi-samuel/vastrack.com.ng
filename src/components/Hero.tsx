import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/value added service image.webp";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-hero text-hero-foreground overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-hero/70 backdrop-blur-sm"></div>
      
      {/* Floating tech elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border border-primary-glow/30 animate-pulse hover:animate-bounce transition-all duration-300"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full border border-primary-glow/20 animate-bounce hover:animate-spin transition-all duration-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full border border-primary-glow/25 animate-pulse hover:animate-ping transition-all duration-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-primary-glow/15 animate-spin hover:animate-bounce transition-all duration-700"></div>
        <div className="absolute top-3/4 right-1/4 w-14 h-14 rounded-full border border-primary-glow/20 animate-pulse hover:animate-bounce transition-all duration-400"></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Company name */}
          <p className="text-primary-glow text-sm sm:text-base md:text-lg mb-3 md:mb-4 animate-fadeIn">
            Vastracktech Technologies
          </p>
          
          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent mt-2">
              Advanced VAS Solutions
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-hero-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
            Empower your organization with cutting-edge Value-Added Services that drive growth 
            and enhance customer engagement.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
            <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px]" asChild>
              <Link to="/vas-solutions">
                Get Started Today
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px] transition-all duration-200"
              asChild
            >
              <Link to="/knowledge-hub">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating service indicators with enhanced animations */}
        <div className="absolute inset-0 hidden xl:block">
          <div className="absolute top-1/4 left-10 animate-float">
            <Link to="/sms-gateway" className="block">
              <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-3 lg:p-4 text-center hover:bg-card/30 hover:scale-110 hover:rotate-2 hover:shadow-xl hover:shadow-primary-glow/20 transition-all duration-500 cursor-pointer group">
                <div className="text-xl lg:text-2xl font-bold text-primary-glow group-hover:animate-bounce">SMS</div>
                <div className="text-xs lg:text-sm text-hero-foreground/80 group-hover:text-hero-foreground transition-colors duration-300">Gateway</div>
              </div>
            </Link>
          </div>
          
          <div className="absolute top-1/3 right-10 animate-float" style={{animationDelay: '0.5s'}}>
            <Link to="/ussd-services" className="block">
              <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-3 lg:p-4 text-center hover:bg-card/30 hover:scale-110 hover:-rotate-2 hover:shadow-xl hover:shadow-primary-glow/20 transition-all duration-500 cursor-pointer group">
                <div className="text-xl lg:text-2xl font-bold text-primary-glow group-hover:animate-pulse">USSD</div>
                <div className="text-xs lg:text-sm text-hero-foreground/80 group-hover:text-hero-foreground transition-colors duration-300">Services</div>
              </div>
            </Link>
          </div>
          
          <div className="absolute bottom-1/3 left-20 animate-float" style={{animationDelay: '1s'}}>
            <Link to="/ivr-solutions" className="block">
              <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-3 lg:p-4 text-center hover:bg-card/30 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:shadow-primary-glow/20 transition-all duration-500 cursor-pointer group">
                <div className="text-xl lg:text-2xl font-bold text-primary-glow group-hover:animate-bounce">IVR</div>
                <div className="text-xs lg:text-sm text-hero-foreground/80 group-hover:text-hero-foreground transition-colors duration-300">Solutions</div>
              </div>
            </Link>
          </div>
          
          <div className="absolute bottom-1/4 right-20 animate-float" style={{animationDelay: '1.5s'}}>
            <Link to="/mobile-payments" className="block">
              <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-3 lg:p-4 text-center hover:bg-card/30 hover:scale-110 hover:-rotate-3 hover:shadow-xl hover:shadow-primary-glow/20 transition-all duration-500 cursor-pointer group">
                <div className="text-xl lg:text-2xl font-bold text-primary-glow group-hover:animate-pulse">Mobile</div>
                <div className="text-xs lg:text-sm text-hero-foreground/80 group-hover:text-hero-foreground transition-colors duration-300">Payments</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;