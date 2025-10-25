import type { Repo } from '@/entities/repo/model/types';
import { githubClient } from '@/shared/api/githubClient'

export class GithubService {
  static async getUserRepos(
    username: string,
    page: number = 1,
    perPage: number = 30
  ): Promise<Repo[]> {
    const res = await githubClient.get(`/users/${username}/repos`, {
      params: {
        page,
        per_page: perPage,
        sort: 'updated',
        direction: 'desc'
      }
    })
    return res.data
  }

  static async createRepo(
    payload: { name: string; description?: string; private?: boolean },
  ) {
    const res = await githubClient.post<Repo>('/user/repos', payload)
    return res.data
  }

  static async updateRepo(
    owner: string,
    repo: string,
    payload: { description?: string; private?: boolean },
  ) {
    const res = await githubClient.patch(`/repos/${owner}/${repo}`, payload)
    return res.data
  }

  static async deleteRepo(owner: string, repo: string) {
    const res = await githubClient.delete(`/repos/${owner}/${repo}`)
    return res.data
  }

  static async validateUser(username: string) {
    const res = await githubClient.get(`/users/${username}`)
    return res.data
  }
}
