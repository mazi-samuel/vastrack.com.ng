import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6">
            <span className="text-hero-foreground/70">Home</span>
            <span className="mx-2 text-hero-foreground/70">/</span>
            <span className="text-hero-foreground/70">Resource Centre</span>
            <span className="mx-2 text-hero-foreground/70">/</span>
            <span className="text-blue-300">Case Studies</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Case Studies — Success Stories of Vastracktech VAS Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-muted/50 p-8 rounded-lg mb-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    At Vastracktech, our greatest pride comes from seeing our solutions make a real difference for our clients. We don't just provide technology; we partner with businesses to solve complex challenges and drive tangible growth. Here are a few stories that show how we've helped organizations transform their operations and better serve their customers.
                  </p>
                </div>

                {/* Case Study 1 */}
                <div className="mb-16">
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Case Study 1: Bringing Mobile Payments to Every Corner of Africa
                  </h2>
                  <div className="border-l-4 border-primary pl-6 space-y-4">
                    <div>
                      <span className="font-semibold text-foreground">Client:</span>
                      <span className="ml-2 text-muted-foreground">A Major African Telecom Operator</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Challenge:</span>
                      <span className="ml-2 text-muted-foreground">This telecom leader needed a mobile payments platform that could work for everyone—from city users with smartphones to rural communities with basic phones. They struggled to find a solution that was both scalable and accessible across diverse regions with different devices and network conditions.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Our Solution:</span>
                      <span className="ml-2 text-muted-foreground">We built a robust mobile payments platform that integrated seamlessly with their existing telecom infrastructure. It enabled bill payments, airtime top-ups, and money transfers through simple SMS, USSD codes, and mobile apps, ensuring it worked perfectly even in low-bandwidth areas.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Results:</span>
                      <ul className="ml-6 mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Mobile transaction volume grew by <strong>35%</strong> within just six months.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          They successfully expanded financial services into remote, previously underserved regions.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          User engagement soared thanks to the intuitive, multi-channel interface.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="mb-16">
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Case Study 2: Connecting Rural Communities to Healthcare
                  </h2>
                  <div className="border-l-4 border-primary pl-6 space-y-4">
                    <div>
                      <span className="font-semibold text-foreground">Client:</span>
                      <span className="ml-2 text-muted-foreground">A National Health Service Provider</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Challenge:</span>
                      <span className="ml-2 text-muted-foreground">How do you deliver critical healthcare information and appointment services to rural communities where internet access is scarce or non-existent? This was the core challenge our client faced.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Our Solution:</span>
                      <span className="ml-2 text-muted-foreground">We developed a simple, USSD-based platform that worked on any basic feature phone. It allowed users to access medical records, schedule appointments, and receive health tips instantly, without needing an internet connection.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Results:</span>
                      <ul className="ml-6 mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Patient engagement in rural areas increased by <strong>40%</strong>.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Missed appointments dropped by <strong>25%</strong> thanks to automated reminders.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          The provider delivered cost-effective, vital services to communities that needed it most.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Case Study 3 */}
                <div className="mb-16">
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Case Study 3: Making Banking Accessible by Voice
                  </h2>
                  <div className="border-l-4 border-primary pl-6 space-y-4">
                    <div>
                      <span className="font-semibold text-foreground">Client:</span>
                      <span className="ml-2 text-muted-foreground">A Leading African Bank</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Challenge:</span>
                      <span className="ml-2 text-muted-foreground">The bank wanted to offer customers easy access to their accounts and transaction services without requiring them to have internet access or visit a branch, aiming to reduce pressure on their call centers.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Our Solution:</span>
                      <span className="ml-2 text-muted-foreground">We implemented a secure IVR (Interactive Voice Response) banking system. Customers could simply call a toll-free number and use voice prompts to check balances, transfer funds, and pay bills—all without speaking to an agent.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Results:</span>
                      <ul className="ml-6 mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Routine customer service call volume decreased by <strong>30%</strong>.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Customer satisfaction improved with 24/7 access to key banking services.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          The bank saw greater operational efficiency and lower support costs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Case Study 4 */}
                <div className="mb-16">
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Case Study 4: Supercharging Support for an E-Commerce Giant
                  </h2>
                  <div className="border-l-4 border-primary pl-6 space-y-4">
                    <div>
                      <span className="font-semibold text-foreground">Client:</span>
                      <span className="ml-2 text-muted-foreground">A Fast-Growing E-Commerce Company</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Challenge:</span>
                      <span className="ml-2 text-muted-foreground">As this company grew, so did customer inquiries. They needed a way to manage support requests efficiently across multiple channels without compromising on speed or customer satisfaction.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Our Solution:</span>
                      <span className="ml-2 text-muted-foreground">We provided an integrated, multi-channel support system using SMS, USSD, and IVR. This system handled order status inquiries and common questions automatically, integrating with their CRM for a seamless experience.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Results:</span>
                      <ul className="ml-6 mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Customer satisfaction scores rose by <strong>20%</strong> due to faster, 24/7 response times.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          The call center's workload was reduced by <strong>35%</strong>, freeing agents to handle more complex issues.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Proactive mobile support helped increase customer retention.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Case Study 5 */}
                <div className="mb-16">
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Case Study 5: Powering a Fintech Revolution with USSD
                  </h2>
                  <div className="border-l-4 border-primary pl-6 space-y-4">
                    <div>
                      <span className="font-semibold text-foreground">Client:</span>
                      <span className="ml-2 text-muted-foreground">An Innovative African Fintech Startup</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Challenge:</span>
                      <span className="ml-2 text-muted-foreground">This startup had a bold mission: to bring digital banking to the millions of people using basic mobile phones in areas with poor or no internet connectivity. They needed a secure and ultra-reliable platform.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Our Solution:</span>
                      <span className="ml-2 text-muted-foreground">We created a USSD-based banking solution that enabled users to perform transactions, check balances, and pay bills—all without a data connection. The system was built with robust, end-to-end security to handle high volumes of financial traffic.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">The Results:</span>
                      <ul className="ml-6 mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          They onboarded over <strong>500,000</strong> new users in the first three months.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          Transaction volume increased by <strong>60%</strong>.
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">→</span>
                          They truly expanded financial inclusion, reaching customers who had been left behind by traditional digital banking.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-primary rounded-lg p-8 text-center">
                  <p className="text-xl text-white leading-relaxed">
                    These stories are a testament to the practical impact of our work. At Vastracktech, we are dedicated to delivering innovative, scalable solutions that solve real-world business challenges and create meaningful progress.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-card p-6 rounded-lg border mb-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">Related Links</h3>
                    <div className="space-y-3">
                      <a href="/banking-solutions" className="block text-primary hover:underline">Banking Solutions</a>
                      <a href="/health-services" className="block text-primary hover:underline">Health Services</a>
                      <a href="/education-tools" className="block text-primary hover:underline">Education Tools</a>
                      <a href="/technical-architecture" className="block text-primary hover:underline">Technical Architecture</a>
                      <a href="/partnership-models" className="block text-primary hover:underline">Partnership Models</a>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-4 text-primary">Need Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      Contact our support team for assistance
                    </p>
                    <Button variant="cta" className="w-full">
                      Contact Us
                    </Button>
                  </div>
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

export default CaseStudies;