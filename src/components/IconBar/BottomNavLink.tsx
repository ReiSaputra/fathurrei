import { Link, useLocation } from 'react-router';
import type { NavItem } from '../../types/theme';

type Props = NavItem & { isDark: boolean };

export default function BottomNavLink({ icon, href, isDark }: Props) {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={`
        flex items-center justify-center w-12 h-12 rounded-xl text-xl
        transition-colors duration-200
        ${isActive
          ? isDark
            ? 'text-[#89d185] bg-[#1a3020]'
            : 'text-[#1a4a22] bg-[#d8eed8]'
          : isDark
            ? 'text-[#6a9e72] hover:text-[#89d185] hover:bg-[#1a3020]'
            : 'text-[#2d6a35] hover:text-[#1a4a22] hover:bg-[#d8eed8]'}
      `}
    >
      {icon}
    </Link>
  );
}
