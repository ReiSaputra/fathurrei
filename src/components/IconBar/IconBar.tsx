import { navItems } from '../../constants/navItems';
import NavLink from './NavLink';
import BottomNavLink from './BottomNavLink';
import { Link } from 'react-router';

type IconBarProps = {
  isDark: boolean;
};

export default function IconBar({ isDark }: IconBarProps) {
  return (
    <>
      {/* ── Desktop: sidebar kiri ── */}
      <aside className={`
        hidden md:flex flex-col items-center justify-between py-6 gap-1 sticky top-0 h-screen px-3
        transition-colors duration-200
        ${isDark
          ? 'bg-[#0c1a0f] border-r border-[#1e3a22]'
          : 'bg-[#e8f4e8] border-r border-[#c8dcc8]'}
      `}>
        {/* Logo F */}
        <Link
          to="/"
          className={`
            w-9 h-9 flex items-center justify-center rounded-full font-bold text-lg border-2
            transition-colors duration-200
            ${isDark
              ? 'text-[#89d185] border-[#89d185] hover:bg-[#1e3a22]'
              : 'text-[#2d6a35] border-[#2d6a35] hover:bg-[#c8dcc8]'}
          `}
        >
          F
        </Link>

        {/* Nav icons */}
        <div className="flex flex-col items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} isDark={isDark} />
          ))}
        </div>
      </aside>

      {/* ── Mobile: floating bottom tab bar ── */}
      <nav className={`
        md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1 px-2 py-2 rounded-2xl
        shadow-xl backdrop-blur-md
        transition-colors duration-200
        ${isDark
          ? 'bg-[#0c1a0f]/90 border border-[#1e3a22]'
          : 'bg-[#e8f4e8]/90 border border-[#c8dcc8]'}
      `}>
        {navItems.map((item) => (
          <BottomNavLink key={item.label} {...item} isDark={isDark} />
        ))}
      </nav>
    </>
  );
}
