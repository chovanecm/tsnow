declare interface sys_user {
    sys_id: GlideElement<sys_user>,
    sys_created_on: GlideElement<sys_user, glideElementType.GlideDateTime>,
    company: GlideElement<sys_user, glideElementType.GlideReference<cmn_company>>,
    choice: GlideElement<sys_user, glideElementType.GlideChoice<"one"|"two">>
    anotherChoice: GlideElement<sys_user, glideElementType.GlideChoice<"one"|"two">>
    _referenceKeys: "company.sys_id" | "company.name"
}
declare interface cmn_company {
    sys_id: GlideElement<cmn_company, string>,
    name: GlideElement<cmn_company, string>,
    sys_created_on: GlideElement<sys_user, glideElementType.GlideDateTime>,
}

declare type TableIndex = {
    sys_user: sys_user,
    cmn_company: cmn_company
}

declare type TableName = keyof TableIndex;