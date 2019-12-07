declare namespace glideElementType {
    type GlideReference<ReferenceTable> = {
        getRefRecord(): GlideRecord<ReferenceTable>
        /**
         * Get the name of the reference table.
         * @deprecated
         * This function is missing in the public API
         * @see GlideElement.getED().getReferenceTable()
         */
        getReferenceTable(): string;

    }

    type GlideChoice<Choices> = {
        __value__: never;
    }

    type GlideDateTime = {
        /**
         * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field.
         * Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
         * 
         * @returns Number of milliseconds since January 1, 1970, 00:00:00 GMT.
         */
        dateNumericValue(): number

        /**
         * Sets the duration field to a number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field.
         * Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
         * @param milliseconds - Number of milliseconds spanned by the duration.
         */
        setDateNumericValue(milliseconds: number): void

        /**
         * Get the associated GlideDateTime instance
         */
        getGlideObject(): globalThis.GlideDateTime
    }

}
declare namespace internal {
    type AllowedTypes<T> = T extends glideElementType.GlideChoice<infer Choices> ? Choices : internal.primitive;
    type UnpackElementType<T extends GlideElement<any, any>> = T extends GlideElement<infer GlideRecordType, infer GlideElementType> ? GlideElementType : never;
    type AllowedTypesOfField<T extends GlideElement<any, any>> = AllowedTypes<UnpackElementType<T>>
    type GetValueReturnValue<T extends GlideElement<any, any>> = UnpackElementType<T> extends glideElementType.GlideChoice<infer Choices> ? Choices : (string | null)
}