declare namespace glideElementType {
    interface g_reference<ReferenceTable> {

        getRefRecord(): GlideRecord<ReferenceTable>
        /**
         * Get the name of the reference table.
         * @deprecated
         * This function is missing in the public API
         * @see GlideElement.getED().getReferenceTable()
         */
        getReferenceTable(): string

    }


    type g_choice<Choices> = {
        __g_choice__: never;
    }

    interface defaultType {
        __value__: never;
    }

    interface g_glide_date_time {

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

    interface g_glide_date {

        /**
     * Get the associated GlideDate instance
     */
        getGlideObject(): globalThis.GlideDate

    }


    type date = g_glide_date

    interface g_glide_time {
        /**
  * Get the associated GlideTime instance
  */
        getGlideObject(): globalThis.GlideTime

    }

    interface g_glide_duration {

        /**
    * Get the associated GlideDuration instance
    */
        getGlideObject(): globalThis.GlideDuration

    }

    type g_boolean = {
        __g_boolean__: never
    }

}
declare namespace internal {
    type AllowedTypes<T> = T extends glideElementType.g_choice<infer Choices> ? Choices :
        T extends glideElementType.g_boolean ? ("0" | "1" | 0 | 1 | boolean) :
        internal.primitive;
    type UnpackElementType<T extends GlideElement<any, any>> = T extends GlideElement<infer GlideRecordType, infer GlideElementType> ? GlideElementType : never;
    type AllowedTypesOfField<T extends GlideElement<any, any>> = AllowedTypes<UnpackElementType<T>>
    type GetValueReturnValue<T extends GlideElement<any, any>> = UnpackElementType<T> extends glideElementType.g_choice<infer Choices> ? Choices :
        UnpackElementType<T> extends glideElementType.g_boolean ? "0" | "1"
        : (string | null)
}