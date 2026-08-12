import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, MapPin, Phone, Mail, Award, GraduationCap, Users, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import digitalLabImg from '../assets/images/digital_learning_lab_1786492016157.jpg';
import tbmReadingImg from '../assets/images/community_tbm_reading_1786492034508.jpg';
import techWorkshopImg from '../assets/images/educator_tech_workshop_1786492049421.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Mengenal Lebih Dekat
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tentang Ruli Lesmana, S.T.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Detailed Bio & Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                "{PROFILE_DATA.bioFull[0]}"
              </p>
              
              <p>
                {PROFILE_DATA.bioFull[1]}
              </p>

              <p>
                {PROFILE_DATA.bioFull[2]}
              </p>

              <p>
                {PROFILE_DATA.bioFull[3]}
              </p>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent border-l-4 border-cyan-500 text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>
                  Lulusan Program Guru Penggerak: <strong>Angkatan 10 Kabupaten Tasikmalaya</strong>
                </span>
              </div>
            </div>

            {/* Core Values & Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">
                  Pendidikan Inovatif
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Mengintegrasikan teknologi informasi modern dan berpikir komputasional dalam kelas nyata.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">
                  Gerakan Literasi
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Mendorong minat baca dan keterampilan digital lewat TBM AIUEO dan Komunitas Ngejah.
                </p>
              </div>
            </div>

            {/* Visual Activity Highlights */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <ImageIcon className="w-4 h-4 text-cyan-500" />
                <span>Dokumentasi Ruang & Lingkungan Edukasi</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl overflow-hidden relative group aspect-video">
                  <img
                    src={digitalLabImg}
                    alt="Lab Informatika & Digital Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-semibold text-white">Lab & Studio Digital</span>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden relative group aspect-video">
                  <img
                    src={tbmReadingImg}
                    alt="Taman Baca AIUEO"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-semibold text-white">TBM AIUEO Sukawangi</span>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden relative group aspect-video">
                  <img
                    src={techWorkshopImg}
                    alt="Ruang Pengembangan Modul"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-semibold text-white">Workshop & Modul TIK</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quick Profile Summary & Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              {/* Photo Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <img
                  src={PROFILE_DATA.photoUrl}
                  alt={PROFILE_DATA.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://drive.google.com/uc?export=view&id=1eS3eEVmrq9MKYnWuE8xcpoq-WwM7xaFj`;
                  }}
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-cyan-500 shadow-md shrink-0"
                />
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                    {PROFILE_DATA.name}
                  </h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                    {PROFILE_DATA.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Alamat Lengkap</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {PROFILE_DATA.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Nomor Telepon / WA</span>
                    <a href={PROFILE_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">
                      {PROFILE_DATA.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Resmi</span>
                    <a href={`mailto:${PROFILE_DATA.email}`} className="font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-600">
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Predikat & Pencapaian</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Lulusan Guru Penggerak Angkatan 10 Kab. Tasikmalaya
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Bullet Checklist */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Aktivitas Utama Saat Ini
                </span>
                
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Guru Informatika - SMKN Bojonggambir</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Tutor Informatika - PKBM Celah Cahaya</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pengelola TBM AIUEO Kampung Sukawangi</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sekretaris Komunitas Ngejah (sejak 2010)</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Asesor BAN-PDM</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
