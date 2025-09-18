import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Shield, Settings, DollarSign, CreditCard, Smartphone, Building, Heart, GraduationCap, MessageCircle, Code } from "lucide-react";
import { Link } from "react-router-dom";

const UssdServices = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant and Reliable",
      description: "Interactions happen in real-time. There are no apps to download or delays to frustrate your users, just immediate connection."
    },
    {
      icon: Users,
      title: "Accessibility for All",
      description: "Reach your entire audience, including feature phone users and those in areas with limited internet access. All they need is a mobile network."
    },
    {
      icon: Shield,
      title: "Security You Can Trust",
      description: "We implement encrypted sessions to protect sensitive transactions and ensure our platform meets strict industry compliance standards."
    },
    {
      icon: Settings,
      title: "Built to Your Specifications",
      description: "Our solutions are fully customizable and designed to scale seamlessly as your business and user base grow."
    },
    {
      icon: DollarSign,
      title: "Surprisingly Affordable",
      description: "Reduce your operational costs while significantly improving how you engage and serve your customers."
    }
  ];

  const industries = [
    {
      icon: CreditCard,
      title: "Financial Inclusion",
      description: "Empower users with mobile banking, including balance checks, fund transfers, bill payments, and micro-loan applications.",
      features: ["Mobile banking", "Balance checks", "Fund transfers", "Bill payments", "Micro-loan applications"]
    },
    {
      icon: Smartphone,
      title: "Convenient Top-Ups",
      description: "Offer instant airtime and data recharge services directly through any mobile device.",
      features: ["Airtime recharge", "Data bundle purchases", "Instant processing", "Multiple network support"]
    },
    {
      icon: Building,
      title: "Public Service Delivery",
      description: "Governments use our platform for citizen engagement, disseminating information, and managing social programs.",
      features: ["Citizen engagement", "Information dissemination", "Social programs", "Government services"]
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Simplify appointment booking, insurance policy management, and claim status checks for patients.",
      features: ["Appointment booking", "Insurance management", "Claim status", "Patient portals"]
    },
    {
      icon: GraduationCap,
      title: "Education Connections",
      description: "Provide students and parents with portals for checking results, course registration, and academic updates.",
      features: ["Result checking", "Course registration", "Academic updates", "Parent portals"]
    },
    {
      icon: MessageCircle,
      title: "Direct Customer Dialogue",
      description: "Conduct surveys, gather feedback, and offer instant support through interactive menus.",
      features: ["Customer surveys", "Feedback collection", "Instant support", "Interactive menus"]
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
            <span className="text-primary">USSD Services</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              USSD Services — Interactive Mobile Solutions for Everyone
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed mb-8">
              At Vastracktech, we build powerful USSD platforms that bridge the digital divide. Our technology enables businesses, banks, and service providers to deliver real-time, interactive mobile services to every customer—no smartphone or internet connection required.
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
              It's a secure, scalable, and cost-effective way to reach everyone, everywhere. 
              Our platform delivers real-time interactive services that work on every mobile device.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Partner with Us for Your USSD Needs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We focus on making technology work for you, not the other way around. Here's how our platform delivers:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
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

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <Card key={index + 3} className="p-8 bg-muted border-0 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
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

      {/* Powering Services Across Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Powering Services Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our versatile USSD platform is the engine behind critical services in many sectors:
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
                  <h4 className="text-xl font-bold mb-6 text-foreground">Key Services</h4>
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

      {/* Integration Designed for Developers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Integration Designed for Developers
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We know your time is valuable. Our developer-friendly APIs are built for easy integration with your existing core systems, ensuring a fast deployment and a smooth, consistent experience for your end-users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Developer-Friendly APIs</h3>
              <p className="text-muted-foreground">
                Built for easy integration with comprehensive documentation and code examples.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Fast Deployment</h3>
              <p className="text-muted-foreground">
                Quick integration with existing core systems for minimal downtime and disruption.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Enterprise Security</h3>
              <p className="text-muted-foreground">
                High-volume transaction handling with enterprise-grade security and compliance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Unlock the Potential */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Unlock the Potential of Mobile Engagement
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Leverage the power of USSD to drive your digital transformation forward. Connect with millions of users, enhance your service delivery, and build a more inclusive customer journey.
            </p>
          </div>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-12 text-center border-0">
            <div className="flex items-center justify-center mb-6">
              <Smartphone className="h-8 w-8 mr-3" />
              <span className="text-2xl font-semibold">
                Ready to see how it works? Contact our team today to start the conversation about integrating USSD services into your business.
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

export default UssdServices;