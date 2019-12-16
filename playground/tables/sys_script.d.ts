declare interface sys_script {
      abort_action: GlideElement<sys_script, glideElementType.g_boolean>;
access: GlideElement<sys_script, glideElementType.defaultType>;
action_delete: GlideElement<sys_script, glideElementType.g_boolean>;
action_insert: GlideElement<sys_script, glideElementType.g_boolean>;
action_query: GlideElement<sys_script, glideElementType.g_boolean>;
action_update: GlideElement<sys_script, glideElementType.g_boolean>;
active: GlideElement<sys_script, glideElementType.g_boolean>;
add_message: GlideElement<sys_script, glideElementType.g_boolean>;
advanced: GlideElement<sys_script, glideElementType.g_boolean>;
change_fields: GlideElement<sys_script, glideElementType.g_boolean>;
client_callable: GlideElement<sys_script, glideElementType.g_boolean>;
collection: GlideElement<sys_script, glideElementType.defaultType>;
condition: GlideElement<sys_script, glideElementType.defaultType>;
description: GlideElement<sys_script, glideElementType.defaultType>;
execute_function: GlideElement<sys_script, glideElementType.g_boolean>;
filter_condition: GlideElement<sys_script, glideElementType.defaultType>;
is_rest: GlideElement<sys_script, glideElementType.g_boolean>;
message: GlideElement<sys_script, glideElementType.defaultType>;
name: GlideElement<sys_script, glideElementType.defaultType>;
order: GlideElement<sys_script, glideElementType.defaultType>;
priority: GlideElement<sys_script, glideElementType.defaultType>;
rest_method: GlideElement<sys_script, glideElementType.g_reference<sys_rest_message_fn>>;
rest_method_text: GlideElement<sys_script, glideElementType.defaultType>;
rest_service: GlideElement<sys_script, glideElementType.g_reference<sys_rest_message>>;
rest_service_text: GlideElement<sys_script, glideElementType.defaultType>;
rest_variables: GlideElement<sys_script, glideElementType.defaultType>;
role_conditions: GlideElement<sys_script, glideElementType.defaultType>;
script: GlideElement<sys_script, glideElementType.defaultType>;
sys_domain: GlideElement<sys_script, glideElementType.defaultType>;
sys_domain_path: GlideElement<sys_script, glideElementType.defaultType>;
sys_id: GlideElement<sys_script, glideElementType.defaultType>;
sys_overrides: GlideElement<sys_script, glideElementType.g_reference<sys_script>>;
template: GlideElement<sys_script, glideElementType.defaultType>;
when: GlideElement<sys_script, glideElementType.defaultType>;
sys_class_name: GlideElement<sys_script, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_script, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_script, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_script, glideElementType.defaultType>;
sys_name: GlideElement<sys_script, glideElementType.defaultType>;
sys_package: GlideElement<sys_script, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_script, glideElementType.defaultType>;
sys_scope: GlideElement<sys_script, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_script, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_script, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_script, glideElementType.defaultType>;
      _referenceKeys: never | {
        "rest_method.authentication_type": string
"rest_method.basic_auth_password": string
"rest_method.basic_auth_profile": string
"rest_method.basic_auth_user": string
"rest_method.content": string
"rest_method.function_name": string
"rest_method.http_method": string
"rest_method.lock": string
"rest_method.oauth2_profile": string
"rest_method.protocol_name": string
"rest_method.qualified_name": string
"rest_method.rest_endpoint": string
"rest_method.rest_message": string
"rest_method.sys_id": string
"rest_method.use_basic_auth": string
"rest_method.use_mid_server": string
"rest_method.use_mutual_auth": string
"rest_method.sys_class_name": string
"rest_method.sys_created_by": string
"rest_method.sys_created_on": string
"rest_method.sys_mod_count": string
"rest_method.sys_name": string
"rest_method.sys_package": string
"rest_method.sys_policy": string
"rest_method.sys_scope": string
"rest_method.sys_updated_by": string
"rest_method.sys_updated_on": string
"rest_method.sys_update_name": string
"rest_service.access": string
"rest_service.authentication_type": string
"rest_service.basic_auth_password": string
"rest_service.basic_auth_profile": string
"rest_service.basic_auth_user": string
"rest_service.description": string
"rest_service.name": string
"rest_service.oauth2_profile": string
"rest_service.protocol_name": string
"rest_service.rest_endpoint": string
"rest_service.sys_id": string
"rest_service.use_basic_auth": string
"rest_service.use_mutual_auth": string
"rest_service.sys_class_name": string
"rest_service.sys_created_by": string
"rest_service.sys_created_on": string
"rest_service.sys_mod_count": string
"rest_service.sys_name": string
"rest_service.sys_package": string
"rest_service.sys_policy": string
"rest_service.sys_scope": string
"rest_service.sys_updated_by": string
"rest_service.sys_updated_on": string
"rest_service.sys_update_name": string
"sys_overrides.abort_action": string
"sys_overrides.access": string
"sys_overrides.action_delete": string
"sys_overrides.action_insert": string
"sys_overrides.action_query": string
"sys_overrides.action_update": string
"sys_overrides.active": string
"sys_overrides.add_message": string
"sys_overrides.advanced": string
"sys_overrides.change_fields": string
"sys_overrides.client_callable": string
"sys_overrides.collection": string
"sys_overrides.condition": string
"sys_overrides.description": string
"sys_overrides.execute_function": string
"sys_overrides.filter_condition": string
"sys_overrides.is_rest": string
"sys_overrides.message": string
"sys_overrides.name": string
"sys_overrides.order": string
"sys_overrides.priority": string
"sys_overrides.rest_method": string
"sys_overrides.rest_method_text": string
"sys_overrides.rest_service": string
"sys_overrides.rest_service_text": string
"sys_overrides.rest_variables": string
"sys_overrides.role_conditions": string
"sys_overrides.script": string
"sys_overrides.sys_domain": string
"sys_overrides.sys_domain_path": string
"sys_overrides.sys_id": string
"sys_overrides.sys_overrides": string
"sys_overrides.template": string
"sys_overrides.when": string
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
   