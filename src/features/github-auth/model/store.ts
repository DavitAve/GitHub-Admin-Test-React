import { LOCAL_STORAGE_KEYS } from '@/shared/config/localStorageKeys'
import { create } from 'zustand'

interface GithubAuthState {
  username: string
  token: string
  setCredentials: (username: string, token: string) => void
  clear: () => void
}

const useGithubAuthStore = create<GithubAuthState>((set) => ({
  username: localStorage.getItem(LOCAL_STORAGE_KEYS.githubUsername) ?? '',
  token: localStorage.getItem(LOCAL_STORAGE_KEYS.githubToken) ?? '',
  setCredentials: (username, token) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.githubUsername, username)
    localStorage.setItem(LOCAL_STORAGE_KEYS.githubToken, token)
    set({ username, token })
  },
  clear: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.githubUsername)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.githubToken)
    set({ username: '', token: '' })
  },
}))

export default useGithubAuthStore
