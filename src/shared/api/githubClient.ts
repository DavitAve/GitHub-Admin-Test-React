import axios from 'axios'
import { LOCAL_STORAGE_KEYS } from '@/shared/config/localStorageKeys'

export const githubClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
  },
  params: {},
})

githubClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.githubToken)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      }
    }
    
    return config
  },
  (error) => Promise.reject(error)
)
