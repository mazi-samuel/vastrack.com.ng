import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import VasSolutions from "./pages/VasSolutions";
import NewsMedia from "./pages/NewsMedia";
import BankingSolutions from "./pages/BankingSolutions";
import SmsGateway from "./pages/SmsGateway";
import UssdServices from "./pages/UssdServices";
import IvrSolutions from "./pages/IvrSolutions";
import MobilePayments from "./pages/MobilePayments";
import NotFound from "./pages/NotFound";
import HealthServices from "@/pages/HealthServices";
import EducationTools from "@/pages/EducationTools";
import TechnicalArchitecture from "@/pages/TechnicalArchitecture";
import PartnershipModels from "@/pages/PartnershipModels";
import ResourceCentre from "@/pages/ResourceCentre";
import CaseStudies from "@/pages/CaseStudies";
import KnowledgeHub from "@/pages/KnowledgeHub";
import NCCDocumentation from "@/pages/NCCDocumentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sms-gateway" element={<SmsGateway />} />
          <Route path="/ussd-services" element={<UssdServices />} />
          <Route path="/ivr-solutions" element={<IvrSolutions />} />
          <Route path="/mobile-payments" element={<MobilePayments />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/vas-solutions" element={<VasSolutions />} />
          <Route path="/banking-solutions" element={<BankingSolutions />} />
          <Route path="/resources" element={<ResourceCentre />} />
          <Route path="/resource-centre" element={<ResourceCentre />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/ncc-documentation" element={<NCCDocumentation />} />
          <Route path="/health-services" element={<HealthServices />} />
          <Route path="/education-tools" element={<EducationTools />} />
          <Route path="/technical-architecture" element={<TechnicalArchitecture />} />
          <Route path="/partnership-models" element={<PartnershipModels />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
