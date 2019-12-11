/**
 * Generate .d.ts. content for the given table
 * @param {TableRegistry} tableRegistry
 * @param {Table} table
 * @param {number} [referenceDepth=1] - How many levels ("dot walks") should be explored in order for addQuery("refField.anotherField.targetField") to work.
 *                                      - The more levels are added, the slower type checking will be. 
 *  - On the other hand, typescript will report false errors if a query does more dotwalking than specified.
 * @return {string}
 */
export function tableToDefinition(tableRegistry, table, referenceDepth = 1) {
  return `declare interface ${table.name} {
      ${fields(table)}
      _referenceKeys: ${digReferenceKeys(table, referenceDepth).concat("never").join("|")};    
    }
   `;

  function digReferenceKeys(table, depth, prefix = "") {
    return getReferenceFields(table)
      .reduce((prev, refField) => {
        prev.push(...queryKeys(tableRegistry, refField.reference, depth, prefix + refField.element + "."));
        return prev;
      }, []);
  }

  function getReferenceFields(table) {
    return table.allFields.filter(field => field.internal_type === "reference");
  }

  /**
   *
   * @param {TableRegistry} tableRegistry
   * @param {string} tableName
   * @param depth
   * @param prefix
   */
  function queryKeys(tableRegistry, tableName, depth, prefix) {
    if (depth === 0) {
      return [];
    }
    const table = tableRegistry.getTableByName(tableName);
    if (table === undefined) {
      console.error("Skipping reference fields for " + tableName);
      return [];
    }
    const result = table.allFields.map(field => `"${prefix}${field.element}"`);
    result.push(...digReferenceKeys(table, depth - 1, prefix));
    return result;
  }

}


/**
 *
 * @param {Table} table
 */
function fields(table) {
  return table.allFields.map(field => `${field.element}: GlideElement<${table.name}, ${getType(field)}>;`).join("\n");
}

const supportedTypes = new Set(["boolean", "glide_date_time", "reference", "glide_date", "currency", "choice", "price"]);

/**
 *
 * @param {Field} field
 * @return {string}
 */
function getType(field) {
  const internalType = field.internal_type;
  if (supportedTypes.has(internalType)) {
    let strOut = "glideElementType.g_" + internalType;
    if (internalType === "reference") {
      strOut += "<" + field.reference + ">";
    } else if (internalType === "choice") {
      // TODO implement choice list
      strOut += "<string>";
    }
    return strOut;
  } else {
    return "glideElementType.defaultType";
  }
}

/**
 *
 * @param {string[]}tables
 * @return {string}
 */
export function buildTableIndex(tables) {
  return "declare type TableIndex = {\n" +
    tables.map(table => table + ": " + table + ";").join("\n") +
    "\n}\n" +
    "\n" +
    "declare type TableName = keyof TableIndex;"
}