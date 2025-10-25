export interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  private: boolean
}

export interface RepoFormData {
  name: string
  description: string
  visibility: 'public' | 'private'
}

export interface CreateRepoDto extends Omit<RepoFormData, 'description'> {
  description?: string
}

export interface UpdateRepoDto extends Partial<Omit<RepoFormData, 'name'>> {
  owner: string
  repo: string
}
