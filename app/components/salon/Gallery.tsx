'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionTitle from './SectionTitle';
const images: string[] = [
  'https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
  'https://images.pexels.com/photos/31323301/pexels-photo-31323301.png',
  'https://images.unsplash.com/photo-1675034743339-0b0747047727',
  'https://images.pexels.com/photos/7195814/pexels-photo-7195814.jpeg',
  'https://images.unsplash.com/photo-1675034743469-4e262c2ff3ef',
  'https://images.pexels.com/photos/7195801/pexels-photo-7195801.jpeg',
  'https://images.unsplash.com/photo-1706629504952-ab5e50f5c179',
  'https://images.pexels.com/photos/4974566/pexels-photo-4974566.jpeg',
  'https://images.unsplash.com/photo-1626383137804-ff908d2753a2',
  'https://images.pexels.com/photos/7195806/pexels-photo-7195806.jpeg',
  'https://images.unsplash.com/photo-1706629506571-a6d86798916b',
];

const spans: string[] = ['row-span-2','row-span-1','row-span-1','row-span-2','row-span-1','row-span-1','row-span-1','row-span-2','row-span-1','row-span-1','row-span-2','row-span-1'];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle overline="Gallery" title={<>Moments of <span className="gold-text italic">Elegance</span></>} subtitle="Glimpses from inside The Castle — our work, our space, our craft." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              onClick={() => setActive(src)}
              className={`relative overflow-hidden cursor-pointer group ${spans[i]}`}
            >
              <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">View</span>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-[#c9a96e]/0 group-hover:ring-[#c9a96e]/60 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out">
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-[#c9a96e] hover:scale-110 transition-transform" aria-label="Close"><X className="w-8 h-8" /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={active} className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" alt="" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
