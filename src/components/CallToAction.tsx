import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: '#5cbc8c' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our experts to discuss your specific requirements 
            and discover how our VAS solutions can drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="text-lg px-8">
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Us Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-white hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" 
                style={{ color: '#5cbc8c' }}
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;