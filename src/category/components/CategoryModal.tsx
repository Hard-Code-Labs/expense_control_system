import React, { useEffect } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import { Field, useFormik, FormikProvider } from 'formik';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useAddCategory } from '../hooks/useAddCategories';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import IconsSelect from './IconsSelect';
import useUniqueID from '../hooks/useUniqueID'; 
import { Categories } from '../hooks/useGetCategories';
import { useUpdateCategory } from '../hooks/useUpdateCategories';
import { categoriesSchema } from '../schema';

interface Props {
  data?: Categories;
  nameButton: string;
  icon: React.ReactNode;
  refresh: () => void;
  selectedTab?: string;
}

const CategoryModal = ({ data, nameButton, icon, refresh, selectedTab }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const generateID = useUniqueID();
  
  const initialData = {
    // cat_id: 0,
    cat_name: "",
    cat_icon: "",
    cat_type: "",
    cat_editable: true,
  };
  
  const categoriesSubmit = useFormik({
    initialValues: data || initialData,
    validationSchema: categoriesSchema,
    onSubmit: (values: any) => {
      if (nameButton === "Editar") {
        handleEdit(values);
      } else {
        handleAdd(values);
      }
    },
  });

  useEffect(() => {
    if (isOpen) {
      categoriesSubmit.resetForm({ values: data || initialData });
    }
  }, [isOpen, data]);

  const handleAdd = (values: any) => {
    const newID = generateID();
    const submitValues = {
      ...values,
      cat_id: newID,
    };
    
    useAddCategory(values);

    setTimeout(() => {
        refresh();
    }, 500);
    
    onOpenChange();
  };

  const handleEdit = (values: any) => {
    useUpdateCategory(values);

    setTimeout(() => {
      refresh();
    }, 500);

    onOpenChange();
  };

  return (
    <>
      <Button
        className={`rounded-3xl bg-[#15313B] font-bold ${
          nameButton.toLocaleLowerCase() === 'añadir' ? 'ml-5' : ''
        } flex h-9 justify-center gap-3 pl-3 pr-5 text-[#EEFAF8] 
        hover:scale-105 hover:shadow-[0_0_10px_1px_#EEFAF8]`}
        onPress={onOpen}
        isDisabled={nameButton.toLocaleLowerCase() === 'añadir' ? false : !data?.cat_editable}
      >
        {icon} {nameButton}
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        placement="auto"
        onOpenChange={onOpenChange}
        className="z-50"
      >
        <ModalContent className="flex w-fit flex-col items-center justify-center py-4">
          {(onClose) => (
            <>
              <ModalHeader className="text-4xl font-bold">
                Categorías
              </ModalHeader>
              <ModalBody>
                <form className="flex flex-col items-center justify-center gap-0">
                  <FormikProvider value={categoriesSubmit}>
                    <Field
                      type="text"
                      name="cat_name"
                      label="Categoría"
                      placeholder="Ingresa el nombre de la categoría"
                      component={CustomInput}
                      isRequired
                      isInvalid={
                        categoriesSubmit.errors.cat_name &&
                        categoriesSubmit.touched.cat_name
                      }
                      errorMessage={categoriesSubmit.errors.cat_name}
                      color={categoriesSubmit.errors.cat_name ? "danger" : ""}
                    />
                    <Field
                      type="text"
                      name="cat_icon"
                      label="Icon"
                      placeholder="Choose your icon"
                      component={IconsSelect}
                      isRequired
                      errorMessage={categoriesSubmit.errors.cat_icon}
                    />
                    <Field
                      name="cat_type"
                      label="Tipo de categoría"
                      placeholder="Selecciona el tipo"
                      defaultSelectedKeys={data?.cat_type || selectedTab}
                      component={CustomSelect}
                      options={[
                        { label: 'Egresos', value: 'E' },
                        { label: 'Ingresos', value: 'I' },
                      ]}
                      isRequired
                      isInvalid={
                        categoriesSubmit.errors.cat_type &&
                        categoriesSubmit.touched.cat_type
                      }
                      errorMessage={categoriesSubmit.errors.cat_type}
                    />
                  </FormikProvider>
                </form>
                <div className="flex w-full justify-center gap-6">
                  <Button
                    className="flex h-9 justify-center gap-3 rounded-3xl bg-[#15313B] pl-3 pr-5 font-bold text-[#EEFAF8] 
                          hover:scale-105 hover:shadow-[0_0_10px_1px_#EEFAF8]"
                    type="submit"
                    onClick={() => categoriesSubmit.handleSubmit()}
                  >
                    {icon} {nameButton}
                  </Button>
                  <Button
                    onClick={onClose}
                    className="flex h-9 justify-center gap-3 rounded-3xl bg-[#15313B] pl-3 pr-5 font-bold text-[#EEFAF8] 
                          hover:scale-105 hover:shadow-[0_0_10px_1px_#EEFAF8]"
                  >
                    <XCircleIcon className="w-6" /> Cancelar
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CategoryModal;
