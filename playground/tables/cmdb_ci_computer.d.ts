declare interface cmdb_ci_computer {
      asset: GlideElement<cmdb_ci_computer, glideElementType.g_reference<alm_asset>>;
asset_tag: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
assigned: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
assigned_to: GlideElement<cmdb_ci_computer, glideElementType.g_reference<sys_user>>;
assignment_group: GlideElement<cmdb_ci_computer, glideElementType.g_reference<sys_user_group>>;
attributes: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
can_print: GlideElement<cmdb_ci_computer, glideElementType.g_boolean>;
category: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cd_rom: GlideElement<cmdb_ci_computer, glideElementType.g_boolean>;
cd_speed: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
change_control: GlideElement<cmdb_ci_computer, glideElementType.g_reference<sys_user_group>>;
chassis_type: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
checked_in: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
checked_out: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
comments: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
company: GlideElement<cmdb_ci_computer, glideElementType.g_reference<core_company>>;
correlation_id: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cost: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cost_cc: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cost_center: GlideElement<cmdb_ci_computer, glideElementType.g_reference<cmn_cost_center>>;
cpu_core_count: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cpu_core_thread: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cpu_count: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cpu_manufacturer: GlideElement<cmdb_ci_computer, glideElementType.g_reference<core_company>>;
cpu_name: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cpu_speed: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
cpu_type: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
default_gateway: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
delivery_date: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
department: GlideElement<cmdb_ci_computer, glideElementType.g_reference<cmn_department>>;
discovery_source: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
disk_space: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
dns_domain: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
due: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
due_in: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
duplicate_of: GlideElement<cmdb_ci_computer, glideElementType.g_reference<cmdb_ci>>;
fault_count: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
first_discovered: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
floppy: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
form_factor: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
fqdn: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
gl_account: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
hardware_status: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
hardware_substatus: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
install_date: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
install_status: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
invoice_number: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
ip_address: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
justification: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
last_discovered: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
lease_id: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
location: GlideElement<cmdb_ci_computer, glideElementType.g_reference<cmn_location>>;
mac_address: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
maintenance_schedule: GlideElement<cmdb_ci_computer, glideElementType.g_reference<cmn_schedule>>;
managed_by: GlideElement<cmdb_ci_computer, glideElementType.g_reference<sys_user>>;
manufacturer: GlideElement<cmdb_ci_computer, glideElementType.g_reference<core_company>>;
model_id: GlideElement<cmdb_ci_computer, glideElementType.g_reference<cmdb_model>>;
model_number: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
monitor: GlideElement<cmdb_ci_computer, glideElementType.g_boolean>;
name: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
object_id: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
operational_status: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
order_date: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
os: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
os_address_width: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
os_domain: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
os_service_pack: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
os_version: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
owned_by: GlideElement<cmdb_ci_computer, glideElementType.g_reference<sys_user>>;
po_number: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
purchase_date: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date>;
ram: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
schedule: GlideElement<cmdb_ci_computer, glideElementType.g_reference<cmn_schedule>>;
serial_number: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
short_description: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
skip_sync: GlideElement<cmdb_ci_computer, glideElementType.g_boolean>;
start_date: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
subcategory: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
supported_by: GlideElement<cmdb_ci_computer, glideElementType.g_reference<sys_user>>;
support_group: GlideElement<cmdb_ci_computer, glideElementType.g_reference<sys_user_group>>;
sys_class_name: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_class_path: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_created_by: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_created_on: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_domain_path: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_id: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_mod_count: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_updated_by: GlideElement<cmdb_ci_computer, glideElementType.defaultType>;
sys_updated_on: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date_time>;
unverified: GlideElement<cmdb_ci_computer, glideElementType.g_boolean>;
vendor: GlideElement<cmdb_ci_computer, glideElementType.g_reference<core_company>>;
virtual: GlideElement<cmdb_ci_computer, glideElementType.g_boolean>;
warranty_expiration: GlideElement<cmdb_ci_computer, glideElementType.g_glide_date>;
      _referenceKeys: never | {
        "asset.acquisition_method": string
"asset.active_to": string
"asset.asset_tag": string
"asset.assigned": string
"asset.assigned_to": string
"asset.beneficiary": string
"asset.checked_in": string
"asset.checked_out": string
"asset.ci": string
"asset.comments": string
"asset.company": string
"asset.cost": string
"asset.cost_center": string
"asset.delivery_date": string
"asset.department": string
"asset.depreciated_amount": string
"asset.depreciation": string
"asset.depreciation_date": string
"asset.display_name": string
"asset.disposal_reason": string
"asset.due": string
"asset.due_in": string
"asset.expenditure_type": string
"asset.gl_account": string
"asset.install_date": string
"asset.install_status": string
"asset.invoice_number": string
"asset.justification": string
"asset.lease_id": string
"asset.location": string
"asset.managed_by": string
"asset.model": string
"asset.model_category": string
"asset.old_status": string
"asset.old_substatus": string
"asset.order_date": string
"asset.owned_by": string
"asset.parent": string
"asset.po_number": string
"asset.pre_allocated": string
"asset.purchase_date": string
"asset.quantity": string
"asset.request_line": string
"asset.resale_price": string
"asset.reserved_for": string
"asset.residual": string
"asset.residual_date": string
"asset.retired": string
"asset.retirement_date": string
"asset.salvage_value": string
"asset.serial_number": string
"asset.skip_sync": string
"asset.stockroom": string
"asset.substatus": string
"asset.supported_by": string
"asset.support_group": string
"asset.sys_class_name": string
"asset.sys_created_by": string
"asset.sys_created_on": string
"asset.sys_domain": string
"asset.sys_domain_path": string
"asset.sys_id": string
"asset.sys_mod_count": string
"asset.sys_updated_by": string
"asset.sys_updated_on": string
"asset.vendor": string
"asset.warranty_expiration": string
"asset.work_notes": string
"assigned_to.accumulated_roles": string
"assigned_to.active": string
"assigned_to.avatar": string
"assigned_to.building": string
"assigned_to.calendar_integration": string
"assigned_to.city": string
"assigned_to.company": string
"assigned_to.cost_center": string
"assigned_to.country": string
"assigned_to.date_format": string
"assigned_to.default_perspective": string
"assigned_to.department": string
"assigned_to.email": string
"assigned_to.employee_number": string
"assigned_to.enable_multifactor_authn": string
"assigned_to.failed_attempts": string
"assigned_to.first_name": string
"assigned_to.gender": string
"assigned_to.home_phone": string
"assigned_to.internal_integration_user": string
"assigned_to.introduction": string
"assigned_to.last_login": string
"assigned_to.last_login_time": string
"assigned_to.last_name": string
"assigned_to.ldap_server": string
"assigned_to.location": string
"assigned_to.locked_out": string
"assigned_to.manager": string
"assigned_to.middle_name": string
"assigned_to.mobile_phone": string
"assigned_to.name": string
"assigned_to.notification": string
"assigned_to.password_needs_reset": string
"assigned_to.phone": string
"assigned_to.photo": string
"assigned_to.preferred_language": string
"assigned_to.roles": string
"assigned_to.schedule": string
"assigned_to.source": string
"assigned_to.state": string
"assigned_to.street": string
"assigned_to.sys_class_name": string
"assigned_to.sys_created_by": string
"assigned_to.sys_created_on": string
"assigned_to.sys_domain": string
"assigned_to.sys_domain_path": string
"assigned_to.sys_id": string
"assigned_to.sys_mod_count": string
"assigned_to.sys_updated_by": string
"assigned_to.sys_updated_on": string
"assigned_to.time_format": string
"assigned_to.time_zone": string
"assigned_to.title": string
"assigned_to.user_name": string
"assigned_to.user_password": string
"assigned_to.vip": string
"assigned_to.web_service_access_only": string
"assigned_to.zip": string
"assignment_group.active": string
"assignment_group.cost_center": string
"assignment_group.default_assignee": string
"assignment_group.description": string
"assignment_group.email": string
"assignment_group.exclude_manager": string
"assignment_group.include_members": string
"assignment_group.manager": string
"assignment_group.name": string
"assignment_group.parent": string
"assignment_group.roles": string
"assignment_group.source": string
"assignment_group.sys_created_by": string
"assignment_group.sys_created_on": string
"assignment_group.sys_id": string
"assignment_group.sys_mod_count": string
"assignment_group.sys_updated_by": string
"assignment_group.sys_updated_on": string
"assignment_group.type": string
"change_control.active": string
"change_control.cost_center": string
"change_control.default_assignee": string
"change_control.description": string
"change_control.email": string
"change_control.exclude_manager": string
"change_control.include_members": string
"change_control.manager": string
"change_control.name": string
"change_control.parent": string
"change_control.roles": string
"change_control.source": string
"change_control.sys_created_by": string
"change_control.sys_created_on": string
"change_control.sys_id": string
"change_control.sys_mod_count": string
"change_control.sys_updated_by": string
"change_control.sys_updated_on": string
"change_control.type": string
"company.apple_icon": string
"company.banner_image": string
"company.banner_image_light": string
"company.banner_text": string
"company.city": string
"company.contact": string
"company.country": string
"company.customer": string
"company.discount": string
"company.fax_phone": string
"company.fiscal_year": string
"company.latitude": string
"company.lat_long_error": string
"company.longitude": string
"company.manufacturer": string
"company.market_cap": string
"company.name": string
"company.notes": string
"company.num_employees": string
"company.parent": string
"company.phone": string
"company.primary": string
"company.profits": string
"company.publicly_traded": string
"company.rank_tier": string
"company.revenue_per_year": string
"company.state": string
"company.stock_price": string
"company.stock_symbol": string
"company.street": string
"company.sys_class_name": string
"company.sys_created_by": string
"company.sys_created_on": string
"company.sys_id": string
"company.sys_mod_count": string
"company.sys_updated_by": string
"company.sys_updated_on": string
"company.theme": string
"company.vendor": string
"company.vendor_manager": string
"company.vendor_type": string
"company.website": string
"company.zip": string
"cost_center.account_number": string
"cost_center.code": string
"cost_center.location": string
"cost_center.manager": string
"cost_center.name": string
"cost_center.parent": string
"cost_center.sys_created_by": string
"cost_center.sys_created_on": string
"cost_center.sys_id": string
"cost_center.sys_mod_count": string
"cost_center.sys_updated_by": string
"cost_center.sys_updated_on": string
"cost_center.valid_from": string
"cost_center.valid_to": string
"cpu_manufacturer.apple_icon": string
"cpu_manufacturer.banner_image": string
"cpu_manufacturer.banner_image_light": string
"cpu_manufacturer.banner_text": string
"cpu_manufacturer.city": string
"cpu_manufacturer.contact": string
"cpu_manufacturer.country": string
"cpu_manufacturer.customer": string
"cpu_manufacturer.discount": string
"cpu_manufacturer.fax_phone": string
"cpu_manufacturer.fiscal_year": string
"cpu_manufacturer.latitude": string
"cpu_manufacturer.lat_long_error": string
"cpu_manufacturer.longitude": string
"cpu_manufacturer.manufacturer": string
"cpu_manufacturer.market_cap": string
"cpu_manufacturer.name": string
"cpu_manufacturer.notes": string
"cpu_manufacturer.num_employees": string
"cpu_manufacturer.parent": string
"cpu_manufacturer.phone": string
"cpu_manufacturer.primary": string
"cpu_manufacturer.profits": string
"cpu_manufacturer.publicly_traded": string
"cpu_manufacturer.rank_tier": string
"cpu_manufacturer.revenue_per_year": string
"cpu_manufacturer.state": string
"cpu_manufacturer.stock_price": string
"cpu_manufacturer.stock_symbol": string
"cpu_manufacturer.street": string
"cpu_manufacturer.sys_class_name": string
"cpu_manufacturer.sys_created_by": string
"cpu_manufacturer.sys_created_on": string
"cpu_manufacturer.sys_id": string
"cpu_manufacturer.sys_mod_count": string
"cpu_manufacturer.sys_updated_by": string
"cpu_manufacturer.sys_updated_on": string
"cpu_manufacturer.theme": string
"cpu_manufacturer.vendor": string
"cpu_manufacturer.vendor_manager": string
"cpu_manufacturer.vendor_type": string
"cpu_manufacturer.website": string
"cpu_manufacturer.zip": string
"department.business_unit": string
"department.company": string
"department.cost_center": string
"department.dept_head": string
"department.description": string
"department.head_count": string
"department.id": string
"department.name": string
"department.parent": string
"department.primary_contact": string
"department.sys_created_by": string
"department.sys_created_on": string
"department.sys_id": string
"department.sys_mod_count": string
"department.sys_updated_by": string
"department.sys_updated_on": string
"duplicate_of.asset": string
"duplicate_of.asset_tag": string
"duplicate_of.assigned": string
"duplicate_of.assigned_to": string
"duplicate_of.assignment_group": string
"duplicate_of.attributes": string
"duplicate_of.can_print": string
"duplicate_of.category": string
"duplicate_of.change_control": string
"duplicate_of.checked_in": string
"duplicate_of.checked_out": string
"duplicate_of.comments": string
"duplicate_of.company": string
"duplicate_of.correlation_id": string
"duplicate_of.cost": string
"duplicate_of.cost_cc": string
"duplicate_of.cost_center": string
"duplicate_of.delivery_date": string
"duplicate_of.department": string
"duplicate_of.discovery_source": string
"duplicate_of.dns_domain": string
"duplicate_of.due": string
"duplicate_of.due_in": string
"duplicate_of.duplicate_of": string
"duplicate_of.fault_count": string
"duplicate_of.first_discovered": string
"duplicate_of.fqdn": string
"duplicate_of.gl_account": string
"duplicate_of.install_date": string
"duplicate_of.install_status": string
"duplicate_of.invoice_number": string
"duplicate_of.ip_address": string
"duplicate_of.justification": string
"duplicate_of.last_discovered": string
"duplicate_of.lease_id": string
"duplicate_of.location": string
"duplicate_of.mac_address": string
"duplicate_of.maintenance_schedule": string
"duplicate_of.managed_by": string
"duplicate_of.manufacturer": string
"duplicate_of.model_id": string
"duplicate_of.model_number": string
"duplicate_of.monitor": string
"duplicate_of.name": string
"duplicate_of.operational_status": string
"duplicate_of.order_date": string
"duplicate_of.owned_by": string
"duplicate_of.po_number": string
"duplicate_of.purchase_date": string
"duplicate_of.schedule": string
"duplicate_of.serial_number": string
"duplicate_of.short_description": string
"duplicate_of.skip_sync": string
"duplicate_of.start_date": string
"duplicate_of.subcategory": string
"duplicate_of.supported_by": string
"duplicate_of.support_group": string
"duplicate_of.sys_class_name": string
"duplicate_of.sys_class_path": string
"duplicate_of.sys_created_by": string
"duplicate_of.sys_created_on": string
"duplicate_of.sys_domain": string
"duplicate_of.sys_domain_path": string
"duplicate_of.sys_id": string
"duplicate_of.sys_mod_count": string
"duplicate_of.sys_updated_by": string
"duplicate_of.sys_updated_on": string
"duplicate_of.unverified": string
"duplicate_of.vendor": string
"duplicate_of.warranty_expiration": string
"location.city": string
"location.company": string
"location.contact": string
"location.country": string
"location.fax_phone": string
"location.full_name": string
"location.latitude": string
"location.lat_long_error": string
"location.longitude": string
"location.name": string
"location.parent": string
"location.phone": string
"location.phone_territory": string
"location.state": string
"location.stock_room": string
"location.street": string
"location.sys_created_by": string
"location.sys_created_on": string
"location.sys_id": string
"location.sys_mod_count": string
"location.sys_updated_by": string
"location.sys_updated_on": string
"location.time_zone": string
"location.zip": string
"maintenance_schedule.document": string
"maintenance_schedule.document_key": string
"maintenance_schedule.name": string
"maintenance_schedule.read_only": string
"maintenance_schedule.sys_id": string
"maintenance_schedule.type": string
"maintenance_schedule.calendar_name": string
"maintenance_schedule.description": string
"maintenance_schedule.is_legacy_schedule": string
"maintenance_schedule.label": string
"maintenance_schedule.parent": string
"maintenance_schedule.plural_label": string
"maintenance_schedule.sys_domain": string
"maintenance_schedule.sys_domain_path": string
"maintenance_schedule.time_zone": string
"maintenance_schedule.sys_class_name": string
"maintenance_schedule.sys_created_by": string
"maintenance_schedule.sys_created_on": string
"maintenance_schedule.sys_mod_count": string
"maintenance_schedule.sys_name": string
"maintenance_schedule.sys_package": string
"maintenance_schedule.sys_policy": string
"maintenance_schedule.sys_scope": string
"maintenance_schedule.sys_updated_by": string
"maintenance_schedule.sys_updated_on": string
"maintenance_schedule.sys_update_name": string
"managed_by.accumulated_roles": string
"managed_by.active": string
"managed_by.avatar": string
"managed_by.building": string
"managed_by.calendar_integration": string
"managed_by.city": string
"managed_by.company": string
"managed_by.cost_center": string
"managed_by.country": string
"managed_by.date_format": string
"managed_by.default_perspective": string
"managed_by.department": string
"managed_by.email": string
"managed_by.employee_number": string
"managed_by.enable_multifactor_authn": string
"managed_by.failed_attempts": string
"managed_by.first_name": string
"managed_by.gender": string
"managed_by.home_phone": string
"managed_by.internal_integration_user": string
"managed_by.introduction": string
"managed_by.last_login": string
"managed_by.last_login_time": string
"managed_by.last_name": string
"managed_by.ldap_server": string
"managed_by.location": string
"managed_by.locked_out": string
"managed_by.manager": string
"managed_by.middle_name": string
"managed_by.mobile_phone": string
"managed_by.name": string
"managed_by.notification": string
"managed_by.password_needs_reset": string
"managed_by.phone": string
"managed_by.photo": string
"managed_by.preferred_language": string
"managed_by.roles": string
"managed_by.schedule": string
"managed_by.source": string
"managed_by.state": string
"managed_by.street": string
"managed_by.sys_class_name": string
"managed_by.sys_created_by": string
"managed_by.sys_created_on": string
"managed_by.sys_domain": string
"managed_by.sys_domain_path": string
"managed_by.sys_id": string
"managed_by.sys_mod_count": string
"managed_by.sys_updated_by": string
"managed_by.sys_updated_on": string
"managed_by.time_format": string
"managed_by.time_zone": string
"managed_by.title": string
"managed_by.user_name": string
"managed_by.user_password": string
"managed_by.vip": string
"managed_by.web_service_access_only": string
"managed_by.zip": string
"manufacturer.apple_icon": string
"manufacturer.banner_image": string
"manufacturer.banner_image_light": string
"manufacturer.banner_text": string
"manufacturer.city": string
"manufacturer.contact": string
"manufacturer.country": string
"manufacturer.customer": string
"manufacturer.discount": string
"manufacturer.fax_phone": string
"manufacturer.fiscal_year": string
"manufacturer.latitude": string
"manufacturer.lat_long_error": string
"manufacturer.longitude": string
"manufacturer.manufacturer": string
"manufacturer.market_cap": string
"manufacturer.name": string
"manufacturer.notes": string
"manufacturer.num_employees": string
"manufacturer.parent": string
"manufacturer.phone": string
"manufacturer.primary": string
"manufacturer.profits": string
"manufacturer.publicly_traded": string
"manufacturer.rank_tier": string
"manufacturer.revenue_per_year": string
"manufacturer.state": string
"manufacturer.stock_price": string
"manufacturer.stock_symbol": string
"manufacturer.street": string
"manufacturer.sys_class_name": string
"manufacturer.sys_created_by": string
"manufacturer.sys_created_on": string
"manufacturer.sys_id": string
"manufacturer.sys_mod_count": string
"manufacturer.sys_updated_by": string
"manufacturer.sys_updated_on": string
"manufacturer.theme": string
"manufacturer.vendor": string
"manufacturer.vendor_manager": string
"manufacturer.vendor_type": string
"manufacturer.website": string
"manufacturer.zip": string
"model_id.acquisition_method": string
"model_id.asset_tracking_strategy": string
"model_id.barcode": string
"model_id.bundle": string
"model_id.certified": string
"model_id.cmdb_ci_class": string
"model_id.cmdb_model_category": string
"model_id.comments": string
"model_id.cost": string
"model_id.depreciation": string
"model_id.description": string
"model_id.display_name": string
"model_id.expenditure_type": string
"model_id.flow_rate": string
"model_id.full_name": string
"model_id.main_component": string
"model_id.manufacturer": string
"model_id.model_number": string
"model_id.name": string
"model_id.owner": string
"model_id.picture": string
"model_id.power_consumption": string
"model_id.product_catalog_item": string
"model_id.rack_units": string
"model_id.salvage_value": string
"model_id.short_description": string
"model_id.sla": string
"model_id.sound_power": string
"model_id.status": string
"model_id.sys_class_name": string
"model_id.sys_created_by": string
"model_id.sys_created_on": string
"model_id.sys_domain": string
"model_id.sys_domain_path": string
"model_id.sys_id": string
"model_id.sys_mod_count": string
"model_id.sys_updated_by": string
"model_id.sys_updated_on": string
"model_id.type": string
"model_id.weight": string
"owned_by.accumulated_roles": string
"owned_by.active": string
"owned_by.avatar": string
"owned_by.building": string
"owned_by.calendar_integration": string
"owned_by.city": string
"owned_by.company": string
"owned_by.cost_center": string
"owned_by.country": string
"owned_by.date_format": string
"owned_by.default_perspective": string
"owned_by.department": string
"owned_by.email": string
"owned_by.employee_number": string
"owned_by.enable_multifactor_authn": string
"owned_by.failed_attempts": string
"owned_by.first_name": string
"owned_by.gender": string
"owned_by.home_phone": string
"owned_by.internal_integration_user": string
"owned_by.introduction": string
"owned_by.last_login": string
"owned_by.last_login_time": string
"owned_by.last_name": string
"owned_by.ldap_server": string
"owned_by.location": string
"owned_by.locked_out": string
"owned_by.manager": string
"owned_by.middle_name": string
"owned_by.mobile_phone": string
"owned_by.name": string
"owned_by.notification": string
"owned_by.password_needs_reset": string
"owned_by.phone": string
"owned_by.photo": string
"owned_by.preferred_language": string
"owned_by.roles": string
"owned_by.schedule": string
"owned_by.source": string
"owned_by.state": string
"owned_by.street": string
"owned_by.sys_class_name": string
"owned_by.sys_created_by": string
"owned_by.sys_created_on": string
"owned_by.sys_domain": string
"owned_by.sys_domain_path": string
"owned_by.sys_id": string
"owned_by.sys_mod_count": string
"owned_by.sys_updated_by": string
"owned_by.sys_updated_on": string
"owned_by.time_format": string
"owned_by.time_zone": string
"owned_by.title": string
"owned_by.user_name": string
"owned_by.user_password": string
"owned_by.vip": string
"owned_by.web_service_access_only": string
"owned_by.zip": string
"schedule.document": string
"schedule.document_key": string
"schedule.name": string
"schedule.read_only": string
"schedule.sys_id": string
"schedule.type": string
"schedule.calendar_name": string
"schedule.description": string
"schedule.is_legacy_schedule": string
"schedule.label": string
"schedule.parent": string
"schedule.plural_label": string
"schedule.sys_domain": string
"schedule.sys_domain_path": string
"schedule.time_zone": string
"schedule.sys_class_name": string
"schedule.sys_created_by": string
"schedule.sys_created_on": string
"schedule.sys_mod_count": string
"schedule.sys_name": string
"schedule.sys_package": string
"schedule.sys_policy": string
"schedule.sys_scope": string
"schedule.sys_updated_by": string
"schedule.sys_updated_on": string
"schedule.sys_update_name": string
"supported_by.accumulated_roles": string
"supported_by.active": string
"supported_by.avatar": string
"supported_by.building": string
"supported_by.calendar_integration": string
"supported_by.city": string
"supported_by.company": string
"supported_by.cost_center": string
"supported_by.country": string
"supported_by.date_format": string
"supported_by.default_perspective": string
"supported_by.department": string
"supported_by.email": string
"supported_by.employee_number": string
"supported_by.enable_multifactor_authn": string
"supported_by.failed_attempts": string
"supported_by.first_name": string
"supported_by.gender": string
"supported_by.home_phone": string
"supported_by.internal_integration_user": string
"supported_by.introduction": string
"supported_by.last_login": string
"supported_by.last_login_time": string
"supported_by.last_name": string
"supported_by.ldap_server": string
"supported_by.location": string
"supported_by.locked_out": string
"supported_by.manager": string
"supported_by.middle_name": string
"supported_by.mobile_phone": string
"supported_by.name": string
"supported_by.notification": string
"supported_by.password_needs_reset": string
"supported_by.phone": string
"supported_by.photo": string
"supported_by.preferred_language": string
"supported_by.roles": string
"supported_by.schedule": string
"supported_by.source": string
"supported_by.state": string
"supported_by.street": string
"supported_by.sys_class_name": string
"supported_by.sys_created_by": string
"supported_by.sys_created_on": string
"supported_by.sys_domain": string
"supported_by.sys_domain_path": string
"supported_by.sys_id": string
"supported_by.sys_mod_count": string
"supported_by.sys_updated_by": string
"supported_by.sys_updated_on": string
"supported_by.time_format": string
"supported_by.time_zone": string
"supported_by.title": string
"supported_by.user_name": string
"supported_by.user_password": string
"supported_by.vip": string
"supported_by.web_service_access_only": string
"supported_by.zip": string
"support_group.active": string
"support_group.cost_center": string
"support_group.default_assignee": string
"support_group.description": string
"support_group.email": string
"support_group.exclude_manager": string
"support_group.include_members": string
"support_group.manager": string
"support_group.name": string
"support_group.parent": string
"support_group.roles": string
"support_group.source": string
"support_group.sys_created_by": string
"support_group.sys_created_on": string
"support_group.sys_id": string
"support_group.sys_mod_count": string
"support_group.sys_updated_by": string
"support_group.sys_updated_on": string
"support_group.type": string
"vendor.apple_icon": string
"vendor.banner_image": string
"vendor.banner_image_light": string
"vendor.banner_text": string
"vendor.city": string
"vendor.contact": string
"vendor.country": string
"vendor.customer": string
"vendor.discount": string
"vendor.fax_phone": string
"vendor.fiscal_year": string
"vendor.latitude": string
"vendor.lat_long_error": string
"vendor.longitude": string
"vendor.manufacturer": string
"vendor.market_cap": string
"vendor.name": string
"vendor.notes": string
"vendor.num_employees": string
"vendor.parent": string
"vendor.phone": string
"vendor.primary": string
"vendor.profits": string
"vendor.publicly_traded": string
"vendor.rank_tier": string
"vendor.revenue_per_year": string
"vendor.state": string
"vendor.stock_price": string
"vendor.stock_symbol": string
"vendor.street": string
"vendor.sys_class_name": string
"vendor.sys_created_by": string
"vendor.sys_created_on": string
"vendor.sys_id": string
"vendor.sys_mod_count": string
"vendor.sys_updated_by": string
"vendor.sys_updated_on": string
"vendor.theme": string
"vendor.vendor": string
"vendor.vendor_manager": string
"vendor.vendor_type": string
"vendor.website": string
"vendor.zip": string;
      }
    }
   