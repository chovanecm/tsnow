/**
 * ArrayUtil API is a script include with useful functions for working with JavaScript arrays.
 *  These methods are available to any server-side script.
 */
declare class ArrayUtil {
    /**
     * Merge two arrays.
     * @param array1
     * @param array2
     *
     * @deprecated
     * Use {@link Array.concat}
     * @example
     * var array1 = ["hello"]
     * var array2 = array1.concat(["world", "!"])
     * array2 // ["hello", "world", "!"]
     */
    concat<A1, A2>(array1: A1[], array2: A2[]): (A1 | A2)[]

    /**
     * Searches the array for the element. Returns true if the element exists in the array, otherwise returns false.
     * @param array - The array to search
     * @param element - The element to search for
     */
    contains(array: any[], element: any): boolean

    /**
     * Conver a Java-based list ao a JavaScript array.
     * @param javaList
     */
    convertArray<T>(javaList: Packages.java.util.List<T>): T[]

    /**
     * Return all items from valuesFrom that were not found in either of the searchIn arrays
     * @param valuesFrom
     * @param searchIn - Variable number of arrays to be searched for values from the first one
     */
    diff<T>(valuesFrom: T[], ...searchIn: any[]): T[]

    /**
     * Wrap value as an array
     * @param itemOrArray
     * @returns The wrapped value:
     * - Identity if the item is already an array.
     * - Empty array if the parameter is null or undefined
     * - A single-item array containing the item otherwise
     */
    ensureArray<T>(itemOrArray: T | T[]): T[]

    /**
     * Searches the array for the element. Returns the element index if found, -1 otherwise.
     * @param array - The array to search
     * @param element - The element to search for
     * @param startIndex - Optional The index to begin the search
     * @returns The index where the element was found, -1 otherwise.
     *
     * @deprecated
     * Use {@link Array.indexOf(item)} instead
     */
    indexOf(array: any[], element: any, startIndex?: number): number

    /**
     * Finds the elements present in all arrays. Any number of arrays can be provided as parameters.
     * @param firstArray
     * @param otherArrays
     * @returns An array of elements from array a that were found in all of the other input arrays. Duplicates are removed.

     */
    intersect<A1, A2 extends any[]>(firstArray: A1[], ...otherArrays: A2[]): A1[] & A2

    /**
     * Merge two or more arrays.
     Any number of arrays can be provided as parameters.
     * @param firstArray
     * @param otherArrays
     * @returns An array of items from all the input arrays. Duplicates are removed.

     */
    union<A1, A2 extends any[]>(firstArray: A1[], ...otherArrays: A2[]): A1[] | A2

    /**
     * Filter duplicate items from an array.
     * @param array The array to check for duplicate elements.
     * @returns An array of unique items from the input array.
     */
    unique<A>(array: A[]): A[]
}