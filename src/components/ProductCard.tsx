import React from 'react';
import { Perfume } from '../types';
import { createWhatsAppUrl } from '../data/perfumes';
import { Eye, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  perfume: Perfume;
  onOpenQuickView: (perfume: Perfume) => void;
  onOrderWhatsApp: (perfume: Perfume) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  perfume,
  onOpenQuickView,
  onOrderWhatsApp,
}) => {
  const handleCardClick = () => {
    onOpenQuickView(perfume);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOrderWhatsApp(perfume);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex flex-col bg-[#FAF9F6] border border-[#E6E1D8] p-4 sm:p-5 transition-all duration-300 hover:border-[#1A1918] hover:shadow-xs cursor-pointer select-none"
    >
      {/* Top micro-meta: Volume/Concentration + Rating/Bestseller badge */}
      <div className="flex items-center justify-between text-[11px] text-[#7A7469] mb-3">
        <span className="font-mono tracking-wider uppercase">
          {perfume.volume} · {perfume.concentration}
        </span>
        <div className="flex items-center gap-1">
          {perfume.isBestseller && (
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#8B6B3E] mr-1.5">
              Édition
            </span>
          )}
          <span className="text-[#C5BBAA] text-[10px] tracking-widest">
            ★★★★★
          </span>
        </div>
      </div>

      {/* Flacon Image showcase */}
      <div className="relative aspect-3/4 w-full bg-[#F3EFE7]/50 overflow-hidden mb-4 rounded-xs flex items-center justify-center">
        <img
          src={perfume.image}
          alt={`${perfume.brand} — ${perfume.name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Quick View hover overlay cue */}
        <div className="absolute inset-0 bg-[#1A1918]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF9F6]/95 backdrop-blur-xs text-[11px] font-medium tracking-wider uppercase text-[#1A1918] shadow-sm rounded-xs transform translate-y-1 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#5A5449]" />
            Быстрый просмотр
          </span>
        </div>
      </div>

      {/* Brand & Name */}
      <div className="flex-1 flex flex-col">
        <div className="text-[11px] tracking-[0.2em] uppercase text-[#7D766A] font-medium mb-1">
          {perfume.brand}
        </div>
        <h3 className="text-lg sm:text-xl font-serif font-medium text-[#1A1918] leading-snug group-hover:text-[#4A453D] transition-colors mb-1.5">
          {perfume.name}
        </h3>
        
        {/* Subtitle / Key notes */}
        <p className="text-xs text-[#7A7469] font-light leading-relaxed mb-4 line-clamp-2">
          {perfume.subtitle}
        </p>

        {/* Price & Action Row */}
        <div className="mt-auto pt-3 border-t border-[#EAE5DC] flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#9A9386]">Цена</span>
            <span className="text-base sm:text-lg font-mono font-medium text-[#1A1918] tabular-nums">
              {perfume.formattedPrice} <span className="text-xs font-normal text-[#5A544A]">{perfume.currency}</span>
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium tracking-wider uppercase bg-[#1A1918] hover:bg-[#2F2C29] text-[#F9F8F5] rounded-xs transition-colors cursor-pointer shrink-0"
            title="Оформить заказ в WhatsApp"
          >
            {/* WhatsApp minimalist icon */}
            <svg 
              className="w-3.5 h-3.5 fill-current text-[#4ADE80]" 
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.585 1.761.815 2.792.815 3.182 0 5.769-2.587 5.769-5.767 0-3.18-2.587-5.767-5.769-5.767zm3.364 8.163c-.14.394-.741.748-1.03.784-.28.035-.634.053-1.026-.073-.243-.078-.553-.191-1.004-.388-1.921-.839-3.161-2.775-3.256-2.903-.096-.128-.779-1.037-.779-1.977 0-.94.492-1.401.666-1.593.175-.192.383-.24.51-.24.127 0 .256.002.368.007.118.006.277-.044.433.332.161.387.551 1.344.6 1.444.049.1.082.217.016.347-.066.13-.099.211-.197.325-.098.114-.207.255-.296.342-.099.096-.202.201-.087.398.115.197.511.843 1.096 1.364.753.671 1.388.878 1.585.975.197.097.312.083.427-.049.115-.132.492-.573.623-.769.131-.197.262-.164.443-.098.18.066 1.148.541 1.345.64.197.098.328.147.377.23.049.082.049.476-.091.87z" />
            </svg>
            <span>В WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  );
};
