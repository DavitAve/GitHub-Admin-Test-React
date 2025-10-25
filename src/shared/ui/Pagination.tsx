import React from 'react'
import { Button } from './Button'

interface PaginationProps {
  currentPage: number
  onNextPage: () => void
  onPrevPage: () => void
  hasNextPage: boolean
  isLoading?: boolean
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onNextPage,
  onPrevPage,
  hasNextPage,
  isLoading = false,
}) => {
  return (
    <div className='flex items-center justify-between mt-6 pt-4 border-t border-gray-200'>
      <Button
        variant='secondary'
        onClick={onPrevPage}
        disabled={currentPage === 1 || isLoading}
      >
        ← Previous
      </Button>
      
      <span className='text-sm text-gray-600'>
        Page {currentPage}
      </span>
      
      <Button
        variant='secondary'
        onClick={onNextPage}
        disabled={!hasNextPage || isLoading}
      >
        Next →
      </Button>
    </div>
  )
}
