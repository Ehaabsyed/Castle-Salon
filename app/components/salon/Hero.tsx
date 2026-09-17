'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Scissors } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://res.cloudinary.com/dxudcvfbn/image/upload/v1789653476/i1_bztavb.avif" alt="Luxury salon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#c9a96e]/10 rounded-full blur-3xl float-anim" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-[#c9a96e]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="flex items-center gap-3 mb-6">
          <div className="h-px w-14 bg-[#c9a96e]" />
          <span className="text-[#c9a96e] tracking-[0.4em] text-xs uppercase">Premium Unisex Salon</span>
          <div className="h-px w-14 bg-[#c9a96e]" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }} className="font-serif-luxe text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
          Where <span className="gold-text italic">Style</span><br />Meets <span className="gold-text italic">Perfection</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light tracking-wide">
          Premium Hair, Beauty & Grooming Services in Mangaluru.<br className="hidden md:block" /> Step into a world of timeless elegance and crafted artistry.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#book" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a96e] to-[#8a7448] text-black font-medium tracking-widest uppercase text-sm luxury-shadow hover:scale-[1.03] transition-transform">
            Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#c9a96e]/50 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black font-medium tracking-widest uppercase text-sm transition-all">
            <Scissors className="w-4 h-4" /> View Services
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className="mt-16 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />)}
          </div>
          <span className="text-white/80"><span className="text-[#c9a96e] font-semibold">4.5/5</span> · 312+ Happy Clients</span>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border border-[#c9a96e]/60 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-[#c9a96e] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
