import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Network, Database, Zap, Shield, Cpu, Link2 } from "lucide-react";
import { Link } from "react-router-dom";

const TechnicalArchitecturePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/hero-bg.jpg')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg">
              <span>Home</span> / <span>VAS Solutions</span> / <span className="text-[#5cbc8c]">Technical Architecture</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Technical Architecture – Scalable, Secure & High-Performance VAS Infrastructure
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                <p className="text-lg leading-relaxed text-gray-700">
                  At Vastracktech, our technical architecture is the foundation that powers everything we do. It's engineered to deliver high-performance, secure, and scalable solutions that drive real digital transformation. By seamlessly bridging telecom networks, enterprise systems, and cloud infrastructure, our platform ensures reliable, low-latency service delivery across all your channels.
                </p>
              </div>

              {/* Why Choose Section */}
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-700">
                  Why Choose Vastracktech's Technical Architecture?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#5cbc8c] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Scalable & Resilient</strong> – Designed for high traffic loads and rapid scalability.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#5cbc8c] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Multi-Channel Support</strong> – USSD, SMS, IVR, Mobile Apps, APIs, and Web-based services.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#5cbc8c] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Cloud & On-Premise Deployment</strong> – Flexible hosting to meet business needs.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#5cbc8c] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>End-to-End Security</strong> – Encryption, authentication, and compliance with industry standards.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#5cbc8c] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Seamless API Integration</strong> – Easy connectivity with banking, healthcare, and enterprise platforms.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#5cbc8c] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>24/7 High Availability</strong> – Load balancing, failover mechanisms, and redundancy for uninterrupted services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Components */}
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-700">
                  Key Components of Our VAS Technical Architecture
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Network className="h-8 w-8 text-[#5cbc8c] flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Telecom Integration</h3>
                      <p className="text-gray-700 leading-relaxed">Direct connectivity with MNOs, aggregators, and telecom gateways.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Cpu className="h-8 w-8 text-[#5cbc8c] flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Microservices-Based Architecture</h3>
                      <p className="text-gray-700 leading-relaxed">Modular, containerized, and API-driven approach for scalability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="h-8 w-8 text-[#5cbc8c] flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Real-Time Processing</h3>
                      <p className="text-gray-700 leading-relaxed">Low-latency messaging, transaction handling, and event-driven architecture.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Database className="h-8 w-8 text-[#5cbc8c] flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Secure Data Storage</h3>
                      <p className="text-gray-700 leading-relaxed">Encrypted databases with backup & disaster recovery mechanisms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-[#5cbc8c] flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">AI & Automation</h3>
                      <p className="text-gray-700 leading-relaxed">Smart analytics, AI-driven decision-making, and intelligent monitoring.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Link2 className="h-8 w-8 text-[#5cbc8c] flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">API Gateway & Middleware</h3>
                      <p className="text-gray-700 leading-relaxed">Enabling secure third-party integrations for fintech, e-commerce, and government services.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future-Ready Section */}
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-700">
                  Future-Ready VAS Technology
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Our technical architecture is designed for telecom operators, enterprises, fintech companies, government agencies, and service providers looking to deliver high-performance, innovative, and reliable digital solutions.
                </p>

                {/* CTA Section */}
                <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
                  <div className="flex items-center justify-center mb-4">
                    <Network className="h-8 w-8 mr-3" />
                    <span className="text-xl font-semibold">
                      Partner with Vastracktech today! Let's power the future of VAS technology together.
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
                    <Link to="/banking-solutions" className="block text-primary hover:text-primary-glow transition-colors duration-300">
                      Banking Solutions
                    </Link>
                    <Link to="/health-services" className="block text-primary hover:text-primary-glow transition-colors duration-300">
                      Health Services
                    </Link>
                    <Link to="/education-tools" className="block text-primary hover:text-primary-glow transition-colors duration-300">
                      Education Tools
                    </Link>
                    <Link to="/partnership-models" className="block text-primary hover:text-primary-glow transition-colors duration-300">
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

export default TechnicalArchitecturePage;