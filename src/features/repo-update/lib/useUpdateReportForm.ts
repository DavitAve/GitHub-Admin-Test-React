import { useEffect, useState } from 'react'
import { useRepoMutation } from '@/entities/repo/lib/useRepoMutation'

interface UseUpdateRepoFormParams {
  owner: string
  repoName: string,
  repoDescription: string | null,
  onUpdated: () => void
}

const initFormState = {
  description: '',
  visibility: 'public' as const,
}

export const useUpdateRepoForm = ({
  owner,
  repoName,
  repoDescription,
  onUpdated,
}: UseUpdateRepoFormParams) => {
  const [formState, setForm] = useState(initFormState)
  const { updateRepoMutation } = useRepoMutation({ username: owner })

  useEffect(() => {
    if (!repoDescription) return
    setForm((prev) => ({ ...prev, description: repoDescription }))
  }, [repoDescription])

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    await updateRepoMutation.mutateAsync({
      owner,
      repo: repoName,
      description: formState.description,
      visibility: formState.visibility,
    })
    onUpdated()
  }

  return {
    formState,
    handleChange,
    handleSubmit,
    isPending: updateRepoMutation.isPending,
  }
}
