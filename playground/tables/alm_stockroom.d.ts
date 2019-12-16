declare interface alm_stockroom {
      assignment_group: GlideElement<alm_stockroom, glideElementType.g_reference<sys_user_group>>;
external: GlideElement<alm_stockroom, glideElementType.g_boolean>;
location: GlideElement<alm_stockroom, glideElementType.g_reference<cmn_location>>;
manager: GlideElement<alm_stockroom, glideElementType.g_reference<sys_user>>;
name: GlideElement<alm_stockroom, glideElementType.defaultType>;
sys_created_by: GlideElement<alm_stockroom, glideElementType.defaultType>;
sys_created_on: GlideElement<alm_stockroom, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<alm_stockroom, glideElementType.defaultType>;
sys_domain_path: GlideElement<alm_stockroom, glideElementType.defaultType>;
sys_id: GlideElement<alm_stockroom, glideElementType.defaultType>;
sys_mod_count: GlideElement<alm_stockroom, glideElementType.defaultType>;
sys_updated_by: GlideElement<alm_stockroom, glideElementType.defaultType>;
sys_updated_on: GlideElement<alm_stockroom, glideElementType.g_glide_date_time>;
type: GlideElement<alm_stockroom, glideElementType.g_reference<alm_stockroom_type>>;
      _referenceKeys: never | {
        "assignment_group.active": string
"assignment_group.cost_center": string
"assignment_group.default_assignee": string
"assignment_group.description": string
"assignment_group.email": string
"assignment_group.exclude_manager": string
"assignment_group.include_members": string
"assignment_group.manager": string
"assignment_group.name": string
"assignment_group.parent": string
"assignment_group.roles": string
"assignment_group.source": string
"assignment_group.sys_created_by": string
"assignment_group.sys_created_on": string
"assignment_group.sys_id": string
"assignment_group.sys_mod_count": string
"assignment_group.sys_updated_by": string
"assignment_group.sys_updated_on": string
"assignment_group.type": string
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
"type.description": string
"type.external": string
"type.name": string
"type.priority": string
"type.shipment_required": string
"type.sys_created_by": string
"type.sys_created_on": string
"type.sys_id": string
"type.sys_mod_count": string
"type.sys_updated_by": string
"type.sys_updated_on": string
"type.value": string;
      }
    }
   