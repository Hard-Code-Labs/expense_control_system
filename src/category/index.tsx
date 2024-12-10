'use client'
import React, { use, useEffect, useState } from 'react';
import CategoryCard from './components/CategoryCard';
import TitleCategory from './components/TitleCategory';
import { AcademicCapIcon, ArrowTrendingUpIcon, ArrowRightIcon, CurrencyDollarIcon, HeartIcon, HomeIcon, RectangleGroupIcon, ShoppingCartIcon, TruckIcon, WalletIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Pagination, Tab, Tabs, card } from '@nextui-org/react';
import { usePagination } from './hooks/usePagination';
import { useMediaQuery } from '@react-hook/media-query';
import  { useGetCategories }  from './hooks/useGetCategories'

const Category = () => {

  const lg = useMediaQuery('(max-width: 1024px)')
  const sm = useMediaQuery('(max-width: 640px)')
  const itemsPerPage = sm ? 4 : lg ? 6 : 10

  const { expenses, income, fetchCategories } = useGetCategories();
  const [ searchValue, setSearchValue ] = useState("");
  const [ selectedTab, setSelectedTab ] = useState();
  
  const expensesFiltered = expenses?.filter(item => item.cat_name.trim().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  const incomeFiltered = income?.filter(item => item.cat_name.trim().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  const expensesPagination = usePagination({items: expensesFiltered || [], itemsPerPage})
  const incomePagination = usePagination({items: incomeFiltered || [], itemsPerPage })

  const handleSearch = (event: string) => {
    setSearchValue(event)
  }

  const handleRefresh = () => {
    fetchCategories()
  }

  const handleTab = (value: any) => {
    setSelectedTab(value)
  }

  return (
    <main className='w-screen'>
      <TitleCategory refresh={handleRefresh} search={handleSearch} selectedTab={selectedTab} />
      <Tabs
        aria-label="Categories"
        radius="full"
        variant="bordered"
        className="relative top-6 left-1/2 translate-x-[-50%] text-[D6FFF6] font-bold p-1"
        classNames={{
          tabList: "dark:bg-[#15313B] border-[#198ab3a2]",
          cursor: "dark:bg-[#198ab3a2]",
        }}
        onSelectionChange={(value) => handleTab(value)}
      >
        <Tab key="E" title="Egresos">
          <section className="w-full min-h-[74vh] flex flex-col items-center justify-between">
            <article className="flex flex-wrap justify-center items-center gap-x-[5vw] gap-y-8 mt-10 px-5">
              {expensesPagination.currentItems.map(card => {
                return <CategoryCard
                  key={card.cat_id}
                  data={card}
                  refresh={handleRefresh}
                />
              })}
            </article>
            <Pagination
              radius="full"
              showShadow
              page={expensesPagination.currentPage}
              total={expensesPagination.totalPages}
              onChange={(page) => expensesPagination.setCurrentPage(page)}
              className="flex items-center justify-center mt-5"
              classNames={{
                cursor: "w-3 h-3 bg-[#00BE99] text-[transparent]",
                item: "w-3 h-3 text-[transparent]",
              }}
            />
          </section>
        </Tab>

        <Tab key="I" title="Ingresos">
          <section className="w-full min-h-[74vh] flex flex-col items-center justify-between">
            <article className="flex flex-wrap justify-center items-center gap-x-[5vw] gap-y-8 mt-10 px-5">
              {incomePagination.currentItems.map(card => {
                return <CategoryCard
                  key={card.cat_id}
                  data={card}
                  refresh={handleRefresh}
                />
              })}
            </article>
            <Pagination
              radius="full"
              showShadow
              page={incomePagination.currentPage}
              total={incomePagination.totalPages}
              onChange={(page) => incomePagination.setCurrentPage(page)}
              className="flex items-center justify-center mt-5"
              classNames={{
                cursor: "w-3 h-3 bg-[#00BE99] text-[transparent]",
                item: "w-3 h-3 text-[transparent]",
              }}
            />
          </section>
        </Tab>

      </Tabs>
    </main>
  );
};

export default Category;