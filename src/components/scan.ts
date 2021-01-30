import { loadAllGitLogs } from '../commons/git-commander';
import { searchCommits } from '../commons/github-search';

export async function scanFromCurrent(): Promise<void> {
  const gitlogs = await loadAllGitLogs();
  const commitHashes: string[] = gitlogs.map((gitlog) => {
    return gitlog.hash;
  });
  const searchResults = await searchCommits(commitHashes);
//  console.log(searchResults);
  for(const item of searchResults.items){
    console.log({name: item.repository.name, url: item.repository.html_url});
  }
};
