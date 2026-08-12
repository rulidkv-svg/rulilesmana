import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, GraduationCap, Users, MessageSquare, Heart, Clock, Share2, Lightbulb, Check } from 'lucide-react';
import { HARD_SKILLS_DATA, SOFT_SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Produktivitas', 'Pengembangan Web', 'Pembelajaran Digital', 'Teknologi & Literasi'];

  const filteredHardSkills = selectedCategory === 'Semua' 
    ? HARD_SKILLS_DATA 
    : HARD_SKILLS_DATA.filter(s => s.category === selectedCategory);

  const getSoftIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-cyan-500" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-500" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-indigo-500" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-500" />;
      case 'Clock': return <Clock className="w-5 h-5 text-amber-500" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-teal-500" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-400" />;
      default: return <GraduationCap className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Kompetensi & Keahlian
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Keahlian Teknis & Interpersonal
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Pepaduan antara penguasaan teknologi digital (Hard Skills) dan kemampuan kepemimpinan pedagogis (Soft Skills).
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* --- HARD SKILLS PART --- */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500" />
              <span>Hard Skills & Penguasaan Teknologi</span>
            </h3>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Hard Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredHardSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      {skill.category}
                    </span>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      skill.level === 'Advanced' 
                        ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800'
                        : 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300'
                    }`}>
                      {skill.level}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">
                    {skill.name}
                  </h4>

                  {skill.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-medium">
                    <Check className="w-3 h-3" /> Teruji di Lapangan
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SOFT SKILLS PART --- */}
        <div>
          <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-indigo-500" />
            <span>Soft Skills & Karakter Kepemimpinan</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOFT_SKILLS_DATA.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shrink-0">
                  {getSoftIcon(skill.iconName)}
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
