import React, { useState } from 'react';
import { DELIVERABLES } from '../data/landingData';
import { Deliverable } from '../types';
import { CheckCircle2, Copy, Check, FileText, ArrowRight, X, Sparkles, Download } from 'lucide-react';

export const DeliverablesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'happiness' | 'ai' | 'strategy'>('all');
  const [activeDeliverable, setActiveDeliverable] = useState<Deliverable | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredDeliverables = selectedCategory === 'all'
    ? DELIVERABLES
    : DELIVERABLES.filter(d => d.category === selectedCategory);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="deliverables" className="py-16 lg:py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Bukan Teori. Semua Deliverables.
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Semua yang Anda Bawa Pulang dari <span className="text-amber-400">2 Hari Ini</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Anda pulang membawa sistem, survei, playbook, dan prompt library yang siap dijalankan di perusahaan Anda besok pagi.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Semua Deliverables (7)' },
            { id: 'happiness', label: 'Happiness & PERMA' },
            { id: 'ai', label: 'AI Tools & Prompts' },
            { id: 'strategy', label: 'Strategy & ROI Deck' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                selectedCategory === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDeliverables.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveDeliverable(item)}
              className="bg-slate-950/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all hover:scale-[1.01] cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                    Klik untuk preview
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span>Preview Template &amp; Prompt</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
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
