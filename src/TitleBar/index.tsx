'use client'
import React from 'react';
import {Avatar, Chip} from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { links } from '../sideMenu';
import TitleData from './components/TitleData';

const TitleBar = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 w-full h-20 z-10 flex items-center justify-center border-b border-[#CDFEEC]">
            <article className="w-full">
                {pathname === links[3].href && <TitleData />}
            </article>
            <article className="w-20">
                <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </article>
        </header>
    );
};

export default TitleBar;