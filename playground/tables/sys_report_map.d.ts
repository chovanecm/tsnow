declare interface sys_report_map {
      active: GlideElement<sys_report_map, glideElementType.g_boolean>;
is_geomap: GlideElement<sys_report_map, glideElementType.g_boolean>;
json_map: GlideElement<sys_report_map, glideElementType.defaultType>;
key: GlideElement<sys_report_map, glideElementType.defaultType>;
name: GlideElement<sys_report_map, glideElementType.defaultType>;
parent: GlideElement<sys_report_map, glideElementType.g_reference<sys_report_map>>;
sys_created_by: GlideElement<sys_report_map, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_report_map, glideElementType.g_glide_date_time>;
sys_id: GlideElement<sys_report_map, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_report_map, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_report_map, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_report_map, glideElementType.g_glide_date_time>;
type: GlideElement<sys_report_map, glideElementType.g_reference<sys_report_map_type>>;
      _referenceKeys: never | {
        "parent.active": string
"parent.is_geomap": string
"parent.json_map": string
"parent.key": string
"parent.name": string
"parent.parent": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.type": string
"type.key": string
"type.name": string
"type.sys_id": string
"type.sys_class_name": string
"type.sys_created_by": string
"type.sys_created_on": string
"type.sys_mod_count": string
"type.sys_name": string
"type.sys_package": string
"type.sys_policy": string
"type.sys_scope": string
"type.sys_updated_by": string
"type.sys_updated_on": string
"type.sys_update_name": string;
      }
    }
   