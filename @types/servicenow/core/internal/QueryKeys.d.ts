declare namespace internal {
    interface WithReferenceKeys {
        _referenceKeys: string
    }
    type TestType = {
        ownKey1: string,
        ownKey2: number,
        _referenceKeys: "ownKey1.first" | "ownKey1.second"
    }

    /**
     * Type representing actual field names and their types (GlideElements)
     */
    type GlideElements<T> = Omit<T, "_referenceKeys">;
    /**
     * A union type of all field field names of type T
     */
    type OwnKeys<T> = keyof GlideElements<T>;

    /**
     * A union of all keys that can be used for querying type T (including some reference fields)
     */
    type QueryKeys<T> = T extends WithReferenceKeys ? (OwnKeys<T> | T["_referenceKeys"]) : OwnKeys<T>;
}