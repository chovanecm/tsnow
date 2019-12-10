import InstanceSchemaProvider from "./instanceSchemaProvider";
import {closeIO, readLine, readPassword} from "./cli-io";
import {parse, stringify} from 'flatted/esm';
import generateProject from "./project-generator";
import {defaultCallback} from "./utils";

const fs = require("fs");


/**
 *
 * @param {string[]} args
 */
export function cli(args) {
  let programArguments = args.slice(2);
  if (programArguments.length < 1) {
    console.error("Expected argument: INSTANCE (e.g. dev.service-now.com) TABLE");
    process.exit(9);
  }
  const instance = programArguments[0];
  programArguments = programArguments.slice(1);
  let limitToTable = null;
  if (programArguments.length > 0) {
    limitToTable = programArguments[0];
  }
  const tableHierarchy = readInputData(instance);
  generateProject(tableHierarchy, limitToTable, process.cwd()).then(closeIO);
}


async function readInputData(instance) {
  const cacheFileName = instance + ".cache.json";
  if (fs.existsSync(cacheFileName)) {
    if ((await readLine("Cached data found on your computer. Use it? [y/N] ")).toUpperCase() === "Y") {
      return parse(fs.readFileSync(cacheFileName));
    }
  }

  const user = await readLine("Username: ");
  const password = await readPassword("Password: ");

  const schemaBuilder = new InstanceSchemaProvider(instance, user, password);
  const tableHierarchy = schemaBuilder.buildTableSchema();
  dumpCacheFile().then(defaultCallback);
  return await tableHierarchy;

  async function dumpCacheFile() {
    fs.writeFile(instance + ".cache.json", stringify(await tableHierarchy), console.error);
  }
}

