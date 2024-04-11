import { Button, Card, CardFooter, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { EllipsisHorizontalIcon, XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CategoryCard = ({name, type, icon, del}: Types) => {

  // const handleClick = (type: string, value: string) => {
  //   del(type, value)
  // }

  return (
    <>
    <Card
      className="bg-black w-44 h-56 flex flex-col justify-center items-center rounded-[40px] border border-[#00BE99]"
    >
      <Popover 
        showArrow
        placement="left"
        // backdrop="blur"
      >
        <PopoverTrigger>
          <Button
            className="bg-transparent w-2 self-end p-1 absolute top-2 right-3"
            isIconOnly
          > 
            <EllipsisHorizontalIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-[transparent] mr-[-35px]">
          <Button className="bg-[#15313B] font-bold rounded-3xl h-9 pl-3 pr-5 flex gap-3 justify-center text-[#EEFAF8] 
              hover:shadow-[0_0_10px_1px_#f31260]"
              // onClick={() => {handleClick(type!, name)}}
          >
              <XCircleIcon className="w-6"/> Delete
          </Button>
          <div className="absolute left-[105%] w-0 h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-[#15313B] border-b-[8px] border-b-transparent"></div>
        </PopoverContent>
      </Popover>
      {/* {icon} */}
      <div className="flex justify-center content-center">
        {icon && <div dangerouslySetInnerHTML={{ __html: icon }} />}
      </div>
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
  type?: string;
  icon?: React.ReactNode;
  del?: (type: string, value: string) => void;
} 