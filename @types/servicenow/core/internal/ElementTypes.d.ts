declare namespace glideType {
    type GlideReference<ReferenceTable> = {
        getRefRecord(): GlideRecord<ReferenceTable>
    }

    type GlideChoice<Choices> = {
        __value__: never;
    }
}
declare namespace internal {
    type AllowedTypes<T> = T extends glideType.GlideChoice<infer Choices> ? Choices : internal.primitive;
    type UnpackElementType<T extends GlideElement> = T extends GlideElement<infer U> ? U : never;
    type AllowedTypesOfField<T extends GlideElement> = AllowedTypes<UnpackElementType<T>>
    type GetValueReturnValue<T extends GlideElement> = UnpackElementType<T> extends glideType.GlideChoice<infer Choices> ? Choices : (string|null)
}