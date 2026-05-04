import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    emoji: '📲',
    title: 'Download Aplikasi',
    desc: 'Gratis di App Store & Google Play',
    color: '#0057e7',
    bg: 'linear-gradient(135deg, #e8f0fd, #dbeafe)',
  },
  {
    num: '02',
    emoji: '✍️',
    title: 'Daftar & Verifikasi',
    desc: 'Isi data, verifikasi HP — selesai dalam menit',
    color: '#0284c7',
    bg: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
  },
  {
    num: '03',
    emoji: '🚀',
    title: 'Top Up & Kirim!',
    desc: 'Setor di 7-Eleven lalu transfer ke Indonesia',
    color: '#0891b2',
    bg: 'linear-gradient(135deg, #cffafe, #a5f3fc)',
  },
];

export default function HowItWorks() {
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
    <section id="how-it-works" className="py-16 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Panduan
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            3 Langkah Mudah
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 relative">
          {/* Connector dashes desktop */}
          <div className="hidden md:block absolute top-14 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] z-0">
            <div className="border-t-2 border-dashed border-blue-200 w-full" />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative z-10 rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ background: step.bg, transitionDelay: `${i * 120}ms` }}
            >
              {/* Number badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center">
                <span className="text-[11px] font-black" style={{ color: step.color }}>{step.num}</span>
              </div>

              <div className="text-6xl mb-4 mt-2 inline-block transition-transform duration-300 hover:scale-110">{step.emoji}</div>
              <h3 className="text-lg font-black text-gray-800 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Download CTAs */}
        <div className={`mt-10 flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '400ms' }}>
          <a href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z"/>
            </svg>
            Download di Google Play
          </a>
          <a href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download di App Store
          </a>
        </div>
      </div>
    </section>
  );
}
