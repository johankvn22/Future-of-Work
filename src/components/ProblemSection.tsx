import React from 'react';
import { REALITA_PAIN_POINTS } from '../data/landingData';
import { Flame, UserX, Cpu, Clock, AlertTriangle, Check, X, Quote, TrendingDown, Sparkles, ShieldAlert } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-rose-600" />;
      case 'UserX': return <UserX className="w-6 h-6 text-amber-600" />;
      case 'TrendingDown': return <TrendingDown className="w-6 h-6 text-orange-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-indigo-600" />;
      default: return <AlertTriangle className="w-6 h-6 text-amber-500" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return 'bg-rose-50 border-rose-100';
      case 'UserX': return 'bg-amber-50 border-amber-100';
      case 'TrendingDown': return 'bg-orange-50 border-orange-100';
      case 'Clock': return 'bg-indigo-50 border-indigo-100';
      default: return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full inline-block border border-[#1B4FD8]/10 shadow-xs">
            Evaluasi Kritis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Waktu Anda habis. Model kepemimpinan tradisional <span className="text-rose-600">resmi kedaluwarsa.</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed pt-1">
            Mari lihat realita di lapangan hari ini — dan kenali mana yang sedang terjadi di organisasi Anda.
          </p>
        </div>

        {/* 4 Pain Point Cards (2x2 Executive Grid without emojis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24">
          {REALITA_PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-5">
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs ${getIconBg(item.icon)}`}>
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#0F172A] leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Comparison Table: Manajemen Konvensional vs AI & Happiness-Driven */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-12 mb-20 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full inline-block">
              Pilihan Ada di Tangan Anda
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
              Transformasi Cara Kerja Eksekutif &amp; Management
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Manajemen Konvensional (Professional Warning Tone, No Emojis) */}
            <div className="bg-[#FFF8F8] border border-rose-200/80 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-sm relative">
              <div>
                <div className="flex items-center gap-3 text-slate-900 font-display font-bold text-xl pb-5 border-b border-rose-200/80">
                  <span className="w-3.5 h-3.5 rounded-full bg-rose-500 inline-block shrink-0 ring-4 ring-rose-100"></span>
                  <span className="text-rose-950 text-xl font-black">Manajemen Konvensial</span>
                </div>
                <ul className="divide-y divide-rose-100/80 mt-2">
                  <li className="py-4 first:pt-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black shrink-0 mt-0.5 text-xs">✕</div>
                    <span>Mengorbankan banyak waktu untuk bekerja manual dalam analisis &amp; tugas repetitif</span>
                  </li>
                  <li className="py-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black shrink-0 mt-0.5 text-xs">✕</div>
                    <span>Mengorbankan kesejahteraan karyawan demi target jangka pendek</span>
                  </li>
                  <li className="py-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black shrink-0 mt-0.5 text-xs">✕</div>
                    <span>Pengambilan keputusan selalu terhambat birokrasi dan olah data</span>
                  </li>
                  <li className="py-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black shrink-0 mt-0.5 text-xs">✕</div>
                    <span>Membiarkan talenta terbaik burnout karena beban kerja tak terukur</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-rose-200/60 text-xs font-semibold text-rose-700 tracking-wide uppercase">
                Status: Rentan Tertinggal &amp; Stagnan
              </div>
            </div>

            {/* AI & Happiness-Driven (Executive High-Tech Gold/Navy Card, No Emojis) */}
            <div className="bg-[#081526] border-2 border-[#00C4E8]/40 hover:border-[#00C4E8] rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden text-white transition-all duration-300">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#00C4E8]/12 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#1A2D4A] relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#00C4E8] inline-block shrink-0 ring-4 ring-[#00C4E8]/20 shadow-[0_0_12px_#00C4E8]"></span>
                    <span className="text-[#F59E0B] font-display font-black text-xl tracking-wide">AI &amp; Happiness-Driven</span>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-extrabold text-[#00C4E8] bg-[#00C4E8]/10 px-3 py-1 rounded-full border border-[#00C4E8]/30">
                    RECOMMENDED MODEL
                  </span>
                </div>
                <ul className="divide-y divide-white/10 mt-2 relative z-10">
                  <li className="py-4 first:pt-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                    <span>Hemat banyak waktu dalam mengerjakan tugas repetitif</span>
                  </li>
                  <li className="py-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                    <span>Ubah wellbeing karyawan menjadi keunggulan bisnis yang terukur</span>
                  </li>
                  <li className="py-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                    <span>Jadikan AI co-pilot strategis untuk keputusan yang lebih cepat &amp; tajam</span>
                  </li>
                  <li className="py-4 flex items-start gap-3.5 text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                    <span>Jaga top performer Anda pada performa terbaiknya tanpa perlu takut turnover tinggi</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1A2D4A] flex items-center justify-between text-xs font-bold text-[#34D399] tracking-wider uppercase relative z-10">
                <span>Status: Agility Tinggi &amp; Siap Masa Depan</span>
                <span className="flex items-center gap-1 text-[#00C4E8] font-black">Ready for 2026 &rarr;</span>
              </div>
            </div>

          </div>
        </div>

        {/* High Impact Quote Callout */}
        <div className="bg-gradient-to-r from-[#F59E0B] via-amber-400 to-[#F59E0B] text-slate-950 rounded-3xl p-8 sm:p-12 text-center relative shadow-xl">
          <Quote className="w-12 h-12 mx-auto mb-4 opacity-30 text-slate-950" />
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight max-w-4xl mx-auto leading-snug">
            &ldquo;Jawabannya bukan menambah jam kerja.<br />Jawabannya adalah leverage AI dengan benar.&rdquo;
          </h3>
          <p className="text-xs sm:text-sm font-display font-extrabold opacity-80 mt-5 uppercase tracking-widest">
            — Principles of Modern Executive Leadership
          </p>
        </div>

      </div>
    </section>
  );
};
