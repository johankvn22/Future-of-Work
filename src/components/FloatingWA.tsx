import React from 'react';
import { useContent } from '../data/ContentContext';
import { MessageCircle } from 'lucide-react';

export const FloatingWA: React.FC = () => {
  const { content } = useContent();
  const EVENT_DETAILS = content.eventDetails;
  const waUrl = `https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY%20(${EVENT_DETAILS.adminName}),%20saya%20ingin%20tanya%20mengenai%20kelas%20The%20Future%20of%20Work.`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-xl shadow-emerald-500/40 transition-all hover:scale-108 flex items-center justify-center group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-display font-extrabold text-xs pl-0 group-hover:pl-2">
        Chat Admin Felicia
      </span>
    </a>
  );
};
