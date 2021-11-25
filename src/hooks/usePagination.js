import { useState } from "react";
// hooks
import useEventListener from "./useEventListener";

const usePagination = ({ currPage, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(currPage);
  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const keyCode = {
    arrowUp: 38,
    arrowDown: 40,
  };

  const handleKeyChange = (e) => {
    console.log("vo hay k vo noi 1 loi");
    switch (e) {
      case keyCode.arrowDown: {
        e.preventDefault();
        handlePageChange(currPage - 1);
        break;
      }
      case keyCode.arrowUp: {
        e.preventDefault();
        handlePageChange(currPage + 1);
        break;
      }
      default:
        return currPage;
    }
    return currPage;
  };

  useEventListener("keydown", handleKeyChange);

  return {
    begin,
    end,
    currentPage,
    handlePageChange,
  };
};

export default usePagination;
