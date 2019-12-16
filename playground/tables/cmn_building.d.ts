declare interface cmn_building {
      contact: GlideElement<cmn_building, glideElementType.g_reference<sys_user>>;
floors: GlideElement<cmn_building, glideElementType.defaultType>;
location: GlideElement<cmn_building, glideElementType.g_reference<cmn_location>>;
name: GlideElement<cmn_building, glideElementType.defaultType>;
notes: GlideElement<cmn_building, glideElementType.defaultType>;
sys_created_by: GlideElement<cmn_building, glideElementType.defaultType>;
sys_created_on: GlideElement<cmn_building, glideElementType.g_glide_date_time>;
sys_id: GlideElement<cmn_building, glideElementType.defaultType>;
sys_mod_count: GlideElement<cmn_building, glideElementType.defaultType>;
sys_updated_by: GlideElement<cmn_building, glideElementType.defaultType>;
sys_updated_on: GlideElement<cmn_building, glideElementType.g_glide_date_time>;
      _referenceKeys: never | {
        "contact.accumulated_roles": string
"contact.active": string
"contact.avatar": string
"contact.building": string
"contact.calendar_integration": string
"contact.city": string
"contact.company": string
"contact.cost_center": string
"contact.country": string
"contact.date_format": string
"contact.default_perspective": string
"contact.department": string
"contact.email": string
"contact.employee_number": string
"contact.enable_multifactor_authn": string
"contact.failed_attempts": string
"contact.first_name": string
"contact.gender": string
"contact.home_phone": string
"contact.internal_integration_user": string
"contact.introduction": string
"contact.last_login": string
"contact.last_login_time": string
"contact.last_name": string
"contact.ldap_server": string
"contact.location": string
"contact.locked_out": string
"contact.manager": string
"contact.middle_name": string
"contact.mobile_phone": string
"contact.name": string
"contact.notification": string
"contact.password_needs_reset": string
"contact.phone": string
"contact.photo": string
"contact.preferred_language": string
"contact.roles": string
"contact.schedule": string
"contact.source": string
"contact.state": string
"contact.street": string
"contact.sys_class_name": string
"contact.sys_created_by": string
"contact.sys_created_on": string
"contact.sys_domain": string
"contact.sys_domain_path": string
"contact.sys_id": string
"contact.sys_mod_count": string
"contact.sys_updated_by": string
"contact.sys_updated_on": string
"contact.time_format": string
"contact.time_zone": string
"contact.title": string
"contact.user_name": string
"contact.user_password": string
"contact.vip": string
"contact.web_service_access_only": string
"contact.zip": string
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
"location.zip": string;
      }
    }
   