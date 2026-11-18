import { useState } from 'react';
import { OpenNewWindow, Medal, BadgeCheck, Download, Page } from 'iconoir-react';
import { certifications, categoryLabel, type Certification } from '../../constants/certifications';

type SectionProps = { isDark: boolean };

const mono = { fontFamily: "'Cascadia Mono', 'Cascadia Code', Consolas, monospace" };

const categoryColors: Record<Certification['category'], { dark: string; light: string }> = {
  cloud:  { dark: 'bg-[#1a3020] text-[#89d185]',   light: 'bg-[#dff0df] text-[#2d6a35]' },
  web:    { dark: 'bg-[#1a2b40] text-[#9cdcfe]',   light: 'bg-[#ddeeff] text-[#1a4a7a]' },
  mobile: { dark: 'bg-[#2a1a30] text-[#c586c0]',   light: 'bg-[#f3e8ff] text-[#6b2d8a]' },
  data:   { dark: 'bg-[#2a2010] text-[#dcdcaa]',   light: 'bg-[#fff8dc] text-[#7a5a00]' },
  uiux:   { dark: 'bg-[#2a1a1a] text-[#f44747]',   light: 'bg-[#ffe8e8] text-[#9b1c1c]' },
  award:  { dark: 'bg-[#2a2000] text-[#ffd700]',   light: 'bg-[#fff8e1] text-[#9a7000]' },
  patent: { dark: 'bg-[#1a1a2a] text-[#c8a0f0]',   light: 'bg-[#ede8ff] text-[#4a2080]' },
  other:  { dark: 'bg-[#1e1e1e] text-[#d4d4d4]',   light: 'bg-[#f0f0f0] text-[#4a4a4a]' },
};

const ALL = 'all';
type Filter = Certification['category'] | typeof ALL;

function CertCard({ cert, isDark }: { cert: Certification; isDark: boolean }) {
  const catColor = categoryColors[cert.category];

  return (
    <div
      className={`
        flex flex-col rounded-lg p-5 border transition-all duration-200
        ${isDark
          ? 'bg-[#0f1c10] border-[#1e3a22] hover:border-[#89d185]'
          : 'bg-white border-[#c8dcc8] hover:border-[#2d6a35]'}
      `}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className={`p-2 rounded-md ${isDark ? 'bg-[#1a3020]' : 'bg-[#dff0df]'}`}>
          <Medal className={`w-5 h-5 ${isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}`} />
        </div>
        <span
          className={`
            text-xs px-2 py-0.5 rounded font-medium whitespace-nowrap
            ${isDark ? catColor.dark : catColor.light}
          `}
        >
          {categoryLabel[cert.category]}
        </span>
      </div>

      {/* Cert name */}
      <h3 className={`text-base font-bold mb-1 leading-snug ${isDark ? 'text-[#d4d4d4]' : 'text-[#1e3a1e]'}`}>
        {cert.name}
      </h3>

      {/* Issuer */}
      <p className={`text-sm mb-1 ${isDark ? 'text-[#6a9e72]' : 'text-[#4a6b4a]'}`}>
        {cert.issuer}
      </p>

      {/* Date */}
      <p className={`text-xs mb-4 ${isDark ? 'text-[#4a7a52]' : 'text-[#7aaa7a]'}`}>
        Issued {cert.date}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className={`text-xs px-2 py-0.5 rounded font-medium ${isDark ? 'bg-[#1a3020] text-[#6a9e72]' : 'bg-[#dff0df] text-[#2d6a35]'}`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Credential footer */}
      <div className={`pt-3 border-t flex items-center justify-between gap-2 ${isDark ? 'border-[#1e3a22]' : 'border-[#c8dcc8]'}`}>
        {cert.credentialId && (
          <span className={`text-xs font-mono truncate ${isDark ? 'text-[#4a7a52]' : 'text-[#7aaa7a]'}`}>
            ID: {cert.credentialId}
          </span>
        )}
        <div className="flex items-center gap-2 ml-auto">
          {cert.pdfAsset && (
            <a
              href={cert.pdfAsset}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-xs font-medium transition-colors duration-200 ${isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#4a6b4a] hover:text-[#2d6a35]'}`}
            >
              <Page className="w-3.5 h-3.5" />
              View PDF
            </a>
          )}
          {cert.imageAsset && (
            <a
              href={cert.imageAsset}
              download
              className={`flex items-center gap-1 text-xs font-medium transition-colors duration-200 ${isDark ? 'text-[#b8960c] hover:text-[#ffd700]' : 'text-[#9a7000] hover:text-[#7a5a00]'}`}
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
          )}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-xs font-medium transition-colors duration-200 ${isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#4a6b4a] hover:text-[#2d6a35]'}`}
            >
              <BadgeCheck className="w-3.5 h-3.5" />
              Verify
              <OpenNewWindow className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CertificationSection({ isDark }: SectionProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>(ALL);

  const categories = [ALL, ...Array.from(new Set(certifications.map((c) => c.category)))] as Filter[];

  const filtered = activeFilter === ALL
    ? certifications
    : certifications.filter((c) => c.category === activeFilter);

  return (
    <section id="certification" className="px-6 md:px-24 py-12 md:py-16 min-h-[calc(100vh-57px)]" style={mono}>
      {/* Label */}
      <p className={`text-xs md:text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
        Credentials
      </p>

      {/* Title */}
      <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-[#d4d4d4]' : 'text-[#1e3a1e]'}`}>
        <span className={isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}>Certification</span>
      </h1>

      {/* Divider */}
      <div className={`w-16 h-0.5 mb-6 md:mb-8 rounded-full ${isDark ? 'bg-[#d4d4d4]' : 'bg-[#2d6a35]'}`} />

      {/* Stats bar */}
      <div className={`flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8 p-3 md:p-4 rounded-lg border ${isDark ? 'bg-[#0f1c10] border-[#1e3a22]' : 'bg-white border-[#c8dcc8]'}`}>
        <div className="flex flex-col">
          <span className={`text-xl md:text-2xl font-bold ${isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}`}>
            {certifications.length}
          </span>
          <span className={`text-xs ${isDark ? 'text-[#6a9e72]' : 'text-[#4a6b4a]'}`}>Total Certs</span>
        </div>
        <div className={`w-px h-8 md:h-10 ${isDark ? 'bg-[#1e3a22]' : 'bg-[#c8dcc8]'}`} />
        {Object.entries(categoryLabel)
          .filter(([key]) => certifications.some((c) => c.category === key))
          .map(([key, label]) => (
            <div key={key} className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold ${isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}`}>
                {certifications.filter((c) => c.category === key).length}
              </span>
              <span className={`text-xs ${isDark ? 'text-[#6a9e72]' : 'text-[#4a6b4a]'}`}>{label}</span>
            </div>
          ))}
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          const label = cat === ALL ? 'All' : categoryLabel[cat as Certification['category']];
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-md font-medium border transition-all duration-200
                ${isActive
                  ? isDark
                    ? 'bg-[#89d185] text-[#0c1a0f] border-[#89d185]'
                    : 'bg-[#2d6a35] text-white border-[#2d6a35]'
                  : isDark
                    ? 'bg-transparent border-[#1e3a22] text-[#6a9e72] hover:border-[#89d185] hover:text-[#89d185]'
                    : 'bg-transparent border-[#c8dcc8] text-[#4a6b4a] hover:border-[#2d6a35] hover:text-[#2d6a35]'
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        {filtered.map((cert) => (
          <CertCard key={cert.id} cert={cert} isDark={isDark} />
        ))}
      </div>
    </section>
  );
}
