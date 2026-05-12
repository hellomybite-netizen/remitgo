import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { label: 'Kenapa remit.go!', href: '#benefits' },
    { label: 'Cara Pakai', href: '#how-it-works' },
    { label: 'Promo', href: '#promo' },
    { label: 'Testimoni', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoIcon} alt="remit.go!" className="h-9 w-auto" />
          <span className="text-chalk font-extrabold text-lg tracking-tight hidden sm:block">remit.go!</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-chalk/60 hover:text-chalk transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/85252920848"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold bg-lemon text-ink px-5 py-2.5 rounded-full hover:brightness-110 transition-all hover:scale-105 active:scale-95"
          >
            Hubungi Kami
          </a>
        </nav>

        <button className="md:hidden p-1 text-chalk" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink border-t border-white/10 px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-chalk/70 font-semibold text-base py-1 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-bold bg-white/10 text-chalk px-4 py-3 rounded-2xl"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-bold bg-lemon text-ink px-4 py-3 rounded-2xl"
            >
              Google Play
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
