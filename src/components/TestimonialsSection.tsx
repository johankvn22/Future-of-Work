import React from 'react';
import { TESTIMONIALS, VIDEO_LINKS } from '../data/landingData';
import { Quote, Play, Star, CheckCircle2, ExternalLink, Film } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenVideo: (videoUrl: string, title: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenVideo }) => {
  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Dari Sesama Leader
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Bukan Klaim Kami. <span className="text-amber-400">Pengalaman Nyata Mereka.</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Dengarkan tanggapan dari para HR Leader, Management, dan Executive perusahaan terkemuka setelah mengikuti pelatihan MAXY Academy.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-800 group-hover:text-amber-500/20 transition-colors" />
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center text-sm border border-slate-700 shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · <span className="text-amber-400/90 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Reel Showcase Header */}
        <div className="mb-8 text-center sm:text-left flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-12">
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
              <Film className="w-5 h-5 text-amber-400" />
              Video Testimoni &amp; Portfolio Kegiatan
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Dokumentasi nyata keseruan suasana kelas Batch 1 &amp; Batch 2 di MAXY AI HUB
            </p>
          </div>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Video Testimoni Peserta */}
          <div
            onClick={() => onOpenVideo(VIDEO_LINKS.testimoni.url, VIDEO_LINKS.testimoni.title)}
            className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 cursor-pointer group flex flex-col justify-between transition-all shadow-xl hover:scale-[1.01]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  ▶ Video Testimoni
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>

              <div className="flex items-center gap-4 py-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 text-slate-950 ml-0.5 fill-slate-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                    {VIDEO_LINKS.testimoni.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {VIDEO_LINKS.testimoni.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-amber-400 font-semibold">
              <span>Tonton Reel Instagram</span>
              <span>↗</span>
            </div>
          </div>

          {/* 2. Video Portfolio Batch 1 */}
          <div
            onClick={() => onOpenVideo(VIDEO_LINKS.portfolioBatch1.url, VIDEO_LINKS.portfolioBatch1.title)}
            className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 cursor-pointer group flex flex-col justify-between transition-all shadow-xl hover:scale-[1.01]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  ▶ Portfolio Batch 1
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>

              <div className="flex items-center gap-4 py-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 text-white ml-0.5 fill-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {VIDEO_LINKS.portfolioBatch1.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {VIDEO_LINKS.portfolioBatch1.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-cyan-400 font-semibold">
              <span>Tonton Reel Instagram</span>
              <span>↗</span>
            </div>
          </div>

          {/* 3. Video Portfolio Batch 2 */}
          <div
            onClick={() => onOpenVideo(VIDEO_LINKS.portfolioBatch2.url, VIDEO_LINKS.portfolioBatch2.title)}
            className="bg-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 cursor-pointer group flex flex-col justify-between transition-all shadow-xl hover:scale-[1.01]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  ▶ Portfolio Batch 2
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </div>

              <div className="flex items-center gap-4 py-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 text-white ml-0.5 fill-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {VIDEO_LINKS.portfolioBatch2.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {VIDEO_LINKS.portfolioBatch2.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-indigo-400 font-semibold">
              <span>Tonton Reel Instagram</span>
              <span>↗</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

