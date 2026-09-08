/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DirectionSection } from './components/DirectionSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { QuickNoteDrawer } from './components/QuickNoteDrawer';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { CASE_STUDIES } from './data/portfolioData';

export default function App() {
  const [selectedCaseKey, setSelectedCaseKey] = useState<string | null>(null);
  const [quickNoteOpen, setQuickNoteOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const selectedCaseStudy = selectedCaseKey ? CASE_STUDIES[selectedCaseKey] || null : null;

  return (
    <div className="min-h-screen bg-[#fbf8fc] text-[#1b1b1e] font-sans antialiased selection:bg-[#a5d0fe] selection:text-[#2c5981] flex flex-col">
      {/* Fixed Sticky Header */}
      <Header onOpenQuickNote={() => setQuickNoteOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(key) => setSelectedCaseKey(key)} />
        <ExperienceSection />
        <DirectionSection />
        <ContactSection
          onOpenQuickNote={() => setQuickNoteOpen(true)}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseKey(null)}
      />

      {/* Quick Note Slide-Over Drawer */}
      <QuickNoteDrawer
        isOpen={quickNoteOpen}
        onClose={() => setQuickNoteOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

