declare interface sys_ui_action {
      action_name: GlideElement<sys_ui_action, glideElementType.defaultType>;
active: GlideElement<sys_ui_action, glideElementType.g_boolean>;
client: GlideElement<sys_ui_action, glideElementType.g_boolean>;
client_script_v2: GlideElement<sys_ui_action, glideElementType.defaultType>;
comments: GlideElement<sys_ui_action, glideElementType.defaultType>;
condition: GlideElement<sys_ui_action, glideElementType.defaultType>;
form_action: GlideElement<sys_ui_action, glideElementType.g_boolean>;
form_button: GlideElement<sys_ui_action, glideElementType.g_boolean>;
form_button_v2: GlideElement<sys_ui_action, glideElementType.g_boolean>;
form_context_menu: GlideElement<sys_ui_action, glideElementType.g_boolean>;
form_link: GlideElement<sys_ui_action, glideElementType.g_boolean>;
form_menu_button_v2: GlideElement<sys_ui_action, glideElementType.g_boolean>;
form_style: GlideElement<sys_ui_action, glideElementType.defaultType>;
hint: GlideElement<sys_ui_action, glideElementType.defaultType>;
isolate_script: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_action: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_banner_button: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_button: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_choice: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_context_menu: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_link: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_save_with_form_button: GlideElement<sys_ui_action, glideElementType.g_boolean>;
list_style: GlideElement<sys_ui_action, glideElementType.defaultType>;
name: GlideElement<sys_ui_action, glideElementType.defaultType>;
onclick: GlideElement<sys_ui_action, glideElementType.defaultType>;
order: GlideElement<sys_ui_action, glideElementType.defaultType>;
script: GlideElement<sys_ui_action, glideElementType.defaultType>;
show_insert: GlideElement<sys_ui_action, glideElementType.g_boolean>;
show_multiple_update: GlideElement<sys_ui_action, glideElementType.g_boolean>;
show_query: GlideElement<sys_ui_action, glideElementType.g_boolean>;
show_update: GlideElement<sys_ui_action, glideElementType.g_boolean>;
sys_domain: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_domain_path: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_id: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_overrides: GlideElement<sys_ui_action, glideElementType.g_reference<sys_ui_action>>;
table: GlideElement<sys_ui_action, glideElementType.defaultType>;
ui11_compatible: GlideElement<sys_ui_action, glideElementType.g_boolean>;
ui16_compatible: GlideElement<sys_ui_action, glideElementType.g_boolean>;
sys_class_name: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_ui_action, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_name: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_package: GlideElement<sys_ui_action, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_scope: GlideElement<sys_ui_action, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_ui_action, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_ui_action, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_ui_action, glideElementType.defaultType>;
      _referenceKeys: never | {
        "sys_overrides.action_name": string
"sys_overrides.active": string
"sys_overrides.client": string
"sys_overrides.client_script_v2": string
"sys_overrides.comments": string
"sys_overrides.condition": string
"sys_overrides.form_action": string
"sys_overrides.form_button": string
"sys_overrides.form_button_v2": string
"sys_overrides.form_context_menu": string
"sys_overrides.form_link": string
"sys_overrides.form_menu_button_v2": string
"sys_overrides.form_style": string
"sys_overrides.hint": string
"sys_overrides.isolate_script": string
"sys_overrides.list_action": string
"sys_overrides.list_banner_button": string
"sys_overrides.list_button": string
"sys_overrides.list_choice": string
"sys_overrides.list_context_menu": string
"sys_overrides.list_link": string
"sys_overrides.list_save_with_form_button": string
"sys_overrides.list_style": string
"sys_overrides.name": string
"sys_overrides.onclick": string
"sys_overrides.order": string
"sys_overrides.script": string
"sys_overrides.show_insert": string
"sys_overrides.show_multiple_update": string
"sys_overrides.show_query": string
"sys_overrides.show_update": string
"sys_overrides.sys_domain": string
"sys_overrides.sys_domain_path": string
"sys_overrides.sys_id": string
"sys_overrides.sys_overrides": string
"sys_overrides.table": string
"sys_overrides.ui11_compatible": string
"sys_overrides.ui16_compatible": string
"sys_overrides.sys_class_name": string
"sys_overrides.sys_created_by": string
"sys_overrides.sys_created_on": string
"sys_overrides.sys_mod_count": string
"sys_overrides.sys_name": string
"sys_overrides.sys_package": string
"sys_overrides.sys_policy": string
"sys_overrides.sys_scope": string
"sys_overrides.sys_updated_by": string
"sys_overrides.sys_updated_on": string
"sys_overrides.sys_update_name": string
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
   