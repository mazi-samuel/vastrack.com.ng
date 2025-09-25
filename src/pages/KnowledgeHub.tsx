import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/gabriella-clare-marino-GSLA0FVY9qI-unsplash.jpg";

const KnowledgeHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24"
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
                { label: "Resource Centre", href: "/resource-centre" },
                { label: "Knowledge Hub", isActive: true }
              ]}
            />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Knowledge Hub</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* VAS Aggregation Introduction */}
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                VAS Aggregation: An Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Value Added Services (VAS) are offerings that provide capabilities beyond standard voice calls. 
                Typically supplied by mobile network operators or specialized third-party vendors, these services 
                enhance the core user experience. Their primary purpose is to encourage subscribers to use their 
                devices more frequently, thereby helping operators increase their Average Revenue Per User (ARPU).
              </p>
            </div>

            {/* Structural Framework */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Structural Framework: Segmentation of the VAS Sector
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The VAS market can be broadly divided into four key segments, each with distinct roles:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    → Network Operators
                  </h3>
                  <p className="text-gray-700">
                    These are the direct point of contact for the subscriber. While users access VAS through 
                    their operator, the operators themselves are not always the direct creators of these services. 
                    They typically source them from other specialized players in the sector.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    → Aggregators
                  </h3>
                  <p className="text-gray-700">
                    An aggregator acts as a vital bridge, directly connected to the operator. They consolidate 
                    multiple platforms, channels, and services, effectively linking VAS owners (Content Providers) 
                    with the Network Operators.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    → Content and Application Service Providers (CASPs)
                  </h3>
                  <p className="text-gray-700">
                    These licensed entities own the VAS content. They are responsible for pooling, hosting, 
                    and distributing applications and content using their own hardware and software platforms. 
                    They can connect to operators either directly or through an aggregator.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    → Developers
                  </h3>
                  <p className="text-gray-700">
                    These are the creators: the freelance or independent designers of content, applications, 
                    and platforms. They do not hold distribution licenses and must therefore partner with 
                    a licensed CASP to bring their services to market.
                  </p>
                </div>
              </div>
            </div>

            {/* Functions & Responsibilities */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Functions & Responsibilities of Market Players
              </h2>

              {/* Network Operators */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Network Operators</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    As the primary point of contact, they transmit service requests from subscribers to the content providers, either directly or via an aggregator.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    They must hold the appropriate telecommunications licenses (e.g., Digital Mobile License, UASL) as mandated by the national regulatory authority.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    A key responsibility is protecting subscribers from unauthorized or unwanted service activations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    They can offer optional billing, revenue collection, and marketing services to content partners.
                  </li>
                </ul>
              </div>

              {/* Aggregator */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Aggregator</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-green-500 mr-2">→</span>
                    Their core function is to provide a simplified, secure, and direct bridge between multiple Content Providers and multiple Network Operators.
                  </p>
                  <p className="flex items-start">
                    <span className="text-green-500 mr-2">→</span>
                    They enable the secure transport of content and provide direct links to the internet or international data access for partners with global ambitions.
                  </p>
                  
                  <div className="ml-4 mt-4">
                    <p className="font-semibold text-slate-800 mb-2">Additional services often include:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        System design, architecture, and consulting.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        Billing and revenue collection support.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        Collocation services for partner hardware.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        Intermediation for billing verification between partners.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        Fraud management, campaign management, and vendor management.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        Market trend analysis and platform/API integration support.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content and Application Providers */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Content and Application Providers (CASPs)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    They host and distribute third-party applications and content, requiring the installation of their own technical platforms and APIs.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    They are responsible for installing a billing platform (in-house or outsourced) and for accurately charging the end-user.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    They manage user authentication, traffic, security, and overall service delivery.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    They must comply with all regulatory guidelines and technical specifications set by operators and the government.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    They handle customer complaints and ensure service level agreements are met.
                  </li>
                </ul>
              </div>

              {/* Developers */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Developers of Content, Applications and Platforms</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    They must be able to provide proof of ownership for their applications and secure all necessary legal rights or consents for any third-party content they use.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    They are liable for paying all required royalties and are responsible for any copyright infringement.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    They collaborate with CASPs to determine product pricing, factoring in development, hosting, and distribution costs.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    They are accountable for the accuracy and functionality of their product and must promptly address any bugs or errors.
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-primary text-primary-foreground p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Contact us now to learn how to seamlessly integrate VAS solutions into your business.
              </h3>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-6 md:space-y-8">
              {/* Related Links */}
              <div className="bg-muted/30 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary border-b-2 border-primary pb-2">
                  Related Links
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <Link to="/case-studies" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                    Case Studies
                  </Link>
                  <Link to="/services" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                    All Services
                  </Link>
                  <Link to="/about" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                    About Us
                  </Link>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-muted/30 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary border-b-2 border-primary pb-2">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-4 md:mb-6">
                  Contact our support team for assistance
                </p>
                <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px]" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KnowledgeHub;