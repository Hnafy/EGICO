import React, { useEffect, useState } from 'react';
import { X, Plus, Minus, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductImage({ images, index, alt, className }) {
  const [failed, setFailed] = useState(false);
  const [base, ...rest] = images;
  const fallback = rest.find(Boolean) || base;
  if (!images.length) return null;
  const src = failed ? fallback : images[index];
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export function Lightbox({ images, index, title, onClose, onNavigate }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setZoom(1);
  }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowRight') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length, onClose, onNavigate]);

  const onWheel = (e) => {
    setZoom((z) => Math.min(3, Math.max(1, z + (e.deltaY > 0 ? -0.25 : 0.25))));
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 left-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="إغلاق"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex flex-col items-center gap-4 select-none" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 text-white">
          <button onClick={() => setZoom((z) => Math.min(3, z + 0.25))} className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer" aria-label="تكبير">
            <Plus className="w-4 h-4" />
          </button>
          <span className="text-sm font-bold w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.max(1, z - 0.25))} className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer" aria-label="تصغير">
            <Minus className="w-4 h-4" />
          </button>
          <button onClick={() => setZoom(1)} className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer" aria-label="إعادة تعيين التكبير">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 w-full justify-center" onWheel={onWheel}>
          <button
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            className="hidden sm:flex p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="السابق"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <img
            key={`${images[index]}-${index}`}
            src={images[index]}
            alt={title}
            className="max-w-full max-h-[72vh] object-contain rounded-lg bg-white/5 transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
          />

          <button
            onClick={() => onNavigate((index + 1) % images.length)}
            className="hidden sm:flex p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="التالي"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <p className="text-white/80 text-xs font-medium">
          {index + 1} / {images.length} — استخدم عجلة الفأرة للتكبير والإطاحة للتنقل
        </p>
      </div>
    </div>
  );
}