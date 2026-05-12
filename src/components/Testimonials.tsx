import { useEffect, useRef, useState } from 'react';
import { Star, Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Sari W.',
    loc: 'Tuen Mun, HK',
    stars: 5,
    text: '"Kirim uang ke ibu di Jawa Timur sekarang dari kamar aja bisa! Kursnya juga lebih bagus dari tempat lain."',
    tag: 'Transfer Rupiah',
    photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Dewi R.',
    loc: 'Yuen Long, HK',
    stars: 5,
    text: '"Setor di 7-Eleven pas banget. Hari Minggu juga bisa, nggak perlu cari agen yang kadang tutup."',
    tag: 'Setor 7-Eleven',
    photo: 'https://images.pexels.com/photos/3808845/pexels-photo-3808845.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ningsih P.',
    loc: 'Mong Kok, HK',
    stars: 5,
    text: '"Ongkos kirimnya paling murah dibanding yang lain. Uang yang nyampe ke keluarga jadi lebih banyak!"',
    tag: 'Ongkir Termurah',
    photo: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Fitri A.',
    loc: 'Sha Tin, HK',
    stars: 5,
    text: '"Bisa top up GoPay suami langsung dari HK. Nggak perlu aplikasi lain, semuanya di satu tempat!"',
    tag: 'Top Up E-Wallet',
    photo: 'https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
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
    <section id="testimonials" className="bg-ink py-20 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block border border-lemon/30 text-lemon text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Bukti Nyata
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-chalk leading-tight">
            Kata Mereka yang<br />
            <span className="text-lemon">Sudah Merasakan.</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-ink-light border border-white/10 rounded-3xl p-5 flex flex-col hover:border-lemon/30 hover:-translate-y-1 transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="inline-block bg-white/5 border border-white/10 text-chalk/50 text-[11px] font-bold px-2.5 py-1 rounded-full mb-4 self-start">
                {t.tag}
              </span>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} fill="#ffe234" className="text-lemon" />
                ))}
              </div>
              <p className="text-chalk/80 text-sm leading-relaxed mb-5 flex-1 font-medium">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/20">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-chalk text-sm">{t.name}</p>
                  <p className="text-chalk/40 text-xs">{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof: Office + Event + Video */}
        <div
          className={`grid md:grid-cols-3 gap-4 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '450ms' }}
        >
          {/* Office */}
          <div className="rounded-3xl overflow-hidden relative group" style={{ aspectRatio: '4/3' }}>
            <img
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Kantor remit.go! Hong Kong"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block bg-lemon text-ink text-[10px] font-extrabold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wider">
                Support Fisik
              </span>
              <p className="text-chalk font-bold text-sm">Kantor di Hong Kong</p>
              <p className="text-chalk/50 text-xs mt-0.5">Tim siap bantu secara langsung</p>
            </div>
          </div>

          {/* Event */}
          <div className="rounded-3xl overflow-hidden relative group" style={{ aspectRatio: '4/3' }}>
            <img
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Event bersama PMI Hong Kong"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block bg-lemon text-ink text-[10px] font-extrabold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wider">
                Komunitas PMI
              </span>
              <p className="text-chalk font-bold text-sm">Event Bersama PMI HK</p>
              <p className="text-chalk/50 text-xs mt-0.5">Gathering & acara rutin pengguna</p>
            </div>
          </div>

          {/* Video */}
          <a
            href="https://www.youtube.com/@remitgo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl overflow-hidden relative group block"
            style={{ aspectRatio: '4/3', background: '#111' }}
          >
            <img
              src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Video cara registrasi"
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-lemon flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play size={22} fill="#0a0a0a" className="text-ink ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block bg-coral text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wider">
                YouTube
              </span>
              <p className="text-chalk font-bold text-sm">Cara Daftar & Kirim Uang</p>
              <p className="text-chalk/50 text-xs mt-0.5">Video singkat — kurang dari 3 menit</p>
            </div>
          </a>
        </div>

        {/* Rating bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 py-5 px-8 rounded-3xl bg-ink-light border border-white/10 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl font-extrabold text-chalk">4.9</span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="#ffe234" className="text-lemon" />)}
              </div>
              <p className="text-xs text-chalk/40 mt-0.5">50.000+ pengguna</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <p className="text-sm font-semibold text-chalk/60">Dipercaya PMI Hong Kong sejak 2022</p>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="flex gap-2">
            <a
              href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 text-chalk text-xs font-bold px-3 py-2 rounded-xl hover:bg-white/15 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-lemon text-ink text-xs font-bold px-3 py-2 rounded-xl hover:brightness-110 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '700ms' }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-lemon text-ink font-bold px-8 py-4 rounded-full text-sm hover:brightness-110 hover:scale-105 transition-all"
          >
            Bergabung Sekarang — Gratis!
          </a>
        </div>
      </div>
    </section>
  );
}
