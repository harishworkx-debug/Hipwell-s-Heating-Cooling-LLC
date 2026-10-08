import { Phone, Settings, Activity, ThermometerSun, Smartphone, Wrench, ShieldCheck, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function ThermostatServicesIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/7534560/pexels-photo-7534560.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="Thermostat Repair in Idaho Falls, ID | Smart Thermostats"
        description="Thermostat not working? We repair and install smart thermostats in Idaho Falls. We fix wiring, communication issues, and wrong temperature readings."
        path="/thermostat-services-idaho-falls"
      />

      <PageHero
        title="Thermostat Repair & Installation in Idaho Falls"
        subtitle="Your thermostat is the brain of your HVAC system. We diagnose wiring issues, fix incorrect readings, and install modern smart thermostats."
        image={heroImage}
        breadcrumb={{ label: 'Thermostat Services', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Expert Thermostat Repair and Smart Upgrades
                </h2>
                <p className="text-lg text-navy-700 leading-relaxed">
                  Many times, homeowners think their furnace or air conditioner is completely broken, only to find out that a small wiring issue in the thermostat is to blame. The thermostat controls the entire HVAC system—if it fails to communicate, your home won't heat or cool properly. At Hipwell's Heating & Cooling, we diagnose thermostat faults accurately to save you from unnecessary equipment repairs.
                </p>
              </div>

              {/* Common Thermostat Issues */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <Activity className="w-8 h-8 text-warm-600" /> Common Thermostat Problems
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <Zap className="w-6 h-6 text-warm-500 mb-3" />
                    <h3 className="font-bold text-lg text-navy-900">Thermostat Not Working (Blank Screen)</h3>
                    <p className="text-navy-700 mt-2 text-sm">A blank screen usually means a loss of 24-volt power from the furnace control board, blown batteries, or a tripped safety switch on the HVAC unit itself.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <Activity className="w-6 h-6 text-warm-500 mb-3" />
                    <h3 className="font-bold text-lg text-navy-900">Not Communicating</h3>
                    <p className="text-navy-700 mt-2 text-sm">You hear the thermostat click, but the furnace or AC doesn't turn on. This indicates broken thermostat wire, a bad relay, or a failing contactor outside.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <ThermometerSun className="w-6 h-6 text-warm-500 mb-3" />
                    <h3 className="font-bold text-lg text-navy-900">Wrong Temperature Readings</h3>
                    <p className="text-navy-700 mt-2 text-sm">If your house feels freezing but the thermostat says it's 72 degrees, the internal sensor is out of calibration or dust is insulating the sensor. </p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <Wrench className="w-6 h-6 text-warm-500 mb-3" />
                    <h3 className="font-bold text-lg text-navy-900">Short Cycling</h3>
                    <p className="text-navy-700 mt-2 text-sm">If the heat turns on and off every two minutes, the thermostat anticipator may be incorrectly set, or the thermostat is mounted in a bad location.</p>
                  </div>
                </div>
              </div>

              {/* Smart Thermostats */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">Smart Thermostat Installation</h2>
                </div>
                <p className="text-navy-200 text-lg mb-6">
                  Upgrading to a Wi-Fi-enabled smart thermostat (like Nest, Ecobee, or Honeywell) provides massive benefits for your home:
                </p>
                <ul className="space-y-4 text-navy-100">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-ice-500 shrink-0" />
                    <p><strong>Energy Savings:</strong> Smart thermostats learn your schedule and automatically adjust temps when you leave, saving up to 15% on heating and cooling bills.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-ice-500 shrink-0" />
                    <p><strong>Remote Control:</strong> Adjust your home's temperature from anywhere using your smartphone.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-ice-500 shrink-0" />
                    <p><strong>HVAC Compatibility & Wiring:</strong> Most smart thermostats require a "C-Wire" (Common Wire) for constant power. We expertly install C-wires and ensure total compatibility with your furnace, AC, or heat pump.</p>
                  </li>
                </ul>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Need Thermostat Repair?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Call us today for precise diagnostics or a smart thermostat upgrade.
                </p>
                <a href="tel:12088448165" className="btn-primary w-full text-center flex justify-center">
                  <Phone className="w-5 h-5 mr-2" /> {businessInfo.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Take Control of Your Comfort"
        description="Whether you need a quick wire fix or a brand-new smart thermostat, we can help."
      />
    </>
  );
}
