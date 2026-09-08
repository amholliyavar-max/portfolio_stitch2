import React, { useEffect, useState } from 'react';
import { User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuickNote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickNote }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbf8fc]/90 backdrop-blur-md border-b border-[#c3c6d0]/50 shadow-xs'
          : 'bg-[#fbf8fc]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="h-16 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="font-sans font-semibold tracking-wider uppercase text-[#1b1b1e] hover:text-[#0e3b69] transition-colors flex items-center gap-2 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#0e3b69] inline-block"></span>
            Aishwarya M H
          </a>
          <div className="hidden sm:flex items-center gap-1.5 bg-[#f0edf1] px-2 py-0.5 rounded text-[11px] border border-[#c3c6d0]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35628a] animate-pulse"></span>
            <span className="font-mono uppercase text-[#35628a] font-medium tracking-wider">
              CS • AI &amp; ML
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6" id="nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm tracking-normal relative py-1 transition-colors ${
                    isActive
                      ? 'text-[#0e3b69] font-medium'
                      : 'text-[#43474f] hover:text-[#0e3b69]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#0e3b69] transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Connect Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center justify-center text-xs px-3.5 py-1.5 rounded-full bg-[#a5d0fe] text-[#2c5981] hover:bg-[#35628a] hover:text-white transition-all font-medium active:scale-95 shadow-2xs"
            >
              Let's Connect
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="w-8 h-8 rounded-full bg-[#0e3b69]/10 hover:bg-[#0e3b69] text-[#0e3b69] hover:text-white flex items-center justify-center shrink-0 transition-all border border-[#0e3b69]/20"
              title="About Aishwarya"
              aria-label="About Aishwarya"
            >
              <User className="w-4 h-4" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded text-[#43474f] hover:text-[#0e3b69] hover:bg-[#f0edf1] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf8fc] border-b border-[#c3c6d0]/60 px-4 py-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-sm py-2 px-3 rounded ${
                  activeSection === item.id
                    ? 'bg-[#a5d0fe]/40 text-[#0e3b69] font-medium'
                    : 'text-[#43474f] hover:bg-[#f0edf1]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickNote();
              }}
              className="text-left text-sm py-2 px-3 rounded text-[#0e3b69] font-medium hover:bg-[#a5d0fe]/20"
            >
              Leave a Fast Note →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
