'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Crown } from 'lucide-react';

type NavLink = { name: string; href: string };

const links: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  // { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-[#c9a96e]/20 py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a href="#home" whileHover={{ scale: 1.02 }} className="flex items-center gap-2">
          <Crown className="w-7 h-7 text-[#c9a96e]" strokeWidth={1.5} />
          <div className="flex flex-col leading-none">
            <span className="font-serif-luxe text-xl md:text-2xl gold-text tracking-wider">The Luxe</span>
            <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase">Unisex Salon</span>
          </div>
        </motion.a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="relative text-sm tracking-widest uppercase text-white/80 hover:text-[#c9a96e] transition-colors group">
              {l.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#c9a96e] to-[#e6d3a3] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <motion.a
          href="#book"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#c9a96e] to-[#8a7448] text-black font-medium text-sm tracking-wider uppercase rounded-sm luxury-shadow"
        >
          <Calendar className="w-4 h-4" /> Book Now
        </motion.a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-[#c9a96e]" aria-label="Toggle menu">
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-[#c9a96e]/20 overflow-hidden">
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-[#c9a96e] uppercase tracking-widest text-sm">{l.name}</a>
              ))}
              <a href="#book" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c9a96e] to-[#8a7448] text-black font-medium tracking-wider uppercase rounded-sm">
                <Calendar className="w-4 h-4" /> Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
