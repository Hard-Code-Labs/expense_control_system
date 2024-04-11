'use client'
import React, { use, useEffect, useState } from 'react';
import CategoryCard from './components/CategoryCard';
import TitleCategory from './components/TitleCategory';
import { AcademicCapIcon, ArrowTrendingUpIcon, ArrowRightIcon, CurrencyDollarIcon, HeartIcon, HomeIcon, RectangleGroupIcon, ShoppingCartIcon, TruckIcon, WalletIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Pagination, Tab, Tabs, card } from '@nextui-org/react';
import { usePagination } from './hooks/usePagination';
import { useMediaQuery } from '@react-hook/media-query';
import  { useCategories }  from './hooks/useCategories'

const Category = () => {

  const { getAll } = useCategories();
  const [expenses, setExpenses] = useState();
  const [income, setIncome] = useState();
  const [refresh, setRefresh] = useState(false);

  const lg = useMediaQuery('(max-width: 1024px)')
  const itemsPerPage = lg ? 6 : 10

  const expensesPagination = usePagination({items: expenses || [], itemsPerPage})
  const incomePagination = usePagination({items: income || [], itemsPerPage })

  const handleRefresh = () => {
    setRefresh(!refresh)
  }

  // const handleDel = (type: string, value: string) => {
  //   if (type === "Egresos") {
  //     setItemsExpenses(itemsExpenses.filter(item => item.name !== value))
  //   } else {
  //     setItemsIncome(itemsIncome.filter(item => item.name !== value))
  //   }
  // }

  useEffect(() => {
    getAll()
      .then(response => response.json())
      .then((data: any) => {
        setIncome(data.filter((type: any) => type.cat_type === "I"))
        setExpenses(data.filter((type: any) => type.cat_type === "E"))
      })
  }, [])

  return (
    <>
      <TitleCategory refresh={handleRefresh}/>
      <Tabs
        aria-label="Categories"
        radius="full"
        variant="bordered"
        className="relative top-6 left-1/2 translate-x-[-50%] text-[D6FFF6] font-bold p-1"
        classNames={{
          tabList: "dark:bg-[#15313B] border-[#198ab3a2]",
          cursor: "dark:bg-[#198ab3a2]",
        }}
      >
        <Tab key="expenses" title="Egresos">
          <section className="w-full h-[74vh] flex flex-col items-center justify-between">
            <article className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 mt-10">
              {expensesPagination.currentItems.map(card => {
                return <CategoryCard name={card.cat_name} type="Egresos" icon={card.cat_icon} 
                // del={handleDel} 
                />
              })}
            </article>
            <Pagination
              radius="full"
              showShadow
              page={expensesPagination.currentPage}
              total={expensesPagination.totalPages}
              onChange={(page) => expensesPagination.setCurrentPage(page)}
              className="flex items-center justify-center"
              classNames={{
                cursor: "w-3 h-3 bg-[#00BE99] text-[transparent]",
                item: "w-3 h-3 text-[transparent]",
              }}
            />
          </section>
        </Tab>

        <Tab key="income" title="Ingresos">
          <section className="w-full h-[74vh] flex flex-col items-center justify-between">
          <article className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 mt-10">
            {incomePagination.currentItems.map(card => {
              return <CategoryCard name={card.cat_name} type="Ingresos" icon={card.cat_icon} 
              // del={handleDel} 
              />
            })}
          </article>
          <Pagination
            radius="full"
            showShadow
            page={incomePagination.currentPage}
            total={incomePagination.totalPages}
            onChange={(page) => incomePagination.setCurrentPage(page)}
            className="flex items-center justify-center"
            classNames={{
              cursor: "w-3 h-3 bg-[#00BE99] text-[transparent]",
              item: "w-3 h-3 text-[transparent]",
            }}
          />
          </section>
        </Tab>

      </Tabs>
    </>
  );
};

export default Category;