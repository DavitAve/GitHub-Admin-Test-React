import React, { useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { Select } from '@/shared/ui/Select'
import useGithubAuth from '@/features/github-auth/lib/useGithubAuth'
import type { RepoFormData } from '@/entities/repo/model/types'
import useRepoAction from '@/entities/repo/lib/useRepoAction'

interface Props {
  open: boolean
  onClose: () => void
}

const initialFormData = { name: '', description: '', visibility: 'public' } as const

const VISIBILITY_OPTIONS = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
]


const CreateRepoModal: React.FC<Props> = ({ open, onClose }) => {
  const { username } = useGithubAuth()

  const [formData, setFormData] = useState<RepoFormData>(initialFormData)

  const { handleCreate, createRepoMutation } = useRepoAction({ username })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCreateRepo =  () => {
    handleCreate(formData)
    setFormData(initialFormData)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title='Create New Repository'>
      <div className='flex flex-col gap-3'>
        <Input
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='repository-name'
        />
        <Input
          label='Description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder='Short description (optional)'
        />
        <Select
          label='Visibility'
          name='visibility'
          value={formData.visibility}
          onChange={handleChange}
          options={VISIBILITY_OPTIONS}
        />
      </div>

      <div className='flex justify-end mt-5'>
        <Button
          onClick={handleCreateRepo}
          disabled={createRepoMutation.isPending}
          className='min-w-[100px]'
        >
          {createRepoMutation.isPending ? 'Creating...' : 'Create'}
        </Button>
      </div>
    </Modal>
  )
}

export default CreateRepoModal
