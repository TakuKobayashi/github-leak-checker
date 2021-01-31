import { program } from 'commander';
import { sync as readPkgUpSync } from 'read-pkg-up';
import scanAction from './commands/scan';

const manifest = readPkgUpSync({ cwd: require.resolve('.') });

/**
 * Set global CLI configurations
 */
program.storeOptionsAsProperties(false);

/**
 * Displays clasp version
 */
program.version(manifest ? manifest.packageJson.version : 'unknown', '-v, --version', 'output the current version');

program.command('scan').description('Scan the repository information with similar source code from Github').action(async (source, destination) => {
  await scanAction(destination);
});
program.parse(process.argv);
