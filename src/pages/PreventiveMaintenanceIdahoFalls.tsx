import { Phone, CheckCircle, ShieldCheck, Calendar, Activity, Zap, Wind } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function PreventiveMaintenanceIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="HVAC Maintenance in Idaho Falls, ID | Preventive Maintenance"
        description="Comprehensive HVAC maintenance and preventive maintenance in Idaho Falls. Lower your energy bills, avoid breakdowns, and extend the life of your furnace and AC."
        path="/preventive-maintenance-idaho-falls"
      />

      <PageHero
        title="HVAC Maintenance & Preventive Maintenance in Idaho Falls"
        subtitle="Protect your investment with professional, seasonal tune-ups for your heating and cooling systems."
        image={heroImage}
        breadcrumb={{ label: 'HVAC Maintenance', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  The Importance of HVAC Maintenance
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    Your HVAC system is the most expensive appliance in your home, yet it is often the most neglected. Without regular <strong>HVAC maintenance in Idaho Falls</strong>, air conditioners lose efficiency, furnaces develop dangerous carbon monoxide leaks, and moving parts grind themselves to premature failure.
                  </p>
                  <p>
                    Preventive maintenance isn't just a suggestion; it's the only way to ensure your heating and cooling equipment lasts its full 15-year lifespan. At Hipwell's Heating & Cooling, our seasonal maintenance program identifies minor wear-and-tear before it transforms into a catastrophic, expensive breakdown.
                  </p>
                </div>
              </div>

              {/* The Benefits */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <h2 className="font-display font-bold text-3xl mb-6">Why Invest in Preventive Maintenance?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-green-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Maintain Warranties</h4>
                      <p className="text-navy-200 text-sm mt-1">Most manufacturers (Trane, Carrier, Lennox) require proof of annual professional maintenance to keep their 10-year parts warranties valid.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="w-8 h-8 text-yellow-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Lower Utility Bills</h4>
                      <p className="text-navy-200 text-sm mt-1">A well-tuned furnace or AC uses 15-20% less energy. Cleaning the coils and changing the filter alone pays for the maintenance visit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Activity className="w-8 h-8 text-red-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Prevent Emergencies</h4>
                      <p className="text-navy-200 text-sm mt-1">80% of all emergency repair calls we receive during heatwaves or sub-zero freezes could have been prevented with a routine tune-up.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Wind className="w-8 h-8 text-blue-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Better Indoor Air</h4>
                      <p className="text-navy-200 text-sm mt-1">Cleaning the blower motor, duct returns, and coils removes the dust and mold that would otherwise circulate through your breathing air.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spring and Fall Checklists */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Our Comprehensive Seasonal Tune-Ups
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Spring / AC */}
                  <div className="border-t-4 border-ice-500 bg-white shadow-md rounded-b-xl p-6">
                    <h3 className="font-bold text-xl text-navy-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-ice-600" /> Spring AC Maintenance
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-ice-500 shrink-0" /> Clean outdoor condenser coils</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-ice-500 shrink-0" /> Verify exact refrigerant pressures</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-ice-500 shrink-0" /> Test capacitors and contactors</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-ice-500 shrink-0" /> Flush condensate drain line</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-ice-500 shrink-0" /> Measure blower motor amperage</li>
                    </ul>
                  </div>

                  {/* Fall / Furnace */}
                  <div className="border-t-4 border-warm-500 bg-white shadow-md rounded-b-xl p-6">
                    <h3 className="font-bold text-xl text-navy-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-warm-600" /> Fall Furnace Maintenance
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-warm-500 shrink-0" /> Inspect heat exchanger for cracks</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-warm-500 shrink-0" /> Clean flame sensor and ignitor</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-warm-500 shrink-0" /> Test gas pressure to burners</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-warm-500 shrink-0" /> Verify high-limit safety switches</li>
                      <li className="flex items-start gap-2 text-navy-700 text-sm"><CheckCircle className="w-4 h-4 text-warm-500 shrink-0" /> Replace dirty air filters</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Schedule Maintenance</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Don't wait for your system to break down. Schedule your preventive maintenance visit today.
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
        title="Extend the Life of Your HVAC System"
        description="Call Hipwell's Heating & Cooling to schedule your seasonal tune-up in Idaho Falls."
      />
    </>
  );
}
