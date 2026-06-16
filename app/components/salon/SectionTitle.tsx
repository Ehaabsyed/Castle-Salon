'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  overline?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ overline, title, subtitle, center = true }: SectionTitleProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className={`${center ? 'text-center' : ''} max-w-3xl ${center ? 'mx-auto' : ''} mb-16`}>
      {overline && (
        <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
          <div className="h-px w-10 bg-[#c9a96e]" />
          <span className="text-[#c9a96e] tracking-[0.4em] text-xs uppercase">{overline}</span>
          <div className="h-px w-10 bg-[#c9a96e]" />
        </div>
      )}
      <h2 className="font-serif-luxe text-4xl md:text-5xl lg:text-6xl leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-white/60 text-base md:text-lg font-light leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
