import { Phone, Flame, Wrench, AlertTriangle, Zap, Fan, ThermometerSun, Volume2, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function HeatingRepairIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/6045338/pexels-photo-6045338.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const commonIssues = [
    { title: 'No Heat', icon: Flame, text: "If your furnace won't turn on at all, it could be a tripped breaker, a dead thermostat, or a failed control board. We trace the electrical path to find the exact point of failure." },
    { title: 'Furnace Not Heating', icon: ThermometerSun, text: "Blowing cold air? This is often caused by a dirty flame sensor, a bad gas valve, or a cracked heat exchanger. We diagnose the issue safely and efficiently." },
    { title: 'Short Cycling', icon: AlertTriangle, text: "If your furnace turns on for a minute and then shuts off, it's likely overheating due to a clogged filter, or the flame sensor is failing to detect the burner flame." },
    { title: 'Ignition Problems', icon: Zap, text: "Modern furnaces use electronic ignitors instead of standing pilot lights. When these crack or wear out, the gas won't ignite. We carry universal and OEM ignitors for quick replacement." },
    { title: 'Blower Motor Failures', icon: Fan, text: "The blower motor pushes the warm air through your ducts. If it fails, your furnace will overheat and shut down. We repair and replace ECM and PSC blower motors." },
    { title: 'Strange Noises', icon: Volume2, text: "Loud bangs, squealing, or rumbling are never normal. Banging can indicate delayed gas ignition (a serious safety hazard), while squealing usually means a failing blower motor bearing." },
  ];

  return (
    <>
      <SEO
        title="Heating Repair in Idaho Falls, ID | Furnace & HVAC Service"
        description="Emergency heating repair in Idaho Falls. We fix gas furnaces, electric furnaces, and heat pumps. Call for fast, reliable furnace repair when you have no heat."
        path="/heating-repair-idaho-falls"
      />

      <PageHero
        title="Heating Repair in Idaho Falls, ID"
        subtitle="When Idaho winters hit hard, we restore your heat fast. Expert diagnostics and repairs for furnaces and heat pumps."
        image={heroImage}
        breadcrumb={{ label: 'Heating Repair', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Expert Heating Repair for Eastern Idaho Winters
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    A broken heating system in the middle of an Idaho Falls winter isn't just uncomfortable—it's a genuine emergency. Plunging temperatures can put your family at risk and cause your home's pipes to freeze. When you have <strong>no heat</strong>, you need an HVAC contractor you can trust to respond quickly and fix the problem right the first time.
                  </p>
                  <p>
                    At Hipwell's Heating & Cooling, we have over 28 years of experience diagnosing and repairing all types of residential heating systems. Whether your gas furnace is blowing cold air, your heat pump is frozen over, or your thermostat has completely died, our technicians arrive equipped to restore your comfort safely.
                  </p>
                </div>
              </div>

              {/* Emergency Repair */}
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                  <h2 className="font-display font-bold text-2xl text-red-900">
                    Emergency Heating Repair
                  </h2>
                </div>
                <p className="text-red-900/80 text-lg mb-6">
                  Smell gas? Hear a loud banging when the furnace starts? Is your home's temperature dropping rapidly during a freeze? Don't wait. We provide priority emergency heating repair to ensure your family stays safe and warm.
                </p>
                <a href="tel:12088448165" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors animate-pulse">
                  <Phone className="w-5 h-5" /> Call for Emergency Furnace Repair
                </a>
              </div>

              {/* Common Problems Grid */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Common Furnace Troubleshooting & Repairs
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  We specialize in pinpointing the exact mechanical or electrical failure in your heating system. Here are the most frequent issues we resolve for Idaho Falls homeowners:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {commonIssues.map((issue, idx) => {
                    const Icon = issue.icon;
                    return (
                      <div key={idx} className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-warm-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-warm-600" />
                          </div>
                          <h3 className="font-bold text-lg text-navy-900">{issue.title}</h3>
                        </div>
                        <p className="text-navy-600 leading-relaxed text-sm">
                          {issue.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Systems We Repair */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Heating Systems We Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="border-t-4 border-warm-500 bg-white shadow-md rounded-b-xl p-6">
                    <h3 className="font-bold text-xl text-navy-900 mb-3">Gas Furnaces</h3>
                    <p className="text-navy-600 text-sm">The most common heating source in eastern Idaho. We repair gas valves, ignitors, flame sensors, and inspect heat exchangers for dangerous carbon monoxide leaks.</p>
                  </div>
                  <div className="border-t-4 border-ice-500 bg-white shadow-md rounded-b-xl p-6">
                    <h3 className="font-bold text-xl text-navy-900 mb-3">Heat Pumps</h3>
                    <p className="text-navy-600 text-sm">We diagnose reversing valves, defrost board failures, and refrigerant leaks to ensure your heat pump operates efficiently even as temperatures drop.</p>
                  </div>
                  <div className="border-t-4 border-navy-500 bg-white shadow-md rounded-b-xl p-6">
                    <h3 className="font-bold text-xl text-navy-900 mb-3">Electric Furnaces</h3>
                    <p className="text-navy-600 text-sm">Electric resistance heating requires high-voltage expertise. We safely repair burnt heating elements, sequencers, and failing blower motors.</p>
                  </div>
                </div>
              </div>

              {/* Thermostats */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <ThermometerSun className="w-8 h-8 text-warm-500" />
                  <h2 className="font-display font-bold text-3xl">Is It Just the Thermostat?</h2>
                </div>
                <p className="text-navy-200 text-lg mb-4">
                  Often, the furnace is perfectly fine, but the thermostat is failing to send the "call for heat" signal. We diagnose thermostat wiring issues, recalibrate temperature sensors, and can upgrade your home to a smart thermostat for better efficiency.
                </p>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">No Heat? Call Now</h3>
                <p className="text-navy-200 text-sm mb-6">
                  We answer our phones. Call Hipwell's Heating & Cooling for immediate furnace repair.
                </p>
                <a href="tel:12088448165" className="btn-primary w-full text-center flex justify-center">
                  <Phone className="w-5 h-5 mr-2" /> {businessInfo.phone}
                </a>
              </div>

              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Furnace FAQs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Why is my furnace blowing cold air?</h4>
                    <p className="text-xs text-navy-700 mt-1">Usually, the burners have failed to ignite due to a dirty flame sensor or bad ignitor. The blower runs, but there's no heat.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Should I repair or replace my furnace?</h4>
                    <p className="text-xs text-navy-700 mt-1">If the unit is over 15 years old and the heat exchanger is cracked, replacement is necessary for safety. Otherwise, we can usually repair it.</p>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Don't Shiver Through the Night"
        description="Our technicians are standing by to diagnose and fix your heating system."
      />
    </>
  );
}
