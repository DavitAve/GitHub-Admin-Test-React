import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAuthForm } from '@/features/auth-form/lib/useAuthForm'

const AuthFormWidget = () => {
  const { form, error, isLoading, handleChange, handleSubmit } = useAuthForm()

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 bg-white rounded-lg p-6 shadow-md'
    >
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          GitHub Username
        </label>
        <Input
          name='username'
          type='text'
          placeholder='e.g. octocat'
          value={form.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Personal Access Token
        </label>
        <Input
          name='token'
          type='password'
          placeholder='••••••••••'
          value={form.token}
          onChange={handleChange}
        />
      </div>

      {error && <p className='text-sm text-red-600'>{error}</p>}

      <Button
        type='submit'
        className='w-full mt-4'
        disabled={isLoading}
      >
        {isLoading ? 'Checking...' : 'Save & Continue'}
      </Button>
    </form>
  )
}

export default AuthFormWidget
