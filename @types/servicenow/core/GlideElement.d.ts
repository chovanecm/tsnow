declare type GlideElement<Type = any> = Type & {

}

declare type GlideReference<ReferenceTable> = {
    getRefRecord(): GlideRecord<ReferenceTable>
}