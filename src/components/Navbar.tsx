import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoText from '../assets/logo_remitgo-NEW_cropped.png';
import logoIcon from '../assets/logo_baru_remitgo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Fitur', href: '#benefits' },
    { label: 'Cara Pakai', href: '#how-it-works' },
    { label: 'Promo', href: '#promo' },
    { label: 'Testimoni', href: '#testimonials' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#" className="flex items-center h-10">
          <img src={logoText} alt="remit.go!" className={`h-8 w-auto transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'}`} />
          <img src={logoIcon} alt="remit.go!" className={`h-10 w-auto transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`} />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/80 hover:text-white'}`}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/85252920848" target="_blank" rel="noopener noreferrer"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-700'}`}>
            Hubungi Kami
          </a>
        </nav>

        <button className={`md:hidden p-1 ${scrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-5 flex flex-col gap-4 shadow-xl">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-700 font-medium text-sm py-1" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold bg-gray-900 text-white px-4 py-3 rounded-xl">App Store</a>
            <a href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold bg-blue-600 text-white px-4 py-3 rounded-xl">Google Play</a>
          </div>
        </div>
      )}
    </header>
  );
}
