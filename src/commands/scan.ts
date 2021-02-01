import { scanRepositories } from '../components/scan';
import { green, magenta, cyanBright } from 'chalk';

export default async (options: any): Promise<void> => {
  const scannedRepositories = await scanRepositories();
  for (const repository of scannedRepositories) {
    console.log(
      [
        green('repositoryName') + ':' + magenta(repository.name),
        green('url') + ':' + cyanBright(repository.html_url),
        green('repositoryOwnerName') + ':' + magenta(repository.owner.login),
      ].join(','),
    );
  }
};
