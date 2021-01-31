import simpleGit, { SimpleGit, LogResult, DefaultLogFields } from 'simple-git';

const { execSync } = require('child_process');

const git: SimpleGit = simpleGit();

async function execGitLogs(): Promise<LogResult<DefaultLogFields>> {
  return git.log();
}

export async function loadAllGitLogs() {
  const resultGitlogs = await execGitLogs();
  return resultGitlogs.all;
}

async function execGitRemotes() {
  return git.getRemotes(true);
}

export function execGitFileList(): string[] {
  const gitFileListString = execSync('git ls-files').toString();
  return gitFileListString.split('\n');
}
