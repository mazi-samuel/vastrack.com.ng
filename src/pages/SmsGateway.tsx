import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Globe, Shield, Code, TrendingUp, BarChart3, MessageSquare, Smartphone, Lock, Building, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SmsGateway = () => {
  const features = [
    {
      icon: Zap,
      title: "Speed and Reliability",
      description: "Your messages are delivered instantly. We've built our system for high speed and dependability, ensuring your important communications are never delayed."
    },
    {
      icon: Globe,
      title: "Truly Global Reach",
      description: "Connect with your audience anywhere. Our gateway seamlessly routes messages across numerous networks, both locally and around the world."
    },
    {
      icon: Shield,
      title: "Built-in Security and Compliance",
      description: "Trust is everything. We adhere to strict industry standards to guarantee the privacy and security of your data and your customers' data."
    },
    {
      icon: Code,
      title: "Designed for Developers",
      description: "Our flexible APIs make integration smooth and simple. Connect our gateway to your applications, CRM, or business systems without the hassle."
    },
    {
      icon: TrendingUp,
      title: "Grow Without Limits",
      description: "Whether you're sending dozens or millions of messages, our scalable platform maintains consistent performance so you can focus on growth."
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Make informed decisions with real-time delivery reports and detailed message tracking. Know what's working with clarity and precision."
    }
  ];

  const useCases = [
    {
      icon: Mail,
      title: "Transactional Messages",
      description: "Deliver essential alerts like banking OTPs, account notifications, and order updates.",
      features: ["Banking OTPs", "Account notifications", "Service updates"]
    },
    {
      icon: MessageSquare,
      title: "Promotional Campaigns",
      description: "Drive brand awareness and engagement with effective bulk SMS marketing.",
      features: ["Bulk SMS marketing", "Brand awareness", "Customer engagement"]
    },
    {
      icon: Smartphone,
      title: "Two-Way Conversations",
      description: "Enable interactive communication through customer feedback, surveys, and support responses.",
      features: ["Customer feedback", "Surveys", "Interactive responses"]
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Protect your users with robust two-factor authentication (2FA) and secure login verifications.",
      features: ["2FA authentication", "Secure login", "Fraud prevention"]
    },
    {
      icon: Building,
      title: "Enterprise & Government Grade",
      description: "Facilitate mass communication for public service announcements and corporate messaging.",
      features: ["Mass communication", "Public services", "Corporate messaging"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary">Products & Services</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">SMS Gateway</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              SMS Gateway — Seamless, Reliable, and Scalable Messaging Solutions
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed mb-8">
              At Vastracktech, we build the SMS Gateway that keeps businesses connected. Our platform is engineered for instant, secure, and high-volume messaging, empowering everything from critical transaction alerts to large-scale marketing campaigns.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide the reliable foundation so you can communicate with your customers, no matter the scale. 
              Our gateway seamlessly routes messages with unmatched reliability and speed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our SMS Gateway */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Your Business Will Love Our SMS Gateway
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We know you have choices. Here's what sets our solution apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-muted border-0 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Powering Multiple Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Powering Multiple Use Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our SMS Gateway is designed for diverse business needs, including:
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`px-4 lg:px-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
                
                <Card className={`p-8 bg-gradient-card border-0 mx-4 lg:mx-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h4 className="text-xl font-bold mb-6 text-foreground">Key Applications</h4>
                  <div className="space-y-4">
                    {useCase.features.map((feature, featureIndex) => (
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

      {/* Seamless Integration & API Support */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Seamless Integration & API Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our developer-friendly API ensures quick and hassle-free integration with your existing platforms. 
              Whether you're running an e-commerce store, banking platform, or enterprise system, 
              our SMS Gateway can be tailored to fit your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Quick Setup</h3>
              <p className="text-muted-foreground">
                Developer-friendly API designed for straightforward integration with comprehensive documentation.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Flexible Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly connect with your existing tech stack, CRMs, and business systems.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground">
                Expert technical support to assist with implementation and ongoing operations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Transform Your Business Communication */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Transform Your Business Communication with Vastracktech
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Experience the power of instant, reliable, and cost-effective SMS messaging with Vastracktech. 
              Connect, engage, and grow—effortlessly.
            </p>
          </div>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-12 text-center border-0">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="h-8 w-8 mr-3" />
              <span className="text-2xl font-semibold">
                Get started today! Contact us to integrate our SMS Gateway into your business.
              </span>
            </div>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Related Links Sidebar */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-md ml-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">Related Links</h3>
            <div className="space-y-4">
              <Link to="/vas-solutions/ussd" className="block text-primary hover:text-primary-glow transition-colors">
                USSD Platform
              </Link>
              <Link to="/vas-solutions/ivr" className="block text-primary hover:text-primary-glow transition-colors">
                IVR Solution
              </Link>
              <Link to="/services" className="block text-primary hover:text-primary-glow transition-colors">
                All Services
              </Link>
              <Link to="/contact" className="block text-primary hover:text-primary-glow transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmsGateway;