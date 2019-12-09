declare namespace internal {
    type GetElementValueType<GlideRecordType> = {
        getElementValue<FieldName extends internal.OwnKeys<GlideRecordType>>(elementName: FieldName): internal.GetValueReturnValue<GlideRecordType[FieldName]>;
    }
}
declare type GlideElement<GlideRecordType, Type = glideElementType.defaultType> = Type & internal.GetElementValueType<GlideRecordType> & {
    canCreate(): boolean;

    canRead(): boolean;

    canWrite(): boolean;

    changes(): boolean;

    changesFrom(value: internal.AllowedTypes<Type>): boolean;

    changesTo(value: internal.AllowedTypes<Type>): boolean;

    /**
     * Debugs the object and adds debug messages using setError(String).
     * @param object - An object to debug.
     */
    debug(object: any): void

    getAttribute(attributeName: string): string;

    getBooleanAttribute(attributeName: string): boolean

    /**
     * Name of the base table. This may be different from the table that the field
     * is defined on. See "Tables and Classes" in the product documentation.
     */
    getBaseTableName(): TableName

    /**
     * Generates a choice list for a field.
     * Returns the choice values from the base table only, not from the extended table.
     * @param value - An optional dependent value.
     * @returns The choice values for the field.
     */
    getChoices(value?: string): string[];

    /**
     * Gets the choice label for the current choice value.
     */
    getChoiceValue(): string;

    getDecryptedValue(): string;

    /**
     * Returns the object's label.
     */
    getLabel(): string;

    /**
     * Returns the name of the field.
     */
    getName(): string;

    getDisplayValue(maxCharacters?: number): string;

    getED(): GlideElementDescriptor;

    getGlideRecord(): GlideRecord<GlideRecordType>

    /**
     * Determines if the field has a value.
    * @returns True if the field has a value, false otherwise.
     */
    hasValue(): boolean

    nil(): boolean;

    setDisplayValue(value: internal.primitive): void;

    setError(value: string): void;

    setValue(value: internal.AllowedTypes<Type>): void;
    /**
     * Get value of this element.
     * 
     * Warning: This method is kind of missing in the official documentation
     */
    getValue(): internal.GetValueReturnValue<GlideElement<GlideRecordType, Type>>

    toString(): string; 
}
