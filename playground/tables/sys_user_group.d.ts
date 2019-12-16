declare interface sys_user_group {
      active: GlideElement<sys_user_group, glideElementType.g_boolean>;
cost_center: GlideElement<sys_user_group, glideElementType.g_reference<cmn_cost_center>>;
default_assignee: GlideElement<sys_user_group, glideElementType.g_reference<sys_user>>;
description: GlideElement<sys_user_group, glideElementType.defaultType>;
email: GlideElement<sys_user_group, glideElementType.defaultType>;
exclude_manager: GlideElement<sys_user_group, glideElementType.g_boolean>;
include_members: GlideElement<sys_user_group, glideElementType.g_boolean>;
manager: GlideElement<sys_user_group, glideElementType.g_reference<sys_user>>;
name: GlideElement<sys_user_group, glideElementType.defaultType>;
parent: GlideElement<sys_user_group, glideElementType.g_reference<sys_user_group>>;
roles: GlideElement<sys_user_group, glideElementType.defaultType>;
source: GlideElement<sys_user_group, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_user_group, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_user_group, glideElementType.g_glide_date_time>;
sys_id: GlideElement<sys_user_group, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_user_group, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_user_group, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_user_group, glideElementType.g_glide_date_time>;
type: GlideElement<sys_user_group, glideElementType.defaultType>;
      _referenceKeys: never | {
        "cost_center.account_number": string
"cost_center.code": string
"cost_center.location": string
"cost_center.manager": string
"cost_center.name": string
"cost_center.parent": string
"cost_center.sys_created_by": string
"cost_center.sys_created_on": string
"cost_center.sys_id": string
"cost_center.sys_mod_count": string
"cost_center.sys_updated_by": string
"cost_center.sys_updated_on": string
"cost_center.valid_from": string
"cost_center.valid_to": string
"default_assignee.accumulated_roles": string
"default_assignee.active": string
"default_assignee.avatar": string
"default_assignee.building": string
"default_assignee.calendar_integration": string
"default_assignee.city": string
"default_assignee.company": string
"default_assignee.cost_center": string
"default_assignee.country": string
"default_assignee.date_format": string
"default_assignee.default_perspective": string
"default_assignee.department": string
"default_assignee.email": string
"default_assignee.employee_number": string
"default_assignee.enable_multifactor_authn": string
"default_assignee.failed_attempts": string
"default_assignee.first_name": string
"default_assignee.gender": string
"default_assignee.home_phone": string
"default_assignee.internal_integration_user": string
"default_assignee.introduction": string
"default_assignee.last_login": string
"default_assignee.last_login_time": string
"default_assignee.last_name": string
"default_assignee.ldap_server": string
"default_assignee.location": string
"default_assignee.locked_out": string
"default_assignee.manager": string
"default_assignee.middle_name": string
"default_assignee.mobile_phone": string
"default_assignee.name": string
"default_assignee.notification": string
"default_assignee.password_needs_reset": string
"default_assignee.phone": string
"default_assignee.photo": string
"default_assignee.preferred_language": string
"default_assignee.roles": string
"default_assignee.schedule": string
"default_assignee.source": string
"default_assignee.state": string
"default_assignee.street": string
"default_assignee.sys_class_name": string
"default_assignee.sys_created_by": string
"default_assignee.sys_created_on": string
"default_assignee.sys_domain": string
"default_assignee.sys_domain_path": string
"default_assignee.sys_id": string
"default_assignee.sys_mod_count": string
"default_assignee.sys_updated_by": string
"default_assignee.sys_updated_on": string
"default_assignee.time_format": string
"default_assignee.time_zone": string
"default_assignee.title": string
"default_assignee.user_name": string
"default_assignee.user_password": string
"default_assignee.vip": string
"default_assignee.web_service_access_only": string
"default_assignee.zip": string
"manager.accumulated_roles": string
"manager.active": string
"manager.avatar": string
"manager.building": string
"manager.calendar_integration": string
"manager.city": string
"manager.company": string
"manager.cost_center": string
"manager.country": string
"manager.date_format": string
"manager.default_perspective": string
"manager.department": string
"manager.email": string
"manager.employee_number": string
"manager.enable_multifactor_authn": string
"manager.failed_attempts": string
"manager.first_name": string
"manager.gender": string
"manager.home_phone": string
"manager.internal_integration_user": string
"manager.introduction": string
"manager.last_login": string
"manager.last_login_time": string
"manager.last_name": string
"manager.ldap_server": string
"manager.location": string
"manager.locked_out": string
"manager.manager": string
"manager.middle_name": string
"manager.mobile_phone": string
"manager.name": string
"manager.notification": string
"manager.password_needs_reset": string
"manager.phone": string
"manager.photo": string
"manager.preferred_language": string
"manager.roles": string
"manager.schedule": string
"manager.source": string
"manager.state": string
"manager.street": string
"manager.sys_class_name": string
"manager.sys_created_by": string
"manager.sys_created_on": string
"manager.sys_domain": string
"manager.sys_domain_path": string
"manager.sys_id": string
"manager.sys_mod_count": string
"manager.sys_updated_by": string
"manager.sys_updated_on": string
"manager.time_format": string
"manager.time_zone": string
"manager.title": string
"manager.user_name": string
"manager.user_password": string
"manager.vip": string
"manager.web_service_access_only": string
"manager.zip": string
"parent.active": string
"parent.cost_center": string
"parent.default_assignee": string
"parent.description": string
"parent.email": string
"parent.exclude_manager": string
"parent.include_members": string
"parent.manager": string
"parent.name": string
"parent.parent": string
"parent.roles": string
"parent.source": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.type": string;
      }
    }
   