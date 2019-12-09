declare namespace Packages {
    namespace java {
        namespace util {
            interface Map<K, V> {
                get(key: any): V
                isEmpty(): boolean
                size(): number
                containsValue(value: any): boolean
                containsKey(key: any): boolean
                keySet(): Set<K>
            }

            interface Set<K> {
                contains(key: any): boolean
                isEmpty(): boolean
                size(): number
                toArray(): K[]
            }
        }
    }
}