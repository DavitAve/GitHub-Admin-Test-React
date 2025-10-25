import AuthFormWidget from '@/widgets/auth-form/ui/AuthFormWidget'
import React from 'react'

const AuthPage: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
          GitHub Credentials
        </h1>

        <p className='text-gray-500 text-center mb-6 text-sm'>
          Please enter your GitHub username and personal access token to
          continue.
        </p>

        <AuthFormWidget />
      </div>
    </div>
  )
}

export default AuthPage
