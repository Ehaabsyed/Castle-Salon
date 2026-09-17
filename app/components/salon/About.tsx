'use client';
import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat { icon: LucideIcon; value: string; label: string; }

const stats: Stat[] = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '5K+', label: 'Happy Clients' },
  { icon: Heart, value: '312+', label: '5-Star Reviews' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-[#c9a96e]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="https://res.cloudinary.com/dxudcvfbn/image/upload/v1789653546/i2_adrt5d.avif" alt="Salon experience" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square overflow-hidden border-4 border-black hidden md:block">
              <img src="https://res.cloudinary.com/dxudcvfbn/image/upload/v1789653598/i3_pmtpsk.jpg" alt="Hair styling" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#c9a96e]/40 -z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] tracking-[0.4em] text-xs uppercase">Our Story</span>
            </div>
            <h2 className="font-serif-luxe text-4xl md:text-5xl leading-tight mb-6">A Sanctuary of <span className="gold-text italic">Beauty</span> &amp; <span className="gold-text italic">Craft</span></h2>
            <p className="text-white/70 leading-relaxed mb-5 font-light">
              The Castle Unisex Salon is Mangaluru&apos;s premier destination where artistry meets indulgence. Established with a vision to redefine beauty experiences, our salon blends timeless elegance with contemporary techniques.
            </p>
            <p className="text-white/70 leading-relaxed mb-8 font-light">
              From the moment you step through our doors, you&apos;re embraced by an atmosphere of refined luxury — every detail crafted to elevate your experience and reveal your most stunning self.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#c9a96e]/20">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="text-center">
                  <s.icon className="w-7 h-7 text-[#c9a96e] mx-auto mb-3" strokeWidth={1.3} />
                  <div className="font-serif-luxe text-3xl gold-text">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
