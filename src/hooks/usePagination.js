import { useState } from "react";

const usePagination = ({ currPage, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(currPage);
  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return {
    begin,
    end,
    currentPage,
    handlePageChange,
  };
};

export default usePagination;
