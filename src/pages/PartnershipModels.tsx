import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Users, Handshake, TrendingUp, Building2, Globe, HeadphonesIcon } from "lucide-react";

const PartnershipModelsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-32">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-8">
            <span className="text-gray-300">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-300">VAS Solutions</span>
            <span className="mx-2">/</span>
            <span className="text-blue-400">Partnership Models</span>
          </nav>
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
                At Vastracktech, we know that the best innovations happen through collaboration. We're committed to building strong, mutually beneficial partnerships with telecom operators, enterprises, government agencies, and technology providers. However you aim to grow—whether by expanding your reach, enhancing your services, or co-creating new solutions—we offer flexible partnership models designed to help you meet your goals.
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
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-3">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Technology Partner</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Collaborate with us to co-develop new VAS products and services. Share expertise, resources, and innovation to create cutting-edge solutions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Revenue Sharing – Share in the success of jointly developed solutions.</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-blue-600 mr-2" />
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
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <Handshake className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">
                  Join Us Today! Let's create value together and transform industries through innovative VAS solutions.
                </h3>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Related Links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Related Links</h3>
                <div className="space-y-3">
                  <a href="/banking-solutions" className="block text-teal-600 hover:text-teal-700 hover:underline">
                    Banking Solutions
                  </a>
                  <a href="/health-services" className="block text-teal-600 hover:text-teal-700 hover:underline">
                    Health Services
                  </a>
                  <a href="/education-tools" className="block text-teal-600 hover:text-teal-700 hover:underline">
                    Education Tools
                  </a>
                  <a href="/technical-architecture" className="block text-teal-600 hover:text-teal-700 hover:underline">
                    Technical Architecture
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Contact our support team for assistance
                </p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnershipModelsPage;