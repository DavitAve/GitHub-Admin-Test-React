import { useState } from 'react'
import { useAuth } from '@/entities/auth/lib/useAuthAction'

interface AuthFormData {
  username: string
  token: string
}

const initialFormData: AuthFormData = { username: '', token: '' }

export const useAuthForm = () => {
  const [form, setForm] = useState<AuthFormData>(initialFormData)
  const [error, setError] = useState('')
  const { loginMutation } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.username.trim() || !form.token.trim()) {
      setError('Both fields are required.')
      return
    }
    
    setError('')
    loginMutation.mutate(form)
  }

  return {
    form,
    error,
    isLoading: loginMutation.isPending,
    handleChange,
    handleSubmit,
  }
}
