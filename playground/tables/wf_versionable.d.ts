declare interface wf_versionable {
      checked_out: GlideElement<wf_versionable, glideElementType.g_glide_date_time>;
checked_out_by: GlideElement<wf_versionable, glideElementType.g_reference<sys_user>>;
published: GlideElement<wf_versionable, glideElementType.g_boolean>;
sys_created_by: GlideElement<wf_versionable, glideElementType.defaultType>;
sys_created_on: GlideElement<wf_versionable, glideElementType.g_glide_date_time>;
sys_id: GlideElement<wf_versionable, glideElementType.defaultType>;
sys_mod_count: GlideElement<wf_versionable, glideElementType.defaultType>;
sys_updated_by: GlideElement<wf_versionable, glideElementType.defaultType>;
sys_updated_on: GlideElement<wf_versionable, glideElementType.g_glide_date_time>;
valid_from: GlideElement<wf_versionable, glideElementType.g_glide_date_time>;
valid_to: GlideElement<wf_versionable, glideElementType.g_glide_date_time>;
version: GlideElement<wf_versionable, glideElementType.defaultType>;
version_container_id: GlideElement<wf_versionable, glideElementType.defaultType>;
wf_element_definition: GlideElement<wf_versionable, glideElementType.g_reference<wf_element_definition>>;
      _referenceKeys: never | {
        "checked_out_by.accumulated_roles": string
"checked_out_by.active": string
"checked_out_by.avatar": string
"checked_out_by.building": string
"checked_out_by.calendar_integration": string
"checked_out_by.city": string
"checked_out_by.company": string
"checked_out_by.cost_center": string
"checked_out_by.country": string
"checked_out_by.date_format": string
"checked_out_by.default_perspective": string
"checked_out_by.department": string
"checked_out_by.email": string
"checked_out_by.employee_number": string
"checked_out_by.enable_multifactor_authn": string
"checked_out_by.failed_attempts": string
"checked_out_by.first_name": string
"checked_out_by.gender": string
"checked_out_by.home_phone": string
"checked_out_by.internal_integration_user": string
"checked_out_by.introduction": string
"checked_out_by.last_login": string
"checked_out_by.last_login_time": string
"checked_out_by.last_name": string
"checked_out_by.ldap_server": string
"checked_out_by.location": string
"checked_out_by.locked_out": string
"checked_out_by.manager": string
"checked_out_by.middle_name": string
"checked_out_by.mobile_phone": string
"checked_out_by.name": string
"checked_out_by.notification": string
"checked_out_by.password_needs_reset": string
"checked_out_by.phone": string
"checked_out_by.photo": string
"checked_out_by.preferred_language": string
"checked_out_by.roles": string
"checked_out_by.schedule": string
"checked_out_by.source": string
"checked_out_by.state": string
"checked_out_by.street": string
"checked_out_by.sys_class_name": string
"checked_out_by.sys_created_by": string
"checked_out_by.sys_created_on": string
"checked_out_by.sys_domain": string
"checked_out_by.sys_domain_path": string
"checked_out_by.sys_id": string
"checked_out_by.sys_mod_count": string
"checked_out_by.sys_updated_by": string
"checked_out_by.sys_updated_on": string
"checked_out_by.time_format": string
"checked_out_by.time_zone": string
"checked_out_by.title": string
"checked_out_by.user_name": string
"checked_out_by.user_password": string
"checked_out_by.vip": string
"checked_out_by.web_service_access_only": string
"checked_out_by.zip": string
"wf_element_definition.access": string
"wf_element_definition.attributes": string
"wf_element_definition.base_provider": string
"wf_element_definition.category": string
"wf_element_definition.default_height": string
"wf_element_definition.default_width": string
"wf_element_definition.description": string
"wf_element_definition.image": string
"wf_element_definition.name": string
"wf_element_definition.style": string
"wf_element_definition.sys_id": string
"wf_element_definition.version_container_id": string
"wf_element_definition.sys_class_name": string
"wf_element_definition.sys_created_by": string
"wf_element_definition.sys_created_on": string
"wf_element_definition.sys_mod_count": string
"wf_element_definition.sys_name": string
"wf_element_definition.sys_package": string
"wf_element_definition.sys_policy": string
"wf_element_definition.sys_scope": string
"wf_element_definition.sys_updated_by": string
"wf_element_definition.sys_updated_on": string
"wf_element_definition.sys_update_name": string;
      }
    }
   