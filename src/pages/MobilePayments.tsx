import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Smartphone, TrendingUp, Code, Globe, Users, CreditCard, Receipt, Building, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/mobile payment.webp";

const MobilePayments = () => {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the safety of every transaction. Our platform features end-to-end encryption, robust fraud prevention, and strict adherence to regulatory standards."
    },
    {
      icon: Zap,
      title: "Speed You Can Count On",
      description: "Process payments in real-time with minimal latency, so your business and your customers never have to wait."
    },
    {
      icon: Smartphone,
      title: "Meet Customers Where They Are",
      description: "Our technology is compatible with the channels people use every day, including USSD, SMS, mobile apps, and web platforms."
    },
    {
      icon: TrendingUp,
      title: "Built to Grow with You",
      description: "Our infrastructure is designed to handle high transaction volumes effortlessly, ensuring reliable performance as your business expands."
    },
    {
      icon: Code,
      title: "Integration Made Simple",
      description: "Our API-driven architecture is built for developers, ensuring smooth and straightforward compatibility with your existing systems."
    },
    {
      icon: Globe,
      title: "Borderless Payments",
      description: "Enable seamless transactions across different mobile networks and currencies, opening up new opportunities for your business."
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Peer-to-Peer Transfers",
      description: "Facilitate instant and secure money transfers between individuals.",
      features: ["Instant transfers", "Secure transactions", "Individual payments", "Real-time processing"]
    },
    {
      icon: Receipt,
      title: "Bill Payments",
      description: "Allow customers to easily pay utility bills, subscriptions, and other recurring expenses.",
      features: ["Utility bills", "Subscription payments", "Recurring expenses", "Automated billing"]
    },
    {
      icon: Smartphone,
      title: "Mobile Top-Ups",
      description: "Offer quick and convenient airtime and data recharge services.",
      features: ["Airtime recharge", "Data bundles", "Quick processing", "Multiple networks"]
    },
    {
      icon: CreditCard,
      title: "Merchant Services",
      description: "Power secure point-of-sale and e-commerce transactions for retailers.",
      features: ["POS transactions", "E-commerce payments", "Retail solutions", "Secure processing"]
    },
    {
      icon: Building,
      title: "Banking & Fintech",
      description: "Integrate with mobile wallets, streamline loan disbursements, and enhance digital banking offerings.",
      features: ["Mobile wallets", "Loan disbursements", "Digital banking", "Fintech integration"]
    },
    {
      icon: Heart,
      title: "Healthcare & Insurance",
      description: "Simplify the payment of premiums, hospital bills, and claim settlements.",
      features: ["Premium payments", "Hospital bills", "Claim settlements", "Healthcare solutions"]
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
                { label: "Mobile Payments", isActive: true }
              ]}
            />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Mobile Payments: Secure, Fast, and Seamless
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed mb-8">
              At Vastracktech, we build the secure, flexible mobile payment technology that modern businesses run on. Our solutions empower financial institutions, service providers, and enterprises to facilitate seamless transactions, making it simple for businesses and their customers to send, receive, and manage payments, anytime, anywhere.
            </p>
            <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px]" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner with Us for Mobile Payments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Partner with <span className="text-primary">Us</span> for Mobile Payments?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In a world that moves in real-time, your payment platform can't afford to be slow, insecure, or complex. Our platform is built to excel where it matters most: security, speed, and seamless integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-muted border-0 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <AnimatedIcon 
                    icon={feature.icon} 
                    size={32} 
                    className="text-primary" 
                    animationType="bounce" 
                    hoverType="scale"
                  />
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

      {/* Powering a Wide Range of Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Powering a Wide Range of Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our versatile platform is engineered to support critical financial operations across industries:
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`px-4 lg:px-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <AnimatedIcon 
                      icon={service.icon} 
                      size={32} 
                      className="text-primary-foreground" 
                      animationType="pulse" 
                      hoverType="bounce"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <Card className={`p-8 bg-gradient-card border-0 mx-4 lg:mx-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h4 className="text-xl font-bold mb-6 text-foreground">Key Features</h4>
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

      {/* Designed for Developers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Designed for Developers
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We know that easy integration is key. Our developer-friendly APIs and customizable SDKs allow your team to embed our mobile payment capabilities directly into your applications and platforms, creating a smooth and frictionless experience for your customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AnimatedIcon 
                  icon={Code} 
                  size={32} 
                  className="text-primary" 
                  animationType="float" 
                  hoverType="glow"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Developer-Friendly APIs</h3>
              <p className="text-muted-foreground">
                API-driven architecture built for developers with comprehensive documentation and examples.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AnimatedIcon 
                  icon={Smartphone} 
                  size={32} 
                  className="text-primary" 
                  animationType="wiggle" 
                  hoverType="bounce"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Customizable SDKs</h3>
              <p className="text-muted-foreground">
                Embed payment capabilities directly into your applications and platforms seamlessly.
              </p>
            </Card>

            <Card className="p-8 text-center bg-muted border-0 hover:shadow-card transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AnimatedIcon 
                  icon={Zap} 
                  size={32} 
                  className="text-primary" 
                  animationType="pulse" 
                  hoverType="scale"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Smooth Integration</h3>
              <p className="text-muted-foreground">
                Straightforward compatibility with existing systems for frictionless customer experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Transform Your Payment Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Transform Your Payment Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Whether you're an established bank, a growing fintech, a government agency, or an e-commerce store, Vastracktech provides the secure and innovative payment technology you need to deliver convenience, efficiency, and reliability.
            </p>
          </div>

          <Card className="bg-gradient-primary text-primary-foreground p-8 text-center border-0 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <AnimatedIcon 
                icon={CreditCard} 
                size={32} 
                className="mr-3" 
                animationType="pulse"
                hoverType="bounce"
              />
              <span className="text-xl font-semibold">
                Ready to integrate a better way to pay? Contact us today to get started.
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
                <Link to="/ussd-services" className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                  <span className="font-medium">USSD Services</span>
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

export default MobilePayments;