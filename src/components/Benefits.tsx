import { useEffect, useRef, useState } from 'react';

const usps = [
  {
    num: '01',
    tag: 'Keuangan',
    title: 'Kurs Tertinggi & Ongkir Termurah se-Hong Kong!',
    desc: 'Jaminan kurs terbaik dan biaya transfer paling kompetitif. Uangmu sampai lebih banyak, tidak habis di jalan.',
    callout: 'Hemat lebih dari kompetitor',
    accent: '#ffe234',
    photo: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    num: '02',
    tag: 'Kemudahan',
    title: 'Setor Lewat 7-Eleven di Seluruh HK — Kapan Aja',
    desc: 'Tidak perlu rekening bank HK. Setor tunai HKD di 7-Eleven terdekat, 24 jam, 7 hari — hari Minggu pun bisa.',
    callout: '1.000+ gerai di seluruh HK',
    accent: '#4ade80',
    photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    num: '03',
    tag: 'Jangkauan',
    title: 'Kirim ke Semua Bank & E-Wallet di Indonesia',
    desc: 'BRI, BCA, Mandiri, BNI — semua bisa. Plus top up GoPay, OVO, Dana langsung masuk ke tangan keluarga.',
    callout: 'Semua bank & e-wallet',
    accent: '#60a5fa',
    photo: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Benefits() {
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
    <section id="benefits" className="bg-chalk overflow-hidden" ref={ref}>
      {/* Header band */}
      <div className="bg-ink px-5 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block border border-lemon/40 text-lemon text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Kenapa remit.go!
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-chalk leading-tight">
              3 Alasan PMI HK<br />
              <span className="text-lemon">Pilih Kami.</span>
            </h2>
          </div>
          <p className={`text-chalk/40 text-sm max-w-xs md:text-right transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '200ms' }}>
            Solusi nyata untuk masalah yang sudah terlalu lama kamu tanggung.
          </p>
        </div>
      </div>

      {/* USP cards — alternating layout */}
      {usps.map((u, i) => (
        <div
          key={u.num}
          className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          {/* Photo */}
          <div className="w-full md:w-1/2 overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img
              src={u.photo}
              alt={u.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 bg-chalk flex flex-col justify-center px-8 md:px-14 py-12 md:py-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-extrabold text-4xl leading-none" style={{ color: u.accent, opacity: 0.4 }}>{u.num}</span>
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
                style={{ color: u.accent, borderColor: u.accent + '60', background: u.accent + '15' }}
              >
                {u.tag}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-ink leading-snug mb-4">{u.title}</h3>
            <p className="text-ink/60 text-base leading-relaxed mb-7">{u.desc}</p>
            <div
              className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-full self-start"
              style={{ background: u.accent + '25', color: u.accent === '#ffe234' ? '#7a6800' : u.accent }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: u.accent }} />
              {u.callout}
            </div>
          </div>
        </div>
      ))}

      {/* CTA strip */}
      <div className={`bg-ink px-5 py-12 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '500ms' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-chalk font-extrabold text-xl md:text-2xl leading-tight">
            Sudah 50.000+ PMI membuktikannya —<br className="hidden md:block" />
            <span className="text-lemon"> giliran kamu.</span>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lemon text-ink font-bold px-6 py-3.5 rounded-full text-sm hover:brightness-110 hover:scale-105 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
              </svg>
              Download Sekarang
            </a>
            <a
              href="https://wa.me/85252920848"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-chalk font-bold px-6 py-3.5 rounded-full text-sm hover:bg-white/15 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
