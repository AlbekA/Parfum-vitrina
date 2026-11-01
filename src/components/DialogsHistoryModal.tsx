import React, { useState } from 'react';
import { DialogHistoryItem } from '../types';
import { clearStoredDialogs, saveDialogToHistory } from '../utils/dialogHistory';
import { X, MessageSquare, ExternalLink, Trash2, Send, Sparkles } from 'lucide-react';

interface DialogsHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  dialogs: DialogHistoryItem[];
  onOpenWhatsAppDirect: (url: string) => void;
}

export const DialogsHistoryModal: React.FC<DialogsHistoryModalProps> = ({
  isOpen,
  onClose,
  dialogs,
  onOpenWhatsAppDirect,
}) => {
  const [customQuestion, setCustomQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSendCustomInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    const messageText = `Здравствуйте! Хочу проконсультироваться по аромату: ${customQuestion.trim()}`;
    const whatsappUrl = `https://wa.me/996111222333?text=${encodeURIComponent(messageText)}`;

    // Save to history (strictly keeping the last 2 dialogs)
    saveDialogToHistory({
      perfumeTitle: 'Индивидуальная консультация',
      perfumeVolume: 'Подбор нот',
      price: 'Бесплатно',
      messageText,
      type: 'consultation',
      notes: 'Запрос парфюмерному сомелье'
    });

    setCustomQuestion('');
    onOpenWhatsAppDirect(whatsappUrl);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
    >
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#1A1918]/60 backdrop-blur-xs" 
      />

      {/* Modal Dialog */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#FAF9F6] border border-[#E6E1D8] shadow-2xl rounded-xs overflow-hidden z-10 my-auto flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E6E1D8] bg-[#F4F1EA]">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-4 h-4 text-[#8B6B3E]" />
            <div>
              <h3 className="text-base font-serif font-medium text-[#1A1918]">
                История обращений
              </h3>
              <p className="text-[11px] text-[#7A7469] font-light">
                В памяти сохраняются последние 2 диалога
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {dialogs.length > 0 && (
              <button
                onClick={() => clearStoredDialogs()}
                title="Очистить историю"
                className="p-1.5 text-[#9A9386] hover:text-[#B91C1C] transition-colors rounded cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#7A7469] hover:text-[#1A1918] transition-colors rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dialogs List */}
        <div className="p-5 overflow-y-auto max-h-[60vh] space-y-4">
          {dialogs.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#8A847A]">
              У вас пока нет сохраненных диалогов. Закажите флакон или задайте вопрос парфюмеру ниже.
            </div>
          ) : (
            dialogs.map((item, idx) => {
              const whatsappUrl = `https://wa.me/996111222333?text=${encodeURIComponent(item.messageText)}`;
              return (
                <div
                  key={item.id || idx}
                  className="p-4 bg-[#F8F7F4] border border-[#E6E1D8] rounded-xs space-y-2.5 hover:border-[#D1C9BC] transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#8A847A]">
                    <span className="font-mono text-[10px] tracking-wider uppercase bg-[#EFECE5] px-2 py-0.5 text-[#5A5449] rounded-xs">
                      Диалог #{idx + 1}
                    </span>
                    <span className="font-mono">{item.timestamp}</span>
                  </div>

                  <div className="text-sm font-medium text-[#1A1918] flex items-center justify-between">
                    <span>{item.perfumeTitle} <span className="text-xs text-[#7A7469] font-normal">({item.perfumeVolume})</span></span>
                    {item.price && (
                      <span className="font-mono text-xs font-semibold text-[#1A1918]">
                        {item.price} {item.price !== 'Бесплатно' ? 'руб.' : ''}
                      </span>
                    )}
                  </div>

                  <div className="p-2.5 bg-[#F1EDE5] text-xs font-mono text-[#4A453D] rounded-xs leading-relaxed border border-[#E4DEC3]">
                    "{item.messageText}"
                  </div>

                  <div className="pt-1 flex justify-end">
                    <button
                      onClick={() => onOpenWhatsAppDirect(whatsappUrl)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#1A1918] hover:bg-[#2F2C29] text-[#FAF9F6] rounded-xs transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3 h-3 text-[#4ADE80]" />
                      <span>Открыть в WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}

          {/* Quick Consultation Form - automatically creates a new dialog and rotates history */}
          <div className="mt-6 pt-5 border-t border-[#E6E1D8]">
            <div className="flex items-center gap-2 mb-2 text-xs font-medium text-[#1A1918]">
              <Sparkles className="w-3.5 h-3.5 text-[#8B6B3E]" />
              <span>Задать новый вопрос сомелье бутика:</span>
            </div>
            
            <form onSubmit={handleSendCustomInquiry} className="flex gap-2">
              <input
                type="text"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="Например: Ищу древесный аромат с нотами инжира..."
                className="flex-1 px-3 py-2 text-xs bg-[#EFECE5] border border-[#DDD7CB] focus:border-[#1A1918] focus:bg-white rounded-xs outline-none transition-all text-[#1A1918]"
              />
              <button
                type="submit"
                disabled={!customQuestion.trim()}
                className="px-4 py-2 bg-[#1A1918] disabled:opacity-50 hover:bg-[#2F2C29] text-[#FAF9F6] text-xs uppercase tracking-wider font-medium rounded-xs transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <Send className="w-3 h-3" />
                <span className="hidden sm:inline">Отправить</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
