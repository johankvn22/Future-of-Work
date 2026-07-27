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
    <section className="py-16 lg:py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
            Evaluasi Kritis
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
            Waktu Anda habis. Model kepemimpinan tradisional <span className="text-rose-600">resmi kedaluwarsa.</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            Mari lihat realita di lapangan hari ini — dan kenali mana yang sedang terjadi di organisasi Anda.
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {REALITA_PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-display font-bold text-[#0F172A] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Comparison Table: Manajemen Konvensional vs AI & Happiness-Driven */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
              Pilihan Ada di Tangan Anda
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0F172A] tracking-tight">
              Transformasi Cara Kerja Eksekutif &amp; Management
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Manajemen Konvensional */}
            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#991B1B] font-display font-extrabold text-xl pb-4 border-b border-[#FECACA]">
                  <span className="text-2xl">😮‍💨</span>
                  <span>Manajemen Konvensional</span>
                </div>
                <ul className="divide-y divide-[#FECACA]">
                  <li className="py-3.5 first:pt-4 flex items-start gap-3 text-sm text-[#7F1D1D] leading-relaxed font-medium">
                    <X className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Mengorbankan banyak waktu untuk bekerja manual dalam analisis &amp; tugas repetitif</span>
                  </li>
                  <li className="py-3.5 flex items-start gap-3 text-sm text-[#7F1D1D] leading-relaxed font-medium">
                    <X className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Mengorbankan kesejahteraan karyawan demi target jangka pendek</span>
                  </li>
                  <li className="py-3.5 flex items-start gap-3 text-sm text-[#7F1D1D] leading-relaxed font-medium">
                    <X className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Pengambilan keputusan selalu terhambat birokrasi dan olah data</span>
                  </li>
                  <li className="py-3.5 flex items-start gap-3 text-sm text-[#7F1D1D] leading-relaxed font-medium">
                    <X className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Membiarkan talenta terbaik burnout karena beban kerja tak terukur</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI & Happiness-Driven */}
            <div className="bg-[#0B1628] border border-[#1B2C4A] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4E8]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 text-[#F59E0B] font-display font-extrabold text-xl pb-4 border-b border-[#1B2C4A]">
                  <span className="text-2xl">⚡</span>
                  <span>AI &amp; Happiness-Driven</span>
                </div>
                <ul className="divide-y divide-white/10">
                  <li className="py-3.5 first:pt-4 flex items-start gap-3 text-sm text-[#DBE5F2] leading-relaxed font-medium">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span>Hemat banyak waktu dalam mengerjakan tugas repetitif</span>
                  </li>
                  <li className="py-3.5 flex items-start gap-3 text-sm text-[#DBE5F2] leading-relaxed font-medium">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span>Ubah wellbeing karyawan menjadi keunggulan bisnis yang terukur</span>
                  </li>
                  <li className="py-3.5 flex items-start gap-3 text-sm text-[#DBE5F2] leading-relaxed font-medium">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span>Jadikan AI co-pilot strategis untuk keputusan yang lebih cepat &amp; tajam</span>
                  </li>
                  <li className="py-3.5 flex items-start gap-3 text-sm text-[#DBE5F2] leading-relaxed font-medium">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span>Jaga top performer Anda pada performa terbaiknya tanpa perlu takut turnover tinggi</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* High Impact Quote Callout */}
        <div className="bg-gradient-to-r from-[#F59E0B] via-amber-400 to-[#F59E0B] text-slate-950 rounded-3xl p-8 lg:p-12 text-center relative shadow-xl">
          <Quote className="w-12 h-12 mx-auto mb-3 opacity-30 text-slate-950" />
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight max-w-3xl mx-auto leading-snug">
            &ldquo;Jawabannya bukan menambah jam kerja.<br />Jawabannya adalah leverage AI dengan benar.&rdquo;
          </h3>
          <p className="text-xs font-display font-bold opacity-80 mt-4 uppercase tracking-widest">
            — Principles of Modern Executive Leadership
          </p>
        </div>

      </div>
    </section>
  );
};
