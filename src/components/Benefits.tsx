import { useEffect, useRef, useState } from 'react';

const usps = [
  {
    badge: 'USP #1',
    icon: '📈',
    title: 'Kurs Tertinggi & Ongkir Termurah se-Hong Kong!',
    desc: 'Jaminan kurs terbaik dan biaya transfer paling kompetitif. Uangmu sampai lebih banyak, bukan habis di jalan.',
    highlight: 'Hemat lebih dari kompetitor',
    bg: 'linear-gradient(135deg, #e8f0fd 0%, #dbeafe 100%)',
    accent: '#0057e7',
    iconBg: '#dbeafe',
  },
  {
    badge: 'USP #2',
    icon: '🏪',
    title: 'Mudah — Setor Lewat 7-Eleven di Seluruh HK',
    desc: 'Tidak perlu rekening bank HK. Cukup setor tunai HKD di 7-Eleven terdekat, kapan saja — 24 jam, 7 hari.',
    highlight: '1.000+ gerai 7-Eleven di HK',
    bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    accent: '#16a34a',
    iconBg: '#bbf7d0',
  },
  {
    badge: 'USP #3',
    icon: '🏦',
    title: 'Kirim ke Semua Bank & E-Wallet',
    desc: 'BRI, BCA, Mandiri, BNI — semua bisa. Plus top up GoPay, OVO, Dana langsung masuk rekening keluarga.',
    highlight: 'Semua bank & e-wallet',
    bg: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)',
    accent: '#b45309',
    iconBg: '#fde68a',
  },
];

const DownloadCTA = () => (
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <a
      href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-sm"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
      </svg>
      Download di Google Play
    </a>
    <a
      href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white font-bold px-7 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-sm"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      Download di App Store
    </a>
  </div>
);

export default function Benefits() {
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
    <section id="benefits" className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Kenapa remit.go!
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            3 Alasan PMI Hong Kong
            <br />
            <span style={{ color: '#0057e7' }}>Pilih remit.go!</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            Solusi nyata untuk masalah yang sudah terlalu lama kamu tanggung.
          </p>
        </div>

        {/* USP cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {usps.map((u, i) => (
            <div
              key={u.badge}
              className={`group relative rounded-3xl p-7 flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 border border-gray-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ background: u.bg, transitionDelay: `${i * 120}ms` }}
            >
              {/* Badge */}
              <span className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-5 self-start"
                style={{ background: 'rgba(255,255,255,0.6)', color: u.accent }}>
                {u.badge}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-3xl shadow-sm"
                style={{ background: u.iconBg }}>
                {u.icon}
              </div>

              <h3 className="text-lg font-black text-gray-900 leading-snug mb-3">{u.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{u.desc}</p>

              {/* Highlight pill */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full self-start"
                style={{ background: 'rgba(255,255,255,0.7)', color: u.accent }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: u.accent }} />
                {u.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '400ms' }}>
          <p className="text-center text-gray-400 text-sm mb-5">Sudah 50.000+ PMI membuktikannya — giliran kamu.</p>
          <DownloadCTA />
        </div>
      </div>
    </section>
  );
}
