import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Search, Sparkles, Filter, Info, X, Globe, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { LazyImage } from './LazyImage';
import digitalLabImg from '../assets/digital_learning_lab.jpg';
import tbmReadingImg from '../assets/community_tbm_reading.jpg';
import techWorkshopImg from '../assets/educator_tech_workshop.jpg';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'Semua'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: (ProjectCategory | 'Semua')[] = [
    'Semua',
    'Personal',
    'Pembelajaran',
    'Komunitas',
    'Pendidikan Nonformal',
    'Pelatihan TIK'
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeCategory === 'Semua' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3">
            <Globe className="w-3.5 h-3.5" />
            Karya & Platform Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Portfolio Digital & Web Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Seluruh platform web dan sistem pembelajaran digital yang dibangun dan dikelola untuk mendukung pendidikan, komunitas, dan literasi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari proyek atau teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white"
            />
          </div>

        </div>

        {/* Projects Grid: 3 cols Desktop, 2 cols Tablet, 1 col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Preview Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <LazyImage
                    src={project.previewUrl}
                    alt={project.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Info Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/70 backdrop-blur-md text-white hover:bg-cyan-600 transition-colors"
                    title="Lihat Detail Proyek"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-heading font-extrabold text-lg leading-tight drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 space-y-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 transition-all duration-200"
                >
                  <span>Kunjungi Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Detail Fitur Modul</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 max-w-md mx-auto">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tidak ada proyek yang cocok.</p>
            <p className="text-xs text-slate-500 mt-1">Coba gunakan kata kunci pencarian atau kategori lain.</p>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            {selectedProject.features && (
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fitur Utama Platform:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-700 dark:text-slate-200 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-md"
              >
                <span>Buka Website Langsung</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-3 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
