import { Phone, RefreshCw, ThermometerSun, Snowflake, Tool, CheckCircle, Wrench, ShieldCheck, Activity } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function HeatPumpServicesIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="Heat Pump Repair & Services in Idaho Falls, ID"
        description="Comprehensive heat pump repair, maintenance, and installation in Idaho Falls. If your heat pump is not heating or cooling, call Hipwell's Heating & Cooling."
        path="/heat-pump-services-idaho-falls"
      />

      <PageHero
        title="Heat Pump Repair in Idaho Falls"
        subtitle="Expert heat pump service, repair, and installation. We fix heat pumps that aren't heating or cooling properly, restoring year-round comfort."
        image={heroImage}
        breadcrumb={{ label: 'Heat Pump Services', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Comprehensive Heat Pump Services
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    A heat pump is one of the most efficient HVAC systems available, providing both air conditioning in the summer and heating in the winter all from a single unit. Because it operates year-round, a heat pump endures double the wear and tear of a standard furnace or AC.
                  </p>
                  <p>
                    When your heat pump malfunctions, you need a technician who understands the complexities of reversing valves, defrost controls, and auxiliary heat integration. Hipwell's Heating & Cooling offers specialized heat pump repair in Idaho Falls. Whether your heat pump is not heating, not cooling, or covered in solid ice, we have the expertise to fix it right.
                  </p>
                </div>
              </div>

              {/* Heat Pump Not Heating / Cooling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-warm-50 rounded-xl p-8 border border-warm-100">
                  <div className="flex items-center gap-3 mb-4">
                    <ThermometerSun className="w-8 h-8 text-warm-600" />
                    <h3 className="font-display font-bold text-2xl text-navy-900">Heat Pump Not Heating?</h3>
                  </div>
                  <p className="text-navy-700 leading-relaxed">
                    If your heat pump is blowing cold air during winter, it could be a failed reversing valve stuck in AC mode, low refrigerant (which prevents heat absorption), or a malfunctioning defrost control board causing the outdoor unit to freeze solid. We diagnose the exact cause to restore your heat immediately.
                  </p>
                </div>
                
                <div className="bg-ice-50 rounded-xl p-8 border border-ice-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Snowflake className="w-8 h-8 text-ice-600" />
                    <h3 className="font-display font-bold text-2xl text-navy-900">Heat Pump Not Cooling?</h3>
                  </div>
                  <p className="text-navy-700 leading-relaxed">
                    If your system isn't cooling your home during summer, it suffers from the same issues as a standard AC: dirty evaporator coils, failing capacitors, blower motor issues, or refrigerant leaks. We perform thorough electrical and mechanical checks to bring the temperature down.
                  </p>
                </div>
              </div>

              {/* Heat Pump Maintenance */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <Wrench className="w-8 h-8 text-navy-700" /> Heat Pump Maintenance
                </h2>
                <p className="text-lg text-navy-700 mb-6">
                  Because a heat pump runs 12 months a year, regular heat pump maintenance is absolutely critical. Bi-annual service (Spring and Fall) is recommended. Our tune-ups include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Testing defrost cycles',
                    'Verifying auxiliary/emergency heat operation',
                    'Cleaning outdoor and indoor coils',
                    'Checking refrigerant charge',
                    'Testing compressor amperage',
                    'Clearing condensate drains'
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 p-4 border border-navy-100 rounded-lg bg-white">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-navy-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Heat Pump Installation */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-8 h-8 text-warm-500" />
                  <h2 className="font-display font-bold text-3xl">Heat Pump Installation & Replacement</h2>
                </div>
                <p className="text-navy-200 text-lg mb-6">
                  If your current heat pump is over 10-15 years old, constantly breaking down, or struggling to keep up with Idaho winters, it may be time for a replacement.
                </p>
                <p className="text-navy-200 text-lg mb-6">
                  We specialize in high-efficiency heat pump installation. We calculate your home's exact thermal load, ensure proper ductwork airflow, and often pair the heat pump with a gas furnace (a "dual fuel" system) to provide ultra-efficient heating down to extreme sub-zero temperatures.
                </p>
                <Link to="/heating-installation-idaho-falls" className="inline-flex items-center gap-2 text-warm-400 hover:text-warm-300 font-bold transition-colors">
                  Learn about our installation process <ShieldCheck className="w-5 h-5" />
                </Link>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Schedule Service</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Whether you need heat pump repair, maintenance, or a new installation quote, call us today.
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
        title="Expert Heat Pump Services"
        description="We diagnose the complex issues that other companies miss."
      />
    </>
  );
}
