import React from 'react';
import { TRUSTED_BRANDS } from '../data/landingData';
import { Award, Building2 } from 'lucide-react';
import holonIqBadge from '../assets/images/holoniq-badge.png';

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
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-6xl mx-auto mb-8">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 text-[#475569] font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex items-center justify-center min-h-[64px] min-w-[130px] max-w-[220px] text-center tracking-wide"
            >
              {brand.logo ? (
                <img src={brand.logo} alt={brand.name} className="h-8 sm:h-10 w-auto max-w-[160px] object-contain" />
              ) : (
                <span className="text-[#475569] px-2">{brand.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Award Highlight Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-[#0B1628] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md border border-white/10">
            <img src={holonIqBadge} alt="HolonIQ Southeast Asia EdTech 50" className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-sm shrink-0" />
            <span>Recognized by <strong>HolonIQ Southeast Asia EdTech Top 50</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
