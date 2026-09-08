import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f6f2f7] border-t border-[#c3c6d0]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#43474f]">
          <div className="flex items-center gap-2 font-medium text-[#1b1b1e]">
            <span className="tracking-wider uppercase font-semibold">Aishwarya M H</span>
            <span className="font-mono text-[#737780]">•</span>
            <span className="font-mono text-[#35628a]">Portfolio</span>
          </div>

          <div className="text-center font-mono text-xs text-[#343b3f]">
            Computer Science • AI &amp; ML · REVA University
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#737780]">© 2026 Aishwarya Holliyavarmath</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#35628a] hover:text-[#0e3b69] transition-colors cursor-pointer font-medium"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
