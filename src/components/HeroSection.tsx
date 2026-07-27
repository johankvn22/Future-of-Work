import React from 'react';
import { EVENT_DETAILS, VIDEO_LINKS } from '../data/landingData';
import { Calendar, MapPin, Clock, Play, CheckCircle2, ArrowRight, ShieldCheck, Zap, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: (pkgId?: string) => void;
  onOpenVideo: (videoUrl: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onOpenVideo }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Target Audience Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Hybrid Class · 2 Hari Full
          </span>
          <span className="bg-slate-800/80 text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium border border-slate-700">
            Khusus: HR Manager · Direktur · Entrepreneur · Owner
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              The Future of Work: <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                How AI is Shaping Productivity
              </span>{' '}
              &amp; Workplace Happiness
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Sistem kerja Anda sedang menguras profit dan mencetak burnout. Tim Anda tidak butuh motivasi tambahan — <strong className="text-white font-semibold">mereka butuh sistem.</strong>
            </p>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-inner">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Yang Akan Anda Capai dalam 2 Hari:
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sustain performance tanpa burnout tim</strong> — Alihkan beban administratif &amp; repetitif 100% ke AI.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Kolaborasi Wellbeing &amp; Business Performance</strong> — Metrik happiness terukur yang langsung berkorelasi dengan ROI.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>AI sebagai Daily Partner Eksekutif</strong> — Pengambilan keputusan bisnis tajam hingga 60% lebih cepat.</span>
                </li>
              </ul>
            </div>

            {/* AI Tools Badge */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                AI Tools yang Dikuasai (Praktik Use Case Bisnis Nyata):
              </div>
              <div className="flex flex-wrap gap-2">
                {['Gemini', 'Claude', 'NotebookLM', 'Google AI Studio', 'ChatGPT'].map((tool) => (
                  <span
                    key={tool}
                    className="bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenRegister('onsite')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base px-7 py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Amankan Slot Onsite / Online
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#harga"
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-all text-center flex items-center justify-center gap-2"
              >
                Lihat Paket &amp; Harga
              </a>
            </div>

            {/* Registration via Felicia footnote */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Daftar via WhatsApp Admin MAXY — <strong>{EVENT_DETAILS.adminName}</strong> ({EVENT_DETAILS.adminPhone})</span>
            </div>

          </div>

          {/* Right Video Preview Card & Event Quick Specs */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all group">
              
              <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  ▶ Video Overview & Pendaftaran
                </span>
                <button
                  onClick={() => onOpenVideo(VIDEO_LINKS.hero.url, VIDEO_LINKS.hero.title)}
                  className="text-slate-400 hover:text-amber-300 text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  Perbesar ↗
                </button>
              </div>

              {/* Direct Instagram Embed Player (Shows Thumbnail & Plays Directly) */}
              <div className="w-full h-[470px] bg-slate-950 relative flex items-center justify-center overflow-hidden">
                <iframe
                  src={VIDEO_LINKS.hero.embedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Video Overview & Informasi Pendaftaran"
                  scrolling="no"
                />
              </div>

              {/* Registration Call-to-Action Box below video */}
              <div className="p-5 bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-extrabold text-white">
                    Siap Mengikuti Program Ini?
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Klik tombol di samping untuk mengisi formulir pendaftaran.
                  </p>
                </div>
                <button
                  onClick={() => onOpenRegister('onsite')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-amber-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2 shrink-0"
                >
                  Daftar Sekarang <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Watch Video Reel on Instagram Action Bar */}
              <div className="px-5 py-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Link Alternatif Instagram Reel:</span>
                <a
                  href={VIDEO_LINKS.hero.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Buka di Instagram ↗
                </a>
              </div>

              {/* Event Schedule Quick Specs Bar */}
              <div className="p-5 bg-slate-900/90 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">{EVENT_DETAILS.dateText}</span>
                    <span className="text-slate-400">{EVENT_DETAILS.timeText}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">{EVENT_DETAILS.location}</span>
                    <span className="text-slate-400">{EVENT_DETAILS.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Special Price &amp; Mentoring Bonus</span>
                    <span className="text-slate-400">Terbatas untuk 10 pendaftar pertama</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantee Badge */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-xs text-slate-300 font-medium">
                🏆 Diselenggarakan oleh <strong className="text-white">MAXY Academy</strong> — HolonIQ SE Asia EdTech Top 50
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

