'use client';
import { Crown, Phone, MapPin, Mail } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#c9a96e]/20 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#c9a96e]/15">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Crown className="w-7 h-7 text-[#c9a96e]" strokeWidth={1.5} />
              <div className="flex flex-col leading-none">
                <span className="font-serif-luxe text-2xl gold-text">The Castle</span>
                <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase">Unisex Salon</span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed font-light">Where Style Meets Perfection. Mangaluru&apos;s premier destination for premium hair, beauty &amp; grooming experiences.</p>
            {/* <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/the.castle_unisexsalon" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all"><Twitter className="w-4 h-4" /></a>
            </div> */}
            <div className="flex gap-3 mt-6">
  <a
    href="https://www.instagram.com/the.castle_unisexsalon"
    target="_blank"
    rel="noreferrer"
    className="w-9 h-9 flex items-center justify-center border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all"
  >
    <FaInstagram className="w-4 h-4" />
  </a>

  <a
    href="#"
    className="w-9 h-9 flex items-center justify-center border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all"
  >
    <FaFacebookF className="w-4 h-4" />
  </a>

  <a
    href="#"
    className="w-9 h-9 flex items-center justify-center border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all"
  >
    <FaXTwitter className="w-4 h-4" />
  </a>
</div>  
          </div>

          <div>
            <h4 className="font-serif-luxe text-lg mb-5 gold-text">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home','About','Services','Gallery','Reviews','Contact'].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-white/55 hover:text-[#c9a96e] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif-luxe text-lg mb-5 gold-text">Services</h4>
            <ul className="space-y-3 text-sm">
              {['Hair Cuts & Styling','Hair Coloring','Hair Spa','Facials & Skin Care','Bridal Makeup',"Men's Grooming"].map((l) => (
                <li key={l}><span className="text-white/55 hover:text-[#c9a96e] transition-colors cursor-pointer">{l}</span></li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h4 className="font-serif-luxe text-lg mb-5 gold-text">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/55"><Phone className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" /><a href="tel:+918660375643" className="hover:text-[#c9a96e]">+91 86603 75643</a></li>
              <li className="flex items-start gap-3 text-white/55"><MapPin className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" /><span>2nd Floor, Pushpa Building, Bejai-Kapikad Road, Kapikad, Mangaluru 575004</span></li>
              <li className="flex items-start gap-3 text-white/55"><Mail className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" /><a href="mailto:hello@thecastlesalon.com" className="hover:text-[#c9a96e]">hello@thecastlesalon.com</a></li>
            </ul>
          </div> */}
          <div>
  <h4 className="font-serif-luxe text-lg mb-5 gold-text">Contact</h4>

  <ul className="space-y-4 text-sm">
    <li className="flex items-start gap-3 text-white/55">
      <Phone className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" />
      <a href="tel:+919900375643" className="hover:text-[#c9a96e]">
        +91 99003 75643
      </a>
    </li>

    <li className="flex items-start gap-3 text-white/55">
      <MapPin className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" />
      <span>
        2nd Floor, Sunshine Building, Main Road, Opp. City Mall, Yelahanka, Bengaluru, Karnataka 560064
      </span>
    </li>

    <li className="flex items-start gap-3 text-white/55">
      <FaInstagram className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" />
      <a
        href="https://www.instagram.com/the.castle_unisexsalon"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#c9a96e]"
      >
        @the.luxe_unisexsalon
      </a>
    </li>
  </ul>
</div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} The Castle Unisex Salon. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c9a96e] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c9a96e] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
