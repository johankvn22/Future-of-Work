import React from 'react';
import { PROGRAM_PILLARS } from '../data/landingData';
import { HeartHandshake, Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface ProgramSectionProps {
  onOpenRegister: (pkgId?: string) => void;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="program" className="py-16 lg:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Struktur Kurikulum Masterclass
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Dua Hari. <span className="text-amber-400">Dua Dimensi Transformasi.</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Program hybrid yang memadukan ilmu <strong className="text-white">Happiness at Work</strong> dengan implementasi <strong className="text-white">AI praktis</strong> — dua hal yang sering dipandang terpisah, padahal nyatanya saling menguatkan.
          </p>
        </div>

        {/* 2 Program Cards (Day 1 & Day 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PROGRAM_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 lg:p-10 border transition-all relative overflow-hidden flex flex-col justify-between ${
                idx === 0
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/30 hover:border-amber-500/50'
                  : 'bg-gradient-to-b from-slate-900 to-slate-950 border-cyan-500/30 hover:border-cyan-500/50'
              }`}
            >
              {/* Top Accent Light Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  idx === 0 ? 'bg-amber-400' : 'bg-cyan-400'
                }`}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`font-mono font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border ${
                      idx === 0
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
                  >
                    {pillar.day} · Focus Area
                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    {idx === 0 ? (
                      <HeartHandshake className="w-6 h-6 text-amber-400" />
                    ) : (
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 border-l-2 border-slate-700 pl-4 py-0.5 italic">
                  &ldquo;{pillar.description}&rdquo;
                </p>

                <ul className="space-y-3 mb-8">
                  {pillar.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${idx === 0 ? 'bg-amber-500/20 text-amber-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  Deliverable: {idx === 0 ? 'PERMA Happiness Gap Map & Playbook' : '30-Day AI Roadmap & Prompts'}
                </span>
                <button
                  onClick={() => onOpenRegister(idx === 0 ? 'online' : 'onsite')}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group"
                >
                  Lihat Detail <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 3 Strategic Pillars (01, 02, 03) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <span className="font-extrabold text-4xl text-amber-400/20 absolute top-4 right-6 font-mono">01</span>
            <h4 className="text-lg font-bold text-white mb-2">Sustain Performance</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Beban repetitif dialihkan ke AI — energi tim difokuskan ke pekerjaan bernilai tinggi.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <span className="font-extrabold text-4xl text-cyan-400/20 absolute top-4 right-6 font-mono">02</span>
            <h4 className="text-lg font-bold text-white mb-2">Wellbeing × Performance</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Bukan pilihan antara produktif atau bahagia — keduanya berjalan bersama secara terukur.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <span className="font-extrabold text-4xl text-emerald-400/20 absolute top-4 right-6 font-mono">03</span>
            <h4 className="text-lg font-bold text-white mb-2">Keputusan Lebih Cepat</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI sebagai daily partner — bukan sebatas tools IT, melainkan alat kerja utama eksekutif.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
