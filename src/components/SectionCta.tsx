interface SectionCtaProps {
  text: string;
  sub?: string;
}

export default function SectionCta({ text, sub }: SectionCtaProps) {
  return (
    <div className="bg-lemon py-8 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="text-ink font-extrabold text-xl leading-tight">{text}</p>
          {sub && <p className="text-ink/50 text-sm mt-1">{sub}</p>}
        </div>
        <div className="flex gap-2.5 flex-shrink-0">
          <a
            href="https://play.google.com/store/apps/details?id=com.brchk.remitgo&pcampaignid=web_share"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-ink text-chalk font-bold px-5 py-3 rounded-full text-xs hover:bg-ink-light hover:scale-105 transition-all"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-12.45L12.77 7.7 3.18 23.76zM21.4 10.26l-2.78-1.57-3.27 3.27 3.27 3.27 2.81-1.59c.8-.45.8-1.93-.03-2.38zM2.06 1.27C2.02 1.43 2 1.6 2 1.79v20.43c0 .19.02.36.06.52l12.45-12.45L2.06 1.27zM16.62 8.31L3.18.24C2.83.2 2.49.27 2.19.44l12.45 12.45 3.98-4.58z" />
            </svg>
            Google Play
          </a>
          <a
            href="https://apps.apple.com/id/app/remit-go-bri-global-financial/id6744429247"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-ink/10 border border-ink/20 text-ink font-bold px-5 py-3 rounded-full text-xs hover:bg-ink/15 transition-all"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
        </div>
      </div>
    </div>
  );
}
