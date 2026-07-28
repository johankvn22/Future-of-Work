import React, { useState } from 'react';
import { useContent } from '../data/ContentContext';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { content } = useContent();
  const FAQ_ITEMS = content.faqItems;
  const EVENT_DETAILS = content.eventDetails;
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQ_ITEMS.filter(
    item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0F172A]">
            Pertanyaan <span className="text-[#1B4FD8]">Umum</span>
          </h2>
          <p className="text-slate-600 text-base">
            Informasi lengkap seputar kualifikasi peserta, persiapan tools, hingga invoice perusahaan.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan... (misal: non-teknis, invoice, laptop, onsite)"
            className="w-full bg-white border border-slate-200 focus:border-[#1B4FD8] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-colors shadow-xs"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-[#0F172A] hover:text-[#1B4FD8] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#1B4FD8] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#1B4FD8]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-400 text-sm font-medium">
              Tidak ditemukan pertanyaan dengan kata kunci &ldquo;{searchQuery}&rdquo;.
            </div>
          )}
        </div>

        {/* Direct Contact Option */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-xs">
          <p className="text-sm text-slate-600 font-medium">
            Punya pertanyaan lain yang belum terjawab?
          </p>
          <a
            href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Felicia,%20saya%20punya%20pertanyaan%20mengenai%20kelas%20The%20Future%20of%20Work`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-display font-extrabold bg-[#0B1628] hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Hubungi Admin MAXY ({EVENT_DETAILS.adminName} · {EVENT_DETAILS.adminPhone})
          </a>
        </div>

      </div>
    </section>
  );
};
