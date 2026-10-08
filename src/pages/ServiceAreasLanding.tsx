import { MapPin, Navigation, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';

export default function ServiceAreasLanding() {
  const heroImage = 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const areas = [
    { name: 'Idaho Falls', slug: '/', desc: 'Our home base. Complete HVAC repair and installation across Idaho Falls.' },
    { name: 'Rexburg', slug: '/ac-repair-rexburg', desc: 'Fast, reliable air conditioning and heating repairs for Madison County.' },
    { name: 'Ammon', slug: '/ac-repair-ammon', desc: 'Serving Ammon homeowners with honest diagnostics and seasonal tune-ups.' },
    { name: 'Rigby', slug: '/ac-repair-rigby', desc: 'Expert HVAC services for Jefferson County residents and businesses.' },
    { name: 'Shelley', slug: '/ac-repair-shelley', desc: 'Emergency furnace and AC repairs for Bingham County homes.' },
    { name: 'Blackfoot', slug: '/ac-repair-blackfoot', desc: 'Comprehensive heating and cooling solutions extending to Blackfoot.' },
    { name: 'Ucon', slug: '/ac-repair-ucon', desc: 'Local HVAC contractor serving Ucon and surrounding rural areas.' }
  ];

  return (
    <>
      <SEO
        title="HVAC Service Areas in Southeast Idaho | Hipwell's Heating & Cooling"
        description="Hipwell's Heating & Cooling provides professional HVAC repair, installation, and maintenance across Idaho Falls, Rexburg, Ammon, Rigby, Shelley, and Blackfoot."
        path="/service-areas"
      />

      <PageHero
        title="HVAC Service Areas in Southeast Idaho"
        subtitle="Prompt, professional, and reliable heating and cooling services across Bonneville, Madison, Bingham, and Jefferson counties."
        image={heroImage}
        breadcrumb={{ label: 'Service Areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Local HVAC Experts Serving Eastern Idaho
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When your furnace fails on a sub-zero night or your AC stops cooling during a July heatwave, waiting days for a technician isn't an option. Based in Idaho Falls, Hipwell's Heating & Cooling provides rapid-response HVAC repair across a wide radius of Southeast Idaho.
                  </p>
                  <p>
                    We know the unique climate challenges of our region—from the harsh, freezing winds of the Snake River Plain to the dry, intense summer heat. Our fully stocked service vehicles ensure we can diagnose and fix most heating and cooling problems on the very first visit, regardless of which city you live in.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {areas.map((area) => (
                  <Link 
                    key={area.name} 
                    to={area.slug}
                    className="flex items-start gap-4 p-6 border border-navy-100 rounded-xl bg-white shadow-sm hover:shadow-md hover:border-warm-500 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-warm-50 transition-colors">
                      <MapPin className="w-6 h-6 text-navy-600 group-hover:text-warm-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-navy-900 mb-2 group-hover:text-warm-600 transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-navy-600 text-sm leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="rounded-2xl bg-navy-900 p-8 text-white shadow-xl">
                <h3 className="font-display font-bold text-2xl mb-4 flex items-center gap-2">
                  <Navigation className="w-6 h-6 text-warm-500" /> Dispatch Center
                </h3>
                <p className="text-navy-200 mb-6 text-sm">
                  Our technicians are dispatched directly from our Idaho Falls location, allowing us to reach most eastern Idaho communities quickly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ice-500 shrink-0" />
                    <span className="text-sm">Fully stocked service trucks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ice-500 shrink-0" />
                    <span className="text-sm">Local, familiar technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ice-500 shrink-0" />
                    <span className="text-sm">No hidden travel fees for standard service zones</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-ice-50 border border-ice-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Not Sure If We Serve Your Area?</h3>
                <p className="text-navy-700 text-sm mb-4">
                  If you live just outside the listed cities, give us a call. We often accommodate rural residents in neighboring counties depending on our schedule.
                </p>
                <a href="tel:12088448165" className="text-warm-600 font-bold hover:text-warm-700 flex items-center gap-2">
                  Call 208-844-8165 <ShieldCheck className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="We Are Your Local HVAC Experts"
        description="Contact us today for service anywhere in our Southeast Idaho coverage area."
      />
    </>
  );
}
