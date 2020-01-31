import generateProject from "./project-generator";
import {closeIO} from "./cli/cli-io";
import * as fs from "fs";
import {stringify} from 'flatted/esm';
import {defaultCallback} from "./utils";
import FileSystemCachedTableSchemaProvider from "./data/FileSystemCachedTableSchemaProvider";
import RestTableSchemaProvider from "./data/RestTableSchemaProvider";

const NodeZip = require('node-zip');

/**
 * Read the database structure of a ServiceNow instance
 * @param {function: Promise<string>} instance - a function returning the instance address
 * @param {function: Promise<string[]>} tables - the list of tables to generate type definitions for. *contains, exact, startsWith*
 * @param {function: Promise<number>} referenceKeysDepth
 * @param {function: Promise<boolean>} useCachedData - use cached data or download schema from the instance again?
 * @param {function: Promise<string>} username
 * @param {function: Promise<string>} password
 * @param {function: Promise<string>} destinationDir - The directory to create type definitions in.
 * @return {Promise<void>}
 */
export async function buildTypeScriptProject(instance, tables, referenceKeysDepth, useCachedData, username, password, destinationDir) {
  const tableHierarchy = readDatabaseStructure(await instance(), useCachedData, username, password);
  generateProject(tableHierarchy, await tables(), await destinationDir(), await referenceKeysDepth())
    .then(closeIO);
}


async function readDatabaseStructure(instance, useCachedData, username, password) {
  const cacheFileName = instance + ".cache.zip";
  if (fs.existsSync(cacheFileName)) {
    if (await useCachedData()) {
      return await (new FileSystemCachedTableSchemaProvider(cacheFileName).buildTableSchema());
    }
  }
  const schemaBuilder = new RestTableSchemaProvider(instance, await username(), await password());
  await schemaBuilder.init();
  const tableHierarchy = schemaBuilder.buildTableSchema();
  dumpCacheFile().then(defaultCallback);
  return await tableHierarchy;

  async function dumpCacheFile() {
    const zip = new NodeZip();
    zip.file("schema.json", stringify(await tableHierarchy));
    const zipped = zip.generate({base64: false, compression: 'DEFLATE'});
    fs.writeFileSync(instance + ".cache.zip", zipped, 'binary');
  }
}

