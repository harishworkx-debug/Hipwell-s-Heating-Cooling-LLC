import { Phone, Flame, ShieldCheck, ThermometerSun, CheckCircle2, Factory, DollarSign, PenTool } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function HeatingInstallationIdahoFalls() {
  const heroImage = 'https://images.pexels.com/photos/6045338/pexels-photo-6045338.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  return (
    <>
      <SEO
        title="Heating Installation in Idaho Falls, ID | Furnace Replacement"
        description="Professional heating installation and furnace replacement in Idaho Falls. We correctly size and install high-efficiency gas furnaces and heat pumps."
        path="/heating-installation-idaho-falls"
      />

      <PageHero
        title="Heating Installation & Furnace Replacement in Idaho Falls"
        subtitle="Upgrading your home's heating system with precision sizing, meticulous installation, and high-efficiency equipment built for Idaho winters."
        image={heroImage}
        breadcrumb={{ label: 'Heating Installation', path: '/services' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Expert Furnace Replacement for Total Winter Comfort
                </h2>
                <div className="prose prose-lg text-navy-700 max-w-none space-y-4">
                  <p>
                    When an aging furnace fails in the middle of an Idaho Falls winter, you need a replacement fast. But rushing a heating installation without proper load calculations can leave you with a system that short-cycles, wastes energy, or fails to heat certain rooms.
                  </p>
                  <p>
                    At Hipwell's Heating & Cooling, we don't just swap boxes. We take the time to evaluate your home's square footage, insulation, and ductwork to ensure your new gas furnace or electric heating system is perfectly sized for your specific needs.
                  </p>
                </div>
              </div>

              {/* Signs for Replacement */}
              <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">When to Consider Furnace Replacement</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-warm-600 shrink-0" />
                    <div>
                      <strong className="text-navy-900">Age of the System:</strong>
                      <p className="text-navy-700 text-sm mt-1">If your furnace is over 15 years old, its heat exchanger may be nearing the end of its safe operational life.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-warm-600 shrink-0" />
                    <div>
                      <strong className="text-navy-900">Rising Heating Bills:</strong>
                      <p className="text-navy-700 text-sm mt-1">Older furnaces have AFUE ratings of 60-70%. Upgrading to a 90%+ AFUE furnace drastically cuts your gas bill.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-warm-600 shrink-0" />
                    <div>
                      <strong className="text-navy-900">Costly Repairs:</strong>
                      <p className="text-navy-700 text-sm mt-1">If a repair costs more than 50% of the value of a new unit, investing in a new, warrantied system is the smarter financial choice.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* The Installation Process */}
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Our Heating Installation Process
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 p-5 border border-navy-100 rounded-lg bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg text-navy-900">Load Calculation</h4>
                      <p className="text-navy-600 mt-1">We don't guess. We calculate your home's exact heating load so your new furnace is perfectly sized—preventing short-cycling and uneven heating.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 border border-navy-100 rounded-lg bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg text-navy-900">System Selection</h4>
                      <p className="text-navy-600 mt-1">We offer options ranging from reliable single-stage furnaces to ultra-efficient variable-speed models, explaining the benefits of each.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 border border-navy-100 rounded-lg bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-warm-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg text-navy-900">Safe, Clean Installation</h4>
                      <p className="text-navy-600 mt-1">We safely disconnect gas lines, properly vent exhaust flues, and ensure airtight connections to your ductwork for zero carbon monoxide risks.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Get an Estimate</h3>
                <p className="text-navy-200 text-sm mb-6">
                  Ready to upgrade your home's heating? Call us for a no-pressure consultation.
                </p>
                <a href="tel:12088448165" className="btn-primary w-full text-center flex justify-center">
                  <Phone className="w-5 h-5 mr-2" /> {businessInfo.phone}
                </a>
              </div>
              
              <div className="rounded-2xl bg-warm-50 border border-warm-100 p-6">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li><Link to="/heating-repair-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">Furnace Repair</Link></li>
                  <li><Link to="/furnace-troubleshooting-idaho-falls" className="text-navy-700 hover:text-warm-600 font-medium">Furnace Troubleshooting</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Stay Warm All Winter"
        description="Contact us today to discuss replacing your aging furnace with a modern, high-efficiency system."
      />
    </>
  );
}
