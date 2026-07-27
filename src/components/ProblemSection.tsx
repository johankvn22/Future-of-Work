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

        {/* Transformation Comparison Table: Manajemen Konvensional vs AI & Happiness-Driven */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 lg:p-10 mb-16 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-block">
              Pilihan Ada di Tangan Anda
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Transformasi Cara Kerja Eksekutif &amp; Management
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Manajemen Konvensional */}
            <div className="bg-rose-950/30 border border-rose-900/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-extrabold text-xl pb-4 border-b border-rose-900/40">
                  <span className="text-2xl">😮‍💨</span>
                  <span>Manajemen Konvensional</span>
                </div>
                <ul className="divide-y divide-rose-900/30">
                  <li className="py-4 first:pt-4 flex items-start gap-3 text-sm text-rose-200/90 leading-relaxed">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Mengorbankan banyak waktu untuk bekerja manual dalam analisis &amp; tugas repetitif</span>
                  </li>
                  <li className="py-4 flex items-start gap-3 text-sm text-rose-200/90 leading-relaxed">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Mengorbankan kesejahteraan karyawan demi target jangka pendek</span>
                  </li>
                  <li className="py-4 flex items-start gap-3 text-sm text-rose-200/90 leading-relaxed">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Pengambilan keputusan selalu terhambat birokrasi dan olah data</span>
                  </li>
                  <li className="py-4 flex items-start gap-3 text-sm text-rose-200/90 leading-relaxed">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Membiarkan talenta terbaik burnout karena beban kerja tak terukur</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI & Happiness-Driven */}
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xl pb-4 border-b border-slate-800">
                  <span className="text-2xl">⚡</span>
                  <span>AI &amp; Happiness-Driven</span>
                </div>
                <ul className="divide-y divide-slate-800/80">
                  <li className="py-4 first:pt-4 flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Hemat banyak waktu dalam mengerjakan tugas repetitif</span>
                  </li>
                  <li className="py-4 flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Ubah wellbeing karyawan menjadi keunggulan bisnis yang terukur</span>
                  </li>
                  <li className="py-4 flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Jadikan AI co-pilot strategis untuk keputusan yang lebih cepat &amp; tajam</span>
                  </li>
                  <li className="py-4 flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Jaga top performer Anda pada performa terbaiknya tanpa perlu takut turnover tinggi</span>
                  </li>
                </ul>
              </div>
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
