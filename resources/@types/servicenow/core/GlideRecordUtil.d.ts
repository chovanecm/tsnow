declare class GlideRecordUtil {
    constructor();

    getCIGR<T>(sysId: string): GlideRecord<cmdb_ci>

    /**
     * Returns a GlideRecord instance for the given table, positioned to the given sys_id, and of the right class (table). This method is useful when you need to load a GlideRecord from a sys_id, but you don't know what the actual table is (because it may be extended from the base table). This method always returns a GlideRecord of the correct type base_table: the name of the base table that the specified sys_id is in.
     * @param tableName
     * @param sysId
     */
    getGR<T extends TableName>(tableName: T, sysId: string): GlideRecord<TableIndex[T]>;

    /**
     * Returns a list of all the field names in the specified GlideRecord.
     * @param record
     */
    getFields<T>(record: GlideRecord<T>): internal.OwnKeys<T>[]

    /**
     * Returns a Java ArrayList of the ancestors of the given table name.
     * For example, given cmdb_ci_linux_server, this would return cmdb_ci, cmdb_ci_computer, cmdb_ci_server, and cmdb_ci_linux_server.
     * @param tableName
     */
    getTables(tableName: TableName): Packages.java.util.List<Packages.java.lang.String>

    /**
     *
     * @param object
     * @param glideRecord
     * @param ignore An optional hashmap of file names not to populate.
     * @example
     * var objectToPopulate = {};
     var gr = new GlideRecordUtil().getGR("cmdb_ci_computer", "2dfd7c8437201000deeabfc8bcbe5d56");
     var ignore = {"sys_created_on": true, "sys_updated_by": true};
     new GlideRecordUtil().populateFromGR(objectToPopulate, gr, ignore);
     // Now the objectToPopulate contains field/value pairs from the computer GlideRecord
     */
    populateFromGR(object: object, glideRecord: GlideRecord, ignore?: object): void;

    /**
     *
     * @param object
     * @param glideRecord
     * @param ignore An optional hashmap of field names to ignore.
     * @example
     * var gr = new GlideRecordUtil().getGR("cmdb_ci_computer", "2dfd7c8437201000deeabfc8bcbe5d56");
     var obj = {"name": "xyz", "os": "windows 2000", "sys_created_by", "aleck.lin"};
     var ignore = {"sys_created_by": true};
     new GlideRecordUtil().mergeToGR(obj, gr, ignore);
     gr.update();
     */
    mergeToGR(object: object, glideRecord: GlideRecord, ignore?: object): void;
}