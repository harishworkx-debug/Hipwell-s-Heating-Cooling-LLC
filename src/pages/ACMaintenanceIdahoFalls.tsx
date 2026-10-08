import { Phone, Check, Wrench, ShieldCheck, Calendar, Activity, Zap, Wind } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function ACMaintenanceIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const benefits = [
    { title: 'Lower Energy Bills', text: 'A clean, well-lubricated AC runs efficiently, reducing the electricity required to cool your home.' },
    { title: 'Fewer Breakdowns', text: 'Catching a failing capacitor or low refrigerant now prevents a complete system failure during a 95-degree heatwave.' },
    { title: 'Longer Lifespan', text: 'Regular maintenance reduces strain on the compressor. Systems that receive annual tune-ups last 30-50% longer than neglected ones.' },
    { title: 'Better Air Quality', text: 'Cleaning the coils and replacing filters prevents dust, mold, and allergens from circulating through your vents.' },
  ];

  return (
    <>
      <SEO
        title="AC Maintenance in Idaho Falls, ID | HVAC Tune-Up"
        description="Professional AC maintenance and seasonal tune-ups in Idaho Falls. Prevent breakdowns, lower energy bills, and extend the life of your air conditioner."
        path="/ac-maintenance-idaho-falls"
      />

      <PageHero
        title="AC Maintenance & Tune-Ups in Idaho Falls"
        subtitle="Keep your cooling system running at peak efficiency with our comprehensive seasonal preventative maintenance."
        image={heroImage}
        breadcrumb={{ label: 'AC Maintenance', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Protect Your Comfort with Preventative Maintenance
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    You wouldn't drive your car for 100,000 miles without changing the oil, yet many homeowners expect their air conditioner to run flawlessly for years without any service. Preventative AC maintenance is the most effective way to protect your investment, lower your energy bills, and ensure your home stays cool during Idaho's hottest summer days.
                  </p>
                  <p>
                    At Hipwell's Heating & Cooling, our seasonal AC tune-ups are far more than just a quick visual inspection. We perform a deep-cleaning and rigorous technical evaluation of your entire cooling system, calibrating components to factory specifications.
                  </p>
                </div>
              </div>

              {/* Comprehensive Tune-Up Checklist */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  What's Included in Our AC Tune-Up?
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  Our comprehensive maintenance checklist covers every critical component of your air conditioning system:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Wind, title: 'Filter Replacement & Airflow', desc: 'We inspect and replace dirty air filters, and measure airflow volume (CFM) to ensure cool air is reaching every room.' },
                    { icon: Activity, title: 'Coil Cleaning', desc: 'We carefully clean the outdoor condenser coils and inspect the indoor evaporator coils. Dirty coils drastically reduce heat transfer efficiency.' },
                    { icon: Zap, title: 'Electrical Components', desc: 'We tighten electrical connections, measure voltage/amperage on motors, and test the capacitor and contactor for signs of wear.' },
                    { icon: Wrench, title: 'Refrigerant Levels', desc: 'We verify that your Freon/refrigerant charge is exact. Even a 10% undercharge can increase operating costs by 20%.' },
                    { icon: Activity, title: 'Condensate Drain', desc: 'We flush the condensate drain line to prevent clogs, which are the #1 cause of water damage from AC units.' },
                    { icon: ShieldCheck, title: 'Thermostat Calibration', desc: 'We test your thermostat to ensure it is communicating accurately with the air handler and outdoor compressor.' },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                        <div className="flex items-center gap-4 mb-3">
                          <Icon className="w-6 h-6 text-warm-600" />
                          <h3 className="font-bold text-lg text-navy-900">{item.title}</h3>
                        </div>
                        <p className="text-navy-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  The Benefits of Regular AC Maintenance
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 p-5 border border-navy-100 rounded-lg bg-white shadow-sm">
                      <Check className="w-6 h-6 text-green-500 shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy-900">{benefit.title}</h4>
                        <p className="text-sm text-navy-600 mt-1">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Schedule */}
              <div className="bg-ice-50 rounded-2xl p-8 border border-ice-100">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-ice-600" />
                  <h2 className="font-display font-bold text-2xl text-navy-900">Recommended Schedule</h2>
                </div>
                <p className="text-navy-700 text-lg">
                  We highly recommend scheduling your AC maintenance in the <strong>Spring (April or May)</strong>. Getting your system tuned up before the summer heat arrives ensures that you won't be caught waiting for a repair during the busiest time of the year. For heating, we recommend a secondary tune-up in the Fall.
                </p>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Schedule a Tune-Up</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Prepare your AC for summer. Call today to schedule your preventative maintenance visit.
                </p>
                <a href="tel:12088448165" className="btn-primary w-full text-center flex justify-center">
                  <Phone className="w-5 h-5 mr-2" /> {businessInfo.phone}
                </a>
              </div>
              
              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">AC Repair</Link></li>
                  <li><Link to="/air-conditioning-installation-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">AC Installation</Link></li>
                  <li><Link to="/preventive-maintenance-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">Annual Maintenance</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Don't Wait for a Breakdown"
        description="A simple tune-up today can save you thousands in repairs tomorrow."
      />
    </>
  );
}
