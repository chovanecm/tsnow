interface GlideQueryCondition<T = any> {
    addCondition(name: internal.QueryKeys<T>, value: internal.primitive): GlideQueryCondition<T>;

    addCondition(name: internal.QueryKeys<T>, oper: internal.QueryOperator, value: internal.primitive): GlideQueryCondition<T>;
    addCondition(name: internal.QueryKeys<T>, oper: "IN"|"NOT IN", value: internal.primitive[]): GlideQueryCondition<T>;

    addOrCondition(name: internal.QueryKeys<T>, oper: internal.QueryOperator, value: internal.primitive): GlideQueryCondition<T>;
    addOrCondition(name: internal.QueryKeys<T>, oper: "IN"|"NOT IN", value: internal.primitive[]): GlideQueryCondition<T>;

    addOrCondition(name: internal.QueryKeys<T>, value: internal.primitive): GlideQueryCondition<T>;

    /**
     * Add a function as defined using {@link GlideDBFunctionBuilder}
     * @param fun
     */
    addFunction(fun: string): void;
}
