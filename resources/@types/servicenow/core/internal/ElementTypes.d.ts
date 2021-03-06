declare namespace glideElementType {
    type g_reference<ReferenceTable> = internal.GlideElements<ReferenceTable> & {

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
        __type__: "choice";
    }

    interface defaultType {
        __type__: "default";
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
        __type__: "boolean"
    }

    type g_currency = {
        /**
         * Returns the currency value in the reference currency as an unformatted number.
         */
        getReferenceValue(): string
        /**
         * Returns the currency value in the user's session currency as and unformatted number.
         */
        getSessionValue(): string

        /**
         * Returns the currency value as entered as an unformatted number.
         */
        getCurrencyValue(): string

        /**
         * Returns the currency value as entered as an unformatted number, prefixed by the 3-letter ISO currency code, separated by a semicolon.
         */
        getCurrencyString(): string

        /**
         * Returns the currency value in the user's session currency formatted in the user's locale with a currency symbol.
         */
        getDisplayValue(): string

        /**
         * Returns the currency value in the user's session currency formatted in the user's locale with a currency symbol.
         */
        getSessionDisplayValue(): string

        /**
         * Returns the currency value in the reference currency formatted in the user's locale with a currency symbol.
         */
        getReferenceDisplayValue(): string

        /**
         * Returns the currency value as entered formatted in the user's locale with a currency symbol.
         */
        getCurrencyDisplayValue(): string

        /**
         * Returns the 3-letter ISO currency code for the currency value as entered.
         */
        getCurrencyCode(): string

        /**
         * Returns the 3-letter ISO currency code for the user's session currency.
         */
        getSessionCurrencyCode(): string

        /**
         * Returns the 3-letter ISO currency code for the reference currency.
         */
        getReferenceCurrencyCode(): string

        /**
         * Sets the currency value as:
         - An unformatted number taken as a value in the user's session currency.
         - An unformatted number prefixed by a 3-letter currency code separated by a semicolon.
         * @param value
         @example
         field.setValue("4369.21");
         field.setValue("JPY;4369.2")
         */
        setValue(value: string): void

        /**
         *    Sets the currency value as:
         - A number formatted in the user's locale that is taken as a value in the user's session currency.
         - A number formatted in the user's locale prefixed by a 3-letter currency code separated by a semicolon.
         * @param value
         * @example
         field.setDisplayValue("4369.21");
         field.setDisplayValue("JPY;4369.21");
         */
        setDisplayValue(value: string): void
    }

    type g_price = g_currency


}
declare namespace internal {
    /**
     * Extract values assignable to a GlideElement of type T
     */
    type ValueDomain<TGlideElementType> = TGlideElementType extends glideElementType.g_choice<infer Choices> ? Choices :
        TGlideElementType extends glideElementType.g_boolean ? ("0" | "1" | 0 | 1 | boolean) :
            internal.primitive;
    /**
     * Return the type of the Glide Element
     */
    type UnpackElementType<TGlideElement> = TGlideElement extends GlideElement<infer GlideRecordType, infer GlideElementType> ? GlideElementType : never;
    /**
     * Extract values assignable to the given GlideElement
     */
    type ValueDomainByElement<TGlideElement> = TGlideElement extends GlideElement<any, any> ? ValueDomain<UnpackElementType<TGlideElement>> : never;
    /**
     * Extract values that can be expected when a getter on a GlideElement of type T is called
     */
    type GetterValueDomain<T> = UnpackElementType<T> extends glideElementType.g_choice<infer Choices> ? Choices :
        UnpackElementType<T> extends glideElementType.g_boolean ? "0" | "1"
            : (string | null)
}