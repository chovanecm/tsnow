/**
 * The Scoped GlideFilter API provides a method to determine if a record meets a specified set of requirements.

There is no constructor for Scoped GlideFilter. It is accessed by using the global object "GlideFilter".
 */
declare const GlideFilter: {
    /**
     * Compares a specified filter to the contents of a specified GlideRecord.

If the specified filter contains one condition, the method returns true if the record meets the condition of the filter.

If the specified filter contains more than one condition, for example "active=true^number=abc^category=request", you can use the match parameter to define whether all conditions must be met to determine a match or just a single condition.
     * @param record 
     * @param encodedQuery Encoded query string (case-sensitive).
     * @param match Optional. Flag that indicates whether all conditions must be met if the filter parameter contains multiple conditions.
        Valid values:

        - true: all conditions must be met for the method to return true
        - false: only one of the conditions must be met for the method to return true
        Default: true

        @example
        var rec = new GlideRecord('incident');
        rec.query();
        var bool = true;
        
        while(rec.next())
        {
        bool = GlideFilter.checkRecord(rec, "active=true");
        gs.info("number "+ rec. number + " is " + bool);
        }
     */
    checkRecord(record: GlideRecord, encodedQuery: string, match?: boolean): boolean
}