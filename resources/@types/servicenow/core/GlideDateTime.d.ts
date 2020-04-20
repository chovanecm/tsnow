/**
 * The GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide_date_time fields.

 Use the GlideDateTime methods to perform date-time operations, such as instantiating a GlideDateTime object, performing date-time calculations, formatting a date-time, or converting between date-time formats.
 */
declare class GlideDateTime {

    /**
     * Instantiates a new GlideDateTime object with the current date and time in Greenwich Mean Time (GMT).
     */
    constructor();


    /**
     * Instantiates a new GlideDateTime object
     * @param value The GlideDateTime object to use for setting the time of the new object
     OR     UTC date and time using the internal format yyyy-MM-dd HH:mm:ss.
     */
    constructor(value: string | GlideDateTime);

    /**
     * Adds a GlideTime object to the current GlideDateTime object.

     * @param gd - The GlideTime or the number of milliseconds to add.
     */
    add(gd: GlideTime | number): void;

    /**
     * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the local date and time values.
     * @param amount    The number of days to add. Use a negative value to subtract.
     */
    addDaysLocalTime(amount: number): void;

    /**
     * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the UTC date and time values.

     * @param amount The number of days to add. Use a negative number to subtract.

     */
    addDaysUTC(amount: number): void;

    /**
     * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the local date and time values.


     * @param amount The number of months to add. use a negative value to subtract.

     */
    addMonthsLocalTime(amount: number): void;

    /**
     * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the UTC date and time values.

     * @param amount The number of months to add. Use a negative value to subtract.
     */
    addMonthsUTC(amount: number): void;

    addSeconds(value: number): void;

    addWeeksLocalTime(amount: number): void;

    addWeeksUTC(amount: number): void;

    addYearsLocalTime(amount: number): void;

    addYearsUTC(amount: number): void;

    /**
     * Determines if the GlideDateTime object occurs after the specified GlideDateTime.

     * @param instance The time to check against.
     */
    after(instance: GlideDateTime): boolean

    /**
     * Determines if the GlideDateTime object occurs on or after the specified GlideDateTime.

     * @param instance
     */
    onOrAfter(instance: GlideDateTime): boolean

    /**
     * Determines if the GlideDateTime object occurs before the specified GlideDateTime.

     * @param instance The time to check against.
     */
    before(instance: GlideDateTime): boolean

    /**
     * Determines if the GlideDateTime object occurs on or before the specified GlideDateTime.
     * @param instance
     */
    onOrBefore(instance: GlideDateTime): boolean

    /**
     * Compares two date and time objects to determine whether they are equivalent or one occurs before or after the other.
     * @param o
     * @returns 0 = Dates are equal
     1 = The object's date is after the date specified in the parameter
     -1 = The object's date is before the date specified in the parameter
     */
    compareTo(o: GlideDateTime): 0 | 1 | -1;

    /**
     * Compares a datetime with an existing value for equality.
     * @param o
     */
    equals(o: GlideDateTime): boolean;

    /**
     * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the system time zone, UTC by default.
     */
    getDate(): GlideDate;

    /**
     * Gets the day of the month stored by the GlideDateTime object, expressed in the current user's time zone.
     */
    getDayOfMonthLocalTime(): dateutils.Days31;

    getDayOfMonthUTC(): dateutils.Days31;

    /**
     * Gets the day of the week stored by the GlideDateTime object, expressed in the user's time zone.
     * @returns The day of week value, in the user's time zone, from 1 to 7. Monday equals 1, Sunday equals 7.
     */
    getDayOfWeekLocalTime(): dateutils.Days7;

    /**
     * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone.
     * @returns The day of week value from 1 to 7. Monday equals 1, Sunday equals 7.
     */
    getDayOfWeekUTC(): dateutils.Days7;

    /**
     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user's time zone.
     */
    getDaysInMonthLocalTime(): dateutils.MonthLength;

    getDaysInMonthUTC(): dateutils.MonthLength;

    /**
     * Gets the date and time value in the current user's display format and time zone.
     * @returns The date and time in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
     */
    getDisplayValue(): string;

    /**
     * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
     * @returns The date and time values for the GlideDateTime object in the current user's time zone and the internal date and time format of yyyy-MM-dd HH:mm:ss.
     */
    getDisplayValueInternal(): string;

    /**
     * Gets the amount of time that daylight saving time is offset.
     * @returns Amount of time, in milliseconds, that daylight saving is offset. Returns 0 if there is no offset or if the time is not during daylight saving time.
     */
    getDSTOffset(): number;

    getErrorMsg(): string;

    /**
     * Returns the object's time in the local time zone and in the internal format.
     *  @returns The object's time in the local time zone and the internal format.
     * @example 10:38:30
     */
    getInternalFormattedLocalTime(): string

    /**
     * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the current user's time zone.
     */
    getLocalDate(): GlideDate;

    /**
     * Returns a GlideTime object that represents the time portion of the GlideDateTime object in the user's time zone.
     */
    getLocalTime(): GlideTime;

    getMonthLocalTime(): dateutils.MonthNumber;

    getMonthUTC(): dateutils.MonthNumber;

    /**
     * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
     */
    getNumericValue(): number;

    /**
     * Returns a GlideTime object that represents the time portion of the GlideDateTime object.
     * @returns The Unix duration stamp in system format based on GMT time.
     */
    getTime(): GlideTime;

    /**
     * Gets the time zone offset in milliseconds.
     */
    getTZOffset(): number;

    /**
     * Returns the object's time in the local time zone and in the user's format.
     */
    getUserFormattedLocalTime(): string

    /**
     * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
     * @example 2019-12-07 18:43:15
     */
    getValue(): Packages.java.lang.String;

    /**
     * Gets the number of the week stored by the GlideDateTime object, expressed in the current user's time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
     * @returns The number of the current week in local time. The highest week number in a year is either 52 or 53.
     */
    getWeekOfYearLocalTime(): number;

    /**
     * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
     * @returns The number of the current week in UTC time. The highest week number in a year is either 52 or 53.
     */
    getWeekOfYearUTC(): number;

    /**
     * Gets the year stored by the GlideDateTime object, expressed in the current user's time zone.
     * @returns Four-digit year value in the user's time zone.

     */
    getYearLocalTime(): number;

    /**
     * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
     * @returns 4-digit year value in the UTC time zone.
     */
    getYearUTC(): number;

    /**
     * Determine if an object's date is set.
     * @returns True if the object date is set; otherwise, returns false.
     */
    hasDate(): boolean;

    /**
     * Determines if an object's time uses a daylight saving offset.
     */
    isDST(): boolean;

    /**
     * Determines if a value is a valid date and time.
     */
    isValid(): boolean;

    /**
     * Sets the day of the month to a specified value in the current user's time zone.
     * @param day The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
     */
    setDayOfMonthLocalTime(day: dateutils.Days31): void;

    /**
     *
     * @param day - The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
     */
    setDayOfMonthUTC(day: number): void;

    /**
     * Sets a date and time value using  either the current user's display format and time zone
     *  or the specified date and time format.
     * This method throws a runtime exception if the date and time format used in the value parameter does not match the format parameter.
     * You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.
     * @param value - The date and time (in the current user's time zone if the second parameter is ommitted).
     * @param format - The date and time format to use to parse the value parameter.
     *
     * @example
     * var gdt = new GlideDateTime("2011-02-02 12:00:00");
     gdt.setDisplayValue("20-5-2011 12:00:00", "dd-MM-yyyy HH:mm:ss"); //uses current user session time zone (US/Pacific)
     gs.info(gdt.getValue());
     */
    setDisplayValue(value: string, format?: string): void;

    /**
     * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
     * @param value - The date and time in internal format.
     @example var gdt = new GlideDateTime("2014-02-02 12:00:00");
     gdt.setDisplayValueInternal("2014-01-01 12:00:00"); //uses current user session time zone (US/Pacific)
     gs.info(gdt.getValue());
     */
    setDisplayValueInternal(value: string): void;

    /**
     * Sets the date and time of the current object using an existing GlideDateTime object. This method is equivalent to instantiating a new object with a GlideDateTime parameter.

     * @param g - The object to use for setting the datetime value.

     */
    setGlideDateTime(g: GlideDateTime): void;

    /**
     * Sets the month stored by the GlideDateTime object to the specified value using the current user's time zone.
     * @param month
     */
    setMonthLocalTime(month: number): void;

    setMonthUTC(month: number): void;

    setNumericValue(milliseconds: number): void;

    /**
     * Sets the date and time of the GlideDateTime object.
     * @param o - A GlideDateTime object. Sets the value of the object to the date and time stored by the GlideDateTime passed in the parameter. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(GlideDateTime g) constructor.
     */
    setValue(o: GlideDateTime): void;
    /**
     * Sets the date and time of the GlideDateTime object.
     * @param o - A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss. Sets the value of the object to the specified date and time. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(String value) constructor. If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats. Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values. When using a non-standard date and time format, use {@link setValueUTC} instead.
     */
    setValue(o: string): void;

    /**
     * Sets the date and time of the GlideDateTime object.
     * @param o A JavaScript Number. Sets the value of the object using the Number value as milliseconds past January 1, 1970 00:00:00 GMT.
     */
    setValue(o: number): void;

    /**
     * Sets a date and time value using the UTC time zone and the specified date and time format. This method throws a runtime exception if the date and time format used in the dt parameter does not match the format parameter. You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.
     * @param dt The date and time to use.
     * @param format The date and time format to use.
     */
    setValueUTC(dt: string, format: string): void;

    setYearLocalTime(year: number): void;

    setYearUTC(year: number): void;

    /**
     * Gets the duration difference between two GlideDateTime values.
     * @param start
     * @param end
     */
    static subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;
    /**
     * Subtracts a specified amount of time from the current GlideDateTime object.
     * @param time The time value or the number of milliseconds to subtract.
     *
     * @example
     * var gdt = new GlideDateTime("2011-12-07 08:00:00");
     gdt.subtract(1000);
     gs.info(gdt.getValue());
     */
    subtract(time: GlideTime | number): void;

    /**
     * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to getValue().
     * @returns The date and time stored by the GlideDateTime object in the system time zone and format.
     */
    toString(): string;
}

declare namespace dateutils {
    type Days31 =
        1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22
        | 23
        | 24
        | 25
        | 26
        | 27
        | 28
        | 29
        | 30
        | 31
    type Days7 = 1 | 2 | 3 | 4 | 5 | 6 | 7
    type MonthLength = 28 | 29 | 30 | 31
    type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}