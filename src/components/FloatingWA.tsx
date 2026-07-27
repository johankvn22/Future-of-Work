import React from 'react';
import { EVENT_DETAILS } from '../data/landingData';
import { MessageCircle } from 'lucide-react';

export const FloatingWA: React.FC = () => {
  const waUrl = `https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY%20(${EVENT_DETAILS.adminName}),%20saya%20ingin%20tanya%20mengenai%20kelas%20The%20Future%20of%20Work.`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-3.5 rounded-full shadow-2xl shadow-emerald-500/40 transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-extrabold text-xs pl-0 group-hover:pl-2">
        Chat Admin Felicia
      </span>
    </a>
  );
};
