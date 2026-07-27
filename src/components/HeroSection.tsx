import React from 'react';
import { EVENT_DETAILS, VIDEO_LINKS } from '../data/landingData';
import { Calendar, MapPin, Clock, Play, CheckCircle2, ArrowRight, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import holonIqBadge from '../assets/images/holoniq-badge.png';

interface HeroSectionProps {
  onOpenRegister: (pkgId?: string) => void;
  onOpenVideo: (videoUrl: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onOpenVideo }) => {
  return (
    <section className="relative bg-[#0B1628] text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#1B2C4A]">
      {/* Floating HolonIQ Award Badge (Top Right - Matching Reference Screenshot) */}
      <div className="hidden sm:block absolute top-6 right-4 sm:right-8 lg:right-12 z-20 transition-transform duration-300 hover:scale-105">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#0B1628] group">
          <img
            src={holonIqBadge}
            alt="HolonIQ Southeast Asia EdTech 50"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Target Audience Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="bg-[#00C4E8]/10 border border-[#00C4E8]/20 text-[#00C4E8] font-display font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-[0.14em] flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#00C4E8]" />
            Hybrid Class · 28–29 Juli 2026 · MAXY AI HUB Jakarta
          </span>
          <span className="bg-[#132038] text-slate-300 text-xs px-3.5 py-1.5 rounded-full font-medium border border-white/10">
            Khusus: HR Manager · Direktur · Entrepreneur · Owner
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.15]">
              Sistem kerja Anda sedang menguras profit &amp; mencetak <span className="text-[#F59E0B]">burnout.</span>
            </h1>

            <p className="text-[#C7D3E4] text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Tim Anda tidak butuh sesi motivasi tambahan. <strong className="text-white font-semibold">Mereka butuh sistem.</strong> Setiap jam yang Anda tunda mengadopsi AI adalah jam terbuang untuk pekerjaan repetitif — sementara talenta terbaik Anda diam-diam membuka lowongan di tab sebelah.
            </p>

            <p className="border-l-3 border-[#00C4E8] pl-4 text-slate-400 text-sm italic font-sans py-0.5">
              Sementara Anda masih menanti laporan manual, eksekutif di perusahaan kompetitor sudah mengambil keputusan bisnis 60% lebih cepat dengan AI.
            </p>

            <div className="bg-[#132038] border border-white/10 rounded-2xl p-5 space-y-3 shadow-md">
              <h3 className="text-xs font-display font-extrabold text-[#F59E0B] uppercase tracking-widest">
                Yang Akan Anda Capai dalam 2 Hari:
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                  <span><strong>Sustain performance tanpa burnout tim</strong> — Alihkan beban administratif &amp; repetitif 100% ke AI.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                  <span><strong>Kolaborasi Wellbeing &amp; Business Performance</strong> — Metrik happiness terukur yang langsung berkorelasi dengan ROI.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                  <span><strong>AI sebagai Daily Partner Eksekutif</strong> — Pengambilan keputusan bisnis tajam hingga 60% lebih cepat.</span>
                </li>
              </ul>
            </div>

            {/* AI Tools Badge */}
            <div className="pt-2">
              <div className="text-xs font-display font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                AI Tools yang Dikuasai (Praktik Use Case Bisnis Nyata):
              </div>
              <div className="flex flex-wrap gap-2">
                {['ChatGPT', 'Gemini', 'NotebookLM', 'FlowBuddy'].map((tool) => (
                  <span
                    key={tool}
                    className="bg-[#132038] border border-[#1B2C4A] text-[#E2E8F0] font-display font-bold text-xs px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenRegister('onsite')}
                className="bg-[#F59E0B] hover:bg-amber-400 text-amber-950 font-display font-extrabold text-base px-7 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Amankan Slot Anda Sekarang
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#harga"
                className="bg-[#132038] hover:bg-slate-800 text-slate-200 font-display font-bold text-sm px-6 py-4 rounded-xl border border-white/10 transition-all text-center flex items-center justify-center gap-2"
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

              {/* Instagram Reel Direct Embed Wrapper with Native Inline Video Playback */}
              <div className="w-full bg-slate-950 border-t border-b border-slate-800/60 relative">
                {/* Instagram Header Bar */}
                <div className="px-4 py-2.5 bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-amber-500/15 border-b border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px] flex items-center justify-center shadow-md">
                      <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-[9px] font-extrabold text-white">
                        IG
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-white block">@maxy.academy</span>
                      <span className="text-[10px] text-slate-400 -mt-0.5 block">Instagram Reels · Diputar Langsung</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-800/90 text-amber-300 font-bold px-2 py-0.5 rounded-md border border-slate-700">
                    Reels
                  </span>
                </div>

                {/* Direct Inline HTML5 Player (Plays instantly without opening Instagram) */}
                <div className="w-full h-[450px] sm:h-[480px] bg-black relative flex items-center justify-center overflow-hidden group/video">
                  <video
                    src={VIDEO_LINKS.hero.videoSrc}
                    poster={VIDEO_LINKS.hero.thumbnailSrc}
                    controls
                    playsInline
                    className="w-full h-full object-contain pointer-events-auto"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>
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



          </div>

        </div>

      </div>
    </section>
  );
};

