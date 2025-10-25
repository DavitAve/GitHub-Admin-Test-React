import { useQuery } from '@tanstack/react-query'
import { GithubService } from '@/shared/services/GithubService'
import type { Repo } from '@/entities/repo/model/types'
import useGithubAuth from '@/features/github-auth/lib/useGithubAuth'
import { repoKeys } from '@/entities/repo/model/queryKeys'

interface UseReposParams {
  page?: number
  perPage?: number
}

export const useRepos = ({ page = 1, perPage = 30 }: UseReposParams = {}) => {
  const { username } = useGithubAuth()

  const query = useQuery<Repo[], Error>({
    queryKey: repoKeys.list(username, page, perPage),
    queryFn: () => GithubService.getUserRepos(username, page, perPage),
  })

  return query
}
