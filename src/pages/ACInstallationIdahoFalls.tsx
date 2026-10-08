import { Phone, Check, Fan, ShieldCheck, ThermometerSun, AlertTriangle, DollarSign, PenTool, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function ACInstallationIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/20046692/pexels-photo-20046692.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const replacementSigns = [
    { title: 'Frequent Repairs', text: 'If you are calling for AC repairs every summer, those costs add up. A new unit is a more stable investment.' },
    { title: 'Rising Energy Bills', text: 'Older, inefficient systems have to work twice as hard to cool your home, drastically increasing your electricity bill.' },
    { title: 'Over 15 Years Old', text: 'Most central AC systems last 12-15 years. Beyond that, components fail and efficiency plummets.' },
    { title: 'Uses R-22 Freon', text: 'R-22 refrigerant has been phased out globally. If an old system leaks, recharging it is incredibly expensive.' },
  ];

  return (
    <>
      <SEO
        title="Air Conditioning Installation in Idaho Falls, ID"
        description="Professional AC installation and replacement in Idaho Falls. We size and install central AC systems for maximum SEER efficiency. Call for an estimate."
        path="/air-conditioning-installation-idaho-falls"
      />

      <PageHero
        title="Air Conditioning Installation in Idaho Falls"
        subtitle="Expert AC replacement and new central AC installation services. We ensure perfect sizing and optimal airflow for long-lasting comfort."
        image={heroImage}
        breadcrumb={{ label: 'AC Installation', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Professional AC Replacement & New Installation
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    A new air conditioner is a major investment in your home's comfort and value. At Hipwell's Heating & Cooling, we believe that <strong>the most important day in the life of an air conditioner is the day it is installed.</strong> Even the most expensive, high-efficiency AC unit will perform poorly if it is incorrectly sized or improperly installed.
                  </p>
                  <p>
                    Whether you need a full AC replacement for an aging unit or a new central AC installation for a home that has never had cooling, we provide honest assessments, precise load calculations, and meticulous installation services across Idaho Falls and eastern Idaho.
                  </p>
                </div>
              </div>

              {/* Crucial Factors: Sizing & SEER */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-navy-50 rounded-xl p-8 border border-navy-100">
                  <div className="flex items-center gap-3 mb-4">
                    <ThermometerSun className="w-8 h-8 text-warm-600" />
                    <h3 className="font-display font-bold text-2xl text-navy-900">Proper Sizing</h3>
                  </div>
                  <p className="text-navy-700 leading-relaxed mb-4">
                    Bigger is not better. An oversized AC cools the house too quickly and shuts off before it can remove humidity, leaving your home feeling clammy. An undersized unit runs constantly and burns out the compressor. We perform careful calculations based on your home's square footage, insulation, and window placement.
                  </p>
                </div>
                
                <div className="bg-ice-50 rounded-xl p-8 border border-ice-100">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-ice-600" />
                    <h3 className="font-display font-bold text-2xl text-navy-900">SEER Efficiency</h3>
                  </div>
                  <p className="text-navy-700 leading-relaxed mb-4">
                    SEER (Seasonal Energy Efficiency Ratio) measures how efficiently an AC uses electricity. The higher the SEER rating, the less you pay on your summer utility bills. We offer a range of high-efficiency central AC models to balance your upfront budget with long-term energy savings.
                  </p>
                </div>
              </div>

              {/* Ductwork & System Design */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Ductwork and Airflow Integrity
                </h2>
                <p className="text-lg text-navy-700 mb-6">
                  Your central AC is only as good as the ductwork that delivers the air. During the installation process, we inspect your existing ductwork for leaks, poor insulation, or restrictive sizing. We ensure that the new air handler and your duct system are perfectly matched for whisper-quiet, even cooling in every room.
                </p>
              </div>

              {/* Replacement Signs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Signs It's Time for an AC Replacement
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {replacementSigns.map((sign, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border border-navy-100 rounded-lg bg-white shadow-sm">
                      <AlertTriangle className="w-6 h-6 text-warm-500 shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy-900">{sign.title}</h4>
                        <p className="text-sm text-navy-600 mt-1">{sign.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Installation Process */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <h2 className="font-display font-bold text-3xl mb-6">Our Installation Process</h2>
                <div className="space-y-6">
                  {[
                    { step: 1, title: 'In-Home Assessment', desc: 'We inspect your current system, measure your home, and evaluate your cooling needs without high-pressure sales tactics.' },
                    { step: 2, title: 'Transparent Quote', desc: 'We provide clear pricing covering the unit, installation labor, permits, and old equipment disposal. No hidden fees.' },
                    { step: 3, title: 'Professional Installation', desc: 'Our technicians handle everything from electrical connections to refrigerant charging with absolute precision.' },
                    { step: 4, title: 'Testing & Handover', desc: 'We run the system, verify the temperature drop, check airflow, and walk you through operating your new thermostat.' }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-navy-200 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Factors & Warranties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-green-600" /> Cost Factors
                  </h3>
                  <p className="text-navy-700">
                    The cost of a new AC installation depends on the system's tonnage (size), the SEER rating (efficiency), whether modifications to ductwork or electrical panels are needed, and whether you are replacing the indoor coil alongside the outdoor condenser.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-blue-600" /> Warranties
                  </h3>
                  <p className="text-navy-700">
                    We install equipment from reputable brands backed by strong manufacturer warranties (typically 10 years on parts/compressor). Furthermore, Hipwell's stands behind our installation labor, guaranteeing that the job is done right.
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Installation FAQs
                </h2>
                <div className="space-y-4">
                  {[
                    { q: "How long does a new AC installation take?", a: "A standard AC replacement usually takes one full day (6-8 hours). If we are installing completely new ductwork or modifying the furnace plenum, it may take longer." },
                    { q: "Do I need to replace my furnace at the same time?", a: "Not necessarily, but it is highly recommended if your furnace is over 10-12 years old. Replacing both the AC and furnace at the same time ensures the blower motor and evaporator coil are perfectly matched for maximum efficiency." },
                    { q: "What is a good SEER rating for Idaho Falls?", a: "While federal minimums require 14 SEER, we often recommend 15 to 18 SEER systems for Idaho Falls. Because our cooling season is shorter than in southern states, extremely high SEER (20+) may not provide a fast enough return on investment." }
                  ].map((faq, idx) => (
                    <div key={idx} className="border border-navy-100 rounded-xl p-6 bg-white shadow-sm">
                      <h3 className="font-bold text-navy-900 text-lg mb-2">{faq.q}</h3>
                      <p className="text-navy-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Get an Installation Quote</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Ready for a reliable, efficient new air conditioner? Call us to schedule an honest home assessment.
                </p>
                <a href="tel:12088448165" className="btn-primary w-full text-center flex justify-center">
                  <Phone className="w-5 h-5 mr-2" /> {businessInfo.phone}
                </a>
              </div>
              
              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">AC Repair</Link></li>
                  <li><Link to="/ac-maintenance-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">AC Maintenance</Link></li>
                  <li><Link to="/heat-pump-services-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">Heat Pump Installation</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Upgrade Your Home's Comfort"
        description="Contact Hipwell's Heating & Cooling today for a professional AC installation assessment."
      />
    </>
  );
}
