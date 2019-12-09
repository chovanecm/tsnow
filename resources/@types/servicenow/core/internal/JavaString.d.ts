declare namespace Packages {
    namespace java {
        namespace lang {
            class String {
                /**
                 * Returns true if and only if this string contains the specified sequence of char values.
                 * @param str
                 */
                contains(str: string | String): boolean

                /**
                 * Tests if this string ends with the specified suffix.
                 * @param suffix
                 */
                endsWith(suffix: string | String): boolean

                startsWith(suffix: string | String): boolean

                isEmpty(): boolean

                length(): number

                /**
                 * Returns a new string that is a substring of this string.
                 * @param beginIndex
                 * @param endIndex
                 */
                substring(beginIndex: number, endIndex?: number): String

                /**
                 * Converts all of the characters in this String to lower case using the rules of the default locale.
                 */
                toLowerCase(): String

                /**
                 * Converts all of the characters in this String to upper case using the rules of the default locale.
                 */
                toUpperCase(): String


                /**
                 * Returns ... a Java String (!!!)
                 * @see String()
                 * @example
                 * // safer:
                 * if (javaString != null) {
                 *    return String(javaString)
                 * }
                 */
                toString(): String
            }
        }
    }

}