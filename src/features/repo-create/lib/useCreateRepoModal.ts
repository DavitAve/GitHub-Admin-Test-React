import { useState } from 'react'

export const useCreateRepoModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleToggleModal = () => {
    setIsOpen((prev) => !prev)
  }

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
    handleToggleModal,
  }
}
