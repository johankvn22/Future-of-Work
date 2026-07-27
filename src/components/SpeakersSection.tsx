import React from 'react';
import { SPEAKERS } from '../data/landingData';
import { Award, UserCheck, ShieldCheck } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  return (
    <section id="pemateri" className="py-16 lg:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Pakar &amp; Praktisi Industri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Pemateri Masterclass: <span className="text-amber-400">Pakar Kebahagiaan &amp; AI Strategist</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Dua dimensi transformasi dibawakan langsung oleh kombinasi unik Chief Happiness Officer &amp; AI Experts berpangalaman melatih 100+ organisasi.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 text-center transition-all hover:scale-[1.01] flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Speaker Avatar / Initials Badge */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-black text-3xl flex items-center justify-center shadow-xl shadow-amber-500/20 group-hover:scale-105 transition-transform border-2 border-amber-400/40">
                    {speaker.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-slate-950 p-1.5 rounded-full border border-slate-800 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-1">
                  {speaker.name}
                </h3>

                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                  {speaker.role}
                </p>

                <div className="inline-flex items-center gap-1.5 bg-slate-950 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-800 mb-4">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{speaker.cert}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mentoring &amp; Live Q&amp;A Session</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
