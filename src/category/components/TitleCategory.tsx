'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Input, Button, Avatar, Popover, PopoverTrigger, PopoverContent, Select, SelectItem } from '@nextui-org/react';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import IconsSelect from './IconsSelect';
import { useAddCategories } from '../hooks/useAddCategories';
import CategoryModal from './CategoryModal';

interface Props {
    refresh: () => void;
    search: (value: string) => void;
}

const TitleCategory = ( { refresh, search }: Props ) => {
    
    const  handleSearch = (event: any) => {
        search(event.target.value)
    }

    return (
        <header className="bg-black sticky top-0 w-full h-20 z-10 flex items-center justify-between border-b border-[#CDFEEC]">
            <CategoryModal 
                refresh={refresh}
                nameButton='Add'
                icon={<PlusCircleIcon className="w-6"/>}
                // elementTrigger={
                //     <Button className="bg-[#15313B] font-bold rounded-3xl h-9 ml-5 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                //         hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                //     >
                //         <PlusCircleIcon className="w-6"/> Add
                //     </Button>
                //}
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