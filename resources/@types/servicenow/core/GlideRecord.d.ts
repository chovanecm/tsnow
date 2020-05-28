/**
 * GlideRecord is used for database operations.

 A GlideRecord contains both records and fields. For information about GlideRecordSecure, which is a class inherited from GlideRecord that performs the same functions as GlideRecord, and also enforces ACLs, see the GlideServer APIs.

 Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

 You can set the glide.invalid_query.returns_no_rows system property to true to have queries with invalid encoded queries return no records.
 */
declare type GlideRecord<T = any> = internal.BaseRecord<T> & internal.GlideElements<T> & {

    /**
     * Adds a filter to return active records.
     */
    addActiveQuery(): GlideQueryCondition<T>;

    /**
     * Applies a pre-defined GlideDBFunctionBuilder object to a record.
     Use the GlideDBFunctionBuilder scoped class to define a function. After the function is defined, use the addFunction(Object function) method to apply the function to a record.
     * @param fun - A GlideDBFunctionBuilder object that defines a SQL operation.

     @example
     var functionBuilder = new GlideDBFunctionBuilder();
     var myAddingFunction = functionBuilder.add();
     myAddingFunction = functionBuilder.field('order');
     myAddingFunction = functionBuilder.field('priority');
     myAddingFunction = functionBuilder.build();

     var gr = new GlideRecord('incident');
     gr.addFunction(myAddingFunction);
     gr.addQuery(myAddingFunction, '<', 5);
     gr.query();
     while(gr.next())
     gs.log(gr.getValue(myAddingFunction));
     */
    addFunction(fun: GlideDBFunctionBuilder): void

    addInactiveQuery(): GlideQueryCondition<T>

    /**
     * Adds a filter to return records based on a relationship in a related table.

     For example, find all the users that are in the database group (users via sys_user_grmember table). Another example would be find all problems that have an assigned incident (problems via the incident.problem_id relationship).

     This is not a true database join; rather, addJoinQuery() adds a subquery. So, while the result set is limited based on the join, the only fields that you have access to are those on the base table (those which are in the table with which the GlideRecord was initialized).

     Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

     You can set the glide.invalid_query.returns_no_rows system property to true to have queries with invalid encoded queries return no records.
     * @param joinTable
     * @param ourKey - If other than sys_id, the primary field.
     * @param theirKey - If other than sys_id, the field that joins the tables
     */
    addJoinQuery<J extends TableName>(joinTable: J, ourKey?: internal.QueryKeys<T>, theirKey?: internal.QueryKeys<TableIndex[J]>): GlideQueryCondition<TableIndex[J]>;

    /**
     * Enables or disables the update to the fields sys_updated_by, sys_updated_on, sys_mod_count, sys_created_by, and sys_created_on. This is often used for manually updating field values on a record while leaving historical information unchanged
     Note: This is not available for scoped apps, starting with the Fuji release. See the Scoped GlideRecord API Reference for a list of what APIs are available for scoped apps.
     * @param enable  If false disables updates to sys_updated_by, sys_updated_on, sys_mod_count, sys_created_by, and sys_created_on.
     */
    autoSysFields(enable: boolean): void

    canCreate(): boolean;

    canDelete(): boolean;

    canRead(): boolean;

    canWrite(): boolean;
    /**
     * Determines whether any of the fields in the record have changed.
     */
    changes(): boolean;

    chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): void;

    deleteMultiple(): void;

    /**
     * @returns Flag that indicates whether the record was successfully deleted
     */
    deleteRecord(): boolean;

    /**
     * Returns true if any record has a matching value in the specified column. If found, it also moves to the first record that matches, essentially executing next() until the record is returned.
     * @param columnName Maybe supports dot-walking
     * @param value
     * @returns True if any record has a matching value in the specified field.
     */
    find(columnName: internal.OwnKeys<T>, value: internal.primitive): boolean

    /**
     *
     * @param sysId
     * @returns Indicates whether the requested record was located:
     */
    get(sysId: string): boolean;
    /**
     *
     * @param columnName  Maybe supports dotwalking
     * @param value
     * @returns Indicates whether the requested record was located:
     */
    get(columnName: internal.OwnKeys<T>, value: internal.primitive): boolean;


    /**
     * Returns the dictionary attributes on the specified field.
     * @param fieldName
     */
    getAttribute(fieldName: internal.OwnKeys<T>): string;

    /**
     * Returns the table's label.
     */
    getClassDisplayValue(): string;

    /**
     * Retrieves the display value for the current record.
     */
    getDisplayValue(): string;

    getED(): GlideElementDescriptor;

    getElement<ElementName extends internal.OwnKeys<T>>(columnName: ElementName): T[ElementName];

    /**
     * Retrieves the field value for the display field of the current record and adds escape characters for use in Jelly scripts.
     */
    getEscapedDisplayValue(): string

    /**
     * Retrieves a Java ArrayList of fields in the current record.
     */
    getFields(): Packages.java.util.List<GlideElement<T>>

    /**
     * Retrieves the table's label.
     */
    getLabel(): string;

    /**
     * Retrieves the last error message. If there is no last error message, null is returned.
     */
    getLastErrorMessage(): string | null;

    /**
     * Return URL to the current record
     * @param [noStack=false] If true, the link generated will not append &sysparm_stack=[tablename]_list.do? sysparm_query=active=true to the end of the URL; if false, the link will. Leaving the parameter empty defaults to false.
     */
    getLink(noStack?: boolean): string;

    getPlural(): string

    /**
     * Retrieves a map of names and display values of tables that are referred to by the current record.
     */
    getRelatedTables(): Packages.java.util.Map<Packages.java.lang.String, Packages.java.lang.String>

    getRecordClassName(): string;

    hasAttachments(): boolean


    getUniqueValue(): string;

    //   getValue(name: string): string;

    initialize(): void;

    /**
     * Inserts a new record and also inserts or updates any related records with the provided information.
     */
    insert(): string;

    /**
     * Checks a table for the type\class of table.
     * @param className
     */
    instanceOf(className: string): boolean

    insertWithReferences(): string

    isActionAborted(): boolean;

    /**
     * Determines whether the current record has been inserted into the database. This method returns true only if the newRecord() method has been called. This method is useful for scripted ACL, and in the condition of UI actions, but should not be used in background scripts.
     */
    isNewRecord(): boolean;

    isValid(): boolean;

    isValidField(columnName: string): boolean;

    isValidRecord(): boolean;

    newRecord(): void;

    operation(): internal.GlideRecordOperation;

    orderBy(name: internal.QueryKeys<T>): void;

    orderByDesc(name: internal.QueryKeys<T>): void;

    query(field?: string, value?: object): void;

    _query(field?: string, value?: object): void;

    /**
     * Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted.

     Use in an onBefore business rule to prevent the database action from being done. The business rule continues to run after setAbortAction() is called. Calling setAbortAction() does not stop subsequent business rules from executing. Calling this method only prevents the database action from occurring.
     * @param abort
     */
    setAbortAction(abort: boolean): void;

    setNewGuidValue(guid: string): void;

    /**
     * Generate a new sys id for the record.
     */
    setNewGuid(): void;

    setLimit(limit: number): void;

    /**
     * Sets the specified field to the specified display value.
     * For a reference field this is the display value for the table. For a date/time this is the time in the caller's current timezone.
     * @param fieldName
     * @param value
     */
    setDisplayValue(fieldName: internal.OwnKeys<T>, value: internal.primitive): void

    /**
     * Enables or disables the running of business rules that might normally be triggered by subsequent actions. If the e parameter is set to false, an insert/update will not be audited. Auditing only happens when the parameter is set to true for a GlideRecord operation.
     * @param enable
     */
    setWorkflow(enable: boolean): void;

    /**
     * Disable or enable the running of any engines (approval rules / assignment rules).
     * @param enable
     */
    setUseEngines(enable: boolean): void;

    /**
     * Enables or disables using the reference field's display name when querying a reference field.
     * @param queryReferences If true, will generate a string of display names. If false, will generate a string of sys_ids.
     */
    setQueryReferences(queryReferences: true): void

    /**
     *
     * @param reason
     * @returns    The sys_id of the new or update record. Returns null if the update fails.
     */
    update(reason?: string): string;

    /**
     * Updates a record and also inserts or updates any related records with the information provided.
     * @param reasen
     * @returns The sys_id for the record being updated.
     */
    updateWithReferences(reasen?: string): string

    updateMultiple(): void;

    setValue<FieldName extends internal.OwnKeys<T>>(fieldName: FieldName, value: internal.ValueDomainByElement<T[FieldName]>): void;
}


declare const GlideRecord: {
    new<T extends TableName>(tableName: T): GlideRecord<TableIndex[T]>
}