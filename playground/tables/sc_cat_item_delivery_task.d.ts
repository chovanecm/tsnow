declare interface sc_cat_item_delivery_task {
      assigned_to: GlideElement<sc_cat_item_delivery_task, glideElementType.g_reference<sys_user>>;
condition: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
condition_script: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
delivery_plan: GlideElement<sc_cat_item_delivery_task, glideElementType.g_reference<sc_cat_item_delivery_plan>>;
delivery_time: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
generation_script: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
group: GlideElement<sc_cat_item_delivery_task, glideElementType.g_reference<sys_user_group>>;
instructions: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
name: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
order: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
short_description: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sla: GlideElement<sc_cat_item_delivery_task, glideElementType.g_reference<sysrule_escalate>>;
sys_id: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
work_notes: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sys_class_name: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sys_created_by: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sys_created_on: GlideElement<sc_cat_item_delivery_task, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sys_name: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sys_package: GlideElement<sc_cat_item_delivery_task, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sys_scope: GlideElement<sc_cat_item_delivery_task, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
sys_updated_on: GlideElement<sc_cat_item_delivery_task, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sc_cat_item_delivery_task, glideElementType.defaultType>;
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
"delivery_plan.active": string
"delivery_plan.advanced": string
"delivery_plan.calendar": string
"delivery_plan.condition": string
"delivery_plan.name": string
"delivery_plan.order": string
"delivery_plan.parent_table": string
"delivery_plan.script": string
"delivery_plan.short_description": string
"delivery_plan.sys_id": string
"delivery_plan.task_table": string
"delivery_plan.total_delivery_time": string
"delivery_plan.sys_class_name": string
"delivery_plan.sys_created_by": string
"delivery_plan.sys_created_on": string
"delivery_plan.sys_mod_count": string
"delivery_plan.sys_name": string
"delivery_plan.sys_package": string
"delivery_plan.sys_policy": string
"delivery_plan.sys_scope": string
"delivery_plan.sys_updated_by": string
"delivery_plan.sys_updated_on": string
"delivery_plan.sys_update_name": string
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
"sla.advanced_condition": string
"sla.assignment_script": string
"sla.calendar": string
"sla.condition": string
"sla.pause_condition": string
"sla.reset_condition": string
"sla.sys_id": string
"sla.table": string
"sla.threshold": string
"sla.description": string
"sla.name": string
"sla.order": string
"sla.sys_domain": string
"sla.sys_domain_path": string
"sla.sys_overrides": string
"sla.sys_class_name": string
"sla.sys_created_by": string
"sla.sys_created_on": string
"sla.sys_mod_count": string
"sla.sys_name": string
"sla.sys_package": string
"sla.sys_policy": string
"sla.sys_scope": string
"sla.sys_updated_by": string
"sla.sys_updated_on": string
"sla.sys_update_name": string
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
   