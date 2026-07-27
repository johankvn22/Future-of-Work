import React from 'react';
import { SPEAKERS } from '../data/landingData';
import { Award, UserCheck, ShieldCheck } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  return (
    <section id="pemateri" className="py-16 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-[#EFF4FF] text-[#1B4FD8] font-display font-extrabold text-xs uppercase tracking-[0.1em] px-4 py-1.5 rounded-full inline-block">
            Pemateri
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0F172A]">
            Tiga pakar. <span className="text-[#1B4FD8]">Tiga perspektif yang saling melengkapi.</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Dua dimensi transformasi dibawakan langsung oleh kombinasi unik Chief Happiness Officer &amp; AI Experts berpengalaman melatih 100+ organisasi.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Enlarged Speaker Photo / Initials Badge */}
                <div className="relative w-full h-72 sm:h-80 mb-6">
                  {speaker.imageUrl ? (
                    <div className="w-full h-full rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950 relative">
                      <img
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0B1628] via-[#132038] to-[#1B2C4A] text-[#F59E0B] font-display font-extrabold text-6xl flex items-center justify-center shadow-md border border-slate-200">
                      {speaker.initials}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-[#0B1628] p-2.5 rounded-full border border-slate-700 text-[#34D399] shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-extrabold text-[#0F172A] mb-1">
                  {speaker.name}
                </h3>

                <p className="text-xs font-display font-bold text-[#1B4FD8] uppercase tracking-wider mb-3">
                  {speaker.role}
                </p>

                <div className="inline-flex items-center gap-1.5 bg-[#F8FAFC] text-slate-600 text-xs font-medium px-3 py-1 rounded-full border border-slate-200 mb-4">
                  <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{speaker.cert}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-center gap-1 font-semibold">
                <UserCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Mentoring &amp; Live Q&amp;A Session</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
