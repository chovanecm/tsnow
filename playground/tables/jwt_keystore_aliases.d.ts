declare interface jwt_keystore_aliases {
      active: GlideElement<jwt_keystore_aliases, glideElementType.g_boolean>;
certificate_thumbprint: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
expiry: GlideElement<jwt_keystore_aliases, glideElementType.g_glide_date_time>;
kid: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
name: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
signing_algorithm: GlideElement<jwt_keystore_aliases, glideElementType.g_choice<string>>;
signing_keystore: GlideElement<jwt_keystore_aliases, glideElementType.g_reference<sys_certificate>>;
signing_key_password: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_id: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_class_name: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_created_by: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_created_on: GlideElement<jwt_keystore_aliases, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_name: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_package: GlideElement<jwt_keystore_aliases, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_scope: GlideElement<jwt_keystore_aliases, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
sys_updated_on: GlideElement<jwt_keystore_aliases, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<jwt_keystore_aliases, glideElementType.defaultType>;
      _referenceKeys: never | {
        "signing_keystore.active": string
"signing_keystore.expiration_notification": string
"signing_keystore.expires": string
"signing_keystore.expires_in_days": string
"signing_keystore.format": string
"signing_keystore.issuer": string
"signing_keystore.key_store_password": string
"signing_keystore.name": string
"signing_keystore.notify_on_expiration": string
"signing_keystore.pem_certificate": string
"signing_keystore.short_description": string
"signing_keystore.subject": string
"signing_keystore.sys_created_by": string
"signing_keystore.sys_created_on": string
"signing_keystore.sys_id": string
"signing_keystore.sys_mod_count": string
"signing_keystore.sys_updated_by": string
"signing_keystore.sys_updated_on": string
"signing_keystore.type": string
"signing_keystore.valid_from": string
"signing_keystore.warn_in_days_to_expire": string
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
   