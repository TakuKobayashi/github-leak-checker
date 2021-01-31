import { scanFromCurrent } from '../components/scan';
import * as chank from 'chalk';

export default async (options: any): Promise<void> => {
  const scannedRepositories = await scanFromCurrent();
  for (const repository of scannedRepositories) {
    console.log(
      [
        'repository name:' + repository.name,
        'url:' + chank.cyanBright(repository.html_url),
        'repository owner name:' + repository.owner.login,
      ].join(' '),
    );
  }
};
