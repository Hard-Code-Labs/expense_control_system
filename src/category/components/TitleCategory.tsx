'use client'
import { MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Input, Button, Avatar, Popover, PopoverTrigger, PopoverContent, Select, SelectItem } from '@nextui-org/react';
import React from 'react';

const TitleCategory = () => {
    return (
        <header className="bg-black sticky top-0 w-full h-20 z-10 flex items-center justify-between border-b border-[#CDFEEC]">
            <Popover
                showArrow
                offset={10}
                placement="bottom"
                backdrop="blur"
                >
                <PopoverTrigger>
                    <Button className="bg-[#15313B] font-bold rounded-3xl h-9 ml-5 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                        hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                    >
                        <PlusCircleIcon className="w-6"/> Add
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-6 gap-5">
                    <h1 className="text-xl font-bold" >Category</h1>
                    <Input
                        type="text"
                        label="Name"
                        labelPlacement="inside"
                        placeholder="Enter category name"
                    />
                    <Select
                        size="sm"
                        label="Select type"
                        placeholder="type"
                        className="max-w-xs"
                    >
                        <SelectItem key="expensive" value="Expensive">
                            Expensive
                        </SelectItem>
                        <SelectItem key="income" value="Income">
                            Income
                        </SelectItem>
                    </Select>
                    <div className="flex gap-4">
                        <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                            hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                        >
                            <CheckCircleIcon className="w-6"/> Add
                        </Button>
                        <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                            hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                        >
                            <XCircleIcon className="w-6"/> Cancel
                        </Button>
                    </div>
                </PopoverContent>
                </Popover>
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
            <Avatar className="mr-10" isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </header>
    );
};

export default TitleCategory;