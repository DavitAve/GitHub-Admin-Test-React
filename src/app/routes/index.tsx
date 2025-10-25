import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { PrivateRoute } from '@/app/providers/router/PrivateRoute'
import { ROUTES } from '@/shared/config/routes'

const AuthPage = lazy(() => import('@/pages/auth/ui/AuthPage'))
const ReposPage = lazy(() => import('@/pages/repos/ui/ReposPage'))
const NotFound = lazy(() => import('@/pages/not-found/ui/NotFound'))

export const routes: RouteObject[] = [
  {
    index: true,
    element: <AuthPage />,
  },
  {
    path: ROUTES.AUTH,
    element: <AuthPage />,
  },

  {
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTES.REPOS,
        element: <ReposPage />,
      },
    ],
  },

  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]
