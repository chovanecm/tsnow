import InstanceSchemaProvider from "./instanceSchemaProvider";
import { closeIO, readLine, readPassword } from "./cli-io";
import { parse, stringify } from 'flatted/esm';
import generateProject from "./project-generator";
import { defaultCallback, logErrorIfNotNull } from "./utils";
import pkg from '../package.json';
const fs = require("fs");

const program = require('commander');
program.version(pkg.version);
/**
 *
 * @param {string[]} args
 */
export function cli(args) {
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

async function readInputData(instance) {
  const cacheFileName = instance + ".cache.zip";
  if (fs.existsSync(cacheFileName)) {
    if ((await readLine("Cached data found on your computer. Use it? [Y/n] ")).toUpperCase() !== "N") {
      return loadCacheFile(cacheFileName)
    }
  }

  const user = await readLine("Username: ");
  const password = await readPassword("Password: ");

  const schemaBuilder = new InstanceSchemaProvider(instance, user, password);
  await schemaBuilder.init();
  const tableHierarchy = schemaBuilder.buildTableSchema();
  dumpCacheFile().then(defaultCallback);
  return await tableHierarchy;

  async function dumpCacheFile() {
    const zip = new (require('node-zip'))();
    zip.file("schema.json", stringify(await tableHierarchy));
    const zipped = zip.generate({ base64: false, compression: 'DEFLATE' });
    fs.writeFileSync(instance + ".cache.zip", zipped, 'binary');
  }
  function loadCacheFile(cacheFile) {
    const data = fs.readFileSync(cacheFile, "binary");
    const zip = new (require('node-zip'))(data, { base64: false, checkCRC32: true });
    return parse(zip.files["schema.json"]._data);
  }
}

function buildTypeScriptProject(instance, tables, flags) {
  const tableHierarchy = readInputData(instance);
  generateProject(tableHierarchy, tables, process.cwd(), flags.referenceKeys).then(closeIO);
}
