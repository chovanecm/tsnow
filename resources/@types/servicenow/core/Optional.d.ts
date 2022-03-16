declare class Optional<T> {
    static of<T>(value: T): Optional<T>;

    /**
     * Returns an empty Optional object. Use this method in an Else clause to handle a query that might not return a result.
     * @param reason - Reason displayed in the log when Optional.get() is called on the empty Optional object.
     */
    static empty(reason?: string): Optional<any>;
    isPresent(): boolean;
    isEmpty(): boolean;
    get(): T;

    /**
     * Applies a predicate function, a function that takes a single value and returns true or false, to the record inside the Optional object. If the function returns true, the method returns the Optional record unchanged. If the function returns false, it returns an empty Optional object.
     * @param predicate - Predicate function to apply to the value inside the Optional object. Must return a Boolean value.
     */
    filter(predicate: (value: T) => boolean): Optional<T>;
    flatMap<U>(mapper: (value: T) => Optional<U>): Optional<U>;
    ifPresent(consumer: (value: T) => void): void;

    /**
     * Returns a new Optional object. Instead of containing the record, the object contains a function to get the record that is only called if and when requested in the code.
     * Use this method to delay getting the value until it's needed. You might do this if requesting the value from a slow source and don't want to slow down your code unnecessarily. Otherwise, you can return an Optional object using the GlideQuery and Stream APIs.
     * @param supplier  - Function that returns a single record as a result of a query
     */
    static lazy<T>(supplier: () => T): Optional<T>;
    map<U>(mapper: (value: T) => U): Optional<U>;
    orElse(other: T): T;
}
