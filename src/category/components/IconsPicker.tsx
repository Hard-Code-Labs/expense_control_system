import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Tooltip } from '@nextui-org/react';
import { ICONS } from '../constants/icons';
import { SearchIcon } from 'lucide-react';

const IconsPicker = ({ formik, isEdit } : { formik: any, isEdit: boolean }) => {
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log(ICONS.find(([iconName]) => iconName === formik.values.catIcon)?.[1])

  const [icon, setIcon] = useState( isEdit
    ? ICONS.find(([iconName]) => iconName === formik.values.catIcon) 
    : (ICONS[Math.floor(Math.random() * ICONS.length)])
  );

  const IconComponent = icon[1] as React.ElementType;

  const iconsPerPage = 42;
  const [visibleIcons, setVisibleIcons] = useState(iconsPerPage);
  const filteredIcons = ICONS.filter(([iconName]) => iconName.toLowerCase().includes(search.toLowerCase()));
  const displayedIcons = filteredIcons.slice(0, visibleIcons);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastIconRef = useRef<HTMLButtonElement | null>(null);

  const loadMoreIcons = useCallback(() => {
    setVisibleIcons((prev) => Math.min(prev + iconsPerPage, filteredIcons.length));
  }, [filteredIcons.length]);

  useEffect(() => {
    formik.setFieldValue('catIcon', icon[0]);
  }, []);

  useEffect(() => {
    if (!isDropdownOpen || displayedIcons.length === filteredIcons.length)
      return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreIcons();
        }
      },
      { threshold: 1 },
    );

    if (lastIconRef.current) {
      observerRef.current.observe(lastIconRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [displayedIcons, filteredIcons.length, isDropdownOpen, loadMoreIcons]);

  return (
    <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen} className="bg-black border">
      <DropdownTrigger>
        <Button
          isIconOnly
          variant="light"
          className="h-fit w-fit p-2"
        >
          {IconComponent && <IconComponent className="h-16 w-16" />}
        </Button>
      </DropdownTrigger>

      <DropdownMenu disallowEmptySelection variant="light" className=''>
        <DropdownItem key="search" isReadOnly>
          <Input
            placeholder="Busca tu icono..."
            radius="full"
            variant="bordered"
            type="text"
            startContent={<SearchIcon className="w-6 text-[#CDFEEC] " />}
            className="w-full"
            classNames={{
              inputWrapper: [
                'bg-transparent',
                'h-9',
                'dark:border-1',
                'dark:border-white',
                'dark:hover:border-2',
              ],
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </DropdownItem>

        <DropdownItem key="icon">
          <article className="flex w-[280px] h-[200px] flex-wrap items-start justify-start overflow-y-auto">
            {displayedIcons.map(([IconName, Icon]: [string, any], index) => {
              return (
                <Tooltip
                  key={IconName}
                  content={<p className="text-center">{IconName}</p>}
                  className='border'
                  offset={5}
                  delay={800}
                >
                  <Button
                    ref={ index === displayedIcons.length - 1 ? lastIconRef : null }
                    className="flex flex-col content-center justify-center hover:text-success hover:border-success border border-transparent"
                    onClick={() => {
                      setIcon([IconName, Icon]);
                      setIsDropdownOpen(false);
                      setSearch('');
                      formik.setFieldValue('cat_icon', IconName);
                    }}
                    isIconOnly
                    variant="light"
                  >
                    <Icon className="h-6 w-6" />
                  </Button>
                </Tooltip>
              );
            })}
          </article>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default IconsPicker;
