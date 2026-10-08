import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';

export default function ACBlowingWarmAir() {
  const heroImage = 'https://images.pexels.com/photos/6471912/pexels-photo-6471912.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="Why Is My AC Blowing Warm Air in Idaho Falls? | Hipwell's Blog"
        description="Learn the top reasons your air conditioner is running but blowing warm air, and find out what you can do to fix it before calling a professional."
        path="/blog/ac-blowing-warm-air-idaho-falls"
      />

      <PageHero
        title="Why Is My AC Blowing Warm Air in Idaho Falls?"
        subtitle="Troubleshooting one of the most frustrating summer HVAC problems."
        image={heroImage}
        breadcrumb={{ label: 'Blog', path: '/blog' }}
      />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <article className="prose prose-lg prose-navy max-w-none">
            <p className="lead text-xl text-navy-600 font-medium mb-8">
              It’s the middle of July in eastern Idaho. The sun is beating down, the temperature is pushing 95 degrees, and you realize your house feels like an oven. You check the vents, and sure enough—your AC is blowing warm air.
            </p>

            <p>
              This is one of the most common service calls we receive at <Link to="/">Hipwell's Heating & Cooling</Link>. An air conditioner that runs without cooling is not just frustrating; it’s a sign that a core component of your system is failing. Here are the top reasons why this happens and what you can do about it.
            </p>

            <h2>1. Thermostat Settings Are Incorrect</h2>
            <p>
              It sounds obvious, but you’d be surprised how often a warm house is caused by a thermostat that got accidentally bumped from "Auto" to "On."
            </p>
            <ul>
              <li><strong>If set to "On":</strong> The blower motor runs 24/7, circulating air even when the outdoor compressor isn’t cooling it.</li>
              <li><strong>If set to "Auto":</strong> The blower only runs during a cooling cycle.</li>
            </ul>
            <p><strong>The Fix:</strong> Check your <Link to="/thermostat-services-idaho-falls">thermostat</Link> and ensure the fan is set to "Auto" and the system is set to "Cool."</p>

            <h2>2. The Air Filter is Completely Clogged</h2>
            <p>
              A dirty air filter restricts airflow over the evaporator coil. Without sufficient warm air blowing over it, the coil gets too cold and literally freezes into a block of solid ice. Once frozen, the refrigerant can’t absorb heat, and the system just blows room-temperature air around the house.
            </p>
            <p><strong>The Fix:</strong> Turn off your AC immediately to let the ice melt. Check your filter and replace it if it’s dirty. Regular <Link to="/preventive-maintenance-idaho-falls">HVAC maintenance</Link> prevents this.</p>

            <h2>3. You Have a Refrigerant Leak</h2>
            <p>
              Air conditioners do not "use up" Freon (refrigerant). If you are low on refrigerant, you have a leak somewhere in the copper lines or coils. Low refrigerant causes the system to struggle to remove heat from your home, resulting in warm air from the vents.
            </p>
            <p><strong>The Fix:</strong> This requires professional <Link to="/hvac-diagnostics-idaho-falls">HVAC diagnostics</Link>. We must find the leak using an electronic detector, repair the leak, and then recharge the system.</p>

            <h2>4. The Outdoor Unit Lost Power (or the Capacitor Failed)</h2>
            <p>
              If your indoor fan is blowing but the outdoor compressor isn't running, you'll only get warm air. This could be a tripped circuit breaker, or far more likely in the summer heat, a blown <strong>run capacitor</strong>.
            </p>
            <p>The capacitor is a small battery-like device that gives the compressor the massive jolt of electricity it needs to start. When it fails, the outdoor fan might run, but the compressor won't, so no cooling takes place.</p>
            <p><strong>The Fix:</strong> Call for <Link to="/air-conditioning-repair-idaho-falls">AC repair</Link>. Replacing a capacitor is a fast, relatively inexpensive fix that instantly restores cooling.</p>

            <h2>When to Call a Professional</h2>
            <p>
              If you’ve checked your thermostat and replaced your filter, but the air is still warm, turn the system off. Running an AC with a frozen coil, a failed capacitor, or low refrigerant can permanently destroy the compressor—turning a simple $200 repair into a $3,000 replacement.
            </p>

            <div className="bg-navy-50 p-6 rounded-xl border border-navy-100 mt-8">
              <h3 className="mt-0 text-navy-900">Need AC Repair in Idaho Falls?</h3>
              <p className="mb-0">
                At Hipwell's Heating & Cooling, we find the root cause of your AC problems. We don't just add Freon; we find the leak. <Link to="/contact">Contact us today</Link> to schedule an honest diagnostic visit.
              </p>
            </div>
          </article>
        </div>
      </section>

      <CTASection 
        title="Don't Sweat Through the Summer"
        description="Our fully stocked trucks are ready to get your AC blowing ice-cold air again."
      />
    </>
  );
}
