export const repoKeys = {
  all: ['repos'] as const,
  lists: () => [...repoKeys.all, 'list'] as const,
  list: (username: string, page: number, perPage: number) =>
    [...repoKeys.lists(), username, page, perPage] as const,
  details: () => [...repoKeys.all, 'detail'] as const,
  detail: (owner: string, repo: string) =>
    [...repoKeys.details(), owner, repo] as const,
} as const
