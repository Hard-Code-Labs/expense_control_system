'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Input, Button, Avatar, Popover, PopoverTrigger, PopoverContent, Select, SelectItem } from '@nextui-org/react';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import IconsSelect from './IconsSelect';
import { useAddCategories } from '../hooks/useAddCategories';

interface Props {
    refresh: () => void;
    search: (value: string) => void;
}

const TitleCategory = ( { refresh, search }: Props ) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleAdd = (values: any) => {
        useAddCategories(values)
        refresh();
        handleClose();
    }

    const initialData = {
        cat_name: "",
        cat_icon: "",
        cat_type: "",
        cat_editable: true,
    }

    const  handleSearch = (event: any) => {
        search(event.target.value)
    }

    return (
        <header className="bg-black sticky top-0 w-full h-20 z-10 flex items-center justify-between border-b border-[#CDFEEC]">
            <Popover
                showArrow
                offset={10}
                placement="bottom"
                backdrop="blur"
                isOpen={isOpen}
            >
                <PopoverTrigger>
                    <Button className="bg-[#15313B] font-bold rounded-3xl h-9 ml-5 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                        hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                        onClick={handleOpen}
                    >
                        <PlusCircleIcon className="w-6"/> Add
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-5 gap-5">
                    <h1 className="text-xl font-bold" >Categorías</h1>
                    <Formik
                        initialValues={initialData}
                        onSubmit={(values) => handleAdd(values)}
                    >
                        <Form className="flex flex-col gap-3">
                            <Field
                                type="text"
                                name="cat_name"
                                label="Name"
                                placeholder="Enter category name"
                                labelPlacement="inside"
                                component={CustomInput}
                            />
                            <Field
                                type="text"
                                name="cat_icon"
                                label="Icon"
                                placeholder="Choose your icon"
                                labelPlacement="inside"
                                component={IconsSelect}
                            />
                            <Field
                                name="cat_type"
                                label="Type"
                                placeholder="Select type"
                                component={CustomSelect}
                                className="max-w-xs"
                                options={[
                                    { label: "Egresos", value: "E" },
                                    { label: "Ingresos", value: "I" }
                                ]}
                            />
                            <div className="flex gap-4">
                                <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                                    hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                                    type="submit"
                                    onSubmit={handleAdd}
                                >
                                    <CheckCircleIcon className="w-6"/> Add
                                </Button>
                                <Button 
                                    onClick={handleClose}
                                    className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                                    hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                                >
                                    <XCircleIcon className="w-6"/> Cancel
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </PopoverContent>
            </Popover>
            <Input
                placeholder="Buscar categorías"
                radius="full"
                // isClearable
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