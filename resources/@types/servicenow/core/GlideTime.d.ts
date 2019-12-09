/**
 * The scoped GlideTime class provides methods for performing operations on GlideTime objects, such as instantiating GlideTime objects or working with GlideTime fields.
 */
declare class GlideTime {
    /**
     * Instantiates a GlideTime object with the current or specified time.
     * @param milliseconds - Instantiates a GlideTime object with the specified time.
     */
    constructor(milliseconds?: number)

    /**
     * 
     * @param format 
     * @example
     * var gt = new GlideTime(); 
    * gt.setValue('12:00:00');
    * gs.info(gt.getByFormat("HH:mm"));
     */
    getByFormat(format: string): string;

    /**
     * Gets the time in the current user's display format and time zone.

        When designing business rules or script includes remember that this method may return values in different formats for different users.
     */
    getDisplayValue(): string;

    /**
     * Gets the display value in the current user's time zone and the internal format (HH:mm:ss).
     */
    getDisplayValueinternal(): string;

    getHourLocalTime(): number;
    /**
     * Returns the hours part of the time using the local time zone. The number of hours is based on a 24 hour clock.
     */
    getHourOfDayLocalTime(): number

    /**
     * Returns the hours part of the time using the UTC time zone. The number of hours is based on a 24 hour clock.
     */
    getHourOfDayUTC(): number

    /**
     * Returns the hours part of the time using the UTC time zone. The number of hours is based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
     */
    getHourUTC(): number

    getMinutesLocalTime(): number

    getMinutesUTC(): number

    getSeconds(): number

    /**
     * Gets the time value stored in the database by the GlideTime object in the internal format, HH:mm:ss, and the system time zone.
     */
    getValue(): string;

    /**
     * 
     * @param asDisplayed The time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as HH:mm:ss.
     */
    setDisplayValue(asDisplayed: string): void;

    /**
     * Sets the time of the GlideTime object in the internal time zone.
     * @param o - The time in hh:mm:ss format.
     */
    setValue(o: string): void;

    /**
     * Gets the duration difference between two GlideTime object values.
     * @param start 
     * @param end 
     */
    static subtract(start: GlideTime, end: GlideTime): GlideDuration;
}