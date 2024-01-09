'use client'
import {
  ChartPieIcon,
  RectangleGroupIcon,
  TableCellsIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Dashboard',
    href: '/',
    icon: ChartPieIcon,
  },
  {
    name: 'Category',
    href: '/category',
    icon: RectangleGroupIcon,
  },
  { 
    name: 'Data',
    href: '/data',
    icon: TableCellsIcon, 
  },
  { 
    name: 'Preferences',
    href: '/preferences',
    icon: Cog8ToothIcon, 
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              `flex h-[48px] grow items-center justify-center gap-2 rounded-lg bg-[#090909] p-3 text-sm font-medium hover:text-[#00BE99] md:flex-none md:justify-start md:p-2 md:px-5
              ${pathname === link.href ? 'bg-[#090909af] text-[#00BE99] shadow-[0_0_18px_1px_#00BE99]' : ''}
            `}
          >
            <LinkIcon className="w-7" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
