import { program } from 'commander';
import scanAction from './commands/scan';

/**
 * Set global CLI configurations
 */
program.storeOptionsAsProperties(false);

/**
 * Displays clasp version
 */
program.version(process.env.npm_package_version, '-v, --version', 'output the current version');

program
  .command('scan')
  .description('Scan the repository information with similar source code from Github')
  .action(
    async (source, destination): Promise<void> => {
      await scanAction(destination);
    },
  );
program.parse(process.argv);
