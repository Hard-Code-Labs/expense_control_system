import React, { useState } from 'react';
import {Button} from '@nextui-org/button'; 
import icons from '../../../public/tabler.json'
import { Input, Pagination, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@nextui-org/react';
import { usePagination } from '../hooks/usePagination';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface Props {
  iconSelected: (icon: string) => void
}

const IconsSelect = ({ field, form, ...props }:any) => {

  const [ search, setSearch ] = useState('')
  const [ iconSelected, setIconSelected ] = useState('')
  
  const iconsSearch = icons.filter(icon => icon.name.replace(/^tabler:|-/g, ' ').trim().includes(search))
  
  const iconsPagination = usePagination({items: iconsSearch, itemsPerPage: 30})

  const handleOnClick = (icon: string) => {
    // iconSelected(icon || "")
    form.setFieldValue(field.name, icon)
    setIconSelected(icon)
  }
    
  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }
  

  return (
      <>
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
          onChange={handleSearch}
        />
        <Input
          // {...field}
          // {...props}
          isReadOnly
          value={iconSelected}
          // className="hidden"
        />
        <div className="flex justify-center content-center">
          {iconSelected && <div dangerouslySetInnerHTML={{ __html: iconSelected }} />}
        </div>
        <article className=" w-72 flex flex-wrap justify-evenly items-center gap-1 bg-[#27272a] rounded-lg p-2">
          {iconsPagination.currentItems.map(icon => {
            return (
              <Tooltip 
                content={
                    <p className="text-center">{icon.name.replace(/^tabler:|-/g, ' ').trim()}</p>
                }
                offset={-15}
              >
                <Button className="rounded border flex flex-col justify-center content-center"
                  onClick={() => handleOnClick(icon.svg || "")}
                  isIconOnly
                >
                  <div className="flex justify-center content-center">
                    {icon.svg && <div dangerouslySetInnerHTML={{ __html: icon.svg }} />}
                  </div>
                </Button>
              </Tooltip>
            ) 
          })}
        </article>
        <Pagination
          radius="full"
          showShadow
          page={iconsPagination.currentPage}
          total={iconsPagination.totalPages}
          onChange={(page) => iconsPagination.setCurrentPage(page)}
        />
      </>
  );
};

export default IconsSelect;