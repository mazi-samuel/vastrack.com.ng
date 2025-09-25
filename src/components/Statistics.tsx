import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CountUp = ({ end, duration = 2, isInView }: { end: string, duration?: number, isInView: boolean }) => {
  const [count, setCount] = useState(0);
  const numberValue = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    
    let startTime = Date.now();
    const animateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const currentCount = Math.floor(progress * numberValue);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    animateCount();
  }, [isInView, numberValue, duration]);

  return <span>{count}{suffix}</span>;
};

const Statistics = () => {
  const stats = [
    {
      number: "30+",
      label: "Active Clients",
      description: "Businesses trust our services"
    },
    {
      number: "99%",
      label: "Uptime",
      description: "Reliable service guarantee"
    },
    {
      number: "30M+",
      label: "Messages/Month",
      description: "Successfully delivered monthly"
    },
    {
      number: "12+",
      label: "Years Experience",
      description: "Industry expertise"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20" style={{ backgroundColor: 'white' }} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16 p-6 md:p-8 rounded-2xl mx-auto max-w-4xl" 
          style={{ backgroundColor: '#5cbc8c' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white px-2">
            Our numbers speak for themselves - delivering exceptional results for businesses across Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group h-full"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div 
                className="rounded-2xl p-6 md:p-8 border-2 transition-all duration-100 ease-out group-hover:shadow-2xl group-hover:shadow-[#5cbc8c]/30 group-hover:bg-[#5cbc8c] group-hover:border-[#4a9b73] relative overflow-hidden h-full flex flex-col justify-center min-h-[240px] md:min-h-[280px]"
                style={{ 
                  backgroundColor: 'white',
                  borderColor: '#5cbc8c'
                }}
              >
                {/* Animated background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5cbc8c]/0 via-[#5cbc8c]/0 to-[#5cbc8c]/0 group-hover:from-[#5cbc8c]/10 group-hover:via-[#5cbc8c]/5 group-hover:to-[#5cbc8c]/10 transition-all duration-100 ease-out"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-100 ease-out group-hover:text-white group-hover:text-4xl sm:group-hover:text-5xl md:group-hover:text-6xl lg:group-hover:text-7xl group-hover:drop-shadow-lg group-hover:font-black"
                    style={{ color: '#5cbc8c' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring", stiffness: 100 }}
                  >
                    <CountUp end={stat.number} duration={2} isInView={isInView} />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 transition-all duration-100 ease-out group-hover:text-white group-hover:text-xl sm:group-hover:text-2xl md:group-hover:text-3xl group-hover:font-bold group-hover:drop-shadow-md" style={{ color: '#5cbc8c' }}>
                    {stat.label}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed transition-all duration-100 ease-out group-hover:text-white group-hover:font-semibold group-hover:text-base sm:group-hover:text-lg group-hover:drop-shadow-sm text-center px-2" style={{ color: '#5cbc8c' }}>
                    {stat.description}
                  </p>
                </div>
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#5cbc8c]/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;