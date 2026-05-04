import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    emoji: '🏦',
    title: 'Bisa kirim ke semua bank di Indonesia',
    desc: 'BRI, BCA, Mandiri, BNI, dan lainnya',
    color: '#0057e7',
    bg: 'linear-gradient(135deg, #e8f0fd 0%, #dbeafe 100%)',
  },
  {
    emoji: '👜',
    title: 'Top Up E-Wallet',
    desc: 'GoPay, OVO, Dana & lebih banyak lagi',
    color: '#0057e7',
    bg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
  },
  {
    emoji: '🎰',
    title: 'Spin Wheel Bonus',
    desc: 'Dapat bonus kurs ekstra setiap hari!',
    color: '#0057e7',
    bg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
  },
  {
    emoji: '🏪',
    title: 'Setor di 7-Eleven',
    desc: 'Setor tunai HKD di gerai terdekat',
    color: '#0057e7',
    bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
  },
  {
    emoji: '💸',
    title: 'Ongkos Termurah',
    desc: 'Biaya transfer paling kompetitif',
    color: '#0057e7',
    bg: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)',
  },
  {
    emoji: '📈',
    title: 'Kurs Tertinggi',
    desc: 'Jaminan kurs terbaik untuk kamu',
    color: '#0057e7',
    bg: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)',
  },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-16 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Fitur Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Satu Aplikasi, Semua Beres
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group cursor-default rounded-3xl p-5 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ background: b.bg, transitionDelay: `${i * 70}ms` }}
            >
              <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">{b.emoji}</span>
              <p className="font-black text-sm text-gray-800 leading-tight mb-1">{b.title}</p>
              <p className="text-[11px] text-gray-500 leading-tight">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-3 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 snap-x snap-mandatory"
        >
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`flex-shrink-0 snap-center rounded-3xl p-5 flex flex-col items-center text-center w-36 transition-all duration-500 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ background: b.bg, transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-4xl mb-3 inline-block">{b.emoji}</span>
              <p className="font-black text-sm text-gray-800 leading-tight mb-1">{b.title}</p>
              <p className="text-[11px] text-gray-500 leading-tight">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll hint mobile */}
        <p className="md:hidden text-center text-xs text-gray-400 mt-2">← Geser untuk lihat semua →</p>
      </div>
    </section>
  );
}
