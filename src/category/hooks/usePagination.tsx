import React from 'react';

interface Props {
  items: items[];
  itemsPerPage: number;
}

interface items {
  cat_name: string;
  cat_icon?: string;
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