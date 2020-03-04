declare namespace tsnow {
    type FieldsOf<T> = internal.OwnKeys<T>
    type Object<T> = {
        [key in FieldsOf<T>]: internal.ValueDomainByElement<T[key]>
    }
}