declare interface wf_element_definition {
      access: GlideElement<wf_element_definition, glideElementType.defaultType>;
attributes: GlideElement<wf_element_definition, glideElementType.defaultType>;
base_provider: GlideElement<wf_element_definition, glideElementType.g_reference<wf_element_provider>>;
category: GlideElement<wf_element_definition, glideElementType.defaultType>;
default_height: GlideElement<wf_element_definition, glideElementType.defaultType>;
default_width: GlideElement<wf_element_definition, glideElementType.defaultType>;
description: GlideElement<wf_element_definition, glideElementType.defaultType>;
image: GlideElement<wf_element_definition, glideElementType.defaultType>;
name: GlideElement<wf_element_definition, glideElementType.defaultType>;
style: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_id: GlideElement<wf_element_definition, glideElementType.defaultType>;
version_container_id: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_class_name: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_created_by: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_created_on: GlideElement<wf_element_definition, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_name: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_package: GlideElement<wf_element_definition, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_scope: GlideElement<wf_element_definition, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<wf_element_definition, glideElementType.defaultType>;
sys_updated_on: GlideElement<wf_element_definition, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<wf_element_definition, glideElementType.defaultType>;
      _referenceKeys: never | {
        "base_provider.default_image": string
"base_provider.name": string
"base_provider.provider": string
"base_provider.sys_created_by": string
"base_provider.sys_created_on": string
"base_provider.sys_id": string
"base_provider.sys_mod_count": string
"base_provider.sys_updated_by": string
"base_provider.sys_updated_on": string
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
   