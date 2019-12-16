declare interface sys_portal_page {
      layout: GlideElement<sys_portal_page, glideElementType.g_reference<sys_ui_macro>>;
order: GlideElement<sys_portal_page, glideElementType.defaultType>;
read_roles: GlideElement<sys_portal_page, glideElementType.defaultType>;
roles: GlideElement<sys_portal_page, glideElementType.defaultType>;
selectable: GlideElement<sys_portal_page, glideElementType.g_boolean>;
sys_domain: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_domain_path: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_id: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_overrides: GlideElement<sys_portal_page, glideElementType.g_reference<sys_portal_page>>;
title: GlideElement<sys_portal_page, glideElementType.defaultType>;
user: GlideElement<sys_portal_page, glideElementType.g_reference<sys_user>>;
view: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_class_name: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_portal_page, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_name: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_package: GlideElement<sys_portal_page, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_scope: GlideElement<sys_portal_page, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_portal_page, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_portal_page, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_portal_page, glideElementType.defaultType>;
      _referenceKeys: never | {
        "layout.active": string
"layout.category": string
"layout.description": string
"layout.media_type": string
"layout.name": string
"layout.scoped_name": string
"layout.sys_id": string
"layout.xml": string
"layout.sys_class_name": string
"layout.sys_created_by": string
"layout.sys_created_on": string
"layout.sys_mod_count": string
"layout.sys_name": string
"layout.sys_package": string
"layout.sys_policy": string
"layout.sys_scope": string
"layout.sys_updated_by": string
"layout.sys_updated_on": string
"layout.sys_update_name": string
"sys_overrides.layout": string
"sys_overrides.order": string
"sys_overrides.read_roles": string
"sys_overrides.roles": string
"sys_overrides.selectable": string
"sys_overrides.sys_domain": string
"sys_overrides.sys_domain_path": string
"sys_overrides.sys_id": string
"sys_overrides.sys_overrides": string
"sys_overrides.title": string
"sys_overrides.user": string
"sys_overrides.view": string
"sys_overrides.sys_class_name": string
"sys_overrides.sys_created_by": string
"sys_overrides.sys_created_on": string
"sys_overrides.sys_mod_count": string
"sys_overrides.sys_name": string
"sys_overrides.sys_package": string
"sys_overrides.sys_policy": string
"sys_overrides.sys_scope": string
"sys_overrides.sys_updated_by": string
"sys_overrides.sys_updated_on": string
"sys_overrides.sys_update_name": string
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
   