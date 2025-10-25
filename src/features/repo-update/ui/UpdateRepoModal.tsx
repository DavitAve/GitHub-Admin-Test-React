import React from 'react'
import { Button } from '@/shared/ui/Button'
import UpdateRepoForm from '@/features/repo-update/ui/UpdateRepoForm'
import type { Repo } from '@/entities/repo/model/types'

interface UpdateRepoModalProps {
  open: boolean
  repo: Repo
  owner: string
  onClose: () => void
  onUpdated: () => void
}

const UpdateRepoModal: React.FC<UpdateRepoModalProps> = ({
  open,
  repo,
  owner,
  onClose,
  onUpdated,
}) => {
  if (!open) return null

  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg p-6 w-full max-w-md shadow-lg'>
        <h3 className='text-lg font-semibold mb-4'>
          Edit Repository: <span className='text-blue-600'>{repo?.name}</span>
        </h3>
        <UpdateRepoForm repo={repo} owner={owner} onUpdated={onUpdated} />
        <div className='mt-3 text-right'>
          <Button variant='secondary' onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UpdateRepoModal
