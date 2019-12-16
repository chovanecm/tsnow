declare interface clm_condition_checker {
      compliant: GlideElement<clm_condition_checker, glideElementType.g_boolean>;
condition: GlideElement<clm_condition_checker, glideElementType.defaultType>;
condition_check: GlideElement<clm_condition_checker, glideElementType.g_reference<clm_condition_check>>;
event_name: GlideElement<clm_condition_checker, glideElementType.defaultType>;
name: GlideElement<clm_condition_checker, glideElementType.defaultType>;
order: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_domain: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_domain_path: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_id: GlideElement<clm_condition_checker, glideElementType.defaultType>;
table: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_class_name: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_created_by: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_created_on: GlideElement<clm_condition_checker, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_name: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_package: GlideElement<clm_condition_checker, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_scope: GlideElement<clm_condition_checker, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<clm_condition_checker, glideElementType.defaultType>;
sys_updated_on: GlideElement<clm_condition_checker, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<clm_condition_checker, glideElementType.defaultType>;
      _referenceKeys: never | {
        "condition_check.category": string
"condition_check.condition_field": string
"condition_check.event_name": string
"condition_check.order": string
"condition_check.sys_domain": string
"condition_check.sys_domain_path": string
"condition_check.sys_id": string
"condition_check.table": string
"condition_check.sys_class_name": string
"condition_check.sys_created_by": string
"condition_check.sys_created_on": string
"condition_check.sys_mod_count": string
"condition_check.sys_name": string
"condition_check.sys_package": string
"condition_check.sys_policy": string
"condition_check.sys_scope": string
"condition_check.sys_updated_by": string
"condition_check.sys_updated_on": string
"condition_check.sys_update_name": string
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
   