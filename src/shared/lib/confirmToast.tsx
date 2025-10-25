import { toast } from 'react-hot-toast'

export const confirmToast = (
  message: string,
  onConfirm: () => void,
  onCancel?: () => void,
) => {
  toast.custom((t) => (
    <div
      className={`bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col gap-3 transition-all ${
        t.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <p className='text-gray-800 font-medium'>{message}</p>

      <div className='flex justify-end gap-2 mt-2'>
        <button
          onClick={() => {
            toast.dismiss(t.id)
            onCancel?.()
          }}
          className='px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer'
        >
          Cancel
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id)
            onConfirm()
          }}
          className='px-3 py-1 text-sm rounded-md bg-red-500 hover:bg-red-600 text-white cursor-pointer'
        >
          Confirm
        </button>
      </div>
    </div>
  ))
}
