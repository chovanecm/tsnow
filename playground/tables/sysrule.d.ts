declare interface sysrule {
      description: GlideElement<sysrule, glideElementType.defaultType>;
name: GlideElement<sysrule, glideElementType.defaultType>;
order: GlideElement<sysrule, glideElementType.defaultType>;
sys_domain: GlideElement<sysrule, glideElementType.defaultType>;
sys_domain_path: GlideElement<sysrule, glideElementType.defaultType>;
sys_id: GlideElement<sysrule, glideElementType.defaultType>;
sys_overrides: GlideElement<sysrule, glideElementType.g_reference<sysrule>>;
sys_class_name: GlideElement<sysrule, glideElementType.defaultType>;
sys_created_by: GlideElement<sysrule, glideElementType.defaultType>;
sys_created_on: GlideElement<sysrule, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sysrule, glideElementType.defaultType>;
sys_name: GlideElement<sysrule, glideElementType.defaultType>;
sys_package: GlideElement<sysrule, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sysrule, glideElementType.defaultType>;
sys_scope: GlideElement<sysrule, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sysrule, glideElementType.defaultType>;
sys_updated_on: GlideElement<sysrule, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sysrule, glideElementType.defaultType>;
      _referenceKeys: never | {
        "sys_overrides.description": string
"sys_overrides.name": string
"sys_overrides.order": string
"sys_overrides.sys_domain": string
"sys_overrides.sys_domain_path": string
"sys_overrides.sys_id": string
"sys_overrides.sys_overrides": string
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
   