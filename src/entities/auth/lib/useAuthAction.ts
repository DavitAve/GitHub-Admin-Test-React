import useGithubAuth from '@/features/github-auth/lib/useGithubAuth'
import { ROUTES } from '@/shared/config/routes'
import { GithubService } from '@/shared/services/GithubService'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { authKeys } from '@/entities/auth/model/queryKeys'

export const useAuth = () => {
  const { setCredentials } = useGithubAuth()
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationKey: authKeys.all,
    mutationFn: ({ username }: { username: string; token: string }) => GithubService.validateUser(username),
    onSuccess: (_, { username, token }) => {
      setCredentials(username, token)
      toast(`✅ Welcome, ${username}! Credentials saved.`)
      navigate(ROUTES.REPOS)
    },
    onError: () => {
      toast('❌ Invalid username or token.')
    },
  })

  return { loginMutation }
}
