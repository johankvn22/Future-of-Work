import React from 'react';
import { TRUSTED_BRANDS } from '../data/landingData';
import { Award, Building2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-[#F8FAFC] border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-display font-extrabold tracking-[0.14em] text-[#94A3B8] uppercase">
            <Building2 className="w-4 h-4 text-[#F59E0B]" />
            DIPERCAYA OLEH 100+ PERUSAHAAN &amp; ORGANISASI TERKEMUKA
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Telah dipercaya oleh enterprise, BUMN, hingga institusi terdepan di Indonesia:
          </p>
        </div>

        {/* Brand Chips Carousel / Grid */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-5xl mx-auto mb-8">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 text-[#475569] font-display font-bold text-xs sm:text-sm px-4.5 py-2.5 rounded-lg shadow-xs hover:border-slate-300 transition-all text-center tracking-wide"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Award Highlight Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-[#0B1628] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md">
            <Award className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <span>Recognized by <strong>HolonIQ Southeast Asia EdTech Top 50</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
