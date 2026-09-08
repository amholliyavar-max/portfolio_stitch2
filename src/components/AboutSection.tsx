import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-16 lg:py-24 bg-[#fbf8fc] border-b border-[#e4e1e6]/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#35628a] font-semibold tracking-widest uppercase">
            01 / ABOUT
          </span>
          <div className="h-px bg-[#c3c6d0]/50 flex-grow" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1b1e] tracking-tight mb-10 font-normal">
          A little about how I work
        </h2>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Editorial Left Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-[#43474f] text-base sm:text-[17px] leading-relaxed">
            <p>
              I am a Computer Science &amp; Engineering student specializing in{' '}
              <strong className="text-[#1b1b1e] font-medium">
                Artificial Intelligence &amp; Machine Learning
              </strong>{' '}
              at REVA University, Bengaluru. My focus lies at the intersection of robust
              algorithmic fundamentals and practical application development.
            </p>
            <p>
              Rather than treating software as abstract theory, I view programming as an
              executable craft. Whether it's writing systems code in C, orchestrating dynamic web
              applications with React and Firebase, or modeling patterns with Python, my process
              starts with conceptual clarity and ends in dependable, deployable code.
            </p>
            <p>
              Curiosity is my primary engine: I am dedicated to deep diving into data structures,
              exploring modern machine learning workflows, and collaborating with cross-functional
              teams to solve concrete challenges.
            </p>
          </div>

          {/* 3 Compact Principle Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Principle 1 */}
            <div className="group bg-white border border-[#c3c6d0]/70 rounded-xl p-5 hover:border-[#35628a] hover:shadow-xs transition-all">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-sm text-[#35628a] font-bold group-hover:scale-105 transition-transform">
                  [01]
                </span>
                <h3 className="font-serif text-lg text-[#1b1b1e] font-medium group-hover:text-[#0e3b69] transition-colors">
                  Build
                </h3>
              </div>
              <p className="text-sm text-[#43474f] leading-normal">
                I enjoy turning ideas into working applications and learning by building
                end-to-end. Theory solidifies fastest when tested through real architectural
                iteration.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="group bg-white border border-[#c3c6d0]/70 rounded-xl p-5 hover:border-[#35628a] hover:shadow-xs transition-all">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-sm text-[#35628a] font-bold group-hover:scale-105 transition-transform">
                  [02]
                </span>
                <h3 className="font-serif text-lg text-[#1b1b1e] font-medium group-hover:text-[#0e3b69] transition-colors">
                  Learn
                </h3>
              </div>
              <p className="text-sm text-[#43474f] leading-normal">
                I continuously strengthen my foundations in programming, core data structures,
                web development, and AI/ML, viewing mastery as a disciplined daily pursuit.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="group bg-white border border-[#c3c6d0]/70 rounded-xl p-5 hover:border-[#35628a] hover:shadow-xs transition-all">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-sm text-[#35628a] font-bold group-hover:scale-105 transition-transform">
                  [03]
                </span>
                <h3 className="font-serif text-lg text-[#1b1b1e] font-medium group-hover:text-[#0e3b69] transition-colors">
                  Collaborate
                </h3>
              </div>
              <p className="text-sm text-[#43474f] leading-normal">
                I have experience working in agile small teams, including building and shipping a
                working application during a rigorous 24-hour hackathon sprint.
              </p>
            </div>
          </div>
        </div>

        {/* Micro Timeline / Numeric Baseline Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#c3c6d0]/40">
          <div className="flex flex-col p-3 rounded-lg hover:bg-[#f0edf1]/60 transition-colors">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#737780]">
              Graduation
            </span>
            <span className="font-serif text-3xl font-normal text-[#1b1b1e] mt-1">2029</span>
            <span className="text-xs text-[#43474f] mt-0.5">REVA University</span>
          </div>

          <div className="flex flex-col p-3 rounded-lg hover:bg-[#f0edf1]/60 transition-colors">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#737780]">
              Academic Metric
            </span>
            <span className="font-serif text-3xl font-normal text-[#0e3b69] mt-1">9.52</span>
            <span className="text-xs text-[#43474f] mt-0.5">Current CGPA / 10.0</span>
          </div>

          <div className="flex flex-col p-3 rounded-lg hover:bg-[#f0edf1]/60 transition-colors">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#737780]">
              Hackathon Sprint
            </span>
            <span className="font-serif text-3xl font-normal text-[#35628a] mt-1">24h</span>
            <span className="text-xs text-[#43474f] mt-0.5">End-to-End Build &amp; Ship</span>
          </div>

          <div className="flex flex-col p-3 rounded-lg hover:bg-[#f0edf1]/60 transition-colors">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#737780]">
              Specialization
            </span>
            <span className="font-serif text-3xl font-normal text-[#1b1b1e] mt-1">AI • ML</span>
            <span className="text-xs text-[#43474f] mt-0.5">Applied Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
};
