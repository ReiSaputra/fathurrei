import { HomeSimpleDoor, CodeBrackets, Medal, Mail } from 'iconoir-react';
import type { NavItem } from '../types/theme';

export const navItems: NavItem[] = [
  { icon: <HomeSimpleDoor />, label: 'Home',          href: '/' },
  { icon: <CodeBrackets />,  label: 'Projects',      href: '/projects' },
  { icon: <Medal />,         label: 'Certification', href: '/certification' },
  { icon: <Mail />,          label: 'Contact',       href: '/contact' },
];
