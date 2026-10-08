import { Phone, MapPin, Star, ThermometerSun, ShieldCheck, PenTool, CheckCircle, Navigation } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function RexburgACRepair() {
  const heroImage = 'https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="AC Repair in Rexburg, ID | Hipwell's Heating & Cooling"
        description="Fast, reliable AC repair in Rexburg, Idaho. We service Madison County homes and businesses with honest diagnostics and upfront pricing."
        path="/ac-repair-rexburg"
      />

      <PageHero
        title="AC Repair in Rexburg, ID"
        subtitle="Prompt, professional air conditioning repair for homes and businesses across Rexburg and Madison County."
        image={heroImage}
        breadcrumb={{ label: 'Rexburg AC Repair', path: '/service-areas' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Trusted AC Repair for Rexburg Homeowners
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When the summer heat sets in across the Snake River Valley, a broken air conditioner can quickly make your home uncomfortable. While we are headquartered down Highway 20 in <Link to="/" className="text-warm-600 hover:underline">Idaho Falls</Link>, Hipwell's Heating & Cooling frequently dispatches our fully stocked service vehicles to <strong>Rexburg</strong> and the surrounding Madison County communities.
                  </p>
                  <p>
                    Whether you own a historic home near BYU-Idaho or a newly built property in the Summerfield or Burton areas, we provide exact <Link to="/hvac-diagnostics-idaho-falls" className="text-warm-600 hover:underline">HVAC diagnostics</Link> and honest <Link to="/air-conditioning-repair-idaho-falls" className="text-warm-600 hover:underline">AC repairs</Link> without high-pressure sales tactics. We don't just guess; we find the root cause of your cooling failure.
                  </p>
                </div>
              </div>

              {/* Common AC Issues in the Area */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6 flex items-center gap-3">
                  <ThermometerSun className="w-8 h-8 text-warm-600" /> Common Rexburg AC Problems
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Dust-Clogged Coils</h3>
                    <p className="text-navy-700 text-sm">Eastern Idaho winds kick up a lot of dust and agricultural debris. When this coats your outdoor condenser coil, it suffocates the system, causing the AC to run constantly and struggle to cool.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Blown Capacitors</h3>
                    <p className="text-navy-700 text-sm">During peak heat waves, an overworked AC draws massive amperage to start the compressor. This frequently causes the run capacitor to fail, resulting in a humming unit that blows warm air.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Refrigerant Leaks</h3>
                    <p className="text-navy-700 text-sm">If your indoor coil is freezing into a block of ice, you likely have a Freon leak. We use electronic leak detectors to find the pinhole leak and weld it shut.</p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                    <h3 className="font-bold text-lg text-navy-900 mb-2">Thermostat Failures</h3>
                    <p className="text-navy-700 text-sm">Sometimes the AC is fine, but the thermostat wiring has failed. We troubleshoot complex electrical issues and install modern smart thermostats.</p>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="w-8 h-8 text-ice-500" />
                  <h2 className="font-display font-bold text-3xl">Our Repair Process</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Rapid Dispatch</h4>
                      <p className="text-navy-200 mt-1">We respect your time. When you call, we schedule a specific window and call you when we are heading up Highway 20 to Rexburg.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Electrical & Airflow Diagnostics</h4>
                      <p className="text-navy-200 mt-1">We test capacitors, voltage, refrigerant pressures, and blower amperage to prove exactly what component failed.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Upfront Pricing</h4>
                      <p className="text-navy-200 mt-1">Before we replace a single part, we explain the problem and provide a flat-rate price. No hidden fees or hourly surprises.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Genuine Proof / Reviews */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  What Eastern Idaho Locals Say
                </h2>
                <div className="bg-white border border-navy-100 shadow-sm rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-navy-700 italic mb-4">
                    "My AC went out right in the middle of July. Hipwell's came out to Rexburg the very next day. The tech found a blown capacitor, replaced it in 20 minutes, and didn't try to sell me a whole new system. Very honest company."
                  </p>
                  <p className="text-navy-900 font-bold">— Local Madison County Resident</p>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Need AC Repair?</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Serving Rexburg, Sugar City, and St. Anthony. Call us for reliable diagnostics today.
                </p>
                <Link to="/contact" className="btn-primary w-full text-center flex justify-center">
                  <Phone className="w-5 h-5 mr-2" /> {businessInfo.phone}
                </Link>
              </div>

              <div className="rounded-2xl bg-ice-50 border border-ice-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ice-600" /> Service Availability
                </h3>
                <p className="text-navy-700 text-sm mb-4">
                  We frequently service Madison County. While we prioritize emergency calls across the region, standard repairs in Rexburg are typically scheduled with rapid turnaround times.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Rexburg</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Sugar City</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-ice-600" /><span className="text-sm text-navy-800">Rigby</span></li>
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Helpful Links</h3>
                <ul className="space-y-3">
                  <li><Link to="/air-conditioning-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2"><Navigation className="w-4 h-4"/> General AC Repair</Link></li>
                  <li><Link to="/hvac-diagnostics-idaho-falls" className="text-navy-700 hover:text-warm-600 flex items-center gap-2"><Navigation className="w-4 h-4"/> HVAC Diagnostics</Link></li>
                  <li><Link to="/contact" className="text-navy-700 hover:text-warm-600 flex items-center gap-2"><Navigation className="w-4 h-4"/> Contact Us</Link></li>
                  <li><Link to="/" className="text-navy-700 hover:text-warm-600 flex items-center gap-2"><Navigation className="w-4 h-4"/> Back to Idaho Falls HQ</Link></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Stay Cool in Rexburg"
        description="Don't suffer in the heat. Call Hipwell's Heating & Cooling for honest, effective AC repairs."
      />
    </>
  );
}
