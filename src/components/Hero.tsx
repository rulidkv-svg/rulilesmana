import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Briefcase, GraduationCap, Sparkles, BookOpen, MessageSquare, Award, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Shapes & Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/5 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 blur-2xl rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Guru Penggerak Angkatan 10
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                S1 Teknik Informatika (S.T.)
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              {PROFILE_DATA.name}
            </h1>

            <div className="text-xl sm:text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 mb-6">
              {PROFILE_DATA.headline}
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {PROFILE_DATA.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4" />
                <span>Lihat Portofolio</span>
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Tentang Saya</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Micro Specs Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-left">
              <div>
                <span className="block text-2xl font-bold font-heading text-slate-900 dark:text-white">10+ Thn</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Pengalaman Edukasi & TIK</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-heading text-slate-900 dark:text-white">2010</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Sekretaris Komunitas Ngejah</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-bold font-heading text-slate-900 dark:text-white">SMKN</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Guru Informatika Bojonggambir</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Avatar Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Subtle Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-indigo-600/20 blur-xl opacity-60 transform rotate-1 scale-105 pointer-events-none" />
              
              {/* Main Card Frame */}
              <div className="group relative bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Modern Rounded Portrait Image Component */}
                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[310px] aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-lg transition-transform duration-500 ease-out group-hover:scale-105">
                  <img
                    src={PROFILE_DATA.photoUrl}
                    alt={PROFILE_DATA.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://drive.google.com/uc?export=view&id=1eS3eEVmrq9MKYnWuE8xcpoq-WwM7xaFj`;
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Status Indicator Chip */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-medium py-2 px-3 rounded-xl text-center flex items-center justify-center gap-2 border border-slate-700/80 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate font-semibold">Guru Penggerak & Pendidik Informatika</span>
                  </div>
                </div>

                {/* Info Pills on Card */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Instansi Utama</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">SMKN Bojonggambir</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Komunitas</span>
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">Komunitas Ngejah (Sekretaris)</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Pendidikan Terakhir</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">S1 Teknik Informatika</span>
                  </div>
                </div>

                {/* Quick Link Banner */}
                <a
                  href={PROFILE_DATA.personalWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 transition-all text-xs font-semibold group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    Kunjungi Website Personal (kangruli.web.id)
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
