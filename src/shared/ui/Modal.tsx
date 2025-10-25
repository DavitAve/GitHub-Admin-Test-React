import React from 'react'
import { Button } from './Button'

interface ModalProps {
  open: boolean
  title?: string
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  open,
  title,
  onClose,
  children,
}) => {
  if (!open) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative animate-fadeIn'>
        {title && (
          <h2 className='text-lg font-semibold text-gray-800 mb-4 border-b pb-2'>
            {title}
          </h2>
        )}
        <div className='text-gray-700'>{children}</div>

        <div className='flex justify-end mt-6'>
          <Button variant='secondary' onClick={onClose} className='border border-gray-300'>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
