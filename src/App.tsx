import React from 'react'
import { QueryProvider } from './app/providers/QueryProvider'
import { RouterProvider } from './app/providers/RouterProvider'
import { Toaster } from 'react-hot-toast'

const App: React.FC = () => {
  return (
    <QueryProvider>
      <RouterProvider />
      <Toaster />
    </QueryProvider>
  )
}

export default App
