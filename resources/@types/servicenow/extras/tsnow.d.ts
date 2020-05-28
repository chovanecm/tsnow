declare namespace tsnow {
    /**
     * string, number or boolean
     */
    type primitive = internal.primitive
    /**
     * Any field name of the given table
     */
    type FieldsOf<T> = internal.OwnKeys<T extends TableName ? TableIndex[T] : T>
    /**
     * Any valid query key (e.g. sys_id, parent.sys_id) of the given table
     *
     * Note.: Due to implementation details, only a limited number of dot-walking (.) steps is supported.
     */
    type QueryKeys<T> = internal.QueryKeys<T extends TableName ? TableIndex[T] : T>
    /**
     * An object representing the GlideRecord {field1: value1, field2: value2, ...}
      * where are values are guaranteed to be strings (i.e. retrieved using "getValue()")
     */
    type ObjectOfStrings<T> = {
        [key in FieldsOf<T>]: string
    }
    /**
     * An object representing the GlideRecord. Similar to {@link ObjectOfStrings} but the values can be strings, numbers or boolean
     */
    type Object<T> = {
        [key in FieldsOf<T>]: primitive
    }
    /**
     * An allowed Query operator (IN, =, !=, etc.)
     */
    type QueryOperator = internal.QueryOperator
}