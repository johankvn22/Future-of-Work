import React from 'react';
import { REALITA_PAIN_POINTS } from '../data/landingData';
import { Flame, UserX, Cpu, Clock, AlertTriangle, Check, X, Quote } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-amber-500" />;
      case 'UserX': return <UserX className="w-6 h-6 text-rose-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-500" />;
      case 'Clock': return <Clock className="w-6 h-6 text-indigo-400" />;
      default: return <AlertTriangle className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Realita di Lapangan Hari Ini
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tim terbaik Anda sedang <span className="text-rose-400">burnout.</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Bukan karena mereka tidak kompeten. Tapi karena cara kerja yang ada tidak dirancang untuk tekanan bisnis yang terus naik — tanpa alat yang tepat.
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {REALITA_PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between group hover:scale-[1.01]"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Comparison Table: Cara Lama vs Cara Baru */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 lg:p-10 mb-16 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Pilihan Ada di Tangan Anda
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Transformasi Cara Kerja Eksekutif &amp; Management
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Cara Lama */}
            <div className="bg-rose-950/20 border border-rose-900/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-extrabold text-lg">
                <X className="w-5 h-5 text-rose-500" />
                <span>Cara Lama (Status Quo)</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Membebankan analisis &amp; tugas repetitif secara manual ke tim</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>High performer kelelahan &amp; paling cepat resign</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>AI dianggap sebatas "cost tambahan" tanpa sistem terpakai</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Pengambilan keputusan bisnis masih lambat (berminggu-minggu)</span>
                </li>
              </ul>
            </div>

            {/* Cara Masa Depan */}
            <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-lg">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Cara Masa Depan (Happily Productive)</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Alihkan beban rutin 100% ke AI, energi tim ke pekerjaan strategis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Retensi talent terjaga dengan sistem wellbeing berbasis data PERMA</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Adopsi AI terstruktur dengan 30-Day Implementation Roadmap</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>AI sebagai daily partner eksekutif — keputusan 60% lebih cepat</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* High Impact Quote Callout */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 rounded-3xl p-8 lg:p-12 text-center relative shadow-xl">
          <Quote className="w-12 h-12 mx-auto mb-3 opacity-30 text-slate-950" />
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight max-w-3xl mx-auto leading-snug">
            &ldquo;Jawabannya bukan menambah jam kerja.<br />Jawabannya adalah leverage AI dengan benar.&rdquo;
          </h3>
          <p className="text-sm font-bold opacity-80 mt-4 uppercase tracking-widest">
            — Principles of Modern Executive Leadership
          </p>
        </div>

      </div>
    </section>
  );
};
