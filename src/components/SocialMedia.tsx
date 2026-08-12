import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Video, 
  BookOpen, 
  Newspaper, 
  FileText, 
  HelpCircle, 
  Music, 
  Award,
  ExternalLink,
  Share2
} from 'lucide-react';
import { SOCIAL_LINKS_DATA } from '../data/portfolioData';

export const SocialMedia: React.FC = () => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Newspaper':
        return <Newspaper className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'Music':
        return <Music className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      default:
        return <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="social-media" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 mb-3 border border-indigo-200 dark:border-indigo-800">
            <Share2 className="w-3.5 h-3.5" />
            Jejaring Digital & Media Publikasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Media Sosial & Kanal Opini
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Terhubung di berbagai platform sosial, portal berita, blog edukasi, diskusi publik, dan karya audio.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid of Social Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOCIAL_LINKS_DATA.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500 transition-all" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs group-hover:scale-105 transition-transform">
                      {getIcon(social.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {social.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-mono">
                        {social.username}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
                    {social.category}
                  </span>
                </div>

                {social.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {social.description}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors">
                <span>Buka {social.platform}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
