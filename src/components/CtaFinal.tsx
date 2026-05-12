export default function CtaFinal() {
  return (
    <section className="bg-ink py-24 overflow-hidden relative">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a47d6, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7ec8e3, transparent)' }} />

      {/* Big watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[20vw] font-extrabold text-white/[0.03] leading-none whitespace-nowrap">
          remit.go!
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-2 border border-sky/30 text-sky text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-sky opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky" />
          </span>
          Tersedia di iOS & Android
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold text-chalk leading-tight mb-6">
          Kirim Lebih Banyak.<br />
          <span className="text-sky">Bayar Lebih Sedikit.</span>
        </h2>
        <p className="text-chalk/50 text-lg mb-10 max-w-md mx-auto">
          50.000+ PMI sudah membuktikan. Download sekarang, gratis.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl shadow-brand/40"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-white/60 leading-none">Download di</p>
              <p className="font-extrabold leading-tight">Google Play</p>
            </div>
          </a>
          <a
            href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-chalk font-bold px-8 py-4 rounded-full text-sm hover:bg-white/15 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-chalk/50 leading-none">Download di</p>
              <p className="font-extrabold leading-tight">App Store</p>
            </div>
          </a>
        </div>

        <a
          href="https://wa.me/85252920848"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-chalk/50 hover:text-chalk text-sm font-bold transition-all group"
        >
          <div className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          Ada pertanyaan? Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
