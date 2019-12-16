declare interface ast_contract {
      active: GlideElement<ast_contract, glideElementType.g_boolean>;
applicable_taxes: GlideElement<ast_contract, glideElementType.defaultType>;
application_model: GlideElement<ast_contract, glideElementType.g_reference<cmdb_application_product_model>>;
approval_history: GlideElement<ast_contract, glideElementType.defaultType>;
approver: GlideElement<ast_contract, glideElementType.g_reference<sys_user>>;
business_owner: GlideElement<ast_contract, glideElementType.g_reference<sys_user>>;
commitment: GlideElement<ast_contract, glideElementType.g_currency>;
contract_administrator: GlideElement<ast_contract, glideElementType.g_reference<sys_user>>;
contract_model: GlideElement<ast_contract, glideElementType.g_reference<cmdb_model>>;
cost_adjustment: GlideElement<ast_contract, glideElementType.defaultType>;
cost_adjustment_percentage: GlideElement<ast_contract, glideElementType.defaultType>;
cost_adjustment_reason: GlideElement<ast_contract, glideElementType.defaultType>;
cost_adjustment_type: GlideElement<ast_contract, glideElementType.defaultType>;
cost_center: GlideElement<ast_contract, glideElementType.g_reference<cmn_cost_center>>;
cost_per_unit: GlideElement<ast_contract, glideElementType.g_currency>;
covers: GlideElement<ast_contract, glideElementType.defaultType>;
customer: GlideElement<ast_contract, glideElementType.g_reference<core_company>>;
description: GlideElement<ast_contract, glideElementType.defaultType>;
discount: GlideElement<ast_contract, glideElementType.defaultType>;
ends: GlideElement<ast_contract, glideElementType.g_glide_date>;
expiration: GlideElement<ast_contract, glideElementType.g_reference<clm_condition_checker>>;
invoice_payment_terms: GlideElement<ast_contract, glideElementType.defaultType>;
license_quantity_entitled: GlideElement<ast_contract, glideElementType.defaultType>;
license_type: GlideElement<ast_contract, glideElementType.defaultType>;
lifetime_cost: GlideElement<ast_contract, glideElementType.g_currency>;
location: GlideElement<ast_contract, glideElementType.g_reference<cmn_location>>;
monthly_cost: GlideElement<ast_contract, glideElementType.g_currency>;
number: GlideElement<ast_contract, glideElementType.defaultType>;
parent_contract: GlideElement<ast_contract, glideElementType.g_reference<ast_contract>>;
payment_amount: GlideElement<ast_contract, glideElementType.g_currency>;
payment_schedule: GlideElement<ast_contract, glideElementType.defaultType>;
po_number: GlideElement<ast_contract, glideElementType.defaultType>;
process: GlideElement<ast_contract, glideElementType.defaultType>;
process_non_contractual_slas: GlideElement<ast_contract, glideElementType.g_boolean>;
ratecard: GlideElement<ast_contract, glideElementType.g_boolean>;
renewable: GlideElement<ast_contract, glideElementType.g_boolean>;
renewal_contact: GlideElement<ast_contract, glideElementType.g_reference<sys_user>>;
renewal_date: GlideElement<ast_contract, glideElementType.g_glide_date>;
renewal_end_date: GlideElement<ast_contract, glideElementType.g_glide_date>;
renewal_options: GlideElement<ast_contract, glideElementType.defaultType>;
sales_tax: GlideElement<ast_contract, glideElementType.g_boolean>;
short_description: GlideElement<ast_contract, glideElementType.defaultType>;
starts: GlideElement<ast_contract, glideElementType.g_glide_date>;
state: GlideElement<ast_contract, glideElementType.defaultType>;
substate: GlideElement<ast_contract, glideElementType.defaultType>;
sub_total_cost: GlideElement<ast_contract, glideElementType.g_currency>;
sys_class_name: GlideElement<ast_contract, glideElementType.defaultType>;
sys_created_by: GlideElement<ast_contract, glideElementType.defaultType>;
sys_created_on: GlideElement<ast_contract, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<ast_contract, glideElementType.defaultType>;
sys_domain_path: GlideElement<ast_contract, glideElementType.defaultType>;
sys_id: GlideElement<ast_contract, glideElementType.defaultType>;
sys_mod_count: GlideElement<ast_contract, glideElementType.defaultType>;
sys_updated_by: GlideElement<ast_contract, glideElementType.defaultType>;
sys_updated_on: GlideElement<ast_contract, glideElementType.g_glide_date_time>;
tax_cost: GlideElement<ast_contract, glideElementType.g_currency>;
tax_exempt: GlideElement<ast_contract, glideElementType.g_boolean>;
tax_rate: GlideElement<ast_contract, glideElementType.defaultType>;
terms_and_conditions: GlideElement<ast_contract, glideElementType.defaultType>;
total_cost: GlideElement<ast_contract, glideElementType.g_currency>;
vendor: GlideElement<ast_contract, glideElementType.g_reference<core_company>>;
vendor_account: GlideElement<ast_contract, glideElementType.defaultType>;
vendor_contract: GlideElement<ast_contract, glideElementType.defaultType>;
yearly_cost: GlideElement<ast_contract, glideElementType.g_currency>;
      _referenceKeys: never | {
        "application_model.sys_id": string
"application_model.acquisition_method": string
"application_model.asset_tracking_strategy": string
"application_model.barcode": string
"application_model.bundle": string
"application_model.certified": string
"application_model.cmdb_ci_class": string
"application_model.cmdb_model_category": string
"application_model.comments": string
"application_model.cost": string
"application_model.depreciation": string
"application_model.description": string
"application_model.display_name": string
"application_model.expenditure_type": string
"application_model.flow_rate": string
"application_model.full_name": string
"application_model.main_component": string
"application_model.manufacturer": string
"application_model.model_number": string
"application_model.name": string
"application_model.owner": string
"application_model.picture": string
"application_model.power_consumption": string
"application_model.product_catalog_item": string
"application_model.rack_units": string
"application_model.salvage_value": string
"application_model.short_description": string
"application_model.sla": string
"application_model.sound_power": string
"application_model.status": string
"application_model.sys_class_name": string
"application_model.sys_created_by": string
"application_model.sys_created_on": string
"application_model.sys_domain": string
"application_model.sys_domain_path": string
"application_model.sys_mod_count": string
"application_model.sys_updated_by": string
"application_model.sys_updated_on": string
"application_model.type": string
"application_model.weight": string
"approver.accumulated_roles": string
"approver.active": string
"approver.avatar": string
"approver.building": string
"approver.calendar_integration": string
"approver.city": string
"approver.company": string
"approver.cost_center": string
"approver.country": string
"approver.date_format": string
"approver.default_perspective": string
"approver.department": string
"approver.email": string
"approver.employee_number": string
"approver.enable_multifactor_authn": string
"approver.failed_attempts": string
"approver.first_name": string
"approver.gender": string
"approver.home_phone": string
"approver.internal_integration_user": string
"approver.introduction": string
"approver.last_login": string
"approver.last_login_time": string
"approver.last_name": string
"approver.ldap_server": string
"approver.location": string
"approver.locked_out": string
"approver.manager": string
"approver.middle_name": string
"approver.mobile_phone": string
"approver.name": string
"approver.notification": string
"approver.password_needs_reset": string
"approver.phone": string
"approver.photo": string
"approver.preferred_language": string
"approver.roles": string
"approver.schedule": string
"approver.source": string
"approver.state": string
"approver.street": string
"approver.sys_class_name": string
"approver.sys_created_by": string
"approver.sys_created_on": string
"approver.sys_domain": string
"approver.sys_domain_path": string
"approver.sys_id": string
"approver.sys_mod_count": string
"approver.sys_updated_by": string
"approver.sys_updated_on": string
"approver.time_format": string
"approver.time_zone": string
"approver.title": string
"approver.user_name": string
"approver.user_password": string
"approver.vip": string
"approver.web_service_access_only": string
"approver.zip": string
"business_owner.accumulated_roles": string
"business_owner.active": string
"business_owner.avatar": string
"business_owner.building": string
"business_owner.calendar_integration": string
"business_owner.city": string
"business_owner.company": string
"business_owner.cost_center": string
"business_owner.country": string
"business_owner.date_format": string
"business_owner.default_perspective": string
"business_owner.department": string
"business_owner.email": string
"business_owner.employee_number": string
"business_owner.enable_multifactor_authn": string
"business_owner.failed_attempts": string
"business_owner.first_name": string
"business_owner.gender": string
"business_owner.home_phone": string
"business_owner.internal_integration_user": string
"business_owner.introduction": string
"business_owner.last_login": string
"business_owner.last_login_time": string
"business_owner.last_name": string
"business_owner.ldap_server": string
"business_owner.location": string
"business_owner.locked_out": string
"business_owner.manager": string
"business_owner.middle_name": string
"business_owner.mobile_phone": string
"business_owner.name": string
"business_owner.notification": string
"business_owner.password_needs_reset": string
"business_owner.phone": string
"business_owner.photo": string
"business_owner.preferred_language": string
"business_owner.roles": string
"business_owner.schedule": string
"business_owner.source": string
"business_owner.state": string
"business_owner.street": string
"business_owner.sys_class_name": string
"business_owner.sys_created_by": string
"business_owner.sys_created_on": string
"business_owner.sys_domain": string
"business_owner.sys_domain_path": string
"business_owner.sys_id": string
"business_owner.sys_mod_count": string
"business_owner.sys_updated_by": string
"business_owner.sys_updated_on": string
"business_owner.time_format": string
"business_owner.time_zone": string
"business_owner.title": string
"business_owner.user_name": string
"business_owner.user_password": string
"business_owner.vip": string
"business_owner.web_service_access_only": string
"business_owner.zip": string
"contract_administrator.accumulated_roles": string
"contract_administrator.active": string
"contract_administrator.avatar": string
"contract_administrator.building": string
"contract_administrator.calendar_integration": string
"contract_administrator.city": string
"contract_administrator.company": string
"contract_administrator.cost_center": string
"contract_administrator.country": string
"contract_administrator.date_format": string
"contract_administrator.default_perspective": string
"contract_administrator.department": string
"contract_administrator.email": string
"contract_administrator.employee_number": string
"contract_administrator.enable_multifactor_authn": string
"contract_administrator.failed_attempts": string
"contract_administrator.first_name": string
"contract_administrator.gender": string
"contract_administrator.home_phone": string
"contract_administrator.internal_integration_user": string
"contract_administrator.introduction": string
"contract_administrator.last_login": string
"contract_administrator.last_login_time": string
"contract_administrator.last_name": string
"contract_administrator.ldap_server": string
"contract_administrator.location": string
"contract_administrator.locked_out": string
"contract_administrator.manager": string
"contract_administrator.middle_name": string
"contract_administrator.mobile_phone": string
"contract_administrator.name": string
"contract_administrator.notification": string
"contract_administrator.password_needs_reset": string
"contract_administrator.phone": string
"contract_administrator.photo": string
"contract_administrator.preferred_language": string
"contract_administrator.roles": string
"contract_administrator.schedule": string
"contract_administrator.source": string
"contract_administrator.state": string
"contract_administrator.street": string
"contract_administrator.sys_class_name": string
"contract_administrator.sys_created_by": string
"contract_administrator.sys_created_on": string
"contract_administrator.sys_domain": string
"contract_administrator.sys_domain_path": string
"contract_administrator.sys_id": string
"contract_administrator.sys_mod_count": string
"contract_administrator.sys_updated_by": string
"contract_administrator.sys_updated_on": string
"contract_administrator.time_format": string
"contract_administrator.time_zone": string
"contract_administrator.title": string
"contract_administrator.user_name": string
"contract_administrator.user_password": string
"contract_administrator.vip": string
"contract_administrator.web_service_access_only": string
"contract_administrator.zip": string
"contract_model.acquisition_method": string
"contract_model.asset_tracking_strategy": string
"contract_model.barcode": string
"contract_model.bundle": string
"contract_model.certified": string
"contract_model.cmdb_ci_class": string
"contract_model.cmdb_model_category": string
"contract_model.comments": string
"contract_model.cost": string
"contract_model.depreciation": string
"contract_model.description": string
"contract_model.display_name": string
"contract_model.expenditure_type": string
"contract_model.flow_rate": string
"contract_model.full_name": string
"contract_model.main_component": string
"contract_model.manufacturer": string
"contract_model.model_number": string
"contract_model.name": string
"contract_model.owner": string
"contract_model.picture": string
"contract_model.power_consumption": string
"contract_model.product_catalog_item": string
"contract_model.rack_units": string
"contract_model.salvage_value": string
"contract_model.short_description": string
"contract_model.sla": string
"contract_model.sound_power": string
"contract_model.status": string
"contract_model.sys_class_name": string
"contract_model.sys_created_by": string
"contract_model.sys_created_on": string
"contract_model.sys_domain": string
"contract_model.sys_domain_path": string
"contract_model.sys_id": string
"contract_model.sys_mod_count": string
"contract_model.sys_updated_by": string
"contract_model.sys_updated_on": string
"contract_model.type": string
"contract_model.weight": string
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
"customer.apple_icon": string
"customer.banner_image": string
"customer.banner_image_light": string
"customer.banner_text": string
"customer.city": string
"customer.contact": string
"customer.country": string
"customer.customer": string
"customer.discount": string
"customer.fax_phone": string
"customer.fiscal_year": string
"customer.latitude": string
"customer.lat_long_error": string
"customer.longitude": string
"customer.manufacturer": string
"customer.market_cap": string
"customer.name": string
"customer.notes": string
"customer.num_employees": string
"customer.parent": string
"customer.phone": string
"customer.primary": string
"customer.profits": string
"customer.publicly_traded": string
"customer.rank_tier": string
"customer.revenue_per_year": string
"customer.state": string
"customer.stock_price": string
"customer.stock_symbol": string
"customer.street": string
"customer.sys_class_name": string
"customer.sys_created_by": string
"customer.sys_created_on": string
"customer.sys_id": string
"customer.sys_mod_count": string
"customer.sys_updated_by": string
"customer.sys_updated_on": string
"customer.theme": string
"customer.vendor": string
"customer.vendor_manager": string
"customer.vendor_type": string
"customer.website": string
"customer.zip": string
"expiration.compliant": string
"expiration.condition": string
"expiration.condition_check": string
"expiration.event_name": string
"expiration.name": string
"expiration.order": string
"expiration.sys_domain": string
"expiration.sys_domain_path": string
"expiration.sys_id": string
"expiration.table": string
"expiration.sys_class_name": string
"expiration.sys_created_by": string
"expiration.sys_created_on": string
"expiration.sys_mod_count": string
"expiration.sys_name": string
"expiration.sys_package": string
"expiration.sys_policy": string
"expiration.sys_scope": string
"expiration.sys_updated_by": string
"expiration.sys_updated_on": string
"expiration.sys_update_name": string
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
"parent_contract.active": string
"parent_contract.applicable_taxes": string
"parent_contract.application_model": string
"parent_contract.approval_history": string
"parent_contract.approver": string
"parent_contract.business_owner": string
"parent_contract.commitment": string
"parent_contract.contract_administrator": string
"parent_contract.contract_model": string
"parent_contract.cost_adjustment": string
"parent_contract.cost_adjustment_percentage": string
"parent_contract.cost_adjustment_reason": string
"parent_contract.cost_adjustment_type": string
"parent_contract.cost_center": string
"parent_contract.cost_per_unit": string
"parent_contract.covers": string
"parent_contract.customer": string
"parent_contract.description": string
"parent_contract.discount": string
"parent_contract.ends": string
"parent_contract.expiration": string
"parent_contract.invoice_payment_terms": string
"parent_contract.license_quantity_entitled": string
"parent_contract.license_type": string
"parent_contract.lifetime_cost": string
"parent_contract.location": string
"parent_contract.monthly_cost": string
"parent_contract.number": string
"parent_contract.parent_contract": string
"parent_contract.payment_amount": string
"parent_contract.payment_schedule": string
"parent_contract.po_number": string
"parent_contract.process": string
"parent_contract.process_non_contractual_slas": string
"parent_contract.ratecard": string
"parent_contract.renewable": string
"parent_contract.renewal_contact": string
"parent_contract.renewal_date": string
"parent_contract.renewal_end_date": string
"parent_contract.renewal_options": string
"parent_contract.sales_tax": string
"parent_contract.short_description": string
"parent_contract.starts": string
"parent_contract.state": string
"parent_contract.substate": string
"parent_contract.sub_total_cost": string
"parent_contract.sys_class_name": string
"parent_contract.sys_created_by": string
"parent_contract.sys_created_on": string
"parent_contract.sys_domain": string
"parent_contract.sys_domain_path": string
"parent_contract.sys_id": string
"parent_contract.sys_mod_count": string
"parent_contract.sys_updated_by": string
"parent_contract.sys_updated_on": string
"parent_contract.tax_cost": string
"parent_contract.tax_exempt": string
"parent_contract.tax_rate": string
"parent_contract.terms_and_conditions": string
"parent_contract.total_cost": string
"parent_contract.vendor": string
"parent_contract.vendor_account": string
"parent_contract.vendor_contract": string
"parent_contract.yearly_cost": string
"renewal_contact.accumulated_roles": string
"renewal_contact.active": string
"renewal_contact.avatar": string
"renewal_contact.building": string
"renewal_contact.calendar_integration": string
"renewal_contact.city": string
"renewal_contact.company": string
"renewal_contact.cost_center": string
"renewal_contact.country": string
"renewal_contact.date_format": string
"renewal_contact.default_perspective": string
"renewal_contact.department": string
"renewal_contact.email": string
"renewal_contact.employee_number": string
"renewal_contact.enable_multifactor_authn": string
"renewal_contact.failed_attempts": string
"renewal_contact.first_name": string
"renewal_contact.gender": string
"renewal_contact.home_phone": string
"renewal_contact.internal_integration_user": string
"renewal_contact.introduction": string
"renewal_contact.last_login": string
"renewal_contact.last_login_time": string
"renewal_contact.last_name": string
"renewal_contact.ldap_server": string
"renewal_contact.location": string
"renewal_contact.locked_out": string
"renewal_contact.manager": string
"renewal_contact.middle_name": string
"renewal_contact.mobile_phone": string
"renewal_contact.name": string
"renewal_contact.notification": string
"renewal_contact.password_needs_reset": string
"renewal_contact.phone": string
"renewal_contact.photo": string
"renewal_contact.preferred_language": string
"renewal_contact.roles": string
"renewal_contact.schedule": string
"renewal_contact.source": string
"renewal_contact.state": string
"renewal_contact.street": string
"renewal_contact.sys_class_name": string
"renewal_contact.sys_created_by": string
"renewal_contact.sys_created_on": string
"renewal_contact.sys_domain": string
"renewal_contact.sys_domain_path": string
"renewal_contact.sys_id": string
"renewal_contact.sys_mod_count": string
"renewal_contact.sys_updated_by": string
"renewal_contact.sys_updated_on": string
"renewal_contact.time_format": string
"renewal_contact.time_zone": string
"renewal_contact.title": string
"renewal_contact.user_name": string
"renewal_contact.user_password": string
"renewal_contact.vip": string
"renewal_contact.web_service_access_only": string
"renewal_contact.zip": string
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
   