import { Phone, Search, Zap, Gauge, Thermometer, PenTool, CheckCircle, ListChecks } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';

export default function HVACDiagnosticsIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="HVAC Diagnostics in Idaho Falls | Professional System Troubleshooting"
        description="Expert HVAC diagnostics in Idaho Falls. We find the real root cause of your heating and cooling problems using advanced electrical and airflow testing."
        path="/hvac-diagnostics-idaho-falls"
      />

      <PageHero
        title="Professional HVAC Diagnostics"
        subtitle="We don't guess. We test. Our systematic diagnostic process finds the true root cause of your HVAC failures, saving you from unnecessary part replacements."
        image={heroImage}
        breadcrumb={{ label: 'HVAC Diagnostics', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  What Does Real HVAC Diagnostics Mean?
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    A frustrating trend in the HVAC industry is "parts changing." A technician looks at a furnace that isn't heating, guesses that the control board is bad, replaces it, charges you $600, and leaves. Two days later, the furnace breaks again because the <em>actual</em> problem was a $20 limit switch that caused the board to shut down.
                  </p>
                  <p>
                    At Hipwell's Heating & Cooling, we believe that <strong>prescription without diagnosis is malpractice.</strong> HVAC diagnostics in Idaho Falls shouldn't be guesswork. It requires a systematic approach using multimeters, manometers, psychrometers, and deep technical knowledge to prove exactly why a component failed before recommending a repair.
                  </p>
                </div>
              </div>

              {/* Our Diagnostic Process */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <ListChecks className="w-8 h-8 text-warm-600" /> Our Step-by-Step Diagnostic Process
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  When you call us because your AC is blowing warm air or your furnace is short-cycling, here is exactly what we do:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-navy-500 shadow-sm rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-6 h-6 text-navy-600" />
                      <h3 className="font-bold text-xl text-navy-900">1. Customer Interview</h3>
                    </div>
                    <p className="text-navy-700">We start by listening to you. When did the noise start? Did it happen after a power outage? Are certain rooms colder than others? Your observations give us the first critical clues.</p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-500 shadow-sm rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-6 h-6 text-yellow-600" />
                      <h3 className="font-bold text-xl text-navy-900">2. Electrical Testing</h3>
                    </div>
                    <p className="text-navy-700">HVAC systems are primarily electrical. We use multimeters to test voltage at the disconnect, amperage draw on the compressor and blower motor, microfarads on the capacitors, and continuity across switches. We don't just see if a part works; we test if it is operating within manufacturer specs.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-500 shadow-sm rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Gauge className="w-6 h-6 text-blue-600" />
                      <h3 className="font-bold text-xl text-navy-900">3. Refrigerant & Gas Pressure</h3>
                    </div>
                    <p className="text-navy-700">For ACs, we attach digital gauges to read superheat and subcooling—this tells us exactly if the system is low on Freon or if the metering device is restricted. For furnaces, we use manometers to measure gas pressure entering the burners to ensure safe, efficient combustion.</p>
                  </div>

                  <div className="bg-white border-l-4 border-green-500 shadow-sm rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Thermometer className="w-6 h-6 text-green-600" />
                      <h3 className="font-bold text-xl text-navy-900">4. Airflow & Temperature Delta</h3>
                    </div>
                    <p className="text-navy-700">Poor airflow is the hidden killer of HVAC systems. We measure the temperature drop across the evaporator coil and the static pressure inside your ductwork. A frozen coil isn't always low refrigerant; often, it's severely restricted airflow.</p>
                  </div>

                  <div className="bg-white border-l-4 border-warm-500 shadow-sm rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <PenTool className="w-6 h-6 text-warm-600" />
                      <h3 className="font-bold text-xl text-navy-900">5. The Root Cause Report</h3>
                    </div>
                    <p className="text-navy-700">Once we have the data, we explain the problem to you in plain English. We show you the failed part, explain why it failed, and provide a transparent, upfront price for the repair.</p>
                  </div>
                </div>
              </div>

              {/* The "Why Did It Fail" Guarantee */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">The "Why Did It Fail?" Rule</h2>
                </div>
                <p className="text-navy-200 text-lg mb-4">
                  A blown fuse is a symptom, not a cause. A frozen coil is a symptom, not a cause. If we replace a blown fuse without finding out <em>why</em> it blew (like a shorted wire rubbing against copper piping), it will just blow again. 
                </p>
                <p className="text-navy-200 text-lg font-bold">
                  Our promise to you: We don't just treat the symptom; we diagnose and fix the disease.
                </p>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Need a Second Opinion?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Did another company tell you to replace your entire system? Call us for a thorough diagnostic second opinion.
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
        title="Stop Guessing. Start Fixing."
        description="Call Hipwell's Heating & Cooling for expert HVAC diagnostics you can trust."
      />
    </>
  );
}
