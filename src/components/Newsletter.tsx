import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="h-12 w-12 md:h-16 md:w-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4 px-2">
            Stay Updated with Latest Tech Insights
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-black/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter and get the latest updates on telecommunications, 
            technology trends, and industry insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto items-stretch px-4">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 h-12 md:h-14 bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-primary px-4 text-base"
            />
            <Button 
              size="lg"
              className="h-12 md:h-14 bg-primary text-primary-foreground hover:bg-white hover:text-primary border border-primary font-semibold px-6 md:px-8 transition-all duration-300 whitespace-nowrap text-base min-w-[120px]"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-black/70 mt-3 md:mt-4 px-4">
            No spam, unsubscribe at any time. Your privacy is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;