import React from 'react';
import { Check, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full py-16 lg:py-24 bg-[#f6f2f7] border-b border-[#e4e1e6]/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#35628a] font-semibold tracking-widest uppercase">
            04 / EXPERIENCE
          </span>
          <div className="h-px bg-[#c3c6d0]/50 flex-grow" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1b1e] tracking-tight mb-10 font-normal">
          Experience &amp; Technical Milestones
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Hackathon & Team Experience */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-[#35628a] font-bold">SECTION A</span>
              <span className="text-[#737780]">•</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#1b1b1e] font-semibold">
                Hackathons &amp; Collaborative Experience
              </span>
            </div>

            <div className="bg-white border border-[#c3c6d0]/70 rounded-xl p-6 hover:border-[#35628a] hover:shadow-xs transition-all">
              <div className="flex items-start justify-between mb-3 gap-2">
                <div>
                  <h3 className="font-serif text-xl text-[#1b1b1e] font-medium">
                    24-Hour Technical Hackathon
                  </h3>
                  <span className="text-xs sm:text-sm text-[#35628a] font-medium">
                    Frontend &amp; Firebase Synchronization Lead
                  </span>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#a5d0fe]/40 text-[#2c5981] border border-[#35628a]/20 shrink-0 font-medium">
                  Team of 4
                </span>
              </div>

              <p className="text-sm text-[#43474f] mb-5 leading-relaxed">
                Collaborated in an intensive fast-paced hackathon setting to design, develop, and
                demo a fully operating transactional web application under strict time boundaries.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#43474f]">
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#a5d0fe]/40 flex items-center justify-center text-[#35628a] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>
                    Coordinated within a 4-member agile squad across UI architecture, data modeling,
                    and demo presentation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#a5d0fe]/40 flex items-center justify-center text-[#35628a] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>
                    Engineered modern client interfaces utilizing React and Vite with rapid state
                    feedback.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#a5d0fe]/40 flex items-center justify-center text-[#35628a] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>
                    Configured live Firestore databases ensuring instant multi-party synchronization.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#a5d0fe]/40 flex items-center justify-center text-[#35628a] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>
                    Managed team Git/GitHub branching and conflict resolution in high-velocity
                    conditions.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Independent Projects & IBM Certification */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-[#35628a] font-bold">SECTION B</span>
              <span className="text-[#737780]">•</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#1b1b1e] font-semibold">
                Independent Project Work
              </span>
            </div>

            <div className="bg-white border border-[#c3c6d0]/70 rounded-xl p-6 hover:border-[#35628a] hover:shadow-xs transition-all">
              <h3 className="font-serif text-xl text-[#1b1b1e] font-medium mb-1">
                Academic &amp; Self-Directed Engineering
              </h3>
              <p className="text-xs sm:text-[13px] text-[#43474f] mb-4">
                Sustained personal roadmap building practical software across different computing
                paradigms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-[#f0edf1] border border-[#c3c6d0]/40">
                  <span className="font-semibold text-[#1b1b1e] block mb-0.5">
                    Systems Programming:
                  </span>
                  <span className="text-[#43474f] text-[11.5px]">
                    C memory arrays &amp; 2D raster logic
                  </span>
                </div>

                <div className="p-2.5 rounded bg-[#f0edf1] border border-[#c3c6d0]/40">
                  <span className="font-semibold text-[#1b1b1e] block mb-0.5">
                    Frontend Development:
                  </span>
                  <span className="text-[#43474f] text-[11.5px]">
                    Modular responsive React applications
                  </span>
                </div>

                <div className="p-2.5 rounded bg-[#f0edf1] border border-[#c3c6d0]/40">
                  <span className="font-semibold text-[#1b1b1e] block mb-0.5">
                    Productivity Tools:
                  </span>
                  <span className="text-[#43474f] text-[11.5px]">
                    Habit engines &amp; distraction controllers
                  </span>
                </div>

                <div className="p-2.5 rounded bg-[#f0edf1] border border-[#c3c6d0]/40">
                  <span className="font-semibold text-[#1b1b1e] block mb-0.5">
                    AI Exploration:
                  </span>
                  <span className="text-[#43474f] text-[11.5px]">
                    Behavioral modeling &amp; Python analytics
                  </span>
                </div>
              </div>
            </div>

            {/* IBM Certification Card */}
            <div className="bg-white border border-[#c3c6d0]/70 rounded-xl p-5 flex items-center justify-between hover:border-[#35628a] hover:shadow-xs transition-all gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0e3b69]/10 text-[#0e3b69] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10.5px] uppercase text-[#737780] font-semibold tracking-wider">
                    IBM SkillsBuild Credential
                  </span>
                  <h4 className="text-sm font-semibold text-[#1b1b1e]">
                    Python for Data Visualization
                  </h4>
                  <p className="text-xs text-[#43474f]">
                    Course Completion Certificate • Verified
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs text-[#35628a] hidden sm:inline px-2.5 py-0.5 rounded bg-[#a5d0fe]/40 border border-[#35628a]/30 font-medium">
                VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
