import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

// Import all pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import VasSolutions from '@/pages/VasSolutions';
import SmsGateway from '@/pages/SmsGateway';
import UssdServices from '@/pages/UssdServices';
import IvrSolutions from '@/pages/IvrSolutions';
import MobilePayments from '@/pages/MobilePayments';
import BankingSolutions from '@/pages/BankingSolutions';
import HealthServices from '@/pages/HealthServices';
import EducationTools from '@/pages/EducationTools';
import TechnicalArchitecture from '@/pages/TechnicalArchitecture';
import PartnershipModels from '@/pages/PartnershipModels';
import KnowledgeHub from '@/pages/KnowledgeHub';
import CaseStudies from '@/pages/CaseStudies';
import NewsMedia from '@/pages/NewsMedia';
import ResourceCentre from '@/pages/ResourceCentre';
import OurApproach from '@/pages/OurApproach';
import NCCDocumentation from '@/pages/NCCDocumentation';
import NotFound from '@/pages/NotFound';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  // Define animation types for different page categories
  const getAnimationType = (pathname: string): 'fade' | 'slide' | 'scale' | 'flip' => {
    // Main pages - fade transitions
    if (['/about', '/services', '/contact', '/'].includes(pathname)) {
      return 'fade';
    }
    
    // VAS solution pages - slide transitions
    if (['/sms-gateway', '/ussd-services', '/ivr-solutions', '/mobile-payments', '/vas-solutions'].includes(pathname)) {
      return 'slide';
    }
    
    // Resource and media pages - scale transitions
    if (['/knowledge-hub', '/case-studies', '/news-media', '/resource-centre', '/resources'].includes(pathname)) {
      return 'scale';
    }
    
    // Technical and partnership pages - flip transitions
    if (['/technical-architecture', '/partnership-models', '/our-approach', '/ncc-documentation'].includes(pathname)) {
      return 'flip';
    }
    
    // Industry solution pages - slide transitions
    if (['/banking-solutions', '/health-services', '/education-tools'].includes(pathname)) {
      return 'slide';
    }
    
    // Default to fade
    return 'fade';
  };

  const animationType = getAnimationType(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname} transitionType={animationType}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vas-solutions" element={<VasSolutions />} />
          <Route path="/sms-gateway" element={<SmsGateway />} />
          <Route path="/ussd-services" element={<UssdServices />} />
          <Route path="/ivr-solutions" element={<IvrSolutions />} />
          <Route path="/mobile-payments" element={<MobilePayments />} />
          <Route path="/banking-solutions" element={<BankingSolutions />} />
          <Route path="/health-services" element={<HealthServices />} />
          <Route path="/education-tools" element={<EducationTools />} />
          <Route path="/technical-architecture" element={<TechnicalArchitecture />} />
          <Route path="/partnership-models" element={<PartnershipModels />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/resource-centre" element={<ResourceCentre />} />
          <Route path="/resources" element={<ResourceCentre />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/ncc-documentation" element={<NCCDocumentation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;