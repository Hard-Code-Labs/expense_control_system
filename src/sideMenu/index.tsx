'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from './Items';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useUserAuthStore } from '../shared/store/userAuthStore';

export default function SideMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const clearTokens = useUserAuthStore(state => state.clearTokens);
  
  return (
    <aside 
      className={`sticky top-0 h-screen flex flex-col justify-between items-center py-8
        ${open ? 'w-72' : 'w-20'} transition-all duration-500 ease-in
      `}
      style={{ background: "linear-gradient(90deg, rgba(12,19,20,1) 75%, rgba(17,89,78,1) 99%, rgba(0,190,153,1) 100%)" }}  
    >
      <Button
        className={`absolute top-2 bg-transparent text-[#CDFEEC] ${open ? 'right-2' : 'right-4'}`}
        isIconOnly
        onClick={() => setOpen(!open)}
      >
        {open ? <ArrowLeftCircleIcon className=''/> : <ArrowRightCircleIcon className='' />}
      </Button>

      <section className='flex flex-col gap-8 items-center'>
        <figure className={`max-w-36 max-h-36 flex justify-center items-center bg-transparent ${open ? 'py-1' : 'px-2 mt-6'} transition-all duration-500 ease-in`}>
          <Image
            src='/login.png'
            alt='Logo'
            width={144}
            height={144}
            className='border-[2px] border-[#CDFEEC] rounded-full'
          />
        </figure>
        
        <nav className='flex flex-col gap-3'>
          {links.map((link) => {
            const LinkIcon = link.icon;            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  max-w-56 flex items-center gap-5 py-2
                  rounded-full backdrop-blur-xl 
                  font-semibold hover:text-[#EEB84F]
                  border border-transparent hover:border-[#EEB84F]
                  ${pathname === link.href && 'text-[#EEB84F] '}
                  ${open ? 'w-full justify-start px-4' : 'w-14 justify-center'} 
                `}
              >
                <LinkIcon className="w-8"/>
                {open && <p className="hidden sm:flex" >{link.name}</p> } 
              </Link>
            );
          })}
        </nav>
      </section>
      
      <Link
        href="/login"
        className={`
          max-w-56 flex items-center gap-5 py-2
          rounded-full backdrop-blur-xl 
          font-semibold hover:text-danger-400
          border border-transparent hover:border-danger-400
          ${open ? 'w-48 justify-start px-4' : 'w-14 justify-center'} 
        `}
        onClick={() => clearTokens()}
      >
        <ArrowLeftOnRectangleIcon className="w-8"/>
        {open && <p className="hidden sm:flex" >Cerrar sesión</p> } 
      </Link>
    </aside>
  );
}
