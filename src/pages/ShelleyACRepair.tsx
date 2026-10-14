import { Phone, MapPin, Star, ThermometerSun, ShieldCheck, PenTool, CheckCircle, Navigation, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function ShelleyACRepair() {
  const heroImage = 'https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Air Conditioning Repair in Shelley, ID',
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
          name: 'Shelley, Idaho',
        },
        description: 'Reliable air conditioning diagnostics and repair for Shelley and north Bingham County homeowners. Fast dispatch down US-91 for blown capacitors, condenser coil cleaning, and leak repairs.',
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
            name: 'Shelley AC Repair',
            item: `${businessInfo.domain}/ac-repair-shelley`,
          },
        ],
      },
    ],
  };

  const shelleyFaqs = [
    {
      q: 'Does Hipwell’s dispatch to Shelley and Firth?',
      a: 'Yes. Shelley is an easy 15-minute drive south from our Idaho Falls shop down US-91 or I-15. We service homes throughout Shelley, Firth, Goshen, and surrounding rural acreage.',
    },
    {
      q: 'Why do outdoor AC units in Shelley get clogged so fast?',
      a: 'Shelley sits in the heart of Bingham County agricultural country. Heavy field winds, seasonal crop dust, and cottonwood fluff frequently pack between condenser aluminum fins. This restricts heat rejection and overheats compressors. We provide thorough coil chemical washes and airflow diagnostics.',
    },
    {
      q: 'Can you fix older air conditioners or do you only install new units?',
      a: 'Hipwell’s is strictly repair-first. We specialize in diagnosing and fixing older R-410A and even R-22 systems that other companies refuse to touch or push to replace prematurely.',
    },
  ];

  return (
    <>
      <SEO
        title="AC Repair in Shelley, ID | Hipwell's Heating & Cooling"
        description="Fast, honest AC repair in Shelley, Idaho and North Bingham County. We fix frozen coils, compressor failures, and electrical shorts. Call 208-844-8165."
        path="/ac-repair-shelley"
      />
      <JsonLd data={schemaData} />

      <PageHero
        title="AC Repair in Shelley, ID"
        subtitle="Prompt, honest air conditioning repair for homes and small businesses in Shelley, Firth, and northern Bingham County."
        image={heroImage}
        breadcrumb={{ label: 'Shelley AC Repair', path: '/service-areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Dependable Air Conditioning Repair for Shelley Homes
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When hot summer breezes roll across the Snake River Valley, a functioning air conditioner is your household's sanctuary. If your unit is struggling to keep up, blowing tepid air, or vibrating violently, you need an experienced technician who takes the time to determine <em>why</em> the system failed.
                  </p>
                  <p>
                    Just 15 minutes south of our shop in <Link to="/" className="text-warm-600 hover:underline">Idaho Falls</Link>, Hipwell’s Heating & Cooling provides prompt diagnostic visits to <strong>Shelley</strong>, Firth, and surrounding Bingham County communities. We carry 28+ years of field troubleshooting experience, ensuring your cooling equipment receives thorough inspection rather than a high-pressure sales pitch.
                  </p>
                </div>
              </div>

              {/* Local Challenges */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <ThermometerSun className="w-8 h-8 text-warm-600" /> Unique Cooling Challenges in Shelley
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Agricultural Dust Buildup</h3>
                    <p className="text-navy-700 text-sm">Farm dust from surrounding potato and grain fields blankets condenser coils, elevating refrigerant operating pressures until the thermal overload switch cuts off the unit.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Electrical Voltage Surges</h3>
                    <p className="text-navy-700 text-sm">Rural power lines and summer lightning storms frequently weaken contactors and start capacitors. We install heavy-duty, commercial-grade replacement components.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Refrigerant Line Leaks</h3>
                    <p className="text-navy-700 text-sm">Vibration over years of operation causes micro-fractures in copper lines and coil joints. We use electronic sniffer probes and nitrogen pressure tests to pinpoint the leak.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Blower Motor Overheating</h3>
                    <p className="text-navy-700 text-sm">Restricted return air from heavy regional dust causes indoor air handler motors to run hot and trip internal breakers before cooling cycles complete.</p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">Our Diagnostic-First Approach</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Direct US-91 Travel</h4>
                      <p className="text-navy-200 mt-1">We schedule tight arrival windows and call you directly as our technician heads south down State Highway 91.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Full-Subsystem Diagnostic</h4>
                      <p className="text-navy-200 mt-1">We measure voltage, motor capacitance, compressor winding resistance, and temperature split across the coil.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Guaranteed Lasting Repairs</h4>
                      <p className="text-navy-200 mt-1">We explain the root cause in plain English, quote a flat fee, and test the unit through a full cooling cycle before leaving.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-warm-600" /> Shelley AC Repair FAQs
                </h2>
                <div className="space-y-4">
                  {shelleyFaqs.map((faq, index) => (
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
                <h3 className="font-display font-bold text-xl text-white mb-2">Need Shelley AC Service?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Serving Shelley, Firth, and Goshen. Fast service and transparent pricing.
                </p>
                <a href={businessInfo.phoneLink} className="btn-primary w-full text-center flex justify-center mb-4">
                  <Phone className="w-5 h-5 mr-2" /> Call {businessInfo.phone}
                </a>
                <Link to="/contact" className="w-full text-center block text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors">
                  Send Message Online &rarr;
                </Link>
              </div>

              <div className="rounded-2xl bg-ice-50 border border-ice-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ice-600" /> Local Service Radius
                </h3>
                <p className="text-navy-700 text-sm mb-4">
                  Full service coverage across northern Bingham County:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Shelley Proper & Downtown</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Firth & Basalt Communities</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Goshen & Woodville Acreages</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">US-91 & New Sweden Road Areas</span></li>
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Quick Service Links</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Central AC Repair</Link></li>
                  <li><Link to="/furnace-troubleshooting-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Furnace Troubleshooting</Link></li>
                  <li><Link to="/hvac-diagnostics-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> System Diagnostic Visits</Link></li>
                  <li><Link to="/service-areas" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Service Area Directory</Link></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Stay Comfortable in Shelley, Idaho"
        description="Don't spend summer sweating in your home. Contact Hipwell's Heating & Cooling for prompt, honest AC repair."
      />
    </>
  );
}
