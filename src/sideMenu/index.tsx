'use client'
import {
  ChartPieIcon,
  RectangleGroupIcon,
  TableCellsIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const links = [
  {
    name: 'Money Attic',
    href: '',
    icon: Cog8ToothIcon,
    logo: true,
  },
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
    icon: Cog6ToothIcon, 
  },
];

export default function SideMenu() {
  const pathname = usePathname();
  
  return (
    <nav className=" sticky top-0 w-80 h-screen | flex flex-col items-center gap-5 border-r border-[#CDFEEC]" >
      {links.map((link) => {
        const LinkIcon = link.icon;
        
        if (link.logo){
          return (
            <div key={link.name} className={` w-full flex justify-start items-center gap-4 my-6 px-4 py-2 rounded-xl font-semibold `} style={{textShadow: "0 0 20px #00ffcc"}}>
                <LinkIcon className="w-14 text-[#1f7a73]" />
                <p className="text-2xl font-bold" >{link.name}</p>
            </div>
          )
        } else {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`
                w-52 flex justify-start items-center gap-4 px-4 py-2 rounded-xl font-semibold hover:text-[#00BE99] hover:shadow-[0_0_10px_0.5px_#00BE9980] 
                ${pathname === link.href ? 'bg-[#090909af] text-[#00BE99] shadow-[0_0_18px_1px_#00BE99] hover:shadow-[0_0_18px_2px_#00BE99]' : ''}
              `}
            >
              <LinkIcon className="w-8" />
              <p>{link.name}</p>
            </Link>
          );  
        }
      })}
    </nav>
  );
}
