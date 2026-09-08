import React from 'react';
import { DIRECTION_FOCUS_ITEMS } from '../data/portfolioData';

export const DirectionSection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#fbf8fc] border-b border-[#e4e1e6]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#35628a] font-semibold tracking-widest uppercase">
            05 / DIRECTION
          </span>
          <div className="h-px bg-[#c3c6d0]/50 flex-grow" />
        </div>

        <div className="max-w-2xl mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1b1e] tracking-tight mb-2 font-normal">
            Where I'm heading
          </h2>
          <p className="text-base sm:text-[17px] text-[#43474f] leading-relaxed">
            Currently building stronger foundations across software engineering, AI, machine
            learning, and algorithmic problem solving, with the goal of growing through hands-on,
            production-style work.
          </p>
        </div>

        {/* 4 Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIRECTION_FOCUS_ITEMS.map((item) => (
            <div
              key={item.num}
              className="group bg-white border border-[#c3c6d0]/80 rounded-xl p-6 hover:border-[#0e3b69] hover:bg-[#f6f2f7]/60 hover:shadow-xs transition-all"
            >
              <span className="font-mono text-xs text-[#737780] group-hover:text-[#35628a] transition-colors">
                [FOCUS {item.num}]
              </span>

              <h3 className="font-serif text-xl text-[#1b1b1e] mt-3 mb-1.5 group-hover:text-[#0e3b69] transition-colors font-medium">
                {item.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#43474f] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
