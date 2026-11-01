import React from 'react';
import { 
  STORE_PHONE, 
  STORE_PHONE_DISPLAY, 
  STORE_ADDRESS, 
  STORE_HOURS, 
  STORE_INSTAGRAM 
} from '../data/perfumes';
import { Phone, MapPin, Clock, Instagram, Compass, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-[#141312] text-[#EFECE5] pt-16 pb-12 border-t border-[#262422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Boutique Address, Contacts, and Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2C2A27]">
          
          {/* Left Column: Brand & Story (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#9C9486] font-mono block mb-2">
                Парфюмерный дом
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif tracking-[0.2em] uppercase text-[#F9F8F5] mb-4">
                ПАРФЮМЕР
              </h3>
              <p className="text-xs text-[#A8A194] font-light leading-relaxed mb-6 max-w-sm">
                Пространство селективной и редкой парфюмерии в Бишкеке. Профессиональный подбор индивидуального шлейфа, приватные дегустации и доставка по всему городу в день заказа.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${STORE_PHONE}`}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono tracking-wider bg-[#22201D] hover:bg-[#2C2925] text-[#F9F8F5] border border-[#3A3631] rounded-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E6E1D8]" />
                <span>{STORE_PHONE_DISPLAY}</span>
              </a>

              <a
                href="https://wa.me/996111222333"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider bg-[#22201D] hover:bg-[#2C2925] text-[#F9F8F5] border border-[#3A3631] rounded-xs transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#4ADE80]" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.585 1.761.815 2.792.815 3.182 0 5.769-2.587 5.769-5.767 0-3.18-2.587-5.767-5.769-5.767zm3.364 8.163c-.14.394-.741.748-1.03.784-.28.035-.634.053-1.026-.073-.243-.078-.553-.191-1.004-.388-1.921-.839-3.161-2.775-3.256-2.903-.096-.128-.779-1.037-.779-1.977 0-.94.492-1.401.666-1.593.175-.192.383-.24.51-.24.127 0 .256.002.368.007.118.006.277-.044.433.332.161.387.551 1.344.6 1.444.049.1.082.217.016.347-.066.13-.099.211-.197.325-.098.114-.207.255-.296.342-.099.096-.202.201-.087.398.115.197.511.843 1.096 1.364.753.671 1.388.878 1.585.975.197.097.312.083.427-.049.115-.132.492-.573.623-.769.131-.197.262-.164.443-.098.18.066 1.148.541 1.345.64.197.098.328.147.377.23.049.082.049.476-.091.87z" />
                </svg>
                <span>WhatsApp Консьерж</span>
              </a>
            </div>
          </div>

          {/* Middle Column: Physical Address, Hours, Contacts (4 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9C9486] font-mono block mb-2">
                Адрес бутика
              </span>
              <div className="flex items-start gap-2.5 text-xs text-[#E5DFD4]">
                <MapPin className="w-4 h-4 text-[#C2A577] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F4F1EA] text-sm">{STORE_ADDRESS}</p>
                  <p className="text-[#8F887C] mt-0.5">Центральный салон селективной парфюмерии</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9C9486] font-mono block mb-2">
                Режим работы
              </span>
              <div className="flex items-start gap-2.5 text-xs text-[#E5DFD4]">
                <Clock className="w-4 h-4 text-[#C2A577] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F4F1EA] text-sm">{STORE_HOURS}</p>
                  <p className="text-[#8F887C] mt-0.5">Без перерывов и выходных</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9C9486] font-mono block mb-2">
                Социальные сети
              </span>
              <div className="flex items-center gap-4 text-xs">
                <a
                  href={STORE_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#E5DFD4] hover:text-[#C2A577] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@parfumeur.boutique</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Embedded Map Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9C9486] font-mono">
                Локация на карте
              </span>
              <span className="text-[10px] text-[#7A7469]">Бишкек · Центр</span>
            </div>

            {/* Stylized Interactive Map Box */}
            <div className="relative w-full h-56 sm:h-64 rounded-xs overflow-hidden border border-[#33302B] bg-[#1E1C1A] group">
              {/* Clean Map Iframe pointing to Bishkek Chuy Ave */}
              <iframe
                title="Интерактивная карта бутика"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1601614760167!2d74.60523097652755!3d42.87320090276088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c53d47d4e5%3A0xe54e58b14a9cbb3b!2z0L_RgC4g0KfRg9C5IDE0Miwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1700000000000!5m2!1sru!2skg"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) brightness(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
              />

              {/* Overlay Marker Badge */}
              <div className="absolute top-3 left-3 bg-[#141312]/90 backdrop-blur-xs border border-[#3A3631] px-3 py-1.5 rounded-xs pointer-events-none flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5B56A] animate-pulse"></span>
                <span className="text-[11px] font-medium text-[#FAF9F6]">ПАРФЮМЕР · пр. Чуй 142</span>
              </div>

              {/* Direct route external links */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <a
                  href="https://maps.google.com/?q=Bishkek+Chuy+142"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono bg-[#141312]/90 hover:bg-[#141312] text-[#EFECE5] border border-[#3A3631] rounded-xs transition-colors"
                >
                  <span>Google Карты</span>
                  <ExternalLink className="w-3 h-3 text-[#C2A577]" />
                </a>
                <a
                  href="https://yandex.ru/maps/?text=Бишкек%20Чуй%20142"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono bg-[#141312]/90 hover:bg-[#141312] text-[#EFECE5] border border-[#3A3631] rounded-xs transition-colors"
                >
                  <span>Яндекс Карты</span>
                  <ExternalLink className="w-3 h-3 text-[#C2A577]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7469] font-light">
          <div>
            © {new Date().getFullYear()} «ПАРФЮМЕР» — Бутик нишевой и селективной парфюмерии. Все права защищены.
          </div>
          <div className="flex items-center gap-6">
            <span>Аутентичные флаконы Граса</span>
            <span>·</span>
            <span>Экспресс-доставка</span>
            <span>·</span>
            <span>Консьерж-сервис WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
