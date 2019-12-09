declare namespace internal {
    abstract class BaseRecord<T> {
        addEncodedQuery(query: string): void;

        getEncodedQuery(): string;

        addNotNullQuery(fieldName: internal.QueryKeys<T>): GlideQueryCondition<T>;

        addNullQuery(fieldName: internal.QueryKeys<T>): GlideQueryCondition<T>;

        addQuery(fieldName: internal.QueryKeys<T>, operator: internal.QueryOperator, value: internal.primitive): GlideQueryCondition<T>;


        addQuery(fieldName: internal.QueryKeys<T>, value?: internal.primitive): GlideQueryCondition<T>;


        orderBy(name: internal.QueryKeys<T>): void;


        orderByDesc(name: internal.QueryKeys<T>): void;

        query(field?: string, value?: object): void;

        getRowCount(): number;

        getTableName(): string;

        hasNext(): boolean;

        next(): boolean;

        _next(): boolean;

        getValue<FieldName extends internal.OwnKeys<T>>(field: FieldName): GetValueReturnValue<T[FieldName]>;
    }

}