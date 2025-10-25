import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useGithubAuth from '@/features/github-auth/lib/useGithubAuth'
import { ROUTES } from '@/shared/config/routes'

export const PrivateRoute: React.FC = () => {
  const { token } = useGithubAuth()

  if (!token) {
    return <Navigate to={ROUTES.AUTH} replace />
  }

  return <Outlet />
}
