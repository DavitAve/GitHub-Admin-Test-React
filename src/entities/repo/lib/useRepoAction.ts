import toast from 'react-hot-toast'
import { useRepoMutation } from './useRepoMutation'
import type { RepoFormData, UpdateRepoDto } from '@/entities/repo/model/types'
import { confirmToast } from '@/shared/lib/confirmToast'

const useRepoAction = ({
  username,
  owner,
}: {
  username: string
  owner?: string
}) => {
  const { deleteRepoMutation, createRepoMutation, updateRepoMutation } = useRepoMutation({ username, owner })

  const handleDelete = (repoName: string) => {
    confirmToast(`Delete repository “${repoName}”?`, async () => {
      deleteRepoMutation.mutate(repoName)
    })
  }

  const handleCreate = (data: RepoFormData) => {
    if (!data.name.trim()) {
      toast('Repository name required!')
      return
    }
    return createRepoMutation.mutate(data)
  }

  const handleUpdate = (data: UpdateRepoDto) => updateRepoMutation.mutate(data)

  return {
    handleDelete,
    deleteRepoMutation,
    handleCreate,
    createRepoMutation,
    handleUpdate,
    updateRepoMutation,
  }
}

export default useRepoAction
