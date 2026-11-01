import React from 'react';
import { Droplet, Award, ShieldCheck, Sparkles } from 'lucide-react';

export const BrandManifesto: React.FC = () => {
  return (
    <section id="about" className="border-t border-b border-[#E6E1D8] bg-[#F3EFE7]/60 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle kicker */}
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8A847A] block mb-3">
          Философия · Quiet Luxury
        </span>

        {/* Elegant Quote */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A1918] max-w-3xl mx-auto leading-tight sm:leading-snug mb-8">
          «Аромат — это невидимый автограф вашей индивидуальности, звучащий громче любых слов.»
        </h2>

        <p className="text-sm sm:text-base text-[#6A645A] font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Мы отбираем исключительно оригинальные формулы от независимых парфюмерных домов Франции, Италии и Скандинавии. Никаких синтетических клонов — только чистые натуральные абсолюты, редкие древесные смолы и ручной разлив в Грасе.
        </p>

        {/* 3 Quiet Luxury Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-[#E6E1D8]/80 text-left">
          <div className="p-5 bg-[#FAF9F6] border border-[#E6E1D8]">
            <Droplet className="w-5 h-5 text-[#8B6B3E] mb-3" />
            <h4 className="text-sm font-serif font-medium text-[#1A1918] mb-1.5 uppercase tracking-wider">
              Высокая концентрация
            </h4>
            <p className="text-xs text-[#7A7469] font-light leading-relaxed">
              От 20% до 35% ароматических масел (Eau de Parfum и чистый Extrait), обеспечивающих стойкость до 24 часов без химического утяжеления.
            </p>
          </div>

          <div className="p-5 bg-[#FAF9F6] border border-[#E6E1D8]">
            <Award className="w-5 h-5 text-[#8B6B3E] mb-3" />
            <h4 className="text-sm font-serif font-medium text-[#1A1918] mb-1.5 uppercase tracking-wider">
              100% Оригинальность
            </h4>
            <p className="text-xs text-[#7A7469] font-light leading-relaxed">
              Прямые поставки от официальных дистрибьюторов европейских селективных марок. Сертификаты подлинности к каждому флакону.
            </p>
          </div>

          <div className="p-5 bg-[#FAF9F6] border border-[#E6E1D8]">
            <Sparkles className="w-5 h-5 text-[#8B6B3E] mb-3" />
            <h4 className="text-sm font-serif font-medium text-[#1A1918] mb-1.5 uppercase tracking-wider">
              Персональный сомелье
            </h4>
            <p className="text-xs text-[#7A7469] font-light leading-relaxed">
              Бесплатная примерка и дегустация в бутике, подбор индивидуального парфюмерного гардероба под ваш характер и настроение.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
