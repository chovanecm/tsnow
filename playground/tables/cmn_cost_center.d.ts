declare interface cmn_cost_center {
      account_number: GlideElement<cmn_cost_center, glideElementType.defaultType>;
code: GlideElement<cmn_cost_center, glideElementType.defaultType>;
location: GlideElement<cmn_cost_center, glideElementType.g_reference<cmn_location>>;
manager: GlideElement<cmn_cost_center, glideElementType.g_reference<sys_user>>;
name: GlideElement<cmn_cost_center, glideElementType.defaultType>;
parent: GlideElement<cmn_cost_center, glideElementType.g_reference<cmn_cost_center>>;
sys_created_by: GlideElement<cmn_cost_center, glideElementType.defaultType>;
sys_created_on: GlideElement<cmn_cost_center, glideElementType.g_glide_date_time>;
sys_id: GlideElement<cmn_cost_center, glideElementType.defaultType>;
sys_mod_count: GlideElement<cmn_cost_center, glideElementType.defaultType>;
sys_updated_by: GlideElement<cmn_cost_center, glideElementType.defaultType>;
sys_updated_on: GlideElement<cmn_cost_center, glideElementType.g_glide_date_time>;
valid_from: GlideElement<cmn_cost_center, glideElementType.g_glide_date_time>;
valid_to: GlideElement<cmn_cost_center, glideElementType.g_glide_date_time>;
      _referenceKeys: never | {
        "location.city": string
"location.company": string
"location.contact": string
"location.country": string
"location.fax_phone": string
"location.full_name": string
"location.latitude": string
"location.lat_long_error": string
"location.longitude": string
"location.name": string
"location.parent": string
"location.phone": string
"location.phone_territory": string
"location.state": string
"location.stock_room": string
"location.street": string
"location.sys_created_by": string
"location.sys_created_on": string
"location.sys_id": string
"location.sys_mod_count": string
"location.sys_updated_by": string
"location.sys_updated_on": string
"location.time_zone": string
"location.zip": string
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
"parent.account_number": string
"parent.code": string
"parent.location": string
"parent.manager": string
"parent.name": string
"parent.parent": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.valid_from": string
"parent.valid_to": string;
      }
    }
   