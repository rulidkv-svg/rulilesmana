import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { GuruPenggerakBadge } from './components/GuruPenggerakBadge';
import { About } from './components/About';
import { Roles } from './components/Roles';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Ecosystem } from './components/Ecosystem';
import { Publications } from './components/Publications';
import { Community } from './components/Community';
import { Blog } from './components/Blog';
import { SocialMedia } from './components/SocialMedia';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { BackToTop } from './components/BackToTop';
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      
      {/* Top Fixed Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="pt-16">
        {/* Hero Banner Section */}
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Realtime Stats Counter */}
        <StatsCounter />

        <SectionDivider variant="wave" colorBottom="text-slate-50 dark:text-slate-950" className="-mt-1" />

        {/* Guru Penggerak Highlight Badge */}
        <div className="px-4">
          <GuruPenggerakBadge />
        </div>

        {/* Profil & Bio Section */}
        <About />

        <SectionDivider variant="glow-line" />

        {/* Multi-Peran & Tanggung Jawab */}
        <Roles />

        <SectionDivider variant="dots-line" />

        {/* Experience Timeline */}
        <Experience />

        <SectionDivider variant="glow-line" />

        {/* Education & Certifications */}
        <Education />

        <SectionDivider variant="dots-line" />

        <Certifications />

        <SectionDivider variant="glow-line" />

        {/* Skills & Competencies */}
        <Skills />

        <SectionDivider variant="curve" colorBottom="text-slate-900" className="-mb-1" />

        {/* Innovation Projects & AI Tools */}
        <Projects />

        <SectionDivider variant="slant" colorBottom="text-white dark:text-slate-950" flipY={true} className="-mt-1" />

        {/* Digital Ecosystem & Web Links */}
        <Ecosystem />

        <SectionDivider variant="glow-line" />

        {/* Publications & Karya Buku */}
        <Publications />

        <SectionDivider variant="dots-line" />

        {/* Community & TBM AIUEO */}
        <Community />

        <SectionDivider variant="glow-line" />

        {/* Articles & Reflektif Blog */}
        <Blog />

        <SectionDivider variant="dots-line" />

        {/* Media Sosial & Kanal Publikasi */}
        <SocialMedia />

        <SectionDivider variant="curve" colorBottom="text-slate-900" className="-mb-1" />

        {/* Interactive Contact & WhatsApp Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Preview & Print Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Floating Back To Top Button */}
      <BackToTop />

    </div>
  );
}

