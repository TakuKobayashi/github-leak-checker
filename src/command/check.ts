import { loadAllGitLogs } from "../common/git-commander";
import { searchCommits, searchAllCommitItems } from "../common/github-search";

export default async (options: any): Promise<void> => {
  const gitlogs = await loadAllGitLogs();
  const commitHashes: string[] = gitlogs.map(gitlog => {
    return gitlog.hash;
  })
  const searchResults = await searchCommits(commitHashes);
  console.log(searchResults)
}