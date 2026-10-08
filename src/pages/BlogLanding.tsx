import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';

export default function BlogLanding() {
  const heroImage = 'https://images.pexels.com/photos/8885065/pexels-photo-8885065.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

  const posts = [
    {
      slug: 'ac-blowing-warm-air-idaho-falls',
      title: 'Why Is My AC Blowing Warm Air in Idaho Falls?',
      excerpt: 'Discover the most common reasons your air conditioner is running but failing to cool your home, from dirty filters to refrigerant leaks.',
      date: 'May 12, 2026',
      category: 'AC Repair'
    },
    {
      slug: 'furnace-short-cycling',
      title: 'Why Is My Furnace Short Cycling?',
      excerpt: 'If your furnace turns on for two minutes and shuts off, you have a short-cycling problem. Learn what causes it and how to fix it.',
      date: 'October 15, 2025',
      category: 'Furnace Repair'
    },
    {
      slug: 'ac-repair-vs-replacement',
      title: 'AC Repair vs AC Replacement: Which Is Better?',
      excerpt: 'Use the 5,000 rule and other professional metrics to decide whether it makes financial sense to repair your old AC or install a new one.',
      date: 'April 02, 2026',
      category: 'HVAC Advice'
    }
  ];

  return (
    <>
      <SEO
        title="HVAC Blog & Resources | Hipwell's Heating & Cooling"
        description="Read our latest HVAC advice, troubleshooting guides, and tips for keeping your eastern Idaho home comfortable year-round."
        path="/blog"
      />

      <PageHero
        title="HVAC Resources & Blog"
        subtitle="Expert tips, troubleshooting guides, and answers to your biggest heating and cooling questions."
        image={heroImage}
        breadcrumb={{ label: 'Blog' }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-warm-500 mx-auto mb-4" />
            <h2 className="font-display font-bold text-3xl text-navy-900">
              Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white border border-navy-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="bg-ice-50 text-ice-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="text-navy-500 flex items-center gap-1"><Calendar className="w-4 h-4"/> {post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-3 group-hover:text-warm-600 transition-colors">
                    <Link to={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-warm-600 font-bold group-hover:text-warm-700">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Professional Help?"
        description="If our troubleshooting guides didn't solve your problem, our technicians are standing by."
      />
    </>
  );
}
