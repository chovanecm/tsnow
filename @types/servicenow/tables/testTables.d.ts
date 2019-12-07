declare interface sys_user {
    sys_id: GlideElement,
    company: GlideElement<glideType.GlideReference<cmn_company>>,
    choice: GlideElement<glideType.GlideChoice<"one"|"two">>
    _referenceKeys: "company.sys_id" | "company.name"
}
declare interface cmn_company {
    sys_id: GlideElement<string>,
    name: GlideElement<string>
}

declare type TableIndex = {
    sys_user: sys_user,
    cmn_company: cmn_company
}

declare type TableName = keyof TableIndex;