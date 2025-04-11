import React, { useState } from 'react';

interface Props<T> {
  items: T[];
  itemsPerPage: number;
}

export const usePagination = <T,>({ items, itemsPerPage }: Props<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex);
  }, [currentPage, items, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    currentItems,
    setCurrentPage,
  };
};
