import { Perfume } from '../types';

// Direct Vite asset imports - guaranteed to bundle and resolve in production builds on Netlify, Vercel, etc.
import santalImg from '../assets/images/perfume_santal_flacon_1793542815843.jpg';
import noirImg from '../assets/images/perfume_noir_cypress_1793542817046.jpg';
import roseImg from '../assets/images/perfume_rose_extrait_1793542817957.jpg';
import vanilleImg from '../assets/images/perfume_vanille_smoke_1793542817103.jpg';

export const PERFUME_CATALOG: Perfume[] = [
  {
    id: 'ambre-epice',
    brand: 'MAISON VALERIUS',
    name: 'Ambre Épicé',
    subtitle: 'Амбровая глубина · Теплые пряности · Сандал',
    family: 'oriental',
    categoryLabel: 'Восточные',
    volume: '100 мл',
    concentration: 'Eau de Parfum',
    price: 18500,
    formattedPrice: '18 500',
    currency: 'руб.',
    image: santalImg,
    ratingStars: 5,
    description: 'Мягкий и медитативный аромат золотистого янтаря, окутанного кардамоном и благородной древесиной майсурского сандала. Звучит интимно и согревающе, оставляя за собой бархатный шлейф дорогой замши и смолистого бензоина.',
    pyramid: {
      top: ['Гватемальский кардамон', 'Горький апельсин', 'Розовый перец'],
      heart: ['Бензоин из Лаоса', 'Корица', 'Абсолют ириса'],
      base: ['Майсурский сандал', 'Золотая амбра', 'Кедровая смола', 'Мадагаскарская ваниль']
    },
    longevity: '10–12 часов на коже',
    sillage: 'Интимный, обволакивающий',
    isBestseller: true
  },
  {
    id: 'echoes-of-flame',
    brand: 'AETHELRED',
    name: 'Echoes of Flame',
    subtitle: 'Обожженный кипарис · Березовый деготь · Шафран',
    family: 'woody',
    categoryLabel: 'Древесные',
    volume: '100 мл',
    concentration: 'Eau de Parfum',
    price: 21900,
    formattedPrice: '21 900',
    currency: 'руб.',
    image: noirImg,
    ratingStars: 5,
    description: 'Дымная сага о древних лесах и угасающем костре в осенних сумерках. Сухой дымный ветивер переплетается с драгоценным персидским шафраном и тлеющей древесиной кедра, создавая бескомпромиссный образ внутренней силы.',
    pyramid: {
      top: ['Красный шафран', 'Можжевеловые ягоды', 'Черный перец'],
      heart: ['Обожженный кипарис', 'Копченый березовый деготь', 'Кожа'],
      base: ['Яванский ветивер', 'Атласский кедр', 'Серая амбра', 'Темный мускус']
    },
    longevity: 'Свыше 14 часов',
    sillage: 'Выразительный, шлейфовый',
    isBestseller: true
  },
  {
    id: 'reverie-du-midi',
    brand: 'RÊVERIE',
    name: 'Rêverie du Midi',
    subtitle: 'Прованская роза · Белый мускус · Шелковый пион',
    family: 'floral',
    categoryLabel: 'Цветочные',
    volume: '50 мл',
    concentration: 'Eau de Parfum',
    price: 16400,
    formattedPrice: '16 400',
    currency: 'руб.',
    image: roseImg,
    ratingStars: 5,
    description: 'Полдень в саду Сен-Поль-де-Ванс. Утренняя роса на лепестках майской розы, озаренная мягким средиземноморским солнцем. Воздушный, чистый и невероятно женственный аромат с деликатной пудровой текстурой.',
    pyramid: {
      top: ['Бергамот из Калабрии', 'Утренняя роса', 'Личи'],
      heart: ['Майская грасская роза', 'Белый пион', 'Цветы магнолии'],
      base: ['Кристальный белый мускус', 'Кашемировое дерево', 'Светлый кедр']
    },
    longevity: '8–10 часов',
    sillage: 'Нежный, диффузный шлейф'
  },
  {
    id: 'aura-absolue',
    brand: 'ATELIER BOTANIQUE',
    name: 'Aura Absolue',
    subtitle: 'Бурбонская ваниль · Ветивер · Солнечный минерал',
    family: 'oriental',
    categoryLabel: 'Восточные',
    volume: '30 мл',
    concentration: 'Extrait de Parfum',
    price: 24800,
    formattedPrice: '24 800',
    currency: 'руб.',
    image: vanilleImg,
    ratingStars: 5,
    description: 'Высококонцентрированный экстракт редких природных эссенций. Минеральная солоноватость морского бриза встречается с тягучей несладкой стручковой ванилью и заземляющим гаитянским ветивером. Истинное воплощение тихой роскоши.',
    pyramid: {
      top: ['Морская соль', 'Мускатный орех', 'Кардамон'],
      heart: ['Стручковая бурбонская ваниль', 'Абсолют бобов тонка', 'Мирра'],
      base: ['Гаитянский ветивер', 'Олибанум', 'Пало санто', 'Амброценид']
    },
    longevity: 'Экстра-стойкость 24+ часа',
    sillage: 'Благородный, запоминающийся',
    isBestseller: true
  },
  {
    id: 'ambre-epice-50',
    brand: 'MAISON VALERIUS',
    name: 'Ambre Épicé (Travel Edition)',
    subtitle: 'Компактный объем · Идеален для путешествий',
    family: 'oriental',
    categoryLabel: 'Восточные',
    volume: '50 мл',
    concentration: 'Eau de Parfum',
    price: 12900,
    formattedPrice: '12 900',
    currency: 'руб.',
    image: santalImg,
    ratingStars: 5,
    description: 'Утонченная версия нашего флагманского пряно-амбрового парфюма в лаконичном флаконе для ручной клади и вечерних выходов. Та же глубина композиции и безупречный шлейф.',
    pyramid: {
      top: ['Гватемальский кардамон', 'Горький апельсин'],
      heart: ['Бензоин из Лаоса', 'Абсолют ириса'],
      base: ['Майсурский сандал', 'Золотая амбра', 'Ваниль']
    },
    longevity: '10–12 часов',
    sillage: 'Интимный, обволакивающий'
  },
  {
    id: 'echoes-of-flame-extrait',
    brand: 'AETHELRED',
    name: 'Echoes of Flame (Extrait)',
    subtitle: 'Максимальная концентрация масел (32%)',
    family: 'woody',
    categoryLabel: 'Древесные',
    volume: '50 мл',
    concentration: 'Extrait de Parfum',
    price: 27500,
    formattedPrice: '27 500',
    currency: 'руб.',
    image: noirImg,
    ratingStars: 5,
    description: 'Лимитированный выпуск чистейшего экстракта. Более глубокое раскрытие нот кожи и дыма с добавлением драгоценного уда из Камбоджи. Штучный коллекционный экземпляр ручной сборки.',
    pyramid: {
      top: ['Шафран из Хорасана', 'Черный трюфель'],
      heart: ['Обожженная древесина', 'Винтажная кожа', 'Смола стиракса'],
      base: ['Камбоджийский уд', 'Ветивер', 'Окаменелая серая амбра']
    },
    longevity: 'Свыше 20 часов',
    sillage: 'Монументальный, гипнотический'
  },
  {
    id: 'reverie-du-midi-extrait',
    brand: 'RÊVERIE',
    name: 'Rêverie du Midi (Flacon Prestige)',
    subtitle: 'Винтажный хрусталь · Ручная полировка',
    family: 'floral',
    categoryLabel: 'Цветочные',
    volume: '100 мл',
    concentration: 'Extrait de Parfum',
    price: 23200,
    formattedPrice: '23 200',
    currency: 'руб.',
    image: roseImg,
    ratingStars: 5,
    description: 'Парадный флакон увеличенного объема с максимальной концентрацией эссенции майской розы и белого нектарина. Сбалансированный и чистый цветочный гимн без единой приторной ноты.',
    pyramid: {
      top: ['Калабрийский бергамот', 'Личи', 'Розовый грейпфрут'],
      heart: ['Французская роза Centifolia', 'Цветок апельсина', 'Белый пион'],
      base: ['Шелковый мускус', 'Белая амбра', 'Кашемир']
    },
    longevity: '12–14 часов',
    sillage: 'Воздушный, шлейфовый'
  },
  {
    id: 'aura-absolue-discovery',
    brand: 'ATELIER BOTANIQUE',
    name: 'Aura Céleste',
    subtitle: 'Минеральный бриз · Морской шалфей · Кедр',
    family: 'fresh',
    categoryLabel: 'Свежие',
    volume: '50 мл',
    concentration: 'Eau de Parfum',
    price: 15900,
    formattedPrice: '15 900',
    currency: 'руб.',
    image: vanilleImg,
    ratingStars: 5,
    description: 'Аромат морского побережья северной Атлантики. Прохладный ветер, запах соли на гранитных скалах, терпкий дикий шалфей и мокрая древесина кедра, выброшенная прибоем.',
    pyramid: {
      top: ['Морская соль', 'Молотый кардамон', 'Листья мирта'],
      heart: ['Дикий горный шалфей', 'Атлантические водоросли', 'Белый тимьян'],
      base: ['Плавник кедра', 'Минеральная серая амбра', 'Чистый мускус']
    },
    longevity: '9–11 часов',
    sillage: 'Свежий, звонкий, элегантный'
  }
];

export const STORE_PHONE = '+996111222333';
export const STORE_PHONE_DISPLAY = '+996 111 222 333';
export const STORE_ADDRESS = 'г. Бишкек, пр. Чуй, 142';
export const STORE_HOURS = 'Ежедневно: 10:00 — 21:00';
export const STORE_INSTAGRAM = 'https://instagram.com';

/**
 * Creates the official prefilled WhatsApp message format required:
 * "Здравствуйте! Хочу заказать у вас парфюм: [Название товара] ([Объем]) за [Цена] руб."
 */
export function createWhatsAppUrl(perfume: { name: string; volume: string; price: number | string; brand?: string }): string {
  const text = `Здравствуйте! Хочу заказать у вас парфюм: ${perfume.name} (${perfume.volume}) за ${perfume.price} руб.`;
  return `https://wa.me/996111222333?text=${encodeURIComponent(text)}`;
}

export function createConsultationWhatsAppUrl(queryText: string): string {
  const text = `Здравствуйте! Хочу проконсультироваться по подбору парфюма: ${queryText}`;
  return `https://wa.me/996111222333?text=${encodeURIComponent(text)}`;
}
