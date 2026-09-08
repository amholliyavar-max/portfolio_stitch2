import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, School } from 'lucide-react';
import { TelemetryData } from '../types';

export const HeroSection: React.FC = () => {
  const [telemetry, setTelemetry] = useState<TelemetryData>({
    node: 'Currently exploring →',
    status: 'AI Engineering',
    latency: 'LATENCY: 0.12ms'
  });

  const updateTelemetry = (node: string, status: string, latency: string) => {
    setTelemetry({ node, status, latency });
  };

  const resetTelemetry = () => {
    setTelemetry({
      node: 'Currently exploring →',
      status: 'AI Engineering',
      latency: 'LATENCY: 0.12ms'
    });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#fbf8fc] py-12 lg:py-20 border-b border-[#e4e1e6]/60 tech-grid-bg"
    >
      {/* Ambient soft glow gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#d4e3ff]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-[#a5d0fe]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a5d0fe]/40 text-[#2c5981] mb-4 border border-[#a5d0fe]/60 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35628a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35628a]"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold text-[#35628a]">
                Computer Science • AI &amp; ML
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1b1b1e] tracking-tight font-normal mb-4 max-w-xl leading-[1.18]">
              Building practical software with an interest in{' '}
              <span className="italic text-[#0e3b69] relative whitespace-nowrap">
                intelligent systems
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#35628a]/30"></span>
              </span>
              .
            </h1>

            <p className="font-sans text-base sm:text-[17px] text-[#43474f] mb-8 max-w-xl leading-relaxed">
              Computer Science (AI &amp; ML) undergraduate focused on software development,
              data structures, web technologies, and applied machine learning.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center text-xs font-medium px-5 py-2.5 rounded-lg bg-[#303033] text-[#f3f0f4] hover:bg-[#0e3b69] hover:text-white hover:shadow-md transition-all active:scale-95 group"
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-xs font-medium px-5 py-2.5 rounded-lg bg-white text-[#1b1b1e] border border-[#c3c6d0] hover:bg-[#f0edf1] hover:border-[#35628a] transition-all active:scale-95 group"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Credibility Indicators Strip */}
            <div className="w-full pt-4 border-t border-[#c3c6d0]/40 flex flex-wrap items-center gap-y-2 gap-x-4 text-[#43474f] font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <School className="w-4 h-4 text-[#35628a]" />
                <span className="text-[#1b1b1e] font-semibold">REVA University</span>
                <span className="text-[#737780]">•</span>
                <span>Bengaluru</span>
              </div>
              <span className="text-[#c3c6d0] hidden sm:inline">/</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#737780]">CGPA:</span>
                <span className="text-[#0e3b69] font-bold bg-[#d4e3ff]/60 border border-[#0e3b69]/20 px-1.5 py-0.5 rounded text-[11px]">
                  9.52 / 10
                </span>
              </div>
              <span className="text-[#c3c6d0] hidden sm:inline">/</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#737780]">Graduation:</span>
                <span className="text-[#1b1b1e] font-medium">Expected 2029</span>
              </div>
            </div>
          </div>

          {/* Right Architectural System Map */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#f6f2f7]/95 backdrop-blur-sm rounded-xl p-5 border border-[#c3c6d0]/80 shadow-md overflow-hidden hover:border-[#35628a]/70 transition-all duration-300">
              {/* Architectural Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#c3c6d0]/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#35628a]/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0e3b69]/70"></span>
                </div>
                <span className="font-mono text-xs text-[#343b3f] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35628a] animate-pulse"></span>
                  SYS://REVA.AI.GRAPH.v2
                </span>
                <span className="font-mono text-[10px] text-[#35628a] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-[#a5d0fe]/40 border border-[#35628a]/30">
                  ONLINE
                </span>
              </div>

              {/* SVG Vector Topology Graphic */}
              <div
                className="relative w-full h-72 sm:h-80 flex items-center justify-center select-none"
                id="graph-viewport"
                onMouseLeave={resetTelemetry}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Hairline coordinate grid */}
                  <line x1="40" y1="0" x2="40" y2="320" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />
                  <line x1="200" y1="0" x2="200" y2="320" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />
                  <line x1="360" y1="0" x2="360" y2="320" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />
                  <line x1="0" y1="160" x2="400" y2="160" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />
                  <line x1="0" y1="240" x2="400" y2="240" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />

                  {/* Concentric radar rings */}
                  <circle cx="200" cy="160" r="75" fill="#a5d0fe" fillOpacity="0.04" stroke="#35628a" strokeOpacity="0.2" strokeWidth="1" />
                  <circle cx="200" cy="160" r="105" fill="none" stroke="#0e3b69" strokeDasharray="6 6" strokeOpacity="0.12" strokeWidth="1" />

                  {/* Radar sweep indicator */}
                  <g className="animate-sweep">
                    <line x1="200" y1="160" x2="200" y2="55" stroke="#35628a" strokeOpacity="0.25" strokeWidth="1.5" />
                  </g>

                  {/* Crosshairs */}
                  <path d="M195,160 L205,160 M200,155 L200,165" stroke="#35628a" strokeWidth="1" opacity="0.6" />
                  <path d="M75,75 L85,75 M80,70 L80,80" stroke="#737780" strokeWidth="0.8" opacity="0.4" />
                  <path d="M315,235 L325,235 M320,230 L320,240" stroke="#737780" strokeWidth="0.8" opacity="0.4" />

                  {/* Animated interconnect vectors */}
                  <path d="M80,80 L200,160" className="animate-dash" stroke="#35628a" strokeWidth="1.5" strokeOpacity="0.55" />
                  <path d="M320,80 L200,160" className="animate-dash" stroke="#35628a" strokeWidth="1.5" strokeOpacity="0.55" />
                  <path d="M80,240 L200,160" className="animate-dash" stroke="#35628a" strokeWidth="1.5" strokeOpacity="0.55" />
                  <path d="M320,240 L200,160" className="animate-dash" stroke="#35628a" strokeWidth="1.5" strokeOpacity="0.55" />
                  <path d="M80,80 L320,80" stroke="#c3c6d0" strokeDasharray="4 4" strokeWidth="1" />
                  <path d="M80,240 L320,240" stroke="#c3c6d0" strokeDasharray="4 4" strokeWidth="1" />
                  <circle cx="200" cy="160" r="3" fill="#0e3b69" />
                </svg>

                {/* Top Left: PYTHON */}
                <div
                  className="absolute top-8 left-4 sm:left-6 group cursor-pointer transition-all duration-200 hover:scale-105"
                  onMouseEnter={() => updateTelemetry('NODE: PYTHON 3.12', 'SIGNAL: STABLE', 'LATENCY: 0.08ms')}
                >
                  <div className="bg-white border border-[#c3c6d0] hover:border-[#35628a] hover:shadow-md px-2.5 py-1 rounded shadow-2xs flex items-center gap-1.5 transition-all">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35628a] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35628a]"></span>
                    </span>
                    <span className="font-mono text-xs text-[#1b1b1e] font-semibold tracking-wider">
                      PYTHON
                    </span>
                  </div>
                </div>

                {/* Top Right: REACT */}
                <div
                  className="absolute top-8 right-4 sm:right-6 group cursor-pointer transition-all duration-200 hover:scale-105"
                  onMouseEnter={() => updateTelemetry('NODE: REACT 19 / VITE', 'STATE: MOUNTED', 'LATENCY: 0.04ms')}
                >
                  <div className="bg-white border border-[#c3c6d0] hover:border-[#35628a] hover:shadow-md px-2.5 py-1 rounded shadow-2xs flex items-center gap-1.5 transition-all">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0e3b69] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0e3b69]"></span>
                    </span>
                    <span className="font-mono text-xs text-[#1b1b1e] font-semibold tracking-wider">
                      REACT
                    </span>
                  </div>
                </div>

                {/* Center Hub: APPLIED ML CORE */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center group cursor-pointer transition-all duration-300 hover:scale-110"
                  onMouseEnter={() => updateTelemetry('NODE: APPLIED ML CORE', 'CLUSTER: INFERENCE', 'LATENCY: 0.12ms')}
                >
                  <div className="bg-[#0e3b69] text-white px-4 py-2 rounded shadow-lg flex flex-col items-center border border-[#d4e3ff]/40 relative">
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#a5d0fe] animate-ping"></span>
                    <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#a5c8ff]">
                      Core Node
                    </span>
                    <span className="font-mono text-xs font-bold tracking-wider">
                      APPLIED ML
                    </span>
                  </div>
                </div>

                {/* Bottom Left: C / DSA */}
                <div
                  className="absolute bottom-8 left-4 sm:left-6 group cursor-pointer transition-all duration-200 hover:scale-105"
                  onMouseEnter={() => updateTelemetry('NODE: C / HEAP MEM', 'POINTER: VERIFIED', 'LATENCY: 0.01ms')}
                >
                  <div className="bg-white border border-[#c3c6d0] hover:border-[#35628a] hover:shadow-md px-2.5 py-1 rounded shadow-2xs flex items-center gap-1.5 transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#343b3f]"></span>
                    <span className="font-mono text-xs text-[#1b1b1e] font-semibold tracking-wider">
                      C / DSA
                    </span>
                  </div>
                </div>

                {/* Bottom Right: FIREBASE */}
                <div
                  className="absolute bottom-8 right-4 sm:right-6 group cursor-pointer transition-all duration-200 hover:scale-105"
                  onMouseEnter={() => updateTelemetry('NODE: FIRESTORE SYNC', 'WEBSOCKET: OPEN', 'LATENCY: 0.16ms')}
                >
                  <div className="bg-white border border-[#c3c6d0] hover:border-[#35628a] hover:shadow-md px-2.5 py-1 rounded shadow-2xs flex items-center gap-1.5 transition-all">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35628a] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35628a]"></span>
                    </span>
                    <span className="font-mono text-xs text-[#1b1b1e] font-semibold tracking-wider">
                      FIREBASE
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Status Bar */}
              <div className="mt-2 pt-2.5 border-t border-[#c3c6d0]/40 flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#43474f]">
                  <span className="w-2 h-2 rounded-full bg-[#35628a] animate-pulse"></span>
                  <span>{telemetry.node}</span>
                  <span className="text-[#0e3b69] font-semibold">{telemetry.status}</span>
                </div>
                <span className="text-[#343b3f] bg-[#f0edf1] px-2 py-0.5 rounded border border-[#c3c6d0]/40 font-mono">
                  {telemetry.latency}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
