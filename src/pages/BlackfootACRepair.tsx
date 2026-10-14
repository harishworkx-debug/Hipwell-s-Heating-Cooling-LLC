import { Phone, MapPin, Star, ThermometerSun, ShieldCheck, PenTool, CheckCircle, Navigation, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function BlackfootACRepair() {
  const heroImage = 'https://images.pexels.com/photos/6471911/pexels-photo-6471911.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Air Conditioning Repair in Blackfoot, ID',
        serviceType: 'AC Repair',
        provider: {
          '@type': 'HVACBusiness',
          name: businessInfo.name,
          telephone: '+1-208-844-8165',
          url: businessInfo.domain,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2260 Calkins Ave',
            addressLocality: 'Idaho Falls',
            addressRegion: 'ID',
            postalCode: '83402',
            addressCountry: 'US',
          },
        },
        areaServed: {
          '@type': 'City',
          name: 'Blackfoot, Idaho',
        },
        description: 'Comprehensive AC and heat pump repair for Blackfoot, ID homeowners. Expert diagnostics for frozen evaporator coils, bad fan motors, and low refrigerant along the I-15 corridor.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: businessInfo.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: `${businessInfo.domain}/service-areas`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Blackfoot AC Repair',
            item: `${businessInfo.domain}/ac-repair-blackfoot`,
          },
        ],
      },
    ],
  };

  const blackfootFaqs = [
    {
      q: 'How far does Hipwell’s travel to reach Blackfoot?',
      a: 'Blackfoot is approximately a 25-minute drive south down the I-15 corridor from our Idaho Falls headquarters. We schedule designated service blocks for Bingham County to ensure prompt on-time arrival without delays.',
    },
    {
      q: 'Do you repair heat pumps as well as central air conditioners in Blackfoot?',
      a: 'Yes. Many homes across Blackfoot and Riverside utilize dual-fuel or electric heat pump systems. We diagnose reversing valves, defrost controls, dual-stage compressors, and auxiliary heating elements.',
    },
    {
      q: 'What should I do if my AC is leaking water inside my Blackfoot home?',
      a: 'Shut the system off immediately at your thermostat. In humid summer spells, high condensation combined with a clogged condensate drain line or frozen evaporator coil will overflow the drain pan, threatening drywall or flooring. Call us to safely clear the line and inspect coil operation.',
    },
  ];

  return (
    <>
      <SEO
        title="AC Repair in Blackfoot, ID | Hipwell's Heating & Cooling"
        description="Expert AC and heat pump repair in Blackfoot, Idaho. We resolve warm air, frozen coils, and noisy compressors with honest diagnostics. Call 208-844-8165."
        path="/ac-repair-blackfoot"
      />
      <JsonLd data={schemaData} />

      <PageHero
        title="AC Repair in Blackfoot, ID"
        subtitle="Prompt, dependable cooling and heat pump repairs for homeowners and properties across Blackfoot and southern Bingham County."
        image={heroImage}
        breadcrumb={{ label: 'Blackfoot AC Repair', path: '/service-areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Root-Cause Cooling Diagnostics for Blackfoot Homeowners
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    Summers in the lower Snake River Valley bring intense sun and sustained high temperatures. When your cooling system trips the circuit breaker, runs nonstop without dropping indoor temperatures, or makes a shrill metallic squeal, you need a technician with proven diagnostic credentials.
                  </p>
                  <p>
                    Headquartered just up I-15 in <Link to="/" className="text-warm-600 hover:underline">Idaho Falls</Link>, Hipwell’s Heating & Cooling frequently dispatches to <strong>Blackfoot</strong>, Riverside, Groveland, and Moreland. With over 28 years in the HVAC trade, we focus on identifying and repairing the real source of system failure rather than trying to sell you a brand-new unit when a repair makes financial sense.
                  </p>
                </div>
              </div>

              {/* Common Issues in Blackfoot */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <ThermometerSun className="w-8 h-8 text-warm-600" /> Typical AC Issues We Solve in Blackfoot
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Heat Pump Reversing Valve Faults</h3>
                    <p className="text-navy-700 text-sm">For homes with heat pump systems, a stuck reversing valve or failed solenoid prevents the unit from switching into cooling mode, blowing lukewarm air.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Condenser Fan Motor Failures</h3>
                    <p className="text-navy-700 text-sm">Bearings dry out and seize after years of high-heat exposure. When the outdoor fan stops spinning, the compressor overheats within minutes and shuts down on high pressure.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Clogged Condensate Drain Lines</h3>
                    <p className="text-navy-700 text-sm">Algae and dust accumulate in the PVC drain line, tripping float switches and causing water to back up into the indoor utility closet or basement ceiling.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Low Refrigerant & Coil Leaks</h3>
                    <p className="text-navy-700 text-sm">If your copper lines are frosted white, the system is low on refrigerant. We use nitrogen leak testing to locate the fracture, braze the joint, and recharge to exact factory specs.</p>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">Our Blackfoot Service Workflow</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Punctual I-15 Corridor Scheduling</h4>
                      <p className="text-navy-200 mt-1">We schedule dedicated Bingham County time slots and provide an exact courtesy call before arriving at your property.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Thorough Diagnostics Without Guesswork</h4>
                      <p className="text-navy-200 mt-1">We test line pressures, amp draws, electrical controls, and airflow distribution to prove what failed and why.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Flat-Rate Pricing & Clean Work</h4>
                      <p className="text-navy-200 mt-1">No surprise hourly overages. You approve the quote before we open any parts box, and we leave your equipment spotless.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-warm-600" /> Blackfoot AC Repair FAQs
                </h2>
                <div className="space-y-4">
                  {blackfootFaqs.map((faq, index) => (
                    <div key={index} className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                      <h3 className="font-bold text-lg text-navy-900 mb-2">{faq.q}</h3>
                      <p className="text-navy-700 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Need AC Service in Blackfoot?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Serving Blackfoot, Riverside, Groveland, and Moreland.
                </p>
                <a href={businessInfo.phoneLink} className="btn-primary w-full text-center flex justify-center mb-4">
                  <Phone className="w-5 h-5 mr-2" /> Call {businessInfo.phone}
                </a>
                <Link to="/contact" className="w-full text-center block text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors">
                  Schedule Online Diagnostic &rarr;
                </Link>
              </div>

              <div className="rounded-2xl bg-ice-50 border border-ice-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ice-600" /> Bingham County Service Area
                </h3>
                <p className="text-navy-700 text-sm mb-4">
                  Full HVAC service coverage across the Blackfoot area:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Downtown Blackfoot & Jensen Grove</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Riverside & Moreland Subdivisions</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Groveland & Wapello Rural Routes</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Rose & Pingree Agricultural Properties</span></li>
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related HVAC Resources</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Air Conditioning Repair</Link></li>
                  <li><Link to="/heat-pump-services-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Heat Pump Diagnostics & Repair</Link></li>
                  <li><Link to="/hvac-diagnostics-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Comprehensive Diagnostics</Link></li>
                  <li><Link to="/service-areas" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Regional Service Areas</Link></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Beat the Blackfoot Summer Heat"
        description="Fast, reliable cooling diagnostics for your home or business. Call Hipwell's Heating & Cooling today."
      />
    </>
  );
}
