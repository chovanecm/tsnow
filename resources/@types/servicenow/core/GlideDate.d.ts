/**
 * The scoped GlideDate class provides methods for performing operations on GlideDate objects, such as instantiating GlideDate objects or working with GlideDate fields.
 */
declare class GlideDate {
    /**
     * Creates a GlideDate object with the current date time.
     */
    constructor()

    /**
     * Gets the date in the specified date format.


     * @param format 
     * @example
     * var gd = new GlideDate(); 
gd.setValue('2015-01-01');
gs.info(gd.getByFormat("dd-MM-yyyy"));
     */
    getByFormat(format: string): string;

    /**
     * Gets the day of the month stored by the GlideDate object, expressed in the UTC time zone.
     * @returns The day of the month in the UTC time zone, from 1 to 31.
     */
    getDayOfMonthNoTZ(): dateutils.Days31

    /**
     * Gets the date in the current user's display format and time zone.
        @returns The date in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
     */
    getDisplayValue(): string;

    /**
     *Gets the display value in the internal format (yyyy-MM-dd).
     */
    getDisplayValueinternal(): string;

    /**
     * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
     */
    getMonthNoTZ(): dateutils.MonthNumber;
   

    /**
     * Gets the date value stored in the database by the GlideDate object in the internal format, yyyy-MM-dd, and the system time zone, UTC by default.
     */
    getValue(): string;

    /**
     * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
     */
    getYearNoTZ(): number
    /**
     * 
     * @param asDisplayed The date in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as yyyy-MM-dd.
     */
    setDisplayValue(asDisplayed: string): void;

    /**
     * Sets the date of the GlideDate object.
     * @param o - 	The date and time to use.
     * @example
     * var gd = new GlideDate(); 
gd.setValue('2015-01-01');
gs.info(gd.getValue());
     */
    setValue(o: string): void;

    /**
     * Gets the duration difference between two GlideDate values.
     * @param start 
     * @param end 
     */
    static subtract(start: GlideDate , end: GlideDate ): GlideDuration;
}