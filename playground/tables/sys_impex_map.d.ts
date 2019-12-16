declare interface sys_impex_map {
      active: GlideElement<sys_impex_map, glideElementType.g_boolean>;
agent: GlideElement<sys_impex_map, glideElementType.defaultType>;
apply_defaults: GlideElement<sys_impex_map, glideElementType.g_boolean>;
coalesce: GlideElement<sys_impex_map, glideElementType.defaultType>;
condition_script: GlideElement<sys_impex_map, glideElementType.defaultType>;
data_option: GlideElement<sys_impex_map, glideElementType.defaultType>;
data_source: GlideElement<sys_impex_map, glideElementType.g_reference<sys_data_source>>;
description: GlideElement<sys_impex_map, glideElementType.defaultType>;
external_names: GlideElement<sys_impex_map, glideElementType.defaultType>;
name: GlideElement<sys_impex_map, glideElementType.defaultType>;
order: GlideElement<sys_impex_map, glideElementType.defaultType>;
parent: GlideElement<sys_impex_map, glideElementType.g_reference<sys_impex_map>>;
script: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_id: GlideElement<sys_impex_map, glideElementType.defaultType>;
table: GlideElement<sys_impex_map, glideElementType.defaultType>;
type: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_class_name: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_impex_map, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_name: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_package: GlideElement<sys_impex_map, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_scope: GlideElement<sys_impex_map, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_impex_map, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_impex_map, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_impex_map, glideElementType.defaultType>;
      _referenceKeys: never | {
        "data_source.category": string
"data_source.connection_timeout": string
"data_source.connection_url": string
"data_source.connection_url_parameters": string
"data_source.csv_delimiter": string
"data_source.database_name": string
"data_source.database_port": string
"data_source.discard_arrays": string
"data_source.expand_node_children": string
"data_source.file_path": string
"data_source.file_retrieval_method": string
"data_source.format": string
"data_source.glide_keystore": string
"data_source.header_row": string
"data_source.import_set_table_label": string
"data_source.import_set_table_name": string
"data_source.instance_name": string
"data_source.jdbc_password": string
"data_source.jdbc_server": string
"data_source.jdbc_user_name": string
"data_source.jpath_root_node": string
"data_source.last_run_database_field": string
"data_source.last_run_datetime": string
"data_source.ldap_target": string
"data_source.maximum_rows": string
"data_source.mid_server": string
"data_source.name": string
"data_source.oracle_port": string
"data_source.oracle_sid": string
"data_source.properties": string
"data_source.query": string
"data_source.query_timeout": string
"data_source.scp_authentication": string
"data_source.scp_password": string
"data_source.scp_port": string
"data_source.scp_server": string
"data_source.scp_user_name": string
"data_source.sheet_number": string
"data_source.sql_statement": string
"data_source.ssh_keyfile_path": string
"data_source.sys_id": string
"data_source.table_name": string
"data_source.type": string
"data_source.use_integrated_authentication": string
"data_source.use_last_run_datetime": string
"data_source.xpath_root_node": string
"data_source.zipped": string
"data_source.sys_class_name": string
"data_source.sys_created_by": string
"data_source.sys_created_on": string
"data_source.sys_mod_count": string
"data_source.sys_name": string
"data_source.sys_package": string
"data_source.sys_policy": string
"data_source.sys_scope": string
"data_source.sys_updated_by": string
"data_source.sys_updated_on": string
"data_source.sys_update_name": string
"parent.active": string
"parent.agent": string
"parent.apply_defaults": string
"parent.coalesce": string
"parent.condition_script": string
"parent.data_option": string
"parent.data_source": string
"parent.description": string
"parent.external_names": string
"parent.name": string
"parent.order": string
"parent.parent": string
"parent.script": string
"parent.sys_id": string
"parent.table": string
"parent.type": string
"parent.sys_class_name": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_mod_count": string
"parent.sys_name": string
"parent.sys_package": string
"parent.sys_policy": string
"parent.sys_scope": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.sys_update_name": string
"sys_package.active": string
"sys_package.enforce_license": string
"sys_package.licensable": string
"sys_package.license_category": string
"sys_package.license_model": string
"sys_package.name": string
"sys_package.source": string
"sys_package.sys_class_name": string
"sys_package.sys_created_by": string
"sys_package.sys_created_on": string
"sys_package.sys_id": string
"sys_package.sys_mod_count": string
"sys_package.sys_updated_by": string
"sys_package.sys_updated_on": string
"sys_package.trackable": string
"sys_package.version": string
"sys_scope.can_edit_in_studio": string
"sys_scope.guided_setup_guid": string
"sys_scope.js_level": string
"sys_scope.logo": string
"sys_scope.private": string
"sys_scope.restrict_table_access": string
"sys_scope.runtime_access_tracking": string
"sys_scope.scope": string
"sys_scope.scoped_administration": string
"sys_scope.short_description": string
"sys_scope.sys_id": string
"sys_scope.template": string
"sys_scope.vendor": string
"sys_scope.vendor_prefix": string
"sys_scope.active": string
"sys_scope.enforce_license": string
"sys_scope.licensable": string
"sys_scope.license_category": string
"sys_scope.license_model": string
"sys_scope.name": string
"sys_scope.source": string
"sys_scope.sys_class_name": string
"sys_scope.sys_created_by": string
"sys_scope.sys_created_on": string
"sys_scope.sys_mod_count": string
"sys_scope.sys_updated_by": string
"sys_scope.sys_updated_on": string
"sys_scope.trackable": string
"sys_scope.version": string;
      }
    }
   