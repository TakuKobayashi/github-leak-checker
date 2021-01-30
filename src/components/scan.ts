import { loadAllGitLogs } from '../commons/git-commander';
import { searchCommits } from '../commons/github-search';
import { GithubRepositoryInfo } from '../interfaces/github-repository-info';

export async function scanFromCurrent(): Promise<GithubRepositoryInfo[]> {
  // to uniqRepositories
  const scannedResultObj: { [s: number]: GithubRepositoryInfo } = {};
  const gitlogs = await loadAllGitLogs();
  const commitHashes: string[] = gitlogs.map((gitlog) => {
    return gitlog.hash;
  });
  const searchResults = await searchCommits(commitHashes);
  for (const item of searchResults.items) {
    scannedResultObj[item.repository.id] = item.repository;
  }
  return Object.values(scannedResultObj);
}
