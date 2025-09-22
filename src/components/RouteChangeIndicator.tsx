import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const RouteChangeIndicator: React.FC = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      setIsNavigating(true);
      setPrevLocation(location.pathname);
      
      // Hide loading indicator after transition
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevLocation]);

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-1 z-50"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteChangeIndicator;