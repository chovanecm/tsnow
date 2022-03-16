/**
 * @todo Finish the type definition!
 *
 * Build functions to perform SQL operations in the database.

 The GlideDBFunctionBuilder methods provide a way to build Relational Database Management System (RDBMS) functions to perform SQL operations on record data. These methods can be used in both scoped and global server scripts.

 To use platform functions:
 - Construct a function using the GlideDBFunctionBuilder constructor and associated methods.
 - After building a function, you can apply the function to the current record using the addFunction() method of the GlideRecord class.
 - Add the function to a query using the addQuery() method of the GlideRecord class.
 - Retrieve the results of the function using the existing GlideRecord API methods such as getValue() and getElement().
 */
declare class GlideDBFunctionBuilder {
    constructor();

    /**
     * Build function that adds two numbers
     */
    add(): GlideDBFunctionBuilder;

    /**
     * Use the given field as operand
     * @param fieldName
     * @see {@link constant}
     */
    field(fieldName: string): GlideDBFunctionBuilder;

    /**
     * Defines a constant value to use in the function. If used with the dayofweek() method, the string defines whether to use Sunday or Monday as the first day of the week.
     * @param constant - A constant value used in a function.
     When used with the dayofweek() method, the value defines whether the week starts on a Sunday or Monday.

     1: Week begins on Sunday.
     2: Week begins on Monday.
     This definition enables the dayofweek() method to return the correct day of the week from a given date. If a value other than 1 or 2 is provided, the dayofweek() method uses Sunday as the first day of the week.

     @see {@link field}
     */
    constant(constant: string): GlideDBFunctionBuilder;

    /**
     * Build a function that concatenates two strings
     */
    concat(): GlideDBFunctionBuilder;

    /**
     * Determines the duration using a given start date/time and end date/time.
     Use the field(String field) method to define start and end date/time fields.

     The function value will be YYYY-mm-dd HH:mm:ss
     */
    datediff(): GlideDBFunctionBuilder;

    /**
     * Returns an integer representing the day of the week for a given date.
     Use the field(String field) method to define the given date/time. Use the constant(String constant) method to define whether the week starts on a Sunday or Monday.

     This method can be used with MySQL, Oracle, and Microsoft SQL Server databases only. If using an Oracle database, the NLS_TERRITORY setting must be set to a territory with Sunday as the first day of the week.
     */
    dayofweek(): GlideDBFunctionBuilder;

    /**
     * Divide the two operands
     */
    divide(): GlideDBFunctionBuilder;

    /**
     * Determine the number of code units.
     * Unary function.
     */
    length(): GlideDBFunctionBuilder;

    multiply(): GlideDBFunctionBuilder;

    subtract(): GlideDBFunctionBuilder;


    build(): string;
}