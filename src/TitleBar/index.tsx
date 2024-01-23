'use client'
import React from 'react';
import {Avatar, Chip} from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { links } from '../sideMenu/components/NavLinks';
import TitleCategory from './components/TitleCategory';
import TitleData from './components/TitleData';

const TitleBar = () => {
    const pathname = usePathname();

    return (
        <header className="bg-[#00b1ff] sticky top-0 w-full h-20 z-10 ">
            title bar
            {/* {pathname === links[1].href && <TitleCategory />}
            {pathname === links[2].href && <TitleData />}
            {pathname === links[3].href && <Chip>{links[3].name}</Chip>}
            <article className="w-[65px] mr-[296px]">
                <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </article> */}
        </header>
    );
};

export default TitleBar;