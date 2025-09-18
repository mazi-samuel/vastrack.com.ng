import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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
      
      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border border-primary-glow/30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full border border-primary-glow/20 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full border border-primary-glow/25 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Company name */}
          <p className="text-primary-glow text-lg mb-4 animate-fadeIn">
            Vastracktech Technologies
          </p>
          
          {/* Main headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              Advanced VAS Solutions
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl mb-12 text-hero-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Empower your organization with cutting-edge Value-Added Services that drive growth 
            and enhance customer engagement.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8">
              Get Started Today
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating service indicators */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 hidden lg:block">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-glow">SMS</div>
              <div className="text-sm text-hero-foreground/80">Gateway</div>
            </div>
          </div>
          
          <div className="absolute top-1/3 right-10 hidden lg:block">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-glow">USSD</div>
              <div className="text-sm text-hero-foreground/80">Services</div>
            </div>
          </div>
          
          <div className="absolute bottom-1/3 left-20 hidden lg:block">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-glow">IVR</div>
              <div className="text-sm text-hero-foreground/80">Solutions</div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-20 hidden lg:block">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-glow">Mobile</div>
              <div className="text-sm text-hero-foreground/80">Payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;