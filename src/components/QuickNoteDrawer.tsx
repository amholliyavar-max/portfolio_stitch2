import React, { useState, useEffect } from 'react';
import { Mail, Send, X } from 'lucide-react';

interface QuickNoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const QuickNoteDrawer: React.FC<QuickNoteDrawerProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSent(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName('');
      setContact('');
      setMessage('');
      onShowToast('Note sent to Aishwarya!');
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#303033]/40 backdrop-blur-xs flex justify-end transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border-l border-[#c3c6d0] w-full max-w-md h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#c3c6d0]/40 mb-6">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#0e3b69]" />
              <span className="font-serif text-xl text-[#1b1b1e] font-medium">Quick Message</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#f0edf1] flex items-center justify-center text-[#43474f] hover:text-[#1b1b1e]"
              aria-label="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs sm:text-[13px] text-[#43474f] mb-6">
            Leave a note directly for Aishwarya Holliyavarmath.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-[11px] text-[#737780] uppercase font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                required
                className="w-full bg-[#f6f2f7] border border-[#c3c6d0] rounded px-3 py-2 text-sm text-[#1b1b1e] focus:outline-none focus:border-[#35628a]"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#737780] uppercase font-semibold mb-1">
                Email / Handle
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="name@domain.com"
                required
                className="w-full bg-[#f6f2f7] border border-[#c3c6d0] rounded px-3 py-2 text-sm text-[#1b1b1e] focus:outline-none focus:border-[#35628a]"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#737780] uppercase font-semibold mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Inquiring about project collaboration or research..."
                required
                rows={4}
                className="w-full bg-[#f6f2f7] border border-[#c3c6d0] rounded px-3 py-2 text-sm text-[#1b1b1e] focus:outline-none focus:border-[#35628a] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-2.5 bg-[#0e3b69] text-white text-xs sm:text-sm rounded font-medium hover:bg-[#2c5981] transition-all flex items-center justify-center gap-1.5 active:scale-98 disabled:opacity-70 shadow-xs"
            >
              <span>{sending ? 'Sending...' : sent ? 'Send Another Note' : 'Send Note'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {sent && (
            <div className="mt-4 p-3 rounded bg-[#a5d0fe]/40 text-[#2c5981] text-xs leading-relaxed border border-[#35628a]/20">
              Thank you! Note recorded. You can also reach out via{' '}
              <a href="mailto:amholliyavar@gmail.com" className="underline font-semibold">
                amholliyavar@gmail.com
              </a>
              .
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-[#c3c6d0]/30 font-mono text-[11px] text-[#737780]">
          Direct inbox: amholliyavar@gmail.com
        </div>
      </div>
    </div>
  );
};
