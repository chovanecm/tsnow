declare interface cmn_schedule {
      document: GlideElement<cmn_schedule, glideElementType.defaultType>;
document_key: GlideElement<cmn_schedule, glideElementType.defaultType>;
name: GlideElement<cmn_schedule, glideElementType.defaultType>;
read_only: GlideElement<cmn_schedule, glideElementType.g_boolean>;
sys_id: GlideElement<cmn_schedule, glideElementType.defaultType>;
type: GlideElement<cmn_schedule, glideElementType.defaultType>;
calendar_name: GlideElement<cmn_schedule, glideElementType.defaultType>;
description: GlideElement<cmn_schedule, glideElementType.defaultType>;
is_legacy_schedule: GlideElement<cmn_schedule, glideElementType.g_boolean>;
label: GlideElement<cmn_schedule, glideElementType.defaultType>;
parent: GlideElement<cmn_schedule, glideElementType.g_reference<business_calendar>>;
plural_label: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_domain: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_domain_path: GlideElement<cmn_schedule, glideElementType.defaultType>;
time_zone: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_class_name: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_created_by: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_created_on: GlideElement<cmn_schedule, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_name: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_package: GlideElement<cmn_schedule, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_scope: GlideElement<cmn_schedule, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<cmn_schedule, glideElementType.defaultType>;
sys_updated_on: GlideElement<cmn_schedule, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<cmn_schedule, glideElementType.defaultType>;
      _referenceKeys: never | {
        "parent.calendar_name": string
"parent.description": string
"parent.is_legacy_schedule": string
"parent.label": string
"parent.parent": string
"parent.plural_label": string
"parent.sys_domain": string
"parent.sys_domain_path": string
"parent.sys_id": string
"parent.time_zone": string
"parent.sys_class_name": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_mod_count": string
"parent.sys_name": string
"parent.sys_package": string
"parent.sys_policy": string
"parent.sys_scope": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.sys_update_name": string
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
   