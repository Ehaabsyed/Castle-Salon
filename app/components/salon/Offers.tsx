'use client';
import { motion } from 'framer-motion';
import { Gift, Crown, Heart, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Offer { icon: LucideIcon; badge: string; title: string; desc: string; tag: string; cta: string; }

const offers: Offer[] = [
  { icon: Gift, badge: 'Limited', title: 'First Visit Special', desc: 'Enjoy 20% off on your first salon experience with us.', tag: '20% OFF', cta: 'Claim Now' },
  { icon: Crown, badge: 'Premium', title: 'Luxe Membership', desc: 'Annual luxury membership with priority bookings & exclusive perks.', tag: 'VIP', cta: 'Join Now' },
  { icon: Heart, badge: 'Bridal', title: 'Bridal Package', desc: 'Complete pre-wedding luxury package with trials included.', tag: 'Save 25%', cta: 'Book Today' },
];

export default function Offers() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle overline="Special Offers" title={<>Exclusive <span className="gold-text italic">Indulgences</span></>} subtitle="Curated luxury packages and seasonal offers designed just for you." />
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} whileHover={{ y: -8 }} className="group relative p-10 bg-gradient-to-br from-black to-[#0f0f0f] border border-[#c9a96e]/20 hover:border-[#c9a96e]/70 overflow-hidden transition-all">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#c9a96e]/8 rounded-full blur-3xl group-hover:bg-[#c9a96e]/15 transition-all" />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 flex items-center justify-center border border-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-colors">
                    <o.icon className="w-6 h-6 text-[#c9a96e] group-hover:text-black" strokeWidth={1.3} />
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] border border-[#c9a96e]/40 px-3 py-1">{o.badge}</span>
                </div>
                <div className="font-serif-luxe text-5xl gold-text mb-3">{o.tag}</div>
                <h3 className="font-serif-luxe text-2xl mb-3">{o.title}</h3>
                <p className="text-white/55 font-light text-sm leading-relaxed mb-8">{o.desc}</p>
                <a href="#book" className="inline-flex items-center gap-2 text-[#c9a96e] text-xs tracking-[0.3em] uppercase border-b border-[#c9a96e]/50 pb-1 hover:border-[#c9a96e] transition-all">
                  {o.cta} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
