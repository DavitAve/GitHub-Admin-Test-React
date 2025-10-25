export const authKeys = {
  all: ['auth'] as const,
  user: (username: string) => [...authKeys.all, 'user', username] as const,
} as const
