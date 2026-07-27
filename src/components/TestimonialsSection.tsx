import React from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Quote, Play, Building, Star, CheckCircle2 } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* Video Testimonials & Portfolio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div
            onClick={() => onOpenVideo('https://www.youtube.com/embed/dQw4w9WgXcQ', 'Video Testimoni Alumni HR Leaders')}
            className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 cursor-pointer group flex items-center gap-5 transition-all shadow-xl"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              <Play className="w-8 h-8 text-slate-950 ml-1 fill-slate-950" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                ▶ Video Testimoni Peserta
              </span>
              <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                Dengar langsung dari HR Leader &amp; Management yang sudah menerapkannya
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Tonton kisah nyata efisiensi kerja tim Ciputra, DSN Group, dan ADIRA Finance.
              </p>
            </div>
          </div>

          <div
            onClick={() => onOpenVideo('https://www.youtube.com/embed/dQw4w9WgXcQ', 'Dokumentasi Suasana Kelas MAXY AI HUB')}
            className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 cursor-pointer group flex items-center gap-5 transition-all shadow-xl"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              <Play className="w-8 h-8 text-white ml-1 fill-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                ▶ Video Portfolio Program
              </span>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                Lihat Suasana Kelas &amp; Hasil Deliverable Nyata
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Aktivitas interaktif di MAXY AI HUB Jakarta &amp; Zoom Live Masterclass.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
