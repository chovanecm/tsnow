declare interface sys_rollback_context {
      active: GlideElement<sys_rollback_context, glideElementType.g_boolean>;
error: GlideElement<sys_rollback_context, glideElementType.defaultType>;
from_version: GlideElement<sys_rollback_context, glideElementType.defaultType>;
last_node_id: GlideElement<sys_rollback_context, glideElementType.g_reference<sys_cluster_state>>;
number: GlideElement<sys_rollback_context, glideElementType.defaultType>;
state: GlideElement<sys_rollback_context, glideElementType.g_choice<string>>;
sys_created_by: GlideElement<sys_rollback_context, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_rollback_context, glideElementType.g_glide_date_time>;
sys_id: GlideElement<sys_rollback_context, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_rollback_context, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_rollback_context, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_rollback_context, glideElementType.g_glide_date_time>;
to_version: GlideElement<sys_rollback_context, glideElementType.defaultType>;
type: GlideElement<sys_rollback_context, glideElementType.g_choice<string>>;
user: GlideElement<sys_rollback_context, glideElementType.g_reference<sys_user>>;
      _referenceKeys: never | {
        "last_node_id.allow_inbound": string
"last_node_id.iostats": string
"last_node_id.most_recent_keys": string
"last_node_id.most_recent_message": string
"last_node_id.node_id": string
"last_node_id.pause_count": string
"last_node_id.ready_to_failover": string
"last_node_id.schedulers": string
"last_node_id.stats": string
"last_node_id.status": string
"last_node_id.system_id": string
"last_node_id.sys_created_by": string
"last_node_id.sys_created_on": string
"last_node_id.sys_id": string
"last_node_id.sys_mod_count": string
"last_node_id.sys_updated_by": string
"last_node_id.sys_updated_on": string
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
"user.zip": string;
      }
    }
   