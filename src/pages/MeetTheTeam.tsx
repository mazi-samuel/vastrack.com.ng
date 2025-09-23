import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Card } from "@/components/ui/card";
import { Users, Mail, Linkedin } from "lucide-react";
import heroImage from "@/assets/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Chiboka",
      position: "MD/CEO",
      description: "Visionary leader driving strategic growth and innovation",
      initials: "CB"
    },
    {
      name: "Chigozie",
      position: "VP Operations",
      description: "Operational excellence and business process optimization",
      initials: "CG"
    },
    {
      name: "Oluwabiyi",
      position: "CTO",
      description: "Technical innovation and architecture leadership",
      initials: "OB"
    },
    {
      name: "John",
      position: "Project Manager",
      description: "Project delivery and team coordination expert",
      initials: "JN"
    },
    {
      name: "Lola",
      position: "Financial Analyst",
      description: "Financial planning and business analysis specialist",
      initials: "LO"
    },
    {
      name: "Elijah",
      position: "Backend Developer",
      description: "Server-side development and API integration expert",
      initials: "EL"
    },
    {
      name: "Bernadine",
      position: "Front end Developer",
      description: "User interface development and client-side specialist",
      initials: "BD"
    },
    {
      name: "Damilare",
      position: "Product Development",
      description: "Product strategy and development lifecycle management",
      initials: "DM"
    },
    {
      name: "Tosin",
      position: "Brand Manager",
      description: "Brand strategy and marketing communications",
      initials: "TS"
    },
    {
      name: "HR",
      position: "Human Resources",
      description: "Talent management and organizational development",
      initials: "HR"
    },
    {
      name: "Mazi",
      position: "Full stack developer (Intern)",
      description: "Full-stack development and learning new technologies",
      initials: "MZ"
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
                { label: "About Us", href: "/about" },
                { label: "Meet the Team", isActive: true }
              ]}
              className="mb-8"
            />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Meet the Team
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed">
              The passionate professionals behind Vastracktech's innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our Talented Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Vastracktech, our success is driven by a diverse team of experts who bring together 
              years of experience in telecommunications, software development, and business innovation. 
              Each team member contributes unique skills and perspectives that help us deliver 
              world-class VAS solutions to our clients.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="max-w-7xl mx-auto">
            {/* First 8 members in regular grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mb-12">
              {teamMembers.slice(0, 8).map((member, index) => (
                <div 
                  key={index} 
                  className="text-center group transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Profile Photo Placeholder */}
                  <div className="relative mb-6">
                    <div 
                      className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/50 transition-all duration-300 border-4 border-primary/10 group-hover:border-primary/20 hover:shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(92, 188, 140, 0.2) 0%, rgba(92, 188, 140, 0.4) 100%)`
                      }}
                    >
                      {/* Photo Upload Area */}
                      <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300 relative overflow-hidden">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary mb-2">
                            {member.initials}
                          </div>
                          <div className="text-sm text-muted-foreground opacity-70">
                            Photo
                          </div>
                        </div>
                        
                        {/* Hover overlay for future photo upload */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <AnimatedIcon 
                            icon={Users}
                            size={40}
                            className="text-primary"
                            animationType="pulse"
                            hoverType="scale"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
                  </div>

                  {/* Member Info */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-base">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      {member.description}
                    </p>
                  </div>

                  {/* Social Links Placeholder */}
                  <div className="flex justify-center gap-4 mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                      <AnimatedIcon 
                        icon={Mail}
                        size={18}
                        className="text-primary"
                        animationType="none"
                        hoverType="glow"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                      <AnimatedIcon 
                        icon={Linkedin}
                        size={18}
                        className="text-primary"
                        animationType="none"
                        hoverType="bounce"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Last 3 members centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl">
                {teamMembers.slice(8).map((member, index) => (
                  <div 
                    key={index + 8} 
                    className="text-center group transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Profile Photo Placeholder */}
                    <div className="relative mb-6">
                      <div 
                        className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/50 transition-all duration-300 border-4 border-primary/10 group-hover:border-primary/20 hover:shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, rgba(92, 188, 140, 0.2) 0%, rgba(92, 188, 140, 0.4) 100%)`
                        }}
                      >
                        {/* Photo Upload Area */}
                        <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300 relative overflow-hidden">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">
                              {member.initials}
                            </div>
                            <div className="text-sm text-muted-foreground opacity-70">
                              Photo
                            </div>
                          </div>
                          
                          {/* Hover overlay for future photo upload */}
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <AnimatedIcon 
                              icon={Users}
                              size={40}
                              className="text-primary"
                              animationType="pulse"
                              hoverType="scale"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Indicator */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-base">
                        {member.position}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                        {member.description}
                      </p>
                    </div>

                    {/* Social Links Placeholder */}
                    <div className="flex justify-center gap-4 mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                        <AnimatedIcon 
                          icon={Mail}
                          size={18}
                          className="text-primary"
                          animationType="none"
                          hoverType="glow"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                        <AnimatedIcon 
                          icon={Linkedin}
                          size={18}
                          className="text-primary"
                          animationType="none"
                          hoverType="bounce"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Team Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These core principles guide how we work together and serve our clients every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <AnimatedIcon 
                    icon={Users}
                    size={48}
                    className="mx-auto text-primary"
                    animationType="float"
                    hoverType="bounce"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of teamwork and open communication to achieve extraordinary results.
                </p>
              </Card>

              <Card className="p-8 text-center bg-card border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <AnimatedIcon 
                    icon={Users}
                    size={48}
                    className="mx-auto text-primary"
                    animationType="pulse"
                    hoverType="glow"
                    delay={0.2}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Constantly pushing boundaries to deliver cutting-edge solutions that drive digital transformation.
                </p>
              </Card>

              <Card className="p-8 text-center bg-card border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <AnimatedIcon 
                    icon={Users}
                    size={48}
                    className="mx-auto text-primary"
                    animationType="wiggle"
                    hoverType="spin"
                    delay={0.4}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to delivering the highest quality solutions and exceptional service to every client.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 bg-gradient-primary text-primary-foreground border-0">
              <div className="mb-6">
                <AnimatedIcon 
                  icon={Users}
                  size={64}
                  className="mx-auto text-primary-foreground"
                  animationType="heartbeat"
                  hoverType="bounce"
                />
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Are you passionate about telecommunications and innovation? We're always looking 
                for talented individuals to join our mission of transforming businesses across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:careers@vastracktech.com.ng" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <AnimatedIcon 
                    icon={Mail}
                    size={20}
                    className="mr-2"
                    animationType="none"
                    hoverType="bounce"
                  />
                  Send Your CV
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeetTheTeam;