declare interface ldap_server_config {
      active: GlideElement<ldap_server_config, glideElementType.g_boolean>;
attributes: GlideElement<ldap_server_config, glideElementType.defaultType>;
authenticate: GlideElement<ldap_server_config, glideElementType.g_boolean>;
connect_timeout: GlideElement<ldap_server_config, glideElementType.defaultType>;
dn: GlideElement<ldap_server_config, glideElementType.defaultType>;
dn_field: GlideElement<ldap_server_config, glideElementType.defaultType>;
listener: GlideElement<ldap_server_config, glideElementType.g_boolean>;
listen_interval: GlideElement<ldap_server_config, glideElementType.defaultType>;
map: GlideElement<ldap_server_config, glideElementType.g_reference<sys_impex_map>>;
mid_server: GlideElement<ldap_server_config, glideElementType.g_reference<ecc_agent>>;
name: GlideElement<ldap_server_config, glideElementType.defaultType>;
paging: GlideElement<ldap_server_config, glideElementType.g_boolean>;
password: GlideElement<ldap_server_config, glideElementType.defaultType>;
rdn: GlideElement<ldap_server_config, glideElementType.defaultType>;
read_timeout: GlideElement<ldap_server_config, glideElementType.defaultType>;
server_url: GlideElement<ldap_server_config, glideElementType.defaultType>;
ssl: GlideElement<ldap_server_config, glideElementType.g_boolean>;
system_id: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_id: GlideElement<ldap_server_config, glideElementType.defaultType>;
vendor: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_class_name: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_created_by: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_created_on: GlideElement<ldap_server_config, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_name: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_package: GlideElement<ldap_server_config, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_scope: GlideElement<ldap_server_config, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<ldap_server_config, glideElementType.defaultType>;
sys_updated_on: GlideElement<ldap_server_config, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<ldap_server_config, glideElementType.defaultType>;
      _referenceKeys: never | {
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
"mid_server.home_dir": string
"mid_server.host_cpu_core_count": string
"mid_server.host_cpu_speed": string
"mid_server.host_disk_size": string
"mid_server.host_disk_size_bytes": string
"mid_server.host_glibc_version": string
"mid_server.host_hyperthreading": string
"mid_server.host_name": string
"mid_server.host_os_address_width": string
"mid_server.host_os_distribution": string
"mid_server.host_os_version": string
"mid_server.host_powershell_version": string
"mid_server.host_total_ram": string
"mid_server.host_type": string
"mid_server.ip_address": string
"mid_server.jvm_version": string
"mid_server.last_refreshed": string
"mid_server.mid_java_command_dir": string
"mid_server.mid_maximum_ram": string
"mid_server.name": string
"mid_server.network": string
"mid_server.nmap_version": string
"mid_server.public_key": string
"mid_server.router": string
"mid_server.started": string
"mid_server.status": string
"mid_server.stopped": string
"mid_server.sys_created_by": string
"mid_server.sys_created_on": string
"mid_server.sys_domain": string
"mid_server.sys_domain_path": string
"mid_server.sys_id": string
"mid_server.sys_mod_count": string
"mid_server.sys_updated_by": string
"mid_server.sys_updated_on": string
"mid_server.unresolved_issues": string
"mid_server.user_name": string
"mid_server.validated": string
"mid_server.version": string
"mid_server.win_domain": string
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
   