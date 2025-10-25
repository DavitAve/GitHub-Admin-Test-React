import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/shared/config/routes'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-center min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='text-center space-y-6 px-4'>
        <div className='space-y-2'>
          <h1 className='text-9xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
            404
          </h1>
          <p className='text-2xl font-semibold text-slate-300'>Page Not Found</p>
        </div>
        <p className='text-slate-400 max-w-md mx-auto'>
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className='flex justify-center gap-2 my-8'>
          <div className='w-2 h-2 bg-blue-400 rounded-full animate-bounce' />
          <div className='w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100' />
          <div className='w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200' />
        </div>
        <div className='flex gap-4 justify-center'>
          <Button
            onClick={() => navigate(ROUTES.HOME)}
            className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
          >
            Home
          </Button>
          <Button
            onClick={() => navigate(-1)}
            className='px-6 py-2 border border-slate-400 hover:border-slate-300 text-slate-300 hover:text-white rounded-lg transition-colors'
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
