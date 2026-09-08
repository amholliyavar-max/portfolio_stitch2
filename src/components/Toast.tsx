import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="bg-[#303033] text-[#f3f0f4] px-4 py-3 rounded-lg shadow-xl flex items-center gap-2.5 text-xs sm:text-sm border border-[#737780]/30">
        <CheckCircle className="w-4 h-4 text-[#a5d0fe]" />
        <span>{message}</span>
      </div>
    </div>
  );
};
