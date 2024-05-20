'use client'
import React from 'react';;
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { Input, Button, Avatar } from '@nextui-org/react';
import CategoryModal from './CategoryModal';

interface Props {
    refresh: () => void;
    search: (value: string) => void;
    selectedTab?: string;
}

const TitleCategory = ( { refresh, search, selectedTab }: Props ) => {
    
    const  handleSearch = (event: any) => {
        search(event.target.value)
    }

    return (
        <header className="bg-black sticky top-0 w-full h-20 z-10 flex items-center justify-between border-b border-[#CDFEEC]">
            <CategoryModal 
                refresh={refresh}
                nameButton='Añadir'
                icon={<PlusCircleIcon className="w-6"/>}
                selectedTab={selectedTab}
            />
            <Input
                placeholder="Buscar categorías"
                radius="full"
                variant="bordered"
                type="text"
                startContent={
                    <MagnifyingGlassIcon className="text-[#CDFEEC] w-6 " />
                }
                className="w-6/12"
                classNames={{
                    inputWrapper: [
                        "bg-transparent",
                        "h-9",
                        "dark:border-1",
                        "dark:border-[#CDFEEC]",
                        "dark:hover:border-2",
                    ],
                }}
                onChange={handleSearch}
            />
            <Avatar className="mr-10" isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </header>
    );
};

export default TitleCategory;