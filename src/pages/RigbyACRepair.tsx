import { Phone, MapPin, Star, ThermometerSun, ShieldCheck, PenTool, CheckCircle, Navigation, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function RigbyACRepair() {
  const heroImage = 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Air Conditioning Repair in Rigby, ID',
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
          name: 'Rigby, Idaho',
        },
        description: 'Fast, professional AC repair and troubleshooting for Rigby and Jefferson County homeowners. Solving capacitor burnouts, fan motor failures, and warm air along Highway 20.',
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
            name: 'Rigby AC Repair',
            item: `${businessInfo.domain}/ac-repair-rigby`,
          },
        ],
      },
    ],
  };

  const rigbyFaqs = [
    {
      q: 'How fast can you get a technician to Rigby?',
      a: 'Rigby is just 15 minutes north of our shop straight up US Highway 20. We regularly service Rigby, Annis, Menan, and Roberts, and prioritize emergency calls when homes are without cooling during heat waves.',
    },
    {
      q: 'Why do AC units in Rigby struggle with electrical issues?',
      a: 'The open plains of Jefferson County experience frequent summer wind storms and lightning activity that cause micro-voltage sags. These electrical fluctuations place intense stress on compressor run capacitors and contactor relays. We install heavy-duty, surge-rated components to prevent repeated failures.',
    },
    {
      q: 'Do you charge a travel surcharge for service calls in Rigby?',
      a: 'No. Rigby is part of our standard eastern Idaho service territory. Our regular flat-rate diagnostic fee and upfront repair pricing apply without hidden mileage add-ons.',
    },
  ];

  return (
    <>
      <SEO
        title="AC Repair in Rigby, ID | Hipwell's Heating & Cooling"
        description="Fast, reliable AC repair in Rigby, Idaho & Jefferson County. Honest diagnostics for blown capacitors, frozen coils, and low airflow. Call 208-844-8165."
        path="/ac-repair-rigby"
      />
      <JsonLd data={schemaData} />

      <PageHero
        title="AC Repair in Rigby, ID"
        subtitle="Prompt, honest air conditioning repair and diagnostics for homeowners across Rigby and Jefferson County."
        image={heroImage}
        breadcrumb={{ label: 'Rigby AC Repair', path: '/service-areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Trusted AC Diagnostics & Repair for Rigby Families
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When summer winds whip across Jefferson County and daytime temperatures climb toward triple digits, a malfunctioning air conditioner can make your home unbearable within hours. If your AC is running continuously without cooling, short cycling, or making loud buzzing sounds, you need a technician who tests thoroughly rather than guessing.
                  </p>
                  <p>
                    Located just 15 minutes down US-20 in <Link to="/" className="text-warm-600 hover:underline">Idaho Falls</Link>, Hipwell’s Heating & Cooling has served <strong>Rigby</strong>, Annis, Lorenzo, and Menan for more than 28 years. We are a repair-first HVAC company: we find the genuine failure point, explain the issue clearly, and provide upfront flat-rate pricing to get your system cooling again quickly.
                  </p>
                </div>
              </div>

              {/* Local Issues in Rigby */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <ThermometerSun className="w-8 h-8 text-warm-600" /> Common Rigby Cooling Problems
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Wind-Blown Sand & Dirt</h3>
                    <p className="text-navy-700 text-sm">Open plains around Rigby kick up high volumes of dry topsoil that become lodged deep within the condenser coils, trapping heat and causing high-pressure lockouts.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Failed Capacitors & Contactors</h3>
                    <p className="text-navy-700 text-sm">Summer electrical loads frequently fry aging dual-run capacitors, leaving the compressor struggling to turn over while the indoor fan blows ambient room air.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Pinhole Freon Leaks</h3>
                    <p className="text-navy-700 text-sm">If your indoor evaporator is encased in frost, you have lost refrigerant charge. We locate the exact pinhole leak with precision detection tools and weld it securely.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Airflow Imbalances</h3>
                    <p className="text-navy-700 text-sm">Newer subdivisions in Rigby often feature multi-level layouts with uneven cooling. We inspect static pressure, duct sizing, and blower speeds to restore balanced comfort.</p>
                  </div>
                </div>
              </div>

              {/* Repair Workflow */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">Our Rigby Repair Process</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Quick US-20 Dispatch</h4>
                      <p className="text-navy-200 mt-1">We arrive promptly in fully stocked service vehicles ready to diagnose and complete most repairs in a single visit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Systematic Electrical & Pressure Check</h4>
                      <p className="text-navy-200 mt-1">We test voltage, amp draws, refrigerant pressures, and temperature differentials across your coils.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Upfront Quotes & Tested Results</h4>
                      <p className="text-navy-200 mt-1">No surprise bills. We give you clear options, complete the work cleanly, and test the unit before heading out.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-warm-600" /> Rigby AC Repair FAQs
                </h2>
                <div className="space-y-4">
                  {rigbyFaqs.map((faq, index) => (
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
                <h3 className="font-display font-bold text-xl text-white mb-2">Need AC Repair in Rigby?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Serving Rigby, Annis, Menan, and Roberts. Rapid service and fair pricing.
                </p>
                <a href={businessInfo.phoneLink} className="btn-primary w-full text-center flex justify-center mb-4">
                  <Phone className="w-5 h-5 mr-2" /> Call {businessInfo.phone}
                </a>
                <Link to="/contact" className="w-full text-center block text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors">
                  Book Service Online &rarr;
                </Link>
              </div>

              <div className="rounded-2xl bg-ice-50 border border-ice-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ice-600" /> Jefferson County Coverage
                </h3>
                <p className="text-navy-700 text-sm mb-4">
                  Serving communities throughout Jefferson County:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Rigby City & South Rigby</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Annis & Clark Hill Outskirts</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Menan & Lorenzo Vicinities</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Roberts & Market Lake Rural Routes</span></li>
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related Cooling Links</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Core AC Repair Services</Link></li>
                  <li><Link to="/ac-maintenance-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Rigby AC Maintenance</Link></li>
                  <li><Link to="/thermostat-services-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Thermostat Troubleshooting</Link></li>
                  <li><Link to="/service-areas" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Service Areas Hub</Link></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Keep Cool All Summer in Rigby"
        description="Don't let a broken AC ruin your week. Call Hipwell's Heating & Cooling for honest, expert service."
      />
    </>
  );
}
