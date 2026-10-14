import { Phone, MapPin, Star, ThermometerSun, ShieldCheck, PenTool, CheckCircle, Navigation, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function UconACRepair() {
  const heroImage = 'https://images.pexels.com/photos/5463582/pexels-photo-5463582.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Air Conditioning Repair in Ucon, ID',
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
          name: 'Ucon, Idaho',
        },
        description: 'Fast, diagnostic-driven AC repair for homeowners and acreage properties in Ucon, Idaho. Honest troubleshooting for refrigerant leaks, compressor overloads, and electrical faults.',
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
            name: 'Ucon AC Repair',
            item: `${businessInfo.domain}/ac-repair-ucon`,
          },
        ],
      },
    ],
  };

  const uconFaqs = [
    {
      q: 'How quickly can Hipwell’s reach Ucon for an AC repair?',
      a: 'Ucon is just a 10-minute drive northeast from our Idaho Falls location via Yellowstone Highway (US-26). We provide rapid same-day response times for cooling emergencies.',
    },
    {
      q: 'Do you work on older HVAC systems on Ucon rural properties?',
      a: 'Yes. Many properties in Ucon feature older central AC units, converted farmhouse ductwork, or hybrid heat pumps. With over 28 years in the field, we specialize in fixing older units that other companies refuse to service.',
    },
    {
      q: 'Why does my AC keep tripping the breaker in my Ucon home?',
      a: 'A tripped breaker during cooling operation usually indicates the compressor is drawing excessive startup amperage (due to a failing capacitor or hard-start issue) or there is a grounded motor winding. Turn the breaker off once and call us immediately to prevent permanent compressor burnout.',
    },
  ];

  return (
    <>
      <SEO
        title="AC Repair in Ucon, ID | Hipwell's Heating & Cooling"
        description="Fast, reliable AC repair in Ucon, Idaho. We fix warm air, electrical faults, frozen coils, and noisy units. Over 28 years experience. Call 208-844-8165."
        path="/ac-repair-ucon"
      />
      <JsonLd data={schemaData} />

      <PageHero
        title="AC Repair in Ucon, ID"
        subtitle="Prompt, honest air conditioning repair for homes, acreage properties, and families throughout Ucon and northeast Bonneville County."
        image={heroImage}
        breadcrumb={{ label: 'Ucon AC Repair', path: '/service-areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Expert Air Conditioning Repair for Ucon Residents
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When eastern Idaho summer heat settles into the valley, your air conditioner needs to run reliably for hours every afternoon. If your cooling system is short cycling, blowing room-temperature air, or failing to turn on altogether, you need a technician with real troubleshooting depth.
                  </p>
                  <p>
                    Located less than 10 minutes southwest in <Link to="/" className="text-warm-600 hover:underline">Idaho Falls</Link>, Hipwell’s Heating & Cooling provides prompt diagnostic visits to <strong>Ucon</strong> and surrounding rural properties. We pride ourselves on being repair-first specialists: we test methodically, find the actual root cause, and give you honest recommendations without sales pressure.
                  </p>
                </div>
              </div>

              {/* Common Issues in Ucon */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <ThermometerSun className="w-8 h-8 text-warm-600" /> Typical Cooling Problems in Ucon
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Compressor Hard Starting</h3>
                    <p className="text-navy-700 text-sm">Long electrical runs on rural acreage properties often result in slight voltage drops. When paired with a failing start capacitor, the compressor shudders and trips breakers.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Cottonwood & Dust Fouling</h3>
                    <p className="text-navy-700 text-sm">Ucon’s proximity to irrigation canals and open farmland means seasonal cottonwood and dust pack into coil fins, blocking airflow and causing the system to blow warm air.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Evaporator Coil Freeze-Ups</h3>
                    <p className="text-navy-700 text-sm">Restricted airflow or micro-leaks in the refrigerant lines cause the indoor coil to turn into a solid ice block, blocking conditioned air from circulating through your home.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Control Board & Thermostat Faults</h3>
                    <p className="text-navy-700 text-sm">We test 24V transformers, contactor coils, and thermostat wiring to identify intermittent electronic communication failures.</p>
                  </div>
                </div>
              </div>

              {/* Repair Workflow */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">Our Ucon AC Repair Process</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Fast US-26 Dispatch</h4>
                      <p className="text-navy-200 mt-1">We arrive quickly with a fully equipped truck carrying universal capacitors, contactors, motors, and refrigerants.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Root-Cause Diagnostics</h4>
                      <p className="text-navy-200 mt-1">We test electrical circuits, measure line pressures, and inspect airflow rather than guessing or replacing parts randomly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Clear Pricing & Complete Testing</h4>
                      <p className="text-navy-200 mt-1">We provide an upfront repair price, complete the fix, and monitor a full cooling cycle before closing the service call.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-warm-600" /> Ucon AC Repair FAQs
                </h2>
                <div className="space-y-4">
                  {uconFaqs.map((faq, index) => (
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
                <h3 className="font-display font-bold text-xl text-white mb-2">Need AC Repair in Ucon?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Minutes from Ucon properties. Call now for prompt, honest diagnostic service.
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
                  <MapPin className="w-5 h-5 text-ice-600" /> Ucon Service Area
                </h3>
                <p className="text-navy-700 text-sm mb-4">
                  Serving homeowners across the Ucon and northeastern Bonneville County area:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Ucon Town Center & 109th North</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Yellowstone Hwy (US-26) Corridor</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">North 25th East & County Line Areas</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Lincoln Road & Iona North Environs</span></li>
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related HVAC Services</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Central AC Repair</Link></li>
                  <li><Link to="/hvac-diagnostics-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Full System Diagnostics</Link></li>
                  <li><Link to="/ac-maintenance-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Seasonal AC Tune-Ups</Link></li>
                  <li><Link to="/service-areas" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Southeast Idaho Hub</Link></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Dependable Cooling for Your Ucon Home"
        description="Experience the difference of root-cause diagnostics. Call Hipwell's Heating & Cooling today."
      />
    </>
  );
}
