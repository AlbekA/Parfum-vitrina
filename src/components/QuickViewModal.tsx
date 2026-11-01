import React, { useEffect } from 'react';
import { Perfume } from '../types';
import { X, Clock, Wind, CheckCircle2 } from 'lucide-react';

interface QuickViewModalProps {
  perfume: Perfume | null;
  isOpen: boolean;
  onClose: () => void;
  onOrderWhatsApp: (perfume: Perfume) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  perfume,
  isOpen,
  onClose,
  onOrderWhatsApp,
}) => {
  // Close on ESC key & manage body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !perfume) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-perfume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
    >
      {/* Backdrop overlay (clicking closes modal) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1A1918]/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Modal Dialog Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FAF9F6] border border-[#E6E1D8] shadow-2xl rounded-xs overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col md:flex-row"
      >
        {/* Close Button [X] */}
        <button
          onClick={onClose}
          aria-label="Закрыть окно"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-[#FAF9F6]/90 hover:bg-[#EFECE5] text-[#1A1918] transition-colors border border-[#DDD7CB] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Enlarged Bottle Photo */}
        <div className="relative md:w-1/2 bg-[#F3EFE7] min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden p-6 sm:p-8 border-b md:border-b-0 md:border-r border-[#E6E1D8]">
          <img
            src={perfume.image}
            alt={`${perfume.brand} — ${perfume.name}`}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallback) {
                target.dataset.fallback = 'true';
                const nameMap: Record<string, string> = {
                  'ambre-epice': 'santal_ambre.jpg',
                  'ambre-epice-50': 'santal_ambre.jpg',
                  'echoes-of-flame': 'noir_cypress.jpg',
                  'echoes-of-flame-extrait': 'noir_cypress.jpg',
                  'reverie-du-midi': 'rose_reverie.jpg',
                  'reverie-du-midi-extrait': 'rose_reverie.jpg',
                  'aura-absolue': 'vanille_aura.jpg',
                  'aura-absolue-discovery': 'vanille_aura.jpg'
                };
                target.src = `/images/perfumes/${nameMap[perfume.id] || 'santal_ambre.jpg'}`;
              }
            }}
            className="w-full h-auto max-h-[460px] object-contain drop-shadow-md select-none transition-transform duration-500 hover:scale-[1.02]"
          />
          {perfume.isBestseller && (
            <div className="absolute bottom-4 left-4 bg-[#1A1918] text-[#FAF9F6] text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
              Бестселлер коллекции
            </div>
          )}
        </div>

        {/* Right Column: Detailed Fragrance Information */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto">
          {/* Brand & Volume Header */}
          <div className="flex items-center justify-between text-xs text-[#7A7469] mb-1">
            <span className="tracking-[0.25em] uppercase font-medium text-[#8A847A]">
              {perfume.brand}
            </span>
            <span className="font-mono uppercase tracking-wider text-[11px]">
              {perfume.volume} · {perfume.concentration}
            </span>
          </div>

          <h2
            id="modal-perfume-title"
            className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1918] mb-2 leading-tight"
          >
            {perfume.name}
          </h2>

          <p className="text-sm text-[#6C665C] font-light leading-relaxed mb-6">
            {perfume.description}
          </p>

          {/* Olfactory Pyramid (Пирамида аромата) */}
          <div className="bg-[#F4F1EA] p-4 rounded-xs border border-[#E6E1D8] mb-6">
            <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#1A1918] font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B6B3E]"></span>
              Пирамида аромата
            </h4>

            <div className="space-y-2.5 text-xs">
              {/* Top Notes */}
              <div>
                <span className="text-[#8A847A] uppercase text-[10px] tracking-wider block font-medium">
                  Верхние ноты (Первое звучание)
                </span>
                <span className="text-[#1A1918] font-normal">
                  {perfume.pyramid.top.join(' · ')}
                </span>
              </div>

              {/* Heart Notes */}
              <div>
                <span className="text-[#8A847A] uppercase text-[10px] tracking-wider block font-medium">
                  Ноты сердца (Душа композиции)
                </span>
                <span className="text-[#1A1918] font-normal">
                  {perfume.pyramid.heart.join(' · ')}
                </span>
              </div>

              {/* Base Notes */}
              <div>
                <span className="text-[#8A847A] uppercase text-[10px] tracking-wider block font-medium">
                  Шлейф & Базовые ноты
                </span>
                <span className="text-[#1A1918] font-normal">
                  {perfume.pyramid.base.join(' · ')}
                </span>
              </div>
            </div>
          </div>

          {/* Longevity & Sillage stats */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-[#5A5449]">
            <div className="flex items-center gap-2 p-2.5 bg-[#FAF9F6] border border-[#E6E1D8]">
              <Clock className="w-4 h-4 text-[#8B6B3E] shrink-0" />
              <div>
                <span className="block text-[10px] text-[#8A847A] uppercase tracking-wider">Стойкость</span>
                <span className="font-medium text-[#1A1918]">{perfume.longevity}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#FAF9F6] border border-[#E6E1D8]">
              <Wind className="w-4 h-4 text-[#8B6B3E] shrink-0" />
              <div>
                <span className="block text-[10px] text-[#8A847A] uppercase tracking-wider">Шлейф</span>
                <span className="font-medium text-[#1A1918]">{perfume.sillage}</span>
              </div>
            </div>
          </div>

          {/* Pricing & Duplicate WhatsApp Button */}
          <div className="mt-auto pt-4 border-t border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto text-left">
              <span className="text-[10px] uppercase tracking-wider text-[#9A9386] block">Стоимость флакона</span>
              <div className="text-2xl font-mono font-medium text-[#1A1918] tabular-nums">
                {perfume.formattedPrice} <span className="text-sm font-normal text-[#666055]">{perfume.currency}</span>
              </div>
            </div>

            {/* Duplicate WhatsApp order button */}
            <button
              onClick={() => onOrderWhatsApp(perfume)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1918] hover:bg-[#2F2C29] text-[#FAF9F6] text-xs uppercase tracking-[0.15em] font-medium rounded-xs transition-colors cursor-pointer"
            >
              <svg 
                className="w-4 h-4 fill-current text-[#4ADE80]" 
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.585 1.761.815 2.792.815 3.182 0 5.769-2.587 5.769-5.767 0-3.18-2.587-5.767-5.769-5.767zm3.364 8.163c-.14.394-.741.748-1.03.784-.28.035-.634.053-1.026-.073-.243-.078-.553-.191-1.004-.388-1.921-.839-3.161-2.775-3.256-2.903-.096-.128-.779-1.037-.779-1.977 0-.94.492-1.401.666-1.593.175-.192.383-.24.51-.24.127 0 .256.002.368.007.118.006.277-.044.433.332.161.387.551 1.344.6 1.444.049.1.082.217.016.347-.066.13-.099.211-.197.325-.098.114-.207.255-.296.342-.099.096-.202.201-.087.398.115.197.511.843 1.096 1.364.753.671 1.388.878 1.585.975.197.097.312.083.427-.049.115-.132.492-.573.623-.769.131-.197.262-.164.443-.098.18.066 1.148.541 1.345.64.197.098.328.147.377.23.049.082.049.476-.091.87z" />
              </svg>
              <span>Заказать в WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
