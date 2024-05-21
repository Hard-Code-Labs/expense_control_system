import { Button, Card, CardFooter, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { EllipsisHorizontalIcon, XCircleIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';
import CategoryModal from './CategoryModal';
import { Categories } from '../hooks/useGetCategories';
import { useUpdateCategory } from '../hooks/useUpdateCategories';

interface Props {
  data: Categories;
  del?: (type: string, value: string) => void;
  refresh: () => void
} 

const CategoryCard = ({data, del, refresh}: Props) => {

  const [ isOpen, setIsOpen ] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null);

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

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <Card
      className="bg-black max-w-[40vw] w-44 h-56 max-h-[50vw] flex flex-col justify-center items-center rounded-[40px] border border-[#00BE99]"
    >
      <Button
        className="bg-transparent absolute top-2 right-3"
        isIconOnly
        onClick={handleClick}
      > 
        <EllipsisHorizontalIcon className=" max-w-[7vw] w-8" />
      </Button>

      <div 
        ref={popoverRef} 
        className={`${isOpen ? "" : "hidden"} absolute top-[20%] right-[12%] w-fit flex flex-col gap-2 p-3 bg-black rounded-[15px] border border-[#CDFEEC]`}
      >
        <CategoryModal
          refresh={refresh}
          nameButton='Editar'
          icon={<PencilSquareIcon className="w-6"/>}
          data={data}
        />
        <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
            hover:shadow-[0_0_10px_1px_#f31260] hover:scale-105"
            onClick={() => handleDelete(data) }
            isDisabled={!data.cat_editable}
        >
            <XCircleIcon className="w-6"/> Borrar
        </Button>
      </div>

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