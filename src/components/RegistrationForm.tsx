import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/landingData';
import { MessageCircle, CheckCircle, ShieldCheck, Sparkles, Building2, User, Phone, Mail, Briefcase } from 'lucide-react';

interface RegistrationFormProps {
  initialPackage?: string;
  initialPax?: number;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  initialPackage = 'onsite',
  initialPax = 1
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('HR Manager / People & Culture');
  const [pkg, setPkg] = useState(initialPackage);
  const [pax, setPax] = useState(initialPax);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) setPkg(initialPackage);
    if (initialPax) setPax(initialPax);
  }, [initialPackage, initialPax]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedPkgName = pkg === 'onsite'
      ? 'Paket Onsite Eksklusif (Rp 2.500.000 / pax)'
      : pkg === 'online'
      ? 'Paket Online (Rp 1.800.000 / pax)'
      : 'In-House Corporate Proposal';

    const message =
`Halo Admin MAXY Academy (Felicia),
Saya ingin mendaftar kelas *The Future of Work: How AI is Shaping Productivity & Workplace Happiness* (${EVENT_DETAILS.dateText}).

Data Pendaftar:
• Nama Lengkap: ${name}
• Nomor WhatsApp: ${phone}
• Email: ${email}
• Perusahaan: ${company || '-'}
• Jabatan: ${role}
• Pilihan Paket: ${selectedPkgName}
• Jumlah Peserta: ${pax} Pax

Mohon dikirimkan konfirmasi pendaftaran, invoice resmi, dan instruksi langkah selanjutnya. Terima kasih!`;

    const waUrl = `https://wa.me/${EVENT_DETAILS.rawPhone}?text=${encodeURIComponent(message)}`;
    
    // Open WA in new tab
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="daftar" className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
              Formulir Pendaftaran Resmi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Amankan Executive Program
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Isi data di bawah ini — tim MAXY Academy akan mengirimkan rincian invoice &amp; konfirmasi pendaftaran dalam 1×24 jam kerja.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="block text-white">Pendaftaran Terkirim via WhatsApp!</strong>
                <span>Jika WhatsApp tidak terbuka otomatis, silakan hubungi Felicia di {EVENT_DETAILS.adminPhone}.</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" /> Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso, M.M."
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              {/* Phone / WA */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" /> Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08123456789"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" /> Email Perusahaan *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="budi@perusahaan.com"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" /> Nama Perusahaan
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="PT. Perusahaan Indonesia"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" /> Jabatan / Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                >
                  <option value="HR Manager / People & Culture">HR Manager / People &amp; Culture</option>
                  <option value="Direktur / C-Level">Direktur / C-Level</option>
                  <option value="Founder / Business Owner">Founder / Business Owner</option>
                  <option value="Division Head / Manager">Division Head / Manager</option>
                  <option value="Konsultan HR / Trainer">Konsultan HR / Trainer</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              {/* Package */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Pilihan Paket Kelas
                </label>
                <select
                  value={pkg}
                  onChange={(e) => setPkg(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                >
                  <option value="onsite">Paket Onsite Eksklusif — Rp 2.500.000 / pax ⭐</option>
                  <option value="online">Paket Online (Zoom Live) — Rp 1.800.000 / pax</option>
                  <option value="inhouse">In-House Corporate Training (Custom Proposal)</option>
                </select>
              </div>

            </div>

            {/* Jumlah Pax */}
            <div className="pt-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Jumlah Peserta (Pax):
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 5, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPax(num)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      pax === num
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-900 text-slate-300 border border-slate-800'
                    }`}
                  >
                    {num} Pax
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-slate-950 fill-slate-950" />
                Daftar Langsung via WhatsApp ({EVENT_DETAILS.adminName})
              </button>

              <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Dokumen Invoice &amp; Kwitansi Resmi Perusahaan Tersedia</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
