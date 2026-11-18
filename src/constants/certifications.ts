// PDF certificate assets
import digitalTalentPdf from '../assets/certificates/Sertifikat_MUHAMMAD FATHURRAIHAN SAPUTRA_Junior Web Developer (2).pdf';
import simpegPatentPdf from '../assets/certificates/sertifikat_EC002024256147.pdf';

// Image award assets
import pcFestImg from '../assets/certificates/sertifikat_PC_FEST_2023.jpg';

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfAsset?: string;
  imageAsset?: string;
  skills: string[];
  category: 'cloud' | 'web' | 'mobile' | 'data' | 'uiux' | 'award' | 'patent' | 'other';
};

export const certifications: Certification[] = [
  {
    id: 'junior-web-developer-dts',
    name: 'Junior Web Developer (Vocational School Graduate Academy)',
    issuer: 'Digital Talent Scholarship',
    date: 'Aug 2024',
    credentialId: '19393121140-34',
    pdfAsset: digitalTalentPdf,
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    category: 'web',
  },
  {
    id: 'google-ux-design-foundations',
    name: 'Foundations of User Experience (UX) Design',
    issuer: 'Google via Coursera',
    date: 'Sep 2024',
    credentialId: 'P9CL79XSTF8X',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/P9CL79XSTF8X',
    skills: ['User Experience (UX)', 'User Interface Design', 'UX Research'],
    category: 'uiux',
  },
  {
    id: 'hak-paten-simpeg',
    name: 'Hak Paten – Sistem Informasi Manajemen Kepegawaian (SIMPEG)',
    issuer: 'Kementerian Hukum dan HAM / DJKI',
    date: '2024',
    credentialId: 'EC002024256147',
    pdfAsset: simpegPatentPdf,
    skills: ['Software Engineering', 'System Design', 'Web Application'],
    category: 'patent',
  },
  {
    id: 'pc-fest-2023-tipografi',
    name: 'Juara 1 – PC Fest 2023: Tipografi Digital Painting',
    issuer: 'PC Fest 2023',
    date: '2023',
    imageAsset: pcFestImg,
    skills: ['Digital Painting', 'Typography', 'Visual Design'],
    category: 'award',
  },
];

export const categoryLabel: Record<Certification['category'], string> = {
  cloud: 'Cloud',
  web: 'Web Dev',
  mobile: 'Mobile',
  data: 'Data / ML',
  uiux: 'UI/UX',
  patent: 'Patent',
  award: 'Award',
  other: 'Other',
};
