declare interface sys_report_map_source {
      active: GlideElement<sys_report_map_source, glideElementType.g_boolean>;
aggregate_field: GlideElement<sys_report_map_source, glideElementType.defaultType>;
join_by_column: GlideElement<sys_report_map_source, glideElementType.defaultType>;
name: GlideElement<sys_report_map_source, glideElementType.defaultType>;
parent: GlideElement<sys_report_map_source, glideElementType.g_reference<sys_report_map_source>>;
report_map_source_mapping: GlideElement<sys_report_map_source, glideElementType.g_reference<sys_report_map_source_mapping>>;
sys_created_by: GlideElement<sys_report_map_source, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_report_map_source, glideElementType.g_glide_date_time>;
sys_id: GlideElement<sys_report_map_source, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_report_map_source, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_report_map_source, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_report_map_source, glideElementType.g_glide_date_time>;
table: GlideElement<sys_report_map_source, glideElementType.defaultType>;
type: GlideElement<sys_report_map_source, glideElementType.g_reference<sys_report_map_type>>;
type_mapping: GlideElement<sys_report_map_source, glideElementType.defaultType>;
      _referenceKeys: never | {
        "parent.active": string
"parent.aggregate_field": string
"parent.join_by_column": string
"parent.name": string
"parent.parent": string
"parent.report_map_source_mapping": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.table": string
"parent.type": string
"parent.type_mapping": string
"report_map_source_mapping.active": string
"report_map_source_mapping.name": string
"report_map_source_mapping.sys_created_by": string
"report_map_source_mapping.sys_created_on": string
"report_map_source_mapping.sys_id": string
"report_map_source_mapping.sys_mod_count": string
"report_map_source_mapping.sys_updated_by": string
"report_map_source_mapping.sys_updated_on": string
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
   