import React from 'react';
import { TESTIMONIALS, VIDEO_LINKS } from '../data/landingData';
import { Quote, Play, Star, CheckCircle2, ExternalLink, Film } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenVideo: (videoUrl: string, title: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenVideo }) => {
  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
            Dari Sesama Leader
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0F172A]">
            Bukan sekadar klaim kami. <span className="text-[#1B4FD8]">Ini pengalaman nyata mereka.</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Dengarkan tanggapan dari para HR Leader, Management, dan Executive perusahaan terkemuka setelah mengikuti pelatihan MAXY Academy.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 flex flex-col justify-between shadow-xs relative group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F59E0B] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-amber-500/20 transition-colors" />
                </div>

                <p className="text-sm text-[#0F172A] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1628] text-[#F59E0B] font-display font-extrabold flex items-center justify-center text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-[#0F172A] flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role} · <span className="text-[#1B4FD8] font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Reel & Portfolio Showcase Header */}
        <div className="mb-8 text-center sm:text-left flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-12">
          <div>
            <h3 className="text-2xl font-display font-extrabold text-[#0F172A] flex items-center justify-center sm:justify-start gap-2.5">
              <Film className="w-6 h-6 text-[#1B4FD8]" />
              Video Testimoni &amp; Portfolio Kegiatan
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Dokumentasi nyata keseruan suasana kelas Batch 1 &amp; Batch 2 di MAXY AI HUB
            </p>
          </div>
        </div>

        {/* Video Cards Grid: Batch 1 & Batch 2 (Equal Size & Symmetric) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* 1. Video Portfolio Batch 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all group">
            <div>
              <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  ▶ Portfolio Batch 1
                </span>
                <button
                  onClick={() => onOpenVideo(VIDEO_LINKS.portfolioBatch1.url, VIDEO_LINKS.portfolioBatch1.title)}
                  className="text-slate-400 hover:text-cyan-300 text-xs inline-flex items-center gap-1 transition-colors font-semibold"
                  title="Perbesar / Buka Modal"
                >
                  Perbesar ↗
                </button>
              </div>

              {/* Instagram Reel Embed UI + Native Video Player */}
              <div className="w-full bg-slate-950 border-t border-b border-slate-800/60 relative">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-cyan-500/15 border-b border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px] flex items-center justify-center">
                      <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-[8px] font-black text-white">IG</div>
                    </div>
                    <span className="font-bold text-slate-200">@maxy.academy</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Reels</span>
                </div>
                <div className="w-full h-[450px] bg-black relative flex items-center justify-center overflow-hidden">
                  <video
                    src={VIDEO_LINKS.portfolioBatch1.videoSrc}
                    poster={VIDEO_LINKS.portfolioBatch1.thumbnailSrc}
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {VIDEO_LINKS.portfolioBatch1.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {VIDEO_LINKS.portfolioBatch1.description}
                </p>
              </div>
            </div>

            <div className="px-5 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 mt-auto">
              <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Siap putar langsung di atas 👆
              </span>
              <a
                href={VIDEO_LINKS.portfolioBatch1.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-semibold flex items-center gap-1"
              >
                Buka di IG <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Video Portfolio Batch 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-indigo-500/40 transition-all group">
            <div>
              <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  ▶ Portfolio Batch 2
                </span>
                <button
                  onClick={() => onOpenVideo(VIDEO_LINKS.portfolioBatch2.url, VIDEO_LINKS.portfolioBatch2.title)}
                  className="text-slate-400 hover:text-indigo-300 text-xs inline-flex items-center gap-1 transition-colors font-semibold"
                  title="Perbesar / Buka Modal"
                >
                  Perbesar ↗
                </button>
              </div>

              {/* Instagram Reel Embed UI */}
              <div className="w-full bg-slate-950 border-t border-b border-slate-800/60 relative">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-indigo-500/15 border-b border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px] flex items-center justify-center">
                      <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-[8px] font-black text-white">IG</div>
                    </div>
                    <span className="font-bold text-slate-200">@maxy.academy</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Reels</span>
                </div>
                <div className="w-full h-[450px] bg-black relative flex items-center justify-center overflow-hidden">
                  <video
                    src={VIDEO_LINKS.portfolioBatch2.videoSrc}
                    poster={VIDEO_LINKS.portfolioBatch2.thumbnailSrc}
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {VIDEO_LINKS.portfolioBatch2.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {VIDEO_LINKS.portfolioBatch2.description}
                </p>
              </div>
            </div>

            <div className="px-5 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 mt-auto">
              <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Siap putar langsung di atas 👆
              </span>
              <a
                href={VIDEO_LINKS.portfolioBatch2.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline font-semibold flex items-center gap-1"
              >
                Buka di IG <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

