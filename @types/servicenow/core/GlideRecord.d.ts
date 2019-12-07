declare type GlideRecord<T = any> = internal.BaseRecord<T> & internal.GlideElements<T> & {

    addActiveQuery(): GlideQueryCondition<T>;


    addJoinQuery<J extends TableName>(joinTable: J, ourKey?: internal.QueryKeys<T>, theirKey?: internal.QueryKeys<TableIndex[J]>): GlideQueryCondition<TableIndex[J]>;


    canCreate(): boolean;

    canDelete(): boolean;

    canRead(): boolean;

    canWrite(): boolean;

    chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): void;

    deleteMultiple(): void;

    deleteRecord(): boolean;

    get(sysId: string): boolean;
    get(name: keyof T, value: internal.primitive): boolean;

    getAttribute(fieldName: internal.OwnKeys<T>): string;

    getClassDisplayValue(): string;

    getDisplayValue(field?: internal.OwnKeys<T>): string;

    getED(): GlideElementDescriptor;

    getElement<ElementName extends internal.OwnKeys<T>>(columnName: ElementName): T[ElementName];

    getLabel(): string;

    getLastErrorMessage(): string;

    getLink(noStack: boolean): string;

    getRecordClassName(): string;


    getUniqueValue(): string;

    //   getValue(name: string): string;

    initialize(): void;

    insert(): string;

    isActionAborted(): boolean;

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

    setAbortAction(abort: boolean): void;

    setNewGuidValue(guid: string): void;

    /**
     * Generate a new sys id for the record.
     */
    setNewGuid(): void;

    setLimit(limit: number): void;


    setWorkflow(enable: boolean): void;

    setUseEngines(enable: boolean): void;

    update(reason?: string): string;

    updateMultiple(): void;

    setValue(fieldName: internal.OwnKeys<T>, value: internal.primitive): void;
}


declare const GlideRecord: {
    new<T extends TableName>(tableName: T): GlideRecord<TableIndex[T]>
}