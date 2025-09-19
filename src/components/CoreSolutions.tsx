import { Card } from "@/components/ui/card";
import { MessageSquare, Smartphone, Phone, CreditCard } from "lucide-react";

const CoreSolutions = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: "SMS Gateway",
      description: "Enterprise-grade messaging solutions with high deliverability and real-time tracking."
    },
    {
      icon: Smartphone,
      title: "USSD Services", 
      description: "Interactive mobile solutions accessible to all phone users, perfect for financial and information services."
    },
    {
      icon: Phone,
      title: "IVR Solutions",
      description: "Automated voice response systems for enhanced customer service and engagement."
    },
    {
      icon: CreditCard,
      title: "Mobile Payments",
      description: "Secure, integrated payment solutions for seamless mobile transactions."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Our Core 
            <span className="text-primary"> Solutions</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 text-center hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card border-0 min-h-[280px] flex flex-col"
            >
              <div className="bg-gradient-primary w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 flex-shrink-0">
                <solution.icon className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary flex-shrink-0">
                {solution.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSolutions;