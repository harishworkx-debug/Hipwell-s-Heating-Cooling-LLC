import { Phone, AlertTriangle, ShieldAlert, Wind, Thermometer, Zap, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function FurnaceTroubleshootingIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/20046689/pexels-photo-20046689.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="Furnace Troubleshooting in Idaho Falls | Hipwell's Heating & Cooling"
        description="Furnace not working? Learn the common reasons for a failing furnace, including filter, ignition, and thermostat issues, and know when to call a professional."
        path="/furnace-troubleshooting-idaho-falls"
      />

      <PageHero
        title="Furnace Troubleshooting Guide"
        subtitle="Furnace not heating? Check these common issues before calling for repair."
        image={heroImage}
        breadcrumb={{ label: 'Furnace Troubleshooting', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Furnace Not Working? Possible Reasons
                </h2>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  Waking up to a freezing house in Idaho Falls is stressful. While some furnace problems require a licensed HVAC technician, there are a few things you can check yourself. Here are the most common reasons your furnace might not be working:
                </p>

                <div className="space-y-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 flex gap-4">
                    <Thermometer className="w-8 h-8 text-warm-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-navy-900">1. Thermostat Issues</h3>
                      <p className="text-navy-700 mt-2">Make sure your thermostat is set to "Heat" and the temperature is higher than the current room temperature. Check if the batteries need replacing.</p>
                    </div>
                  </div>
                  
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 flex gap-4">
                    <Wind className="w-8 h-8 text-warm-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-navy-900">2. Clogged Air Filter</h3>
                      <p className="text-navy-700 mt-2">A severely dirty air filter restricts airflow, causing the furnace's heat exchanger to overheat. The high-limit switch will then shut the furnace down for safety. Check and replace your filter.</p>
                    </div>
                  </div>

                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 flex gap-4">
                    <Zap className="w-8 h-8 text-warm-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-navy-900">3. Electrical / Breaker Issues</h3>
                      <p className="text-navy-700 mt-2">Ensure the furnace switch (usually located on a wall near the unit or on the unit itself) is turned "On". Also, check your home's electrical panel to ensure the furnace breaker hasn't tripped.</p>
                    </div>
                  </div>

                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 flex gap-4">
                    <AlertTriangle className="w-8 h-8 text-warm-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-navy-900">4. Ignition, Pilot, & Gas Supply</h3>
                      <p className="text-navy-700 mt-2">If you have a modern furnace, a faulty hot surface ignitor or a dirty flame sensor will stop the burners from firing. If you have an older furnace, the standing pilot light may have blown out. Also, ensure your gas valve is open.</p>
                    </div>
                  </div>

                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 flex gap-4">
                    <ShieldAlert className="w-8 h-8 text-warm-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-navy-900">5. Blower Motor & Limit Switch</h3>
                      <p className="text-navy-700 mt-2">If the burners ignite but no air comes out of the vents, your blower motor may have failed. Conversely, if the blower runs constantly but the air is cold, the limit switch may be stuck open.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* When to Call a Professional */}
              <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-8 h-8 text-red-600" />
                  <h2 className="font-display font-bold text-2xl text-red-900">When to Call a Professional</h2>
                </div>
                <p className="text-red-900/80 text-lg mb-6">
                  If you have checked the thermostat, replaced the filter, and ensured the breaker is on, but the furnace still won't heat, it's time to call in the experts. Gas furnaces involve combustible gas, high voltage, and carbon monoxide risks—they are not DIY projects.
                </p>
                <Link to="/heating-repair-idaho-falls" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                  <Phone className="w-5 h-5" /> Schedule Furnace Repair
                </Link>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Need Immediate Help?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  If troubleshooting didn't work, we are ready to diagnose and fix your furnace today.
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
        title="Don't Guess. Get it Fixed."
        description="Our technicians use advanced diagnostic tools to find exactly what's wrong with your furnace."
      />
    </>
  );
}
