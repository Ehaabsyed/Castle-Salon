'use client';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF } from 'react-icons/fa6';
import SectionTitle from './SectionTitle';

interface Member { name: string; role: string; image: string; tags: string[]; }

const team: Member[] = [
    { name: 'Arjun Shetty', role: 'Master Stylist', image: 'https://images.unsplash.com/photo-1675034743339-0b0747047727', tags: ['Hair Color', 'Cuts'] },
    { name: 'Neha Pinto', role: 'Beauty Expert', image: 'https://images.unsplash.com/photo-1626383137804-ff908d2753a2', tags: ['Facials', 'Makeup'] },
    { name: 'Vikram Bhat', role: 'Grooming Specialist', image: 'https://images.unsplash.com/photo-1675034743469-4e262c2ff3ef', tags: ['Beard', 'Mens Cuts'] },
    { name: "Riya D'Souza", role: 'Bridal Artist', image: 'https://images.unsplash.com/photo-1706629504952-ab5e50f5c179', tags: ['Bridal', 'HD Makeup'] },
];


export default function Team() {
    return (
        <section className="py-28 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle overline="Meet The Artists" title={<>The <span className="gold-text italic">Castle</span> Team</>} subtitle="A handpicked team of award-winning stylists, beauty experts and grooming specialists." />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((m, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="group relative overflow-hidden">
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                                {/* <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <a href="#" className="w-9 h-9 flex items-center justify-center bg-[#c9a96e] text-black hover:bg-white transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center bg-[#c9a96e] text-black hover:bg-white transition-colors"><Facebook className="w-4 h-4" /></a>
                </div> */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <a
                                        href="#"
                                        className="w-9 h-9 flex items-center justify-center bg-[#c9a96e] text-black hover:bg-white transition-colors"
                                    >
                                        <FaInstagram className="w-4 h-4" />
                                    </a>

                                    <a
                                        href="#"
                                        className="w-9 h-9 flex items-center justify-center bg-[#c9a96e] text-black hover:bg-white transition-colors"
                                    >
                                        <FaFacebookF className="w-4 h-4" />
                                    </a>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-2">{m.role}</div>
                                    <h3 className="font-serif-luxe text-2xl mb-3">{m.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {m.tags.map((t, ti) => <span key={ti} className="text-[10px] uppercase tracking-wider px-2.5 py-1 border border-[#c9a96e]/40 text-[#c9a96e]">{t}</span>)}
                                    </div>
                                </div>
                                <div className="absolute inset-0 ring-1 ring-inset ring-[#c9a96e]/0 group-hover:ring-[#c9a96e]/60 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
