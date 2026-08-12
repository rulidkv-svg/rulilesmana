export type ProjectCategory = 'Semua' | 'Personal' | 'Pembelajaran' | 'Komunitas' | 'Pendidikan Nonformal' | 'Pelatihan TIK';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ProjectCategory;
  previewUrl: string;
  tags: string[];
  features?: string[];
  year?: string;
  isHighlight?: boolean;
}

export interface Experience {
  id: string;
  institution: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  bullets: string[];
  url?: string;
  location?: string;
  badge?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: 'Sedang Berjalan' | 'Selesai';
  description: string;
  location: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  certNumber?: string;
  category: 'Sertifikasi Profesi' | 'Microsoft & AI' | 'Pemrograman & IT' | 'Peningkatan Kompetensi & Literasi';
  credentialUrl?: string;
  description?: string;
  badgeTag?: string;
  hours?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  platform: string;
  url: string;
  username: string;
  category: 'Media Sosial' | 'Blog & Opini' | 'Karya & Audio' | 'Jejaring Profesi';
  description?: string;
  iconName?: string;
}

export interface HardSkill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Basic';
  category: 'Produktivitas' | 'Pengembangan Web' | 'Pembelajaran Digital' | 'Teknologi & Literasi';
  description?: string;
}

export interface SoftSkill {
  name: string;
  description: string;
  iconName: string;
}

export interface Publication {
  id: string;
  type: 'Buku' | 'Artikel' | 'Pembicara';
  title: string;
  year: string;
  publisherOrEvent?: string;
  topic?: string;
  description: string;
  coverImage?: string;
  link?: string;
}

export interface Role {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  subtext: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Pendidikan' | 'Informatika' | 'Teknologi' | 'Literasi' | 'Komunitas' | 'Digital Learning';
  date: string;
  excerpt: string;
  readTime: string;
  author: string;
  image?: string;
}
