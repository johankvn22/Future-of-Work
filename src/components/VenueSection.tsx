import React from 'react';
import { EVENT_DETAILS } from '../data/landingData';
import { MapPin, Calendar, Clock, Navigation, Wifi, Coffee, Users, ShieldCheck } from 'lucide-react';

export const VenueSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
            Lokasi &amp; Fasilitas Pelaksanaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0F172A]">
            Detail <span className="text-[#1B4FD8]">Executive Program</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Dilaksanakan di fasilitas AI HUB modern Jakarta Selatan dengan lingkungan pembelajaran eksklusif untuk para pemimpin perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-xs">
            
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#F59E0B] flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-display font-extrabold text-slate-500 uppercase tracking-wider block">Tanggal &amp; Waktu</span>
                  <h4 className="text-lg font-display font-bold text-[#0F172A]">{EVENT_DETAILS.dateText}</h4>
                  <p className="text-xs text-slate-600">{EVENT_DETAILS.timeText} (Full Day 2 Hari)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#1B4FD8] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-display font-extrabold text-slate-500 uppercase tracking-wider block">Lokasi Onsite Eksklusif</span>
                  <h4 className="text-lg font-display font-bold text-[#0F172A]">{EVENT_DETAILS.location}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{EVENT_DETAILS.fullAddress}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <Wifi className="w-5 h-5 text-[#16A34A] mx-auto mb-1" />
                  <span className="text-xs font-display font-bold text-[#0F172A] block">High-Speed WiFi</span>
                  <p className="text-[11px] text-slate-500">100 Mbps Dedicated</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <Coffee className="w-5 h-5 text-[#F59E0B] mx-auto mb-1" />
                  <span className="text-xs font-bold text-white block">Coffee Break &amp; Lunch</span>
                  <p className="text-[11px] text-slate-400">2x Coffee Break &amp; VIP Lunch</p>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Dokumen Pengadaan &amp; Invoice Resmi Perusahaan
              </span>
              <a
                href="https://maps.google.com/?q=MAXY+AI+HUB+Jakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-bold hover:underline flex items-center gap-1"
              >
                Google Maps <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Visual Location Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                MAXY AI HUB Experience
              </span>

              <h3 className="text-2xl font-extrabold text-white">
                Pusat Inovasi &amp; Networking AI Eksekutif
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Ruang kelas onsite kami dilengkapi workstation siap pakai, sarana diskusi interaktif, serta atmosfer networking nyaman bersama sesama pembuat keputusan dari berbagai industri.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Kapasitas terbatas untuk kenyamanan mentoring &amp; Q&amp;A</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>08.30 WIB Registration &amp; Executive Networking Coffee</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center relative z-10">
              <a
                href="#daftar"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm py-3.5 rounded-xl block transition-all shadow-lg shadow-amber-500/20"
              >
                Amankan Slot Pelatihan
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
