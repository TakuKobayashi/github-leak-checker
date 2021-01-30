import { program } from 'commander';
import { sync as readPkgUpSync  } from 'read-pkg-up';
import checkAction from "./command/check";

const manifest = readPkgUpSync({cwd: require.resolve('.')});

/**
 * Set global CLI configurations
 */
program.storeOptionsAsProperties(false);

/**
 * Displays clasp version
 */
program.version(manifest ? manifest.packageJson.version : 'unknown', '-v, --version', 'output the current version');

program.command('check')
.description('check the same program projects from Github')
.action(checkAction);
program.parse(process.argv);