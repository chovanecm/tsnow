export default class TableRegistry {
  /**
   *
   * @param {Table[]} tables
   */
  constructor(tables) {
    this.tables = tables;
    this.tables.forEach(table => {
      const allFields = [].concat(table.fields);
      const addedFields = new Set(allFields.map(field => field.element));
      let parent = table.super_class;
      while (parent) {
        parent.fields.filter(field => !addedFields.has(field.element)).forEach(field => {
          addedFields.add(field.element);
          allFields.push(field);
        });
        parent = parent.super_class;
      }
      table.allFields = allFields;
    });
    this.tablesByName = tables.reduce((previous, table) => {
      previous[String(table.name)] = table;
      return previous;
    }, {});
  }

  getTableByName(tableName) {
    return this.tablesByName[tableName];
  }

  /**
   *
   * @return {Table[]}
   */
  getAllTables() {
    return this.tables;
  }

  /**
   *
   * @param tableName
   * @return {Table[]}
   */
  getAllParents(tableName) {
    const table = this.getTableByName(tableName);
    if (table === undefined) {
      return [];
    }
    const parents = [];
    let parent = table.super_class;
    while (parent) {
      parents.push(parent);
      parent = parent.super_class;
    }
    return parents;
  }

  /**
   *
   * @param table
   * @return {Table[]}
   */
  getAllReferencedTables(table) {
    const referencedTables = table.allFields
      .filter(field => field.internal_type === "reference")
      .map(field => this.getTableByName(field.reference))
      .filter(table => table !== undefined);
    /// unique values
    return Array.from(new Set(referencedTables));
  }

  /**
   *
   * @param tableName
   * @return {Table[]}
   */
  getTableGraph(tableName) {
    const table = this.getTableByName(tableName);
    if (table === undefined) {
      return [];
    }
    const visited = new Set([table, ...this.getAllParents(tableName)]);
    const toVisit = [...this.getAllReferencedTables(table)];
    const toVisitAsSet = new Set(toVisit);
    while (toVisit.length > 0) {
      const tableToVisit = toVisit.pop();
      const referencedTables = this.getAllReferencedTables(tableToVisit)
        .concat(...this.getAllParents(tableToVisit.name))
        .filter(refTable => !visited.has(refTable) & !toVisitAsSet.has(refTable));
      referencedTables.forEach(refTable => {
        toVisitAsSet.add(refTable);
        toVisit.push(refTable);
      });
      toVisitAsSet.delete(tableToVisit);
      visited.add(tableToVisit);
    }
    return Array.from(visited);
  }
}