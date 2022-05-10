import { scanRepositories } from '../components/scan';
import chalk from 'chalk';

export default async (options: any): Promise<void> => {
  const scannedRepositories = await scanRepositories();
  for (const repository of scannedRepositories) {
    console.log(
      [
        chalk.green('repositoryName') + ':' + chalk.magenta(repository.name),
        chalk.green('url') + ':' + chalk.cyanBright(repository.html_url),
        chalk.green('repositoryOwnerName') + ':' + chalk.magenta(repository.owner.login),
      ].join(','),
    );
  }
};
