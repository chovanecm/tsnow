declare class GlideSPScriptable {
    canReadRecord(record: GlideRecord): boolean;
    canReadRecord(table: string, sysId: string): boolean;
    /**
     * Returns true if the currently logged in user has permission to view the specified page.
     * The system determines permission using roles and user criteria. For more information, see Configure page security by role and User criteria for Service Portal.
     * @param pageId
     */
    canSeePage(pageId: string): boolean;
    getField(record: GlideRecord, fieldName: string): {
        // FIXME TBD
        label: string,
        value: string,
        displayValue: string
        type: string
    }
    // FIXME TBD return value
    getListColumns(tableName: string, view: string): object;

    getRecordDisplayValues(data: object, record: GlideRecord, fieldNames: string[]);

    /**
     * Return the requested URL parameter
     * @param urlParameterName
     */
    getParameter(urlParameterName: string): Packages.java.lang.String|null;

    /**
     * If parameters are provided, returns the GlideRecord identified by the provided table and Sys ID. If no parameters are provided, returns the record identified by the current URL.
     * @param tableName Optional. The table of the record to return. If no parameters are included, returns the table and Sys ID identified by the current URL.
     * @param sysId Optional. The Sys ID of the record to return. If no parameters are included, returns the record identified by the current URL.
     */
    getRecord<T extends TableName>(tableName?: T, sysId?: string): GlideRecord<TableIndex[T]>;


    /**
     * Checks the specified list of field names and returns an object of valid field names.
     * @param glideRecord
     * @param fieldNames A comma separated list of field names.
     */
    getFieldsObject<T>(glideRecord: GlideRecord<T>, fieldNames): SPFieldsObject<T>
}
declare const $sp: GlideSPScriptable;

declare type SPFieldsObject<T> = {
    [key in internal.OwnKeys<T>]: {
        display_value: string,
        label: string,
        type: string,
        value: internal.ValueDomainByElement<GlideRecord<T>[key]>
    }
};