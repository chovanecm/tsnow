declare interface sys_rest_message_fn {
      authentication_type: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
basic_auth_password: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
basic_auth_profile: GlideElement<sys_rest_message_fn, glideElementType.g_reference<sys_auth_profile_basic>>;
basic_auth_user: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
content: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
function_name: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
http_method: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
lock: GlideElement<sys_rest_message_fn, glideElementType.g_boolean>;
oauth2_profile: GlideElement<sys_rest_message_fn, glideElementType.g_reference<oauth_entity_profile>>;
protocol_name: GlideElement<sys_rest_message_fn, glideElementType.g_reference<sys_protocol_profile>>;
qualified_name: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
rest_endpoint: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
rest_message: GlideElement<sys_rest_message_fn, glideElementType.g_reference<sys_rest_message>>;
sys_id: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
use_basic_auth: GlideElement<sys_rest_message_fn, glideElementType.g_boolean>;
use_mid_server: GlideElement<sys_rest_message_fn, glideElementType.g_reference<ecc_agent>>;
use_mutual_auth: GlideElement<sys_rest_message_fn, glideElementType.g_boolean>;
sys_class_name: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_rest_message_fn, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
sys_name: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
sys_package: GlideElement<sys_rest_message_fn, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
sys_scope: GlideElement<sys_rest_message_fn, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_rest_message_fn, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_rest_message_fn, glideElementType.defaultType>;
      _referenceKeys: never | {
        "basic_auth_profile.password": string
"basic_auth_profile.sys_id": string
"basic_auth_profile.username": string
"basic_auth_profile.name": string
"basic_auth_profile.sys_class_name": string
"basic_auth_profile.sys_created_by": string
"basic_auth_profile.sys_created_on": string
"basic_auth_profile.sys_mod_count": string
"basic_auth_profile.sys_name": string
"basic_auth_profile.sys_package": string
"basic_auth_profile.sys_policy": string
"basic_auth_profile.sys_scope": string
"basic_auth_profile.sys_updated_by": string
"basic_auth_profile.sys_updated_on": string
"basic_auth_profile.sys_update_name": string
"oauth2_profile.default": string
"oauth2_profile.grant_type": string
"oauth2_profile.jwt_provider": string
"oauth2_profile.name": string
"oauth2_profile.oauth_entity": string
"oauth2_profile.sys_id": string
"oauth2_profile.sys_class_name": string
"oauth2_profile.sys_created_by": string
"oauth2_profile.sys_created_on": string
"oauth2_profile.sys_mod_count": string
"oauth2_profile.sys_name": string
"oauth2_profile.sys_package": string
"oauth2_profile.sys_policy": string
"oauth2_profile.sys_scope": string
"oauth2_profile.sys_updated_by": string
"oauth2_profile.sys_updated_on": string
"oauth2_profile.sys_update_name": string
"protocol_name.default_port": string
"protocol_name.keystore": string
"protocol_name.protocol": string
"protocol_name.sys_created_by": string
"protocol_name.sys_created_on": string
"protocol_name.sys_id": string
"protocol_name.sys_mod_count": string
"protocol_name.sys_updated_by": string
"protocol_name.sys_updated_on": string
"rest_message.access": string
"rest_message.authentication_type": string
"rest_message.basic_auth_password": string
"rest_message.basic_auth_profile": string
"rest_message.basic_auth_user": string
"rest_message.description": string
"rest_message.name": string
"rest_message.oauth2_profile": string
"rest_message.protocol_name": string
"rest_message.rest_endpoint": string
"rest_message.sys_id": string
"rest_message.use_basic_auth": string
"rest_message.use_mutual_auth": string
"rest_message.sys_class_name": string
"rest_message.sys_created_by": string
"rest_message.sys_created_on": string
"rest_message.sys_mod_count": string
"rest_message.sys_name": string
"rest_message.sys_package": string
"rest_message.sys_policy": string
"rest_message.sys_scope": string
"rest_message.sys_updated_by": string
"rest_message.sys_updated_on": string
"rest_message.sys_update_name": string
"use_mid_server.home_dir": string
"use_mid_server.host_cpu_core_count": string
"use_mid_server.host_cpu_speed": string
"use_mid_server.host_disk_size": string
"use_mid_server.host_disk_size_bytes": string
"use_mid_server.host_glibc_version": string
"use_mid_server.host_hyperthreading": string
"use_mid_server.host_name": string
"use_mid_server.host_os_address_width": string
"use_mid_server.host_os_distribution": string
"use_mid_server.host_os_version": string
"use_mid_server.host_powershell_version": string
"use_mid_server.host_total_ram": string
"use_mid_server.host_type": string
"use_mid_server.ip_address": string
"use_mid_server.jvm_version": string
"use_mid_server.last_refreshed": string
"use_mid_server.mid_java_command_dir": string
"use_mid_server.mid_maximum_ram": string
"use_mid_server.name": string
"use_mid_server.network": string
"use_mid_server.nmap_version": string
"use_mid_server.public_key": string
"use_mid_server.router": string
"use_mid_server.started": string
"use_mid_server.status": string
"use_mid_server.stopped": string
"use_mid_server.sys_created_by": string
"use_mid_server.sys_created_on": string
"use_mid_server.sys_domain": string
"use_mid_server.sys_domain_path": string
"use_mid_server.sys_id": string
"use_mid_server.sys_mod_count": string
"use_mid_server.sys_updated_by": string
"use_mid_server.sys_updated_on": string
"use_mid_server.unresolved_issues": string
"use_mid_server.user_name": string
"use_mid_server.validated": string
"use_mid_server.version": string
"use_mid_server.win_domain": string
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
   