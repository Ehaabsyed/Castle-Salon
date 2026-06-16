'use client';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Brush, Palette, Heart, User, Crown, Wind, Flower2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';


interface Service { icon: LucideIcon; name: string; desc: string; }
interface Category { title: string; services: Service[]; }

const categories: Category[] = [
  {
    title: 'Hair Services',
    services: [
      { icon: Scissors, name: 'Hair Cut', desc: 'Precision cuts tailored to your style' },
      { icon: Wind, name: 'Hair Styling', desc: 'Elegant styling for every occasion' },
      { icon: Palette, name: 'Hair Coloring', desc: 'Premium global & highlight color' },
      { icon: Sparkles, name: 'Hair Spa', desc: 'Deep nourishment & shine treatments' },
    ],
  },
  {
    title: 'Beauty Services',
    services: [
      { icon: Flower2, name: 'Facial Treatments', desc: 'Luxury facials for radiant skin' },
      { icon: Heart, name: 'Skin Care', desc: 'Customized skincare routines' },
      { icon: Brush, name: 'Makeup Services', desc: 'Bridal, party & HD makeup' },
    ],
  },
  {
    title: 'Grooming Services',
    services: [
      { icon: User, name: 'Beard Styling', desc: 'Sharp, sculpted beard artistry' },
      { icon: Crown, name: "Men's Grooming", desc: 'Complete grooming packages' },
      { icon: Sparkles, name: 'Bridal Grooming', desc: 'Pre-wedding luxury packages' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle overline="Our Services" title={<>Crafted <span className="gold-text italic">Experiences</span></>} subtitle="From precision haircuts to luxurious facial treatments — every service is a curated journey into elegance." />

        <div className="space-y-20">
          {categories.map((cat, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="font-serif-luxe text-2xl md:text-3xl gold-text">{cat.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#c9a96e]/50 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.services.map((s, si) => (
                  <motion.div key={si} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: si * 0.1 }} whileHover={{ y: -8 }} className="group relative p-8 bg-black border border-[#c9a96e]/15 hover:border-[#c9a96e]/60 transition-all cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/0 to-[#c9a96e]/0 group-hover:from-[#c9a96e]/5 group-hover:to-transparent transition-all duration-500" />
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c9a96e]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 flex items-center justify-center border border-[#c9a96e]/40 mb-6 group-hover:bg-[#c9a96e] transition-colors">
                        <s.icon className="w-6 h-6 text-[#c9a96e] group-hover:text-black transition-colors" strokeWidth={1.4} />
                      </div>
                      <h4 className="font-serif-luxe text-xl mb-2 group-hover:text-[#c9a96e] transition-colors">{s.name}</h4>
                      <p className="text-sm text-white/55 font-light leading-relaxed">{s.desc}</p>
                      <div className="mt-5 text-xs tracking-[0.3em] uppercase text-[#c9a96e]/0 group-hover:text-[#c9a96e] transition-colors">Book →</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
