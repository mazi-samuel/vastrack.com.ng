import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Globe, MapPin, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/curated-lifestyle-A8VbOXXiXO8-unsplash.jpg";

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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About Us", isActive: true }
              ]}
            />
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
              <div className="text-6xl font-bold text-primary mb-4">12+</div>
              <div className="text-xl font-semibold text-foreground mb-2">Years of Excellence</div>
              <p className="text-muted-foreground">
                Serving Nigeria's telecommunications industry
              </p>
            </div>
            <div className="px-6">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vastracktech Technologies was founded with a vision to transform how businesses 
                communicate with their customers through innovative telecommunications solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over 12 years of experience has positioned us as a trusted partner for businesses 
                across Nigeria, delivering reliable SMS Gateway, USSD Services, IVR 
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
              Our <span className="text-primary">Values</span>
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
                  <AnimatedIcon 
                    icon={value.icon} 
                    size={40} 
                    className="text-primary" 
                    animationType="float"
                    hoverType="bounce"
                    delay={index * 0.2}
                  />
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

      {/* Learn More About Us */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12 md:mb-16 p-6 md:p-8 rounded-2xl mx-auto max-w-4xl" 
            style={{ backgroundColor: '#5cbc8c' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Learn More About Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white px-2">
              Discover our methodology and meet the dedicated team driving innovation in telecommunications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="h-full">
              <Link to="/our-approach" className="block h-full">
                <div className="text-center group transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full flex flex-col justify-center bg-white group-hover:bg-primary min-h-[280px]">
                    <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                      <MapPin 
                        className="h-8 w-8 md:h-10 md:w-10 transition-colors duration-300 text-primary group-hover:text-white" 
                      />
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 transition-colors duration-300 text-primary group-hover:text-white">
                      Our Approach
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed transition-colors duration-300 text-primary group-hover:text-white/90 px-2">
                      Discover our proven methodology and strategic approach to delivering exceptional telecommunications solutions.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="h-full">
              <Link to="/meet-the-team" className="block h-full">
                <div className="text-center group transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full flex flex-col justify-center bg-white group-hover:bg-primary min-h-[280px]">
                    <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                      <AnimatedIcon 
                        icon={Users}
                        size={32}
                        className="transition-colors duration-300 text-primary group-hover:text-white" 
                        animationType="wiggle"
                        hoverType="bounce"
                      />
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 transition-colors duration-300 text-primary group-hover:text-white">
                      Meet the Team
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed transition-colors duration-300 text-primary group-hover:text-white/90 px-2">
                      Get to know the passionate professionals behind our innovative telecommunications solutions.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;