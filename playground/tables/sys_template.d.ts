declare interface sys_template {
      active: GlideElement<sys_template, glideElementType.g_boolean>;
global: GlideElement<sys_template, glideElementType.g_boolean>;
group: GlideElement<sys_template, glideElementType.g_reference<sys_user_group>>;
link_element: GlideElement<sys_template, glideElementType.defaultType>;
name: GlideElement<sys_template, glideElementType.defaultType>;
next: GlideElement<sys_template, glideElementType.g_reference<sys_template>>;
next_child: GlideElement<sys_template, glideElementType.g_reference<sys_template>>;
roles: GlideElement<sys_template, glideElementType.defaultType>;
short_description: GlideElement<sys_template, glideElementType.defaultType>;
show_on_template_bar: GlideElement<sys_template, glideElementType.g_boolean>;
stand_alone: GlideElement<sys_template, glideElementType.g_boolean>;
sys_id: GlideElement<sys_template, glideElementType.defaultType>;
table: GlideElement<sys_template, glideElementType.defaultType>;
template: GlideElement<sys_template, glideElementType.defaultType>;
user: GlideElement<sys_template, glideElementType.g_reference<sys_user>>;
view: GlideElement<sys_template, glideElementType.defaultType>;
sys_class_name: GlideElement<sys_template, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_template, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_template, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_template, glideElementType.defaultType>;
sys_name: GlideElement<sys_template, glideElementType.defaultType>;
sys_package: GlideElement<sys_template, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_template, glideElementType.defaultType>;
sys_scope: GlideElement<sys_template, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_template, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_template, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_template, glideElementType.defaultType>;
      _referenceKeys: never | {
        "group.active": string
"group.cost_center": string
"group.default_assignee": string
"group.description": string
"group.email": string
"group.exclude_manager": string
"group.include_members": string
"group.manager": string
"group.name": string
"group.parent": string
"group.roles": string
"group.source": string
"group.sys_created_by": string
"group.sys_created_on": string
"group.sys_id": string
"group.sys_mod_count": string
"group.sys_updated_by": string
"group.sys_updated_on": string
"group.type": string
"next.active": string
"next.global": string
"next.group": string
"next.link_element": string
"next.name": string
"next.next": string
"next.next_child": string
"next.roles": string
"next.short_description": string
"next.show_on_template_bar": string
"next.stand_alone": string
"next.sys_id": string
"next.table": string
"next.template": string
"next.user": string
"next.view": string
"next.sys_class_name": string
"next.sys_created_by": string
"next.sys_created_on": string
"next.sys_mod_count": string
"next.sys_name": string
"next.sys_package": string
"next.sys_policy": string
"next.sys_scope": string
"next.sys_updated_by": string
"next.sys_updated_on": string
"next.sys_update_name": string
"next_child.active": string
"next_child.global": string
"next_child.group": string
"next_child.link_element": string
"next_child.name": string
"next_child.next": string
"next_child.next_child": string
"next_child.roles": string
"next_child.short_description": string
"next_child.show_on_template_bar": string
"next_child.stand_alone": string
"next_child.sys_id": string
"next_child.table": string
"next_child.template": string
"next_child.user": string
"next_child.view": string
"next_child.sys_class_name": string
"next_child.sys_created_by": string
"next_child.sys_created_on": string
"next_child.sys_mod_count": string
"next_child.sys_name": string
"next_child.sys_package": string
"next_child.sys_policy": string
"next_child.sys_scope": string
"next_child.sys_updated_by": string
"next_child.sys_updated_on": string
"next_child.sys_update_name": string
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
   