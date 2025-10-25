import { useState } from 'react'
import type { Repo } from '@/entities/repo/model/types'

export const useUpdateRepoModal = () => {
  const [updateRepo, setUpdateRepo] = useState<Repo | null>(null)

  const handleOpenModal = (repo: Repo) => {
    setUpdateRepo(repo)
  }

  const handleCloseModal = () => {
    setUpdateRepo(null)
  }

  const handleRepoUpdated = () => {
    setUpdateRepo(null)
  }

  return {
    updateRepo,
    isOpen: !!updateRepo,
    handleOpenModal,
    handleCloseModal,
    handleRepoUpdated,
  }
}
