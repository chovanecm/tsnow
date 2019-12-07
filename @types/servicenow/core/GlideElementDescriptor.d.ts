interface GlideElementDescriptor {
    getAttachmentEncryptionType(): string;

    getEncryptionType(): String;

    getInternalType(): String;

    getReference(): String | null;

    getLabel(): string;

    getLength(): number;

    getName(): String;

    getPlural(): boolean;

    hasAttachmentsEncrypted(): boolean;

    isAutoOrSysID(): boolean;

    isChoiceTable(): boolean;

    isEdgeEncrypted(): boolean;

    isVirtual(): boolean;
} 