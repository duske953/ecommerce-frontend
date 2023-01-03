import { useState, useEffect } from "react";

export default function usePagination(pageNumber) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(+pageNumber);
  }, [pageNumber]);

  function handleIncreaseClick() {
    setPage((page) => page + 1);
  }

  function handleDecreaseClick() {
    setPage((page) => page - 1);
  }

  return {
    handleIncreaseClick,
    handleDecreaseClick,
    page,
  };
}
