import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { PROFILE_DATA, EXPERIENCES_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, HARD_SKILLS_DATA, ROLES_DATA } from '../data/portfolioData';
import { LazyImage } from './LazyImage';
import ruliPhoto from '../assets/profile.jpg';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white text-slate-900 w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl my-auto print:shadow-none print:rounded-none print:m-0 print:max-w-none print:max-h-none"
        >
          {/* Header Action Bar (Hidden on print) */}
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2 sticky top-0 z-10 print:hidden">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xs sm:text-sm">Curriculum Vitae</span>
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Ruli Lesmana, S.T.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] sm:text-xs font-semibold transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak / PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Tutup CV"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content */}
          <div className="p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 font-sans">
            
            {/* Header / Bio */}
            <div className="border-b-2 border-slate-900 pb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <LazyImage
                    src={ruliPhoto || PROFILE_DATA.photoUrl}
                    alt={PROFILE_DATA.name}
                    containerClassName="w-20 h-24 rounded-xl overflow-hidden shrink-0 border-2 border-slate-900 shadow-sm"
                    className="w-full h-full object-cover object-top"
                  />
                  <div>
                    <h1 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                      {PROFILE_DATA.name}
                    </h1>
                    <p className="text-sm font-bold text-cyan-700 mt-1">
                      {PROFILE_DATA.headline}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Guru Penggerak Angkatan 10 Kab. Tasikmalaya | SMKN Bojonggambir
                    </p>
                  </div>
                </div>

                <div className="text-xs space-y-1 text-slate-600 sm:text-right">
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{PROFILE_DATA.email}</span>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{PROFILE_DATA.phoneFormatted}</span>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Singajaya & Bojonggambir, Tasikmalaya</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Ringkasan Eksekutif
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {PROFILE_DATA.bioFull[0]}
              </p>
            </div>

            {/* Roles Highlight */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Jabatan & Tanggung Jawab Utama
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ROLES_DATA.map((role) => (
                  <div key={role.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-[10px] font-bold text-cyan-700 uppercase">{role.subtitle}</span>
                    <span className="block text-xs font-bold text-slate-900">{role.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Pengalaman Kerja & Pengabdian
              </h2>
              <div className="space-y-4">
                {EXPERIENCES_DATA.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-slate-300 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-[10px] font-semibold text-slate-500">{exp.period}</span>
                    </div>
                    <p className="text-[11px] font-semibold text-cyan-700">{exp.institution}</p>
                    <p className="text-[11px] text-slate-600 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Riwayat Pendidikan
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start text-xs border-b border-slate-100 pb-2">
                    <div>
                      <span className="font-bold text-slate-900 block">{edu.degree}</span>
                      <span className="text-slate-600 text-[11px]">{edu.institution}</span>
                    </div>
                    <span className="font-semibold text-slate-500 text-[10px]">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Lisensi, Sertifikasi & Pelatihan Resmi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {CERTIFICATIONS_DATA.slice(0, 10).map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.credentialUrl || "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-50 hover:bg-cyan-50/50 rounded-lg border border-slate-200/80 hover:border-cyan-400 flex flex-col justify-between transition-colors group cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-slate-900 group-hover:text-cyan-700 block text-[11px] leading-snug">{cert.title}</span>
                      <span className="text-cyan-700 text-[10px] font-semibold">{cert.issuer}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1.5 pt-1 border-t border-slate-200/50">
                      <span>{cert.issueDate}</span>
                      {cert.hours && <span className="font-semibold text-amber-700">{cert.hours}</span>}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Keahlian & Kompetensi Utama
              </h2>
              <div className="flex flex-wrap gap-2">
                {HARD_SKILLS_DATA.map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-medium border border-slate-200">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="bg-slate-50 border-t border-slate-200 px-8 py-4 text-center text-[11px] text-slate-500 print:bg-white">
            Dokumen Curriculum Vitae resmi Ruli Lesmana, S.T. Diperbarui otomatis melalui portofolio digital.
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
