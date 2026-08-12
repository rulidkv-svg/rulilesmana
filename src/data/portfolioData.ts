import { Project, Experience, Education, Certification, SocialLink, HardSkill, SoftSkill, Publication, Role, StatItem, BlogPost } from '../types';
import digitalLabImg from '../assets/images/digital_learning_lab_1786492016157.jpg';
import tbmReadingImg from '../assets/images/community_tbm_reading_1786492034508.jpg';
import techWorkshopImg from '../assets/images/educator_tech_workshop_1786492049421.jpg';

export const PROFILE_DATA = {
  name: "Ruli Lesmana, S.T.",
  nickname: "Kang Ruli",
  photoUrl: "https://lh3.googleusercontent.com/d/1eS3eEVmrq9MKYnWuE8xcpoq-WwM7xaFj",
  drivePhotoUrl: "https://drive.google.com/file/d/1eS3eEVmrq9MKYnWuE8xcpoq-WwM7xaFj/view?usp=drive_link",
  tagline: "Pendidik • Teknolog • Penggerak Literasi",
  headline: "Pendidik. Teknolog. Penggerak Literasi.",
  subheadline: "Membangun pembelajaran, teknologi, dan ruang literasi untuk menciptakan generasi yang kompeten di era digital.",
  address: "Kp. Sukawangi RT. 10 RW. 01, Desa Sukawangi, Kec. Singajaya, Kab. Garut, Kode Pos 44173",
  phone: "081223546686",
  phoneFormatted: "0812-2354-6686",
  whatsappUrl: "https://wa.me/6281223546686?text=Halo%20Kang%20Ruli%2C%20saya%20tertarik%20untuk%20berdiskusi%20dan%20berkolaborasi.",
  email: "roeli.eunih.sjy@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/ruli-lesmana/",
  linkedInDisplay: "Ruli Lesmana",
  facebookUrl: "https://www.facebook.com/ruli.lesmana/",
  instagramUrl: "https://www.instagram.com/kang.ruli/",
  tikTokUrl: "https://www.tiktok.com/@kangruli87",
  kompasianaUrl: "https://www.kompasiana.com/rulilesmana7929",
  kumparanUrl: "https://kumparan.com/celah-cahaya",
  wordPressUrl: "https://rulilesm.wordpress.com/tentang-saya/",
  quoraUrl: "https://www.quora.com/profile/Ruli-Lesmana",
  soundCloudUrl: "https://soundcloud.com/ruli-lesmana",
  intellifluenceUrl: "https://intellifluence.com/influencer/ruli-lesmana-289374",
  exceedLmsUrl: "https://edu.exceedlms.com/profiles/rulilesmana46bc1d29",
  websiteUrl: "https://www.rulilesmana.my.id",
  personalWebsiteUrl: "https://www.kangruli.web.id/",
  bioShort: "Saya adalah seorang pendidik dan instruktur teknologi dengan pengalaman lebih dari 10 tahun dalam bidang Informatika, Keterampilan Komputer, dan Teknologi Informasi.",
  bioFull: [
    "Saya adalah seorang pendidik dan instruktur teknologi dengan pengalaman lebih dari 10 tahun dalam bidang Informatika, Keterampilan Komputer, dan Teknologi Informasi.",
    "Saat ini mengajar di SMKN Bojonggambir, aktif sebagai Tutor Informatika di PKBM Celah Cahaya, serta mengelola Taman Baca Masyarakat (TBM) AIUEO di Kampung Sukawangi, Singajaya, Garut.",
    "Saya juga aktif sebagai Sekretaris Komunitas Ngejah sejak tahun 2010.",
    "Merupakan lulusan Program Guru Penggerak Angkatan 10 Kabupaten Tasikmalaya dan terus mengembangkan metode pembelajaran inovatif untuk membentuk siswa yang kompeten di era digital."
  ]
};

export const SOCIAL_LINKS_DATA: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ruli-lesmana/",
    username: "ruli-lesmana",
    category: "Jejaring Profesi",
    description: "Jejaring profesional resmi, riwayat karir, dan sertifikasi kompetensi.",
    iconName: "Linkedin"
  },
  {
    id: "instagram",
    name: "Instagram",
    platform: "Instagram",
    url: "https://www.instagram.com/kang.ruli/",
    username: "@kang.ruli",
    category: "Media Sosial",
    description: "Dokumentasi kegiatan edukasi, literasi, dan aktivitas sosial sehari-hari.",
    iconName: "Instagram"
  },
  {
    id: "facebook",
    name: "Facebook",
    platform: "Facebook",
    url: "https://www.facebook.com/ruli.lesmana/",
    username: "ruli.lesmana",
    category: "Media Sosial",
    description: "Profil Facebook resmi & ruang interaksi sosial komunitas.",
    iconName: "Facebook"
  },
  {
    id: "tiktok",
    name: "TikTok",
    platform: "TikTok",
    url: "https://www.tiktok.com/@kangruli87",
    username: "@kangruli87",
    category: "Media Sosial",
    description: "Konten video edukasi TIK, tips teknologi, dan inspirasi pembelajaran.",
    iconName: "Video"
  },
  {
    id: "kompasiana",
    name: "Kompasiana",
    platform: "Kompasiana",
    url: "https://www.kompasiana.com/rulilesmana7929",
    username: "rulilesmana7929",
    category: "Blog & Opini",
    description: "Artikel opini, analisis isu pendidikan, dan gagasan literasi publik.",
    iconName: "BookOpen"
  },
  {
    id: "kumparan",
    name: "Kumparan (Celah Cahaya)",
    platform: "Kumparan",
    url: "https://kumparan.com/celah-cahaya",
    username: "@celah-cahaya",
    category: "Blog & Opini",
    description: "Kanal publikasi tulisan dan berita kegiatan PKBM & TBM Celah Cahaya.",
    iconName: "Newspaper"
  },
  {
    id: "wordpress",
    name: "WordPress Blog",
    platform: "WordPress",
    url: "https://rulilesm.wordpress.com/tentang-saya/",
    username: "rulilesm.wordpress.com",
    category: "Blog & Opini",
    description: "Blog pribadi seputar jurnal pembelajaran, artikel edukasi, dan gagasan.",
    iconName: "FileText"
  },
  {
    id: "quora",
    name: "Quora",
    platform: "Quora",
    url: "https://www.quora.com/profile/Ruli-Lesmana",
    username: "Ruli-Lesmana",
    category: "Blog & Opini",
    description: "Diskusi, jawaban, dan ulasan seputar dunia TIK & ilmu pendidikan.",
    iconName: "HelpCircle"
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    platform: "SoundCloud",
    url: "https://soundcloud.com/ruli-lesmana",
    username: "ruli-lesmana",
    category: "Karya & Audio",
    description: "Koleksi karya audio, narasi literasi, dan siaran dokumentasi suara.",
    iconName: "Music"
  },
  {
    id: "intellifluence",
    name: "Intellifluence",
    platform: "Intellifluence",
    url: "https://intellifluence.com/influencer/ruli-lesmana-289374",
    username: "ruli-lesmana-289374",
    category: "Jejaring Profesi",
    description: "Profil influens & kolaborasi kampanye edukasi digital.",
    iconName: "Globe"
  },
  {
    id: "exceed-lms",
    name: "Google / Exceed LMS Profile",
    platform: "Exceed LMS",
    url: "https://edu.exceedlms.com/profiles/rulilesmana46bc1d29",
    username: "rulilesmana46bc1d29",
    category: "Jejaring Profesi",
    description: "Profil sertifikasi resmi, badge kompetensi, dan rekam jejak pelatihan Google Exceed LMS.",
    iconName: "Award"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "kang-ruli",
    title: "Kang Ruli Personal Website",
    description: "Website personal dan pusat informasi mengenai profil, aktivitas, serta karya Ruli Lesmana, S.T.",
    url: "https://www.kangruli.web.id/",
    category: "Personal",
    previewUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    tags: ["Personal Hub", "CMS", "Branding", "Responsive"],
    year: "2023",
    features: ["Profil Aktivitas", "Kumpulan Karya", "Informasi Layanan Edukasi", "Blog Personal"],
    isHighlight: true
  },
  {
    id: "dkv-learn-studio",
    title: "DKV Learn Studio",
    description: "Platform pembelajaran dan eksplorasi materi Desain Komunikasi Visual untuk siswa dan pembelajar digital.",
    url: "https://dkv-learnstudio.kangruli.web.id/",
    category: "Pembelajaran",
    previewUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Visual Design", "E-Learning", "Modul Digital", "Interaktif"],
    year: "2023",
    features: ["Galeri Desain", "Modul Pembelajaran DKV", "Latihan & E-Resource", "Portofolio Siswa"],
    isHighlight: true
  },
  {
    id: "digital-learn-studio",
    title: "Digital Learn Studio",
    description: "Platform pembelajaran berbasis teknologi dan literasi digital untuk meningkatkan kompetensi TIK.",
    url: "https://digital-learnstudio.kangruli.web.id/",
    category: "Pembelajaran",
    previewUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Digital Literacy", "Informatika", "Tech Platform", "Interactive"],
    year: "2022",
    features: ["Materi Informatika", "Panduan Tool TIK", "Quiz & Evaluasi", "Literasi Digital"],
    isHighlight: true
  },
  {
    id: "komunitas-ngejah",
    title: "Komunitas Ngejah",
    description: "Platform komunitas yang bergerak dalam bidang literasi, pendidikan, dan pemberdayaan masyarakat.",
    url: "https://www.komunitasngejah.web.id/",
    category: "Komunitas",
    previewUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    tags: ["Literasi", "Komunitas", "Sosial", "Pemberdayaan"],
    year: "2021",
    features: ["Portal Berita Komunitas", "Katalog Bacaan TBM", "Dokumentasi Kegiatan", "Program Relawan"],
    isHighlight: true
  },
  {
    id: "celah-cahaya",
    title: "PKBM Celah Cahaya",
    description: "Platform digital resmi lembaga pendidikan nonformal Celah Cahaya untuk kesetaraan dan literasi masyarakat.",
    url: "https://www.celahcahaya.sch.id/",
    category: "Pendidikan Nonformal",
    previewUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    tags: ["Pendidikan Nonformal", "Kesetaraan", "PKBM", "Informasi Akademik"],
    year: "2021",
    features: ["Informasi Pendaftaran", "Modul Pembelajaran Paket", "Galeri Pembelajaran", "Layanan Siswa"],
    isHighlight: true
  },
  {
    id: "lpk-alpha-beta",
    title: "LPK Alpha Beta",
    description: "Platform lembaga pelatihan yang berfokus pada pengembangan keterampilan TIK dan teknologi informasi profesional.",
    url: "https://www.lpkalphabeta.eu.org/",
    category: "Pelatihan TIK",
    previewUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    tags: ["Pelatihan TIK", "Komputer", "Keterampilan Kerja", "Vokasi"],
    year: "2020",
    features: ["Program Pelatihan TIK", "Jadwal Kursus", "Sertifikasi", "Sistem Pendaftaran"],
    isHighlight: true
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "smkn-bojonggambir",
    institution: "SMK Negeri Bojonggambir",
    role: "Guru Informatika",
    period: "2019 – Sekarang",
    isCurrent: true,
    description: "Bertanggung jawab merancang dan mengimplementasikan kurikulum Informatika yang kontekstual dan berbasis teknologi untuk siswa Kelas X.",
    bullets: [
      "Mengajar mata pelajaran Informatika untuk Kelas X secara mandiri dan kolaboratif.",
      "Merancang pembelajaran berbasis teknologi dan project-based learning (PBL).",
      "Membimbing proyek-proyek teknologi siswa serta pengembangan karya digital.",
      "Lulus dan menerapkan hasil Program Guru Penggerak Angkatan 10 Kabupaten Tasikmalaya.",
      "Menerapkan praktik pembelajaran inovatif, inklusif, dan relevan dengan perkembangan industri."
    ],
    location: "Kab. Tasikmalaya",
    badge: "Pendidikan Formal"
  },
  {
    id: "pkbm-celah-cahaya",
    institution: "PKBM Celah Cahaya",
    role: "Tutor Informatika",
    period: "2019 – Sekarang",
    isCurrent: true,
    description: "Memberikan bimbingan keterampilan komputer dasar dan literasi digital kepada peserta didik pendidikan nonformal.",
    bullets: [
      "Mengajar keterampilan dasar komputer dan pengelolaan informasi.",
      "Mengembangkan kurikulum fleksibel yang sesuai dengan kebutuhan peserta didik nonformal.",
      "Mendorong peningkatan literasi digital masyarakat pedesaan."
    ],
    url: "https://www.celahcahaya.sch.id/",
    location: "Kab. Garut",
    badge: "Pendidikan Nonformal"
  },
  {
    id: "ban-pdm",
    institution: "BAN-PDM (Badan Akreditasi Nasional)",
    role: "Asesor Akreditasi",
    period: "2018 – Sekarang",
    isCurrent: true,
    description: "Menjalankan evaluasi dan visitasi penjaminan mutu mutu pendidikan dasar, menengah, dan PAUD/PNF.",
    bullets: [
      "Melakukan penilaian dokumen dan visitasi lapangan ke satuan pendidikan.",
      "Menyusun rekomendasi penjaminan mutu mutu sekolah dan lembaga pendidikan.",
      "Menjaga standar kualitas akreditasi secara obyektif dan akuntabel."
    ],
    location: "Jawa Barat",
    badge: "Asesmen & Mutu"
  },
  {
    id: "lpk-alpha-beta",
    institution: "LPK Alpha Beta",
    role: "Instruktur TIK",
    period: "2019 – 2022",
    description: "Memberikan pelatihan praktis bidang Teknologi Informasi dan Komunikasi untuk peserta kursus vokasi.",
    bullets: [
      "Memberikan pelatihan TIK untuk peserta didik dengan berbagai latar belakang usia dan pendidikan.",
      "Menyusun modul pelatihan praktis perkantoran dan aplikasi dasar.",
      "Membimbing uji kompetensi siswa pelatihan."
    ],
    url: "https://www.lpkalphabeta.eu.org/",
    location: "Kab. Garut",
    badge: "Pelatihan Vokasi"
  },
  {
    id: "smk-riyadlul-huda",
    institution: "SMK Riyadlul Huda Garut",
    role: "Guru Keterampilan Komputer & Pengelolaan Informasi (KKPI)",
    period: "2011 – 2019",
    description: "Mengampu mata pelajaran KKPI selama 8 tahun dan membimbing kompetensi dasar siswa di bidang TI.",
    bullets: [
      "Mengajar konsep dasar komputer, pengolahan data, dan manajemen informasi.",
      "Mengelola laboratorium komputer sekolah.",
      "Membimbing persiapan ujian praktik siswa."
    ],
    location: "Kab. Garut",
    badge: "Pendidikan Formal"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "stmik-dci",
    institution: "STMIK DCI Tasikmalaya",
    degree: "S1 Teknik Informatika (S.T.)",
    period: "2008 – 2012",
    status: "Selesai",
    description: "Mempelajari pemograman, rekayasa perangkat lunak, sistem basis data, dan arsitektur jaringan komputer.",
    location: "Tasikmalaya",
    highlights: ["Gelar Gelar Sarjana Teknik (S.T.)", "Algoritma & Pemrograman", "Rekayasa Perangkat Lunak"]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "sertifikat-pendidik-gr",
    title: "Sertifikat Pendidik - Guru (Gr.) Informatika",
    issuer: "Kemendikbudristek & Universitas Pendidikan Indonesia (UPI)",
    issueDate: "14 November 2024",
    certNumber: "001034869042422530059",
    category: "Sertifikasi Profesi",
    badgeTag: "Profesi Resmi",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Lulus Uji Kompetensi Peserta Pendidikan Profesi Guru (PPG) Informatika dan resmi memperoleh sebutan profesi Guru (Gr.) Informatika."
  },
  {
    id: "ms-ai-teaching-power-kemenag",
    title: "AI Teaching Power: AI for Educators and 21st Century Learning Design",
    issuer: "Microsoft Indonesia & Kementerian Agama RI",
    issueDate: "17 Juni 2026",
    certNumber: "36486/AITeachingPower/X/2026",
    category: "Microsoft & AI",
    hours: "16 JP",
    badgeTag: "Microsoft Elevate",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Pelatihan komprehensif integrasi kecerdasan buatan dalam desain pembelajaran abad ke-21 untuk tenaga pendidik."
  },
  {
    id: "ms-dicoding-data-science-azure",
    title: "Penerapan Data Science (Microsoft Fabric) & Gen AI (Azure)",
    issuer: "Microsoft Indonesia & Dicoding",
    issueDate: "04 Juni 2026",
    certNumber: "PREIB0EKXE",
    category: "Microsoft & AI",
    hours: "14 JP",
    badgeTag: "Microsoft Elevate",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Pelatihan intensif eksplorasi data, pengembangan machine learning dengan Microsoft Fabric, serta pembuatan aplikasi Gen AI pada Microsoft Azure."
  },
  {
    id: "dicoding-gen-ai-azure",
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding & Microsoft",
    issueDate: "04 Juni 2026",
    certNumber: "1RXYWJ07KZVM",
    category: "Microsoft & AI",
    hours: "8 JP",
    badgeTag: "Kelulusan Dicoding",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Sertifikat Kompetensi Kelulusan penguasaan Azure AI Foundry, deployment Large Language Model (LLM), Prompt Flow, dan alur RAG."
  },
  {
    id: "dicoding-data-science-fabric",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding & Microsoft",
    issueDate: "04 Juni 2026",
    certNumber: "RVZK0JO1QZD5",
    category: "Microsoft & AI",
    hours: "6 JP",
    badgeTag: "Kelulusan Dicoding",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Sertifikat Kompetensi Kelulusan analitik end-to-end, pemrosesan data notebook, experiment tracking MLflow, dan batch prediction."
  },
  {
    id: "dicoding-pemrograman-python",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding & Google Developers",
    issueDate: "05 Juni 2026",
    certNumber: "EYX4QEGM6PDL",
    category: "Pemrograman & IT",
    hours: "60 JP",
    badgeTag: "Google Authorized",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Sertifikat Kompetensi Kelulusan penguasaan dasar Python, struktur data, kontrol alur, OOP, unit testing, dan library populer."
  },
  {
    id: "bpsdm-jabar-pendamping-guru",
    title: "Pendamping Pelatihan Peningkatan Kompetensi Guru Berkelanjutan",
    issuer: "BPSDM & BBGP Provinsi Jawa Barat",
    issueDate: "31 Juli 2025",
    certNumber: "263.6/KPG.03.01.03/BPSDM",
    category: "Peningkatan Kompetensi & Literasi",
    hours: "16 JP",
    badgeTag: "Pemprov Jabar",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Sertifikat Pendamping Pelatihan Peningkatan Kompetensi Guru Berkelanjutan bagi Guru SMA, SMK, dan SLB Batch 5 Provinsi Jawa Barat."
  },
  {
    id: "ms-mce-persiapan",
    title: "Persiapan Sertifikasi Microsoft Certified Educator (MCE)",
    issuer: "Microsoft Indonesia & Mereka",
    issueDate: "01 Februari 2026",
    certNumber: "49188dbe",
    category: "Microsoft & AI",
    hours: "2.5 JP",
    badgeTag: "Microsoft Elevate",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Pelatihan strategi integrasi teknologi dan kesiapan ujian kompetensi pedagogi digital Microsoft Certified Educator."
  },
  {
    id: "ms-ai-educators-lazisnu",
    title: "AI for Educators and Agent in a Day",
    issuer: "Microsoft Indonesia & NU Care Global (LazisNU)",
    issueDate: "17 Juni 2026",
    certNumber: "36486/AITeachingPower/X/2026",
    category: "Microsoft & AI",
    hours: "1 JP",
    badgeTag: "Microsoft Elevate",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Pelatihan pemanfaatan AI agent dan tools kecerdasan buatan dalam mendukung produktivitas tenaga pendidik."
  },
  {
    id: "ms-copilot-badges-completion",
    title: "Microsoft Educator Explorer & AI Fluency Pathway Badges",
    issuer: "Microsoft, Biji-biji Initiative & Mereka",
    issueDate: "30 Mei 2026",
    certNumber: "59b6cb69 / 9eecd210 / b02eccec / 139d24da",
    category: "Microsoft & AI",
    badgeTag: "Badge Completion",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Badge resmi kelulusan modul AI Fluency Pathway: Microsoft Copilot, Generative AI, Explore AI Basics, dan Internet Search."
  },
  {
    id: "ban-paud-asesor-ppkpa",
    title: "Pelatihan Peningkatan Kompetensi dan Pembinaan Asesor (PPK-PA)",
    issuer: "BAN PAUD DAN PNF (Badan Akreditasi Nasional)",
    issueDate: "2022",
    certNumber: "0823/AS-PPK-PA/BAN PAUD DAN PNF/2022",
    category: "Sertifikasi Profesi",
    badgeTag: "Asesor Akreditasi",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Sertifikat Pelatihan Asesor Penjaminan Mutu dan Akreditasi Satuan Pendidikan PAUD dan Pendidikan Nonformal."
  },
  {
    id: "vokasi-bisa-ai-animasi",
    title: "Pemanfaatan AI untuk Pembuatan Video Animasi Pembelajaran",
    issuer: "Yayasan Vokasi Bisa Indonesia",
    issueDate: "14 Juli 2026",
    certNumber: "13.010/TRN/YVBI/VII/2026",
    category: "Microsoft & AI",
    badgeTag: "Webinar AI",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Sertifikat Penghargaan pembuatan media pembelajaran berbasis AI dan animasi edukatif interaktif."
  },
  {
    id: "deepublish-manajemen-arsip-perpustakaan",
    title: "Manajemen Arsip dan Koleksi Perpustakaan: Praktik, Tantangan, dan Inovasi",
    issuer: "Penerbit Deepublish",
    issueDate: "28 Juli 2026",
    certNumber: "2081/DAK-25/S/VII/2026",
    category: "Peningkatan Kompetensi & Literasi",
    badgeTag: "Deepublish Store",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Peserta Webinar Nasional mengenai strategi manajemen kearsipan modern, tantangan tata kelola koleksi perpustakaan, dan inovasi literasi digital."
  },
  {
    id: "unesa-sarasehan-literasi",
    title: "Sarasehan Literasi: Literasi, Gender dan Inklusi Sosial",
    issuer: "Universitas Negeri Surabaya (UNESA)",
    issueDate: "31 Agustus 2024",
    certNumber: "92335/UN38.III.1/DL.01.02/2024",
    category: "Peningkatan Kompetensi & Literasi",
    badgeTag: "Literasi Nasional",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Partisipasi aktif dalam sarasehan literasi nasional penguatan kesetaraan gender dan pendidikan inklusif."
  },
  {
    id: "kominfo-siberkreasi-literasi-digital",
    title: "Literasi Digital Nasional: #MakinCakapDigital",
    issuer: "Kementerian Kominfo RI & Siberkreasi",
    issueDate: "19 Juli 2021",
    certNumber: "2005968/6-5235/LITDIG/2021",
    category: "Peningkatan Kompetensi & Literasi",
    badgeTag: "Kominfo RI",
    credentialUrl: "https://drive.google.com/drive/folders/1fXxsvYnu1ew5qw71lH_OrCPpcmU_nSj9?usp=sharing",
    description: "Sertifikat kelulusan Gerakan Nasional Literasi Digital untuk mewujudkan masyarakat cakap dan etis berinternet."
  }
];

export const HARD_SKILLS_DATA: HardSkill[] = [
  { name: "Office 365 / Workspace", level: "Advanced", category: "Produktivitas", description: "Penguasaan penuh aplikasi produktivitas digital, pengelolaan dokumen, dan kolaborasi cloud." },
  { name: "Informatika & Kurikulum TIK", level: "Advanced", category: "Teknologi & Literasi", description: "Perancangan kurikulum pembelajaran Informatika, algoritma dasar, dan berpikir komputasional." },
  { name: "Web Development (HTML, CSS, JS/TS)", level: "Advanced", category: "Pengembangan Web", description: "Membangun platform web responsif, portal portal edukasi, dan sistem informasi komunitas." },
  { name: "Teknologi Informasi & Jaringan Dasar", level: "Advanced", category: "Teknologi & Literasi", description: "Infrastruktur dasar IT, tata kelola data, dan pengelolaan lab komputer sekolah." },
  { name: "Literasi Digital & Cyber Safety", level: "Advanced", category: "Teknologi & Literasi", description: "Edukasi pemanfaatan internet secara bijak, aman, dan produktif untuk pelajar dan masyarakat." },
  { name: "Pengembangan Aplikasi / Pemrograman", level: "Intermediate", category: "Pengembangan Web", description: "Dasar pemrograman perangkat lunak, struktur data, dan logika aplikasi web." },
  { name: "Digital Learning Platform (LMS)", level: "Advanced", category: "Pembelajaran Digital", description: "Pengelolaan Google Classroom, Moodle, dan platform pembelajaran mandiri digital." },
  { name: "Desain Komunikasi Visual Dasar", level: "Intermediate", category: "Pembelajaran Digital", description: "Media pembelajaran visual, materi grafis DKV, dan penyuntingan konten edukasi." }
];

export const SOFT_SKILLS_DATA: SoftSkill[] = [
  { name: "Mengajar & Pedagogi", description: "Kemampuan menyajikan materi kompleks menjadi mudah dipahami oleh peserta didik dari beragam usia.", iconName: "GraduationCap" },
  { name: "Kepemimpinan & Penggerak", description: "Memimpin pergerakan komunitas literasi dan mendorong kolaborasi antar pendidik.", iconName: "Users" },
  { name: "Komunikasi Efektif", description: "Menyampaikan pemikiran, narasi edukasi, dan gagasan literasi secara persuasif dan humanis.", iconName: "MessageSquare" },
  { name: "Empati & Inklusivitas", description: "Memahami latar belakang siswa dan masyarakat untuk menciptakan pembelajaran yang inklusif.", iconName: "Heart" },
  { name: "Manajemen Waktu & Organisasi", description: "Mengelola tugas mengajar, kepengurusan komunitas, dan asesmen secara seimbang.", iconName: "Clock" },
  { name: "Kolaborasi Komunitas", description: "Membangun jejaring aktif dengan penggerak pendidikan, TBM, dan instansi pemerintah.", iconName: "Share2" },
  { name: "Problem Solving", description: "Menemukan solusi solutif terhadap keterbatasan fasilitas TIK di daerah melalui pendekatan kreatif.", iconName: "Lightbulb" }
];

export const ROLES_DATA: Role[] = [
  {
    id: "pendidik",
    icon: "GraduationCap",
    title: "Pendidik",
    subtitle: "SMKN Bojonggambir",
    description: "Guru Informatika yang berdedikasi mengajar siswa Kelas X dengan metode inovatif berbasis project-based learning."
  },
  {
    id: "instruktur",
    icon: "Laptop",
    title: "Instruktur Teknologi",
    subtitle: "PKBM & LPK",
    description: "Mengembangkan keterampilan komputer, pengolahan data, dan literasi TIK bagi pelajar dan masyarakat."
  },
  {
    id: "literasi",
    icon: "BookOpen",
    title: "Pegiat Literasi",
    subtitle: "TBM AIUEO Sukawangi",
    description: "Mengelola Taman Baca Masyarakat (TBM) AIUEO di Kampung Sukawangi untuk menumbuhkan minat baca masyarakat."
  },
  {
    id: "komunitas",
    icon: "Users",
    title: "Penggerak Komunitas",
    subtitle: "Sekretaris Komunitas Ngejah",
    description: "Aktif mengabdi di Komunitas Ngejah sejak tahun 2010 dalam gerakan literasi dan pemberdayaan masyarakat."
  },
  {
    id: "creator",
    icon: "Sparkles",
    title: "Digital Creator",
    subtitle: "Developer Modul Digital",
    description: "Merancang platform DKV Learn Studio & Digital Learn Studio sebagai ruang eksplorasi belajar mandiri."
  },
  {
    id: "asesor",
    icon: "Award",
    title: "Asesor Akreditasi",
    subtitle: "BAN-PDM",
    description: "Melakukan asesmen dan verifikasi kelayakan mutu di lembaga pendidikan formal dan nonformal."
  }
];

export const STATS_DATA: StatItem[] = [
  { id: "stat-1", value: 10, suffix: "+", label: "Tahun Pengalaman", subtext: "Dunia Pendidikan & TIK" },
  { id: "stat-2", value: 6, suffix: "+", label: "Institusi / Organisasi", subtext: "Dedikasi Profesional" },
  { id: "stat-3", value: 5, suffix: "+", label: "Platform Digital", subtext: "Platform Pembelajaran & Portofolio" },
  { id: "stat-4", value: 2010, suffix: "", prefix: "Sejak ", label: "Aktif di Komunitas Ngejah", subtext: "Gerakan Literasi Masyarakat" },
  { id: "stat-5", value: 1, suffix: "", label: "Semangat Utama", subtext: "Pendidikan & Literasi Digital" }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "buku-singajaya",
    type: "Buku",
    title: "Singajaya vs Singapura",
    year: "2016",
    publisherOrEvent: "Gong Publishing",
    description: "Buku karya tulisan Ruli Lesmana yang merefleksikan dinamika kehidupan, pendidikan, dan catatan kritis daerah tempat tinggalnya dengan gaya penulisan inspiratif.",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "artikel-mimbar",
    type: "Artikel",
    title: "Meningkatkan Interaksi Membaca melalui Program MIMBAR LITERASI di SMKN Bojonggambir",
    year: "2024",
    publisherOrEvent: "Publikasi Pendidikan / Jurnal Pembelajaran Inovatif",
    description: "Artikel praktik baik (best practice) mengenai perancangan dan dampak program 'MIMBAR LITERASI' dalam membangun budaya membaca interaktif bagi siswa SMK.",
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pembicara-blogging",
    type: "Pembicara",
    title: "Pelatihan Jurnalistik Pelajar: Blogging untuk Pelajar",
    year: "2015",
    publisherOrEvent: "Kegiatan Jurnalistik & Literasi Pelajar Garut",
    topic: "Blogging untuk Pelajar: Membangun Karakter & Literasi Digital lewat Media Personal",
    description: "Narasumber dan instruktur pelatihan pemanfaatan platform blog bagi pelajar untuk mengasah keterampilan menulis, berpikir kritis, dan mengekspresikan karya.",
    coverImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "post-1",
    title: "Integrasi Thinking Computational dalam Pembelajaran Informatika SMK",
    category: "Informatika",
    date: "12 Juli 2024",
    excerpt: "Bagaimana cara menyajikan konsep logika pemrograman dan berpikir komputasional secara menyenangkan dan kontekstual bagi siswa SMK?",
    readTime: "4 menit baca",
    author: "Ruli Lesmana, S.T.",
    image: digitalLabImg
  },
  {
    id: "post-2",
    title: "Membangun Budaya Literasi Sekolah lewat Program Mimbar Literasi",
    category: "Literasi",
    date: "28 Mei 2024",
    excerpt: "Catatan reflektif pelaksanaan program Mimbar Literasi di SMKN Bojonggambir yang berhasil meningkatkan minat baca siswa.",
    readTime: "5 menit baca",
    author: "Ruli Lesmana, S.T.",
    image: tbmReadingImg
  },
  {
    id: "post-3",
    title: "Peran TBM di Era Digital: Antara Buku Cetak dan Akses Informasi",
    category: "Komunitas",
    date: "10 Februari 2024",
    excerpt: "Taman Baca Masyarakat (TBM) tidak hanya sebagai gudang buku, melainkan ruang tumbuh, diskusi, dan jembatan literasi digital masyarakat.",
    readTime: "6 menit baca",
    author: "Ruli Lesmana, S.T.",
    image: techWorkshopImg
  }
];
