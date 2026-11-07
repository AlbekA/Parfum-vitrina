/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Header } from './components/Header';
import { CategoryBar } from './components/CategoryBar';
import { ProductCard } from './components/ProductCard';
import { QuickViewModal } from './components/QuickViewModal';
import { DialogsHistoryModal } from './components/DialogsHistoryModal';
import { BrandManifesto } from './components/BrandManifesto';
import { Footer } from './components/Footer';
import { PERFUME_CATALOG, createWhatsAppUrl } from './data/perfumes';
import { Perfume, FragranceFamily, DialogHistoryItem } from './types';
import { getStoredDialogs, saveDialogToHistory } from './utils/dialogHistory';
import { Sparkles, ArrowDown, Search, Check, RefreshCw } from 'lucide-react';
import heroBg from './assets/images/hero_luxury_perfume_bg_1794035270598.jpg';

export default function App() {
  const [currentCategory, setCurrentCategory] = useState<FragranceFamily>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isDialogsModalOpen, setIsDialogsModalOpen] = useState(false);
  const [dialogs, setDialogs] = useState<DialogHistoryItem[]>([]);
  const catalogRef = useRef<HTMLDivElement>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize and subscribe to stored dialogs (strictly keeps last 2 dialogs)
  useEffect(() => {
    setDialogs(getStoredDialogs());

    const handleSync = () => {
      setDialogs(getStoredDialogs());
    };

    window.addEventListener('parfumeur_dialogs_updated', handleSync);
    return () => {
      window.removeEventListener('parfumeur_dialogs_updated', handleSync);
    };
  }, []);

  // Filter perfumes based on family and search query (name, brand, notes, description)
  const filteredPerfumes = useMemo(() => {
    return PERFUME_CATALOG.filter((p) => {
      const matchesCategory = currentCategory === 'all' || p.family === currentCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      const inName = p.name.toLowerCase().includes(query);
      const inBrand = p.brand.toLowerCase().includes(query);
      const inSubtitle = p.subtitle.toLowerCase().includes(query);
      const inDescription = p.description.toLowerCase().includes(query);
      const inPyramid = [
        ...p.pyramid.top,
        ...p.pyramid.heart,
        ...p.pyramid.base
      ].some(note => note.toLowerCase().includes(query));

      return inName || inBrand || inSubtitle || inDescription || inPyramid;
    });
  }, [currentCategory, searchQuery]);

  // Handler for Quick View
  const handleOpenQuickView = (perfume: Perfume) => {
    setSelectedPerfume(perfume);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
  };

  // Trigger WhatsApp order and persist dialog in history (Instruction: "сохраняй в истории последние два диалога")
  const handleOrderWhatsApp = (perfume: Perfume) => {
    const formattedMsg = `Здравствуйте! Хочу заказать у вас парфюм: ${perfume.name} (${perfume.volume}) за ${perfume.formattedPrice} руб.`;
    const whatsappUrl = `https://wa.me/996111222333?text=${encodeURIComponent(formattedMsg)}`;

    // Save dialog to history (automatically truncates to last 2 dialogs)
    const updated = saveDialogToHistory({
      perfumeTitle: `${perfume.brand} — ${perfume.name}`,
      perfumeVolume: perfume.volume,
      price: perfume.formattedPrice,
      messageText: formattedMsg,
      type: 'order',
      notes: `Концентрация: ${perfume.concentration}`
    });
    setDialogs(updated);

    // Show feedback toast
    setToastMessage(`Диалог заказа сохранен в историю (последние 2 диалога)`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsAppOpen = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacts = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1A1918]">
      {/* Header with Navigation and Clickable Phone */}
      <Header
        dialogsCount={dialogs.length}
        onOpenDialogs={() => setIsDialogsModalOpen(true)}
        onScrollToCatalog={scrollToCatalog}
        onScrollToContacts={scrollToContacts}
      />

      {/* Hero Presentation Strip with Quiet Luxury Background Image */}
      <section className="relative border-b border-[#E6E1D8] overflow-hidden py-14 sm:py-20 md:py-24 bg-[#F5F2EB]">
        {/* Background Image */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Soft Multi-Layer Scrim to keep text perfectly legible */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-gradient-to-r from-[#F8F7F4]/98 via-[#F8F7F4]/90 to-[#F8F7F4]/40 pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-[#F8F7F4]/40 sm:bg-transparent pointer-events-none backdrop-blur-[0.5px]" 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#736C61] block mb-3 font-medium">
                Парфюмерная витрина · Селекция 2026
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#1A1918] leading-[1.1] tracking-tight mb-4 text-balance">
                Искусство чистой ольфакторной роскоши
              </h1>
              <p className="text-sm sm:text-base text-[#4A453D] font-light leading-relaxed max-w-xl">
                Коллекция нишевых ароматов от независимых мануфактур Европы. Глубокие древесные смолы, дымный шафран, прованская роза и стручковая ваниль в авторских флаконах.
              </p>
            </div>

            {/* Quick action badges & Concierge trigger */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <button
                onClick={() => setIsDialogsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wider uppercase bg-[#FAF9F6]/90 hover:bg-white text-[#1A1918] border border-[#D5CDC0] rounded-xs shadow-xs backdrop-blur-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#8B6B3E]" />
                <span>История диалогов ({dialogs.length})</span>
              </button>

              <button
                onClick={scrollToCatalog}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider uppercase bg-[#1A1918] hover:bg-[#2C2925] text-[#FAF9F6] rounded-xs shadow-sm transition-colors cursor-pointer"
              >
                <span>К каталогу ароматов</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Bar & Note Search Filter (F. Miller layout style) */}
      <div ref={catalogRef}>
        <CategoryBar
          currentCategory={currentCategory}
          onSelectCategory={setCurrentCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalFilteredCount={filteredPerfumes.length}
        />
      </div>

      {/* Main Catalog Grid (Hairline Grid System) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {filteredPerfumes.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-[#D5CDC0] p-8 rounded-xs">
            <Search className="w-8 h-8 text-[#9A9386] mx-auto mb-3" />
            <h3 className="text-xl font-serif text-[#1A1918] mb-1">Ничего не найдено</h3>
            <p className="text-xs text-[#7A7469] mb-4">
              По запросу «{searchQuery}» ароматов в данной категории нет.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCurrentCategory('all');
              }}
              className="px-4 py-2 text-xs uppercase tracking-wider font-medium bg-[#1A1918] text-white rounded-xs hover:bg-[#2F2C29] transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredPerfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
                onOpenQuickView={handleOpenQuickView}
                onOrderWhatsApp={handleOrderWhatsApp}
              />
            ))}
          </div>
        )}
      </main>

      {/* Brand Philosophy / Quiet Luxury Manifesto */}
      <BrandManifesto />

      {/* Footer with Store Address, Interactive Map, and Clickable Contacts */}
      <Footer />

      {/* Quick View Modal Pop-up */}
      <QuickViewModal
        perfume={selectedPerfume}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        onOrderWhatsApp={(perfume) => {
          handleOrderWhatsApp(perfume);
          setIsQuickViewOpen(false);
        }}
      />

      {/* Recent Dialogs History Modal (Strictly maintains last 2 dialogs) */}
      <DialogsHistoryModal
        isOpen={isDialogsModalOpen}
        onClose={() => setIsDialogsModalOpen(false)}
        dialogs={dialogs}
        onOpenWhatsAppDirect={handleDirectWhatsAppOpen}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#1A1918] text-[#FAF9F6] text-xs font-medium rounded-xs shadow-xl border border-[#3A3631] animate-bounce-subtle">
          <Check className="w-4 h-4 text-[#4ADE80]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
