/**
 * JSUtil is a class of shortcuts for common JavaScript routines.

 Script includes and business rules that are marked as Application = "global" and Accessible from = "All applications" can be used in scoped scripts.

 JSUtil is not available in scoped scripts.
 */
declare const JSUtil: {
    /**
     * Checks if item is null or is undefined.
     * @param item
     */
    doesNotHave(item: any): boolean

    /**
     * Checks if item is not null and is not undefined.
     * @param item
     * @returns True if the specified object is not null and is not undefined.
     */
    has(item: any): boolean

    /**
     * Checks if item is null, undefined, or evaluates to the empty string.
     * @param item
     * @returns    True if the item is null, undefined, or evaluates to the empty string
     */
    nil(item: any): boolean


    /**
     * Checks if item is null, undefined, or evaluates to the empty string.
     * @param item
     * @returns True if the item exists and is not empty.
     * @example
     * var x = "the quick brown fox";
     var y = "";
     var z;

     gs.print("x = '" + x + "', JSUtil.notNil(x) = " + JSUtil.notNil(x));
     gs.print("y = '" + y + "', JSUtil.notNil(y) = " + JSUtil.notNil(y));
     gs.print("z = '" + z + "', JSUtil.notNil(z) = " + JSUtil.notNil(z));
     */
    notNil(item: any): boolean

    /**
     * Escape ampersands commonly used to define URL attributes.
     * @param text
     * @returns The text with ampersands properly escaped.
     */
    escapeAttr(text: string): string

    /**
     * Restore ampersands from escaped text.
     * @param text
     */
    unescapeAttr(text: string): string

    /**
     * Escapes invalid XML characters such as "< > &".
     * @param text
     */
    escapeText(text: string): string
    /**
     * Removes escape characters.
     * @param text
     */
    unescapeText(text: string): string
    /**
     *
     * @param glideRecord
     * @param field
     * @returns Returns the value in a boolean GlideRecord field, returns true if value of field is true, "true", 1, or "1".
     * @todo Improve type inference to limit fields to those that are boolean types
     */
    getBooleanValue<T extends GlideRecord<any>>(glideRecord: T, field: T extends GlideRecord<infer U> ? internal.OwnKeys<U> : never): boolean

    /**
     * Determines the type of the specified object.
     * @param item
     * @returns
     * The type of the specified object.
     - 'null' if the given value is null or undefined
     - 'string' if the given value is a primitive string or a String wrapper instance
     - 'number' if the given value is a primitive number or a Number wrapper instance
     - 'boolean' if the given value is a primitive boolean or a Boolean wrapper instance
     - 'function' if the given value is a function
     - 'object' otherwise
     */
    type_of(item: any): "null" | "string" | "number" | "boolean" | "function" | "object"

    /**
     * Converts the specified object to a Boolean.
     * @param item
     * @returns If the specified object is a boolean, it is passed through. Non-zero numbers return true. Null or undefined return false. Strings return true only if exactly equal to 'true'.
     */
    toBoolean(item: any): boolean
    /**
     * Checks to see if the specified object is a member of the specified class.

     For JavaScript objects, this method behaves exactly like the JavaScript operator "instanceof", but also supports Java objects.
     * @param item
     * @param className
     * @example
     * var a = ['a','b','c'];
     var b = 10;
     var c = new GlideRecord("incident");

     gs.print("JSUtil.instance_of(a,'Array') = " + JSUtil.instance_of(a,Array));
     gs.print("JSUtil.instance_of(a,'String') = " + JSUtil.instance_of(a,String));

     gs.print("JSUtil.instance_of(b,'String') = " + JSUtil.instance_of(b,String));

     gs.print("JSUtil.instance_of(c,'GlideRecord') = " + JSUtil.instance_of(c,GlideRecord));
     */
    instance_of(item: any, className: string): boolean

    /**
     * Checks if the specified object is a Java class.
     * */
    isJavaObject(item: any): boolean

    /**
     * Logs all the properties in the given object: name, type, and value.

     Output is written to the console if you are running from a background script or have debug logging enables. The output is also written to the system log.
     * @param item The object for which to enumerate properties
     * @param name Optional name for the logged object
     */
    logObject(item: object, name?: string): void

}