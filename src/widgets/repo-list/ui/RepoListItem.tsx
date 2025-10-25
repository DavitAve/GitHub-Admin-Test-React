import React from 'react'
import type { Repo } from '@/entities/repo/model/types'
import { Button } from '@/shared/ui/Button'

interface RepoListItemProps {
  repo: Repo
  onView: (repo: Repo) => void
  onEdit: (repo: Repo) => void
  onDelete: (name: string) => void
  isDeleting?: boolean
}

export const RepoListItem: React.FC<RepoListItemProps> = ({
  repo,
  onView,
  onEdit,
  onDelete,
  isDeleting,
}) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-4'>
      <div className='flex flex-col'>
        <a
          href={repo.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline font-medium text-sm sm:text-base'
        >
          {repo.name}
        </a>
        <span className='text-gray-500 text-sm'>
          {repo.description || 'No description'}
        </span>
      </div>

      <div className='flex gap-2 mt-3 sm:mt-0'>
        <Button
          variant='secondary'
          className='text-sm px-3 py-1'
          onClick={() => onView(repo)}
        >
          View
        </Button>
        <Button
          variant='primary'
          className='text-sm px-3 py-1'
          onClick={() => onEdit(repo)}
        >
          Edit
        </Button>
        <Button
          variant='danger'
          className='text-sm px-3 py-1'
          onClick={() => onDelete(repo.name)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </div>
    </div>
  )
}
