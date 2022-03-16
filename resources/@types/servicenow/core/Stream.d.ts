/**
 * he Stream API interacts with a stream of items such as records. For example, you can use the forEach() method to update the state of each record in a stream returned by the GlideQuery API.
 * You can get a Stream object in these ways:
 *
 * Instantiate a Stream object using the constructor.
 * Return a Stream object from the GlideQuery.select() method. For more information, see GlideQuery.
 *
 *
 * This method is static and does not require an instance of the class: fromArray().
 *
 * Use the Stream API in scoped or global server-side scripts. This API requires the GlideQuery [com.sn_glidequery] plugin.
 */
declare class Stream<T> {
    /**
     * Instantiates a Stream object.
     * Instead of using this constructor, you can return a Stream object based on a query using the GlideQuery API.
     * @param nextFn - A function that retrieves the next item in the stream.
     */
    constructor(nextFn: () => T)

    /**
     * Returns results in batches of arrays, each containing the number of records passed to the method.
     * @param size
     */
    chunk(size: number): Stream<T[]>

    every(predicateFn: (item: T) => boolean): boolean
    filter(predicateFn: (item: T) => boolean): Stream<T>
    find(predicateFn: (item: T) => boolean): Optional<T>
    flatMap(mapperFn: (item: T) => Stream<T>): Stream<T>
    forEach(actionFn: (item: T) => void): void
    static fromArray<T>(array: T[]): Stream<T>
    limit(max: number): Stream<T>
    map(mapperFn: (item: T) => T): Stream<T>
    reduce<R>(reducerFn: (accumulator: R, item: T) => T, initialValue: R): R
    some(predicateFn: (item: T) => boolean): boolean

    /**
     *
     * @param maxItems - Maximum of 100 items can be returned.
     */
    toArray(maxItems: number): T[]
}
