import InstanceSchemaProvider from "./instanceSchemaProvider";
import {closeIO, readLine, readPassword} from "./cli-io";
import {parse, stringify} from 'flatted/esm';
import generateProject from "./project-generator";
import {defaultCallback, logErrorIfNotNull} from "./utils";

const fs = require("fs");


/**
 *
 * @param {string[]} args
 */
export function cli(args) {
  let programArguments = args.slice(2);
  if (programArguments.length < 1) {
    console.error("Expected argument: INSTANCE (e.g. dev.service-now.com) TABLE_EXPRESSION");
    console.error("TABLE_EXPRESSION: a comma separated list of terms to search in table names, e.g. cmdb_ci_*,alm_hardware,*audit");
    console.error("                  will match: all tables starting with cmdb_ci_, exactly alm_hardware, all tables containing audit");
    console.error("                  and all their parent and related tables.");
    process.exit(9);
  }
  const instance = programArguments[0];
  programArguments = programArguments.slice(1);
  let limitToTable = null;
  if (programArguments.length > 0) {
    limitToTable = programArguments[0].split(",");
  }
  const tableHierarchy = readInputData(instance);
  generateProject(tableHierarchy, limitToTable, process.cwd()).then(closeIO);
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
  const tableHierarchy = schemaBuilder.buildTableSchema();
  dumpCacheFile().then(defaultCallback);
  return await tableHierarchy;

  async function dumpCacheFile() {
    const zip = new (require('node-zip'))();
    zip.file("schema.json", stringify(await tableHierarchy));
    const zipped = zip.generate({base64:false,compression:'DEFLATE'});
    fs.writeFileSync(instance + ".cache.zip", zipped, 'binary');
  }
  function loadCacheFile(cacheFile) {
    const data = fs.readFileSync(cacheFile, "binary");
    const zip = new (require('node-zip'))(data, {base64: false, checkCRC32: true});
    return parse(zip.files["schema.json"]._data);
  }
}

