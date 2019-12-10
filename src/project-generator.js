import {buildTableIndex, tableToDefinition} from "./dts-generator";
import * as fs from "fs";
import {logErrorIfNotNull} from "./utils";
import TableRegistry from "./TableRegistry";

const ncp = require("ncp");

/**
 *
 * @param {Promise<Table[]>} tableSchema
 * @param {string|null} limitToTable - Only emit files for the table and all related tables
 * @param {string} destinationDirectory
 */
export default async function generateProject(tableSchema, limitToTable, destinationDirectory) {
  const tableRegistry = new TableRegistry(await tableSchema);
  const tablePath = destinationDirectory + "/@types/servicenow/tables";
  fs.mkdirSync(tablePath, {recursive: true});
  const tablesToSave = limitToTable == null ? tableRegistry.tables : tableRegistry.getTableGraph(limitToTable);
  tablesToSave.forEach(table =>
    fs.writeFile(tablePath + "/" + table.name + ".d.ts",
      tableToDefinition(tableRegistry, table),
      logErrorIfNotNull));
  fs.writeFile(tablePath + "/index.d.ts", buildTableIndex(tablesToSave), logErrorIfNotNull);

  const resources = __dirname + "/../resources/";
  ncp(resources, destinationDirectory, logErrorIfNotNull)
}
