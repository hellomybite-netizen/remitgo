import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sari W.',
    loc: 'Tuen Mun, HK',
    avatar: 'SW',
    gradient: 'linear-gradient(135deg, #0057e7, #3b9eff)',
    stars: 5,
    text: '"Kirim uang ke ibu di Jawa Timur sekarang dari kamar aja bisa! Kurssnya juga lebih bagus."',
    tag: 'Transfer Rupiah',
    tagBg: '#e8f0fd',
    tagColor: '#0057e7',
    photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Dewi R.',
    loc: 'Yuen Long, HK',
    avatar: 'DR',
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    stars: 5,
    text: '"Spin wheel bonusnya seru banget! Setiap hari main dan lumayan dapat tambahan kurs."',
    tag: 'Spin Wheel',
    tagBg: '#e0f2fe',
    tagColor: '#0284c7',
    photo: 'https://images.pexels.com/photos/3808845/pexels-photo-3808845.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ningsih P.',
    loc: 'Mong Kok, HK',
    avatar: 'NP',
    gradient: 'linear-gradient(135deg, #0891b2, #67e8f9)',
    stars: 5,
    text: '"Top up lewat 7-Eleven pas banget buat yang nggak punya rekening bank HK. Praktis!"',
    tag: 'Setor Tunai',
    tagBg: '#cffafe',
    tagColor: '#0891b2',
    photo: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Fitri A.',
    loc: 'Sha Tin, HK',
    avatar: 'FA',
    gradient: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
    stars: 5,
    text: '"Ongkos kirimnya paling murah! Plus bisa top up GoPay suami. Nggak perlu aplikasi lain!"',
    tag: 'Top Up E-Wallet',
    tagBg: '#dbeafe',
    tagColor: '#1d4ed8',
    photo: 'https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
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

  return (
    <section id="testimonials" className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Cerita Pengguna
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Kata Mereka 💬
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 border border-gray-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top color bar */}
              <div className="h-1.5 w-full" style={{ background: t.gradient }} />

              <div className="p-5">
                {/* Tag */}
                <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-4"
                  style={{ background: t.tagBg, color: t.tagColor }}>
                  {t.tag}
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5 font-medium">{t.text}</p>

                {/* User */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow">
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.loc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary bar */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-6 py-5 px-8 rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '450ms' }}>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-black text-gray-900">4.9</span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="#f59e0b" className="text-amber-400" />)}
              </div>
              <p className="text-xs text-gray-400 mt-0.5">50.000+ pengguna</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-gray-200" />
          <p className="text-sm font-semibold text-gray-600">Dipercaya PMI Hong Kong sejak 2022</p>
          <div className="hidden sm:block w-px h-10 bg-gray-200" />
          <div className="flex gap-2">
            <a href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-black transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-blue-700 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
