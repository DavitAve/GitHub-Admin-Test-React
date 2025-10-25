import { GithubService } from '@/shared/services/GithubService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import type { CreateRepoDto, UpdateRepoDto } from '@/entities/repo/model/types'
import { repoKeys } from '@/entities/repo/model/queryKeys'

export const useRepoMutation = ({
  username,
}: {
  username: string
  owner?: string
}) => {
  const queryClient = useQueryClient()

  const deleteRepoMutation = useMutation({
    mutationFn: (repoName: string) => GithubService.deleteRepo(username, repoName),
    onMutate: () => {
      toast.loading('Deleting repository...', { id: 'delete-repo' })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: repoKeys.all, exact: false })
      toast.success('Repo deleted successfully!', { id: 'delete-repo' })
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      toast.error(`Failed to delete repository: ${errorMessage}`, { id: 'delete-repo' })
    },
  })

  const createRepoMutation = useMutation({
    mutationFn: (data: CreateRepoDto) =>
      GithubService.createRepo({
        name: data.name,
        description: data.description,
        private: data.visibility === 'private',
      }),
    onMutate: () => {
      toast.loading('Creating repository...', { id: 'create-repo' })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: repoKeys.all, exact: false })
      toast.success('Repository created successfully!', { id: 'create-repo' })
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      toast.error(`Failed to create repository: ${errorMessage}`, { id: 'create-repo' })
    },
  })

  const updateRepoMutation = useMutation({
    mutationFn: (data: UpdateRepoDto) =>
      GithubService.updateRepo(data.owner, data.repo, {
        description: data.description,
        private: data.visibility === 'private',
      }),
    onMutate: () => {
      toast.loading('Updating repository...', { id: 'update-repo' })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: repoKeys.all })
      toast.success('Repo updated successfully!', { id: 'update-repo' })
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      toast.error(`Failed to update repository: ${errorMessage}`, { id: 'update-repo' })
    },
  })

  return {
    deleteRepoMutation,
    createRepoMutation,
    updateRepoMutation,
  }
}
