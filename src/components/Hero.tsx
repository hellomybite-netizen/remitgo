import { useEffect, useState } from 'react';
import mockup from '../assets/Mockup_New.png';

const taglines = ['Lebih Cepat', 'Lebih Murah', 'Lebih Aman'];

export default function Hero() {
  const [tagIdx, setTagIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTagIdx((i) => (i + 1) % taglines.length);
        setFade(true);
      }, 300);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #002c8a 0%, #0057e7 55%, #3b9eff 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #7ec8e3, transparent)' }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7ec8e3, transparent)' }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-24 pb-16">

        {/* ── DESKTOP: two-column layout ── */}
        <div className="hidden md:flex items-center gap-10 lg:gap-16">

          {/* Left — Headline */}
          <div className="flex-1 animate-slide-left">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Resmi dari BRI Global Financial · Hong Kong
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-2">
              Kirim Uang ke Indonesia
            </h1>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 h-14 lg:h-16">
              <span
                className="inline-block transition-all duration-300"
                style={{
                  color: '#7ec8e3',
                  opacity: fade ? 1 : 0,
                  transform: fade ? 'translateY(0)' : 'translateY(10px)',
                }}
              >
                {taglines[tagIdx]}
              </span>
            </h2>

            <p className="text-white/60 text-base mb-8 max-w-sm">
              Dipercaya 50.000+ PMI Hong Kong. Transfer cepat, kurs terbaik, langsung ke rekening keluarga di Indonesia.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 mb-2">
              {[
                { val: '50K+', label: 'Pengguna' },
                { val: '4.9★', label: 'Rating' },
                { val: '0%', label: 'Biaya Awal' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-black text-white">{s.val}</p>
                  <p className="text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Mockup + CTA horizontal */}
          <div className="flex-shrink-0 flex flex-col items-center gap-5 animate-slide-right">
            {/* Mockup — larger */}
            <div className="relative animate-float">
              <div className="absolute inset-0 blur-3xl scale-75 rounded-full opacity-30"
                style={{ background: 'radial-gradient(ellipse, #7ec8e3, #0057e7)' }} />
              <img
                src={mockup}
                alt="remit.go! App"
                className="relative drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
                style={{ width: 'clamp(240px, 28vw, 400px)' }}
              />
            </div>

            {/* CTA buttons — horizontal row */}
            <div className="flex flex-row gap-2 flex-wrap justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-blue-700 font-bold px-3.5 py-2.5 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z"/>
                </svg>
                <div>
                  <p className="text-[9px] text-blue-400 font-medium leading-none">Download di</p>
                  <p className="text-[11px] font-bold leading-tight">Google Play</p>
                </div>
              </a>
              <a href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-3.5 py-2.5 rounded-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-[9px] text-blue-200 font-medium leading-none">Download di</p>
                  <p className="text-[11px] font-bold leading-tight">App Store</p>
                </div>
              </a>
              <a href="https://wa.me/85252920848" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-3.5 py-2.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-[9px] text-green-100 font-medium leading-none">Chat langsung</p>
                  <p className="text-[11px] font-bold leading-tight">WhatsApp</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── MOBILE: stacked layout — headline → mockup → CTA ── */}
        <div className="flex md:hidden flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-5 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Resmi dari BRI Global Financial · HK
          </div>

          <h1 className="text-3xl font-black text-white leading-tight mb-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Kirim Uang ke Indonesia
          </h1>
          <h2 className="text-3xl font-black mb-8 h-12 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <span
              className="inline-block transition-all duration-300"
              style={{ color: '#7ec8e3', opacity: fade ? 1 : 0, transform: fade ? 'translateY(0)' : 'translateY(10px)' }}
            >
              {taglines[tagIdx]}
            </span>
          </h2>

          <div className="relative flex justify-center mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="relative inline-block animate-float">
              <div className="absolute inset-0 blur-3xl scale-75 rounded-full opacity-30"
                style={{ background: 'radial-gradient(ellipse, #7ec8e3, #0057e7)' }} />
              <img src={mockup} alt="remit.go! App"
                className="relative drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                style={{ width: 'clamp(200px, 65vw, 300px)' }} />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full max-w-xs animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <a href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white text-blue-700 font-bold px-4 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z"/>
              </svg>
              <div className="text-left">
                <p className="text-[9px] text-blue-400 font-medium leading-none">Download di</p>
                <p className="text-xs font-bold leading-tight">Google Play</p>
              </div>
            </a>
            <a href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-4 py-3 rounded-xl hover:bg-white/20 transition-all">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[9px] text-blue-200 font-medium leading-none">Download di</p>
                <p className="text-xs font-bold leading-tight">App Store</p>
              </div>
            </a>
            <a href="https://wa.me/85252920848" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div className="text-left">
                <p className="text-[9px] text-green-100 font-medium leading-none">Chat langsung</p>
                <p className="text-xs font-bold leading-tight">WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M0,50 C240,90 480,20 720,50 C960,80 1200,10 1440,50 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
