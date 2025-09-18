import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Smartphone, CreditCard, Users, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const BankingSolutions = () => {
  const features = [
    "Secure & Compliant – End-to-end encryption, fraud detection, and regulatory compliance.",
    "Omnichannel Support – USSD, SMS, mobile apps, and web banking integration.",
    "Scalable & Customizable – Tailored solutions for banks, MFIs, fintech, and digital lenders.",
    "Seamless API Integration – Connect effortlessly with existing banking infrastructures."
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Mobile & Internet Banking",
      description: "Secure digital banking access via web and mobile."
    },
    {
      icon: Users,
      title: "USSD & SMS Banking",
      description: "Enable banking transactions without the need for the internet."
    },
    {
      icon: CreditCard,
      title: "Digital Wallets & Payments",
      description: "Fast and secure money transfers, bill payments, and merchant transactions."
    },
    {
      icon: Zap,
      title: "Loan & Credit Services",
      description: "Streamlined loan applications, disbursements, and credit scoring."
    },
    {
      icon: Users,
      title: "Automated Customer Support",
      description: "AI-powered chatbots and IVR banking assistance."
    },
    {
      icon: Lock,
      title: "Fraud Prevention & KYC",
      description: "Identity verification, AML compliance, and transaction monitoring."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="text-sm text-hero-foreground/70">
                <Link to="/" className="hover:text-hero-foreground transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/vas-solutions" className="hover:text-hero-foreground transition-colors">VAS Solutions</Link>
                <span className="mx-2">/</span>
                <span className="text-primary">Banking Solutions</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Banking Solutions – Secure, Scalable<br />
              & Innovative Digital Banking
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At Vastracktech, we create banking solutions that help financial institutions offer secure, fast, and customer-focused digital services. Our value-added solutions enhance mobile banking, streamline digital transactions, and deepen customer engagement—making everyday financial operations smooth and reliable while supporting greater financial inclusion.
                </p>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
                    Why Choose Vastracktech's Banking Solutions?
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We prioritize security and compliance, with robust end-to-end encryption, advanced fraud detection, and full regulatory adherence. Our platforms offer omnichannel support, integrating seamlessly with USSD, SMS, mobile apps, and web banking. Whether you're a bank, microfinance institution, fintech company, or digital lender, our solutions are scalable and tailored to fit your specific needs. With easy API integration, they work smoothly alongside your existing systems. Plus, you can offer real-time transactions—from instant transfers and bill payments to quick loan processing—and extend mobile-first banking to unbanked and underserved communities.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
                    Comprehensive Banking Solutions
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our VAS-powered banking platform is designed for various financial applications, including:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
                    Transforming Banking with Innovation
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    At the heart of what we do is innovation—aimed at boosting operational efficiency, improving customer experience, and expanding access to financial services. No matter the size or type of your organization, Vastracktech is here to help you build a secure, seamless, and future-ready banking experience.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 mr-3" />
                    <span className="text-xl font-semibold">
                      Partner with us today! Let's revolutionize banking with smart digital solutions.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Related Links */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
                    Related Links
                  </h3>
                  <div className="space-y-3">
                    <Link to="/health-services" className="block text-primary hover:text-primary/80 transition-colors">
                      Health Services
                    </Link>
                    <Link to="/education-tools" className="block text-primary hover:text-primary/80 transition-colors">
                      Education Tools
                    </Link>
                    <Link to="/technical-architecture" className="block text-primary hover:text-primary/80 transition-colors">
                      Technical Architecture
                    </Link>
                    <Link to="/partnership-models" className="block text-primary hover:text-primary/80 transition-colors">
                      Partnership Models
                    </Link>
                  </div>
                </div>

                {/* Need Help */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
                    Need Help?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our support team for assistance
                  </p>
                  <Link to="/contact">
                    <Button variant="cta" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BankingSolutions;