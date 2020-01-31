import AbstractTableSchemaProvider from "./AbstractTableSchemaProvider";
import * as fs from "fs";
import {parse} from 'flatted/esm';

const NodeZip = require('node-zip');

export default class FileSystemCachedTableSchemaProvider extends AbstractTableSchemaProvider {

  /**
   * Set up schema provider to read data from the given ZIP cache file.
   * @param {string} fileName
   */
  constructor(fileName) {
    super();
    /** @private */
    this.fileName = fileName;
  }

  async buildTableSchema() {
    const data = fs.readFileSync(this.fileName, "binary");
    const zip = new NodeZip(data, {base64: false, checkCRC32: true});
    return parse(zip.files["schema.json"]._data);
  }
}