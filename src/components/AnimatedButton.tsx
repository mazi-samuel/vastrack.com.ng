import React from 'react';
import { motion } from 'framer-motion';
import { Button as ShadcnButton } from '@/components/ui/button';
import { ButtonProps } from '@/components/ui/button';

interface AnimatedButtonProps extends ButtonProps {
  animationType?: 'scale' | 'slide' | 'glow' | 'bounce';
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  animationType = 'scale',
  children,
  className = '',
  ...props
}) => {
  const getHoverAnimation = () => {
    const easing = "easeInOut" as const;
    
    switch (animationType) {
      case 'scale':
        return {
          scale: 1.05,
          transition: { duration: 0.2, ease: easing }
        };
      case 'slide':
        return {
          x: 5,
          transition: { duration: 0.2, ease: easing }
        };
      case 'glow':
        return {
          boxShadow: "0 0 20px rgba(92, 188, 140, 0.4)",
          transition: { duration: 0.2, ease: easing }
        };
      case 'bounce':
        return {
          y: -3,
          transition: { duration: 0.2, ease: "easeOut" as const }
        };
      default:
        return {
          scale: 1.05,
          transition: { duration: 0.2, ease: easing }
        };
    }
  };

  const getTapAnimation = () => {
    return {
      scale: 0.95,
      transition: { duration: 0.1, ease: "easeInOut" as const }
    };
  };

  return (
    <motion.div
      whileHover={getHoverAnimation()}
      whileTap={getTapAnimation()}
      className="inline-block"
    >
      <ShadcnButton className={className} {...props}>
        {children}
      </ShadcnButton>
    </motion.div>
  );
};

export default AnimatedButton;