declare interface sys_data_source {
      category: GlideElement<sys_data_source, glideElementType.defaultType>;
connection_timeout: GlideElement<sys_data_source, glideElementType.defaultType>;
connection_url: GlideElement<sys_data_source, glideElementType.defaultType>;
connection_url_parameters: GlideElement<sys_data_source, glideElementType.defaultType>;
csv_delimiter: GlideElement<sys_data_source, glideElementType.defaultType>;
database_name: GlideElement<sys_data_source, glideElementType.defaultType>;
database_port: GlideElement<sys_data_source, glideElementType.defaultType>;
discard_arrays: GlideElement<sys_data_source, glideElementType.g_boolean>;
expand_node_children: GlideElement<sys_data_source, glideElementType.g_boolean>;
file_path: GlideElement<sys_data_source, glideElementType.defaultType>;
file_retrieval_method: GlideElement<sys_data_source, glideElementType.defaultType>;
format: GlideElement<sys_data_source, glideElementType.defaultType>;
glide_keystore: GlideElement<sys_data_source, glideElementType.g_boolean>;
header_row: GlideElement<sys_data_source, glideElementType.defaultType>;
import_set_table_label: GlideElement<sys_data_source, glideElementType.defaultType>;
import_set_table_name: GlideElement<sys_data_source, glideElementType.defaultType>;
instance_name: GlideElement<sys_data_source, glideElementType.defaultType>;
jdbc_password: GlideElement<sys_data_source, glideElementType.defaultType>;
jdbc_server: GlideElement<sys_data_source, glideElementType.defaultType>;
jdbc_user_name: GlideElement<sys_data_source, glideElementType.defaultType>;
jpath_root_node: GlideElement<sys_data_source, glideElementType.defaultType>;
last_run_database_field: GlideElement<sys_data_source, glideElementType.defaultType>;
last_run_datetime: GlideElement<sys_data_source, glideElementType.defaultType>;
ldap_target: GlideElement<sys_data_source, glideElementType.g_reference<ldap_ou_config>>;
maximum_rows: GlideElement<sys_data_source, glideElementType.defaultType>;
mid_server: GlideElement<sys_data_source, glideElementType.g_reference<ecc_agent>>;
name: GlideElement<sys_data_source, glideElementType.defaultType>;
oracle_port: GlideElement<sys_data_source, glideElementType.defaultType>;
oracle_sid: GlideElement<sys_data_source, glideElementType.defaultType>;
properties: GlideElement<sys_data_source, glideElementType.defaultType>;
query: GlideElement<sys_data_source, glideElementType.defaultType>;
query_timeout: GlideElement<sys_data_source, glideElementType.defaultType>;
scp_authentication: GlideElement<sys_data_source, glideElementType.defaultType>;
scp_password: GlideElement<sys_data_source, glideElementType.defaultType>;
scp_port: GlideElement<sys_data_source, glideElementType.defaultType>;
scp_server: GlideElement<sys_data_source, glideElementType.defaultType>;
scp_user_name: GlideElement<sys_data_source, glideElementType.defaultType>;
sheet_number: GlideElement<sys_data_source, glideElementType.defaultType>;
sql_statement: GlideElement<sys_data_source, glideElementType.defaultType>;
ssh_keyfile_path: GlideElement<sys_data_source, glideElementType.defaultType>;
sys_id: GlideElement<sys_data_source, glideElementType.defaultType>;
table_name: GlideElement<sys_data_source, glideElementType.defaultType>;
type: GlideElement<sys_data_source, glideElementType.defaultType>;
use_integrated_authentication: GlideElement<sys_data_source, glideElementType.g_boolean>;
use_last_run_datetime: GlideElement<sys_data_source, glideElementType.g_boolean>;
xpath_root_node: GlideElement<sys_data_source, glideElementType.defaultType>;
zipped: GlideElement<sys_data_source, glideElementType.g_boolean>;
sys_class_name: GlideElement<sys_data_source, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_data_source, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_data_source, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_data_source, glideElementType.defaultType>;
sys_name: GlideElement<sys_data_source, glideElementType.defaultType>;
sys_package: GlideElement<sys_data_source, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_data_source, glideElementType.defaultType>;
sys_scope: GlideElement<sys_data_source, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_data_source, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_data_source, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_data_source, glideElementType.defaultType>;
      _referenceKeys: never | {
        "ldap_target.active": string
"ldap_target.default_values": string
"ldap_target.filter": string
"ldap_target.map": string
"ldap_target.name": string
"ldap_target.ou": string
"ldap_target.query_field": string
"ldap_target.server": string
"ldap_target.sys_id": string
"ldap_target.table": string
"ldap_target.sys_class_name": string
"ldap_target.sys_created_by": string
"ldap_target.sys_created_on": string
"ldap_target.sys_mod_count": string
"ldap_target.sys_name": string
"ldap_target.sys_package": string
"ldap_target.sys_policy": string
"ldap_target.sys_scope": string
"ldap_target.sys_updated_by": string
"ldap_target.sys_updated_on": string
"ldap_target.sys_update_name": string
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
   