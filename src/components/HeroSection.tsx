import React from 'react';
import { EVENT_DETAILS } from '../data/landingData';
import { Calendar, MapPin, Clock, Play, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

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
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:border-slate-700 transition-all group">
              <div
                onClick={() => onOpenVideo('https://www.youtube.com/embed/dQw4w9WgXcQ', 'Overview Masterclass: The Future of Work')}
                className="relative aspect-video bg-slate-950 flex items-center justify-center cursor-pointer group-hover:scale-[1.01] transition-transform overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 ml-1 fill-slate-950" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block">
                      ▶ Video Preview Class
                    </span>
                    <p className="text-white font-bold text-sm mt-1">
                      Praktik Use Case Bisnis Nyata — Bukan Demo Produk
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Schedule Quick Specs Bar */}
              <div className="p-5 bg-slate-900/90 border-t border-slate-800/80 space-y-3">
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
