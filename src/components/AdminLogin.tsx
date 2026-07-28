import React, { useState } from 'react';
import { ShieldCheck, Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToSite: () => void;
}

const ADMIN_PASSWORD = 'maxy2026';

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onBackToSite }) => {
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('fow_admin_auth', 'true');
      onLoginSuccess();
    } else {
      setError('Password salah. Coba lagi.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-[#060E1C] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <button
          onClick={onBackToSite}
          className="flex items-center gap-2 text-slate-400 hover:text-white text-xs font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Landing Page
        </button>

        <div className="bg-[#0D1B2E] border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#1B4FD8]/20 border border-[#1B4FD8]/40 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7 text-[#1B4FD8]" />
            </div>
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            <p className="text-slate-400 text-xs mt-1">The Future of Work · MAXY Academy</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password Admin</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Masukkan password admin..."
                  autoFocus
                  className="w-full bg-slate-900 border border-slate-700 focus:border-[#1B4FD8] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {error && <p className="text-red-400 text-xs mt-1.5 font-medium">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B4FD8] hover:bg-blue-600 text-white font-bold text-sm py-3 rounded-xl transition-colors"
            >
              Masuk ke Admin Panel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
