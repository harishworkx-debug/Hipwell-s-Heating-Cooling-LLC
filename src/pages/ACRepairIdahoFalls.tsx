import { Phone, Check, Snowflake, Wrench, AlertTriangle, Fan, RefreshCw, Activity, DollarSign, Clock, Flame, Settings } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function ACRepairIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/6471912/pexels-photo-6471912.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const commonIssues = [
    { title: 'AC Not Cooling', icon: Snowflake, text: "The most common complaint we hear is an AC that runs but doesn't cool. This can be caused by a dirty air filter, a refrigerant leak, or a failing compressor. We don't just add Freon and leave; we find the root cause." },
    { title: 'Blowing Warm Air', icon: Flame, text: "If your vents are blowing warm air, you might have a thermostat issue, a tripped breaker, or low refrigerant levels. Our technicians use advanced diagnostic tools to trace the exact electrical or mechanical failure." },
    { title: 'Frozen Evaporator Coils', icon: Snowflake, text: "Ice on your indoor or outdoor unit usually indicates restricted airflow or low refrigerant. Running an AC with frozen coils can destroy the compressor. Turn it off immediately and call us." },
    { title: 'Refrigerant Leaks', icon: Activity, text: "Air conditioners don't consume refrigerant; if it's low, there's a leak. We use electronic leak detectors and UV dye to find microscopic leaks, repair the copper lines, and properly recharge the system." },
    { title: 'Compressor Problems', icon: Wrench, text: "The compressor is the heart of your AC. Hard starting, loud buzzing, or tripping breakers often point to compressor stress. Often, we can save a struggling compressor by replacing a faulty capacitor or installing a hard start kit." },
    { title: 'Capacitor Failures', icon: Activity, text: "Capacitors provide the initial jolt of electricity to start your motors. When they fail, your AC might hum but not start. This is a fast, affordable repair that immediately restores cooling." },
    { title: 'Electrical & Wiring', icon: AlertTriangle, text: "Failing contactors, burnt wires, and blown fuses are common during Idaho heatwaves when systems run constantly. We safely repair high-voltage and low-voltage electrical faults." },
    { title: 'Strange Noises', icon: Wrench, text: "Squealing implies a bad fan belt or motor bearing. Buzzing usually means an electrical issue. Rattling could be loose hardware. Don't ignore AC noises; early intervention saves money." },
    { title: 'Poor Airflow', icon: Fan, text: "Weak airflow means your home takes forever to cool down. We inspect blower motors, ductwork integrity, and evaporator coils to ensure maximum air volume is reaching every room." },
    { title: 'Thermostat Issues', icon: Settings, text: "Sometimes the AC is fine, but the thermostat is blank, uncalibrated, or disconnected. We repair wiring and install modern smart thermostats that integrate perfectly with your system." },
  ];

  return (
    <>
      <SEO
        title="AC Repair in Idaho Falls, ID | Air Conditioning Service"
        description="Professional AC repair in Idaho Falls. We fix ACs not cooling, frozen coils, refrigerant leaks, and compressor problems. Call Hipwell's Heating & Cooling."
        path="/air-conditioning-repair-idaho-falls"
      />

      <PageHero
        title="AC Repair in Idaho Falls, ID"
        subtitle="Fast, reliable air conditioning repair services. We diagnose the root cause and fix your AC correctly the first time."
        image={heroImage}
        breadcrumb={{ label: 'AC Repair', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Expert Air Conditioning Repair in Idaho Falls
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When the summer heat hits eastern Idaho, a broken air conditioner isn't just an inconvenience—it can make your home unbearable. At Hipwell's Heating & Cooling, we specialize in providing fast, accurate, and long-lasting residential AC repair in Idaho Falls and the surrounding areas.
                  </p>
                  <p>
                    Unlike companies that use a broken AC as an excuse to sell you a brand-new system, <strong>we are a repair-first HVAC contractor.</strong> With over 28 years of diagnostic experience, we know how to track down complex electrical, mechanical, and airflow issues that other technicians might miss. Whether you need an emergency AC repair or a simple capacitor replacement, we treat your home and your budget with respect.
                  </p>
                </div>
              </div>

              {/* Common Problems Grid */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  We Solve Every Type of AC Problem
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  Air conditioners are complex systems of electrical relays, pressurized gases, and high-speed motors. Here are the most common AC problems we diagnose and repair daily:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {commonIssues.map((issue, idx) => {
                    const Icon = issue.icon;
                    return (
                      <div key={idx} className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-ice-600" />
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

              {/* Emergency Repair */}
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                  <h2 className="font-display font-bold text-2xl text-red-900">
                    Emergency AC Repair Idaho Falls
                  </h2>
                </div>
                <p className="text-red-900/80 text-lg mb-6">
                  Is your AC leaking water through your ceiling? Is there a burning electrical smell coming from your vents? Is your outdoor unit smoking or sparking? Turn off your system immediately at the thermostat and call us.
                </p>
                <a href="tel:12088448165" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                  <Phone className="w-5 h-5" /> Call for Emergency Repair
                </a>
              </div>

              {/* Repair vs Replacement */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Repair vs. Replacement: What's the Right Call?
                </h2>
                <p className="text-lg text-navy-700 mb-6">
                  One of the most common questions we get is whether an old air conditioner is worth fixing. Because we are repair specialists, we will always give you an honest answer based on the condition of your equipment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white border-2 border-green-100 rounded-xl p-6">
                    <h3 className="font-bold text-xl text-green-800 mb-4 flex items-center gap-2">
                      <Wrench className="w-5 h-5" /> When to Repair
                    </h3>
                    <ul className="space-y-3 text-navy-700">
                      <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 shrink-0" /> Your AC is less than 10 years old</li>
                      <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 shrink-0" /> The repair cost is less than $500</li>
                      <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 shrink-0" /> Your energy bills are still reasonable</li>
                      <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 shrink-0" /> It's a simple electrical or capacitor issue</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border-2 border-orange-100 rounded-xl p-6">
                    <h3 className="font-bold text-xl text-orange-800 mb-4 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5" /> When to Replace
                    </h3>
                    <ul className="space-y-3 text-navy-700">
                      <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" /> Your AC uses discontinued R-22 Freon</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" /> The compressor has catastrophically failed</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" /> The unit is over 15 years old and constantly breaking</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" /> Repair costs exceed 50% of a new system</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing Factors */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-warm-500" />
                  <h2 className="font-display font-bold text-3xl">Pricing Factors</h2>
                </div>
                <p className="text-navy-200 text-lg mb-6">
                  We believe in upfront, transparent pricing. The cost of your AC repair will depend on:
                </p>
                <ul className="space-y-4 text-navy-100">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-warm-500/20 flex items-center justify-center shrink-0 mt-0.5">1</div>
                    <p><strong>The specific part that failed:</strong> A capacitor is inexpensive, while a compressor or evaporator coil is a major investment.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-warm-500/20 flex items-center justify-center shrink-0 mt-0.5">2</div>
                    <p><strong>Refrigerant type:</strong> If you have an older system that requires R-22, the refrigerant itself is highly expensive. Modern R-410A is more affordable.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-warm-500/20 flex items-center justify-center shrink-0 mt-0.5">3</div>
                    <p><strong>Labor time:</strong> A simple electrical fix takes 30 minutes. Finding and welding a microscopic refrigerant leak can take hours.</p>
                  </li>
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  AC Repair FAQs
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Why is my AC running but not cooling the house?",
                      a: "This is usually caused by a clogged air filter restricting airflow, a refrigerant leak preventing heat transfer, or a dirty condenser coil outside. Turn the unit off and call for service so you don't burn out the compressor."
                    },
                    {
                      q: "How long does a typical AC repair take?",
                      a: "Most common repairs—like replacing contactors, capacitors, or blower motors—can be completed in 1 to 2 hours once we are on site. If parts need to be ordered, we will clearly communicate the timeline."
                    },
                    {
                      q: "Do I really need to change my air filter?",
                      a: "Absolutely. A dirty air filter is the #1 cause of AC breakdowns. It suffocates the system, causes coils to freeze, and forces the blower motor to work harder, eventually leading to premature failure. Change 1-inch filters every 30-60 days."
                    },
                    {
                      q: "What should I check before calling for AC repair?",
                      a: "First, check your thermostat batteries. Second, ensure it is set to 'Cool' and the temperature is below room temperature. Finally, check your electrical panel to ensure the AC breaker hasn't tripped. If those are fine, call us."
                    }
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
                <h3 className="font-display font-bold text-xl text-white mb-2">Need AC Repair Fast?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Don't suffer in the heat. Call Hipwell's Heating & Cooling for prompt, professional service.
                </p>
                <a href="tel:12088448165" className="btn-primary w-full text-center flex justify-center">
                  <Phone className="w-5 h-5 mr-2" /> {businessInfo.phone}
                </a>
              </div>

              <div className="rounded-2xl bg-ice-50 border border-ice-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Service Areas</h3>
                <ul className="space-y-3">
                  {['Idaho Falls', 'Ammon', 'Rigby', 'Rexburg', 'Shelley', 'Blackfoot'].map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-ice-600" />
                      <span className="text-navy-700">{city}, ID</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Other Services</h3>
                <ul className="space-y-3">
                  <li><Link to="/heating-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">Furnace Repair</Link></li>
                  <li><Link to="/ac-maintenance-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">AC Maintenance</Link></li>
                  <li><Link to="/hvac-diagnostics-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">System Diagnostics</Link></li>
                  <li><Link to="/thermostat-services-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">Thermostat Repair</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Stop Sweating and Start Cooling"
        description="Our technicians are ready to diagnose and fix your air conditioner today."
      />
    </>
  );
}
