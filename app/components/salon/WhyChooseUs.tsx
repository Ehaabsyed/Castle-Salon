'use client';
import { motion } from 'framer-motion';
import { Award, Sparkles, ShieldCheck, UserCheck, Gem, Smile } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Item { icon: LucideIcon; title: string; desc: string; }

const items: Item[] = [
  { icon: Award, title: 'Experienced Stylists', desc: 'Industry-trained professionals with years of craft mastery.' },
  { icon: Sparkles, title: 'Premium Products', desc: 'Only world-class luxury brands touch your hair & skin.' },
  { icon: ShieldCheck, title: 'Hygienic Environment', desc: 'Sanitized stations, sterilized tools, spotless interiors.' },
  { icon: UserCheck, title: 'Personalized Service', desc: 'Tailored consultations for your unique style story.' },
  { icon: Gem, title: 'Affordable Luxury', desc: 'Premium experiences at honest, transparent prices.' },
  { icon: Smile, title: 'Customer Satisfaction', desc: '4.5★ rated by 312+ delighted clients across Mangaluru.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.pexels.com/photos/4974566/pexels-photo-4974566.jpeg" alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle overline="Why Choose Us" title={<>The <span className="gold-text italic">Luxe</span> Difference</>} subtitle="Six reasons why we are Mangaluru&apos;s most loved unisex salon." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c9a96e]/15">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-all">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 flex items-center justify-center border border-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-all">
                  <it.icon className="w-6 h-6 text-[#c9a96e] group-hover:text-black" strokeWidth={1.3} />
                </div>
                <div>
                  <h3 className="font-serif-luxe text-xl mb-3">{it.title}</h3>
                  <p className="text-white/55 font-light leading-relaxed text-sm">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
