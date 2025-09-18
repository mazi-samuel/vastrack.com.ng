import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoreSolutions from "@/components/CoreSolutions";
import WhyChoose from "@/components/WhyChoose";
import Statistics from "@/components/Statistics";
import CallToAction from "@/components/CallToAction";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CoreSolutions />
      <WhyChoose />
      <Statistics />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
