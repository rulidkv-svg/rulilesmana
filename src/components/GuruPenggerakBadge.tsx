import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, CheckCircle, GraduationCap } from 'lucide-react';

export const GuruPenggerakBadge: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden my-12 rounded-3xl shadow-2xl max-w-7xl mx-auto px-6 sm:px-12 border border-cyan-500/30">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Badge Icon */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-cyan-400 p-1 shadow-lg mb-4">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Award className="w-10 h-10 text-amber-400" />
            </div>
          </div>
          
          <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase">
            Program Utama Kemendikbudristek
          </span>
          <h3 className="text-xl font-heading font-extrabold text-white mt-1">
            Guru Penggerak
          </h3>
          <span className="text-xs text-slate-300 font-medium mt-1">
            Angkatan 10 Kabupaten Tasikmalaya
          </span>
        </div>

        {/* Right Details */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-200 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Transformasi Pendidikan Digital</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
            "Berkomitmen menghadirkan pembelajaran yang inovatif, inklusif, dan relevan dengan perkembangan teknologi."
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Sebagai lulusan Program Guru Penggerak, Ruli Lesmana berfokus pada kepemimpinan pembelajaran (learning leadership), pendorong transformasi ekosistem sekolah, dan perancang metodologi pengajaran yang berpusat pada murid di SMKN Bojonggambir.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-cyan-200">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Pembelajaran Berdiferensiasi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Budaya Positif & Literasi Sekolah</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Integrasi TIK & Profil Pelajar Pancasila</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
