import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Card } from "@/components/ui/card";
import { Building2, Heart, GraduationCap, Network, Handshake, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/erik-mclean-aielvGxZB0g-unsplash.jpg";

const VasSolutions = () => {
  const vasSolutions = [
    {
      icon: Building2,
      title: "Banking Solutions",
      description: "Comprehensive financial services integration",
      link: "/banking-solutions"
    },
    {
      icon: Heart,
      title: "Health Services",
      description: "Healthcare technology and telemedicine solutions",
      link: "/health-services"
    },
    {
      icon: GraduationCap,
      title: "Education Tools",
      description: "Digital learning and educational platforms",
      link: "/education-tools"
    },
    {
      icon: Network,
      title: "Technical Architecture",
      description: "Robust infrastructure and system design",
      link: "/technical-architecture"
    },
    {
      icon: Handshake,
      title: "Partnership Models",
      description: "Strategic collaboration frameworks",
      link: "/partnership-models"
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Large-scale business communication systems",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-12 md:py-16 lg:py-20 bg-hero text-hero-foreground"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-hero/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "VAS Solutions", isActive: true }
              ]}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              VAS Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-foreground/90 leading-relaxed px-4">
              Comprehensive Value-Added Services designed to transform your business communications 
              and enhance customer engagement across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* VAS Solutions Grid - Statistics Style */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12 md:mb-16 p-6 md:p-8 rounded-2xl mx-auto max-w-4xl" 
            style={{ backgroundColor: '#5cbc8c' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Industry-Specific Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white px-2">
              Tailored VAS solutions across diverse sectors, empowering businesses with cutting-edge technology and seamless integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vasSolutions.map((solution, index) => (
              <div key={index} className="h-full">
                {solution.link === "#" ? (
                  <div className="text-center group transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 cursor-not-allowed h-full">
                    <div className="rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full flex flex-col justify-between bg-white group-hover:bg-primary min-h-[280px]">
                      <div className="flex flex-col items-center flex-1">
                        <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                          <AnimatedIcon 
                            icon={solution.icon}
                            size={32}
                            className="transition-colors duration-300 text-primary group-hover:text-white" 
                            animationType="wiggle"
                            hoverType="bounce"
                            delay={index * 0.2}
                          />
                        </div>
                        <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 transition-colors duration-300 text-primary group-hover:text-white">
                          {solution.title}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed transition-colors duration-300 text-primary group-hover:text-white/90 mb-3 md:mb-4 px-2">
                          {solution.description}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300 mt-auto">Coming Soon</p>
                    </div>
                  </div>
                ) : (
                  <Link to={solution.link} className="block h-full">
                    <div className="text-center group transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 cursor-pointer h-full">
                      <div className="rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full flex flex-col justify-center bg-white group-hover:bg-primary min-h-[280px]">
                        <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                          <AnimatedIcon 
                            icon={solution.icon}
                            size={32}
                            className="transition-colors duration-300 text-primary group-hover:text-white" 
                            animationType="pulse"
                            hoverType="spin"
                            delay={index * 0.2}
                          />
                        </div>
                        <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 transition-colors duration-300 text-primary group-hover:text-white">
                          {solution.title}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed transition-colors duration-300 text-primary group-hover:text-white/90 px-2">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Easy Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our robust APIs and comprehensive documentation make integration simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Documentation</h3>
              <p className="text-muted-foreground">
                Comprehensive API documentation with code examples and best practices.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Integration</h3>
              <p className="text-muted-foreground">
                Simple REST APIs that integrate seamlessly with your existing systems.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Support</h3>
              <p className="text-muted-foreground">
                24/7 technical support to assist with implementation and troubleshooting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VasSolutions;