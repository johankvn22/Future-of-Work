import React from 'react';
import { X, Sparkles, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoUrl,
  title,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-sm font-bold text-white truncate max-w-md">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-slate-950 flex items-center justify-center">
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-950 text-xs text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-1 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" /> Live Masterclass Experience — MAXY Academy
          </span>
          <button
            onClick={onClose}
            className="text-slate-300 font-bold hover:text-white"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
