declare interface oauth_entity_profile {
      default: GlideElement<oauth_entity_profile, glideElementType.g_boolean>;
grant_type: GlideElement<oauth_entity_profile, glideElementType.g_choice<string>>;
jwt_provider: GlideElement<oauth_entity_profile, glideElementType.g_reference<jwt_provider>>;
name: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
oauth_entity: GlideElement<oauth_entity_profile, glideElementType.g_reference<oauth_entity>>;
sys_id: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
sys_class_name: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
sys_created_by: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
sys_created_on: GlideElement<oauth_entity_profile, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
sys_name: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
sys_package: GlideElement<oauth_entity_profile, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
sys_scope: GlideElement<oauth_entity_profile, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
sys_updated_on: GlideElement<oauth_entity_profile, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<oauth_entity_profile, glideElementType.defaultType>;
      _referenceKeys: never | {
        "jwt_provider.expiry_interval": string
"jwt_provider.jwt_api_script": string
"jwt_provider.jwt_keystore_alias": string
"jwt_provider.name": string
"jwt_provider.sys_id": string
"jwt_provider.sys_class_name": string
"jwt_provider.sys_created_by": string
"jwt_provider.sys_created_on": string
"jwt_provider.sys_mod_count": string
"jwt_provider.sys_name": string
"jwt_provider.sys_package": string
"jwt_provider.sys_policy": string
"jwt_provider.sys_scope": string
"jwt_provider.sys_updated_by": string
"jwt_provider.sys_updated_on": string
"jwt_provider.sys_update_name": string
"oauth_entity.access": string
"oauth_entity.access_token_lifespan": string
"oauth_entity.active": string
"oauth_entity.auth_code_lifespan": string
"oauth_entity.auth_url": string
"oauth_entity.certificate_url": string
"oauth_entity.client_id": string
"oauth_entity.client_secret": string
"oauth_entity.client_uuid": string
"oauth_entity.code_challenge_method": string
"oauth_entity.comments": string
"oauth_entity.default_grant_type": string
"oauth_entity.id_token_lifespan": string
"oauth_entity.logo_url": string
"oauth_entity.message_signature_lifespan": string
"oauth_entity.name": string
"oauth_entity.oauth_api_script": string
"oauth_entity.protocol_name": string
"oauth_entity.public_client": string
"oauth_entity.redirect_url": string
"oauth_entity.refresh_token_lifespan": string
"oauth_entity.refresh_token_url": string
"oauth_entity.revoke_token_url": string
"oauth_entity.salt": string
"oauth_entity.send_client_credentials_as": string
"oauth_entity.skip_authorize": string
"oauth_entity.sys_id": string
"oauth_entity.token_url": string
"oauth_entity.type": string
"oauth_entity.user": string
"oauth_entity.use_mutual_auth": string
"oauth_entity.sys_class_name": string
"oauth_entity.sys_created_by": string
"oauth_entity.sys_created_on": string
"oauth_entity.sys_mod_count": string
"oauth_entity.sys_name": string
"oauth_entity.sys_package": string
"oauth_entity.sys_policy": string
"oauth_entity.sys_scope": string
"oauth_entity.sys_updated_by": string
"oauth_entity.sys_updated_on": string
"oauth_entity.sys_update_name": string
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
   