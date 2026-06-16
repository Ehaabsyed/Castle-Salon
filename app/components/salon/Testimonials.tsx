'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Review { name: string; role: string; text: string; rating: number; initial: string; }

const reviews: Review[] = [
  { name: 'Priya Shenoy', role: 'Bride', text: 'Absolutely stunning bridal makeup! The team was patient, skilled and made me feel like royalty on my big day. Highly recommend!', rating: 5, initial: 'P' },
  { name: 'Rohan Kamath', role: 'Regular Client', text: 'Best beard styling in Mangaluru. The ambience, attention to detail, and luxury feel make every visit special.', rating: 5, initial: 'R' },
  { name: 'Anjali Rao', role: 'Client', text: 'I came in for a hair color and left feeling transformed. Premium products, gentle hands, and gorgeous results.', rating: 5, initial: 'A' },
  { name: 'Suhas Pai', role: 'Client', text: 'Top-tier grooming experience. Clean, hygienic, and the stylists genuinely care about what suits you best.', rating: 4, initial: 'S' },
  { name: 'Meghana Bhat', role: 'Client', text: 'Hair spa here is pure indulgence. My hair has never felt softer. The Castle is my forever salon now.', rating: 5, initial: 'M' },
  { name: 'Karthik Naik', role: 'Client', text: 'Classy interiors, world-class service. Worth every rupee. Booked my next appointment before I even left!', rating: 5, initial: 'K' },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle overline="Customer Reviews" title={<>Loved by <span className="gold-text italic">312+</span> Clients</>} subtitle="Real stories from real clients — every review reflects our commitment to excellence." />

        <div className="flex justify-center items-center gap-6 mb-14">
          <div className="text-center">
            <div className="font-serif-luxe text-6xl gold-text">4.5</div>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-[#c9a96e] text-[#c9a96e]' : 'fill-[#c9a96e]/40 text-[#c9a96e]'}`} />)}
            </div>
            <div className="text-xs tracking-widest uppercase text-white/50 mt-2">312+ Reviews</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative p-8 bg-black border border-[#c9a96e]/15 hover:border-[#c9a96e]/50 transition-all group">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#c9a96e]/15 group-hover:text-[#c9a96e]/30 transition-colors" />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => <Star key={j} className={`w-4 h-4 ${j < r.rating ? 'fill-[#c9a96e] text-[#c9a96e]' : 'text-[#c9a96e]/30'}`} />)}
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6 text-sm">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-4 pt-5 border-t border-[#c9a96e]/15">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#8a7448] flex items-center justify-center font-serif-luxe text-black text-lg">{r.initial}</div>
                <div>
                  <div className="font-serif-luxe text-base">{r.name}</div>
                  <div className="text-xs uppercase tracking-widest text-[#c9a96e]/70">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
