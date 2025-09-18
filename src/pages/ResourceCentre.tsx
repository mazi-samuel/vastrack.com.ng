import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Users, TrendingUp, Download, Video, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ResourceCentre = () => {
  const resourceOptions = [
    {
      icon: BookOpen,
      title: "Knowledge Hub",
      description: "Access comprehensive guides, documentation, and best practices",
      link: "/knowledge-hub",
      items: [
        "API Documentation",
        "Integration Guides",
        "Best Practices",
        "Technical Whitepapers",
        "Implementation Tutorials",
        "Platform Overview"
      ]
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Real-world success stories and implementation examples",
      link: "/case-studies",
      items: [
        "Banking Implementations",
        "Healthcare Solutions",
        "Education Deployments",
        "Enterprise Integrations",
        "Government Projects",
        "Startup Success Stories"
      ]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides and demonstrations",
      link: "#",
      items: [
        "Getting Started Videos",
        "API Integration Demos",
        "Feature Walkthroughs",
        "Webinar Recordings",
        "Training Sessions",
        "Product Updates"
      ]
    },
    {
      icon: Download,
      title: "Downloads",
      description: "SDKs, code samples, and technical resources",
      link: "#",
      items: [
        "SDK Downloads",
        "Code Samples",
        "Plugin Libraries",
        "Development Tools",
        "Testing Utilities",
        "Configuration Files"
      ]
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with developers and get community support",
      link: "#",
      items: [
        "Developer Discussions",
        "Q&A Support",
        "Feature Requests",
        "Bug Reports",
        "Community Projects",
        "Knowledge Sharing"
      ]
    },
    {
      icon: HelpCircle,
      title: "Support Center",
      description: "Get help from our technical support team",
      link: "#",
      items: [
        "Technical Support",
        "Account Management",
        "Billing Support",
        "Service Status",
        "Contact Support",
        "Emergency Support"
      ]
    }
  ];

  const featuredResources = [
    {
      icon: BookOpen,
      title: "Getting Started Guide",
      description: "Complete guide to implementing Vastracktech solutions in your organization.",
      category: "Documentation",
      readTime: "15 min read"
    },
    {
      icon: FileText,
      title: "Banking Integration Case Study",
      description: "How a major Nigerian bank increased customer engagement by 300% using our SMS and USSD solutions.",
      category: "Case Study",
      readTime: "8 min read"
    },
    {
      icon: Video,
      title: "API Integration Walkthrough",
      description: "Step-by-step video tutorial on integrating our APIs into your existing systems.",
      category: "Video Tutorial",
      readTime: "25 min watch"
    },
    {
      icon: TrendingUp,
      title: "2024 Industry Report",
      description: "Comprehensive analysis of VAS trends and market opportunities in Nigeria.",
      category: "Research",
      readTime: "20 min read"
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
              Resource Centre
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed">
              Everything you need to succeed with Vastracktech solutions. Access documentation, 
              case studies, tutorials, and get the support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Options Grid - Similar to VAS Solutions */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-16 p-8 rounded-2xl mx-auto max-w-4xl" 
            style={{ backgroundColor: '#5cbc8c' }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Explore Our Resources
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white">
              Comprehensive resources to help you implement, integrate, and optimize Vastracktech solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceOptions.map((resource, index) => (
              <div key={index}>
                {resource.link === "#" ? (
                  <div className="text-center group transition-all duration-300 hover:transform hover:scale-110 cursor-pointer">
                    <div 
                      className="rounded-2xl p-8 border-2 transition-all duration-300 group-hover:shadow-xl group-hover:bg-[#5cbc8c]"
                      style={{ 
                        backgroundColor: 'white',
                        borderColor: '#5cbc8c'
                      }}
                    >
                      <div className="bg-[#5cbc8c]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                        <resource.icon 
                          className="h-10 w-10 transition-colors duration-300 group-hover:text-white" 
                          style={{ color: '#5cbc8c' }}
                        />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
                        {resource.title}
                      </h3>
                      <p className="leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
                        {resource.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <Link to={resource.link} className="block">
                    <div className="text-center group transition-all duration-300 hover:transform hover:scale-110 cursor-pointer">
                      <div 
                        className="rounded-2xl p-8 border-2 transition-all duration-300 group-hover:shadow-xl group-hover:bg-[#5cbc8c]"
                        style={{ 
                          backgroundColor: 'white',
                          borderColor: '#5cbc8c'
                        }}
                      >
                        <div className="bg-[#5cbc8c]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                          <resource.icon 
                            className="h-10 w-10 transition-colors duration-300 group-hover:text-white" 
                            style={{ color: '#5cbc8c' }}
                          />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
                          {resource.title}
                        </h3>
                        <p className="leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: '#5cbc8c' }}>
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Featured Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handpicked resources to help you get the most out of our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="p-6 bg-card border-0 hover:shadow-card transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-primary font-medium">{resource.category}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{resource.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default ResourceCentre;