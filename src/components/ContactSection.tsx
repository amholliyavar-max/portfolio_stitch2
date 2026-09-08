import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, Clock, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenQuickNote: () => void;
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenQuickNote,
  onShowToast
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const email = 'amholliyavar@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      onShowToast('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      onShowToast(email);
    });
  };

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#35628a] font-semibold tracking-widest uppercase">
            06 / CONTACT
          </span>
          <div className="h-px bg-[#c3c6d0]/50 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Left CTA Block */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1b1b1e] tracking-tight mb-4 font-normal leading-[1.18]">
              Have an idea worth building?
            </h2>

            <p className="text-base sm:text-[17px] text-[#43474f] max-w-xl mb-8 leading-relaxed">
              I'm open to opportunities, internships, collaborative student builds, and technical
              discussions around software, AI systems, and machine learning.
            </p>

            {/* Interactive Email Pill with 1-Click Copy and Mailto */}
            <div className="bg-[#f0edf1] border border-[#c3c6d0]/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-xl mb-6 shadow-2xs hover:border-[#35628a]/60 transition-all">
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#35628a] shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-[#1b1b1e] font-semibold select-all">
                  {email}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded bg-white text-[#1b1b1e] border border-[#c3c6d0] hover:bg-[#eae7eb] hover:border-[#35628a] active:scale-95 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#43474f]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded bg-[#0e3b69] text-white hover:bg-[#2c5981] active:scale-95 transition-all shadow-2xs font-medium"
                >
                  <span>Compose</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#43474f]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#35628a]" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <span className="text-[#737780]">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#35628a]" />
                <span>IST (UTC +5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Quick Reach & Minimalist Profiles */}
          <div className="lg:col-span-5 bg-[#f6f2f7] border border-[#c3c6d0]/70 rounded-xl p-6 shadow-2xs">
            <h3 className="font-serif text-xl text-[#1b1b1e] font-medium mb-1">
              Connect directly
            </h3>
            <p className="text-xs sm:text-[13px] text-[#43474f] mb-5">
              Review code repositories, academic projects, or initiate professional discussions.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#c3c6d0]/50 hover:border-[#35628a] hover:bg-[#fbf8fc] hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#1b1b1e]" />
                  <span className="text-sm text-[#1b1b1e] font-medium">GitHub</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#35628a] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#c3c6d0]/50 hover:border-[#35628a] hover:bg-[#fbf8fc] hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#1b1b1e]" />
                  <span className="text-sm text-[#1b1b1e] font-medium">LinkedIn</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#35628a] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenQuickNote}
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#c3c6d0]/50 hover:border-[#35628a] hover:bg-[#fbf8fc] hover:shadow-2xs transition-all group text-left w-full cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#0e3b69]" />
                  <span className="text-sm text-[#1b1b1e] font-medium">Leave a Fast Note</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#35628a] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
