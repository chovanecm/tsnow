import {buildTableIndex, tableToDefinition} from "./dts-generator";
import * as fs from "fs";
import {logErrorIfNotNull} from "./utils";

const ncp = require("ncp");

/**
 *
 * @param {Promise<Table[]>} tableSchema
 * @param {string} destinationDirectory
 */
export default async function generateProject(tableSchema, destinationDirectory) {
  const tablePath = destinationDirectory + "/@types/servicenow/tables";
  fs.mkdirSync(tablePath, {recursive: true});
  (await tableSchema).forEach(table =>
    fs.writeFile(tablePath + "/" + table.name + ".d.ts",
      tableToDefinition(table),
      logErrorIfNotNull));
  fs.writeFile(tablePath + "/index.d.ts", buildTableIndex(await tableSchema), logErrorIfNotNull);

  const resources = __dirname + "/../resources/";
  ncp(resources, destinationDirectory, logErrorIfNotNull)
}
