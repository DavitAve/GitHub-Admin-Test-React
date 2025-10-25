import React from 'react'
import { Button } from '@/shared/ui/Button'
import { Pagination } from '@/shared/ui/Pagination'
import { useRepos } from '@/entities/repo/lib/useRepos'
import useGithubAuth from '@/features/github-auth/lib/useGithubAuth'

import CreateRepoModal from '@/features/repo-create/ui/CreateRepoModal'
import RepoDetailsModal from '@/features/repo-view/ui/RepoDetailsModal'
import UpdateRepoModal from '@/features/repo-update/ui/UpdateRepoModal'
import { RepoListItem } from '@/widgets/repo-list/ui/RepoListItem'
import { useRepoListPagination } from '@/features/repo-list/lib/useRepoListPagination'
import useRepoAction from '@/entities/repo/lib/useRepoAction'
import { useUpdateRepoModal } from '@/features/repo-update/lib/useUpdateRepoModal'
import { useCreateRepoModal } from '@/features/repo-create/lib/useCreateRepoModal'
import { useRepoDetailsModal } from '@/features/repo-view/lib/useRepoDetailsModal'

const RepoListWidget: React.FC = () => {
  const { username, handleLogout } = useGithubAuth()

  const { page, perPage, handleNextPage, handlePrevPage } = useRepoListPagination()
  const { isOpen: isCreateModalOpen, handleToggleModal: handleToggleCreateModal } = useCreateRepoModal()
  const { 
    viewRepo,
    isOpen: isDetailsModalOpen,
    handleOpenModal: handleOpenDetailsModal,
    handleCloseModal: handleCloseDetailsModal,
  } = useRepoDetailsModal()

  const {
    updateRepo,
    isOpen: isUpdateModalOpen,
    handleOpenModal: handleOpenUpdateModal,
    handleCloseModal: handleCloseUpdateModal,
    handleRepoUpdated,
  } = useUpdateRepoModal()

  const { data: repos = [], isLoading, isError, error } = useRepos({ page, perPage })

  const { handleDelete, deleteRepoMutation } = useRepoAction({ username })

  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h2 className='text-lg font-semibold text-gray-800'>Repositories</h2>
          <p className='text-sm text-gray-500'>
            Logged in as <span className='font-medium'>{username}</span>
          </p>
        </div>
        <div className='flex gap-3'>
          <Button variant='secondary' onClick={handleToggleCreateModal}>
            + New Repo
          </Button>
          <Button variant='danger' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      {isLoading && <p className='text-gray-500'>Loading...</p>}
      {isError && (
        <p className='text-red-500'>
          {error?.message || 'Failed to load repositories.'}
        </p>
      )}
      {!isLoading && !isError && repos.length === 0 && (
        <p className='text-gray-500'>No repositories found.</p>
      )}

      {!isLoading && repos.length && (
        <div className='divide-y divide-gray-200'>
          {repos.map((repo) => (
            <RepoListItem
              key={repo.id}
              repo={repo}
              onView={handleOpenDetailsModal}
              onEdit={handleOpenUpdateModal}
              onDelete={handleDelete}
              isDeleting={deleteRepoMutation.isPending}
            />
          ))}
        </div>
      )}

      {!isLoading && !isError && repos.length > 0 && (
        <Pagination
          currentPage={page}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          hasNextPage={repos.length === perPage}
          isLoading={isLoading}
        />
      )}

      <CreateRepoModal
        open={isCreateModalOpen}
        onClose={handleToggleCreateModal}
      />

      <RepoDetailsModal
        open={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        repo={viewRepo}
      />
      {isUpdateModalOpen && updateRepo && (
        <UpdateRepoModal
          open={isUpdateModalOpen}
          repo={updateRepo}
          owner={username}
          onClose={handleCloseUpdateModal}
          onUpdated={handleRepoUpdated}
        />
      )}
    </div>
  )
}

export default RepoListWidget
