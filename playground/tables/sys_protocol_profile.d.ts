declare interface sys_protocol_profile {
      default_port: GlideElement<sys_protocol_profile, glideElementType.defaultType>;
keystore: GlideElement<sys_protocol_profile, glideElementType.g_reference<sys_certificate>>;
protocol: GlideElement<sys_protocol_profile, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_protocol_profile, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_protocol_profile, glideElementType.g_glide_date_time>;
sys_id: GlideElement<sys_protocol_profile, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_protocol_profile, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_protocol_profile, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_protocol_profile, glideElementType.g_glide_date_time>;
      _referenceKeys: never | {
        "keystore.active": string
"keystore.expiration_notification": string
"keystore.expires": string
"keystore.expires_in_days": string
"keystore.format": string
"keystore.issuer": string
"keystore.key_store_password": string
"keystore.name": string
"keystore.notify_on_expiration": string
"keystore.pem_certificate": string
"keystore.short_description": string
"keystore.subject": string
"keystore.sys_created_by": string
"keystore.sys_created_on": string
"keystore.sys_id": string
"keystore.sys_mod_count": string
"keystore.sys_updated_by": string
"keystore.sys_updated_on": string
"keystore.type": string
"keystore.valid_from": string
"keystore.warn_in_days_to_expire": string;
      }
    }
   