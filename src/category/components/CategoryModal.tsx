import React, { useEffect } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { Field, useFormik, FormikProvider } from 'formik';
import { PencilSquareIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useAddCategory } from '../hooks/useAddCategories';
import CustomInput from '../../global/components/form/CustomInput';
import CustomSelect from '../../global/components/form/CustomSelect';
import IconsSelect from './IconsSelect';
import { Categories } from '../hooks/useGetCategories';
import { useUpdateCategory } from '../hooks/useUpdateCategories';
import { categoriesSchema } from '../schema';

interface Props {
  data?: Categories;
  isEdit?: boolean;
  selectedTab?: string;
  refresh: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

const CategoryModal = ({ data, isEdit = false, selectedTab, refresh, isOpen, onOpen, onOpenChange }: Props) => {
  const { result, loading, error, addCategory } = useAddCategory();

  const initialData = {
    cat_name: '',
    cat_icon: '',
    cat_type: selectedTab,
    cat_editable: true,
  };

  const categoriesSubmit = useFormik({
    initialValues: data || initialData,
    validationSchema: categoriesSchema,
    onSubmit: (values: any) => {
      if (isEdit) {
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
    addCategory(values);

    setTimeout(() => {
      refresh();
    }, 1000);

    onOpenChange();
  };

  if (!loading && result) {
    console.log('Categoría que se agrego correctamente', result);
  }

  const handleEdit = (values: any) => {
    useUpdateCategory(values);

    setTimeout(() => {
      refresh();
    }, 1000);

    onOpenChange();
  };

  return (
    <>
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
                      color={categoriesSubmit.errors.cat_name ? 'danger' : ''}
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
                    className="flex h-9 justify-center rounded-3xl bg-[#15313B] pl-3 pr-5 font-bold text-[#EEFAF8] 
                          hover:scale-105 hover:shadow-[0_0_10px_1px_#EEFAF8]"
                    type="submit"
                    onClick={() => categoriesSubmit.handleSubmit()}
                    startContent={
                      isEdit ? (
                        <PencilSquareIcon className="w-6" />
                      ) : (
                        <PlusCircleIcon className="w-6" />
                      )
                    }
                  >
                    {isEdit ? 'Editar' : 'Añadir'}
                  </Button>
                  <Button
                    onClick={onClose}
                    className="flex h-9 justify-center rounded-3xl bg-[#15313B] pl-3 pr-5 font-bold text-[#EEFAF8] 
                          hover:scale-105 hover:shadow-[0_0_10px_1px_#EEFAF8]"
                    startContent={<XCircleIcon className="w-6" />}
                  >
                    Cancelar
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
