import { Link, useLocation } from 'react-router';
import type { NavItem } from '../../types/theme';

type NavLinkProps = NavItem & { isDark: boolean };

export default function NavLink({ icon, label, href, isDark }: NavLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={`
        group flex flex-col items-center gap-1 px-1 py-3
        transition-colors duration-200 cursor-pointer
        ${isActive
          ? isDark ? 'text-[#89d185]' : 'text-[#1a4a22]'
          : isDark ? 'text-[#6a9e72] hover:text-[#89d185]' : 'text-[#2d6a35] hover:text-[#1a4a22]'
        }
      `}
    >
      <span className={`
        flex items-center justify-center w-9 h-9 rounded-md text-xl
        transition-colors duration-200
        ${isActive
          ? isDark ? 'bg-[#1a3020]' : 'bg-[#d8eed8]'
          : isDark ? 'group-hover:bg-[#1a3020]' : 'group-hover:bg-[#d8eed8]'
        }
      `}>
        {icon}
      </span>
      <span
        className="text-[11px] font-bold tracking-wide leading-none text-center"
        style={{ fontFamily: "'Cascadia Mono', 'Cascadia Code', Consolas, monospace" }}
      >
        {label}
      </span>
    </Link>
  );
}
