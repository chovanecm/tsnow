import Object = tsnow.Object;

declare type GlideQuery<T = any> = {
    where(fieldName: internal.QueryKeys<T>, operator: internal.QueryOperator, value: internal.primitive): GlideQuery<T>;
    where(fieldName: internal.QueryKeys<T>, operator: "IN"|"NOT IN", value: internal.primitive[]): GlideQuery<T>;
    where(fieldName: internal.QueryKeys<T>, value?: internal.primitive): GlideQuery<T>;
    where(query: GlideQuery<T>) : GlideQuery<T>;
    whereNotNull(fieldName: internal.QueryKeys<T>): GlideQuery<T>;
    whereNull(fieldName: internal.QueryKeys<T>): GlideQuery<T>;

    orWhere(fieldName: internal.QueryKeys<T>, operator: internal.QueryOperator, value: internal.primitive): GlideQuery<T>;
    orWhere(fieldName: internal.QueryKeys<T>, operator: "IN"|"NOT IN", value: internal.primitive[]): GlideQuery<T>;
    orWhere(fieldName: internal.QueryKeys<T>, value?: internal.primitive): GlideQuery<T>;
    orWhere(query: GlideQuery<T>) : GlideQuery<T>;
    orWhereNotNull(fieldName: internal.QueryKeys<T>): GlideQuery<T>;
    orWhereNull(fieldName: internal.QueryKeys<T>): GlideQuery<T>;

    withAcls(): GlideQuery<T>;

    select(...fieldNames: internal.QueryKeys<T>[]): Stream<T>;
    selectOne(...fieldNames: internal.QueryKeys<T>[]): Optional<T>;


    aggregate(aggregate: internal.AggregateOperator, column: internal.QueryKeys<T>): GlideQuery<T>;
    avg(column: internal.QueryKeys<T>): Optional<number>;
    count(): number;
    sum(column: internal.QueryKeys<T>): Optional<number>;
    deleteMultiple(): void;
    disableAutoSysFields(): GlideQuery<T>;
    disableWorkflow(): GlideQuery<T>;
    forceUpdate(): GlideQuery<T>;
    /**
     *
     * @param sysId
     * @param fields - default: sys_id
     */
    get(sysId: string, fields?: internal.QueryKeys<T>): Optional<tsnow.Object<T>>;
    /**
     *
     * @param sysId
     * @param fields - default: sys_id
     */
    getBy(keyValues: tsnow.Object<T>, fields: internal.QueryKeys<T>): Optional<tsnow.Object<T>>;
    groupBy(column: internal.QueryKeys<T>): GlideQuery<T>;
    groupBy(columns: internal.QueryKeys<T>[]): GlideQuery<T>;
    having(aggregate: internal.AggregateOperator, column: internal.QueryKeys<T>, operator: internal.QueryOperator, value: number): GlideQuery<T>;
    /**
     *
     * @param values - values to insert
     * @param returnBack - fields to return, default: sys_id
     */
    insert(values: tsnow.Object<T>, returnBack?: internal.QueryKeys<T>[]): Optional<tsnow.Object<T>>;
    insertOrUpdate(values: tsnow.Object<T>, returnBack?: internal.QueryKeys<T>[]): Optional<tsnow.Object<T>>;
    update(values: tsnow.Object<T>, returnBack?: internal.QueryKeys<T>[]): Optional<tsnow.Object<T>>;
    updateMultiple(values: tsnow.Object<T>): Optional<{ rowCount: number }>;
    limit(limit: number): GlideQuery<T>;
    max(column: internal.QueryKeys<T>): Optional<number>;
    min(column: internal.QueryKeys<T>): Optional<number>;
    orderBy(column: internal.QueryKeys<T>): GlideQuery<T>;
    orderByDesc(column: internal.QueryKeys<T>): GlideQuery<T>;
    orderByDesc(aggregate: internal.AggregateOperator, column: internal.QueryKeys<T>): GlideQuery<T>;

    toGlideRecord(): GlideRecord<T>; //TODO or GlideAggregate

}
declare const GlideQuery: {
    new<T extends TableName>(tableName: T): GlideQuery<TableIndex[T]>
    new<T>(): GlideQuery<T>
}
