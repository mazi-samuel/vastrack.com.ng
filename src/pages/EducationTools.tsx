import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, BookOpen, Video, Brain, Bell, Phone, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg";

const EducationTools = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-hero text-hero-foreground overflow-hidden"
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
                { label: "VAS Solutions", href: "/vas-solutions" },
                { label: "Education Tools", isActive: true }
              ]}
            />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Education Tools: Empowering Learning with Digital Innovation
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At Vastracktech, we believe learning should be accessible to everyone, everywhere. That's why we've built a suite of education tools that help schools, teachers, and students connect and thrive in a digital world. Whether through a smartphone, a simple text message, or a web portal, our solutions make it easier to deliver engaging and effective learning experiences.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-4">
                  Why Choose Vastracktech's Education Tools?
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Accessible Anywhere</strong> – Works via SMS, USSD, web, and mobile apps.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Interactive Learning</strong> – Engage students through quizzes, assessments, and virtual classrooms.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Seamless API Integration</strong> – Easily connects with existing LMS and school management systems.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>AI & Automation</strong> – Smart tutoring, personalized learning, and automated grading.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Scalable & Cost-Effective</strong> – Ideal for schools, universities, edtech platforms, and corporate training.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Secure & Reliable</strong> – Data encryption and compliance with education standards.
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-4">
                  Comprehensive <span className="text-primary">Education Solutions</span>
                </h2>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our VAS-driven education tools offer a wide range of features to enhance learning and administration:
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">USSD & SMS Learning Platforms</h3>
                      <p className="text-muted-foreground">Deliver bite-sized lessons and quizzes directly to basic mobile phones, no internet required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">E-Library & Digital Content</h3>
                      <p className="text-muted-foreground">Provide instant access to a vast collection of digital books, research materials, and study guides.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Video className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Virtual Classrooms & e-Learning Portals</h3>
                      <p className="text-muted-foreground">Host online courses, live tutoring sessions, and collaborative learning.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">AI-Powered Assessments & Reports</h3>
                      <p className="text-muted-foreground">Get real-time insights into student performance and progress with automated grading and analytics.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Bell className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">School & Exam Notifications</h3>
                      <p className="text-muted-foreground">Keep everyone informed with automated alerts for schedules, exam results, and important deadlines.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">IVR-Based Learning</h3>
                      <p className="text-muted-foreground">Offer voice-assisted courses and lessons for students in low-literacy or remote areas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">School Management Solutions</h3>
                      <p className="text-muted-foreground">Automate day-to-day tasks like admissions, attendance tracking, and administrative reporting.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-4">
                  Transforming Education Through Technology
                </h2>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're dedicated to transforming education through technology. Our tools are designed for everyone from K-12 schools and universities to edtech startups and government initiatives, all with the goal of improving accessibility and driving meaningful digital change.
                </p>

                <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground mb-8">
                  <BookOpen className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to redefine learning? Partner with us at Vastracktech, and let's build the future of education together.
                  </h3>
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
                    <Link to="/technical-architecture" className="block text-primary hover:text-primary-glow transition-colors duration-300">
                      Technical Architecture
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
                    <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-h-[48px]">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default EducationTools;