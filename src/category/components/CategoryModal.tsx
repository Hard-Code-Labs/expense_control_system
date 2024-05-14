import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import { Formik, Form, Field } from 'formik';
import { CheckCircleIcon, PencilSquareIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useAddCategories } from '../hooks/useAddCategories';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import IconsSelect from './IconsSelect';

interface Props {
  refresh: () => void;
  nameButton: string;
  icon: React.ReactNode;
}

const CategoryModal = ({refresh, nameButton, icon}:Props) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  const handleOpen = () => "setIsOpen(true)";
  const handleClose = () => "setIsOpen(false)";

  const handleAdd = (values: any) => {
    useAddCategories(values);
    setTimeout(() => {
        refresh();
    }, 500);
    handleClose();
  }

  const initialData = {
    cat_name: "",
    cat_icon: "",
    cat_type: "",
    cat_editable: true,
}

  return (
    <>
      <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
        hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
        onPress={onOpen}
      >
          {icon} {nameButton}
      </Button>
      <Modal
        // offset={10}
        // backdrop="blur"
        isOpen={isOpen}
        placement="auto"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="p-5 gap-5">
        {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-xl font-bold">Categorías</ModalHeader>
                <ModalBody>
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
                                  onPress={onClose}
                              >
                                  <CheckCircleIcon className="w-6"/> Add
                              </Button>
                              <Button 
                                  onClick={handleClose}
                                  onPress={onClose}
                                  className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
                                  hover:shadow-[0_0_10px_1px_#EEFAF8] hover:scale-105"
                              >
                                  <XCircleIcon className="w-6"/> Cancel
                              </Button>
                          </div>
                      </Form>
                  </Formik>
                </ModalBody>
                {/* <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter> */}
              </>
            )}
        </ModalContent>
        {/* <PopoverTrigger onClick={handleOpen}>
            {elementTrigger}
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
        </PopoverContent> */}
      </Modal>
    </>
  );
};

export default CategoryModal;