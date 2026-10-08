import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { businessInfo, serviceAreas } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function Contact() {
  const heroImage =
    'https://images.pexels.com/photos/8885065/pexels-photo-8885065.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  return (
    <>
      <SEO
        title="Contact Hipwell's Heating & Cooling | Idaho Falls HVAC"
        description="Need HVAC repair in Idaho Falls? Contact Hipwell's Heating & Cooling at 208-844-8165 or visit us at 2260 Calkins Ave. Open Mon-Fri 8am-5pm."
        path="/contact"
      />

      <PageHero
        title="Contact Us"
        subtitle="We're ready to help you restore your home's comfort. Call us directly or fill out the form below."
        image={heroImage}
        breadcrumb={{ label: 'Contact' }}
      />

      <section className="section-padding bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-50" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-navy-100 p-8 lg:p-12">
              <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-navy-600 mb-8">
                Please describe the issue you are experiencing with your heating or cooling system, and we will get back to you as soon as possible.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-navy-900 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-navy-900 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500" placeholder="(208) 555-0123" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-2">Service Needed</label>
                  <select id="service" className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500">
                    <option>AC Repair</option>
                    <option>Furnace Repair</option>
                    <option>Heat Pump Service</option>
                    <option>Maintenance / Tune-Up</option>
                    <option>New Installation Estimate</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500" placeholder="Describe the problem..."></textarea>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-10 lg:pt-12">
              <div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <a href={businessInfo.phoneLink} className="flex items-start gap-4 p-4 rounded-xl hover:bg-navy-50 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-warm-50 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-warm-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-xl font-bold text-navy-900 group-hover:text-warm-600 transition-colors">{businessInfo.phone}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-navy-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-lg font-bold text-navy-900">{businessInfo.name}</p>
                      <p className="text-navy-600 mt-1">{businessInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-ice-50 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-ice-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-1">Business Hours</p>
                      <p className="text-lg font-bold text-navy-900">{businessInfo.hours}</p>
                      <p className="text-navy-600 mt-1">Emergency service available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map(area => (
                    <Link key={area.name} to={`/${area.slug}`} className="px-4 py-2 bg-navy-50 text-navy-700 rounded-full text-sm hover:bg-warm-50 hover:text-warm-700 transition-colors">
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-navy-100 h-64 relative">
                <iframe
                  src={businessInfo.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hipwell's Heating & Cooling Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
