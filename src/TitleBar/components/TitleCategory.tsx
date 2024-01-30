'use client'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { Input, Button } from '@nextui-org/react';
import React from 'react';

const TitleCategory = () => {
    return (
        <div className="flex items-center">
            <div className="w-full flex items-center justify-start">
                <Button className="bg-[#15313B] font-bold rounded-3xl h-9 ml-4 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                    hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                >
                    <PlusCircleIcon className="w-6"/> Add
                </Button>
            </div>
            <div className="w-full flex items-center justify-start">
                <Input
                    placeholder="Type to search..."
                    radius="full"
                    isClearable
                    variant="bordered"
                    type="text"
                    startContent={
                        <MagnifyingGlassIcon className="text-[#CDFEEC] w-6 " />
                    }
                    className="w-8/12 relative right-1/3 ml-12"
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
            </div>
        </div>
    );
};

export default TitleCategory;