declare type GlideElementDescriptor = {
    getAttachmentEncryptionType(): Packages.java.lang.String;

    getEncryptionType(): Packages.java.lang.String;

    getInternalType(): Packages.java.lang.String;

    getReference(): Packages.java.lang.String | null;

    getLabel(): Packages.java.lang.String;

    getLength(): number;

    getName(): Packages.java.lang.String;

    getPlural(): Packages.java.lang.String;

    hasAttachmentsEncrypted(): boolean;

    isAutoOrSysID(): boolean;

    isChoiceTable(): boolean;

    isEdgeEncrypted(): boolean;

    isVirtual(): boolean;
} 