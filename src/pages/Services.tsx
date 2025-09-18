import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Smartphone, Phone, CreditCard, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "SMS Gateway",
      description: "Enterprise-grade messaging solutions with high deliverability and real-time tracking.",
      features: [
        "Bulk SMS Broadcasting",
        "Two-way SMS Communication",
        "API Integration",
        "Real-time Delivery Reports",
        "Message Scheduling",
        "Contact Management"
      ]
    },
    {
      icon: Smartphone,
      title: "USSD Services",
      description: "Interactive mobile solutions accessible to all phone users, perfect for financial and information services.",
      features: [
        "Menu-driven Applications",
        "Balance Inquiries",
        "Transaction Processing",
        "Customer Support",
        "Multi-language Support",
        "Session Management"
      ]
    },
    {
      icon: Phone,
      title: "IVR Solutions",
      description: "Automated voice response systems for enhanced customer service and engagement.",
      features: [
        "Custom Voice Menus",
        "Call Routing",
        "Voice Recording",
        "Multi-level Navigation",
        "Call Analytics",
        "24/7 Availability"
      ]
    },
    {
      icon: CreditCard,
      title: "Mobile Payments",
      description: "Secure, integrated payment solutions for seamless mobile transactions.",
      features: [
        "Payment Processing",
        "Wallet Integration",
        "Transaction Security",
        "Settlement Services",
        "Fraud Prevention",
        "Compliance Management"
      ]
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
              Products & Services
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed">
              Comprehensive VAS solutions designed to transform your business communications 
              and enhance customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Core VAS Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our flagship telecommunications services that power businesses across Nigeria. 
              Each solution is designed with cutting-edge technology to enhance your customer engagement 
              and streamline your operations.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`px-4 lg:px-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  {index === 0 ? (
                    <Button variant="cta" size="lg" asChild>
                      <Link to="/sms-gateway">Get Started</Link>
                    </Button>
                  ) : index === 1 ? (
                    <Button variant="cta" size="lg" asChild>
                      <Link to="/ussd-services">Get Started</Link>
                    </Button>
                  ) : index === 2 ? (
                    <Button variant="cta" size="lg" asChild>
                      <Link to="/ivr-solutions">Get Started</Link>
                    </Button>
                  ) : index === 3 ? (
                    <Button variant="cta" size="lg" asChild>
                      <Link to="/mobile-payments">Get Started</Link>
                    </Button>
                  ) : (
                    <Button variant="cta" size="lg">
                      Get Started
                    </Button>
                  )}
                </div>
                
                <Card className={`p-8 bg-gradient-card border-0 mx-4 lg:mx-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Key Features</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
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

export default Services;