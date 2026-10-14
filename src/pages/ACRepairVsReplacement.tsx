import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';
import { CheckCircle2, DollarSign, Clock, HelpCircle, Wrench, ShieldAlert } from 'lucide-react';

export default function ACRepairVsReplacement() {
  const heroImage = 'https://images.pexels.com/photos/20046692/pexels-photo-20046692.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'AC Repair vs. Replacement: When Should You Replace Your Cooling Unit?',
        description: 'A contractor’s honest guide to the $5,000 rule, R-22 Freon phaseout, recurring compressor failure, and how to decide whether to repair or replace your AC in Idaho.',
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
        mainEntityOfPage: `${businessInfo.domain}/blog/ac-repair-vs-replacement`,
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
            name: 'AC Repair vs. Replacement',
            item: `${businessInfo.domain}/blog/ac-repair-vs-replacement`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="AC Repair vs. AC Replacement Guide | Hipwell's HVAC"
        description="Learn when it makes financial sense to repair your old AC versus replacing it. Learn the $5,000 rule, refrigerant costs, and honest equipment advice."
        path="/blog/ac-repair-vs-replacement"
      />
      <JsonLd data={schemaData} />

      <PageHero
        title="AC Repair vs. Replacement: Which Is Better?"
        subtitle="How to make an informed, cost-effective decision when your cooling system breaks down in Eastern Idaho."
        image={heroImage}
        breadcrumb={{ label: 'Repair vs. Replace', path: '/blog' }}
      />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <article className="prose prose-lg prose-navy max-w-none">
            <p className="lead text-xl text-navy-600 font-medium mb-8">
              When an air conditioner breaks down in the sweltering heat of July, homeowners often find themselves backed into a corner. Many HVAC companies send sales representatives disguised as technicians who automatically declare, <em>"Your system is dead—you need to buy a $10,000 replacement today."</em>
            </p>

            <p>
              At <Link to="/" className="text-warm-600 font-semibold hover:underline">Hipwell’s Heating & Cooling</Link>, we take pride in being a repair-focused company. With over 28 years of hands-on field experience, we have successfully restored hundreds of systems that competitors claimed were unfixable. However, there does come a point where continuous repairs become throwing good money after bad.
            </p>

            <p>
              Here is an objective framework to help you decide whether repairing your air conditioner makes financial sense or if it’s truly time for a replacement.
            </p>

            <h2>The Professional "$5,000 Rule"</h2>
            <p>
              In the HVAC industry, an established guideline used by ethical technicians is the <strong>$5,000 Rule</strong>:
            </p>
            <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 my-6 not-prose text-center">
              <p className="text-lg font-bold text-navy-900 mb-2">Age of AC System (Years) &times; Estimated Cost of Repair ($) = Score</p>
              <p className="text-sm text-navy-600">If the total is <strong>less than $5,000</strong> &rarr; Repair the system.<br />If the total is <strong>greater than $5,000</strong> &rarr; Replacement is generally the better investment.</p>
            </div>
            <p>
              <strong>Example 1:</strong> Your AC is 8 years old and needs a $350 capacitor and contactor replacement. <em>8 &times; 350 = 2,800</em>. Since 2,800 is well below 5,000, fixing the unit is a clear winner.
            </p>
            <p>
              <strong>Example 2:</strong> Your AC is 14 years old and has a grounded compressor requiring a $2,200 repair. <em>14 &times; 2,200 = 30,800</em>. At this stage, investing $2,200 into a 14-year-old machine nearing the end of its design life is not financially prudent.
            </p>

            <h2>Key Factors When Evaluating Your AC</h2>

            <h3>1. The Refrigerant Type (R-22 vs. R-410A)</h3>
            <p>
              If your system was installed prior to 2010, there is a strong chance it operates on <strong>R-22 Freon</strong>. As of 2020, the EPA completely banned the production and importation of R-22. Because remaining stocks are scarce, recharging an R-22 system after a leak can cost $800 to $1,500 just for the gas, with no guarantee that an aging copper coil won't leak again next season.
            </p>

            <h3>2. Equipment Age and Warranty Status</h3>
            <p>
              Most residential air conditioners in Idaho have an expected lifespan of 12 to 18 years, depending on maintenance consistency. If your unit is under 10 years old, major parts like the compressor or coil may still be covered under the manufacturer's original parts warranty.
            </p>

            <h3>3. Frequency of Breakdowns</h3>
            <p>
              Has your cooling unit needed service every single summer for the past three years? Frequent component failures (fan motors, capacitors, relays, circuit boards) signal that electrical insulation and mechanical wear are cascading. A new high-efficiency system eliminates emergency service calls and provides multi-year warranty protection.
            </p>

            <h3>4. Energy Efficiency (SEER vs. SEER2)</h3>
            <p>
              Air conditioners manufactured 15 years ago typically carried an efficiency rating of 10 to 12 SEER. Modern units installed today in Idaho must meet updated SEER2 requirements (typically 14.3 to 18+ SEER). Upgrading can reduce your summer cooling electric bill by 25% to 40%.
            </p>

            <h2>Repairs That Almost Always Make Sense</h2>
            <ul>
              <li><strong>Replacing Capacitors and Contactors:</strong> Inexpensive electrical parts that restore an otherwise healthy system.</li>
              <li><strong>Clearing Blocked Condensate Drains:</strong> Fast maintenance fix that eliminates leaks and safety shutoffs.</li>
              <li><strong>Replacing Outdoor Fan Motors:</strong> Cost-effective repair that protects the compressor from high-head pressure.</li>
              <li><strong>Thermostat Replacement or Rewiring:</strong> Upgrading controls often solves erratic cooling cycles instantly.</li>
            </ul>

            <h2>When Replacement Is the Smarter Choice</h2>
            <ul>
              <li>The compressor has suffered a mechanical freeze or internal electrical short on an out-of-warranty system.</li>
              <li>The evaporator coil has extensive formicary corrosion with multiple non-repairable leaks.</li>
              <li>Your energy bills have skyrocketed despite regular maintenance.</li>
              <li>Rooms throughout your home suffer from severe hot and cold spots that airflow balancing cannot fix.</li>
            </ul>

            <h2>Get an Honest Second Opinion in Idaho Falls</h2>
            <p>
              Before you sign a contract for a costly replacement, let Hipwell’s provide an honest diagnostic evaluation. If a straightforward repair can reliably extend your unit's life for several more summers, we will tell you straight. If replacement is truly your smartest long-term move, our <Link to="/air-conditioning-installation-idaho-falls" className="text-warm-600 font-semibold hover:underline">AC installation team</Link> will size a new system matched to your home's exact square footage and ductwork.
            </p>
            <p>
              Explore our <Link to="/air-conditioning-repair-idaho-falls" className="text-warm-600 font-semibold hover:underline">AC repair services</Link> or call Brent directly at <a href="tel:12088448165" className="text-warm-600 font-bold hover:underline">208-844-8165</a>.
            </p>
          </article>
        </div>
      </section>

      <CTASection 
        title="Unsure If You Should Repair or Replace?"
        description="Get an honest, pressure-free assessment from technicians with over 28 years of Idaho HVAC experience."
      />
    </>
  );
}
