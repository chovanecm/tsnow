declare interface sys_scope {
      can_edit_in_studio: GlideElement<sys_scope, glideElementType.g_boolean>;
guided_setup_guid: GlideElement<sys_scope, glideElementType.g_reference<gsw_content>>;
js_level: GlideElement<sys_scope, glideElementType.defaultType>;
logo: GlideElement<sys_scope, glideElementType.defaultType>;
private: GlideElement<sys_scope, glideElementType.g_boolean>;
restrict_table_access: GlideElement<sys_scope, glideElementType.g_boolean>;
runtime_access_tracking: GlideElement<sys_scope, glideElementType.defaultType>;
scope: GlideElement<sys_scope, glideElementType.defaultType>;
scoped_administration: GlideElement<sys_scope, glideElementType.g_boolean>;
short_description: GlideElement<sys_scope, glideElementType.defaultType>;
sys_id: GlideElement<sys_scope, glideElementType.defaultType>;
template: GlideElement<sys_scope, glideElementType.defaultType>;
vendor: GlideElement<sys_scope, glideElementType.defaultType>;
vendor_prefix: GlideElement<sys_scope, glideElementType.defaultType>;
active: GlideElement<sys_scope, glideElementType.g_boolean>;
enforce_license: GlideElement<sys_scope, glideElementType.defaultType>;
licensable: GlideElement<sys_scope, glideElementType.g_boolean>;
license_category: GlideElement<sys_scope, glideElementType.defaultType>;
license_model: GlideElement<sys_scope, glideElementType.defaultType>;
name: GlideElement<sys_scope, glideElementType.defaultType>;
source: GlideElement<sys_scope, glideElementType.defaultType>;
sys_class_name: GlideElement<sys_scope, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_scope, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_scope, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_scope, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_scope, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_scope, glideElementType.g_glide_date_time>;
trackable: GlideElement<sys_scope, glideElementType.g_boolean>;
version: GlideElement<sys_scope, glideElementType.defaultType>;
      _referenceKeys: never | {
        "guided_setup_guid.active": string
"guided_setup_guid.dependent_on_contents": string
"guided_setup_guid.dependent_on_plugins": string
"guided_setup_guid.dependent_on_plugins_ids": string
"guided_setup_guid.description": string
"guided_setup_guid.implicit_dependent_on": string
"guided_setup_guid.implicit_plugin_dependencies": string
"guided_setup_guid.order": string
"guided_setup_guid.parent": string
"guided_setup_guid.parents": string
"guided_setup_guid.root_parent": string
"guided_setup_guid.skippable": string
"guided_setup_guid.supports_child_content": string
"guided_setup_guid.sys_id": string
"guided_setup_guid.title": string
"guided_setup_guid.weight": string
"guided_setup_guid.sys_class_name": string
"guided_setup_guid.sys_created_by": string
"guided_setup_guid.sys_created_on": string
"guided_setup_guid.sys_mod_count": string
"guided_setup_guid.sys_name": string
"guided_setup_guid.sys_package": string
"guided_setup_guid.sys_policy": string
"guided_setup_guid.sys_scope": string
"guided_setup_guid.sys_updated_by": string
"guided_setup_guid.sys_updated_on": string
"guided_setup_guid.sys_update_name": string;
      }
    }
   