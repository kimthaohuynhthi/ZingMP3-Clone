import { useState } from "react";
// hooks
import useEventListener from "./useEventListener";

const usePagination = ({ currPage, itemsPerPage, totalData, isHover }) => {
  const [currentPage, setCurrentPage] = useState(currPage);
  const totalPages = Math.ceil(totalData / itemsPerPage);
  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleKeyChange = (e) => {
    switch (e.key) {
      case "ArrowRight": {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
        break;
      }
      case "ArrowLeft": {
        if (currentPage !== 1) handlePageChange(currentPage - 1);
        break;
      }
      default:
        return currentPage;
    }
    return currentPage;
  };

  useEventListener("keydown", isHover, handleKeyChange);

  return {
    begin,
    end,
    currentPage,
    handlePageChange,
  };
};

export default usePagination;
