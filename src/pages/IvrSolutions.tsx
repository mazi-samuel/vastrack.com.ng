import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Headphones, Shield, Users, Languages, Link2, Share2, BarChart3, Phone, Database, ShoppingCart, MessageCircle, Lock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const IvrSolutions = () => {
  const features = [
    {
      icon: Zap,
      title: "Boost Efficiency with Automation",
      description: "Free up your live agents by handling routine inquiries automatically, allowing them to focus on more complex and valuable tasks."
    },
    {
      icon: Headphones,
      title: "Always Available Support",
      description: "Offer your customers help day or night, on weekends and holidays, ensuring your service is never offline."
    },
    {
      icon: Shield,
      title: "Grow with Confidence",
      description: "Our secure and scalable platform is built to manage everything from a few calls to thousands of simultaneous conversations without compromising performance or data privacy."
    },
    {
      icon: Languages,
      title: "Speak Your Customer's Language",
      description: "Break down barriers by interacting with customers in multiple languages, making your services accessible to a wider audience."
    },
    {
      icon: Link2,
      title: "Connect Your Business Tools",
      description: "Our seamless API integration lets you easily connect your IVR to your existing CRM, databases, and software for a unified workflow."
    },
    {
      icon: Share2,
      title: "Smart Call Routing",
      description: "Intelligently direct callers to the most appropriate department or agent right away, minimizing wait times and frustration."
    }
  ];

  const industries = [
    {
      icon: Database,
      title: "Banking & Finance",
      description: "Empower customers to check balances, transfer funds, get loan updates, and receive instant fraud alerts.",
      features: ["Check balances", "Transfer funds", "Loan updates", "Fraud alerts"]
    },
    {
      icon: Headphones,
      title: "Healthcare",
      description: "Allow patients to schedule appointments, request prescription refills, and access general information quickly and privately.",
      features: ["Schedule appointments", "Prescription refills", "General info access"]
    },
    {
      icon: Phone,
      title: "Telecommunications",
      description: "Enable self-service for SIM activations, plan upgrades, bill payments, and technical support.",
      features: ["SIM activations", "Plan upgrades", "Bill payments", "Tech support"]
    },
    {
      icon: FileText,
      title: "Government Services",
      description: "Provide citizens with a reliable channel for information, helplines, and complaint resolution.",
      features: ["Information channel", "Helplines", "Complaint resolution"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      description: "Offer instant order status updates, payment processing, and answers to common product questions.",
      features: ["Order status", "Payment processing", "Product Q&A"]
    },
    {
      icon: MessageCircle,
      title: "Customer Insights",
      description: "Conduct automated post-call surveys to gather valuable feedback and measure satisfaction.",
      features: ["Post-call surveys", "Feedback collection", "Satisfaction measurement"]
    }
  ];

  const techFeatures = [
    {
      icon: MessageCircle,
      title: "Natural Voice & DTMF Input",
      description: "Natural voice recognition and keypad input (DTMF) for intuitive user interaction."
    },
    {
      icon: BarChart3,
      title: "Detailed Call Analytics",
      description: "Detailed call analytics and reporting to help you understand call patterns and customer needs."
    },
    {
      icon: Share2,
      title: "Omnichannel Integration",
      description: "Omnichannel integration with your SMS, email, and chat platforms for a consistent customer journey."
    },
    {
      icon: Lock,
      title: "Robust Security Protocols",
      description: "Robust security protocols, including OTP verification, for safe and encrypted transactions."
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
            <span className="text-primary">IVR Solutions</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              IVR Solutions — Smarter Customer Connections
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed mb-8">
              At Vastracktech, we build intelligent Interactive Voice Response (IVR) systems that transform how you connect with your customers. Our solutions help businesses, banks, healthcare providers, and government agencies automate conversations, provide instant support, and guide users to the right information—all through a simple phone call.
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
              The result is a significant reduction in operational costs and a major boost in customer satisfaction. Move beyond the basic phone tree—create sophisticated, voice-driven workflows that truly meet your business needs and exceed customer expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our IVR Platform */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Choose Our IVR Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We’ve designed our IVR to be more than just a phone menu; it's a powerful tool for your business.
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

      {/* Tailored Solutions for Your Industry */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Tailored Solutions for Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our flexible technology is powering better customer experiences across sectors:
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`px-4 lg:px-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <industry.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                
                <Card className={`p-8 bg-gradient-card border-0 mx-4 lg:mx-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h4 className="text-xl font-bold mb-6 text-foreground">Key Features</h4>
                  <div className="space-y-4">
                    {industry.features.map((feature, featureIndex) => (
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

      {/* Powered by Advanced Technology */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Behind every interaction is a suite of powerful features:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="p-8 bg-muted border-0 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Ready to Build a Smarter Customer Experience? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Build a Smarter Customer Experience?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Let's talk about how we can elevate your communication strategy. Contact us today to get started.
            </p>
          </div>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-12 text-center border-0">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="h-8 w-8 mr-3" />
              <span className="text-2xl font-semibold">
                Move beyond the basic phone tree. With Vastracktech’s IVR solutions, you can create sophisticated, voice-driven workflows that truly meet your business needs and exceed customer expectations.
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
              <Link to="/sms-gateway" className="block text-primary hover:text-primary-glow transition-colors">
                SMS Gateway
              </Link>
              <Link to="/ussd-services" className="block text-primary hover:text-primary-glow transition-colors">
                USSD Services
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

export default IvrSolutions;
