import { Button, Card, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@nextui-org/react';
import { EllipsisHorizontalIcon, XCircleIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import CategoryModal from './CategoryModal';
import { Categories } from '../hooks/useGetCategories';
import { useUpdateCategory } from '../hooks/useUpdateCategories';

interface Props {
  data: Categories;
  del?: (type: string, value: string) => void;
  refresh: () => void
} 

const CategoryCard = ({data, del, refresh}: Props) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleDelete = (values: any) => {

    const deleteCategory = {
      ...values,
      is_delete: true,
    }

    useUpdateCategory(deleteCategory)

    setTimeout(() => {
      refresh();
    }, 500);

  }

  return (
    <>
    <Card
      className="bg-black max-w-[40vw] w-44 h-56 max-h-[50vw] flex flex-col justify-center items-center rounded-[40px] border border-[#00BE99]"
    >
      <Dropdown
        classNames={{
          content: "min-w-[125px] bg-black py-1 px-1 border border-[#CDFEEC]",
        }}
      >
        <DropdownTrigger>
          <Button isIconOnly className="bg-transparent absolute top-2 right-3" > 
            <EllipsisHorizontalIcon className=" max-w-[7vw] w-8" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="shadow" >
          <DropdownItem key="edit"
            onPress={onOpen}
            startContent={<PencilSquareIcon className="w-6" />}
          >
            Editar
          </DropdownItem>
          <DropdownItem key="delete" 
            color="danger"
            className="text-danger" 
            startContent={<XCircleIcon className="w-6" />}
            onClick={() => handleDelete(data) }
          >
            Eliminar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <CategoryModal
        data= {data}
        isEdit= {true}
        refresh= {refresh}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />

      <div className="flex justify-center content-center">
        {data.cat_icon && <div dangerouslySetInnerHTML={{ __html: data.cat_icon.replace(/25px/g, 'min(13vw, 70px)') }} />}
      </div>
      <CardFooter className="flex flex-col mt-2 gap-1 text-center">
        <h1 className="text-[4.2vw] sm:text-2xl font-bold">{data.cat_name}</h1>
        <p className="text-[3.2vw] sm:text-sm">{data.cat_type === "E" ? "Egresos" : "Ingresos"}</p>
      </CardFooter>
    </Card>
    </>
  );
};

export default CategoryCard;