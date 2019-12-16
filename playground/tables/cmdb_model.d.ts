declare interface cmdb_model {
      acquisition_method: GlideElement<cmdb_model, glideElementType.defaultType>;
asset_tracking_strategy: GlideElement<cmdb_model, glideElementType.defaultType>;
barcode: GlideElement<cmdb_model, glideElementType.defaultType>;
bundle: GlideElement<cmdb_model, glideElementType.g_boolean>;
certified: GlideElement<cmdb_model, glideElementType.g_boolean>;
cmdb_ci_class: GlideElement<cmdb_model, glideElementType.defaultType>;
cmdb_model_category: GlideElement<cmdb_model, glideElementType.defaultType>;
comments: GlideElement<cmdb_model, glideElementType.defaultType>;
cost: GlideElement<cmdb_model, glideElementType.g_price>;
depreciation: GlideElement<cmdb_model, glideElementType.g_reference<cmdb_depreciation>>;
description: GlideElement<cmdb_model, glideElementType.defaultType>;
display_name: GlideElement<cmdb_model, glideElementType.defaultType>;
expenditure_type: GlideElement<cmdb_model, glideElementType.defaultType>;
flow_rate: GlideElement<cmdb_model, glideElementType.defaultType>;
full_name: GlideElement<cmdb_model, glideElementType.defaultType>;
main_component: GlideElement<cmdb_model, glideElementType.g_reference<cmdb_m2m_model_component>>;
manufacturer: GlideElement<cmdb_model, glideElementType.g_reference<core_company>>;
model_number: GlideElement<cmdb_model, glideElementType.defaultType>;
name: GlideElement<cmdb_model, glideElementType.defaultType>;
owner: GlideElement<cmdb_model, glideElementType.g_reference<sys_user>>;
picture: GlideElement<cmdb_model, glideElementType.defaultType>;
power_consumption: GlideElement<cmdb_model, glideElementType.defaultType>;
product_catalog_item: GlideElement<cmdb_model, glideElementType.g_reference<sc_cat_item>>;
rack_units: GlideElement<cmdb_model, glideElementType.defaultType>;
salvage_value: GlideElement<cmdb_model, glideElementType.g_currency>;
short_description: GlideElement<cmdb_model, glideElementType.defaultType>;
sla: GlideElement<cmdb_model, glideElementType.defaultType>;
sound_power: GlideElement<cmdb_model, glideElementType.defaultType>;
status: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_class_name: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_created_by: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_created_on: GlideElement<cmdb_model, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_domain_path: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_id: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_mod_count: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_updated_by: GlideElement<cmdb_model, glideElementType.defaultType>;
sys_updated_on: GlideElement<cmdb_model, glideElementType.g_glide_date_time>;
type: GlideElement<cmdb_model, glideElementType.defaultType>;
weight: GlideElement<cmdb_model, glideElementType.defaultType>;
      _referenceKeys: never | {
        "depreciation.category": string
"depreciation.depreciation_time": string
"depreciation.depreciation_unit": string
"depreciation.name": string
"depreciation.script": string
"depreciation.sys_created_by": string
"depreciation.sys_created_on": string
"depreciation.sys_id": string
"depreciation.sys_mod_count": string
"depreciation.sys_updated_by": string
"depreciation.sys_updated_on": string
"main_component.child": string
"main_component.master": string
"main_component.model_category": string
"main_component.parent": string
"main_component.sys_created_by": string
"main_component.sys_created_on": string
"main_component.sys_id": string
"main_component.sys_mod_count": string
"main_component.sys_updated_by": string
"main_component.sys_updated_on": string
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
"owner.accumulated_roles": string
"owner.active": string
"owner.avatar": string
"owner.building": string
"owner.calendar_integration": string
"owner.city": string
"owner.company": string
"owner.cost_center": string
"owner.country": string
"owner.date_format": string
"owner.default_perspective": string
"owner.department": string
"owner.email": string
"owner.employee_number": string
"owner.enable_multifactor_authn": string
"owner.failed_attempts": string
"owner.first_name": string
"owner.gender": string
"owner.home_phone": string
"owner.internal_integration_user": string
"owner.introduction": string
"owner.last_login": string
"owner.last_login_time": string
"owner.last_name": string
"owner.ldap_server": string
"owner.location": string
"owner.locked_out": string
"owner.manager": string
"owner.middle_name": string
"owner.mobile_phone": string
"owner.name": string
"owner.notification": string
"owner.password_needs_reset": string
"owner.phone": string
"owner.photo": string
"owner.preferred_language": string
"owner.roles": string
"owner.schedule": string
"owner.source": string
"owner.state": string
"owner.street": string
"owner.sys_class_name": string
"owner.sys_created_by": string
"owner.sys_created_on": string
"owner.sys_domain": string
"owner.sys_domain_path": string
"owner.sys_id": string
"owner.sys_mod_count": string
"owner.sys_updated_by": string
"owner.sys_updated_on": string
"owner.time_format": string
"owner.time_zone": string
"owner.title": string
"owner.user_name": string
"owner.user_password": string
"owner.vip": string
"owner.web_service_access_only": string
"owner.zip": string
"product_catalog_item.active": string
"product_catalog_item.availability": string
"product_catalog_item.billable": string
"product_catalog_item.category": string
"product_catalog_item.cost": string
"product_catalog_item.custom_cart": string
"product_catalog_item.delivery_plan": string
"product_catalog_item.delivery_plan_script": string
"product_catalog_item.delivery_time": string
"product_catalog_item.description": string
"product_catalog_item.display_price_property": string
"product_catalog_item.entitlement_script": string
"product_catalog_item.group": string
"product_catalog_item.hide_sp": string
"product_catalog_item.icon": string
"product_catalog_item.ignore_price": string
"product_catalog_item.image": string
"product_catalog_item.list_price": string
"product_catalog_item.location": string
"product_catalog_item.mandatory_attachment": string
"product_catalog_item.meta": string
"product_catalog_item.mobile_hide_price": string
"product_catalog_item.mobile_picture": string
"product_catalog_item.mobile_picture_type": string
"product_catalog_item.model": string
"product_catalog_item.name": string
"product_catalog_item.no_attachment_v2": string
"product_catalog_item.no_cart": string
"product_catalog_item.no_cart_v2": string
"product_catalog_item.no_delivery_time_v2": string
"product_catalog_item.no_order": string
"product_catalog_item.no_order_now": string
"product_catalog_item.no_proceed_checkout": string
"product_catalog_item.no_quantity": string
"product_catalog_item.no_quantity_v2": string
"product_catalog_item.no_search": string
"product_catalog_item.no_wishlist_v2": string
"product_catalog_item.omit_price": string
"product_catalog_item.order": string
"product_catalog_item.ordered_item_link": string
"product_catalog_item.picture": string
"product_catalog_item.preview": string
"product_catalog_item.price": string
"product_catalog_item.recurring_frequency": string
"product_catalog_item.recurring_price": string
"product_catalog_item.request_method": string
"product_catalog_item.roles": string
"product_catalog_item.sc_catalogs": string
"product_catalog_item.sc_ic_item_staging": string
"product_catalog_item.sc_ic_version": string
"product_catalog_item.short_description": string
"product_catalog_item.show_variable_help_on_load": string
"product_catalog_item.start_closed": string
"product_catalog_item.sys_id": string
"product_catalog_item.template": string
"product_catalog_item.type": string
"product_catalog_item.use_sc_layout": string
"product_catalog_item.vendor": string
"product_catalog_item.visible_bundle": string
"product_catalog_item.visible_guide": string
"product_catalog_item.visible_standalone": string
"product_catalog_item.workflow": string
"product_catalog_item.sys_class_name": string
"product_catalog_item.sys_created_by": string
"product_catalog_item.sys_created_on": string
"product_catalog_item.sys_mod_count": string
"product_catalog_item.sys_name": string
"product_catalog_item.sys_package": string
"product_catalog_item.sys_policy": string
"product_catalog_item.sys_scope": string
"product_catalog_item.sys_updated_by": string
"product_catalog_item.sys_updated_on": string
"product_catalog_item.sys_update_name": string;
      }
    }
   