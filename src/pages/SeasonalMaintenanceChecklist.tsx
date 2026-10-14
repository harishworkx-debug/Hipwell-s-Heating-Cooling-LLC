import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench, ShieldCheck, ThermometerSnowflake, Flame } from 'lucide-react';

export default function SeasonalMaintenanceChecklist() {
  const heroImage = 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'What Does Seasonal HVAC Maintenance Include? (Spring & Fall Checklist)',
        description: 'Complete breakdown of what a professional HVAC tune-up covers for air conditioners and furnaces in Idaho Falls and Eastern Idaho.',
        author: {
          '@type': 'Organization',
          name: businessInfo.name,
        },
        publisher: {
          '@type': 'Organization',
          name: businessInfo.name,
          logo: {
            '@type': 'ImageObject',
            url: `${businessInfo.domain}/logo.png`,
          },
        },
        datePublished: '2026-10-14',
        dateModified: '2026-10-14',
        mainEntityOfPage: `${businessInfo.domain}/blog/seasonal-hvac-maintenance-checklist`,
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
            name: 'Blog',
            item: `${businessInfo.domain}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Seasonal Maintenance Checklist',
            item: `${businessInfo.domain}/blog/seasonal-hvac-maintenance-checklist`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="What Does Seasonal HVAC Maintenance Include? | Hipwell's Blog"
        description="Discover exactly what a professional HVAC tune-up includes in Idaho. Learn our spring AC inspection and fall heating tune-up checklist."
        path="/blog/seasonal-hvac-maintenance-checklist"
      />
      <JsonLd data={schemaData} />

      <PageHero
        title="What Does Seasonal HVAC Maintenance Include?"
        subtitle="A comprehensive checklist of what every homeowner should expect during professional spring AC and fall heating tune-ups."
        image={heroImage}
        breadcrumb={{ label: 'Maintenance Checklist', path: '/blog' }}
      />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <article className="prose prose-lg prose-navy max-w-none">
            <p className="lead text-xl text-navy-600 font-medium mb-8">
              Every spring and fall, HVAC contractors flood mailboxes with promotional tune-up flyers. But what actually happens when a professional technician arrives at your home? Is it just a quick glance and a new filter, or a rigorous inspection of electrical, refrigeration, and combustion systems?
            </p>

            <p>
              In Eastern Idaho, our climate is severe. We swing from below-zero blizzards in January to 95-degree heat in July. Regular preventive maintenance isn’t a luxury—it’s the difference between equipment that lasts 18 trouble-free years versus one that suffers an expensive breakdown during the hottest week of the summer.
            </p>

            <p>
              Here is a clear look at what genuine, professional seasonal HVAC maintenance includes.
            </p>

            <h2>Spring AC Maintenance Checklist</h2>
            <p>
              Before you switch your thermostat to "Cool" in May or June, your cooling equipment requires preparation after sitting dormant under snow for six months.
            </p>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100 my-6 not-prose">
              <h3 className="font-bold text-navy-900 text-lg mb-4 flex items-center gap-2">
                <ThermometerSnowflake className="w-5 h-5 text-ice-600" /> Professional AC Inspection Tasks
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-ice-600 shrink-0 mt-0.5" />
                  <span><strong>Chemical Condenser Coil Cleaning:</strong> Rinsing away accumulated winter dirt, dead foliage, and agricultural dust so heat can dissipate freely.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-ice-600 shrink-0 mt-0.5" />
                  <span><strong>Refrigerant Charge Verification:</strong> Checking operating pressures, subcooling, and superheat to confirm there are no line leaks.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-ice-600 shrink-0 mt-0.5" />
                  <span><strong>Electrical Amp & Microfarad Testing:</strong> Testing start/run capacitors and motor amperage against factory rating plates to prevent mid-summer burnout.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-ice-600 shrink-0 mt-0.5" />
                  <span><strong>Contactor Point Inspection:</strong> Checking for electrical pitting or insect intrusion that could weld contacts shut.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-ice-600 shrink-0 mt-0.5" />
                  <span><strong>Condensate Line Flush:</strong> Clearing algae and debris from the indoor drain line and testing the float safety switch.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-ice-600 shrink-0 mt-0.5" />
                  <span><strong>Airflow & Temperature Drop Check:</strong> Measuring temperature split between return and supply registers (targeting 15°F–20°F).</span>
                </li>
              </ul>
            </div>

            <h2>Fall Heating & Furnace Maintenance Checklist</h2>
            <p>
              In September or October, focus shifts to winter safety and heating reliability. Gas furnaces involve combustible natural gas or propane, making safety checks mandatory.
            </p>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100 my-6 not-prose">
              <h3 className="font-bold text-navy-900 text-lg mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-warm-600" /> Professional Furnace Inspection Tasks
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
                  <span><strong>Heat Exchanger Safety Inspection:</strong> Checking metal surfaces for hairline cracks, rust, or soot that could allow dangerous carbon monoxide into living quarters.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
                  <span><strong>Burner Cleaning & Ignition Testing:</strong> Removing oxidation from burner ports to ensure smooth, quiet ignition without delays.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
                  <span><strong>Flame Sensor Cleaning:</strong> Polishing the micro-amp flame sensor rod to eliminate nuisance short-cycling shutoffs.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
                  <span><strong>Draft Inducer & Vent Pressure Check:</strong> Testing pressure switches to guarantee poisonous exhaust gases are actively expelled outdoors.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
                  <span><strong>Gas Pressure Measurement:</strong> Verifying inlet and manifold gas pressure using a digital manometer to ensure efficient burn rates.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
                  <span><strong>Blower Wheel Cleaning:</strong> Inspecting fan blades for dust buildup that degrades motor efficiency and restricts home airflow.</span>
                </li>
              </ul>
            </div>

            <h2>Why Maintenance Saves Real Money</h2>
            <ol>
              <li><strong>Prevents 85% of Emergency Breakdowns:</strong> Most mid-season failures start as small electrical or mechanical anomalies that are easily spotted and corrected during a tune-up.</li>
              <li><strong>Lowers Monthly Utility Bills:</strong> A clean coil, balanced refrigerant charge, and unobstructed airflow can reduce energy usage by 10% to 15%.</li>
              <li><strong>Protects Manufacturer Warranties:</strong> Equipment manufacturers (Carrier, Trane, Lennox, Rheem, etc.) explicitly state in their warranty terms that failure to perform annual maintenance can void parts coverage.</li>
              <li><strong>Maximizes Equipment Lifespan:</strong> Routine care extends system life by 5 to 7 years, deferring major replacement investments.</li>
            </ol>

            <h2>Schedule Your Eastern Idaho Tune-Up</h2>
            <p>
              At Hipwell’s Heating & Cooling, our seasonal maintenance visits are thorough, systematic evaluations performed by licensed technicians with over 28 years of field experience.
            </p>
            <p>
              Explore our <Link to="/ac-maintenance-idaho-falls" className="text-warm-600 font-semibold hover:underline">AC maintenance services</Link> and <Link to="/preventive-maintenance-idaho-falls" className="text-warm-600 font-semibold hover:underline">preventive maintenance plans</Link>, or call <a href="tel:12088448165" className="text-warm-600 font-bold hover:underline">208-844-8165</a> to book your inspection today.
            </p>
          </article>
        </div>
      </section>

      <CTASection 
        title="Ready for Seasonal Peace of Mind?"
        description="Book your seasonal tune-up today and ensure your heating or cooling system is ready for Idaho weather."
      />
    </>
  );
}
