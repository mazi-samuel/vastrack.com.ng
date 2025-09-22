import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  animationType?: 'bounce' | 'spin' | 'pulse' | 'wiggle' | 'float' | 'glow' | 'scale';
  hoverType?: 'lift' | 'spin' | 'scale' | 'glow' | 'bounce' | 'wiggle';
  delay?: number;
  duration?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  size = 24,
  className = '',
  animationType = 'none',
  hoverType = 'scale',
  delay = 0,
  duration = 2
}) => {
  const getBaseAnimation = () => {
    const easing = "easeInOut" as const;
    const linearEasing = "linear" as const;
    
    switch (animationType) {
      case 'bounce':
        return {
          y: [0, -10, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: easing,
            delay
          }
        };
      case 'spin':
        return {
          rotate: [0, 360],
          transition: {
            duration,
            repeat: Infinity,
            ease: linearEasing,
            delay
          }
        };
      case 'pulse':
        return {
          scale: [1, 1.1, 1],
          transition: {
            duration,
            repeat: Infinity,
            ease: easing,
            delay
          }
        };
      case 'wiggle':
        return {
          rotate: [0, -5, 5, -5, 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: easing,
            delay
          }
        };
      case 'float':
        return {
          y: [0, -8, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: easing,
            delay
          }
        };
      case 'glow':
        return {
          filter: [
            "drop-shadow(0 0 0px rgba(92, 188, 140, 0))",
            "drop-shadow(0 0 10px rgba(92, 188, 140, 0.5))",
            "drop-shadow(0 0 0px rgba(92, 188, 140, 0))"
          ],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: easing,
            delay
          }
        };
      case 'scale':
        return {
          scale: [1, 1.05, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: easing,
            delay
          }
        };
      default:
        return {};
    }
  };

  const getHoverAnimation = () => {
    const easing = "easeOut" as const;
    
    switch (hoverType) {
      case 'lift':
        return {
          y: -3,
          transition: { duration: 0.2, ease: easing }
        };
      case 'spin':
        return {
          rotate: 180,
          transition: { duration: 0.3, ease: easing }
        };
      case 'scale':
        return {
          scale: 1.2,
          transition: { duration: 0.2, ease: easing }
        };
      case 'glow':
        return {
          filter: "drop-shadow(0 0 8px rgba(92, 188, 140, 0.6))",
          transition: { duration: 0.2, ease: easing }
        };
      case 'bounce':
        return {
          y: [-2, -8, -2],
          transition: { duration: 0.4, ease: easing }
        };
      case 'wiggle':
        return {
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.4, ease: easing }
        };
      default:
        return {
          scale: 1.1,
          transition: { duration: 0.2, ease: easing }
        };
    }
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={getBaseAnimation()}
      whileHover={getHoverAnimation()}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

export default AnimatedIcon;