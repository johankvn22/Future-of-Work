import React from 'react';
import { useContent } from '../data/ContentContext';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import holonIqBadge from '../assets/images/holoniq-badge.png';

interface HeroSectionProps {
  onOpenRegister: (pkgId?: string) => void;
  onOpenVideo: (videoUrl: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onOpenVideo }) => {
  const { content } = useContent();
  const EVENT_DETAILS = content.eventDetails;
  const VIDEO_LINKS = content.videoLinks;
  const AI_TOOLS = content.aiTools;
  return (
    <section className="relative overflow-hidden bg-[#2B5CE6] min-h-screen">

      {/*
        ── Large white circular blob creates the organic left "panel" ──
        Diameter: 150vw × 150vw circle
        Center X: left=-20vw (after translate(-50%,−50%) = center is at −20vw)
        At viewport center height, the right edge of white = −20vw + 75vw = 55vw
        At viewport top/bottom, white shrinks to ~47vw → natural organic curve
      */}
      <div
        className="absolute z-0 bg-white pointer-events-none"
        style={{
          width: '148vw',
          height: '148vw',
          borderRadius: '50%',
          top: '50%',
          left: '-22vw',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Secondary depth accent blob on the blue side */}
      <div
        className="absolute z-0 pointer-events-none opacity-50"
        style={{
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,139,255,0.6) 0%, transparent 70%)',
          bottom: '-10vw',
          right: '-5vw',
        }}
      />

      {/* HolonIQ Badge — fixed top-right */}
      <div className="absolute top-6 right-6 z-30 transition-transform duration-300 hover:scale-105">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30">
          <img
            src={holonIqBadge}
            alt="HolonIQ Southeast Asia EdTech 50"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20">
          <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-10">

            {/* LEFT TEXT — constrained to max ~430px so it always sits on white */}
            <div className="w-full lg:w-[48%] space-y-5">

              {/* Eyebrow */}
              <div>
                <span className="text-[#1B4FD8] font-display font-bold text-xs uppercase tracking-[0.14em] flex items-start gap-1.5">
                  <Zap className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  Hybrid Class · 28–29 Juli 2026 · 08.30–17.00 WIB · MAXY AI HUB Jakarta
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-5xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Sistem kerja Anda sedang menguras profit &amp; mencetak{' '}
                <span className="text-[#2B5CE6]">burnout.</span>
              </h1>

              {/* Body copy */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tim Anda tidak butuh sesi motivasi tambahan.{' '}
                <strong className="text-slate-800 font-semibold">Mereka butuh sistem.</strong>{' '}
                Setiap jam yang Anda tunda mengadopsi AI adalah jam terbuang untuk pekerjaan repetitif — sementara talenta terbaik Anda diam-diam membuka lowongan di tab sebelah.
              </p>

              {/* Italic callout */}
              <p className="border-l-4 border-[#2B5CE6] pl-4 text-slate-500 text-sm italic py-0.5">
                Sementara Anda masih menanti laporan manual, eksekutif kompetitor sudah mengambil keputusan bisnis{' '}
                <strong className="text-slate-700 not-italic">60% lebih cepat</strong> dengan AI.
              </p>

              {/* Achievement bullets */}
              <ul className="space-y-2.5">
                {[
                  'Selamatkan top performer sebelum mereka resign',
                  '100% use case nyata untuk eksekutif – bukan teori teknis',
                  'Pulang membawa 7 deliverable siap jalan besok pagi',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#2B5CE6] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* AI Tools */}
              <div>
                <p className="text-xs font-display font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                  AI Tools yang Dikuasai:
                </p>
                <div className="flex flex-wrap gap-2">
                  {AI_TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-slate-100 border border-slate-200 text-slate-800 font-display font-bold text-xs px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-105 transition-all"
                    >
                      <img src={tool.logo} alt={tool.name} className="h-4 w-auto max-w-[64px] object-contain shrink-0" />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenRegister('onsite')}
                  className="bg-[#2B5CE6] hover:bg-blue-700 text-white font-display font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Amankan Executive Program
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#harga"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-display font-bold text-sm px-5 py-3.5 rounded-xl border border-slate-200 transition-all text-center"
                >
                  Lihat Paket &amp; Harga
                </a>
              </div>

              {/* Fine print */}
              <div className="flex items-start gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Khusus HR Manager · Direktur · Entrepreneur · Owner — WA:{' '}
                  <strong className="text-slate-600">{EVENT_DETAILS.adminName}</strong>{' '}
                  ({EVENT_DETAILS.adminPhone})
                </span>
              </div>
            </div>

            {/* RIGHT VIDEO CARD — portrait Reel style, centered in blue area */}
            <div className="w-full lg:w-[52%] flex justify-center items-center">
              <div className="w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:border-white/40 transition-all" style={{background: 'rgba(10, 25, 80, 0.55)', backdropFilter: 'blur(12px)'}}>

                {/* IG bar */}
                <div className="px-4 py-3 flex items-center justify-between text-xs" style={{background: 'rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px] flex items-center justify-center">
                      <div className="w-full h-full rounded-full flex items-center justify-center text-[8px] font-black text-white" style={{background: 'rgba(10,25,80,0.9)'}}>IG</div>
                    </div>
                    <span className="font-bold text-white">@maxy.academy</span>
                  </div>
                  <button
                    onClick={() => onOpenVideo(VIDEO_LINKS.hero.url, VIDEO_LINKS.hero.title)}
                    className="text-slate-400 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Perbesar ↗
                  </button>
                </div>

                {/* Video — portrait/reel height */}
                <div className="w-full h-[480px] bg-black flex items-center justify-center overflow-hidden">
                  <video
                    src={VIDEO_LINKS.hero.videoSrc}
                    poster={VIDEO_LINKS.hero.thumbnailSrc}
                    controls
                    playsInline
                    preload="none"
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                {/* Caption */}
                <div className="px-4 py-2.5 bg-white/5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-blue-200 font-medium">▶ Tonton: Apa yang terjadi di 2 hari kelas ini</span>
                  <a
                    href={VIDEO_LINKS.hero.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition-colors font-semibold"
                  >
                    <ExternalLink className="w-3 h-3" /> IG
                  </a>
                </div>

                {/* Quick specs */}
                <div className="grid grid-cols-3 divide-x border-t" style={{borderColor: 'rgba(255,255,255,0.12)', divideColor: 'rgba(255,255,255,0.12)'}}>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-white text-[11px] font-bold leading-tight">28-29 Juli 2026</p>
                    <p className="text-blue-200/70 text-[9px] mt-0.5">Online &amp; Onsite</p>
                  </div>
                  <div className="px-3 py-2.5 text-center" style={{borderLeft: '1px solid rgba(255,255,255,0.12)', borderRight: '1px solid rgba(255,255,255,0.12)'}}>
                    <p className="text-white text-[11px] font-bold leading-tight">MAXY AI HUB</p>
                    <p className="text-blue-200/70 text-[9px] mt-0.5">Jakarta</p>
                  </div>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-white text-[11px] font-bold leading-tight">2 × 8 jam</p>
                    <p className="text-blue-200/70 text-[9px] mt-0.5">Intensif</p>
                  </div>
                </div>

                {/* CTA inside card */}
                <div className="px-4 py-3.5 border-t border-white/10">
                  <button
                    onClick={() => onOpenRegister('onsite')}
                    className="w-full bg-white hover:bg-blue-50 text-[#1B4FD8] font-display font-extrabold text-sm py-2.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Amankan Slot Sekarang →
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-1.5">
                    Untuk HR Manager · Direktur · Entrepreneur · Owner
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
