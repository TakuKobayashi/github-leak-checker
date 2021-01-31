import { scanFromCurrent } from '../components/scan';
import * as chank from 'chalk';

export default async (options: any): Promise<void> => {
  const scannedRepositories = await scanFromCurrent();
  for (const repository of scannedRepositories) {
    console.log(
      [
        chank.green('repositoryName') + ':' + chank.magenta(repository.name),
        chank.green('url') + ':' + chank.cyanBright(repository.html_url),
        chank.green('repositoryOwnerName') + ':' + chank.magenta(repository.owner.login),
      ].join(','),
    );
  }
};
