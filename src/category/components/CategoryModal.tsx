import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalHeader, Card, ModalFooter, CardBody } from '@nextui-org/react';
import { Field, useFormik, FormikProvider } from 'formik';
import { useAddCategory } from '../hooks/useAddCategories';
import CustomInput from '../../shared/components/form/CustomInput';
import CustomSelect from '../../shared/components/form/CustomSelect';
import IconsPicker from './IconsPicker';
import { useUpdateCategory } from '../hooks/useUpdateCategories';
import { categoriesSchema } from '../schema';
import { CirclePlus, CircleX, Pencil } from 'lucide-react';
import { Categories } from '../types/Categories';

interface Props {
  data?: Categories;
  isEdit?: boolean;
  selectedTab?: string;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

const CategoryModal = ({
  data,
  isEdit = false,
  selectedTab,
  isOpen,
  onOpen,
  onOpenChange,
}: Props) => {
  
  const { result, loading, error, addCategory } = useAddCategory();

  const initialData = {
    catName: isEdit ? data?.catName : '',
    catIcon: isEdit ? data?.catIcon : '',
    catType: selectedTab,
    catEditable: true,
  };

  const categoriesSubmit = useFormik({
    initialValues: data || initialData,
    // validationSchema: categoriesSchema,
    onSubmit: (values: any) => {
      if (isEdit) {
        handleEdit(values);
      } else {
        // handleAdd(values);
        console.log(values);
      }
    },
  });

  const handleAdd = (values: any) => {
    addCategory(values);
    onOpenChange();
  };

  const handleEdit = (values: any) => {
    useUpdateCategory(values);
    onOpenChange();
  };

  console.log(categoriesSubmit.values.catIcon)

  return (
    <Modal
      hideCloseButton
      backdrop="blur"
      isOpen={isOpen}
      placement="auto"
      onOpenChange={onOpenChange}
    >
      <ModalContent className="flex w-fit flex-col items-center justify-center p-4 rounded-3xl bg-[#040F10] border">
        <ModalHeader className="text-xl font-bold">
          {isEdit ? 'Editar esta' : 'Añadir una'} categoría
        </ModalHeader>
        
        <ModalBody>
          <form>
            <FormikProvider value={categoriesSubmit}>
              <Card className="w-52 max-w-[40vw] h-56 max-h-[50vw] flex items-center justify-center rounded-[40px] border border-[#00BE99] bg-black">
                <CardBody className="flex flex-col gap-2 text-center items-center justify-center">
                  <IconsPicker formik={categoriesSubmit} isEdit={isEdit} />
                
                  <Field
                    type="text"
                    name="catName"
                    placeholder="Categoría"
                    component={CustomInput}
                    variant="underlined"
                    classNames={{
                      input: [
                        "text-center",
                        "text-[4.2vw]",
                        "sm:text-2xl",
                        "font-bold" 
                      ],
                      inputWrapper: [
                        "bg-transparent",
                        "border-0",
                      ],
                    }}
                  />

                  <Field
                    name="catType"
                    placeholder="Tipo"
                    defaultSelectedKeys={data?.catType || selectedTab}
                    component={CustomSelect}
                    options={[
                      { label: 'Egresos', value: 'E' },
                      { label: 'Ingresos', value: 'I' },
                    ]}
                    classNames={{
                      value: [
                        "text-center",
                        "text-[3.2vw]",
                        "sm:text-sm",
                        "group-data-[has-value=true]:text-white",
                      ],
                      trigger: [
                        "pl-10",
                        "bg-transparent",
                        "border-0",
                      ]
                    }}
                    listboxProps={{
                      itemClasses: {
                        base: [
                          "text-center",
                        ]
                      }
                    }}
                  />
                </CardBody>
              </Card>
            </FormikProvider>
          </form>
        </ModalBody>

        <ModalFooter className="flex flex-col w-full justify-center gap-3 ">
          <Button
            className="py-6 rounded-3xl font-bold text-lg hover:scale-105"
            variant="shadow"
            color="success"
            onClick={() => categoriesSubmit.handleSubmit()}
            startContent={ isEdit  ? <Pencil className="w-6" /> : <CirclePlus className="w-6" /> }
          >
            {isEdit ? 'Editar' : 'Añadir'}
          </Button>
          <Button
            className="py-6 rounded-3xl font-bold text-lg hover:scale-105"
            variant="ghost"
            color="danger"
            startContent={<CircleX className="w-6" />}
            onClick={onOpenChange}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CategoryModal;
