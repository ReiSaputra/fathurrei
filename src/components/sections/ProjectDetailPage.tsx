import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router';
import { GithubCircle, OpenNewWindow, ArrowLeft, Check, MediaImage, Figma } from 'iconoir-react';
import { projects } from '../../constants/projects';

type Props = { isDark: boolean };

const mono = { fontFamily: "'Cascadia Mono', 'Cascadia Code', Consolas, monospace" };

export default function ProjectDetailPage({ isDark }: Props) {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const allImages = project?.images && project.images.length > 0
    ? project.images
    : project?.image
      ? [project.image]
      : [];

  const [activeImage, setActiveImage] = useState<string | null>(allImages[0] || null);

  if (!project) return <Navigate to="/projects" replace />;

  const currentImage = activeImage || project.image;

  return (
    <section className="px-6 md:px-24 py-16 min-h-[calc(100vh-57px)]" style={mono}>

      {/* Back */}
      <Link
        to="/projects"
        className={`
          inline-flex items-center gap-2 text-sm font-medium mb-10
          transition-colors duration-200
          ${isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#4a6b4a] hover:text-[#2d6a35]'}
        `}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Title */}
      <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-[#d4d4d4]' : 'text-[#1e3a1e]'}`}>
        <span className={isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}>{project.title}</span>
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`
              text-xs px-2.5 py-1 rounded font-medium
              ${isDark ? 'bg-[#1a3020] text-[#6a9e72]' : 'bg-[#dff0df] text-[#2d6a35]'}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={`w-16 h-0.5 mb-8 rounded-full ${isDark ? 'bg-[#d4d4d4]' : 'bg-[#2d6a35]'}`} />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-12">
        {/* Left: Image + Description + Features */}
        <div>
          {/* Project Preview Image / Placeholder */}
          <div className={`mb-8 overflow-hidden rounded-lg border ${
            isDark ? 'border-[#1e3a22]' : 'border-[#c8dcc8]'
          }`}>
            {currentImage ? (
              <div className="w-full max-h-[440px] overflow-hidden bg-black/10">
                <img
                  src={currentImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-all duration-200"
                />
              </div>
            ) : (
              <div className={`
                h-60 w-full flex flex-col items-center justify-center gap-2 transition-colors duration-200
                ${isDark ? 'bg-[#142617] text-[#6a9e72]' : 'bg-[#eef6ee] text-[#4a6b4a]'}
              `}>
                <MediaImage className="w-10 h-10 opacity-60" />
                <span className="text-xs font-medium tracking-wider uppercase opacity-75">
                  Preview Coming Soon
                </span>
              </div>
            )}

            {/* Thumbnail gallery selector */}
            {allImages.length > 1 && (
              <div className={`flex gap-3 p-3 overflow-x-auto border-t ${
                isDark ? 'bg-[#0f1c10] border-[#1e3a22]' : 'bg-[#f0f7f0] border-[#c8dcc8]'
              }`}>
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-150 ${
                      currentImage === img
                        ? isDark ? 'border-[#89d185] scale-105' : 'border-[#2d6a35] scale-105'
                        : isDark ? 'border-transparent opacity-60 hover:opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <h2 className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
            About
          </h2>
          <p className={`text-base leading-relaxed mb-10 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
            {project.longDescription}
          </p>

          {/* Features */}
          <h2 className={`text-sm font-medium tracking-widest uppercase mb-4 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
            Key Features
          </h2>
          <ul className="flex flex-col gap-3">
            {project.features.map((feature) => (
              <li key={feature} className={`flex items-start gap-3 text-sm ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
                <Check
                  className={`w-4 h-4 mt-0.5 shrink-0 ${isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}`}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Links Card */}
        <div>
          <div className={`
            rounded-lg border p-6 sticky top-24
            ${isDark ? 'bg-[#0f1c10] border-[#1e3a22]' : 'bg-white border-[#c8dcc8]'}
          `}>
            <h3 className={`text-sm font-medium tracking-widest uppercase mb-5 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
              Links
            </h3>

            <div className="flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-center gap-2 px-4 py-2.5 rounded-md
                    text-sm font-semibold border transition-colors duration-200
                    ${isDark
                      ? 'border-[#6a9e72] text-[#6a9e72] hover:border-[#89d185] hover:text-[#89d185] hover:bg-[#1a3020]'
                      : 'border-[#2d6a35] text-[#2d6a35] hover:bg-[#dff0df]'}
                  `}
                >
                  <GithubCircle className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-center gap-2 px-4 py-2.5 rounded-md
                    text-sm font-semibold transition-colors duration-200
                    ${isDark
                      ? 'bg-[#89d185] text-[#0c1a0f] hover:bg-[#d4d4d4]'
                      : 'bg-[#2d6a35] text-white hover:bg-[#1e3a1e]'}
                  `}
                >
                  <OpenNewWindow className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-center gap-2 px-4 py-2.5 rounded-md
                    text-sm font-semibold transition-colors duration-200
                    ${isDark
                      ? 'bg-[#89d185] text-[#0c1a0f] hover:bg-[#d4d4d4]'
                      : 'bg-[#2d6a35] text-white hover:bg-[#1e3a1e]'}
                  `}
                >
                  <Figma className="w-4 h-4" />
                  View on Figma
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
