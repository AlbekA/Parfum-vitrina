export type FragranceFamily = 'all' | 'woody' | 'oriental' | 'floral' | 'fresh';

export interface OlfactoryPyramid {
  top: string[];       // Верхние ноты
  heart: string[];     // Ноты сердца
  base: string[];      // Базовые ноты (шлейф)
}

export interface Perfume {
  id: string;
  brand: string;
  name: string;
  subtitle: string;
  family: FragranceFamily;
  categoryLabel: string;
  volume: string;
  concentration: string; // e.g. "Eau de Parfum", "Extrait de Parfum"
  price: number;
  formattedPrice: string;
  currency: string;
  image: string;
  ratingStars: number;
  description: string;
  pyramid: OlfactoryPyramid;
  longevity: string;
  sillage: string;
  isBestseller?: boolean;
}

export interface DialogHistoryItem {
  id: string;
  timestamp: string;
  perfumeTitle: string;
  perfumeVolume: string;
  price: string;
  messageText: string;
  type: 'order' | 'consultation';
  notes?: string;
}
