import { SunLight, HalfMoon } from 'iconoir-react';

type NavbarProps = {
  isDark: boolean;
  onToggle: () => void;
};

export default function Navbar({ isDark, onToggle }: NavbarProps) {
  return (
    <>
      {/* Desktop: sticky top navbar */}
      <nav className={`
        hidden md:flex sticky top-0 z-10 items-center justify-end px-6 py-6
        transition-colors duration-200
        ${isDark
          ? 'bg-[#121f14] border-b border-[#1e3a22]'
          : 'bg-[#f5f9f5] border-b border-[#c8dcc8]'}
      `}>
        <button
          onClick={onToggle}
          className={`
            flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
            transition-colors duration-200
            ${isDark
              ? 'text-[#6a9e72] hover:text-[#89d185] hover:bg-[#1a3020]'
              : 'text-[#4a6b4a] hover:text-[#1e3a1e] hover:bg-[#dff0df]'}
          `}
          style={{ fontFamily: "'Cascadia Mono', 'Cascadia Code', Consolas, monospace" }}
        >
          {isDark
            ? <><SunLight className="w-4 h-4" /><span>Light Mode</span></>
            : <><HalfMoon className="w-4 h-4" /><span>Dark Mode</span></>
          }
        </button>
      </nav>

      {/* Mobile: floating toggle button top-right */}
      <button
        onClick={onToggle}
        className={`
          md:hidden fixed top-4 right-4 z-50
          w-10 h-10 flex items-center justify-center rounded-full
          shadow-lg backdrop-blur-md transition-colors duration-200
          ${isDark
            ? 'bg-[#0c1a0f]/90 border border-[#1e3a22] text-[#89d185]'
            : 'bg-[#e8f4e8]/90 border border-[#c8dcc8] text-[#2d6a35]'}
        `}
        aria-label="Toggle theme"
      >
        {isDark ? <SunLight className="w-5 h-5" /> : <HalfMoon className="w-5 h-5" />}
      </button>
    </>
  );
}
