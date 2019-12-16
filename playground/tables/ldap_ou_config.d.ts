declare interface ldap_ou_config {
      active: GlideElement<ldap_ou_config, glideElementType.g_boolean>;
default_values: GlideElement<ldap_ou_config, glideElementType.g_reference<sys_template>>;
filter: GlideElement<ldap_ou_config, glideElementType.defaultType>;
map: GlideElement<ldap_ou_config, glideElementType.g_reference<sys_impex_map>>;
name: GlideElement<ldap_ou_config, glideElementType.defaultType>;
ou: GlideElement<ldap_ou_config, glideElementType.defaultType>;
query_field: GlideElement<ldap_ou_config, glideElementType.defaultType>;
server: GlideElement<ldap_ou_config, glideElementType.g_reference<ldap_server_config>>;
sys_id: GlideElement<ldap_ou_config, glideElementType.defaultType>;
table: GlideElement<ldap_ou_config, glideElementType.defaultType>;
sys_class_name: GlideElement<ldap_ou_config, glideElementType.defaultType>;
sys_created_by: GlideElement<ldap_ou_config, glideElementType.defaultType>;
sys_created_on: GlideElement<ldap_ou_config, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<ldap_ou_config, glideElementType.defaultType>;
sys_name: GlideElement<ldap_ou_config, glideElementType.defaultType>;
sys_package: GlideElement<ldap_ou_config, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<ldap_ou_config, glideElementType.defaultType>;
sys_scope: GlideElement<ldap_ou_config, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<ldap_ou_config, glideElementType.defaultType>;
sys_updated_on: GlideElement<ldap_ou_config, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<ldap_ou_config, glideElementType.defaultType>;
      _referenceKeys: never | {
        "default_values.active": string
"default_values.global": string
"default_values.group": string
"default_values.link_element": string
"default_values.name": string
"default_values.next": string
"default_values.next_child": string
"default_values.roles": string
"default_values.short_description": string
"default_values.show_on_template_bar": string
"default_values.stand_alone": string
"default_values.sys_id": string
"default_values.table": string
"default_values.template": string
"default_values.user": string
"default_values.view": string
"default_values.sys_class_name": string
"default_values.sys_created_by": string
"default_values.sys_created_on": string
"default_values.sys_mod_count": string
"default_values.sys_name": string
"default_values.sys_package": string
"default_values.sys_policy": string
"default_values.sys_scope": string
"default_values.sys_updated_by": string
"default_values.sys_updated_on": string
"default_values.sys_update_name": string
"map.active": string
"map.agent": string
"map.apply_defaults": string
"map.coalesce": string
"map.condition_script": string
"map.data_option": string
"map.data_source": string
"map.description": string
"map.external_names": string
"map.name": string
"map.order": string
"map.parent": string
"map.script": string
"map.sys_id": string
"map.table": string
"map.type": string
"map.sys_class_name": string
"map.sys_created_by": string
"map.sys_created_on": string
"map.sys_mod_count": string
"map.sys_name": string
"map.sys_package": string
"map.sys_policy": string
"map.sys_scope": string
"map.sys_updated_by": string
"map.sys_updated_on": string
"map.sys_update_name": string
"server.active": string
"server.attributes": string
"server.authenticate": string
"server.connect_timeout": string
"server.dn": string
"server.dn_field": string
"server.listener": string
"server.listen_interval": string
"server.map": string
"server.mid_server": string
"server.name": string
"server.paging": string
"server.password": string
"server.rdn": string
"server.read_timeout": string
"server.server_url": string
"server.ssl": string
"server.system_id": string
"server.sys_id": string
"server.vendor": string
"server.sys_class_name": string
"server.sys_created_by": string
"server.sys_created_on": string
"server.sys_mod_count": string
"server.sys_name": string
"server.sys_package": string
"server.sys_policy": string
"server.sys_scope": string
"server.sys_updated_by": string
"server.sys_updated_on": string
"server.sys_update_name": string
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
   