import { Link } from 'react-router';
import { Github, Linkedin } from 'iconoir-react';
import ScrambleText from '../ui/FlipText';

type HomeSectionProps = {
  isDark: boolean;
};

const mono = { fontFamily: "'Cascadia Mono', 'Cascadia Code', Consolas, monospace" };

const roles = [
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'React Developer',
];

export default function HomeSection({ isDark }: HomeSectionProps) {
  return (
    <section id="home" className="flex flex-col justify-center min-h-[calc(100vh-57px)] px-6 md:px-24 py-12 md:py-16" style={mono}>
      {/* Social Links */}
      <div className="flex items-center gap-4 mb-4">
        <a
          href="https://github.com/ReiSaputra"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className={`transition-colors duration-200 ${isDark ? "text-[#6a9e72] hover:text-[#89d185]" : "text-[#4a6b4a] hover:text-[#2d6a35]"}`}
        >
          <Github className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-fathurraihan-saputra-9b7a04298/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className={`transition-colors duration-200 ${isDark ? "text-[#6a9e72] hover:text-[#89d185]" : "text-[#4a6b4a] hover:text-[#2d6a35]"}`}
        >
          <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>

      {/* Name */}
      <h1 className={`text-3xl md:text-5xl font-bold mb-3 leading-tight ${isDark ? "text-[#d4d4d4]" : "text-[#1e3a1e]"}`}>
        I'm <span className={isDark ? "text-[#89d185]" : "text-[#2d6a35]"}>Fathur Saputra</span>
      </h1>

      {/* Role */}
      <h2 className={`text-lg md:text-2xl font-semibold mb-5 md:mb-6 ${isDark ? "text-[#6a9e72]" : "text-[#4a6b4a]"}`}>
        I'm a <ScrambleText texts={roles} interval={2500} className={isDark ? "text-[#d4d4d4]" : "text-[#2d6a35]"} />
      </h2>

      {/* Divider */}
      <div className={`w-16 h-0.5 mb-5 md:mb-6 rounded-full ${isDark ? "bg-[#d4d4d4]" : "bg-[#2d6a35]"}`} />

      {/* Short bio */}
      <p className={`max-w-xl text-sm md:text-base leading-relaxed mb-8 md:mb-10 ${isDark ? "text-[#d4d4d4]" : "text-[#4a6b4a]"}`}>
        Passionate about building clean, performant, and beautiful web experiences. Always learning, always shipping.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3 md:gap-4">
        <Link
          to="/projects"
          className={`
            px-6 md:px-10 py-3 md:py-4 rounded-md text-sm md:text-lg font-semibold
            transition-colors duration-200
            ${isDark ? "bg-[#89d185] text-[#0c1a0f] hover:bg-[#d4d4d4]" : "bg-[#2d6a35] text-white hover:bg-[#1e3a1e]"}
          `}
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className={`
            px-6 md:px-10 py-3 md:py-4 rounded-md text-sm md:text-lg font-semibold border
            transition-colors duration-200
            ${isDark ? "border-[#6a9e72] text-[#6a9e72] hover:border-[#89d185] hover:text-[#89d185] hover:bg-[#1a3020]" : "border-[#2d6a35] text-[#2d6a35] hover:bg-[#dff0df] hover:border-[#1e3a1e] hover:text-[#1e3a1e]"}
          `}
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
