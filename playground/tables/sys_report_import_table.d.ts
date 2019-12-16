declare interface sys_report_import_table {
      active: GlideElement<sys_report_import_table, glideElementType.g_boolean>;
created_by_user: GlideElement<sys_report_import_table, glideElementType.g_reference<sys_user>>;
expiration_days: GlideElement<sys_report_import_table, glideElementType.defaultType>;
expired: GlideElement<sys_report_import_table, glideElementType.g_boolean>;
expire_on_date: GlideElement<sys_report_import_table, glideElementType.defaultType>;
filename: GlideElement<sys_report_import_table, glideElementType.defaultType>;
name: GlideElement<sys_report_import_table, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_report_import_table, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_report_import_table, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<sys_report_import_table, glideElementType.defaultType>;
sys_domain_path: GlideElement<sys_report_import_table, glideElementType.defaultType>;
sys_id: GlideElement<sys_report_import_table, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_report_import_table, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_report_import_table, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_report_import_table, glideElementType.g_glide_date_time>;
table: GlideElement<sys_report_import_table, glideElementType.defaultType>;
      _referenceKeys: never | {
        "created_by_user.accumulated_roles": string
"created_by_user.active": string
"created_by_user.avatar": string
"created_by_user.building": string
"created_by_user.calendar_integration": string
"created_by_user.city": string
"created_by_user.company": string
"created_by_user.cost_center": string
"created_by_user.country": string
"created_by_user.date_format": string
"created_by_user.default_perspective": string
"created_by_user.department": string
"created_by_user.email": string
"created_by_user.employee_number": string
"created_by_user.enable_multifactor_authn": string
"created_by_user.failed_attempts": string
"created_by_user.first_name": string
"created_by_user.gender": string
"created_by_user.home_phone": string
"created_by_user.internal_integration_user": string
"created_by_user.introduction": string
"created_by_user.last_login": string
"created_by_user.last_login_time": string
"created_by_user.last_name": string
"created_by_user.ldap_server": string
"created_by_user.location": string
"created_by_user.locked_out": string
"created_by_user.manager": string
"created_by_user.middle_name": string
"created_by_user.mobile_phone": string
"created_by_user.name": string
"created_by_user.notification": string
"created_by_user.password_needs_reset": string
"created_by_user.phone": string
"created_by_user.photo": string
"created_by_user.preferred_language": string
"created_by_user.roles": string
"created_by_user.schedule": string
"created_by_user.source": string
"created_by_user.state": string
"created_by_user.street": string
"created_by_user.sys_class_name": string
"created_by_user.sys_created_by": string
"created_by_user.sys_created_on": string
"created_by_user.sys_domain": string
"created_by_user.sys_domain_path": string
"created_by_user.sys_id": string
"created_by_user.sys_mod_count": string
"created_by_user.sys_updated_by": string
"created_by_user.sys_updated_on": string
"created_by_user.time_format": string
"created_by_user.time_zone": string
"created_by_user.title": string
"created_by_user.user_name": string
"created_by_user.user_password": string
"created_by_user.vip": string
"created_by_user.web_service_access_only": string
"created_by_user.zip": string;
      }
    }
   