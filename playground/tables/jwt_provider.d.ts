declare interface jwt_provider {
      expiry_interval: GlideElement<jwt_provider, glideElementType.defaultType>;
jwt_api_script: GlideElement<jwt_provider, glideElementType.g_reference<sys_script_include>>;
jwt_keystore_alias: GlideElement<jwt_provider, glideElementType.g_reference<jwt_keystore_aliases>>;
name: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_id: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_class_name: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_created_by: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_created_on: GlideElement<jwt_provider, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_name: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_package: GlideElement<jwt_provider, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_scope: GlideElement<jwt_provider, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<jwt_provider, glideElementType.defaultType>;
sys_updated_on: GlideElement<jwt_provider, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<jwt_provider, glideElementType.defaultType>;
      _referenceKeys: never | {
        "jwt_api_script.access": string
"jwt_api_script.active": string
"jwt_api_script.api_name": string
"jwt_api_script.caller_access": string
"jwt_api_script.client_callable": string
"jwt_api_script.description": string
"jwt_api_script.name": string
"jwt_api_script.script": string
"jwt_api_script.sys_id": string
"jwt_api_script.sys_class_name": string
"jwt_api_script.sys_created_by": string
"jwt_api_script.sys_created_on": string
"jwt_api_script.sys_mod_count": string
"jwt_api_script.sys_name": string
"jwt_api_script.sys_package": string
"jwt_api_script.sys_policy": string
"jwt_api_script.sys_scope": string
"jwt_api_script.sys_updated_by": string
"jwt_api_script.sys_updated_on": string
"jwt_api_script.sys_update_name": string
"jwt_keystore_alias.active": string
"jwt_keystore_alias.certificate_thumbprint": string
"jwt_keystore_alias.expiry": string
"jwt_keystore_alias.kid": string
"jwt_keystore_alias.name": string
"jwt_keystore_alias.signing_algorithm": string
"jwt_keystore_alias.signing_keystore": string
"jwt_keystore_alias.signing_key_password": string
"jwt_keystore_alias.sys_id": string
"jwt_keystore_alias.sys_class_name": string
"jwt_keystore_alias.sys_created_by": string
"jwt_keystore_alias.sys_created_on": string
"jwt_keystore_alias.sys_mod_count": string
"jwt_keystore_alias.sys_name": string
"jwt_keystore_alias.sys_package": string
"jwt_keystore_alias.sys_policy": string
"jwt_keystore_alias.sys_scope": string
"jwt_keystore_alias.sys_updated_by": string
"jwt_keystore_alias.sys_updated_on": string
"jwt_keystore_alias.sys_update_name": string
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
   