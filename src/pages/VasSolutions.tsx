import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Heart, GraduationCap, Network, Handshake, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              VAS Solutions
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed">
              Comprehensive Value-Added Services designed to transform your business communications 
              and enhance customer engagement across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* VAS Solutions Grid - Statistics Style */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-16 p-8 rounded-2xl mx-auto max-w-4xl" 
            style={{ backgroundColor: '#5cbc8c' }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white">
              Tailored VAS solutions across diverse sectors, empowering businesses with cutting-edge technology and seamless integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vasSolutions.map((solution, index) => (
              <div key={index}>
                {solution.link === "#" ? (
                  <div className="text-center group transition-all duration-300 hover:transform hover:scale-110 cursor-not-allowed">
                    <div 
                      className="rounded-2xl p-8 border-2 transition-all duration-300 group-hover:shadow-xl group-hover:bg-[#5cbc8c]"
                      style={{ 
                        backgroundColor: 'white',
                        borderColor: '#5cbc8c'
                      }}
                    >
                      <div className="bg-[#5cbc8c]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                        <solution.icon 
                          className="h-10 w-10 transition-colors duration-300 group-hover:text-white" 
                          style={{ color: '#5cbc8c' }}
                        />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
                        {solution.title}
                      </h3>
                      <p className="leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
                        {solution.description}
                      </p>
                      <p className="text-sm text-gray-500 mt-3">Coming Soon</p>
                    </div>
                  </div>
                ) : (
                  <Link to={solution.link} className="block">
                    <div className="text-center group transition-all duration-300 hover:transform hover:scale-110 cursor-pointer">
                      <div 
                        className="rounded-2xl p-8 border-2 transition-all duration-300 group-hover:shadow-xl group-hover:bg-[#5cbc8c]"
                        style={{ 
                          backgroundColor: 'white',
                          borderColor: '#5cbc8c'
                        }}
                      >
                        <div className="bg-[#5cbc8c]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                          <solution.icon 
                            className="h-10 w-10 transition-colors duration-300 group-hover:text-white" 
                            style={{ color: '#5cbc8c' }}
                          />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
                          {solution.title}
                        </h3>
                        <p className="leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
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
            <Card className="p-8 text-center bg-card border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Documentation</h3>
              <p className="text-muted-foreground">
                Comprehensive API documentation with code examples and best practices.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Integration</h3>
              <p className="text-muted-foreground">
                Simple REST APIs that integrate seamlessly with your existing systems.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card border-0 hover:shadow-card transition-all duration-300">
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