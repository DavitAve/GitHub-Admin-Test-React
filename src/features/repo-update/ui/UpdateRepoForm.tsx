import React from 'react'
import { Input } from '@/shared/ui/Input'
import { Select } from '@/shared/ui/Select'
import { Button } from '@/shared/ui/Button'
import { useUpdateRepoForm } from '@/features/repo-update/lib/useUpdateReportForm'
import type { Repo } from '@/entities/repo/model/types'

interface Props {
  repo: Repo
  owner: string
  onUpdated: () => void
}

const UpdateRepoForm: React.FC<Props> = ({ repo, owner, onUpdated }) => {
  const { formState, handleChange, handleSubmit, isPending } = useUpdateRepoForm({
    owner,
    repoName: repo.name,
    repoDescription: repo.description,
    onUpdated,
  })

  return (
    <div className='flex flex-col gap-3 bg-white border rounded-lg p-4'>
      <h3 className='text-lg font-semibold text-gray-800'>{repo.name}</h3>

      <Input
        name='description'
        label='Description'
        placeholder='New description...'
        value={formState.description}
        onChange={handleChange}
      />

      <Select
        label='Visibility'
        name='visibility'
        value={formState.visibility}
        onChange={handleChange}
        options={[
          { label: 'Public', value: 'public' },
          { label: 'Private', value: 'private' },
        ]}
      />

      <Button onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'Saving...' : 'Save Changes'}
      </Button>
    </div>
  )
}

export default UpdateRepoForm
