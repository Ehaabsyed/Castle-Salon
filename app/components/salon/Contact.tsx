"use client";
import { motion } from 'framer-motion';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { Phone, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

import SectionTitle from './SectionTitle';

type ContactIcon = LucideIcon | IconType;

interface ContactItem {
  icon: ContactIcon;
  label: string;
  value: string;
  href?: string;
}


const contactItems: ContactItem[] = [
  { icon: Phone, label: 'Call Us', value: '+91 99003 75643', href: 'tel:+918660375643' },
  { icon: MapPin, label: 'Visit', value: '2nd Floor, Sunshine Building, Main Road, Opp. City Mall, Yelahanka, Bengaluru, Karnataka 560064', href: 'https://maps.app.goo.gl/XLk5YrbWvpWGppMQA' },
  { icon: Clock, label: 'Open Hours', value: 'Mon - Sun · 9:30 AM – 9:00 PM' },
  { icon: Instagram, label: 'Instagram', value: '@the.luxe_unisexsalon', href: 'https://www.instagram.com/the.luxe_unisexsalon' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle overline="Visit Us" title={<>Step Inside The <span className="gold-text italic">Luxe</span></>} subtitle="We&apos;d love to welcome you. Reach out, drop by, or book online." />

        <div id="book" className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-5">
            {contactItems.map((c, i) => (
              <motion.a key={i} href={c.href} target={c.href?.startsWith('http') ? '_blank' : undefined} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-5 p-6 bg-black border border-[#c9a96e]/15 hover:border-[#c9a96e]/60 transition-all group cursor-pointer">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-colors">
                  <c.icon className="w-5 h-5 text-[#c9a96e] group-hover:text-black" strokeWidth={1.4} />
                </div>
                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]/70 mb-1">{c.label}</div>
                  <div className="text-white/85 leading-relaxed">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="flex gap-3 pt-4">
              <a href="tel:+919900375643" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#c9a96e] to-[#8a7448] text-black font-medium tracking-widest uppercase text-sm hover:scale-[1.02] transition-transform">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="https://wa.me/919900375643" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#c9a96e]/50 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black font-medium tracking-widest uppercase text-sm transition-all">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative min-h-[500px] border border-[#c9a96e]/20 overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Kapikad,+Mangaluru,+Karnataka+575004&output=embed"
              className="w-full h-full grayscale contrast-125 brightness-75"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Castle Unisex Salon location"
            />
            <a href="https://maps.app.goo.gl/pa1xDmS3DAdKq82AA" target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-5 py-3 bg-black border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black text-xs uppercase tracking-widest transition-all">
              <Navigation className="w-3.5 h-3.5" /> Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
