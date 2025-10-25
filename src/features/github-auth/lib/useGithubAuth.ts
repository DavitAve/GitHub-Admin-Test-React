import useGithubAuthStore from '@/features/github-auth/model/store'
import { ROUTES } from '@/shared/config/routes'
import { confirmToast } from '@/shared/lib/confirmToast'
import { useNavigate } from 'react-router-dom'

const useGithubAuth = () => {
  const { username, token, setCredentials, clear } = useGithubAuthStore()
  const navigate = useNavigate()

  const isAuthenticated = !!username && !!token

  const handleLogout = () => {
    confirmToast('Are you sure you want to log out?', () => {
      clear()
      navigate(ROUTES.AUTH)
    })
  }

  return {
    username,
    token,
    isAuthenticated,
    setCredentials,
    handleLogout,
  }
}

export default useGithubAuth
