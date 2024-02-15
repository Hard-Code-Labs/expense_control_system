import { Button, Card, CardFooter } from '@nextui-org/react';
import { AcademicCapIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CategoryCard = ({name, type}: Types) => {
  return (
    <>
    <Card
      className="bg-black w-52 h-64 flex flex-col justify-center items-center rounded-[40px] border border-[#00BE99]"
    >
      <Button
          className="bg-transparent w-2 self-end p-1 absolute top-2 right-3"
          isIconOnly
      >
        <EllipsisHorizontalIcon />
      </Button>
      <AcademicCapIcon className="w-28" />
      <CardFooter className="flex flex-col mt-2 gap-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm">{type}</p>
      </CardFooter>
    </Card>
    </>
  );
};

export default CategoryCard;

interface Types {
  name: string;
  type: string;
} 