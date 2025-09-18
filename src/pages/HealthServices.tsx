import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Smartphone, Heart, Users, Zap, Phone, Calendar, FileText, Activity, MessageSquare, Database } from "lucide-react";
import { Link } from "react-router-dom";

const HealthServices = () => {
  const features = [
    "Secure & Compliant – HIPAA-compliant solutions ensuring data privacy and security.",
    "Mobile & Web Integration – Accessible via USSD, SMS, mobile apps, and web platforms.",
    "Seamless API Connectivity – Easily integrates with hospital systems, EMRs, and third-party platforms.",
    "AI & Automation – Smart triage, automated reminders, and AI-driven diagnostics.",
    "24/7 Patient Engagement – Remote healthcare access anytime, anywhere.",
    "Scalable & Cost-Effective – Designed to meet the needs of hospitals, clinics, pharmacies, and NGOs."
  ];

  const services = [
    {
      icon: Phone,
      title: "Telemedicine & Remote Consultations",
      description: "Connect patients with doctors via SMS, USSD, or video calls."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling & Reminders",
      description: "Reduce no-shows with automated notifications."
    },
    {
      icon: FileText,
      title: "e-Prescriptions & Pharmacy Access",
      description: "Enable digital prescriptions and medicine deliveries."
    },
    {
      icon: Activity,
      title: "Health Monitoring & Diagnostics",
      description: "Remote patient monitoring with AI-powered insights."
    },
    {
      icon: MessageSquare,
      title: "USSD & SMS Health Alerts",
      description: "Provide public health updates, disease prevention tips, and vaccination alerts."
    },
    {
      icon: Database,
      title: "Electronic Medical Records (EMRs)",
      description: "Secure cloud-based patient data management."
    },
    {
      icon: Smartphone,
      title: "mHealth (Mobile Health) Solutions",
      description: "Health education, wellness programs, and symptom tracking."
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
                <span className="text-primary">Health Services</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Health Services – Transforming<br />
              Healthcare with Digital Innovation
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
                  At Vastracktech, we develop advanced healthcare solutions that help providers, patients, and government agencies connect more effectively. Our technology is designed to enhance patient care, simplify medical services, and make healthcare more accessible for everyone. From remote consultations and health record management to appointment scheduling and mobile alerts, our goal is to support better health outcomes and smoother operations.
                </p>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
                    Why Partner with Vastracktech for Your Healthcare Solutions?
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
                    We build tools that are secure and fully compliant, meeting HIPAA standards to protect patient privacy and data. Our platforms are accessible through multiple channels, including USSD, SMS, mobile apps, and web browsers, so you can reach patients wherever they are. With seamless API connectivity, our systems integrate easily with your existing hospital software, EMRs, and other partner platforms.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We use AI and automation to support smarter triage, send automated reminders, and even aid in diagnostics. This enables 24/7 patient engagement, offering remote access to healthcare resources at any time. Best of all, our solutions are scalable and cost-effective, making them a practical choice for hospitals, clinics, pharmacies, and NGOs alike.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
                    Our Comprehensive Healthcare Solutions Include:
                  </h2>

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
                    Revolutionizing Healthcare with Digital Solutions
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We're committed to revolutionizing healthcare through digital innovation. Whether you're a hospital, clinic, pharmaceutical company, insurer, or government agency, our solutions are designed to improve how you deliver care, engage patients, and achieve better medical outcomes.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-2xl text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 mr-3" />
                    <span className="text-xl font-semibold">
                      Ready to modernize your health services? Partner with us at Vastracktech—let's drive innovation in healthcare together.
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
                    <Link to="/banking-solutions" className="block text-primary hover:text-primary/80 transition-colors">
                      Banking Solutions
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

export default HealthServices;
