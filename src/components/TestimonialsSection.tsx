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

        {/* 3 Video Cards Grid (Direct Embed Players with Thumbnails & Instant Play) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Video Testimoni Peserta */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-amber-500/40 transition-all group">
            <div>
              <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  ▶ Video Testimoni
                </span>
                <button
                  onClick={() => onOpenVideo(VIDEO_LINKS.testimoni.url, VIDEO_LINKS.testimoni.title)}
                  className="text-slate-400 hover:text-amber-300 text-xs inline-flex items-center gap-1 transition-colors font-semibold"
                  title="Perbesar / Buka Modal"
                >
                  Perbesar ↗
                </button>
              </div>

              {/* Direct Instagram Embed Player (Shows Thumbnail & Plays Directly) */}
              <div className="w-full h-[470px] bg-slate-950 relative flex items-center justify-center overflow-hidden">
                <iframe
                  src={VIDEO_LINKS.testimoni.embedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Video Testimoni Peserta"
                  scrolling="no"
                />
              </div>

              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {VIDEO_LINKS.testimoni.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {VIDEO_LINKS.testimoni.description}
                </p>
              </div>
            </div>

            <div className="px-5 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Siap putar langsung di atas 👆
              </span>
              <a
                href={VIDEO_LINKS.testimoni.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline font-semibold flex items-center gap-1"
              >
                Buka di IG <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Video Portfolio Batch 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-cyan-500/40 transition-all group">
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

              {/* Direct Instagram Embed Player */}
              <div className="w-full h-[470px] bg-slate-950 relative flex items-center justify-center overflow-hidden">
                <iframe
                  src={VIDEO_LINKS.portfolioBatch1.embedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Video Portfolio Batch 1"
                  scrolling="no"
                />
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

            <div className="px-5 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
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

          {/* 3. Video Portfolio Batch 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-all group">
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

              {/* Direct Instagram Embed Player */}
              <div className="w-full h-[470px] bg-slate-950 relative flex items-center justify-center overflow-hidden">
                <iframe
                  src={VIDEO_LINKS.portfolioBatch2.embedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Video Portfolio Batch 2"
                  scrolling="no"
                />
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

            <div className="px-5 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
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

