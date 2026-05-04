import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const promos = [
  {
    badge: 'Promo Mei 2026',
    title: 'Gratis Biaya Transfer\n3 Pengiriman Pertama!',
    subtitle: 'Daftar sekarang & nikmati 0% biaya transfer untuk 3 transaksi pertamamu.',
    cta: 'Klaim Promo',
    image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
    stat1: '0%', stat1Label: 'Biaya Transfer',
    stat2: '3x', stat2Label: 'Transaksi Gratis',
    stat3: '31 Mei', stat3Label: 'Berlaku s/d',
  },
  {
    badge: 'Promo Spin Wheel',
    title: 'Putar Spin Wheel\nDapat Bonus Kurs!',
    subtitle: 'Setiap hari ada kesempatan dapat kurs lebih tinggi hanya dengan satu putaran.',
    cta: 'Coba Sekarang',
    image: 'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
    stat1: 'Setiap', stat1Label: 'Hari Ada',
    stat2: '+5%', stat2Label: 'Bonus Kurs',
    stat3: 'Gratis', stat3Label: 'Untuk Semua',
  },
  {
    badge: 'Promo Referral',
    title: 'Ajak Teman\nDapat Hadiah!',
    subtitle: 'Kamu dan temanmu sama-sama dapat bonus kurs spesial setiap referral berhasil.',
    cta: 'Ajak Sekarang',
    image: 'https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
    stat1: '2x', stat1Label: 'Bonus Referral',
    stat2: 'Tanpa', stat2Label: 'Batas Referral',
    stat3: 'Terus', stat3Label: 'Berlaku',
  },
];

export default function Trust() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<'left' | 'right'>('right');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const go = useCallback((next: number, direction: 'left' | 'right') => {
    if (animating) return;
    setAnimating(true);
    setDir(direction);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const prev = () => go((current - 1 + promos.length) % promos.length, 'left');
  const next = useCallback(() => go((current + 1) % promos.length, 'right'), [current, go]);

  useEffect(() => {
    timerRef.current = setTimeout(next, 4500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  const promo = promos[current];

  return (
    <section id="promo" className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-5">
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Promo Bulan Ini
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Penawaran Spesial Untuk Kamu
          </h2>
        </div>

        {/* Card — image left, text right */}
        <div
          className={`relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div
            className="flex flex-col sm:flex-row"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? `translateX(${dir === 'right' ? '-20px' : '20px'})` : 'translateX(0)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            {/* Image — 4:5 ratio */}
            <div className="flex-shrink-0 w-full sm:w-[260px] md:w-[300px]">
              <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                <img
                  src={promo.image}
                  alt={promo.badge}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Badge pill over image */}
                <span className="absolute top-4 left-4 inline-block bg-blue-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow">
                  {promo.badge}
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 p-7 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-3 whitespace-pre-line">{promo.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-7">{promo.subtitle}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    [promo.stat1, promo.stat1Label],
                    [promo.stat2, promo.stat2Label],
                    [promo.stat3, promo.stat3Label],
                  ].map(([val, label]) => (
                    <div key={label} className="bg-blue-50 rounded-2xl px-3 py-3 text-center">
                      <p className="text-xl font-black text-blue-700">{val}</p>
                      <p className="text-[11px] text-blue-400 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a href="https://wa.me/85252920848" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl text-sm shadow-md hover:-translate-y-0.5 transition-all w-fit">
                {promo.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Arrow controls */}
          <button onClick={prev}
            className="absolute left-3 bottom-4 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-700 transition-all">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next}
            className="absolute right-3 bottom-4 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-700 transition-all">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 justify-center mt-5">
          {promos.map((_, i) => (
            <button key={i} onClick={() => go(i, i > current ? 'right' : 'left')}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? '#0057e7' : '#cbd5e1',
              }} />
          ))}
        </div>
      </div>
    </section>
  );
}
