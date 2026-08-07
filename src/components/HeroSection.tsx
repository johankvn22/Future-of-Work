import React, { useState } from 'react';
import { useContent } from '../data/ContentContext';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, ExternalLink, Play, Sparkles } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#111C38] to-[#1E3A8A] min-h-[90vh] flex items-center pt-2 sm:pt-4 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">

      {/* ── Mobile White Background Top Section (Native Canvas, No Card) ── */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-[64%] sm:h-[68%] bg-white z-0 pointer-events-none shadow-md" />

      {/* ── Desktop White Left Diagonal Panel ── */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[53%] bg-white z-0 pointer-events-none shadow-[20px_0_40px_rgba(0,0,0,0.1)]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 86% 100%, 0% 100%)',
        }}
      />

      {/* ── Ambient Glowing Accents for Deep Royal Navy Side (Right) ── */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 85% 65%, rgba(56, 189, 248, 0.25) 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 60%)' }}
      />

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* LEFT TEXT COLUMN — Shifted higher */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 -mt-2 sm:-mt-3 lg:-mt-5">

              {/* Eyebrow Tag + Mobile HolonIQ Badge */}
              <div className="flex items-center justify-between gap-3 w-full">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1B4FD8] font-display font-extrabold text-[10px] sm:text-xs uppercase tracking-wider border border-blue-100 shadow-2xs">
                  <Zap className="w-3.5 h-3.5 text-[#1B4FD8]" />
                  {content.heroContent.eyebrowText}
                </span>

                {/* HolonIQ Badge (Mobile view) */}
                <div className="lg:hidden bg-slate-50 p-1.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-1.5 shrink-0">
                  <img
                    src={holonIqBadge}
                    alt="HolonIQ"
                    className="h-7 sm:h-9 w-auto object-contain rounded"
                  />
                  <span className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-tight pr-1">
                    Top 50 EdTech
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.18]">
                {content.heroContent.headlineText}{' '}
                <span className="text-[#2B5CE6] block sm:inline">{content.heroContent.headlineHighlight}</span>
              </h1>

              {/* Body copy */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
                {content.heroContent.descriptionText}
              </p>

              {/* Callout box */}
              {content.heroContent.calloutText && (
                <div className="border-l-4 border-[#2B5CE6] bg-blue-50/70 pl-3.5 pr-3 py-2.5 rounded-r-xl text-slate-700 text-xs sm:text-sm italic font-medium max-w-xl">
                  "{content.heroContent.calloutText}"
                </div>
              )}

              {/* Bullet points */}
              <ul className="space-y-2 max-w-xl">
                {(content.heroContent.bulletPoints || []).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2B5CE6]" />
                    </div>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              {/* AI Tools Badges */}
              <div className="pt-1">
                <p className="text-[10px] sm:text-xs font-display font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" /> AI Tools yang Dikuasai:
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {AI_TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-slate-100 hover:bg-slate-200/90 border border-slate-200/90 px-3.5 sm:px-4 py-2 rounded-xl flex items-center justify-center shadow-2xs hover:scale-105 transition-all"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="h-4.5 sm:h-5.5 w-auto max-w-[85px] sm:max-w-[115px] object-contain shrink-0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => onOpenRegister('onsite')}
                    className="bg-[#2B5CE6] hover:bg-blue-700 text-white font-display font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{content.heroContent.ctaPrimaryText}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <a
                    href="#harga"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-display font-bold text-xs sm:text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl border border-slate-200 transition-all text-center flex items-center justify-center"
                  >
                    {content.heroContent.ctaSecondaryText}
                  </a>
                </div>

                {/* Fine print */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                  <span>
                    Khusus HR Manager · Direktur · Owner — WA:{' '}
                    <strong className="text-slate-700">{EVENT_DETAILS.adminName}</strong> ({EVENT_DETAILS.adminPhone})
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT VIDEO CARD (DEEP ROYAL NAVY SIDE) — Shifted higher */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-end -mt-1 sm:-mt-2 lg:-mt-6">

              {/* HolonIQ Award Badge — Desktop Position (Top Right) */}
              <div className="hidden lg:block mb-3 transition-transform duration-300 hover:scale-105">
                <div className="bg-white/95 p-1.5 rounded-2xl border border-white/60 shadow-2xl backdrop-blur-md inline-block">
                  <img
                    src={holonIqBadge}
                    alt="HolonIQ Southeast Asia EdTech 50"
                    className="h-16 sm:h-20 lg:h-24 w-auto object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Video Showcase Card */}
              <div
                className="w-full max-w-[500px] xl:max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border border-white/25 transition-all"
                style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(16px)' }}
              >

                {/* Top Bar */}
                <div
                  className="px-4 py-3 flex items-center justify-between text-xs"
                  style={{ background: 'rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px] flex items-center justify-center">
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center text-[9px] font-black text-amber-300"
                        style={{ background: 'rgba(15,23,42,0.95)' }}
                      >
                        MAXY
                      </div>
                    </div>
                    <span className="font-bold text-white text-xs">@maxy.academy</span>
                  </div>
                  <button
                    onClick={() => onOpenVideo(VIDEO_LINKS.hero.url, VIDEO_LINKS.hero.title)}
                    className="text-amber-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Perbesar</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Video Container */}
                <div className="w-full h-[220px] xs:h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[500px] bg-slate-950 flex items-center justify-center overflow-hidden relative">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/30 to-black/10 group-hover:from-slate-950 transition-all duration-300" />
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-18 sm:h-18 rounded-full bg-white/95 text-[#2B5CE6] group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl shadow-black/60">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#2B5CE6] ml-1" />
                        </div>
                        <span className="text-white text-[10px] sm:text-xs font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                          ▶ Tonton Preview Kelas
                        </span>
                      </div>

                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 bg-slate-950/80 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/10">
                        <p className="text-white text-xs sm:text-sm font-bold truncate">{VIDEO_LINKS.hero.title}</p>
                        <p className="text-slate-300 text-[10px] sm:text-[11px] truncate mt-0.5">{VIDEO_LINKS.hero.description}</p>
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

                {/* Quick Specs Grid */}
                <div
                  className="grid grid-cols-3 divide-x border-t text-center"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', divideColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="px-2 sm:px-3 py-2.5 sm:py-3">
                    <p className="text-white text-[10px] sm:text-xs font-bold leading-tight">{EVENT_DETAILS.dateText}</p>
                    <p className="text-blue-200/70 text-[8px] sm:text-[10px] mt-0.5">Online &amp; Onsite</p>
                  </div>
                  <div className="px-2 sm:px-3 py-2.5 sm:py-3" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-white text-[10px] sm:text-xs font-bold leading-tight">{EVENT_DETAILS.location}</p>
                    <p className="text-blue-200/70 text-[8px] sm:text-[10px] mt-0.5">Jakarta</p>
                  </div>
                  <div className="px-2 sm:px-3 py-2.5 sm:py-3">
                    <p className="text-white text-[10px] sm:text-xs font-bold leading-tight">2 × 8 Jam</p>
                    <p className="text-blue-200/70 text-[8px] sm:text-[10px] mt-0.5">Intensif &amp; Praktik</p>
                  </div>
                </div>

                {/* Action Button inside card */}
                <div className="px-3.5 sm:px-4 py-3 sm:py-3.5 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <button
                    onClick={() => onOpenRegister('onsite')}
                    className="w-full bg-white hover:bg-blue-50 text-[#1B4FD8] font-display font-extrabold text-xs sm:text-sm py-3 sm:py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Amankan Slot Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
