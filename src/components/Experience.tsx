import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Jejak Langkah Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pengalaman Kerja & Instansi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Perjalanan karir lebih dari 10 tahun mengabdi di dunia pendidikan formal, nonformal, dan teknologi informasi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          
          {EXPERIENCES_DATA.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-cyan-500 flex items-center justify-center shadow-md z-10">
                  <div className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                </div>

                {/* Content Card */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    
                    {/* Header Details */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3 h-3 text-cyan-600" />
                        {exp.period}
                      </span>

                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Aktif
                        </span>
                      )}

                      {exp.badge && (
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5 mb-3">
                      <span>{exp.institution}</span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-0.5 text-xs text-slate-400 font-normal">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* External Link */}
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors pt-2 border-t border-slate-100 dark:border-slate-800 w-full"
                      >
                        <span>Kunjungi Platform Institution</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
