import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check, ExternalLink, Linkedin, Sparkles, Heart } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    // Construct WhatsApp message prefill
    const text = `Halo Kang Ruli, saya ${formData.name} (${formData.email}).%0A%0ASubjek: ${formData.subject}%0A%0APesan:%0A${formData.message}`;
    window.open(`https://wa.me/6281223546686?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Ruang Diskusi & Kolaborasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi Ruli Lesmana, S.T.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Terbuka untuk kolaborasi pendidikan, undangan pelatihan TIK, diskusi literasi komunitas, maupun pertukaran gagasan digital.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Saluran Komunikasi Resmi
              </h3>

              {/* Whatsapp */}
              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-between text-emerald-800 dark:text-emerald-300 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">WhatsApp Langsung</span>
                    <span className="font-heading font-extrabold text-base">{PROFILE_DATA.phoneFormatted}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-3 rounded-xl bg-cyan-600 text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email Utama</span>
                    <span className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate block">{PROFILE_DATA.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors shrink-0 ml-2"
                  title="Salin Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PROFILE_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 flex items-center justify-between text-blue-800 dark:text-blue-300 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600 text-white">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">LinkedIn Profile</span>
                    <span className="font-heading font-bold text-sm">ruli-lesmana</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Address */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <div className="p-3 rounded-xl bg-indigo-600 text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Lokasi / Domisili</span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    {PROFILE_DATA.address}
                  </span>
                </div>
              </div>

              {/* Quick Social Badges */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Jejaring Sosial & Portal</span>
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                  <a href={PROFILE_DATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 hover:bg-pink-200 transition-colors">
                    Instagram (@kang.ruli)
                  </a>
                  <a href={PROFILE_DATA.facebookUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-200 transition-colors">
                    Facebook
                  </a>
                  <a href={PROFILE_DATA.tikTokUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 transition-colors">
                    TikTok (@kangruli87)
                  </a>
                  <a href={PROFILE_DATA.kompasianaUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-200 transition-colors">
                    Kompasiana
                  </a>
                  <a href={PROFILE_DATA.kumparanUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-200 transition-colors">
                    Kumparan (Celah Cahaya)
                  </a>
                  <a href={PROFILE_DATA.wordPressUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 transition-colors">
                    WordPress Blog
                  </a>
                  <a href={PROFILE_DATA.quoraUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 hover:bg-red-200 transition-colors">
                    Quora
                  </a>
                  <a href={PROFILE_DATA.soundCloudUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 hover:bg-orange-200 transition-colors">
                    SoundCloud
                  </a>
                  <a href={PROFILE_DATA.intellifluenceUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 transition-colors">
                    Intellifluence
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                Kirim Pesan Diskusi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Isi formulir di bawah ini untuk terhubung langsung secara cepat via pesan WhatsApp terformat.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Topik / Subjek Pesan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Undangan Pelatihan / Diskusi Pembelajaran / Kolaborasi Literasi"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan gagasan, pertanyaan, atau ajakan kolaborasi Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Terformat via WhatsApp</span>
                </button>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
