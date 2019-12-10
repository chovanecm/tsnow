const ServiceNow = require("servicenow-rest-api");
const {promisify} = require("./utils");
/**
 * Extracts table schema directly from a servicenow instance
 */
export default class InstanceSchemaProvider {
  /**
   *
   * @param {string} instanceName
   * @param {string} username
   * @param {string} password
   */
  constructor(instanceName, username, password) {
    /**@private */
    this.connector = new ServiceNow(instanceName, username, password);
    this.connector.Authenticate();
    this.connector.getTableData = promisify(this.connector, this.connector.getTableData);
    /**@private */
    this.tablesBySysId = {};
    /**@private */
    this.tablesByName = {};
  }

  /**
   * Get all tables and their fields.
   * @return {Promise<Table[]>}
   */
  async buildTableSchema() {
    const tableData = await this.getTableHierarchy();
    return await this.mergeWithFieldData(tableData);
  }

  /**
   * @private
   * @return {Promise<Table[]>}
   */
  async getTableHierarchy() {
    const tableData = await this.connector.getTableData(["name", "super_class", "sys_id", "sys_name"], [], "sys_db_object");
    tableData.forEach(table => {
      this.tablesBySysId[table.sys_id] = table;
      this.tablesByName[table.name] = table;
      table.fields = [];
    });
    tableData.forEach(this.transformTable.bind(this));
    return tableData;
  }

  /**
   * @private
   * @param tableData
   * @return {Promise<Table[]>}
   */
  async mergeWithFieldData(tableData) {
    const stepSize = 100;
    const tableNames = tableData.map(table => table.name);
    const self = this;
    for (let i = 0; i < tableNames.length; i += stepSize) {
      const tablesToDownload = tableNames.slice(i, Math.min(i + stepSize, tableNames.length));
      const fieldData = await this.connector.getTableData(["choice",
          "element", "column_label", "internal_type",
          "reference", "choice_field", "choice_table", "name", "sys_id"],
        ["active=true", "element!=NULL",
          "internal_type!=NULL", "nameIN" + tablesToDownload.join(",")],
        "sys_dictionary");

      fieldData.forEach(field => {
        transformType(field);
        transformReference(field);
      });
    }

    return tableData;

    function transformType(field) {
      const typeLink = String(field.internal_type.link);
      field.internal_type = typeLink.substr(typeLink.lastIndexOf("=") + 1);
      if (self.tablesByName[field.name]) {
        self.tablesByName[field.name].fields.push(field);
      }
    }

    function transformReference(field) {
      if (field.internal_type === "reference") {
        const link = String(field.reference.link);
        if (link.indexOf("=") >= 0) {
          field.reference = link.substr(link.lastIndexOf("=") + 1);
        }
      }
    }
  }

  /**
   * @private
   * @param table
   */
  transformTable(table) {
    const link = String(table.super_class.link);
    if (link.indexOf("/") >= 0) {
      const superSysId = link.substr(link.lastIndexOf("/") + 1);
      table.super_class = this.tablesBySysId[superSysId];
    } else {
      table.super_class = null;
    }
  }
}

/**
 * @typedef {object} Table
 * @property {string} name - Table name
 * @property {Table} super_class - Super class
 * @property {string} sys_id
 * @property {string} sys_name - Human-readable name
 * @property {Field[]} fields - table's own fields
 */

/**
 * @typedef {object} Field
 * @property {string} element - Field name
 * @property {string} column_label
 * @property {string} internal_type
 * @property {string|null} reference - Reference table name
 * @property {string} name - Table name
 * @property {string} sys_id
 * @property {"0"|"1"|"2"} choice - "0": no choice list
 * @property {string} choice_table - The table to read choices from
 * @property {string} choice_field - The field to read choices from
 */
