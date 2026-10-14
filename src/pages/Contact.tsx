import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { businessInfo, serviceAreas } from '@/data/site-data';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'AC Repair',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const heroImage =
    'https://images.pexels.com/photos/8885065/pexels-photo-8885065.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  const schemaData = {
    '@context': 'https://schema.org',
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
        name: 'Contact Us',
        item: `${businessInfo.domain}/contact`,
      },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact Hipwell's Heating & Cooling | Idaho Falls HVAC"
        description="Need HVAC repair in Idaho Falls? Contact Hipwell's Heating & Cooling at 208-844-8165 or visit us at 2260 Calkins Ave. Open Mon-Fri 8am-5pm."
        path="/contact"
      />
      <JsonLd data={schemaData} />

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
              {submitted ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-2">
                      Thank You, {formData.firstName || 'Neighbor'}!
                    </h2>
                    <p className="text-navy-600 text-base leading-relaxed">
                      Your service request for <strong>{formData.service}</strong> has been received. Our team will review your symptoms and call you at <strong>{formData.phone || 'your phone number'}</strong> within 1 business hour.
                    </p>
                  </div>
                  <div className="bg-navy-50 rounded-xl p-5 border border-navy-100 text-left">
                    <p className="text-xs uppercase font-bold tracking-wider text-navy-500 mb-2">Need Immediate Emergency Help?</p>
                    <a href={businessInfo.phoneLink} className="btn-primary w-full justify-center text-sm py-3">
                      <Phone className="w-4 h-4 mr-2" /> Call {businessInfo.phone} Now
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        phone: '',
                        email: '',
                        service: 'AC Repair',
                        message: '',
                      });
                    }}
                    className="text-sm font-semibold text-warm-600 hover:text-warm-700 underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-3xl text-navy-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-navy-600 mb-8">
                    Describe the issue you're experiencing with your heating or cooling system, and we will get back to you promptly.
                  </p>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-navy-900 mb-2">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500 text-sm py-2.5 px-3 border"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-navy-900 mb-2">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500 text-sm py-2.5 px-3 border"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500 text-sm py-2.5 px-3 border"
                          placeholder="(208) 844-8165"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500 text-sm py-2.5 px-3 border"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-2">Service Needed</label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500 text-sm py-2.5 px-3 border bg-white"
                      >
                        <option>AC Repair</option>
                        <option>Furnace Repair</option>
                        <option>Heat Pump Service</option>
                        <option>Seasonal Tune-Up / Maintenance</option>
                        <option>Diagnostic Evaluation</option>
                        <option>New System Replacement Estimate</option>
                        <option>Thermostat Troubleshooting</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">What symptoms is your system showing?</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border-navy-200 focus:border-warm-500 focus:ring-warm-500 text-sm py-2.5 px-3 border"
                        placeholder="e.g. AC blowing warm air, making buzzing noise, unit keeps cycling off..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center py-3.5 text-base font-semibold"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Service Request'}
                    </button>
                    <p className="text-xs text-navy-500 text-center">
                      We respect your privacy. No high-pressure sales calls or spam.
                    </p>
                  </form>
                </>
              )}
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
