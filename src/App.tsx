import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { businessInfo } from '@/data/site-data';

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
import RexburgACRepair from '@/pages/RexburgACRepair';
import BlogLanding from '@/pages/BlogLanding';
import ACBlowingWarmAir from '@/pages/ACBlowingWarmAir';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
          
          {/* Location Hub & Pages */}
          <Route path="/service-areas" element={<ServiceAreasLanding />} />
          <Route path="/ac-repair-rexburg" element={<RexburgACRepair />} />

          {/* Blog & Resources */}
          <Route path="/blog" element={<BlogLanding />} />
          <Route path="/blog/ac-blowing-warm-air-idaho-falls" element={<ACBlowingWarmAir />} />

          {/* SEO Canonical Redirects */}
          <Route path="/ac-repair-idaho-falls" element={<Navigate to="/air-conditioning-repair-idaho-falls" replace />} />
          
          <Route path="/:slug" element={<DynamicRouteWrapper />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
