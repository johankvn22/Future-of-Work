import React from 'react';
import { TRUSTED_BRANDS } from '../data/landingData';
import { Award, Building2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-slate-900 border-b border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Building2 className="w-4 h-4 text-amber-400" />
            Dipercaya Oleh 100+ Perusahaan &amp; Organisasi Terkemuka
          </div>
          <p className="text-xs text-slate-400">
            Telah dipercaya oleh enterprise, BUMN, hingga institusi terdepan di Indonesia:
          </p>
        </div>

        {/* Brand Chips Carousel / Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto mb-8">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-200 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all text-center tracking-wide"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Award Highlight Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 text-amber-300 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Recognized by <strong>HolonIQ Southeast Asia EdTech Top 50</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
