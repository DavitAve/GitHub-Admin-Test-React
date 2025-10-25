import RepoListWidget from '@/widgets/repo-list/ui/RepoListWidget'
import React from 'react'
import { Link } from 'react-router-dom'

const ReposPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white border-b shadow-sm py-4 px-6 flex justify-between items-center'>
        <h1 className='text-xl font-semibold text-gray-800'>Repositories</h1>
        <Link
          to='/auth'
          className='text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer'
        >
          Change Credentials
        </Link>
      </header>

      <main className='p-6'>
        <RepoListWidget />
      </main>
    </div>
  )
}

export default ReposPage
