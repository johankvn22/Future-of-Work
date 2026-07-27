import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/landingData';
import { MessageCircle, Menu, X, Clock, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: (pkgId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.countdownTargetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          expired: false
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Program', href: '#program' },
    { label: 'Deliverables', href: '#deliverables' },
    { label: 'Pemateri', href: '#pemateri' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Paket & Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Bar Announcement */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-xs font-semibold py-2 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            <span className="bg-slate-950 text-amber-400 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3 animate-pulse" /> HYBRID CLASS
            </span>
            <span>9–10 JUNI 2026 · 08.30–17.00 WIB · MAXY AI HUB, JAKARTA · SPECIAL PRICE FOR 10 EARLY REGISTER</span>
          </div>

          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            <Clock className="w-3.5 h-3.5 text-slate-900" />
            <span className="text-[11px] opacity-90 hidden md:inline">Penutupan Early Bird:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-xs bg-slate-950/80 text-amber-300 px-2 py-0.5 rounded">
              <span>{String(timeLeft.days).padStart(2, '0')}d</span>:
              <span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
              <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
              <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <header className={`sticky top-[33px] z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl' : 'bg-slate-900 border-b border-slate-800/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                M
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block leading-tight">
                  MAXY <span className="text-amber-400">ACADEMY</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium block">
                  Driven by AI. Led by Humanity.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Admin%20MAXY,%20saya%20ingin%20tanya%20mengenai%20kelas%20The%20Future%20of%20Work`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                Felicia (+62 821 4499 5255)
              </a>
              <button
                onClick={() => onOpenRegister('onsite')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-4 py-2 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Daftar via WhatsApp
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister('onsite');
                }}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center py-2.5 rounded-xl transition-colors"
              >
                Daftar via WhatsApp
              </button>
              <a
                href={`https://wa.me/${EVENT_DETAILS.rawPhone}?text=Halo%20Felicia,%20saya%20ingin%20tanya%20program%20The%20Future%20of%20Work`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-slate-300 border border-slate-700 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                Chat WhatsApp Felicia (+62 821 4499 5255)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
