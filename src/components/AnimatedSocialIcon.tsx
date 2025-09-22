import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedSocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
  delay?: number;
}

const AnimatedSocialIcon: React.FC<AnimatedSocialIconProps> = ({
  icon: Icon,
  href,
  label,
  delay = 0
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer min-w-[40px] min-h-[40px]"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        rotate: [0, -10, 10, 0],
        boxShadow: "0 0 20px rgba(92, 188, 140, 0.4)",
        transition: { 
          duration: 0.3,
          rotate: {
            duration: 0.4,
            ease: "easeInOut"
          }
        }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      aria-label={label}
    >
      <motion.div
        whileHover={{
          rotate: 360,
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      >
        <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
      </motion.div>
    </motion.a>
  );
};

export default AnimatedSocialIcon;