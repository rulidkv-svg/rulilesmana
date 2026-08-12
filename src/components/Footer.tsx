import React from 'react';
import { Heart, Globe, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-cyan-500/20">
                RL
              </div>
              <div>
                <h3 className="text-lg font-heading font-extrabold text-white">
                  Ruli Lesmana, S.T.
                </h3>
                <p className="text-xs text-cyan-400 font-semibold">
                  Guru Informatika & Penggerak Literasi
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Membangun transformasi pendidikan teknologi berbasis kecerdasan buatan, budaya literasi, dan pemberdayaan masyarakat lokal secara berkelanjutan.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PROFILE_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.kangruli.web.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white transition-colors"
                title="Website Utama"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Profil Singkat</a></li>
              <li><a href="#roles" className="hover:text-cyan-400 transition-colors">Peran & Tanggung Jawab</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Pengalaman Kerja</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Inovasi Digital & AI</a></li>
              <li><a href="#community" className="hover:text-cyan-400 transition-colors">Komunitas & TBM AIUEO</a></li>
            </ul>
          </div>

          {/* Digital Ecosystem */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Ekosistem Web Terkait
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.kangruli.web.id/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-500" />
                  <span>kangruli.web.id (Blog Utama)</span>
                </a>
              </li>
              <li>
                <a href="https://www.smknbojonggambir.sch.id/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  <span>smknbojonggambir.sch.id (Sekolah)</span>
                </a>
              </li>
              <li>
                <a href="https://www.komunitasngejah.web.id/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-500" />
                  <span>komunitasngejah.web.id (Literasi)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ruli Lesmana, S.T. Hak Cipta Dilindungi.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
