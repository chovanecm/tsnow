declare interface sys_user {
    sys_id: GlideElement<sys_user>,
    sys_created_on: GlideElement<sys_user, glideElementType.g_glide_date_time>,
    company: GlideElement<sys_user, glideElementType.g_reference<cmn_company>>,
    choice: GlideElement<sys_user, glideElementType.g_choice<"one"|"two">>
    anotherChoice: GlideElement<sys_user, glideElementType.g_choice<"one"|"two">>
    active: GlideElement<sys_user, glideElementType.g_boolean>
    _referenceKeys: "company.sys_id" | "company.name"
}
declare interface cmn_company {
    sys_id: GlideElement<cmn_company, glideElementType.defaultType>,
    name: GlideElement<cmn_company, glideElementType.defaultType>,
    sys_created_on: GlideElement<sys_user, glideElementType.g_glide_date_time>,
}

declare type TableIndex = {
    sys_user: sys_user,
    cmn_company: cmn_company
}

declare type TableName = keyof TableIndex;