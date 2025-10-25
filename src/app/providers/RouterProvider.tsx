import React, { Suspense } from 'react'
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'
import { routes } from '@/app/routes'
import Loader from '@/shared/ui/Loader'

export const RouterProvider: React.FC = () => {
  const router = createBrowserRouter(routes)
  return (
    <Suspense fallback={<Loader />}>
      <ReactRouterProvider router={router} />
    </Suspense>
  )
}
