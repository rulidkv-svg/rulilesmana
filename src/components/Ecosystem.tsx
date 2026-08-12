import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, GraduationCap, Users, Building2, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const Ecosystem: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('root');

  const nodes = [
    {
      id: 'root',
      title: 'Ruli Lesmana, S.T.',
      type: 'Hub Utama',
      description: 'Pusat penggerak pembelajaran, inovasi teknologi, dan jejaring literasi.',
      icon: <GraduationCap className="w-6 h-6 text-cyan-500" />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'edu-group',
      title: 'Platform Digital Learning',
      type: 'Kategori Edukasi',
      description: 'Platform e-learning untuk eksplorasi DKV dan Literasi Digital.',
      icon: <GraduationCap className="w-5 h-5 text-cyan-600" />,
      children: ['dkv-learn-studio', 'digital-learn-studio']
    },
    {
      id: 'community-group',
      title: 'Gerakan Literasi & Komunitas',
      type: 'Kategori Sosial',
      description: 'Ruang pemberdayaan masyarakat dan minat baca rakyat.',
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      children: ['komunitas-ngejah']
    },
    {
      id: 'institution-group',
      title: 'Lembaga Pendidikan & Vokasi',
      type: 'Kategori Institusi',
      description: 'Satuan pendidikan formal, nonformal, dan lembaga pelatihan kerja TIK.',
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      children: ['celah-cahaya', 'lpk-alpha-beta']
    }
  ];

  return (
    <section id="ecosystem" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3">
            <Network className="w-3.5 h-3.5" />
            Jejak & Konektivitas
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Digital Ecosystem & Platform Network
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Peta hubungan terintegrasi antara seluruh platform web, lembaga pendidikan, dan gerakan komunitas yang diinisiasi oleh Ruli Lesmana.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Visual Ecosystem Architecture Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm relative">
          
          {/* Root Node: Ruli Lesmana */}
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-600/20 flex items-center gap-3 cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-200 block">Core Developer & Founder</span>
                <span className="font-heading font-extrabold text-lg sm:text-xl">Ruli Lesmana, S.T.</span>
              </div>
            </motion.div>

            {/* Connecting Vertical Line */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-slate-300 dark:to-slate-700" />
            <div className="w-full max-w-2xl h-0.5 bg-slate-300 dark:bg-slate-700 relative hidden md:block">
              <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-cyan-500 -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-blue-500 -translate-y-1/2" />
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-indigo-500 -translate-y-1/2" />
            </div>
          </div>

          {/* 3 Major Ecosystem Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Pillar 1: Education */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-600 text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                    Pembelajaran Digital
                  </h3>
                  <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">Interactive Learning Hubs</span>
                </div>
              </div>

              <div className="space-y-3 pl-3 border-l-2 border-cyan-200 dark:border-cyan-800">
                {PROJECTS_DATA.filter(p => p.category === 'Pembelajaran' || p.id === 'kang-ruli').map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      <span>{p.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {p.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Pillar 2: Community */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-600 text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                    Komunitas & Literasi
                  </h3>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Social Impact & Reading</span>
                </div>
              </div>

              <div className="space-y-3 pl-3 border-l-2 border-emerald-200 dark:border-emerald-800">
                {PROJECTS_DATA.filter(p => p.category === 'Komunitas').map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-emerald-500 transition-all hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600">
                      <span>{p.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {p.description}
                    </p>
                  </a>
                ))}

                {/* TBM AIUEO Card */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span>TBM AIUEO Sukawangi</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">Garis Depan</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Taman Baca Masyarakat penggerak minat baca anak & masyarakat di Kp. Sukawangi, Singajaya, Garut.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Educational Institutions */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-600 text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                    Lembaga & Vokasi
                  </h3>
                  <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">Formal, Nonformal & LPK</span>
                </div>
              </div>

              <div className="space-y-3 pl-3 border-l-2 border-indigo-200 dark:border-indigo-800">
                {PROJECTS_DATA.filter(p => p.category === 'Pendidikan Nonformal' || p.category === 'Pelatihan TIK').map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-500 transition-all hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600">
                      <span>{p.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {p.description}
                    </p>
                  </a>
                ))}

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span>SMKN Bojonggambir</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-semibold">Guru Utama</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Instansi pendidikan formal tempat mengampu mata pelajaran Informatika Kelas X.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              *Seluruh platform web saling terintegrasi untuk mendukung misi: <strong>Educator • Technology • Literacy • Community</strong>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
