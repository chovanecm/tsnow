/**
 * The GlideCalendarDateTime class provides methods for performing operations on GlideCalendarDateTime objects, such as instantiating GlideCalendarDateTime objects or working with glide_date_time fields.
 Use the GlideCalendarDateTime methods to perform date-time operations, such as instantiating a GlideCalendarDateTime object, performing date-time calculations, formatting a date-time, or converting between date-time formats.
 */
declare class GlideCalendarDateTime {
    /**
     * Adds a GlideTime object to the current GlideCalendarDateTime object.
     * @param time - Time to add.
     *
     * @example
     var gcdt = new GlideCalendarDateTime("2011-08-31 08:00:00");
     var gtime1 = new GlideTime();
     gtime1.setValue("00:00:20");
     gcdt.add(gtime1);
     gs.print(gcdt.getTime());
     */
    add(time: GlideDateTime): void;

    /**
     * Instantiates a new GlideCalendarDateTime object with the current date and time in GMT format.
     */
    constructor();

    /**
     * Instantiates a new GlideCalendarDateTime object set to the time of a specified GlideCalendarDateTime object in GMT format.
     * @param gcDT - Object used to set the time of the new object
     *
     * @example
     * var start = new GlideCalendarDateTime("2011-01-01 12:00:00");
     var end = new GlideCalendarDateTime(start);
     gs.print(end);
     // Output 2011-01-01 12:00:00
     */
    constructor(gcDT: GlideCalendarDateTime);


    /**
     * Instantiates a new GlideCalendarDateTime object from a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss.
     * @param dateTime - UTC date and time using the format yyyy-MM-dd HH:mm:ss.
     */
    constructor(dateTime: string);

    /**
     * Adds a specified number of days to the current GlideCalendarDateTime object. A negative parameter subtracts days.
     Use {@link addDaysLocalTime} and {@link addDaysUTC()} instead of this method.
     @deprecated
     * @param days - Number of days to add. Use a negative number to subtract.
     */
    addDays(days: number): void;

    /**
     * Adds a specified number of days to the current GlideCalendarDateTime object. A negative parameter subtracts days.
     The method determines the local date and time equivalent to the value stored by the GlideCalendarDateTime object, then adds or subtracts days using the local date and time values.
     * @param days - Number of days to add. Use a negative value to subtract.
     */
    addDaysLocalTime(days: number): void;

    /**
     * Adds a specified number of days to the current GlideCalendarDateTime object. A negative parameter subtracts days.
     The method determines the UTC date and time equivalent to the value stored by the GlideCalendarDateTime object, then adds or subtracts days using the UTC date and time values.
     * @param days - Number of days to add. Use a negative value to subtract.
     */
    addDaysUTC(days: number): void;

    /**
     * Adds a specified number of months to the current GlideCalendarDateTime object. A negative parameter subtracts months.
     Use {@link addMonthsLocalTime} or {@link addMonthsUTC} instead of this method.
     @deprecated
     * @param months - Number of months to add. Use a negative number to subtract.
     */
    addMonths(months: number): void;

    addMonthsLocalTime(months: number): void;

    addMonthsUTC(months: number): void;

    addSeconds(seconds: number): void;

    addWeeksLocalTime(weeks: number);

    addWeeksUTC(weeks: number);

    addYearsLocalTime(years: number);

    addYearsUTC(years: number);

    /**
     *
     * @param dateTime
     *
     * @return 0 = dates are equal, 1 greater than the parameter, -1 smaller then the specified parameter
     */
    compareTo(dateTime: GlideCalendarDateTime): 0 | -1 | 1;

    equals(dateTime: GlideCalendarDateTime): boolean;

    getDate(): GlideDate;

    /**
     * 1 - 31
     */
    getDayOfMonthLocalTime(): number;

    /**
     * 1 - 31
     */
    getDayOfMonthUTC(): number;

    /**
     * 1 Monday
     * 7 Sunday
     */
    getDayOfWeekLocalTime(): number;

    /**
     * 1 Monday
     * 7 Sunday
     */
    getDayOfWeekUTC(): number;

    getDaysInMonthLocalTime(): number;

    getDaysInMonthUTC(): number;

    /**
     * Returns the date and time value in the current user's display format and time zone. Referring to the GlideCalendarDateTime object directly returns the date and time value in the GMT time zone.
     @return Date and time in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
     */
    getDisplayValue(): string;

    /**
     * Returns the display value in the internal format (yyyy-MM-dd HH:mm:ss).
     This method is useful for date/time fields, but not for date fields.

     @returns 	Date and time values for the GlideCalendarDateTime object in the current user's time zone and the internal date and time format of yyyy-MM-dd HH:mm:ss.
     */
    getDisplayValueInternal(): string;

    /**
     * 	Get the amount of time, in milliseconds, that daylight saving is offset. Returns 0 if there is no offset or if the time is not during daylight saving time.
     */
    getDSTOffset(): number;

    /**
     * Returns the current error message.
     * @see {@link isValid}
     */
    getErrorMsg(): string;
    getLocalDate(): GlideDate;
    getLocalTime(): GlideTime;

    /**
     * 1 - Jan
     * 12 - Dec
     */
    getMonthLocalTime(): number;

    /**
     * 1 - Jan
     * 12 - Dec
     */
    getMonthLocalUTC(): number;

    /**
     * Get the number of milliseconds since January 1, 1970, 00:00:00 GMT.
     */
    getNumericValue(): number;

    /**
     * Returns the Unix duration stamp
     */
    getTime(): number;

    /**
     * Returns the time zone offset in milliseconds.
     */
    getTZOffset(): number;

    /**
     * Returns the object's time in local time zone in the user's format
     */
    getUserFormattedLocalTime(): string;

    getYearLocalTime(): number;
    getYearUTC(): number;

    /**
     * @see {@link getErrorMsg}
     */
    isValid(): boolean;

    setDayOfMonthLocalTime(day: number): void;
    setDayOfMonthUTC(day: number): void;

    /**
     *Sets a date and time value using the current user's time zone and the specified date and time format.
     This method throws a runtime exception if the date and time format in the dateTime parameter does not match the format parameter. You can retrieve the error message by calling getErrorMsg() on the GlideCalendarDateTime object after the exception is caught.
     * @param dateTime
     * @param format
     *
     * @example
     * var gcdt = new GlideCalendarDateTime("2011-02-02 12:00:00");
     gcdt.setDisplayValue("20-5-2011 12:00:00", "dd-MM-yyyy HH:mm:ss");
     gs.print(gcdt.getValue());
     */
    setDisplayValue(dateTime: string, format: string): void;
    setDisplayValueInternal(dateTime: string): void;
    setGlideCalendarDateTime(gcDT: GlideCalendarDateTime): void;
    setMonthLocalTime(month: number): void;
    setMonthUTC(month: number): void;

    /**
     * Sets the time zone of the GlideCalendarDateTime object to be the specified time zone.
     * Not available in the "global" SN scope.
     * @param timeZone
     */
    setTZ(timeZone: Packages.java.util.TimeZone): void;

}