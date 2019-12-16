declare interface oauth_entity {
      access: GlideElement<oauth_entity, glideElementType.defaultType>;
access_token_lifespan: GlideElement<oauth_entity, glideElementType.defaultType>;
active: GlideElement<oauth_entity, glideElementType.g_boolean>;
auth_code_lifespan: GlideElement<oauth_entity, glideElementType.defaultType>;
auth_url: GlideElement<oauth_entity, glideElementType.defaultType>;
certificate_url: GlideElement<oauth_entity, glideElementType.defaultType>;
client_id: GlideElement<oauth_entity, glideElementType.defaultType>;
client_secret: GlideElement<oauth_entity, glideElementType.defaultType>;
client_uuid: GlideElement<oauth_entity, glideElementType.defaultType>;
code_challenge_method: GlideElement<oauth_entity, glideElementType.g_choice<string>>;
comments: GlideElement<oauth_entity, glideElementType.defaultType>;
default_grant_type: GlideElement<oauth_entity, glideElementType.g_choice<string>>;
id_token_lifespan: GlideElement<oauth_entity, glideElementType.defaultType>;
logo_url: GlideElement<oauth_entity, glideElementType.defaultType>;
message_signature_lifespan: GlideElement<oauth_entity, glideElementType.defaultType>;
name: GlideElement<oauth_entity, glideElementType.defaultType>;
oauth_api_script: GlideElement<oauth_entity, glideElementType.g_reference<sys_script_include>>;
protocol_name: GlideElement<oauth_entity, glideElementType.g_reference<sys_protocol_profile>>;
public_client: GlideElement<oauth_entity, glideElementType.g_boolean>;
redirect_url: GlideElement<oauth_entity, glideElementType.defaultType>;
refresh_token_lifespan: GlideElement<oauth_entity, glideElementType.defaultType>;
refresh_token_url: GlideElement<oauth_entity, glideElementType.defaultType>;
revoke_token_url: GlideElement<oauth_entity, glideElementType.defaultType>;
salt: GlideElement<oauth_entity, glideElementType.defaultType>;
send_client_credentials_as: GlideElement<oauth_entity, glideElementType.g_choice<string>>;
skip_authorize: GlideElement<oauth_entity, glideElementType.g_boolean>;
sys_id: GlideElement<oauth_entity, glideElementType.defaultType>;
token_url: GlideElement<oauth_entity, glideElementType.defaultType>;
type: GlideElement<oauth_entity, glideElementType.defaultType>;
user: GlideElement<oauth_entity, glideElementType.g_reference<sys_user>>;
use_mutual_auth: GlideElement<oauth_entity, glideElementType.g_boolean>;
sys_class_name: GlideElement<oauth_entity, glideElementType.defaultType>;
sys_created_by: GlideElement<oauth_entity, glideElementType.defaultType>;
sys_created_on: GlideElement<oauth_entity, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<oauth_entity, glideElementType.defaultType>;
sys_name: GlideElement<oauth_entity, glideElementType.defaultType>;
sys_package: GlideElement<oauth_entity, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<oauth_entity, glideElementType.defaultType>;
sys_scope: GlideElement<oauth_entity, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<oauth_entity, glideElementType.defaultType>;
sys_updated_on: GlideElement<oauth_entity, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<oauth_entity, glideElementType.defaultType>;
      _referenceKeys: never | {
        "oauth_api_script.access": string
"oauth_api_script.active": string
"oauth_api_script.api_name": string
"oauth_api_script.caller_access": string
"oauth_api_script.client_callable": string
"oauth_api_script.description": string
"oauth_api_script.name": string
"oauth_api_script.script": string
"oauth_api_script.sys_id": string
"oauth_api_script.sys_class_name": string
"oauth_api_script.sys_created_by": string
"oauth_api_script.sys_created_on": string
"oauth_api_script.sys_mod_count": string
"oauth_api_script.sys_name": string
"oauth_api_script.sys_package": string
"oauth_api_script.sys_policy": string
"oauth_api_script.sys_scope": string
"oauth_api_script.sys_updated_by": string
"oauth_api_script.sys_updated_on": string
"oauth_api_script.sys_update_name": string
"protocol_name.default_port": string
"protocol_name.keystore": string
"protocol_name.protocol": string
"protocol_name.sys_created_by": string
"protocol_name.sys_created_on": string
"protocol_name.sys_id": string
"protocol_name.sys_mod_count": string
"protocol_name.sys_updated_by": string
"protocol_name.sys_updated_on": string
"user.accumulated_roles": string
"user.active": string
"user.avatar": string
"user.building": string
"user.calendar_integration": string
"user.city": string
"user.company": string
"user.cost_center": string
"user.country": string
"user.date_format": string
"user.default_perspective": string
"user.department": string
"user.email": string
"user.employee_number": string
"user.enable_multifactor_authn": string
"user.failed_attempts": string
"user.first_name": string
"user.gender": string
"user.home_phone": string
"user.internal_integration_user": string
"user.introduction": string
"user.last_login": string
"user.last_login_time": string
"user.last_name": string
"user.ldap_server": string
"user.location": string
"user.locked_out": string
"user.manager": string
"user.middle_name": string
"user.mobile_phone": string
"user.name": string
"user.notification": string
"user.password_needs_reset": string
"user.phone": string
"user.photo": string
"user.preferred_language": string
"user.roles": string
"user.schedule": string
"user.source": string
"user.state": string
"user.street": string
"user.sys_class_name": string
"user.sys_created_by": string
"user.sys_created_on": string
"user.sys_domain": string
"user.sys_domain_path": string
"user.sys_id": string
"user.sys_mod_count": string
"user.sys_updated_by": string
"user.sys_updated_on": string
"user.time_format": string
"user.time_zone": string
"user.title": string
"user.user_name": string
"user.user_password": string
"user.vip": string
"user.web_service_access_only": string
"user.zip": string
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
   