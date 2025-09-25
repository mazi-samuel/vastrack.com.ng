import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Shield, Settings, DollarSign, CreditCard, Smartphone, Building, Heart, GraduationCap, MessageCircle, Code } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/USSD-codes.png";

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

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-hero text-hero-foreground"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-hero/70"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Products & Services", href: "/services" },
                { label: "USSD Services", isActive: true }
              ]}
            />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              USSD Services: Interactive Mobile Solutions for Everyone
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed mb-8">
              At Vastracktech, we build powerful USSD platforms that bridge the digital divide. Our technology enables businesses, banks, and service providers to deliver real-time, interactive mobile services to every customer, no smartphone or internet connection required.
            </p>
            <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px]" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Partner with <span className="text-primary">Us</span> for Your USSD Needs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We focus on making technology work for you, not the other way around. It's a secure, scalable, and cost-effective way to reach everyone, everywhere. Our platform delivers real-time interactive services that work on every mobile device. Here's how our platform delivers:
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
              Powering Services Across <span className="text-primary">Industries</span>
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
              Integration Designed for <span className="text-primary">Developers</span>
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Unlock the <span className="text-primary">Potential</span> of Mobile Engagement
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Leverage the power of USSD to drive your digital transformation forward. Connect with millions of users, enhance your service delivery, and build a more inclusive customer journey.
            </p>
          </div>

          <Card className="bg-gradient-primary text-primary-foreground p-8 text-center border-0 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <AnimatedIcon 
                icon={Smartphone} 
                size={32} 
                className="mr-3" 
                animationType="pulse"
                hoverType="bounce"
              />
              <span className="text-xl font-semibold">
                Ready to see how it works? Contact our team today to start the conversation about integrating USSD services into your business.
              </span>
            </div>
            <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px]" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Related Links Sidebar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-muted/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-primary border-b-2 border-primary pb-3">Related Links</h3>
              <div className="space-y-3">
                <Link to="/sms-gateway" className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                  <span className="font-medium">SMS Gateway</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/ivr-solutions" className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                  <span className="font-medium">IVR Solutions</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/mobile-payments" className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                  <span className="font-medium">Mobile Payments</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/services" className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                  <span className="font-medium">All Services</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/contact" className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                  <span className="font-medium">Contact Support</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UssdServices;