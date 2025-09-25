import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Users, Handshake, TrendingUp, Building2, Globe, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/amina-atar-4mEyvORkbN0-unsplash.jpg";

const PartnershipModelsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-32"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-hero/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "VAS Solutions", href: "/vas-solutions" },
              { label: "Partnership Models", isActive: true }
            ]}
            className="mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            Partnership Models – Driving Success Together Through Strategic Collaboration
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Vastracktech, we know that the best innovations happen through collaboration. We're committed to building strong, mutually beneficial partnerships with telecom operators, enterprises, government agencies, and technology providers. However you aim to grow: whether by expanding your reach, enhancing your services, or co-creating new solutions, we offer flexible partnership models designed to help you meet your goals.
              </p>
            </div>

            {/* Why Partner with Vastracktech */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Partner with Vastracktech?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Innovative Solutions</strong> – Access to our state-of-the-art VAS solutions for mobile, fintech, healthcare, education, and more.
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Scalable & Flexible Models</strong> – We offer multiple partnership structures including revenue-sharing, joint ventures, and reseller models.
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Joint Business Development</strong> – Collaborative marketing, co-branding, and go-to-market strategies.
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Seamless Integration</strong> – Easily integrate our solutions into your existing infrastructure with minimal disruption.
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Strong Support System</strong> – Dedicated account managers, training, and continuous technical support to ensure success.
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Risk Mitigation</strong> – Share the risks of entering new markets or expanding product offerings with a trusted partner.
                  </span>
                </div>
              </div>
            </div>

            {/* Our Partnership Models */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Partnership Models
              </h2>
              <div className="space-y-8">
                {/* Technology Partner */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center mb-3">
                    <ArrowRight className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Technology Partner</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Collaborate with us to co-develop new VAS products and services. Share expertise, resources, and innovation to create cutting-edge solutions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-gray-600">Revenue Sharing – Share in the success of jointly developed solutions.</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-gray-600">Global Reach – Tap into new markets and extend your service offering with innovative digital solutions.</span>
                    </div>
                  </div>
                </div>

                {/* Reseller Partner */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center mb-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Reseller Partner</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Become a reseller of our VAS solutions and offer high-quality products to your existing customer base.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-600">Earn Commissions – Resell our products and earn attractive commissions.</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-600">Diverse Offerings – Access a range of VAS solutions tailored to different industries.</span>
                    </div>
                  </div>
                </div>

                {/* Distribution Partner */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center mb-3">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Distribution Partner</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Act as a distribution channel for our services, facilitating the expansion of our products in new territories.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm text-gray-600">Market Expansion – Leverage our reputation and resources to reach new customers in untapped markets.</span>
                    </div>
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm text-gray-600">Product Packages – Customize packages for specific market needs and customer segments.</span>
                    </div>
                  </div>
                </div>

                {/* Service Provider Partner */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-3">
                    <ArrowRight className="h-5 w-5 text-orange-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Service Provider Partner</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Provide complementary services to our VAS solutions, such as billing, customer support, and consultancy, enhancing the value for end customers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <HeadphonesIcon className="h-4 w-4 text-orange-600 mr-2" />
                      <span className="text-sm text-gray-600">Integrated Services – Expand your service portfolio with value-added solutions.</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-orange-600 mr-2" />
                      <span className="text-sm text-gray-600">Cross-Selling Opportunities – Combine our solutions with your offerings to maximize revenue streams.</span>
                    </div>
                  </div>
                </div>

                {/* Strategic Alliances */}
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-3">
                    <ArrowRight className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Strategic Alliances</h3>
                  </div>
                  <p className="text-gray-700">
                    Establish long-term alliances that focus on innovation, co-marketing, and co-development to address emerging market trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Achieving Mutual Growth */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Achieving Mutual Growth and Success
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our partnership models are designed to foster collaborative growth, leveraging each partner's strengths to unlock new opportunities and markets. Whether you're a telecom operator, system integrator, technology company, or an enterprise looking to expand your digital services, Vastracktech provides the tools, resources, and support to help you succeed.
              </p>
            </div>

            {/* Call to Action */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Handshake className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">
                  Join Us Today! Let's create value together and transform industries through innovative VAS solutions.
                </h3>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="sticky top-8 space-y-8">
            {/* Related Links */}
            <div className="bg-muted/30 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary border-b-2 border-primary pb-2">
                Related Links
              </h3>
              <div className="space-y-2 md:space-y-3">
                <Link to="/banking-solutions" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                  Banking Solutions
                </Link>
                <Link to="/health-services" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                  Health Services
                </Link>
                <Link to="/education-tools" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                  Education Tools
                </Link>
                <Link to="/technical-architecture" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                  Technical Architecture
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
                <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnershipModelsPage;