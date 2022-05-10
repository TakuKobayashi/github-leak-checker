import { Octokit } from '@octokit/rest';
const octokit = new Octokit();

const LIMIT_QUERY_WORDS = 256;
const SEARCH_JOIN_WORD = ' OR ';

export async function searchCommits(commitHashes: string[] | string) {
  const flatCommitHashes = [].concat(...commitHashes);
  const searchQueryHashes = sliceLimitHashes(flatCommitHashes);
  const searchResults = await octokit.search.commits({ q: searchQueryHashes.join(SEARCH_JOIN_WORD) });
  return searchResults.data;
}

export async function searchAllCommitItems(commitHashes: string[] | string) {
  const flatCommitHashes = [].concat(...commitHashes);
  const searchAllResults = [];
  while (flatCommitHashes.length > 0) {
    const searchQueryHashes = sliceLimitHashes(flatCommitHashes);
    for (const searchQueryHash of searchQueryHashes) {
      const removeIndex = flatCommitHashes.indexOf(searchQueryHash);
      flatCommitHashes.splice(removeIndex, 1);
    }
    const searchResults = await octokit.search.commits({ q: searchQueryHashes.join(SEARCH_JOIN_WORD) });
    for (const item of searchResults.data.items) {
      searchAllResults.push(item);
    }
  }
  return searchAllResults;
}

function sliceLimitHashes(commitHashes: string[]): string[] {
  const searchQueryHashes = [];
  let wordCount = 0;
  for (const commiteHash of commitHashes) {
    const willSumWordCount = wordCount + commiteHash.length + SEARCH_JOIN_WORD.length;
    if (willSumWordCount > LIMIT_QUERY_WORDS) {
      break;
    }
    wordCount = willSumWordCount;
    searchQueryHashes.push(commiteHash);
  }
  return searchQueryHashes;
}
