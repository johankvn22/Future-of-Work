import React, { useState } from 'react';
import { useContent } from '../data/ContentContext';
import { Deliverable } from '../types';
import { CheckCircle2, Copy, Check, FileText, ArrowRight, X, Sparkles, Download } from 'lucide-react';

export const DeliverablesSection: React.FC = () => {
  const { content } = useContent();
  const DELIVERABLES = content.deliverables;
  const [activeDeliverable, setActiveDeliverable] = useState<Deliverable | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="deliverables" className="py-20 lg:py-28 bg-[#071325] text-white relative border-b border-[#1A2942]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <span className="bg-[#00C4E8]/15 text-[#00C4E8] font-display font-extrabold text-xs uppercase tracking-[0.15em] px-5 py-2 rounded-full inline-block shadow-sm">
            ROI YANG LANGSUNG TERLIHAT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Anda pulang membawa deliverables, bukan teori.
          </h2>
          <p className="text-[#8B9DB7] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed pt-2">
            Dalam 2 hari, Anda tidak hanya <em className="text-white font-semibold not-italic italic">tahu</em> cara membangun tim yang happily productive — Anda pulang membawa sistemnya, siap jalan besok pagi.
          </p>
        </div>

        {/* 8 Deliverables Grid (3-Column Layout matching screenshot) */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mb-16">
          {DELIVERABLES.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveDeliverable(item)}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] bg-[#0D1D35]/90 border border-[#1E304F] hover:bg-[#112544] hover:border-[#00C4E8]/50 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group shadow-lg flex items-start gap-3.5 text-left"
              title="Klik untuk lihat preview template & prompt"
            >
              <span className="text-[#00C4E8] font-extrabold text-lg shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                ✓
              </span>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#00C4E8] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8B9DB7] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Glowing Orange CTA Button at bottom */}
        <div className="text-center flex justify-center">
          <a
            href="#daftar"
            className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A1628] font-display font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-[0_0_40px_rgba(245,158,11,0.35)] hover:shadow-[0_0_55px_rgba(245,158,11,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide"
          >
            Daftar &amp; Bawa Pulang Sistemnya &rarr;
          </a>
        </div>

        {/* Deliverable Preview Drawer/Modal */}
        {activeDeliverable && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
              
              <button
                onClick={() => setActiveDeliverable(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <Sparkles className="w-3.5 h-3.5" /> Live Masterclass Deliverable Sample
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {activeDeliverable.title}
                </h3>

                <p className="text-sm text-slate-300">
                  {activeDeliverable.description}
                </p>

                {/* Sample Code / Template Content Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed relative">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      Preview Content
                    </span>
                    <button
                      onClick={() => handleCopy(activeDeliverable.sampleContent)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded flex items-center gap-1 transition-colors"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copied ? 'Tersalin!' : 'Salin Text'}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-xs text-slate-300">
                    {activeDeliverable.sampleContent}
                  </pre>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    Full editable version diberikan saat mengikuti kelas.
                  </span>
                  <button
                    onClick={() => setActiveDeliverable(null)}
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Tutup Preview
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
