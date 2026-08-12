import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ArrowUpRight, GraduationCap } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Sertifikasi', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portofolio', href: '#projects' },
    { name: 'Ekosistem', href: '#ecosystem' },
    { name: 'Publikasi', href: '#publications' },
    { name: 'Komunitas', href: '#community' },
    { name: 'Sosmed', href: '#social-media' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80 dark:border-slate-800/80' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                KANG RULI
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 -mt-1 tracking-wider uppercase">
                Ruli Lesmana, S.T.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Download CV Modal Trigger */}
            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white shadow-sm shadow-cyan-600/20 transition-all duration-200 hover:shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Mobile Navigation Menu"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all active:scale-[0.99]"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full py-2.5 rounded-xl text-sm font-semibold bg-cyan-600 dark:bg-cyan-500 text-white flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (Dokumen Ringkas)</span>
              </button>

              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 text-white flex items-center justify-center gap-2"
              >
                <span>Hubungi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
