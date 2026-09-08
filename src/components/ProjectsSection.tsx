import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Radio } from 'lucide-react';
import { ProjectCategory } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (key: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [escrowReleased, setEscrowReleased] = useState<boolean>(false);
  const [timerMin, setTimerMin] = useState<number>(24);
  const [timerSec, setTimerSec] = useState<number>(48);

  // Live ticking countdown for FocusFlow
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSec((prevSec) => {
        if (prevSec === 0) {
          setTimerMin((prevMin) => (prevMin > 0 ? prevMin - 1 : 25));
          return 59;
        }
        return prevSec - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const shouldShow = (category: 'web' | 'aiml' | 'systems') => {
    if (activeFilter === 'all') return true;
    return activeFilter === category;
  };

  const handleEscrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEscrowReleased((prev) => !prev);
  };

  return (
    <section
      id="projects"
      className="w-full py-16 lg:py-24 bg-[#fbf8fc] border-b border-[#e4e1e6]/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#35628a] font-semibold tracking-widest uppercase">
            03 / PROJECTS
          </span>
          <div className="h-px bg-[#c3c6d0]/50 flex-grow" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1b1e] tracking-tight mb-1 font-normal">
              Things I've built
            </h2>
            <p className="text-base sm:text-[17px] text-[#43474f] max-w-xl leading-relaxed">
              A collection of academic, personal, and collaborative projects exploring software,
              productivity, and AI-oriented ideas.
            </p>
          </div>

          {/* Interactive Filter Pill Bar */}
          <div
            className="flex flex-wrap items-center gap-1.5 bg-[#f6f2f7] p-1.5 rounded-lg border border-[#c3c6d0]/70 shrink-0"
            id="project-filters"
          >
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 text-xs font-mono rounded font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#0e3b69] text-white shadow-xs'
                  : 'text-[#43474f] hover:text-[#1b1b1e] hover:bg-[#eae7eb]'
              }`}
            >
              All <span className="ml-1 opacity-80">(5)</span>
            </button>
            <button
              onClick={() => setActiveFilter('aiml')}
              className={`px-3 py-1 text-xs font-mono rounded font-medium transition-all ${
                activeFilter === 'aiml'
                  ? 'bg-[#0e3b69] text-white shadow-xs'
                  : 'text-[#43474f] hover:text-[#1b1b1e] hover:bg-[#eae7eb]'
              }`}
            >
              AI/ML <span className="ml-1 opacity-80">(1)</span>
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3 py-1 text-xs font-mono rounded font-medium transition-all ${
                activeFilter === 'web'
                  ? 'bg-[#0e3b69] text-white shadow-xs'
                  : 'text-[#43474f] hover:text-[#1b1b1e] hover:bg-[#eae7eb]'
              }`}
            >
              Web Systems <span className="ml-1 opacity-80">(3)</span>
            </button>
            <button
              onClick={() => setActiveFilter('systems')}
              className={`px-3 py-1 text-xs font-mono rounded font-medium transition-all ${
                activeFilter === 'systems'
                  ? 'bg-[#0e3b69] text-white shadow-xs'
                  : 'text-[#43474f] hover:text-[#1b1b1e] hover:bg-[#eae7eb]'
              }`}
            >
              Systems &amp; C <span className="ml-1 opacity-80">(1)</span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="projects-grid">
          {/* ==================== PROJECT 01 (HERO CARD: SMART ESCROW) ==================== */}
          {shouldShow('web') && (
            <div
              onClick={() => onSelectProject('smart-escrow')}
              className="lg:col-span-12 bg-white border border-[#c3c6d0] rounded-xl overflow-hidden hover:border-[#35628a] hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Info Panel */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#c3c6d0]/40">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffdad6]/60 text-[#ba1a1a] font-mono text-[11px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-ping"></span>
                        24-Hour Hackathon
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f0edf1] text-[#43474f] font-mono text-[11px] font-medium">
                        Team of 4
                      </span>
                      <span className="font-mono text-xs text-[#35628a] ml-auto">
                        01 // PRODUCTION
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#1b1b1e] group-hover:text-[#0e3b69] transition-colors mb-2 font-normal">
                      Smart Escrow
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#43474f] mb-6 leading-relaxed">
                      Built a digital escrow web application under a strict 24-hour deadline. Owned
                      frontend development and integrated Firebase/Firestore for real-time
                      transactional sync between buyers, sellers, and release milestones.
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {['React', 'Vite', 'Firebase', 'Firestore'].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#a5d0fe]/30 text-[#2c5981] border border-[#35628a]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1 text-sm text-[#0e3b69] font-medium group-hover:translate-x-1.5 transition-transform">
                      <span>View Hackathon Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Right Simulated UI Mockup (Live Escrow Pipeline) */}
                <div className="lg:col-span-5 bg-[#f6f2f7] p-6 sm:p-8 flex flex-col justify-center">
                  <div className="bg-white rounded-lg border border-[#c3c6d0]/70 p-5 shadow-xs group-hover:border-[#35628a]/60 transition-colors">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#c3c6d0]/30">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#35628a] animate-pulse"></span>
                        <span className="font-mono text-xs text-[#1b1b1e] font-semibold">
                          ESCROW #TX-8921
                        </span>
                      </div>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded font-semibold ${
                          escrowReleased
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'text-[#35628a] bg-[#a5d0fe]/50'
                        }`}
                      >
                        {escrowReleased ? 'SETTLED' : 'IN PROGRESS'}
                      </span>
                    </div>

                    {/* Milestone Pipeline */}
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#43474f] flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-[#35628a]" />
                          Buyer Deposited Funds
                        </span>
                        <span className="font-mono text-[#1b1b1e] font-medium">₹45,000</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#43474f] flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-[#35628a]" />
                          Codebase Dispatched
                        </span>
                        <span className="font-mono text-[#737780]">Verified</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span
                          className={`flex items-center gap-1.5 ${
                            escrowReleased ? 'text-emerald-700 font-medium' : 'text-[#0e3b69] font-medium'
                          }`}
                        >
                          {escrowReleased ? (
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Radio className="w-4 h-4 text-[#0e3b69] animate-pulse" />
                          )}
                          {escrowReleased ? 'Funds Transferred to Seller' : 'Awaiting Mutual Confirmation'}
                        </span>
                        <span
                          className={`font-mono ${
                            escrowReleased ? 'text-emerald-700' : 'text-[#0e3b69]'
                          }`}
                        >
                          {escrowReleased ? 'Released' : 'Pending'}
                        </span>
                      </div>
                    </div>

                    {/* Action Button Preview */}
                    <button
                      type="button"
                      onClick={handleEscrowClick}
                      className={`w-full py-2 text-xs text-center rounded font-medium shadow-xs transition-colors ${
                        escrowReleased
                          ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                          : 'bg-[#0e3b69] text-white hover:bg-[#2c5981]'
                      }`}
                    >
                      {escrowReleased ? 'Reset Transaction State' : 'Release Escrow Funds'}
                    </button>

                    <div className="mt-2 text-center">
                      <span className="font-mono text-[10px] text-[#737780]">
                        Real-time sync verified via Firestore listener
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================== PROJECT 02: FOCUSFLOW ==================== */}
          {shouldShow('web') && (
            <div
              onClick={() => onSelectProject('focusflow')}
              className="lg:col-span-6 bg-white border border-[#c3c6d0] rounded-xl overflow-hidden hover:border-[#35628a] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#35628a] uppercase font-semibold">
                    Personal Project
                  </span>
                  <span className="font-mono text-xs text-[#737780]">02 // WEB APP</span>
                </div>

                <h3 className="font-serif text-xl text-[#1b1b1e] group-hover:text-[#0e3b69] transition-colors mb-2 font-normal">
                  FocusFlow
                </h3>

                <p className="text-sm text-[#43474f] mb-4 leading-relaxed">
                  A productivity app concept combining distraction mitigation, timed focus sessions,
                  progress tracking, and a rewards system engineered to foster consistent habits.
                </p>

                {/* Mockup UI: Focus Session Timer & Streak Graph */}
                <div className="bg-[#f6f2f7] border border-[#c3c6d0]/60 rounded-lg p-4 mb-4 group-hover:border-[#35628a]/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-[#737780] tracking-wider">
                      CURRENT SESSION
                    </span>
                    <span className="font-mono text-xs text-[#35628a] font-semibold">
                      7 DAY STREAK 🔥
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div className="font-mono text-2xl text-[#1b1b1e] font-semibold tracking-wider">
                      {String(timerMin).padStart(2, '0')}:{String(timerSec).padStart(2, '0')}
                    </div>
                    <div className="flex items-end gap-1.5 h-11">
                      <span className="w-2 h-6 bg-[#35628a]/60 rounded-xs"></span>
                      <span className="w-2 h-8 bg-[#35628a]/80 rounded-xs"></span>
                      <span className="w-2 h-5 bg-[#35628a] rounded-xs"></span>
                      <span className="w-2 h-9 bg-[#0e3b69]/80 rounded-xs"></span>
                      <span className="w-2 h-11 bg-[#0e3b69] rounded-xs animate-pulse"></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {['Productivity', 'Focus Systems', 'Habit Tracker'].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-[#f0edf1] text-[#43474f] border border-[#c3c6d0]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3 border-t border-[#c3c6d0]/30 flex items-center justify-between text-[#0e3b69] text-sm font-medium">
                <span>Explore Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          )}

          {/* ==================== PROJECT 03: FOCUSFORGE AI ==================== */}
          {shouldShow('aiml') && (
            <div
              onClick={() => onSelectProject('focusforge-ai')}
              className="lg:col-span-6 bg-white border border-[#c3c6d0] rounded-xl overflow-hidden hover:border-[#35628a] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#0e3b69] uppercase font-semibold">
                    Concept • AI Research
                  </span>
                  <span className="font-mono text-xs text-[#737780]">03 // PROPOSED MODEL</span>
                </div>

                <h3 className="font-serif text-xl text-[#1b1b1e] group-hover:text-[#0e3b69] transition-colors mb-2 font-normal">
                  FocusForge AI
                </h3>

                <p className="text-sm text-[#43474f] mb-4 leading-relaxed">
                  A comprehensive habit-tracking concept spanning study duration, sleep patterns,
                  and phone telemetry, paired with an AI-based behavioral scoring pipeline.
                </p>

                {/* Mockup UI: Multivariate Telemetry Chart */}
                <div className="bg-[#f6f2f7] border border-[#c3c6d0]/60 rounded-lg p-4 mb-4 group-hover:border-[#35628a]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#737780] tracking-wider">
                      PRODUCTIVITY COEFFICIENT
                    </span>
                    <span className="font-mono text-xs text-[#0e3b69] font-bold">
                      PREDICTED: 91.4%
                    </span>
                  </div>
                  <div className="w-full h-11 flex items-end gap-1.5 pt-2">
                    <div className="flex-1 bg-[#c3c6d0]/40 rounded-t h-4" />
                    <div className="flex-1 bg-[#c3c6d0]/60 rounded-t h-6" />
                    <div className="flex-1 bg-[#a5d0fe] rounded-t h-7" />
                    <div className="flex-1 bg-[#35628a] rounded-t h-8" />
                    <div className="flex-1 bg-[#0e3b69] rounded-t h-9" />
                    <div className="flex-1 bg-[#2c5282] rounded-t h-7" />
                    <div className="flex-1 bg-[#35628a] rounded-t h-10" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {['Behavioral Data', 'Machine Learning', 'Telemetry'].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-[#f0edf1] text-[#43474f] border border-[#c3c6d0]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3 border-t border-[#c3c6d0]/30 flex items-center justify-between text-[#0e3b69] text-sm font-medium">
                <span>Explore Concept Paper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          )}

          {/* ==================== PROJECT 04: CAMPUS CONNECT ==================== */}
          {shouldShow('web') && (
            <div
              onClick={() => onSelectProject('campus-connect')}
              className="lg:col-span-6 bg-white border border-[#c3c6d0] rounded-xl overflow-hidden hover:border-[#35628a] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#35628a] uppercase font-semibold">
                    Personal Project
                  </span>
                  <span className="font-mono text-xs text-[#737780]">04 // WEB SYSTEM</span>
                </div>

                <h3 className="font-serif text-xl text-[#1b1b1e] group-hover:text-[#0e3b69] transition-colors mb-2 font-normal">
                  Campus Connect
                </h3>

                <p className="text-sm text-[#43474f] mb-4 leading-relaxed">
                  A student-focused web application designed to consolidate disparate campus
                  resources, academic event bulletins, and student amenities into a cohesive
                  interface.
                </p>

                {/* Mockup UI: Directory & Event Node */}
                <div className="bg-[#f6f2f7] border border-[#c3c6d0]/60 rounded-lg p-3.5 mb-4 flex flex-col gap-2 group-hover:border-[#35628a]/40 transition-colors">
                  <div className="flex items-center justify-between bg-white p-2 rounded border border-[#c3c6d0]/30 text-xs">
                    <span className="text-[#1b1b1e] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35628a]"></span>
                      Main Library • Seat Telemetry
                    </span>
                    <span className="font-mono text-[#35628a] font-semibold">84% FULL</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2 rounded border border-[#c3c6d0]/30 text-xs">
                    <span className="text-[#1b1b1e] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e3b69]"></span>
                      CSE AI/ML Symposium 2025
                    </span>
                    <span className="font-mono text-[#343b3f]">NOV 28</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {['Web Development', 'Student Services', 'UX Flow'].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-[#f0edf1] text-[#43474f] border border-[#c3c6d0]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3 border-t border-[#c3c6d0]/30 flex items-center justify-between text-[#0e3b69] text-sm font-medium">
                <span>View Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          )}

          {/* ==================== PROJECT 05: 2D GRAPHICS EDITOR ==================== */}
          {shouldShow('systems') && (
            <div
              onClick={() => onSelectProject('graphics-editor')}
              className="lg:col-span-6 bg-white border border-[#c3c6d0] rounded-xl overflow-hidden hover:border-[#35628a] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#343b3f] uppercase font-semibold">
                    Academic Project • C
                  </span>
                  <span className="font-mono text-xs text-[#737780]">05 // SYSTEMS</span>
                </div>

                <h3 className="font-serif text-xl text-[#1b1b1e] group-hover:text-[#0e3b69] transition-colors mb-2 font-normal">
                  2D Graphics Editor
                </h3>

                <p className="text-sm text-[#43474f] mb-4 leading-relaxed">
                  Implemented a low-level 2D graphics editing environment in C, reinforcing manual
                  pointer arithmetic, dynamic memory heaps, and raster buffer manipulation.
                </p>

                {/* Mockup UI: Low-level Memory Heap Matrix */}
                <div className="bg-[#f6f2f7] border border-[#c3c6d0]/60 rounded-lg p-3.5 mb-4 font-mono group-hover:border-[#35628a]/40 transition-colors">
                  <div className="text-[#343b3f] text-[10.5px] mb-1.5 flex items-center justify-between">
                    <span>ADDR: 0x7FFF5FBFF8C0</span>
                    <span>64x64 HEAP CANVAS</span>
                  </div>
                  <div className="grid grid-cols-8 gap-1 text-center text-[#737780] text-[11px]">
                    <span className="bg-white border border-[#c3c6d0]/40 py-1 rounded-xs">00</span>
                    <span className="bg-white border border-[#c3c6d0]/40 py-1 rounded-xs">FF</span>
                    <span className="bg-white border border-[#c3c6d0]/40 py-1 rounded-xs">A2</span>
                    <span className="bg-[#0e3b69]/15 text-[#0e3b69] font-bold py-1 border border-[#0e3b69]/30 rounded-xs">
                      3B
                    </span>
                    <span className="bg-white border border-[#c3c6d0]/40 py-1 rounded-xs">00</span>
                    <span className="bg-white border border-[#c3c6d0]/40 py-1 rounded-xs">00</span>
                    <span className="bg-white border border-[#c3c6d0]/40 py-1 rounded-xs">FF</span>
                    <span className="bg-white border border-[#c3c6d0]/40 py-1 rounded-xs">1C</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {['C Language', 'Memory Mgmt', 'Raster Algorithms'].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-[#f0edf1] text-[#43474f] border border-[#c3c6d0]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3 border-t border-[#c3c6d0]/30 flex items-center justify-between text-[#0e3b69] text-sm font-medium">
                <span>Inspect C Source Insights</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
