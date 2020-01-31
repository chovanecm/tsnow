import * as commands from "../commands"
import * as cli from "./cli"
import pkg from '../../package.json';
import {defaultCallback} from "../utils";
const program = require('commander');
program.version(pkg.version);

/**
 * Entry point for the command-line interface.
 * @param {string[]} args
 */
export function cliMain(args) {
  program.arguments("<instance> <tables...>")
    .option("-r|--reference-keys <n>", "The number of dot-walks to support in addQuery. The more, the slower type checking.", 1)
    .description("Build TypeScript definitions for the given instance in the current directory.\n" +
      "tables: specify one or more tables to add to the current project. Use exact_table_name or *contains_name or starts_with_name*\n" +
      "All parent and reference tables are included to encompass the transitive closure of references.")
    .action(buildTypeScriptProject);
  if (args.length <= 2) {
    program.help();
  }
  program.parse(args);
}


function buildTypeScriptProject(instance, tables, flags) {
  commands.buildTypeScriptProject(() => instance,
    async () => tables,
    async () => flags.referenceKeys,
    cli.useCachedData,
    cli.username,
    cli.password,
    getCurrentWorkingDirectory,
  ).then(defaultCallback);
}

async function getCurrentWorkingDirectory() {
  return process.cwd();
}
