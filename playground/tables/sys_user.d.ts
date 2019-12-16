declare interface sys_user {
      accumulated_roles: GlideElement<sys_user, glideElementType.defaultType>;
active: GlideElement<sys_user, glideElementType.g_boolean>;
avatar: GlideElement<sys_user, glideElementType.defaultType>;
building: GlideElement<sys_user, glideElementType.g_reference<cmn_building>>;
calendar_integration: GlideElement<sys_user, glideElementType.defaultType>;
city: GlideElement<sys_user, glideElementType.defaultType>;
company: GlideElement<sys_user, glideElementType.g_reference<core_company>>;
cost_center: GlideElement<sys_user, glideElementType.g_reference<cmn_cost_center>>;
country: GlideElement<sys_user, glideElementType.defaultType>;
date_format: GlideElement<sys_user, glideElementType.defaultType>;
default_perspective: GlideElement<sys_user, glideElementType.g_reference<sys_perspective>>;
department: GlideElement<sys_user, glideElementType.g_reference<cmn_department>>;
email: GlideElement<sys_user, glideElementType.defaultType>;
employee_number: GlideElement<sys_user, glideElementType.defaultType>;
enable_multifactor_authn: GlideElement<sys_user, glideElementType.g_boolean>;
failed_attempts: GlideElement<sys_user, glideElementType.defaultType>;
first_name: GlideElement<sys_user, glideElementType.defaultType>;
gender: GlideElement<sys_user, glideElementType.defaultType>;
home_phone: GlideElement<sys_user, glideElementType.defaultType>;
internal_integration_user: GlideElement<sys_user, glideElementType.g_boolean>;
introduction: GlideElement<sys_user, glideElementType.defaultType>;
last_login: GlideElement<sys_user, glideElementType.g_glide_date>;
last_login_time: GlideElement<sys_user, glideElementType.g_glide_date_time>;
last_name: GlideElement<sys_user, glideElementType.defaultType>;
ldap_server: GlideElement<sys_user, glideElementType.g_reference<ldap_server_config>>;
location: GlideElement<sys_user, glideElementType.g_reference<cmn_location>>;
locked_out: GlideElement<sys_user, glideElementType.g_boolean>;
manager: GlideElement<sys_user, glideElementType.g_reference<sys_user>>;
middle_name: GlideElement<sys_user, glideElementType.defaultType>;
mobile_phone: GlideElement<sys_user, glideElementType.defaultType>;
name: GlideElement<sys_user, glideElementType.defaultType>;
notification: GlideElement<sys_user, glideElementType.defaultType>;
password_needs_reset: GlideElement<sys_user, glideElementType.g_boolean>;
phone: GlideElement<sys_user, glideElementType.defaultType>;
photo: GlideElement<sys_user, glideElementType.defaultType>;
preferred_language: GlideElement<sys_user, glideElementType.defaultType>;
roles: GlideElement<sys_user, glideElementType.defaultType>;
schedule: GlideElement<sys_user, glideElementType.g_reference<cmn_schedule>>;
source: GlideElement<sys_user, glideElementType.defaultType>;
state: GlideElement<sys_user, glideElementType.defaultType>;
street: GlideElement<sys_user, glideElementType.defaultType>;
sys_class_name: GlideElement<sys_user, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_user, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_user, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<sys_user, glideElementType.defaultType>;
sys_domain_path: GlideElement<sys_user, glideElementType.defaultType>;
sys_id: GlideElement<sys_user, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_user, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_user, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_user, glideElementType.g_glide_date_time>;
time_format: GlideElement<sys_user, glideElementType.defaultType>;
time_zone: GlideElement<sys_user, glideElementType.defaultType>;
title: GlideElement<sys_user, glideElementType.defaultType>;
user_name: GlideElement<sys_user, glideElementType.defaultType>;
user_password: GlideElement<sys_user, glideElementType.defaultType>;
vip: GlideElement<sys_user, glideElementType.g_boolean>;
web_service_access_only: GlideElement<sys_user, glideElementType.g_boolean>;
zip: GlideElement<sys_user, glideElementType.defaultType>;
      _referenceKeys: never | {
        "building.contact": string
"building.floors": string
"building.location": string
"building.name": string
"building.notes": string
"building.sys_created_by": string
"building.sys_created_on": string
"building.sys_id": string
"building.sys_mod_count": string
"building.sys_updated_by": string
"building.sys_updated_on": string
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
"default_perspective.application": string
"default_perspective.applications": string
"default_perspective.name": string
"default_perspective.order": string
"default_perspective.roles": string
"default_perspective.sys_id": string
"default_perspective.sys_class_name": string
"default_perspective.sys_created_by": string
"default_perspective.sys_created_on": string
"default_perspective.sys_mod_count": string
"default_perspective.sys_name": string
"default_perspective.sys_package": string
"default_perspective.sys_policy": string
"default_perspective.sys_scope": string
"default_perspective.sys_updated_by": string
"default_perspective.sys_updated_on": string
"default_perspective.sys_update_name": string
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
"ldap_server.active": string
"ldap_server.attributes": string
"ldap_server.authenticate": string
"ldap_server.connect_timeout": string
"ldap_server.dn": string
"ldap_server.dn_field": string
"ldap_server.listener": string
"ldap_server.listen_interval": string
"ldap_server.map": string
"ldap_server.mid_server": string
"ldap_server.name": string
"ldap_server.paging": string
"ldap_server.password": string
"ldap_server.rdn": string
"ldap_server.read_timeout": string
"ldap_server.server_url": string
"ldap_server.ssl": string
"ldap_server.system_id": string
"ldap_server.sys_id": string
"ldap_server.vendor": string
"ldap_server.sys_class_name": string
"ldap_server.sys_created_by": string
"ldap_server.sys_created_on": string
"ldap_server.sys_mod_count": string
"ldap_server.sys_name": string
"ldap_server.sys_package": string
"ldap_server.sys_policy": string
"ldap_server.sys_scope": string
"ldap_server.sys_updated_by": string
"ldap_server.sys_updated_on": string
"ldap_server.sys_update_name": string
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
"manager.accumulated_roles": string
"manager.active": string
"manager.avatar": string
"manager.building": string
"manager.calendar_integration": string
"manager.city": string
"manager.company": string
"manager.cost_center": string
"manager.country": string
"manager.date_format": string
"manager.default_perspective": string
"manager.department": string
"manager.email": string
"manager.employee_number": string
"manager.enable_multifactor_authn": string
"manager.failed_attempts": string
"manager.first_name": string
"manager.gender": string
"manager.home_phone": string
"manager.internal_integration_user": string
"manager.introduction": string
"manager.last_login": string
"manager.last_login_time": string
"manager.last_name": string
"manager.ldap_server": string
"manager.location": string
"manager.locked_out": string
"manager.manager": string
"manager.middle_name": string
"manager.mobile_phone": string
"manager.name": string
"manager.notification": string
"manager.password_needs_reset": string
"manager.phone": string
"manager.photo": string
"manager.preferred_language": string
"manager.roles": string
"manager.schedule": string
"manager.source": string
"manager.state": string
"manager.street": string
"manager.sys_class_name": string
"manager.sys_created_by": string
"manager.sys_created_on": string
"manager.sys_domain": string
"manager.sys_domain_path": string
"manager.sys_id": string
"manager.sys_mod_count": string
"manager.sys_updated_by": string
"manager.sys_updated_on": string
"manager.time_format": string
"manager.time_zone": string
"manager.title": string
"manager.user_name": string
"manager.user_password": string
"manager.vip": string
"manager.web_service_access_only": string
"manager.zip": string
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
"schedule.sys_update_name": string;
      }
    }
   