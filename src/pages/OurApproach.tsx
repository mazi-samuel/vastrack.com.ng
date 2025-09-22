import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Zap, Target, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg";

const OurApproach = () => {
  const keyIngredients = [
    {
      icon: Lightbulb,
      title: "Inspiration",
      description: "We bring fresh, creative ideas to the table to solve old problems in new ways."
    },
    {
      icon: Zap,
      title: "Excitement",
      description: "We believe digital transformation should be an energizing journey, not a daunting task."
    },
    {
      icon: Target,
      title: "Motivation",
      description: "We empower your teams, giving them the tools and confidence to achieve something amazing."
    },
    {
      icon: Recycle,
      title: "Sustainability",
      description: "We build robust solutions designed to last, grow, and adapt with you."
    }
  ];

  const stayAheadPoints = [
    "Harnessing emerging tech to boost your efficiency and supercharge your services.",
    "Creating flexible, scalable solutions that adapt as your market does.",
    "Helping you build a culture of innovation that's always looking around the next corner."
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-12 md:py-16 lg:py-20 bg-hero text-hero-foreground"
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
            {/* Breadcrumb */}
            <div className="mb-4 md:mb-6">
              <nav className="text-xs sm:text-sm text-hero-foreground/70">
                <Link to="/" className="hover:text-hero-foreground transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/about" className="hover:text-hero-foreground transition-colors">About Us</Link>
                <span className="mx-2">/</span>
                <span className="text-primary">Our Approach</span>
              </nav>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Our Approach
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-foreground/90 leading-relaxed px-4 max-w-3xl mx-auto">
              Innovation, agility, and strategic collaboration - the foundation of our success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-sm sm:prose-lg max-w-none">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  At Vastracktech, we get it. The digital world moves fast. To not just keep up, but to truly lead, you need three things: a spark of innovation, the agility to pivot, and the right partners to collaborate with. That's where we come in. We're here to build cutting-edge tech solutions that empower businesses like yours to grow sustainably, work efficiently, and stay fiercely competitive.
                </p>
              </div>

              {/* Your Challenges, Our Shared Mission */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground border-b-2 border-primary pb-2">
                  Your Challenges, Our Shared Mission
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  We don't believe in one-size-fits-all solutions. Instead, we become an extension of your team. We take the time to really understand what makes your business tick—your unique goals, your biggest challenges, and the landscape you operate in. By working side-by-side, we craft solutions that aren't just advanced, but are genuinely right for you. And our job isn't done at launch; we stick around to help you refine, adapt, and thrive as the digital world evolves.
                </p>
              </div>

              {/* How We Help You Stay Ahead */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground border-b-2 border-primary pb-2">
                  How We Help You Stay Ahead
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Staying ahead of the curve requires constant motion. We fuel that momentum by bringing four key ingredients to our partnership:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {keyIngredients.map((ingredient, index) => (
                    <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="bg-primary/10 p-2 md:p-3 rounded-lg flex-shrink-0">
                          <ingredient.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">{ingredient.title}</h3>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{ingredient.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Excellence is a Journey */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground border-b-2 border-primary pb-2">
                  Excellence is a Journey, Not a Destination
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  In today's world, "finished" isn't a thing. Business excellence is a continuous journey of learning and evolving. Because the digital ecosystem never stands still, neither do we. We make sure you're always ahead of the curve by:
                </p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {stayAheadPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Our agile, future-proof approach ensures you're not just following industry standards—you're setting them. No matter your sector, from telecom to finance, healthcare to education, we're committed to delivering the transformative solutions that drive your long-term success.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-primary text-primary-foreground p-6 md:p-8 rounded-2xl text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to build what's next?</h3>
                <p className="text-base md:text-lg mb-4 md:mb-6 text-primary-foreground/90">
                  Let's shape the future together. Partner with Vastracktech today.
                </p>
                <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="lg:sticky lg:top-8 space-y-6 md:space-y-8">
                {/* Related Links */}
                <div className="bg-muted/30 p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary border-b-2 border-primary pb-2">
                    Related Links
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <Link to="/about" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                      About Us
                    </Link>
                    <Link to="/meet-the-team" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                      Meet the Team
                    </Link>
                    <Link to="/vas-solutions" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                      VAS Solutions
                    </Link>
                    <Link to="/partnership-models" className="block text-primary hover:text-primary-glow transition-colors duration-300 py-2 px-3 rounded hover:bg-primary/5 text-sm md:text-base">
                      Partnership Models
                    </Link>
                  </div>
                </div>

                {/* Need Help */}
                <div className="bg-primary/5 p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary">
                    Need Help?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                    Contact our support team for assistance
                  </p>
                  <Button asChild variant="cta" size="sm" className="w-full">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
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

export default OurApproach;