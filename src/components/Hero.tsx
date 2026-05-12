import { useEffect, useRef, useState } from 'react';

const ticker = ['Kurs #1 di HK', 'Setor di 7-Eleven', 'Semua Bank & E-Wallet', '50.000+ Pengguna', 'Ongkir Termurah', 'Gratis Daftar'];

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVis, setStatsVis] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVis(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-ink min-h-screen overflow-hidden flex flex-col">

      {/* ── Top ticker tape ── */}
      <div className="bg-lemon overflow-hidden pt-[72px]">
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-ink font-bold text-xs uppercase tracking-widest px-6">
              {t}
              <span className="w-1.5 h-1.5 rounded-full bg-ink/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Main hero content ── */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-5 pt-12 pb-8 flex flex-col md:flex-row md:items-stretch gap-8">

        {/* Left — editorial headline */}
        <div className="flex-1 flex flex-col justify-between animate-slide-left">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/15 text-chalk/60 text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-lemon opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lemon" />
              </span>
              Resmi dari BRI Global Financial
            </div>

            {/* Giant headline */}
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold text-chalk leading-[0.9] tracking-tight mb-6">
              Transfer<br />
              ke Indonesia<br />
              <span
                className="relative inline-block"
                style={{ WebkitTextStroke: '2px #ffe234', color: 'transparent' }}
              >
                Harusnya
              </span>
              <br />
              <span className="text-lemon">Nggak</span>{' '}
              <span className="text-chalk">Semahal</span>
              <br />
              <span className="text-chalk">Itu.</span>
            </h1>

            <p className="text-chalk/50 text-base max-w-sm leading-relaxed mb-8">
              Ongkos mahal. Kurs rendah. Ribet. — Kami punya solusinya.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-lemon text-ink font-bold px-6 py-3.5 rounded-full text-sm hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
                </svg>
                Google Play
              </a>
              <a
                href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 text-chalk font-bold px-6 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://wa.me/85252920848"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25d366] text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-[#20c05c] transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Stats — bottom of left column */}
          <div ref={statsRef} className="flex gap-8 border-t border-white/10 pt-6">
            {[
              { val: '50K+', label: 'Pengguna Aktif' },
              { val: '4.9', label: 'Rating App' },
              { val: '#1', label: 'Kurs di HK' },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`transition-all duration-700 ${statsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-2xl font-extrabold text-lemon">{s.val}</p>
                <p className="text-xs text-chalk/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo with pain labels */}
        <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[460px] animate-slide-right">
          <div className="relative h-full min-h-[420px] md:min-h-0 rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Terkejut lihat potongan transfer"
              className={`w-full h-full object-cover object-top transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ minHeight: '420px' }}
              onLoad={() => setImgLoaded(true)}
            />
            {/* Dark overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

            {/* Pain label — top right */}
            <div className="absolute top-5 right-5 bg-coral text-white font-bold text-xs px-3 py-2 rounded-xl rotate-2 shadow-lg">
              Kurs kepotong lagi!
            </div>

            {/* Pain label — left middle */}
            <div className="absolute top-1/3 left-5 bg-ink border border-white/20 text-chalk/80 font-semibold text-xs px-3 py-2 rounded-xl -rotate-1 shadow-lg backdrop-blur-sm">
              Harus jauh ke agen...
            </div>

            {/* Quote at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-chalk font-extrabold text-xl leading-tight">"Kok potongannya segini?!"</p>
              <p className="text-chalk/50 text-xs mt-1">Perasaan yang pasti pernah kamu rasakan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pain points strip */}
      <div className="border-t border-white/10 bg-ink-light">
        <div className="max-w-6xl mx-auto px-5 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { num: '01', title: 'Ongkos Mahal, Kurs Rendah', desc: 'Uang sudah dipotong sebelum sampai ke keluarga.' },
            { num: '02', title: 'Harus Jauh-Jauh Setor', desc: 'Antri, cari agen, bawa cash di hari libur yang singkat.' },
            { num: '03', title: 'Tujuan Terbatas, Masuk Lama', desc: 'Tidak semua bank bisa, dan prosesnya lambat.' },
          ].map((p) => (
            <div key={p.num} className="flex items-start gap-4">
              <span className="text-lemon font-extrabold text-2xl leading-none opacity-40 flex-shrink-0">{p.num}</span>
              <div>
                <p className="text-chalk font-bold text-sm">{p.title}</p>
                <p className="text-chalk/40 text-xs mt-0.5 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
