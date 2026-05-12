import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Download Aplikasi',
    desc: 'Gratis di App Store & Google Play. Install dalam hitungan detik.',
    bg: '#ffe234',
    fg: '#0a0a0a',
    border: false,
  },
  {
    num: '02',
    title: 'Daftar & Verifikasi',
    desc: 'Isi data diri, verifikasi nomor HP — selesai dalam hitungan menit.',
    bg: '#0a0a0a',
    fg: '#f5f0e8',
    border: true,
  },
  {
    num: '03',
    title: 'Setor & Kirim!',
    desc: 'Top up di 7-Eleven terdekat, lalu transfer ke Indonesia. Beres.',
    bg: '#ffe234',
    fg: '#0a0a0a',
    border: false,
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-chalk py-20 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">

        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block border border-ink/20 text-ink/50 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Cara Pakai
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight">
            3 Langkah.<br />
            <span className="italic">Langsung Jalan.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`rounded-3xl p-8 flex flex-col justify-between min-h-[280px] transition-all duration-700 hover:-translate-y-2 ${
                s.border ? 'border border-white/10' : ''
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ background: s.bg, transitionDelay: `${i * 120}ms` }}
            >
              <div>
                <span
                  className="text-6xl font-extrabold leading-none block mb-6 opacity-20"
                  style={{ color: s.fg }}
                >
                  {s.num}
                </span>
                <h3 className="text-2xl font-extrabold leading-snug mb-3" style={{ color: s.fg }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: s.fg, opacity: 0.6 }}>
                  {s.desc}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: s.fg + '15' }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={s.fg} strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '450ms' }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-ink text-chalk font-bold px-8 py-4 rounded-full text-sm hover:bg-ink-light hover:scale-105 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
            </svg>
            Download di Google Play
          </a>
          <a
            href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white border-2 border-ink text-ink font-bold px-8 py-4 rounded-full text-sm hover:bg-chalk-dark transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download di App Store
          </a>
        </div>
      </div>
    </section>
  );
}
