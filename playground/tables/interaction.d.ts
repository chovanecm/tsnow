declare interface interaction {
      active: GlideElement<interaction, glideElementType.g_boolean>;
assigned_to: GlideElement<interaction, glideElementType.g_reference<sys_user>>;
channel_metadata_document: GlideElement<interaction, glideElementType.defaultType>;
channel_metadata_table: GlideElement<interaction, glideElementType.defaultType>;
closed_at: GlideElement<interaction, glideElementType.g_glide_date_time>;
closed_by: GlideElement<interaction, glideElementType.g_reference<sys_user>>;
context_document: GlideElement<interaction, glideElementType.defaultType>;
context_table: GlideElement<interaction, glideElementType.defaultType>;
direction: GlideElement<interaction, glideElementType.defaultType>;
duration: GlideElement<interaction, glideElementType.defaultType>;
location: GlideElement<interaction, glideElementType.g_reference<cmn_location>>;
number: GlideElement<interaction, glideElementType.defaultType>;
opened_at: GlideElement<interaction, glideElementType.g_glide_date_time>;
opened_for: GlideElement<interaction, glideElementType.g_reference<sys_user>>;
parent: GlideElement<interaction, glideElementType.g_reference<interaction>>;
short_description: GlideElement<interaction, glideElementType.defaultType>;
state: GlideElement<interaction, glideElementType.defaultType>;
sys_class_name: GlideElement<interaction, glideElementType.defaultType>;
sys_created_by: GlideElement<interaction, glideElementType.defaultType>;
sys_created_on: GlideElement<interaction, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<interaction, glideElementType.defaultType>;
sys_domain_path: GlideElement<interaction, glideElementType.defaultType>;
sys_id: GlideElement<interaction, glideElementType.defaultType>;
sys_mod_count: GlideElement<interaction, glideElementType.defaultType>;
sys_updated_by: GlideElement<interaction, glideElementType.defaultType>;
sys_updated_on: GlideElement<interaction, glideElementType.g_glide_date_time>;
transcript: GlideElement<interaction, glideElementType.defaultType>;
type: GlideElement<interaction, glideElementType.defaultType>;
verified: GlideElement<interaction, glideElementType.g_boolean>;
wait_time: GlideElement<interaction, glideElementType.defaultType>;
work_notes: GlideElement<interaction, glideElementType.defaultType>;
      _referenceKeys: never | {
        "assigned_to.accumulated_roles": string
"assigned_to.active": string
"assigned_to.avatar": string
"assigned_to.building": string
"assigned_to.calendar_integration": string
"assigned_to.city": string
"assigned_to.company": string
"assigned_to.cost_center": string
"assigned_to.country": string
"assigned_to.date_format": string
"assigned_to.default_perspective": string
"assigned_to.department": string
"assigned_to.email": string
"assigned_to.employee_number": string
"assigned_to.enable_multifactor_authn": string
"assigned_to.failed_attempts": string
"assigned_to.first_name": string
"assigned_to.gender": string
"assigned_to.home_phone": string
"assigned_to.internal_integration_user": string
"assigned_to.introduction": string
"assigned_to.last_login": string
"assigned_to.last_login_time": string
"assigned_to.last_name": string
"assigned_to.ldap_server": string
"assigned_to.location": string
"assigned_to.locked_out": string
"assigned_to.manager": string
"assigned_to.middle_name": string
"assigned_to.mobile_phone": string
"assigned_to.name": string
"assigned_to.notification": string
"assigned_to.password_needs_reset": string
"assigned_to.phone": string
"assigned_to.photo": string
"assigned_to.preferred_language": string
"assigned_to.roles": string
"assigned_to.schedule": string
"assigned_to.source": string
"assigned_to.state": string
"assigned_to.street": string
"assigned_to.sys_class_name": string
"assigned_to.sys_created_by": string
"assigned_to.sys_created_on": string
"assigned_to.sys_domain": string
"assigned_to.sys_domain_path": string
"assigned_to.sys_id": string
"assigned_to.sys_mod_count": string
"assigned_to.sys_updated_by": string
"assigned_to.sys_updated_on": string
"assigned_to.time_format": string
"assigned_to.time_zone": string
"assigned_to.title": string
"assigned_to.user_name": string
"assigned_to.user_password": string
"assigned_to.vip": string
"assigned_to.web_service_access_only": string
"assigned_to.zip": string
"closed_by.accumulated_roles": string
"closed_by.active": string
"closed_by.avatar": string
"closed_by.building": string
"closed_by.calendar_integration": string
"closed_by.city": string
"closed_by.company": string
"closed_by.cost_center": string
"closed_by.country": string
"closed_by.date_format": string
"closed_by.default_perspective": string
"closed_by.department": string
"closed_by.email": string
"closed_by.employee_number": string
"closed_by.enable_multifactor_authn": string
"closed_by.failed_attempts": string
"closed_by.first_name": string
"closed_by.gender": string
"closed_by.home_phone": string
"closed_by.internal_integration_user": string
"closed_by.introduction": string
"closed_by.last_login": string
"closed_by.last_login_time": string
"closed_by.last_name": string
"closed_by.ldap_server": string
"closed_by.location": string
"closed_by.locked_out": string
"closed_by.manager": string
"closed_by.middle_name": string
"closed_by.mobile_phone": string
"closed_by.name": string
"closed_by.notification": string
"closed_by.password_needs_reset": string
"closed_by.phone": string
"closed_by.photo": string
"closed_by.preferred_language": string
"closed_by.roles": string
"closed_by.schedule": string
"closed_by.source": string
"closed_by.state": string
"closed_by.street": string
"closed_by.sys_class_name": string
"closed_by.sys_created_by": string
"closed_by.sys_created_on": string
"closed_by.sys_domain": string
"closed_by.sys_domain_path": string
"closed_by.sys_id": string
"closed_by.sys_mod_count": string
"closed_by.sys_updated_by": string
"closed_by.sys_updated_on": string
"closed_by.time_format": string
"closed_by.time_zone": string
"closed_by.title": string
"closed_by.user_name": string
"closed_by.user_password": string
"closed_by.vip": string
"closed_by.web_service_access_only": string
"closed_by.zip": string
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
"opened_for.accumulated_roles": string
"opened_for.active": string
"opened_for.avatar": string
"opened_for.building": string
"opened_for.calendar_integration": string
"opened_for.city": string
"opened_for.company": string
"opened_for.cost_center": string
"opened_for.country": string
"opened_for.date_format": string
"opened_for.default_perspective": string
"opened_for.department": string
"opened_for.email": string
"opened_for.employee_number": string
"opened_for.enable_multifactor_authn": string
"opened_for.failed_attempts": string
"opened_for.first_name": string
"opened_for.gender": string
"opened_for.home_phone": string
"opened_for.internal_integration_user": string
"opened_for.introduction": string
"opened_for.last_login": string
"opened_for.last_login_time": string
"opened_for.last_name": string
"opened_for.ldap_server": string
"opened_for.location": string
"opened_for.locked_out": string
"opened_for.manager": string
"opened_for.middle_name": string
"opened_for.mobile_phone": string
"opened_for.name": string
"opened_for.notification": string
"opened_for.password_needs_reset": string
"opened_for.phone": string
"opened_for.photo": string
"opened_for.preferred_language": string
"opened_for.roles": string
"opened_for.schedule": string
"opened_for.source": string
"opened_for.state": string
"opened_for.street": string
"opened_for.sys_class_name": string
"opened_for.sys_created_by": string
"opened_for.sys_created_on": string
"opened_for.sys_domain": string
"opened_for.sys_domain_path": string
"opened_for.sys_id": string
"opened_for.sys_mod_count": string
"opened_for.sys_updated_by": string
"opened_for.sys_updated_on": string
"opened_for.time_format": string
"opened_for.time_zone": string
"opened_for.title": string
"opened_for.user_name": string
"opened_for.user_password": string
"opened_for.vip": string
"opened_for.web_service_access_only": string
"opened_for.zip": string
"parent.active": string
"parent.assigned_to": string
"parent.channel_metadata_document": string
"parent.channel_metadata_table": string
"parent.closed_at": string
"parent.closed_by": string
"parent.context_document": string
"parent.context_table": string
"parent.direction": string
"parent.duration": string
"parent.location": string
"parent.number": string
"parent.opened_at": string
"parent.opened_for": string
"parent.parent": string
"parent.short_description": string
"parent.state": string
"parent.sys_class_name": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_domain": string
"parent.sys_domain_path": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.transcript": string
"parent.type": string
"parent.verified": string
"parent.wait_time": string
"parent.work_notes": string;
      }
    }
   