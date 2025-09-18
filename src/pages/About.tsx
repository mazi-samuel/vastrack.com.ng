import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer-Centric",
      description: "We put our clients at the heart of everything we do, delivering personalized solutions."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and creative solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality services with attention to detail."
    },
    {
      icon: Globe,
      title: "Reliability",
      description: "Dependable infrastructure and support you can count on 24/7."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About Vastracktech
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed">
              Leading Nigeria's telecommunications revolution with innovative 
              Value-Added Services since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-card rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-primary mb-4">15+</div>
              <div className="text-xl font-semibold text-foreground mb-2">Years of Excellence</div>
              <p className="text-muted-foreground">
                Serving Nigeria's telecommunications industry
              </p>
            </div>
            <div className="px-6">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vastracktech Technologies was founded with a vision to transform how businesses 
                communicate with their customers through innovative telecommunications solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over 15 years of experience has positioned us as a trusted partner for over 1000 
                businesses across Nigeria, delivering reliable SMS Gateway, USSD Services, IVR 
                Solutions, and Mobile Payment platforms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've processed over 50 million messages monthly while maintaining a 99.9% uptime, 
                making us the preferred choice for enterprises seeking robust VAS solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide our mission to deliver exceptional 
              telecommunications solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-0"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-12 bg-gradient-card border-0">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To be West Africa's leading provider of Value-Added Services, setting the 
                standard for excellence in telecommunications solutions while fostering 
                digital transformation across the region.
              </p>
            </Card>
            
            <Card className="p-12 bg-gradient-primary text-primary-foreground border-0">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                To empower businesses across Nigeria with reliable, innovative, and scalable 
                telecommunications solutions that drive growth, enhance customer engagement, 
                and create lasting value.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;