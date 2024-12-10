'use client'
import React from 'react';;
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { Input, Button, Avatar, useDisclosure } from '@nextui-org/react';
import CategoryModal from './CategoryModal';

interface Props {
    refresh: () => void;
    search: (value: string) => void;
    selectedTab?: string;
}

const TitleCategory = ( { refresh, search, selectedTab }: Props ) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    const  handleSearch = (event: any) => {
        search(event.target.value)
    }

    return (
        <header className="bg-black sticky top-0 w-full h-20 z-10 flex items-center justify-between border-b border-[#CDFEEC]">
            <Button
                className={`rounded-3xl bg-[#15313B] font-bold ml-5 flex h-9 justify-center pl-3 pr-5 text-[#EEFAF8] 
                hover:scale-105 hover:shadow-[0_0_10px_1px_#EEFAF8]`}
                onPress={onOpen}
                startContent={<PlusCircleIcon className="w-6"/>}
            >
                Añadir
            </Button> 
            <CategoryModal
                selectedTab={selectedTab}
                refresh= {refresh}
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
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