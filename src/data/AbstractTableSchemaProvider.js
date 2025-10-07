export default class AbstractTableSchemaProvider {
  /**
   * Get all tables and their fields.
   * @return {Promise<Table[]>}
   * @abstract
   */
  async buildTableSchema() {
    throw new Error("Abstract class");
  }
}