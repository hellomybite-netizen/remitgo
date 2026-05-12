import { useEffect, useRef, useState } from 'react';
import { Star, Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Sari W.',
    loc: 'Tuen Mun, HK',
    gradient: 'linear-gradient(135deg, #0057e7, #3b9eff)',
    stars: 5,
    text: '"Kirim uang ke ibu di Jawa Timur sekarang dari kamar aja bisa! Kursnya juga lebih bagus dari tempat lain."',
    tag: 'Transfer Rupiah',
    tagBg: '#e8f0fd',
    tagColor: '#0057e7',
    photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Dewi R.',
    loc: 'Yuen Long, HK',
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    stars: 5,
    text: '"Setor di 7-Eleven itu beneran mudah banget. Pas hari Minggu juga bisa, nggak perlu cari agen lagi."',
    tag: 'Setor 7-Eleven',
    tagBg: '#e0f2fe',
    tagColor: '#0284c7',
    photo: 'https://images.pexels.com/photos/3808845/pexels-photo-3808845.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ningsih P.',
    loc: 'Mong Kok, HK',
    gradient: 'linear-gradient(135deg, #0891b2, #67e8f9)',
    stars: 5,
    text: '"Ongkos kirimnya paling murah dibanding yang lain. Uang yang nyampe ke keluarga jadi lebih banyak!"',
    tag: 'Ongkir Termurah',
    tagBg: '#cffafe',
    tagColor: '#0891b2',
    photo: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Fitri A.',
    loc: 'Sha Tin, HK',
    gradient: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
    stars: 5,
    text: '"Bisa top up GoPay suami langsung dari HK. Nggak perlu aplikasi lain, semuanya di satu tempat!"',
    tag: 'Top Up E-Wallet',
    tagBg: '#dbeafe',
    tagColor: '#1d4ed8',
    photo: 'https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&w=200',
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
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Bukti Nyata
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Mereka Sudah Merasakan Perbedaannya
          </h2>
          <p className="text-gray-400 text-sm mt-3">50.000+ PMI Hong Kong mempercayai remit.go!</p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 border border-gray-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-1.5 w-full" style={{ background: t.gradient }} />
              <div className="p-5">
                <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-4"
                  style={{ background: t.tagBg, color: t.tagColor }}>
                  {t.tag}
                </span>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 font-medium">{t.text}</p>
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

        {/* Social proof grid: Office + Events + Video */}
        <div className={`grid md:grid-cols-3 gap-5 mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '450ms' }}>

          {/* Office photo */}
          <div className="rounded-3xl overflow-hidden relative shadow-md group" style={{ aspectRatio: '4/3' }}>
            <img
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Kantor remit.go! Hong Kong"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-2">
                Support Fisik
              </span>
              <p className="text-white font-bold text-sm leading-tight">Kantor remit.go! di Hong Kong</p>
              <p className="text-white/70 text-xs mt-0.5">Tim siap bantu kamu secara langsung</p>
            </div>
          </div>

          {/* Event photo */}
          <div className="rounded-3xl overflow-hidden relative shadow-md group" style={{ aspectRatio: '4/3' }}>
            <img
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Event bersama PMI Hong Kong"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-2">
                Komunitas PMI
              </span>
              <p className="text-white font-bold text-sm leading-tight">Bersama PMI Hong Kong</p>
              <p className="text-white/70 text-xs mt-0.5">Event & gathering rutin bersama pengguna</p>
            </div>
          </div>

          {/* Video placeholder — YouTube */}
          <a
            href="https://www.youtube.com/@remitgo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl overflow-hidden relative shadow-md group cursor-pointer block"
            style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #0f172a, #1e3a5f)' }}
          >
            <img
              src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Video cara registrasi remit.go!"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play size={24} fill="#0057e7" className="text-blue-600 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block bg-red-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-2">
                YouTube
              </span>
              <p className="text-white font-bold text-sm leading-tight">Cara Daftar & Kirim Uang</p>
              <p className="text-white/70 text-xs mt-0.5">Video panduan singkat — kurang dari 3 menit</p>
            </div>
          </a>
        </div>

        {/* Rating summary */}
        <div className={`flex flex-wrap items-center justify-center gap-6 py-5 px-8 rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}>
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
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-blue-700 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '700ms' }}>
          <p className="text-center text-gray-400 text-sm mb-5">Bergabung bersama 50.000+ PMI yang sudah lebih hemat.</p>
          <DownloadCTA />
        </div>
      </div>
    </section>
  );
}
