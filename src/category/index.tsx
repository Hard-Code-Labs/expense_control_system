import React from 'react';
import CategoryCard from './components/CategoryCard';
import TitleBar from '../TitleBar';
import TitleCategory from './components/TitleCategory';

const Category = () => {
  const categories = [
    {
      name: "Education",
      type: "Income",
    },
    {
      name: "Home",
      type: "Income",
    },
    {
      name: "Work",
      type: "Income",
    },{
      name: "Work",
      type: "Income",
    },{
      name: "Work",
      type: "Income",
    },{
      name: "Work",
      type: "Income",
    },
  ]
  return (
    <>
      <TitleCategory />
      <section className="flex flex-wrap justify-center items-center gap-3 p-5">
        {categories.map((card) => {
          return <CategoryCard name={card.name} type={card.type} />
        })}
      </section>
    </>
  );
};

export default Category;