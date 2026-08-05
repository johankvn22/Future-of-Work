import React from 'react';
import { X, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { useContent } from '../data/ContentContext';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
  onOpenRegister?: (pkgId?: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoUrl,
  title,
  onClose,
  onOpenRegister,
}) => {
  if (!isOpen) return null;

  const { content } = useContent();
  const VIDEO_LINKS = content.videoLinks;

  const isInstagram = videoUrl.includes('instagram.com');
  
  // Format embed URL for Instagram Reel if needed
  let embedUrl = videoUrl;
  if (isInstagram && !videoUrl.includes('/embed')) {
    const match = videoUrl.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
    if (match && match[1]) {
      embedUrl = `https://www.instagram.com/reel/${match[1]}/embed/`;
    }
  }

  const handleRegisterClick = () => {
    onClose();
    if (onOpenRegister) {
      onOpenRegister('onsite');
    } else {
      const formElement = document.getElementById('daftar');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const matchedVideo = (Object.values(VIDEO_LINKS) as Array<{ url?: string; embedUrl?: string; videoSrc?: string; thumbnailSrc?: string }>).find((v) => v.url === videoUrl || v.embedUrl === videoUrl);
  const videoToPlay = matchedVideo?.videoSrc;
  const posterToUse = matchedVideo?.thumbnailSrc;

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
        <div className="relative w-full h-[550px] bg-black flex items-center justify-center overflow-hidden">
          {videoToPlay ? (
            <video
              src={videoToPlay}
              poster={posterToUse}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> MAXY Academy Reel
            </span>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-400 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Buka di Instagram Reel ↗
            </a>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handleRegisterClick}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-md"
            >
              Lanjut ke Pendaftaran
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white px-2 py-1.5"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

