import React from 'react';
import { FragranceFamily } from '../types';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface CategoryBarProps {
  currentCategory: FragranceFamily;
  onSelectCategory: (category: FragranceFamily) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalFilteredCount: number;
}

const CATEGORIES: { id: FragranceFamily; label: string; number: string }[] = [
  { id: 'all', label: 'Все ароматы', number: '1' },
  { id: 'woody', label: 'Древесные & Дымные', number: '2' },
  { id: 'oriental', label: 'Восточные & Амбровые', number: '3' },
  { id: 'floral', label: 'Цветочные & Шелковые', number: '4' },
  { id: 'fresh', label: 'Свежие & Минеральные', number: '5' },
];

export const CategoryBar: React.FC<CategoryBarProps> = ({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
}) => {
  return (
    <div className="border-b border-[#E6E1D8] bg-[#F8F7F4]">
      {/* Category navigation - F. Miller inspired style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          {/* Scrollable list of numbered category filters */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const isActive = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs tracking-wider uppercase transition-all whitespace-nowrap rounded cursor-pointer ${
                    isActive
                      ? 'bg-[#1A1918] text-[#F9F8F5] font-medium shadow-xs'
                      : 'text-[#6A645A] hover:text-[#1A1918] hover:bg-[#EFECE5]'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#C5BBAA]' : 'text-[#9A9386]'}`}>
                    {cat.number}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right side: Search bar & items count */}
          <div className="flex items-center gap-4 justify-between md:justify-end">
            {/* Search Input */}
            <div className="relative flex-1 md:w-60">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A847A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Поиск ноты, бренда..."
                className="w-full pl-8 pr-7 py-1 text-xs bg-[#EFECE5]/80 border border-[#DDD7CB] focus:border-[#1A1918] focus:bg-white rounded text-[#1A1918] placeholder-[#9A9386] outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8A847A] hover:text-[#1A1918]"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Total items badge */}
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7D766A] whitespace-nowrap">
              {totalFilteredCount} {totalFilteredCount === 1 ? 'флакон' : totalFilteredCount < 5 ? 'флакона' : 'флаконов'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
