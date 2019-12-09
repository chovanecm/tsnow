/**
 * The scoped GlideDuration class provides methods for working with spans of time or durations.
 * GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00. As a result, setValue() and getValue() use the scoped GlideDateTime object for parameters and return values.
 */
declare class GlideDuration {

    /**
     * Instantiates a GlideDuration object by cloning the value of another GlideDuration object.
     * @param value
     */
    constructor(value: GlideDuration);

    /**
     * Instantiates a GlideDuration object with the specified duration.
     * @param milliseconds
     */
    constructor(milliseconds: number)
    /**
     * Instantiates a GlideDuration object with the specified display value.
     Instantiates a GlideDuration object with the specified display value.
     @example
     // 3 days:
     var duration = new GlideDuration('3 12:00:00');
     var duration2 = new GlideDuration('3:00:00');
     */
    constructor(format: string)

    add(value: GlideDuration): GlideDuration;

    /**
     * Gets the duration in the specified format.
     * @param format
     * @example
     * var dur = new GlideDuration('3 22:00:00');
     gs.info(dur.getByFormat('HH:mm'));
     */
    getByFormat(format: string): string;

    /**
     * Gets the number of days.
     * @example
     * var dur = new GlideDuration('3 12:00:00');
     gs.info(dur.getDayPart()); // 3
     */
    getDayPart(): number;

    /**
     * Gets the display value of the duration in number of days, hours, and minutes.
     */
    getDisplayValue(): string;

    /**
     * Gets the duration value in "d HH:mm:ss" format.
     */
    getDurationValue(): string;

    /**
     * Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down.
     */
    getRoundedDayPart(): number;

    /**
     * Gets the internal value of the GlideDuration object.

     GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00
     */
    getValue(): string;

    /**
     *
     * @param asDisplayed The duration in "d HH:mm:ss" format.
     */
    setDisplayValue(asDisplayed: string): void;

    /**
     *
     * @param o The duration in the object's internal format, which is the date and time from January 1, 1970, 00:00:00.

     */
    setValue(o: string): void;

    /**
     *
     * @param value Subtracts the specified duration from the current duration.
     */
    subtract(value: GlideDuration): GlideDuration;
}