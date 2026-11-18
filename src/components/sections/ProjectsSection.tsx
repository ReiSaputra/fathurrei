import { Link } from 'react-router';
import { GithubCircle, OpenNewWindow, MediaImage, Figma } from 'iconoir-react';
import { projects, type Project } from '../../constants/projects';

type ProjectCardProps = Project & { isDark: boolean };

function ProjectCard({ id, title, description, tags, image, github, live, figma, isDark }: ProjectCardProps) {
  return (
    <div className={`
      flex flex-col rounded-lg p-5 border transition-all duration-200 group
      ${isDark
        ? 'bg-[#0f1c10] border-[#1e3a22] hover:border-[#89d185]'
        : 'bg-white border-[#c8dcc8] hover:border-[#2d6a35]'}
    `}>
      {/* Thumbnail / Image Preview */}
      <Link to={`/projects/${id}`} className="mb-4 block overflow-hidden rounded-md border border-inherit">
        {image ? (
          <div className="h-44 w-full overflow-hidden bg-black/10">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className={`
            h-44 w-full flex flex-col items-center justify-center gap-2 transition-colors duration-200
            ${isDark ? 'bg-[#142617] text-[#6a9e72]' : 'bg-[#eef6ee] text-[#4a6b4a]'}
          `}>
            <MediaImage className="w-8 h-8 opacity-60" />
            <span className="text-xs font-medium tracking-wider uppercase opacity-75">
              Preview Coming Soon
            </span>
          </div>
        )}
      </Link>

      {/* Title — klik ke detail */}
      <Link to={`/projects/${id}`}>
        <h3 className={`text-lg font-bold mb-2 transition-colors duration-200 ${isDark ? 'text-[#89d185] hover:text-[#d4d4d4]' : 'text-[#2d6a35] hover:text-[#1e3a1e]'}`}>
          {title}
        </h3>
      </Link>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-4 flex-1 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`
              text-xs px-2 py-0.5 rounded font-medium
              ${isDark ? 'bg-[#1a3020] text-[#6a9e72]' : 'bg-[#dff0df] text-[#2d6a35]'}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#4a6b4a] hover:text-[#2d6a35]'}`}>
            <GithubCircle className="w-4 h-4" /> Code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#4a6b4a] hover:text-[#2d6a35]'}`}>
            <OpenNewWindow className="w-4 h-4" /> Live
          </a>
        )}
        {figma && (
          <a href={figma} target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#4a6b4a] hover:text-[#2d6a35]'}`}>
            <Figma className="w-4 h-4" /> Figma
          </a>
        )}
        <Link to={`/projects/${id}`}
          className={`ml-auto flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#4a6b4a] hover:text-[#2d6a35]'}`}>
          Details →
        </Link>
      </div>
    </div>
  );
}

type SectionProps = { isDark: boolean };
const mono = { fontFamily: "'Cascadia Mono', 'Cascadia Code', Consolas, monospace" };

export default function ProjectsSection({ isDark }: SectionProps) {
  return (
    <section id="projects" className="px-6 md:px-24 py-16 min-h-[calc(100vh-57px)]" style={mono}>
      <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
        My Work
      </p>
      <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-[#d4d4d4]' : 'text-[#1e3a1e]'}`}>
        <span className={isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}>Projects</span>
      </h1>
      <div className={`w-16 h-0.5 mb-10 rounded-full ${isDark ? 'bg-[#d4d4d4]' : 'bg-[#2d6a35]'}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} isDark={isDark} />
        ))}
      </div>
    </section>
  );
}
