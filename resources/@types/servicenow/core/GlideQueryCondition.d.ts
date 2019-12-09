interface GlideQueryCondition<T = any> {
    addCondition(name: internal.QueryKeys<T>, value: internal.primitive): GlideQueryCondition<T>;

    addCondition(name: internal.QueryKeys<T>, oper: internal.QueryOperator, value: internal.primitive): GlideQueryCondition<T>;

    addOrCondition(name: internal.QueryKeys<T>, oper: internal.QueryOperator, value: internal.primitive): GlideQueryCondition<T>;

    addOrCondition(name: internal.QueryKeys<T>, value: internal.primitive): GlideQueryCondition<T>;
}