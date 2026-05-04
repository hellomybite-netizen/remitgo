import mockup from '../assets/Mockup_New.png';

export default function CtaFinal() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #002c8a 0%, #0057e7 60%, #3b9eff 100%)' }}>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
        style={{ background: 'radial-gradient(circle, #7ec8e3, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3"
        style={{ background: 'radial-gradient(circle, #7ec8e3, transparent)' }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-12">

        {/* Mockup */}
        <div className="flex-shrink-0 flex justify-center md:justify-start animate-float">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-25 rounded-full"
              style={{ background: 'radial-gradient(ellipse, #7ec8e3, transparent)' }} />
            <img src={mockup} alt="remit.go!" className="relative w-52 md:w-64 drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)]" />
          </div>
        </div>

        {/* Text & CTA */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Tersedia di iOS & Android
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Siap kirim uang
            <br />
            <span style={{ color: '#7ec8e3' }}>lebih cepat?</span>
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-md mx-auto md:mx-0">
            50.000+ PMI sudah pakai remit.go! Download sekarang, gratis.
          </p>

          {/* Big CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
            <a href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-blue-700 font-bold px-7 py-4 rounded-2xl shadow-2xl hover:-translate-y-1 hover:shadow-blue-900/40 transition-all">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-blue-400 leading-none">Download di</p>
                <p className="font-black leading-tight">Google Play</p>
              </div>
            </a>
            <a href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-7 py-4 rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-blue-200 leading-none">Download di</p>
                <p className="font-black leading-tight">App Store</p>
              </div>
            </a>
          </div>

          {/* WhatsApp CTA */}
          <a href="https://wa.me/85252920848" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white/80 hover:text-white text-sm font-semibold transition-all group">
            <div className="w-10 h-10 rounded-2xl bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            Ada pertanyaan? Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
