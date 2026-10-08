import { Link } from 'react-router-dom';
import { Phone, Wrench, Search, MessageSquare, Award, Building2, Heart, ChevronRight, MapPin, Clock, Check, ShieldCheck, Tv } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { businessInfo, serviceAreas } from '@/data/site-data';

export default function About() {
  const heroImage =
    'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop';

  const values = [
    {
      icon: Search,
      title: 'Root-Cause Diagnostics',
      description:
        'We test systematically to find the actual cause of your HVAC problem — not just the symptom. When we make a repair, it addresses the real issue.',
    },
    {
      icon: ShieldCheck,
      title: 'Licensed & Certified',
      description:
        'Fully licensed, bonded, and insured in the State of Idaho to perform high-voltage electrical, gas line, and refrigeration work safely.',
    },
    {
      icon: Wrench,
      title: 'Practical Repairs',
      description:
        'We’re a repair-focused company. We don’t push replacement when a repair will do the job. We give you honest information so you can decide.',
    },
    {
      icon: Heart,
      title: 'Honest Assessments',
      description:
        'If a repair makes sense, we tell you. If replacement is the better investment, we tell you that too. No pressure, no upselling.',
    },
  ];

  return (
    <>
      <SEO
        title="About Hipwell's Heating & Cooling LLC | Idaho Falls HVAC Repair"
        description="Learn about Hipwell's Heating & Cooling LLC — a repair-focused HVAC company in Idaho Falls, Idaho with over 28 years of experience diagnosing and fixing heating and cooling problems."
        path="/about"
      />

      <PageHero
        title="About Hipwell's Heating & Cooling"
        subtitle="A local, repair-focused HVAC company based in Idaho Falls, Idaho — dedicated to finding the root cause of your heating and cooling problems and fixing them right."
        image={heroImage}
        breadcrumb={{ label: 'About Us' }}
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ice-50 px-4 py-1.5 mb-4">
                <span className="text-sm font-semibold text-ice-700">Our Story</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                "I Can Fix What the Other Companies Can't"
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Hipwell's Heating & Cooling LLC is an independent, locally owned and operated HVAC contractor based in Idaho Falls, Idaho. Since our founding, we have been dedicated to providing homeowners and commercial businesses throughout the eastern Idaho community with honest, transparent, and highly technical repair services.
                </p>
                <p>
                  Our ownership brings over <strong>28 years of hands-on HVAC experience</strong> to every job. We are fully licensed, bonded, and insured to perform residential and light commercial heating, cooling, and ventilation services.
                </p>
                <p>
                  We specialize in the repairs other companies can't or won't do. Rooms that never heat or cool right, systems that have been serviced repeatedly without improvement, and complex electrical faults — these are the challenges we take on.
                </p>
                <p>
                  We are a <strong>repair-first company</strong>. When a repair is the right call, we make it. When replacement makes sense, we tell you honestly and help you make an informed decision without high-pressure sales tactics.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <img
                  src="https://images.pexels.com/photos/6471914/pexels-photo-6471914.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                  alt="HVAC technician performing maintenance on an outdoor unit"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-warm-500 rounded-xl p-6 shadow-xl hidden md:block">
                <p className="text-4xl font-display font-bold text-white">28+</p>
                <p className="text-sm text-warm-100 font-medium mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 text-balance">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              The principles that guide every service call we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 p-8 rounded-2xl bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-warm-500">
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Work On */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                What We Work On
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                We work on most residential and light commercial HVAC systems, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Central air conditioners',
                  'Gas and electric furnaces',
                  'Heat pumps (heating and cooling)',
                  'Thermostats and smart controls',
                  'Ductwork and airflow issues',
                  'Indoor air quality components',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-navy-50">
                    <Check className="w-5 h-5 text-warm-500 flex-shrink-0" />
                    <span className="text-sm text-navy-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-6 text-balance">
                Our Service Area
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Based in Idaho Falls, we serve homeowners throughout the eastern Idaho community:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/${area.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-navy-50 hover:bg-warm-50 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-warm-500" />
                    <span className="text-sm text-navy-700 font-medium">{area.name}</span>
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600 mb-2">
                <MapPin className="w-4 h-4 text-warm-500" />
                {businessInfo.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <Clock className="w-4 h-4 text-warm-500" />
                {businessInfo.hours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '28+', label: 'Years of Experience', icon: Award },
              { value: '7', label: 'Areas Served', icon: MapPin },
              { value: '10', label: 'Service Categories', icon: Wrench },
              { value: '100%', label: 'Repair-Focused', icon: Heart },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-warm-500/20 mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-warm-400" />
                </div>
                <p className="font-display font-bold text-3xl md:text-4xl text-white">{stat.value}</p>
                <p className="text-sm text-navy-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="section-padding bg-ice-50">
        <div className="container-wide">
          <div className="bg-white rounded-2xl border border-ice-100 shadow-sm p-8 lg:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-ice-100 rounded-full flex items-center justify-center">
                  <Tv className="w-10 h-10 text-ice-600" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-ice-50 px-4 py-1.5 mb-3 border border-ice-100">
                  <span className="text-xs font-bold tracking-wider text-ice-700 uppercase">Local Trust & Authority</span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-4">
                  As Featured on Local News 8 (KIFI)
                </h2>
                <p className="text-navy-700 leading-relaxed max-w-3xl mb-6">
                  Hipwell's Heating & Cooling is recognized across eastern Idaho as a trusted authority on HVAC safety and consumer protection. Owner Brent Hipwell was recently featured on Local News 8 discussing how homeowners can spot fake HVAC inspections and avoid repair scams.
                </p>
                <a 
                  href="https://localnews8.com/news/scam-alerts/2024/10/15/how-to-avoid-getting-scammed-on-hvac-inspections/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-warm-600 font-bold hover:text-warm-700 group"
                >
                  Read the Full Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Talk About Your HVAC Problem?"
        description="Call Hipwell's Heating & Cooling today. We'll listen, ask the right questions, and help you get your system running the way it should."
      />
    </>
  );
}
