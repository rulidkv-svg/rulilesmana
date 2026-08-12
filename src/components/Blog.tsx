import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Newspaper, Calendar, Clock, ArrowRight, Bookmark, Search } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/portfolioData';
import { LazyImage } from './LazyImage';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Informatika', 'Literasi', 'Komunitas'];

  const filteredPosts = selectedCategory === 'Semua'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            Opini & Catatan Reflektif
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Artikel & Catatan Pembelajaran
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Gagasan, pengalaman mengajar, dan catatan edukasi seputar Informatika, Literasi, dan Pemberdayaan Komunitas.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {post.image && (
                  <div className="w-full h-48 overflow-hidden relative">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 font-semibold border border-cyan-100 dark:border-cyan-900">
                      {post.category}
                    </span>

                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs mt-auto">
                <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  {post.date}
                </span>

                <a
                  href="https://www.kangruli.web.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-bold hover:underline"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
