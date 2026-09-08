import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#303033]/50 backdrop-blur-xs flex items-center justify-center p-4 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#c3c6d0] rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#c3c6d0] flex items-center justify-between bg-[#f6f2f7]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10.5px] uppercase px-2 py-0.5 rounded bg-[#a5d0fe] text-[#2c5981] font-semibold">
              {caseStudy.tag}
            </span>
            <span className="text-[#737780]">•</span>
            <span className="font-mono text-xs text-[#737780]">{caseStudy.id}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#eae7eb] flex items-center justify-center text-[#43474f] hover:text-[#1b1b1e] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-w-xl mx-auto w-full">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1b1b1e] mb-1 font-normal">
            {caseStudy.title}
          </h3>
          <p className="text-sm text-[#35628a] font-medium mb-6">{caseStudy.sub}</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#737780] mb-1.5 font-semibold">
                The Problem
              </h4>
              <p className="text-sm sm:text-[15px] text-[#43474f] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#737780] mb-1.5 font-semibold">
                Architectural Approach &amp; System Design
              </h4>
              <p className="text-sm sm:text-[15px] text-[#43474f] leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#737780] mb-1.5 font-semibold">
                What Was Built
              </h4>
              <p className="text-sm sm:text-[15px] text-[#43474f] leading-relaxed">
                {caseStudy.built}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#737780] mb-1.5 font-semibold">
                Key Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {caseStudy.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#f0edf1] text-[#1b1b1e] border border-[#c3c6d0]/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#737780] mb-1.5 font-semibold">
                Aishwarya's Engineering Contribution
              </h4>
              <p className="text-sm sm:text-[15px] text-[#43474f] leading-relaxed">
                {caseStudy.contrib}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#f0edf1] border border-[#c3c6d0]/60">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#35628a] mb-1.5 font-semibold">
                Key Learnings &amp; Takeaways
              </h4>
              <p className="text-sm text-[#1b1b1e] leading-relaxed">{caseStudy.learned}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-[#c3c6d0]/40 bg-[#f6f2f7] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#737780]">
            REVA University Undergraduate Work
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#303033] text-white text-xs font-medium hover:bg-[#0e3b69] transition-all active:scale-95"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
};
