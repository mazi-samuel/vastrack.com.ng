import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Clock, Code } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance with international standards."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business needs."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring."
    },
    {
      icon: Code,
      title: "Easy Integration",
      description: "Robust APIs and documentation for seamless implementation."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why Choose 
            <span className="text-primary"> Vastracktech?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional value through our proven expertise, cutting-edge technology, 
            and unwavering commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card 
                className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-muted border-0 group"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <AnimatedIcon
                    icon={feature.icon}
                    size={40}
                    className="text-primary"
                    animationType="pulse"
                    hoverType="glow"
                    delay={index * 0.3}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;