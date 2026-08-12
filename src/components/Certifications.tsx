import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Cpu, Sparkles, Clock, Search, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

type CategoryFilter = 'Semua' | 'Sertifikasi Profesi' | 'Microsoft & AI' | 'Pemrograman & IT' | 'Peningkatan Kompetensi & Literasi';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: CategoryFilter[] = [
    'Semua',
    'Sertifikasi Profesi',
    'Microsoft & AI',
    'Pemrograman & IT',
    'Peningkatan Kompetensi & Literasi'
  ];

  const filteredCerts = CERTIFICATIONS_DATA.filter(cert => {
    const matchesCategory = selectedCategory === 'Semua' || cert.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.certNumber && cert.certNumber.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (cert.description && cert.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Sertifikasi Profesi':
        return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
      case 'Microsoft & AI':
        return <Cpu className="w-4 h-4 text-cyan-500" />;
      case 'Pemrograman & IT':
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
      default:
        return <Award className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3 border border-cyan-200 dark:border-cyan-800">
            <Award className="w-3.5 h-3.5" />
            Lisensi, Sertifikasi & Pelatihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sertifikat & Lisensi Kompetensi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Bukti resmi kualifikasi profesi, kompetensi teknologi Microsoft/Azure/AI, pemrograman, serta pelatihan peningkatan mutu pendidik.
          </p>

          <div className="mt-4 flex justify-center">
            <a
              href="https://edu.exceedlms.com/profiles/rulilesmana46bc1d29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Lihat Profil Badges & Sertifikat Google Exceed LMS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat !== 'Semua' && getCategoryIcon(cat)}
                <span>{cat}</span>
                {cat === 'Semua' && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {CERTIFICATIONS_DATA.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari sertifikat / nomor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>

        </div>

        {/* Grid of Certifications */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.a
                layout
                key={cert.id}
                href={cert.credentialUrl || "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/60 transition-all flex flex-col justify-between relative overflow-hidden group cursor-pointer block"
              >
                {/* Subtle Glow Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/15 via-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                <div>
                  {/* Top Header info */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {getCategoryIcon(cert.category)}
                      <span>{cert.category}</span>
                    </span>

                    {cert.hours && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                        <Clock className="w-3 h-3" />
                        {cert.hours}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-start justify-between gap-2">
                    <span>{cert.title}</span>
                    <ExternalLink className="w-4 h-4 text-cyan-500 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1" />
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{cert.issuer}</span>
                  </p>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Card Footer & Action Button */}
                <div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                    <div>
                      <span className="font-semibold text-slate-400 block text-[10px] uppercase">Diterbitkan</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{cert.issueDate}</span>
                    </div>

                    {cert.certNumber && (
                      <div className="text-right">
                        <span className="font-semibold text-slate-400 block text-[10px] uppercase">No. Sertifikat</span>
                        <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 truncate max-w-[140px] block" title={cert.certNumber}>
                          {cert.certNumber}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="w-full py-2 px-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 group-hover:bg-cyan-500 group-hover:text-white text-cyan-700 dark:text-cyan-300 text-xs font-semibold flex items-center justify-center gap-1.5 border border-cyan-200/80 dark:border-cyan-800/80 transition-all">
                    <span>Lihat Sertifikat (Google Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Award className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              Tidak ada sertifikat yang cocok dengan pencarian "{searchQuery}".
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
