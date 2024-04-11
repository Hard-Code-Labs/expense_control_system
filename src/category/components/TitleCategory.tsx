'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MagnifyingGlassIcon, PlusCircleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Input, Button, Avatar, Popover, PopoverTrigger, PopoverContent, Select, SelectItem } from '@nextui-org/react';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import IconsSelect from './IconsSelect';

interface Props {
    refresh?: () => void;
}

const TitleCategory = ( { refresh }: Props ) => {

    const categories = {
        expenses : [
            {
                name: "",
                svg: ""
            }
        ],
        income : [
            {
                name: "",
                svg: ""
            }
        ]
    }

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleAdd = (values: any) => {
        console.log(values)
        values.type === "expenses" 
            ? categories.expenses.push({ name: values.name, svg: values.svg }) 
            : categories.income.push({ name: values.name, svg:  values.svg })
        refresh && refresh();
        handleClose();
    }

    const initialData = {
        name: "",
        svg: "",
        type: "",
    }

    const handleIcon = (icon: string) => {
        console.log(icon)
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
                    <h1 className="text-xl font-bold" >Category</h1>
                    <Formik
                        initialValues={initialData}
                        onSubmit={(values) => handleAdd(values)}
                    >
                        <Form className="flex flex-col gap-3">
                            <Field
                                type="text"
                                name="name"
                                label="Name"
                                placeholder="Enter category name"
                                labelPlacement="inside"
                                component={CustomInput}
                            />
                            <Field
                                type="text"
                                name="svg"
                                label="Svg"
                                placeholder="Choose your icon"
                                labelPlacement="inside"
                                component={IconsSelect}
                            />
                            {/* <IconsSelect /> */}
                            <Field
                                name="type"
                                label="Type"
                                placeholder="Select type"
                                component={CustomSelect}
                                className="max-w-xs"
                                options={[
                                    { label: "Egresos", value: "expenses" },
                                    { label: "Ingresos", value: "income" }
                                ]}
                            />
                            <div className="flex gap-4">
                                <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                                    hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                                    type="submit"
                                    // onClick={handleAdd}
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