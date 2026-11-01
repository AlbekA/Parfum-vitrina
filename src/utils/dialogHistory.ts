import { DialogHistoryItem } from '../types';

const STORAGE_KEY = 'parfumeur_last_two_dialogs';

const INITIAL_DIALOGS: DialogHistoryItem[] = [
  {
    id: 'dlg-1',
    timestamp: 'Вчера, 18:40',
    perfumeTitle: 'Echoes of Flame',
    perfumeVolume: '100 мл',
    price: '21 900',
    messageText: 'Здравствуйте! Хочу заказать у вас парфюм: Echoes of Flame (100 мл) за 21 900 руб.',
    type: 'order',
    notes: 'Консультант подтвердил наличие флакона в бутике на пр. Чуй.'
  },
  {
    id: 'dlg-2',
    timestamp: 'Сегодня, 11:15',
    perfumeTitle: 'Aura Absolue',
    perfumeVolume: '30 мл',
    price: '24 800',
    messageText: 'Здравствуйте! Хочу заказать у вас парфюм: Aura Absolue (30 мл) за 24 800 руб.',
    type: 'order',
    notes: 'Индивидуальная подборка для вечернего выхода.'
  }
];

export function getStoredDialogs(): DialogHistoryItem[] {
  if (typeof window === 'undefined') return INITIAL_DIALOGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DIALOGS));
      return INITIAL_DIALOGS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Keep strictly the last two dialogs as specified in user instructions
      return parsed.slice(0, 2);
    }
    return INITIAL_DIALOGS;
  } catch {
    return INITIAL_DIALOGS;
  }
}

export function saveDialogToHistory(
  dialog: Omit<DialogHistoryItem, 'id' | 'timestamp'>
): DialogHistoryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const current = getStoredDialogs();
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const dateFormatted = `Сегодня, ${hours}:${minutes}`;

    const newEntry: DialogHistoryItem = {
      id: `dlg-${Date.now()}`,
      timestamp: dateFormatted,
      ...dialog
    };

    // Keep strictly the last 2 dialogs in history (instruction: сохраняй в истории последние два диалога)
    const updated = [newEntry, ...current].slice(0, 2);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    // Dispatch a custom window event so any listening component reacts instantly
    window.dispatchEvent(new Event('parfumeur_dialogs_updated'));
    return updated;
  } catch {
    return [];
  }
}

export function clearStoredDialogs(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  window.dispatchEvent(new Event('parfumeur_dialogs_updated'));
}
