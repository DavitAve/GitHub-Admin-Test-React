export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  REPOS: '/repos',
  NOT_FOUND: '*',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
