import type { Repo } from '@/entities/repo/model/types'
import { Modal } from '@/shared/ui/Modal'
import React from 'react'

interface Props {
  open: boolean
  onClose: () => void
  repo: Repo | null
}

const RepoDetailsModal: React.FC<Props> = ({ open, onClose, repo }) => {
  if (!repo) return null

  return (
    <Modal open={open} onClose={onClose} title='Repository Details'>
      <div className='space-y-3'>
        <p>
          <strong>Name:</strong> {repo.name}
        </p>
        <p>
          <strong>Description:</strong> {repo.description || '—'}
        </p>
        <p>
          <strong>Visibility:</strong> {repo.private ? 'Private' : 'Public'}
        </p>
        <p>
          <strong>URL:</strong>{' '}
          <a
            href={repo.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            {repo.html_url}
          </a>
        </p>
      </div>
    </Modal>
  )
}

export default RepoDetailsModal
