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
  
  const iconsSearch = icons.filter(icon => icon.cat_name.replace(/^tabler:|-/g, ' ').trim().includes(search))
  
  const iconsPagination = usePagination({items: iconsSearch, itemsPerPage: 28})

  const handleOnClick = (icon: string) => {
    // iconSelected(icon || "")
    form.setFieldValue(field.name, icon)
    setIconSelected(icon)
  }
    
  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }
  

  return (
      <section>
        <Input
          isReadOnly
          value={iconSelected}
          className="hidden"
        />
        {/* <div className="flex justify-center content-center">
          {iconSelected && <div dangerouslySetInnerHTML={{ __html: iconSelected }} />}
        </div> */}
        <Input
          placeholder="Type to search..."
          radius="full"
          isClearable
          variant="bordered"
          type="text"
          startContent={
              <MagnifyingGlassIcon className="text-[#CDFEEC] w-6 " />
          }
          className="w-full"
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
        <article className=" w-72 flex flex-wrap justify-evenly items-center">
          {iconsPagination.currentItems.map(icon => {
            return (
              <Tooltip 
                key={icon.cat_name}
                content={ <p className="text-center">{icon.cat_name.replace(/^tabler:|-/g, ' ').trim()}</p> }
                offset={5}
                delay={800}
              >
                <Button className="flex flex-col justify-center content-center rounded"
                  onClick={() => handleOnClick(icon.cat_icon || "")}
                  isIconOnly
                  variant="light"
                >
                  <div className="flex justify-center content-center">
                    {icon.cat_icon && <div dangerouslySetInnerHTML={{ __html: icon.cat_icon }} />}
                  </div>
                </Button>
              </Tooltip>
            ) 
          })}
        </article>
        <Pagination
          radius="full"
          showShadow
          size="sm"
          page={iconsPagination.currentPage}
          total={iconsPagination.totalPages}
          onChange={(page) => iconsPagination.setCurrentPage(page)}
        />
      </section>
  );
};

export default IconsSelect;