'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown } from 'lucide-react';

export default function Loader() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-6">
            <motion.div animate={{ rotateY: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
              <Crown className="w-16 h-16 text-[#c9a96e]" strokeWidth={1.2} />
            </motion.div>
            <div className="text-center">
              <div className="font-serif-luxe text-3xl gold-text tracking-wider">The Castle</div>
              <div className="text-[10px] tracking-[0.5em] text-white/50 uppercase mt-1">Unisex Salon</div>
            </div>
            <div className="w-40 h-px bg-[#c9a96e]/20 overflow-hidden">
              <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
