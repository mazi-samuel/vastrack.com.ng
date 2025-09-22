import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  transitionType?: 'fade' | 'slide' | 'scale' | 'flip';
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, transitionType = 'fade' }) => {
  const location = useLocation();

  const getTransition = () => {
    const easing = "easeInOut" as const;
    
    switch (transitionType) {
      case 'fade':
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.6, ease: easing }
        };
      
      case 'slide':
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
          transition: { duration: 0.5, ease: easing }
        };
      
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.9, rotateY: 10 },
          animate: { opacity: 1, scale: 1, rotateY: 0 },
          exit: { opacity: 0, scale: 1.1, rotateY: -10 },
          transition: { duration: 0.7, ease: easing }
        };
      
      case 'flip':
        return {
          initial: { opacity: 0, rotateY: -90, scale: 0.8 },
          animate: { opacity: 1, rotateY: 0, scale: 1 },
          exit: { opacity: 0, rotateY: 90, scale: 0.8 },
          transition: { duration: 0.8, ease: easing }
        };
      
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.4 }
        };
    }
  };

  const transition = getTransition();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={transition.initial}
        animate={transition.animate}
        exit={transition.exit}
        transition={transition.transition}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;