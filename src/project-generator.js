import {buildTableIndex, tableToDefinition} from "./dts-generator";
import * as fs from "fs";
import {logErrorIfNotNull, promisify} from "./utils";
import TableRegistry from "./TableRegistry";

const ncp = require("ncp");

/**
 *
 * @param {Promise<Table[]>} tableSchema
 * @param {string[]|null} limitToTable - Only emit files for the table and all related tables
 * @param {string} destinationDirectory
 */
export default async function generateProject(tableSchema, limitToTable, destinationDirectory) {
  const tableRegistry = new TableRegistry(await tableSchema);
  const tablePath = destinationDirectory + "/@types/servicenow/tables";
  fs.mkdirSync(tablePath, {recursive: true});
  const tablesToSave = limitToTable == null ? tableRegistry.getAllTables()
    : tableRegistry.getAllTables().filter(table =>
      limitToTable.some(searchTable => {
        const asteriskPosition = searchTable.indexOf("*");
        if (asteriskPosition < 0) {
          // exact
          return table.name === searchTable;
        } else if (asteriskPosition === 0) {
          // contains
          return table.name.indexOf(searchTable.substr(1)) >= 0;
        } else if (asteriskPosition === searchTable.length - 1) {
          // starts with
          return table.name.indexOf(searchTable.substr(0, searchTable.length - 1)) === 0;
        } else {
          console.error("Asterisk in the middle of table name => unknown search term.");
          return false;
        }
      })).flatMap(table => tableRegistry.getTableGraph(table.name));



  const knownTables = Array.from(new Set(fs.readdirSync(tablePath)
    .filter(file => file.endsWith(".d.ts") && file !== "index.d.ts")
    .map(file => file.substr(0, file.length - ".d.ts".length))
    .concat(...tablesToSave.map(table => table.name))));

  tablesToSave.forEach(table =>
    fs.writeFile(tablePath + "/" + table.name + ".d.ts",
      tableToDefinition(tableRegistry, table), logErrorIfNotNull));

  fs.writeFile(tablePath + "/index.d.ts", buildTableIndex(knownTables), logErrorIfNotNull);

  const resources = __dirname + "/../resources/";
  ncp(resources, destinationDirectory, logErrorIfNotNull)
}
