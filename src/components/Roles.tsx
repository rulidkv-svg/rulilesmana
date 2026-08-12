import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Laptop, BookOpen, Users, Sparkles, Award } from 'lucide-react';
import { ROLES_DATA } from '../data/portfolioData';

export const Roles: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Users': return <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'Award': return <Award className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      default: return <GraduationCap className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="roles" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 mb-3">
            Peran & Dedikasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Peran Saya Dalam Ekosistem Pendidikan & TIK
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Ragam peran yang dijalani secara beriringan untuk mendorong kualitas sumber daya manusia dan akses literasi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ROLES_DATA.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-200">
                  {getIcon(role.icon)}
                </div>

                <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase mb-1">
                  {role.subtitle}
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                  {role.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {role.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>Kontribusi Profesional</span>
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
