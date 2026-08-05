import React, { useState } from 'react';
import { useContent } from '../data/ContentContext';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, ExternalLink, Play } from 'lucide-react';
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
  const [heroPlaying, setHeroPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#2B5CE6] min-h-screen">

      {/* ── Large white circular blob background (Original design) ── */}
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

      {/* HolonIQ Badge — fixed top-right (Original position) */}
      <div className="absolute top-6 right-6 z-30 transition-transform duration-300 hover:scale-105">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-white p-1">
          <img
            src={holonIqBadge}
            alt="HolonIQ Southeast Asia EdTech 50"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-0 sm:pt-2 pb-12 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-14">

            {/* LEFT TEXT COLUMN — Positioned higher */}
            <div className="w-full lg:w-[48%] space-y-5 -mt-14 sm:-mt-20 lg:-mt-24">

              {/* Eyebrow Tag */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-wider border border-blue-100 shadow-xs">
                  <Zap className="w-3.5 h-3.5 text-[#1B4FD8]" />
                  {content.heroContent.eyebrowText}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.14]">
                {content.heroContent.headlineText}{' '}
                <span className="text-[#2B5CE6] block sm:inline">{content.heroContent.headlineHighlight}</span>
              </h1>

              {/* Body copy */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {content.heroContent.descriptionText}
              </p>

              {/* Italic callout box */}
              {content.heroContent.calloutText && (
                <div className="border-l-4 border-[#2B5CE6] bg-blue-50/50 pl-4 pr-3 py-2.5 rounded-r-xl text-slate-700 text-sm italic font-medium">
                  "{content.heroContent.calloutText}"
                </div>
              )}

              {/* Achievement / Outcome bullet points */}
              <ul className="space-y-2.5">
                {(content.heroContent.bulletPoints || []).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2B5CE6]" />
                    </div>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              {/* AI Tools Badges */}
              <div className="pt-1">
                <p className="text-xs font-display font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  AI Tools yang Dikuasai:
                </p>
                <div className="flex flex-wrap gap-2">
                  {AI_TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 font-display font-bold text-xs px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-2xs hover:scale-105 transition-all"
                    >
                      <img src={tool.logo} alt={tool.name} className="h-4 w-auto max-w-[60px] object-contain shrink-0" />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    onClick={() => onOpenRegister('onsite')}
                    className="bg-[#2B5CE6] hover:bg-blue-700 text-white font-display font-extrabold text-base px-7 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span>{content.heroContent.ctaPrimaryText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="#harga"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-display font-bold text-sm px-6 py-4 rounded-xl border border-slate-200 transition-all text-center flex items-center justify-center"
                  >
                    {content.heroContent.ctaSecondaryText}
                  </a>
                </div>

                {/* Fine print */}
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Khusus HR Manager · Direktur · Entrepreneur · Owner — WA:{' '}
                    <strong className="text-slate-700">{EVENT_DETAILS.adminName}</strong> ({EVENT_DETAILS.adminPhone})
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT VIDEO CARD — Enlarged video showcase shifted right & raised higher */}
            <div className="w-full lg:w-[52%] flex justify-center lg:justify-end items-start -mt-8 sm:-mt-12 lg:-mt-16 lg:translate-x-12 xl:translate-x-18">
              <div
                className="w-full max-w-[500px] xl:max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border border-white/25 transition-all"
                style={{ background: 'rgba(10, 25, 80, 0.65)', backdropFilter: 'blur(16px)' }}
              >

                {/* Top Bar */}
                <div
                  className="px-4 py-3 flex items-center justify-between text-xs"
                  style={{ background: 'rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px] flex items-center justify-center">
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center text-[9px] font-black text-amber-300"
                        style={{ background: 'rgba(10,25,80,0.95)' }}
                      >
                        MAXY
                      </div>
                    </div>
                    <span className="font-bold text-white text-xs">@maxy.academy</span>
                  </div>
                  <button
                    onClick={() => onOpenVideo(VIDEO_LINKS.hero.url, VIDEO_LINKS.hero.title)}
                    className="text-amber-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Perbesar</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Video / Thumbnail Container — Enlarged height */}
                <div className="w-full h-[520px] sm:h-[560px] lg:h-[580px] bg-slate-950 flex items-center justify-center overflow-hidden relative">
                  {!heroPlaying ? (
                    <div
                      className="absolute inset-0 cursor-pointer group"
                      onClick={() => setHeroPlaying(true)}
                    >
                      <img
                        src={VIDEO_LINKS.hero.thumbnailSrc}
                        alt={VIDEO_LINKS.hero.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/30 to-black/10 group-hover:from-slate-950 transition-all duration-300" />
                      
                      {/* Play button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#2B5CE6] group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl shadow-black/60">
                          <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-[#2B5CE6] ml-1" />
                        </div>
                        <span className="text-white text-xs sm:text-sm font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                          ▶ Tonton Preview Kelas
                        </span>
                      </div>

                      {/* Video Title */}
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                        <p className="text-white text-xs sm:text-sm font-bold truncate">{VIDEO_LINKS.hero.title}</p>
                        <p className="text-slate-300 text-[11px] truncate mt-0.5">{VIDEO_LINKS.hero.description}</p>
                      </div>
                    </div>
                  ) : (
                    <video
                      src={VIDEO_LINKS.hero.videoSrc}
                      poster={VIDEO_LINKS.hero.thumbnailSrc}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      Browser Anda tidak mendukung pemutaran video.
                    </video>
                  )}
                </div>

                {/* Quick specs grid */}
                <div
                  className="grid grid-cols-3 divide-x border-t text-center"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', divideColor: 'rgba(255,255,255,0.12)' }}
                >
                  <div className="px-3 py-3">
                    <p className="text-white text-[11px] sm:text-xs font-bold leading-tight">{EVENT_DETAILS.dateText}</p>
                    <p className="text-blue-200/70 text-[9px] sm:text-[10px] mt-0.5">Online &amp; Onsite</p>
                  </div>
                  <div className="px-3 py-3" style={{ borderLeft: '1px solid rgba(255,255,255,0.12)', borderRight: '1px solid rgba(255,255,255,0.12)' }}>
                    <p className="text-white text-[11px] sm:text-xs font-bold leading-tight">{EVENT_DETAILS.location}</p>
                    <p className="text-blue-200/70 text-[9px] sm:text-[10px] mt-0.5">Jakarta</p>
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-white text-[11px] sm:text-xs font-bold leading-tight">2 × 8 Jam</p>
                    <p className="text-blue-200/70 text-[9px] sm:text-[10px] mt-0.5">Intensif &amp; Praktik</p>
                  </div>
                </div>

                {/* Action Button inside card */}
                <div className="px-4 py-3.5 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <button
                    onClick={() => onOpenRegister('onsite')}
                    className="w-full bg-white hover:bg-blue-50 text-[#1B4FD8] font-display font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Amankan Slot Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
