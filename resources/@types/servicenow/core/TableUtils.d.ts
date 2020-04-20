/**
 * TableUtils is a class of shortcuts for accessing table related information.
 * The TableUtils class is available to server-side scripts.
 @todo SOme not that useful methods have been omitted. Complete them and delete this TODO
 */
declare class TableUtils {
    constructor(tableName: string)

    /**
     * Returns the list of tables that extend a table, includes the base table.
     */
    getAllExtensions(): Packages.java.util.List<Packages.java.lang.String>

    /**
     * Get a list of table names in the parent hierarchy.
     */
    getTables(): Packages.java.util.List<Packages.java.lang.String>

    tableExists(): boolean

    /**
     * Drop table from the database
     * @param tableName The table name
     */
    drop(tableName: string): void;

    isValidField(filedName: string): boolean;

    dropAndClean(tableName: string): void;
    dropTableAndExtensions(tableName: string): void;

    getAbsoluteBase(): Packages.java.lang.String;


}