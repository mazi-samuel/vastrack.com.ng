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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Core 
            <span className="text-primary"> Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card border-0"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <solution.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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