import React from 'react';
import { useContent } from '../data/ContentContext';
import { HeartHandshake, Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface ProgramSectionProps {
  onOpenRegister: (pkgId?: string) => void;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({ onOpenRegister }) => {
  const { content } = useContent();
  const PROGRAM_PILLARS = content.programPillars;
  const AI_TOOLS = content.aiTools;
  return (
    <section id="program" className="py-16 lg:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
            Solusi Anda Ada di Sini
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0F172A]">
            How AI Drives <span className="text-[#1B4FD8]">Happiness &amp; Productivity</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Program hybrid yang memadukan ilmu <strong className="text-[#0F172A]">Happiness at Work</strong> dengan implementasi <strong className="text-[#0F172A]">AI praktis</strong> — dua hal yang sering dipandang terpisah, padahal nyatanya saling menguatkan.
          </p>
        </div>

        {/* 2 Program Cards (Day 1 & Day 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PROGRAM_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 lg:p-8 border transition-all relative overflow-hidden flex flex-col justify-between bg-white shadow-xs ${
                idx === 0
                  ? 'border-slate-200 hover:border-amber-400'
                  : 'border-slate-200 hover:border-blue-400'
              }`}
            >
              {/* Top Accent Light Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  idx === 0 ? 'bg-gradient-to-r from-[#F59E0B] to-[#FCD34D]' : 'bg-gradient-to-r from-[#1B4FD8] to-[#00C4E8]'
                }`}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`font-display font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full border ${
                      idx === 0
                        ? 'bg-amber-50 text-[#B45309] border-amber-200'
                        : 'bg-blue-50 text-[#1B4FD8] border-blue-200'
                    }`}
                  >
                    {pillar.day}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center">
                    {idx === 0 ? (
                      <HeartHandshake className="w-5 h-5 text-[#F59E0B]" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-[#1B4FD8]" />
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-[#0F172A] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 font-display">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 border-l-2 border-slate-200 pl-3 py-0.5 italic">
                  &ldquo;{pillar.description}&rdquo;
                </p>

                <ul className="space-y-3 mb-8">
                  {pillar.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-[#0F172A] font-medium">
                      <div className={`mt-0.5 shrink-0 ${idx === 0 ? 'text-[#F59E0B]' : 'text-[#1B4FD8]'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">
                  Deliverable: {idx === 0 ? 'GAP Analysis & Personal Happiness Practice' : 'Matriks Sinergi, FlowBuddy & Prompt RCTF'}
                </span>
                <button
                  onClick={() => onOpenRegister(idx === 0 ? 'online' : 'onsite')}
                  className="text-xs font-display font-extrabold text-[#1B4FD8] hover:text-blue-700 flex items-center gap-1 group"
                >
                  Lihat Detail <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* AI Tools yang Akan Dikuasai Badge Box */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
          <h4 className="text-xs font-display font-extrabold tracking-[0.1em] text-slate-400 uppercase mb-5">
            AI Tools yang Akan Dikuasai
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-3.5">
            {AI_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex items-center justify-center min-h-[52px] sm:min-h-[64px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className={`w-auto object-contain shrink-0 ${
                    tool.name === 'NotebookLM'
                      ? 'h-7.5 sm:h-9.5 max-w-[145px] sm:max-w-[185px]'
                      : tool.name === 'FlowBuddy'
                      ? 'h-8 sm:h-10 max-w-[150px] sm:max-w-[190px]'
                      : 'h-7 sm:h-9 max-w-[125px] sm:max-w-[160px]'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3 Strategic Pillars (01, 02, 03) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-xs">
            <span className="font-display font-extrabold text-4xl text-amber-500/20 absolute top-4 right-6">01</span>
            <h4 className="text-lg font-display font-bold text-[#0F172A] mb-2">Sustain Performance</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Beban repetitif dialihkan ke AI — energi tim difokuskan ke pekerjaan bernilai tinggi.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-xs">
            <span className="font-display font-extrabold text-4xl text-cyan-500/20 absolute top-4 right-6">02</span>
            <h4 className="text-lg font-display font-bold text-[#0F172A] mb-2">Wellbeing × Performance</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bukan pilihan antara produktif atau bahagia — keduanya berjalan bersama secara terukur.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-xs">
            <span className="font-display font-extrabold text-4xl text-blue-500/20 absolute top-4 right-6">03</span>
            <h4 className="text-lg font-display font-bold text-[#0F172A] mb-2">Keputusan Lebih Cepat</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              AI sebagai daily partner — bukan sebatas tools IT, melainkan alat kerja utama eksekutif.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
