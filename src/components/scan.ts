import { loadAllGitLogs } from '../commons/git-commander';
import { searchCommits } from '../commons/github-search';
import { GithubRepositoryInfo } from '../interfaces/github-repository-info';

export async function scanRepositories(): Promise<GithubRepositoryInfo[]> {
  // to uniqRepositories
  const scannedResultObj: { [s: string]: GithubRepositoryInfo } = {};
  const gitlogs = await loadAllGitLogs();
  const commitHashes: string[] = gitlogs.map((gitlog) => gitlog.hash);
  const searchResults = await searchCommits(commitHashes);
  for (const item of searchResults.items) {
    scannedResultObj[item.repository.id.toString()] = item.repository as GithubRepositoryInfo;
  }
  return Object.values(scannedResultObj);
}
