import { HelpCircle, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';

export default function FAQs() {
  const heroImage =
    'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  const faqs = [
    {
      q: 'How much does HVAC repair cost in Idaho Falls?',
      a: 'The cost of HVAC repair varies widely based on the part that failed. A simple capacitor or contactor might cost between $150–$300, whereas replacing a compressor or a cracked heat exchanger can cost well over $1,000. At Hipwell\'s, we charge a flat diagnostic fee to find the root cause, and then provide a transparent, upfront repair quote before any work begins.',
    },
    {
      q: 'How quickly can you repair my AC?',
      a: 'We prioritize emergency calls (such as total system failure during extreme heat) and strive for same-day service whenever possible. Because we keep our service trucks fully stocked with common universal parts, we are able to complete the majority of AC repairs on the very first visit.',
    },
    {
      q: 'Why is my furnace blowing cold air?',
      a: 'If your furnace is blowing cold air, it usually means the blower motor is running but the burners have failed to ignite. This is commonly caused by a dirty flame sensor, a faulty hot surface ignitor, or a gas supply issue. Turn the furnace off and call us so we can safely diagnose the ignition failure.',
    },
    {
      q: 'How often should I service my HVAC system?',
      a: 'We highly recommend professional servicing twice a year: an AC tune-up in the Spring and a Furnace tune-up in the Fall. Regular maintenance prevents unexpected breakdowns, lowers your energy bills, and is required to keep most manufacturer warranties valid.',
    },
    {
      q: 'Should I repair or replace my furnace?',
      a: 'As a repair-first company, we will always try to fix your furnace if it makes financial sense. However, if your furnace is over 15 years old, has a cracked heat exchanger (which is a carbon monoxide hazard), or if the repair cost exceeds 50% of the value of a new system, we will honestly recommend replacement.',
    },
    {
      q: 'How do I know if my AC needs refrigerant?',
      a: 'Air conditioners do not "consume" refrigerant; it operates in a closed loop. If you are low on Freon, you have a leak. Signs of a leak include: the AC running constantly but the house remaining warm, ice forming on the indoor or outdoor coils, or a hissing sound near the unit. We use electronic detectors to find the leak and repair it before recharging the system.',
    },
    {
      q: 'Do you provide emergency HVAC service?',
      a: 'Yes, we provide emergency HVAC repair services for situations where your safety or property is at risk—such as a furnace failing on a sub-zero winter night or an AC leaking water through your ceiling. Call us immediately at 208-844-8165.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <SEO
        title="HVAC FAQs | Hipwell's Heating & Cooling Idaho Falls"
        description="Answers to common HVAC questions in Idaho Falls. Learn about AC repair costs, why your furnace is blowing cold air, and when to replace your system."
        path="/faqs"
      />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Honest answers to the most common heating and cooling questions we hear from homeowners in eastern Idaho."
        image={heroImage}
        breadcrumb={{ label: 'FAQs' }}
      />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-warm-500 mx-auto mb-4" />
            <h2 className="font-display font-bold text-3xl text-navy-900">
              Get the Facts About Your HVAC System
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-navy-50 rounded-xl p-8 border border-navy-100 shadow-sm"
              >
                <h3 className="font-bold text-xl text-navy-900 mb-3">{faq.q}</h3>
                <p className="text-navy-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-ice-50 rounded-2xl p-8 border border-ice-100 text-center">
            <h3 className="font-display font-bold text-2xl text-navy-900 mb-4">Have a question that isn't listed here?</h3>
            <p className="text-navy-700 mb-6">We're happy to talk through your specific HVAC issues over the phone.</p>
            <a href="tel:12088448165" className="btn-primary inline-flex">
              <Phone className="w-5 h-5 mr-2" /> Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Schedule Service?"
        description="Whether you need a quick repair or a full system replacement, our technicians are ready to help."
      />
    </>
  );
}
