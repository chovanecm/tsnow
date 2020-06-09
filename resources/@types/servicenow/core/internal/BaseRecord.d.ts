declare namespace internal {
    /**
     * Methods common both for {@link GlideRecord} and {@link GlideAggregate}.
     */
    abstract class BaseRecord<T> {
        addEncodedQuery(query: string): void;

        getEncodedQuery(): string;

        addNotNullQuery(fieldName: internal.QueryKeys<T>): GlideQueryCondition<T>;

        addNullQuery(fieldName: internal.QueryKeys<T>): GlideQueryCondition<T>;

        addQuery(fieldName: internal.QueryKeys<T>, operator: internal.QueryOperator, value: internal.primitive): GlideQueryCondition<T>;


        addQuery(fieldName: internal.QueryKeys<T>, value?: internal.primitive): GlideQueryCondition<T>;


        orderBy(name: internal.QueryKeys<T>): void;


        orderByDesc(name: internal.QueryKeys<T>): void;

        query(field?: internal.QueryKeys<T>, value?: internal.primitive): void;

        getRowCount(): number;

        getTableName(): string;

        hasNext(): boolean;

        next(): boolean;

        _next(): boolean;

        getValue<FieldName extends internal.OwnKeys<T>>(field: FieldName): GetterValueDomain<T[FieldName]>;
    }

}