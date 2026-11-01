import React from 'react';
import { Phone, MessageSquare, Compass, Sparkles } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_DISPLAY } from '../data/perfumes';

interface HeaderProps {
  dialogsCount: number;
  onOpenDialogs: () => void;
  onScrollToCatalog: () => void;
  onScrollToContacts: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  dialogsCount,
  onOpenDialogs,
  onScrollToCatalog,
  onScrollToContacts,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#E6E1D8] transition-all">
      {/* Top minimal announcement / quiet luxury tag */}
      <div className="bg-[#1A1918] text-[#F4F1EA] text-[11px] py-1.5 px-4 text-center tracking-[0.2em] uppercase font-light">
        <span>Селективная парфюмерия · Доставка и примерка ароматов · Бишкек</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Quick nav links for desktop */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-[0.15em] uppercase text-[#5A5650]">
          <button 
            onClick={onScrollToCatalog}
            className="hover:text-[#1A1918] transition-colors cursor-pointer"
          >
            Витрина
          </button>
          <a 
            href="#about"
            className="hover:text-[#1A1918] transition-colors"
          >
            Философия
          </a>
          <button 
            onClick={onScrollToContacts}
            className="hover:text-[#1A1918] transition-colors cursor-pointer"
          >
            Бутик & Карта
          </button>
        </nav>

        {/* Center / Brand mark: ПАРФЮМЕР */}
        <div className="flex flex-col items-center justify-center text-center">
          <a 
            href="#" 
            className="text-2xl sm:text-3xl font-serif tracking-[0.25em] font-medium text-[#1A1918] uppercase select-none hover:opacity-90 transition-opacity"
          >
            ПАРФЮМЕР
          </a>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#8A847A] font-light mt-0.5">
            Haute Parfumerie · Niche
          </span>
        </div>

        {/* Right: Phone link (mandatory <a href="tel:+996111222333">) & Dialogs history */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Recent Dialogs button (preserves last two dialogs) */}
          <button
            onClick={onOpenDialogs}
            className="relative flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#5A5650] hover:text-[#1A1918] hover:bg-[#EFECE5] rounded transition-all cursor-pointer border border-[#E0DBCF]"
            title="История последних диалогов"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#736C61]" />
            <span className="hidden sm:inline text-[11px] tracking-wider uppercase font-medium">Диалоги</span>
            <span className="flex items-center justify-center w-4 h-4 text-[10px] font-semibold bg-[#1A1918] text-white rounded-full">
              {dialogsCount}
            </span>
          </button>

          {/* Clickable phone link */}
          <a
            href={`tel:${STORE_PHONE}`}
            className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wider text-[#1A1918] bg-transparent hover:bg-[#EFECE5] rounded transition-all border border-transparent hover:border-[#E0DBCF]"
            title="Позвонить в бутик"
          >
            <Phone className="w-3.5 h-3.5 text-[#1A1918]" />
            <span className="hidden sm:inline font-mono tracking-tight font-normal text-xs">{STORE_PHONE_DISPLAY}</span>
            <span className="sm:hidden text-xs uppercase tracking-wider font-medium">Вызов</span>
          </a>
        </div>
      </div>
    </header>
  );
};
