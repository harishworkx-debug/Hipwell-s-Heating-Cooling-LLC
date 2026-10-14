import { Phone, MapPin, Star, ThermometerSun, ShieldCheck, PenTool, CheckCircle, Navigation, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function AmmonACRepair() {
  const heroImage = 'https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Air Conditioning Repair in Ammon, ID',
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
          name: 'Ammon, Idaho',
        },
        description: 'Rapid, reliable air conditioning repair and diagnostics for homeowners in Ammon, Idaho. Honest troubleshooting for short-cycling, warm air, and refrigerant leaks.',
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
            name: 'Ammon AC Repair',
            item: `${businessInfo.domain}/ac-repair-ammon`,
          },
        ],
      },
    ],
  };

  const ammonFaqs = [
    {
      q: 'How quickly can Hipwell’s dispatch an AC technician to Ammon?',
      a: 'Our shop on Calkins Ave in Idaho Falls is directly adjacent to Ammon. We frequently reach Ammon neighborhoods—including Sunnyside Road, 17th Street, and McCowin Park corridors—within 30 to 60 minutes for urgent cooling breakdowns during peak summer heat.',
    },
    {
      q: 'Why is my Ammon home’s upstairs much hotter than the main floor?',
      a: 'Many two-story homes in newer Ammon subdivisions suffer from airflow imbalances, undersized return ducting, or improperly balanced dampers. We perform full airflow and static pressure diagnostics to fix the root cause rather than simply turning down the thermostat.',
    },
    {
      q: 'Do you charge extra for travel to Ammon?',
      a: 'No. Ammon is part of our primary local service footprint. Our standard diagnostic and flat-rate repair rates apply with zero added travel surcharges.',
    },
  ];

  return (
    <>
      <SEO
        title="AC Repair in Ammon, ID | Hipwell's Heating & Cooling"
        description="Fast, reliable air conditioning repair in Ammon, ID. We diagnose and fix warm air, frozen coils, blown capacitors, and refrigerant leaks. Call 208-844-8165."
        path="/ac-repair-ammon"
      />
      <JsonLd data={schemaData} />

      <PageHero
        title="AC Repair in Ammon, ID"
        subtitle="Prompt, honest air conditioning diagnostic and repair services for homes and families throughout Ammon and Bonneville County."
        image={heroImage}
        breadcrumb={{ label: 'Ammon AC Repair', path: '/service-areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Trusted AC Diagnostics & Repair for Ammon Homeowners
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When July temperatures climb into the mid-90s across Eastern Idaho, a dependable air conditioning system is essential. If your cooling unit is blowing warm air, cycling on and off rapidly, or making loud grinding noises, you need a technician who specializes in <strong>finding the root problem</strong> instead of pushing an unnecessary system replacement.
                  </p>
                  <p>
                    Based right next door in <Link to="/" className="text-warm-600 hover:underline">Idaho Falls</Link>, Hipwell’s Heating & Cooling provides prompt, direct service to <strong>Ammon</strong> homeowners. Whether you live in established neighborhoods near Hillcrest High School, the expanding subdivisions south of Sunnyside, or near McCowin Park, our service trucks arrive fully stocked with universal parts to resolve your issue on the initial visit.
                  </p>
                </div>
              </div>

              {/* Common Ammon Cooling Issues */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <ThermometerSun className="w-8 h-8 text-warm-600" /> Common AC Problems We Fix in Ammon
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Blown Run Capacitors</h3>
                    <p className="text-navy-700 text-sm">During intense summer heat waves, your compressor draws high starting amperage. A weakened capacitor will swell and fail, leaving your fan humming while blowing warm air.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Frozen Evaporator Coils</h3>
                    <p className="text-navy-700 text-sm">Restricted airflow from dirty filters or pinhole refrigerant leaks causes the indoor coil to ice over into a solid block, suffocating the cooling process.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Short Cycling</h3>
                    <p className="text-navy-700 text-sm">When your AC turns on for 3 minutes and shuts down repeatedly, it places immense wear on the compressor and spikes electrical utility bills without cooling your living spaces.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Thermostat & Wiring Glitches</h3>
                    <p className="text-navy-700 text-sm">We test 24V control circuits, smart thermostat configurations, and contactor relays to ensure signals reach your condenser cleanly.</p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Diagnostic Process */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">Our Ammon AC Repair Process</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Fast Local Dispatch</h4>
                      <p className="text-navy-200 mt-1">Call us at 208-844-8165. We arrange a service window and notify you when our technician is on their way across 17th or Sunnyside.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Comprehensive Electrical & Pressure Diagnostics</h4>
                      <p className="text-navy-200 mt-1">We inspect capacitors, contactor points, motor amperage, refrigerant superheat/subcooling, and static airflow pressures.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Transparent Upfront Pricing</h4>
                      <p className="text-navy-200 mt-1">You get a straightforward repair explanation and flat-rate pricing before we install any part. No hidden add-ons.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local FAQs */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-warm-600" /> Ammon AC Repair FAQs
                </h2>
                <div className="space-y-4">
                  {ammonFaqs.map((faq, index) => (
                    <div key={index} className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                      <h3 className="font-bold text-lg text-navy-900 mb-2">{faq.q}</h3>
                      <p className="text-navy-700 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Need AC Repair in Ammon?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Minutes away from Ammon neighborhoods. Call now for prompt, honest diagnostics.
                </p>
                <a href={businessInfo.phoneLink} className="btn-primary w-full text-center flex justify-center mb-4">
                  <Phone className="w-5 h-5 mr-2" /> Call {businessInfo.phone}
                </a>
                <Link to="/contact" className="w-full text-center block text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors">
                  Or Request Online Appointment &rarr;
                </Link>
              </div>

              <div className="rounded-2xl bg-ice-50 border border-ice-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ice-600" /> Ammon Coverage Areas
                </h3>
                <p className="text-navy-700 text-sm mb-4">
                  Immediate dispatch across all Ammon neighborhoods and surrounding Bonneville County communities:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Sunnyside & 17th St Corridors</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Hillcrest Area & Curlew Meadows</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">McCowin Park & Tiebreaker</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">East Lincoln Road Environs</span></li>
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related HVAC Services</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Core AC Repair Services</Link></li>
                  <li><Link to="/ac-maintenance-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Seasonal AC Tune-Ups</Link></li>
                  <li><Link to="/hvac-diagnostics-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> Complete System Diagnostics</Link></li>
                  <li><Link to="/service-areas" className="text-navy-700 hover:text-warm-600 flex items-center gap-2 text-sm"><Navigation className="w-4 h-4 text-warm-500"/> All Southeast Idaho Service Areas</Link></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Restore Your Ammon Home's Comfort"
        description="Over 28 years of diagnostic excellence. Call Hipwell's Heating & Cooling today for reliable AC repairs."
      />
    </>
  );
}
