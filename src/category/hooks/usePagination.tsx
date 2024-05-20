import React from 'react';
import { Categories } from './useGetCategories';

interface Props {
  items: Categories[];
  itemsPerPage: number;
}

export const usePagination = ({items, itemsPerPage}:Props) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex)
  }, [currentPage, items, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    currentItems,
    setCurrentPage,
  }
}