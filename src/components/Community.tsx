import React from 'react';
import { motion } from 'motion/react';
import { Heart, BookOpen, MapPin, ExternalLink, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-3">
            <Heart className="w-3.5 h-3.5" />
            Pengabdian & Literasi Rakyat
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Gerakan Komunitas & Ruang Baca
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Membangun minat baca, pendidikan nonformal, dan pemberdayaan anak serta masyarakat pedesaan secara konsisten.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Komunitas Ngejah Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-emerald-500/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Sekretaris (Sejak 2010)
                </span>
              </div>

              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">
                Komunitas Ngejah
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Komunitas Ngejah adalah gerakan akar rumput yang bergerak secara independen dalam bidang literasi, pendidikan, sosial, dan pemberdayaan masyarakat. Ruli Lesmana aktif mengabdi sebagai Sekretaris Komunitas sejak tahun 2010.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pengelolaan Program Literasi & Lapak Baca Gratis</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Penerbitan Karya & Pendampingan Menulis Warga</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pengorganisasian Relawan & Event Edukasi Komunitas</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.komunitasngejah.web.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all"
            >
              <span>Kunjungi Website Komunitas Ngejah</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* TBM AIUEO Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-teal-500/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Pengelola Ruang Baca
                </span>
              </div>

              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">
                TBM AIUEO (Taman Baca Masyarakat)
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kampung Sukawangi, Desa Sukawangi, Kec. Singajaya, Garut</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                TBM AIUEO didirikan sebagai benteng literasi bagi anak-anak dan warga lokal di Kampung Sukawangi. Berfokus pada penyediaan sarana buku bacaan berkualitas, pendampingan belajar mandiri, serta pemberdayaan potensi anak-anak desa.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>Koleksi Bahan Bacaan Anak, Remaja & Umum</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>Pendidikan Karakter & Pendampingan Belajar Anak</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>Pemberdayaan Masyarakat Pedesaan Berbasis Literasi</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-800 dark:text-teal-300 flex items-center justify-between">
              <span className="font-semibold">Lokasi TBM: Kp. Sukawangi RT.10/01 Singajaya Garut</span>
              <Sparkles className="w-4 h-4 text-teal-500" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
