import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Play } from "lucide-react";

const NewsMedia = () => {
  const newsItems = [
    {
      type: "Article",
      title: "5G Network Infrastructure: Transforming Nigeria's Digital Landscape",
      excerpt: "Explore how 5G technology is revolutionizing telecommunications and creating new opportunities for businesses across Nigeria.",
      date: "September 10, 2024",
      image: "/placeholder.svg",
      category: "Technology"
    },
    {
      type: "Press Release",
      title: "Vastrack Technologies Partners with Leading Telecom Providers",
      excerpt: "Strategic partnerships announced to expand VAS solutions and enhance customer experience across multiple networks.",
      date: "September 5, 2024",
      image: "/placeholder.svg",
      category: "Business"
    },
    {
      type: "Video",
      title: "Digital Transformation in African Telecommunications",
      excerpt: "Watch our CEO discuss the future of telecom services and how value-added solutions are driving innovation.",
      date: "August 28, 2024",
      image: "/placeholder.svg",
      category: "Interview",
      isVideo: true
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            News & Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest updates, insights, and announcements 
            from Vastrack Technologies and the telecom industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.isVideo && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                  <span className="ml-auto text-primary font-medium">{item.type}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Button variant="outline" className="group/btn">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary-glow">
            View All News & Updates
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsMedia;