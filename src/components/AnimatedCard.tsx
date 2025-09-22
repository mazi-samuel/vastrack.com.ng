import React from 'react';
import { motion } from 'framer-motion';
import { Card as ShadcnCard } from '@/components/ui/card';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverType?: 'lift' | 'glow' | 'scale' | 'tilt';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '',
  delay = 0,
  hoverType = 'lift'
}) => {
  const getHoverAnimation = () => {
    const easing = "easeOut" as const;
    
    switch (hoverType) {
      case 'lift':
        return {
          y: -8,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3, ease: easing }
        };
      case 'glow':
        return {
          boxShadow: "0 0 30px rgba(92, 188, 140, 0.3)",
          scale: 1.02,
          transition: { duration: 0.3, ease: easing }
        };
      case 'scale':
        return {
          scale: 1.05,
          transition: { duration: 0.3, ease: easing }
        };
      case 'tilt':
        return {
          rotateY: 5,
          rotateX: 5,
          scale: 1.02,
          transition: { duration: 0.3, ease: easing }
        };
      default:
        return {
          y: -8,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3, ease: easing }
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      whileHover={getHoverAnimation()}
      style={{ transformStyle: 'preserve-3d' }}
      className="w-full"
    >
      <ShadcnCard className={className}>
        {children}
      </ShadcnCard>
    </motion.div>
  );
};

export default AnimatedCard;