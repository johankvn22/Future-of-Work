import React from 'react';
import { EVENT_DETAILS } from '../data/landingData';
import { MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-base flex items-center justify-center">
                M
              </div>
              <span className="text-xl font-extrabold text-white">
                MAXY <span className="text-amber-400">ACADEMY</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Driven by AI. Led by Humanity. Program pengembangan talenta eksekutif &amp; adopsi AI di Indonesia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY,%20saya%20ingin%20tanya%20mengenai%20kelas%20The%20Future%20of%20Work`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Admin ({EVENT_DETAILS.adminName} · {EVENT_DETAILS.adminPhone})
            </a>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> HolonIQ SEA Top 50
            </span>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 MAXY Academy. All rights reserved. Registered Trademark.
          </p>
          <div className="flex items-center gap-4">
            <span>Jakarta · Indonesia</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Indonesian Leaders
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
