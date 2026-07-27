import React, { useState } from 'react';
import { PRICING_PACKAGES, EVENT_DETAILS } from '../data/landingData';
import { Check, Star, Sparkles, Users, MessageCircle, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

interface PricingSectionProps {
  onOpenRegister: (pkgId?: string, pax?: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenRegister }) => {
  const [selectedPax, setSelectedPax] = useState<number>(1);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="harga" className="py-16 lg:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
            AMANKAN KURSI ANDA SEKARANG
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0F172A]">
            Investasi strategis untuk organisasi Anda
          </h2>
        </div>

        {/* Interactive Pax / Seat Calculator Switcher */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 max-w-xl mx-auto mb-12 shadow-xs text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-display font-extrabold text-[#1B4FD8] uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Kalkulator Simulasi Jumlah Peserta (Pax):</span>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            {[1, 2, 3, 5, 10].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedPax(num)}
                className={`w-9 h-9 rounded-lg font-display font-bold text-xs transition-all ${
                  selectedPax === num
                    ? 'bg-[#F59E0B] text-amber-950 shadow-sm scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {num}x
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500 font-medium">
            {selectedPax > 1 ? `Simulasi total biaya untuk ${selectedPax} peserta perusahaan Anda:` : 'Harga per 1 peserta:'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const totalPrice = pkg.pricePerPax * selectedPax;

            if (pkg.id === 'inhouse') {
              return (
                <div
                  key={pkg.id}
                  className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-display font-extrabold uppercase tracking-widest text-slate-500 bg-[#F8FAFC] px-3 py-1 rounded-md border border-slate-200">
                        Corporate In-House
                      </span>
                      <h3 className="text-2xl font-display font-extrabold text-[#0F172A] mt-3">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {pkg.location}
                      </p>
                    </div>

                    <div className="py-2 border-y border-slate-200">
                      <div className="text-xl font-display font-extrabold text-[#1B4FD8]">
                        Custom Proposal
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Disesuaikan jumlah divisi &amp; kebutuhan kurikulum khusus
                      </p>
                    </div>

                    <ul className="space-y-3 text-sm text-slate-700">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <a
                      href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY,%20saya%20ingin%20konsultasi%20In-House%20Corporate%20Training%20The%20Future%20of%20Work`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#0B1628] hover:bg-slate-800 text-white font-display font-extrabold text-sm py-3.5 rounded-xl border border-[#0B1628] transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      Konsultasi Corporate
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                  pkg.isRecommended
                    ? 'bg-white border-2 border-[#F59E0B] shadow-xl shadow-amber-500/10'
                    : 'bg-white border border-slate-200 shadow-xs'
                }`}
              >
                {/* Recommended Badge */}
                {pkg.isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-amber-950 text-xs font-display font-extrabold px-4 py-1 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1">
                    ★ RECOMMENDED
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-display font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#0B1628]">
                      {formatRupiah(totalPrice)}
                    </div>
                    <p className="text-xs text-[#94A3B8] mt-1 font-medium">
                      {pkg.location} {selectedPax > 1 ? `(${formatRupiah(pkg.pricePerPax)} / pax)` : ''}
                    </p>
                  </div>

                  {/* Feature & Bonus List combined in exact order matching screenshot */}
                  <ul className="space-y-3 text-sm text-slate-800 font-medium">
                    {pkg.id === 'onsite' ? (
                      <>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>Akses onsite 2 hari penuh di MAXY AI HUB, Jakarta</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>Semua benefit pada paket Online</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-[#B45309] font-semibold">
                          <span className="text-[#F59E0B] shrink-0">★</span>
                          <span>Bonus 10 pendaftar pertama: Free 1-on-1 Mentoring Session</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-[#B45309] font-semibold">
                          <span className="text-[#F59E0B] shrink-0">★</span>
                          <span>Bonus: Buku fisik &quot;Happiness at Work&quot; (senilai Rp 250.000)</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>Networking tatap muka sesama HR Leader &amp; Owner</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>Akses fasilitas premium MAXY AI HUB</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>Makan siang &amp; coffee break 2 hari</span>
                        </li>
                      </>
                    ) : (
                      pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <div className="pt-6 mt-6">
                  <button
                    onClick={() => onOpenRegister(pkg.id, selectedPax)}
                    className={`w-full font-display font-extrabold text-sm py-3.5 rounded-xl transition-all text-center ${
                      pkg.isRecommended
                        ? 'bg-[#F59E0B] hover:bg-amber-400 text-amber-950 shadow-md'
                        : 'border-1.5 border-[#0B1628] text-[#0B1628] hover:bg-[#0B1628] hover:text-white'
                    }`}
                  >
                    {pkg.id === 'onsite' ? 'Pilih Paket Onsite ⭐' : 'Pilih Paket Online'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate In-House Banner */}
        <div className="bg-[#F8FAFC] border border-dashed border-slate-300 rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs max-w-4xl mx-auto">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-display font-extrabold text-[#1B4FD8] uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Kebutuhan Korporat Lebih Besar?</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-[#0F172A]">
              Tersedia Paket In-House Corporate Training
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              Latih seluruh divisi di kantor Anda dengan kurikulum yang dikustomisasi sesuai industri dan tantangan spesifik perusahaan. Lengkap dengan proposal resmi &amp; NDA.
            </p>
          </div>

          <a
            href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY,%20saya%20tertarik%20dengan%20Proposal%20In-House%20Training%20The%20Future%20of%20Work`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-emerald-600 text-white font-display font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shrink-0 flex items-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Tanyakan Proposal Corporate
          </a>
        </div>

      </div>
    </section>
  );
};
