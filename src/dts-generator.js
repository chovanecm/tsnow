/**
 * Generate .d.ts. content for the given table
 * @param {Table} table
 * @return {string}
 */
export function tableToDefinition(table) {
  let strOut = "declare interface " + table.name + " {\n";
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

  strOut += allFields.map(field => field.element + ": " + "GlideElement<" + table.name + ", " + getType(field) + ">").join("\n");
  strOut += "\n";
  strOut += "_referenceKeys: never\n";
  strOut += "}\n";
  return strOut;
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


export function buildTableIndex(tableHierarchy) {
  return "declare type TableIndex = {\n" +
    tableHierarchy.map(table => table.name + ": " + table.name + ";").join("\n") +
    "\n}\n" +
    "\n" +
    "declare type TableName = keyof TableIndex;"
}