declare type GlideElement<Type = any> = Type & {
    canCreate(): boolean;

    canRead(): boolean;

    canWrite(): boolean;

    changes(): boolean;

    changesFrom(value: internal.AllowedTypes<Type>): boolean;

    changesTo(value: internal.AllowedTypes<Type>): boolean;

    getAttribute(attributeName: string): string;

    getChoices(name?: string): any[];

    getDecryptedValue(): string;

    getLabel(): string;

    getDisplayValue(maxCharacters?: number): string;

    getED(): GlideElementDescriptor;

    getElementValue(elementName: internal.OwnKeys<Type>): string;

    getReferenceTable(): string;

    nil(): boolean;

    setDisplayValue(value: internal.primitive): void;

    setError(value: string): void;

    setValue(value: internal.AllowedTypes<Type>): void;

    toString(): string; 
}
