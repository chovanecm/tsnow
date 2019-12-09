/**
 * The GlideSysAttachment API provides a way to handle attachments.

 Content is returned as a string, not as a byte array when getContent() is called.

 Content is returned as a GlideScriptableInputStream object when getContentStream() is called. The GlideScriptableInputStream contains the actual bytes not converted into a String.

 @todo This is a stub. Review the type definition and delete the line.
 */
declare class GlideSysAttachment {
    constructor();

    copy(sourceTable: TableUtils, sourceSysId: string, destinationTable: string, destinationSysId: TableIndex): void;

    deleteAttachment(sysId: string): void;

    getContent(record: GlideRecord): any;

    getContentBase64(record: GlideRecord): string;

    getContentStream(sysId: string): object;

    write(record: GlideRecord, fileName: string, contentType: string, data: any): string;

    writeBase64(record: GlideRecord, fileName: string, contentType: string, base64Content: string): string;

    writeContentStream(record: GlideRecord, fileName: string, contentType: string, inputStream: object): string;
}