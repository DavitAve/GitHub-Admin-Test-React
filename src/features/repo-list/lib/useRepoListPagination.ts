import { useState } from 'react'

const DEFAULT_PAGE = 1
const DEFAULT_PER_PAGE = 30

export const useRepoListPagination = () => {
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [perPage] = useState(DEFAULT_PER_PAGE)

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setPage((prev) => Math.max(1, prev - 1))
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1) {
      setPage(newPage)
    }
  }

  const resetPage = () => {
    setPage(DEFAULT_PAGE)
  }

  return {
    page,
    perPage,
    handleNextPage,
    handlePrevPage,
    handlePageChange,
    resetPage,
  }
}
