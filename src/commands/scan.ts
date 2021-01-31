import { scanFromCurrent } from '../components/scan';
import * as chank from 'chalk';

export default async (options: any): Promise<void> => {
  const scannedRepositories = await scanFromCurrent();
  for (const repository of scannedRepositories) {
    console.log(
      [
        'repositoryName:' + repository.name,
        'url:' + chank.cyanBright(repository.html_url),
        'repositoryOwnerName:' + repository.owner.login,
      ].join(','),
    );
  }
};
