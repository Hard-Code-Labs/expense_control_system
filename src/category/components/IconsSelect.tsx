import React, { useState } from 'react';
import {Button} from '@nextui-org/button'; 
import icons from '../../../public/tabler.json'
import { Chip, Input, Pagination, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@nextui-org/react';
import { usePagination } from '../hooks/usePagination';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const IconsSelect = ({ field, form, ...props }:any) => {

  const [ search, setSearch ] = useState('')
  const [ iconSelected, setIconSelected ] = useState(props.value)
  
  const iconsSearch = icons.filter(icon => icon.cat_name.replace(/^tabler:|-/g, ' ').trim().includes(search))
  
  const iconsPagination = usePagination({items: iconsSearch, itemsPerPage: 28})

  const handleOnClick = (icon: string) => {
    form.setFieldValue(field.name, icon)
    setIconSelected(icon)
  }
    
  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }

  return (
    <section className="flex h-[330px] flex-col items-center justify-center gap-1 pb-4">
      <Input isReadOnly value={iconSelected} className="hidden" />
      <article className="flex w-full items-center gap-2 pb-4">
        <div className={`flex flex-col h-[50px] w-[60px] relative content-center justify-start rounded gap-2 p-1
        ${props.errorMessage ? "bg-[#2f0412]" : "bg-[#27272a]"}`}>
          {iconSelected ? (
            <div
              dangerouslySetInnerHTML={{
                __html: iconSelected.replace(/25px/g, '40px'),
              }}
            />
          ) : (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: field.value.replace(/25px/g, '40px'),
                }}
              />
              <p className="absolute text-tiny text-[#f31260] w-40 top-[110%]" >
                {props.errorMessage}
              </p>
            </>
          )}
        </div>
        <Input
          placeholder="Busca tu icono..."
          radius="full"
          variant="bordered"
          type="text"
          startContent={<MagnifyingGlassIcon className="w-6 text-[#CDFEEC] " />}
          className="w-full"
          classNames={{
            inputWrapper: [
              'bg-transparent',
              'h-9',
              'dark:border-1',
              'dark:border-[#CDFEEC]',
              'dark:hover:border-2',
            ],
          }}
          onChange={handleSearch}
        />
      </article>
      <article className="flex h-[200px] w-[280px] flex-wrap items-start justify-start">
        {iconsPagination.currentItems.map((icon) => {
          return (
            <Tooltip
              key={icon.cat_name}
              content={
                <p className="text-center">
                  {icon.cat_name.replace(/^tabler:|-/g, ' ').trim()}
                </p>
              }
              offset={5}
              delay={800}
            >
              <Button
                className="flex flex-col content-center justify-center rounded"
                onClick={() => handleOnClick(icon.cat_icon || '')}
                isIconOnly
                variant="light"
              >
                <div className="flex content-center justify-center">
                  {icon.cat_icon && (
                    <div dangerouslySetInnerHTML={{ __html: icon.cat_icon }} />
                  )}
                </div>
              </Button>
            </Tooltip>
          );
        })}
      </article>
      <Pagination
        radius="full"
        showShadow
        size="sm"
        page={iconsPagination.currentPage}
        total={iconsPagination.totalPages}
        onChange={(page) => iconsPagination.setCurrentPage(page)}
        className="flex w-full flex-col items-center"
      />
    </section>
  );
};

export default IconsSelect;