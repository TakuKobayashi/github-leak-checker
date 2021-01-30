import { GithubOwnerInfo } from './github-owner-info';

export interface GithubRepositoryInfo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  owner: GithubOwnerInfo;
}
