import React, { useState } from 'react';
import { Code, Globe, Database, Cpu, Terminal, GitBranch } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-[#35628a]" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-[#35628a]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#35628a]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#35628a]" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#35628a]" />;
      case 'git-branch':
        return <GitBranch className="w-5 h-5 text-[#35628a]" />;
      default:
        return <Code className="w-5 h-5 text-[#35628a]" />;
    }
  };

  return (
    <section
      id="skills"
      className="w-full py-16 lg:py-24 bg-[#f6f2f7] border-b border-[#e4e1e6]/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#35628a] font-semibold tracking-widest uppercase">
            02 / SKILLS
          </span>
          <div className="h-px bg-[#c3c6d0]/50 flex-grow" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1b1e] tracking-tight mb-2 font-normal">
          Tools I work with
        </h2>

        <p className="text-base sm:text-[17px] text-[#43474f] max-w-2xl mb-12 leading-relaxed">
          A grounded toolkit focused on clean software engineering, modern client applications,
          data modeling, and mathematical algorithmic foundations. Hover over any skill pill to view
          focus.
        </p>

        {/* Categorized Grid of Technical Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.num}
              className="bg-white border border-[#c3c6d0]/70 rounded-xl p-6 flex flex-col justify-between hover:border-[#35628a] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#737780] uppercase tracking-wider">
                    Category // {cat.num}
                  </span>
                  {getIcon(cat.iconName)}
                </div>

                <h3 className="font-serif text-xl text-[#1b1b1e] mb-2 font-medium">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#43474f] mb-5 leading-normal">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#c3c6d0]/30">
                {cat.skills.map((skill) => {
                  const isHovered = activeSkill === skill;
                  return (
                    <span
                      key={skill}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                      className={`font-mono text-xs px-2.5 py-1 rounded transition-all cursor-pointer border ${
                        isHovered
                          ? 'bg-[#a5d0fe]/30 text-[#0e3b69] border-[#35628a] shadow-xs scale-105'
                          : 'bg-[#f0edf1] text-[#1b1b1e] font-medium border-[#c3c6d0]/50 hover:border-[#35628a]'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
