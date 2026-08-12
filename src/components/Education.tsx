import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Sparkles, BookMarked, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Latar Belakang Akademis
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pendidikan Formal & Riset
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Komitmen pembelajaran seumur hidup untuk mendalami bidang Teknik Informatika secara teoritis dan praktis.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                    edu.status === 'Sedang Berjalan' 
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                      : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                  }`}>
                    <Sparkles className="w-3 h-3" />
                    {edu.status}
                  </span>

                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {edu.institution}
                </h3>

                <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center justify-between">
                  <span>{edu.degree}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-normal text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights Chips */}
                {edu.highlights && (
                  <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Fokus Pembelajaran:</span>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                <BookMarked className="w-4 h-4 text-indigo-500" />
                <span>Program Pendidikan Resmi Terakreditasi</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
