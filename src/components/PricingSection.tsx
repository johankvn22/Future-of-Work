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
    <section id="harga" className="py-16 lg:py-24 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Investasi Strategis Perusahaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Pilih Paket &amp; <span className="text-amber-400">Amankan Slot Anda</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Pendaftaran dibuka untuk individu maupun perwakilan tim korporat. Tersedia invoice resmi dan dokumen pengadaan resmi untuk reimbursement kantor.
          </p>
        </div>

        {/* Interactive Pax / Seat Calculator Switcher */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-xl mx-auto mb-12 shadow-xl text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Kalkulator Simulasi Jumlah Peserta (Pax):</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            {[1, 2, 3, 5, 10].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedPax(num)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                  selectedPax === num
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {num}x
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400">
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
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                        Corporate In-House
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-3">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {pkg.location}
                      </p>
                    </div>

                    <div className="py-2 border-y border-slate-800">
                      <div className="text-xl font-bold text-amber-400">
                        Custom Proposal
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Disesuaikan jumlah divisi &amp; kebutuhan kurikulum khusus
                      </p>
                    </div>

                    <ul className="space-y-3 text-sm text-slate-300">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800">
                    <a
                      href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY,%20saya%20ingin%20konsultasi%20In-House%20Corporate%20Training%20The%20Future%20of%20Work`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-sm py-3.5 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      Konsultasi Corporate
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  pkg.isRecommended
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500 shadow-2xl shadow-amber-500/10'
                    : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Recommended Badge */}
                {pkg.isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-slate-950" /> RECOMMENDED ONSITE
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md border ${
                      pkg.isRecommended ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}>
                      {pkg.id === 'onsite' ? '2 Days Onsite Experience' : '2 Days Online Zoom'}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-3">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {pkg.location}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className="py-2 border-y border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-white">
                        {formatRupiah(totalPrice)}
                      </span>
                      {selectedPax > 1 && (
                        <span className="text-xs text-slate-400 font-medium">
                          ({formatRupiah(pkg.pricePerPax)} / pax)
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Termasuk sertifikat, dokumen invoice resmi &amp; deliverables
                    </p>
                  </div>

                  {/* Bonuses List (if onsite) */}
                  {pkg.bonuses && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 space-y-2">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Special Bonus Onsite:
                      </span>
                      {pkg.bonuses.map((bonus, bIdx) => (
                        <div key={bIdx} className="text-xs text-amber-200 font-medium flex items-center gap-1.5">
                          <span className="text-amber-400">★</span> {bonus}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features List */}
                  <ul className="space-y-3 text-sm text-slate-200">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenRegister(pkg.id, selectedPax)}
                    className={`w-full font-extrabold text-sm py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                      pkg.isRecommended
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20 hover:scale-[1.01]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white hover:border-slate-500 border border-slate-700'
                    }`}
                  >
                    Daftar {pkg.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate In-House Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Kebutuhan Korporat Lebih Besar?</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Tersedia Paket In-House Corporate Training
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Latih seluruh divisi di kantor Anda dengan kurikulum yang dikustomisasi sesuai industri dan tantangan spesifik perusahaan. Lengkap dengan proposal resmi &amp; NDA.
            </p>
          </div>

          <a
            href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY,%20saya%20tertarik%20dengan%20Proposal%20In-House%20Training%20The%20Future%20of%20Work`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            Tanyakan Proposal Corporate
          </a>
        </div>

      </div>
    </section>
  );
};
