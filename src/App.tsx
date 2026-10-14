import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import Home from '@/pages/Home';
import ServicesLanding from '@/pages/ServicesLanding';
import ServiceAreasLanding from '@/pages/ServiceAreasLanding';
import DynamicRouteWrapper from '@/components/DynamicRouteWrapper';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQs from '@/pages/FAQs';
import NotFound from '@/pages/NotFound';
import ACRepairIdahoFalls from '@/pages/ACRepairIdahoFalls';
import ACInstallationIdahoFalls from '@/pages/ACInstallationIdahoFalls';
import ACMaintenanceIdahoFalls from '@/pages/ACMaintenanceIdahoFalls';
import HeatingRepairIdahoFalls from '@/pages/HeatingRepairIdahoFalls';
import HeatingInstallationIdahoFalls from '@/pages/HeatingInstallationIdahoFalls';
import FurnaceTroubleshootingIdahoFalls from '@/pages/FurnaceTroubleshootingIdahoFalls';
import HeatPumpServicesIdahoFalls from '@/pages/HeatPumpServicesIdahoFalls';
import HVACDiagnosticsIdahoFalls from '@/pages/HVACDiagnosticsIdahoFalls';
import ThermostatServicesIdahoFalls from '@/pages/ThermostatServicesIdahoFalls';
import PreventiveMaintenanceIdahoFalls from '@/pages/PreventiveMaintenanceIdahoFalls';

// Dedicated Surrounding City AC Repair Pages
import RexburgACRepair from '@/pages/RexburgACRepair';
import AmmonACRepair from '@/pages/AmmonACRepair';
import ShelleyACRepair from '@/pages/ShelleyACRepair';
import BlackfootACRepair from '@/pages/BlackfootACRepair';
import RigbyACRepair from '@/pages/RigbyACRepair';
import UconACRepair from '@/pages/UconACRepair';

// Blog & Topical Authority Guides
import BlogLanding from '@/pages/BlogLanding';
import ACBlowingWarmAir from '@/pages/ACBlowingWarmAir';
import FurnaceShortCycling from '@/pages/FurnaceShortCycling';
import ACRepairVsReplacement from '@/pages/ACRepairVsReplacement';
import SeasonalMaintenanceChecklist from '@/pages/SeasonalMaintenanceChecklist';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />

          {/* Core Services Hub & Detail Pages */}
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/air-conditioning-repair-idaho-falls" element={<ACRepairIdahoFalls />} />
          <Route path="/air-conditioning-installation-idaho-falls" element={<ACInstallationIdahoFalls />} />
          <Route path="/ac-maintenance-idaho-falls" element={<ACMaintenanceIdahoFalls />} />
          <Route path="/heating-repair-idaho-falls" element={<HeatingRepairIdahoFalls />} />
          <Route path="/heating-installation-idaho-falls" element={<HeatingInstallationIdahoFalls />} />
          <Route path="/furnace-troubleshooting-idaho-falls" element={<FurnaceTroubleshootingIdahoFalls />} />
          <Route path="/heat-pump-services-idaho-falls" element={<HeatPumpServicesIdahoFalls />} />
          <Route path="/hvac-diagnostics-idaho-falls" element={<HVACDiagnosticsIdahoFalls />} />
          <Route path="/thermostat-services-idaho-falls" element={<ThermostatServicesIdahoFalls />} />
          <Route path="/preventive-maintenance-idaho-falls" element={<PreventiveMaintenanceIdahoFalls />} />
          
          {/* Service Areas Hub & Dedicated City AC Repair Pages */}
          <Route path="/service-areas" element={<ServiceAreasLanding />} />
          <Route path="/ac-repair-rexburg" element={<RexburgACRepair />} />
          <Route path="/ac-repair-ammon" element={<AmmonACRepair />} />
          <Route path="/ac-repair-shelley" element={<ShelleyACRepair />} />
          <Route path="/ac-repair-blackfoot" element={<BlackfootACRepair />} />
          <Route path="/ac-repair-rigby" element={<RigbyACRepair />} />
          <Route path="/ac-repair-ucon" element={<UconACRepair />} />

          {/* Blog Hub & In-Depth Guides */}
          <Route path="/blog" element={<BlogLanding />} />
          <Route path="/blog/ac-blowing-warm-air-idaho-falls" element={<ACBlowingWarmAir />} />
          <Route path="/blog/furnace-short-cycling" element={<FurnaceShortCycling />} />
          <Route path="/blog/ac-repair-vs-replacement" element={<ACRepairVsReplacement />} />
          <Route path="/blog/seasonal-hvac-maintenance-checklist" element={<SeasonalMaintenanceChecklist />} />

          {/* SEO Canonical Redirects */}
          <Route path="/ac-repair-idaho-falls" element={<Navigate to="/air-conditioning-repair-idaho-falls" replace />} />
          
          {/* Dynamic Fallback & 404 */}
          <Route path="/:slug" element={<DynamicRouteWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
