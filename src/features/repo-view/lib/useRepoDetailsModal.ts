import { useState } from 'react'
import type { Repo } from '@/entities/repo/model/types'

export const useRepoDetailsModal = () => {
  const [viewRepo, setViewRepo] = useState<Repo | null>(null)

  const handleOpenModal = (repo: Repo) => {
    setViewRepo(repo)
  }

  const handleCloseModal = () => {
    setViewRepo(null)
  }

  return {
    viewRepo,
    isOpen: !!viewRepo,
    handleOpenModal,
    handleCloseModal,
  }
}
