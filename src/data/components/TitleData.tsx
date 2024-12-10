'use client'
import { MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { Input, Button, Avatar } from '@nextui-org/react';
import React from 'react';

const TitleData = () => {
    return (
        <header className="sticky top-0 w-full h-20 z-10 flex items-center justify-between border-b border-[#CDFEEC]">
            <div className="flex ml-3 mr-3 gap-2">
                <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                    hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                >
                    <PlusCircleIcon className="w-6"/> Add
                </Button>
                <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                    hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                >
                    <XCircleIcon className="w-6"/> Delete
                </Button>
            </div>
            <Input
                placeholder="Type to search..."
                radius="full"
                isClearable
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
            />
            <div className="flex ml-3 mr-8 gap-3">
                <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                    hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                >
                    <ArrowUpTrayIcon className="w-6 bg-[#EEFAF8] rounded-full text-[#15313B] p-[1px]"/> Export
                </Button>
                <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </div>
        </header>
    );
};

export default TitleData;