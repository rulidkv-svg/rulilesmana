import React from 'react';
import { motion } from 'motion/react';
import { Book, FileText, Mic, Calendar, UserCheck, Sparkles, ExternalLink } from 'lucide-react';
import { PUBLICATIONS_DATA } from '../data/portfolioData';

export const Publications: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Buku': return <Book className="w-5 h-5 text-amber-500" />;
      case 'Artikel': return <FileText className="w-5 h-5 text-cyan-500" />;
      case 'Pembicara': return <Mic className="w-5 h-5 text-indigo-500" />;
      default: return <Book className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="publications" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-3">
            <Book className="w-3.5 h-3.5" />
            Karya Tulis & Pemikiran
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Publikasi, Karya Tulis & Speaker
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Rangkuman karya perbukuan, tulisan ilmiah praktik baik pembelajaran, dan keikutsertaan sebagai narasumber literasi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PUBLICATIONS_DATA.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Cover Preview Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={pub.coverImage}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-amber-300 border border-slate-700 flex items-center gap-1.5">
                      {getTypeIcon(pub.type)}
                      {pub.type}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-amber-300 mb-1">
                      <Calendar className="w-3 h-3" />
                      <span>{pub.year}</span>
                      {pub.publisherOrEvent && (
                        <span>• {pub.publisherOrEvent}</span>
                      )}
                    </div>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg leading-snug drop-shadow-md">
                      "{pub.title}"
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  {pub.topic && (
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-800 dark:text-amber-300">
                      <strong>Topik:</strong> {pub.topic}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <UserCheck className="w-3.5 h-3.5 text-cyan-500" />
                    Penulis: Ruli Lesmana, S.T.
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
