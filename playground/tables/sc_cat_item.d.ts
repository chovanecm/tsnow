declare interface sc_cat_item {
      active: GlideElement<sc_cat_item, glideElementType.g_boolean>;
availability: GlideElement<sc_cat_item, glideElementType.defaultType>;
billable: GlideElement<sc_cat_item, glideElementType.g_boolean>;
category: GlideElement<sc_cat_item, glideElementType.g_reference<sc_category>>;
cost: GlideElement<sc_cat_item, glideElementType.defaultType>;
custom_cart: GlideElement<sc_cat_item, glideElementType.g_reference<sys_ui_macro>>;
delivery_plan: GlideElement<sc_cat_item, glideElementType.g_reference<sc_cat_item_delivery_plan>>;
delivery_plan_script: GlideElement<sc_cat_item, glideElementType.defaultType>;
delivery_time: GlideElement<sc_cat_item, glideElementType.defaultType>;
description: GlideElement<sc_cat_item, glideElementType.defaultType>;
display_price_property: GlideElement<sc_cat_item, glideElementType.defaultType>;
entitlement_script: GlideElement<sc_cat_item, glideElementType.defaultType>;
group: GlideElement<sc_cat_item, glideElementType.g_reference<sys_user_group>>;
hide_sp: GlideElement<sc_cat_item, glideElementType.g_boolean>;
icon: GlideElement<sc_cat_item, glideElementType.defaultType>;
ignore_price: GlideElement<sc_cat_item, glideElementType.g_boolean>;
image: GlideElement<sc_cat_item, glideElementType.defaultType>;
list_price: GlideElement<sc_cat_item, glideElementType.g_currency>;
location: GlideElement<sc_cat_item, glideElementType.g_reference<cmn_location>>;
mandatory_attachment: GlideElement<sc_cat_item, glideElementType.g_boolean>;
meta: GlideElement<sc_cat_item, glideElementType.defaultType>;
mobile_hide_price: GlideElement<sc_cat_item, glideElementType.g_boolean>;
mobile_picture: GlideElement<sc_cat_item, glideElementType.defaultType>;
mobile_picture_type: GlideElement<sc_cat_item, glideElementType.defaultType>;
model: GlideElement<sc_cat_item, glideElementType.g_reference<cmdb_model>>;
name: GlideElement<sc_cat_item, glideElementType.defaultType>;
no_attachment_v2: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_cart: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_cart_v2: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_delivery_time_v2: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_order: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_order_now: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_proceed_checkout: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_quantity: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_quantity_v2: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_search: GlideElement<sc_cat_item, glideElementType.g_boolean>;
no_wishlist_v2: GlideElement<sc_cat_item, glideElementType.g_boolean>;
omit_price: GlideElement<sc_cat_item, glideElementType.g_boolean>;
order: GlideElement<sc_cat_item, glideElementType.defaultType>;
ordered_item_link: GlideElement<sc_cat_item, glideElementType.g_reference<sc_ordered_item_link>>;
picture: GlideElement<sc_cat_item, glideElementType.defaultType>;
preview: GlideElement<sc_cat_item, glideElementType.defaultType>;
price: GlideElement<sc_cat_item, glideElementType.g_price>;
recurring_frequency: GlideElement<sc_cat_item, glideElementType.g_choice<string>>;
recurring_price: GlideElement<sc_cat_item, glideElementType.g_price>;
request_method: GlideElement<sc_cat_item, glideElementType.defaultType>;
roles: GlideElement<sc_cat_item, glideElementType.defaultType>;
sc_catalogs: GlideElement<sc_cat_item, glideElementType.defaultType>;
sc_ic_item_staging: GlideElement<sc_cat_item, glideElementType.g_reference<sc_ic_item_staging>>;
sc_ic_version: GlideElement<sc_cat_item, glideElementType.defaultType>;
short_description: GlideElement<sc_cat_item, glideElementType.defaultType>;
show_variable_help_on_load: GlideElement<sc_cat_item, glideElementType.g_boolean>;
start_closed: GlideElement<sc_cat_item, glideElementType.g_boolean>;
sys_id: GlideElement<sc_cat_item, glideElementType.defaultType>;
template: GlideElement<sc_cat_item, glideElementType.g_reference<sys_template>>;
type: GlideElement<sc_cat_item, glideElementType.defaultType>;
use_sc_layout: GlideElement<sc_cat_item, glideElementType.g_boolean>;
vendor: GlideElement<sc_cat_item, glideElementType.g_reference<core_company>>;
visible_bundle: GlideElement<sc_cat_item, glideElementType.g_boolean>;
visible_guide: GlideElement<sc_cat_item, glideElementType.g_boolean>;
visible_standalone: GlideElement<sc_cat_item, glideElementType.g_boolean>;
workflow: GlideElement<sc_cat_item, glideElementType.g_reference<wf_workflow>>;
sys_class_name: GlideElement<sc_cat_item, glideElementType.defaultType>;
sys_created_by: GlideElement<sc_cat_item, glideElementType.defaultType>;
sys_created_on: GlideElement<sc_cat_item, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sc_cat_item, glideElementType.defaultType>;
sys_name: GlideElement<sc_cat_item, glideElementType.defaultType>;
sys_package: GlideElement<sc_cat_item, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sc_cat_item, glideElementType.defaultType>;
sys_scope: GlideElement<sc_cat_item, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sc_cat_item, glideElementType.defaultType>;
sys_updated_on: GlideElement<sc_cat_item, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sc_cat_item, glideElementType.defaultType>;
      _referenceKeys: never | {
        "category.active": string
"category.description": string
"category.entitlement_script": string
"category.header_icon": string
"category.homepage_image": string
"category.homepage_renderer": string
"category.icon": string
"category.image": string
"category.location": string
"category.mobile_hide_description": string
"category.mobile_picture": string
"category.mobile_subcategory_render_type": string
"category.module": string
"category.order": string
"category.parent": string
"category.roles": string
"category.sc_catalog": string
"category.sys_id": string
"category.title": string
"category.sys_class_name": string
"category.sys_created_by": string
"category.sys_created_on": string
"category.sys_mod_count": string
"category.sys_name": string
"category.sys_package": string
"category.sys_policy": string
"category.sys_scope": string
"category.sys_updated_by": string
"category.sys_updated_on": string
"category.sys_update_name": string
"custom_cart.active": string
"custom_cart.category": string
"custom_cart.description": string
"custom_cart.media_type": string
"custom_cart.name": string
"custom_cart.scoped_name": string
"custom_cart.sys_id": string
"custom_cart.xml": string
"custom_cart.sys_class_name": string
"custom_cart.sys_created_by": string
"custom_cart.sys_created_on": string
"custom_cart.sys_mod_count": string
"custom_cart.sys_name": string
"custom_cart.sys_package": string
"custom_cart.sys_policy": string
"custom_cart.sys_scope": string
"custom_cart.sys_updated_by": string
"custom_cart.sys_updated_on": string
"custom_cart.sys_update_name": string
"delivery_plan.active": string
"delivery_plan.advanced": string
"delivery_plan.calendar": string
"delivery_plan.condition": string
"delivery_plan.name": string
"delivery_plan.order": string
"delivery_plan.parent_table": string
"delivery_plan.script": string
"delivery_plan.short_description": string
"delivery_plan.sys_id": string
"delivery_plan.task_table": string
"delivery_plan.total_delivery_time": string
"delivery_plan.sys_class_name": string
"delivery_plan.sys_created_by": string
"delivery_plan.sys_created_on": string
"delivery_plan.sys_mod_count": string
"delivery_plan.sys_name": string
"delivery_plan.sys_package": string
"delivery_plan.sys_policy": string
"delivery_plan.sys_scope": string
"delivery_plan.sys_updated_by": string
"delivery_plan.sys_updated_on": string
"delivery_plan.sys_update_name": string
"group.active": string
"group.cost_center": string
"group.default_assignee": string
"group.description": string
"group.email": string
"group.exclude_manager": string
"group.include_members": string
"group.manager": string
"group.name": string
"group.parent": string
"group.roles": string
"group.source": string
"group.sys_created_by": string
"group.sys_created_on": string
"group.sys_id": string
"group.sys_mod_count": string
"group.sys_updated_by": string
"group.sys_updated_on": string
"group.type": string
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
"model.acquisition_method": string
"model.asset_tracking_strategy": string
"model.barcode": string
"model.bundle": string
"model.certified": string
"model.cmdb_ci_class": string
"model.cmdb_model_category": string
"model.comments": string
"model.cost": string
"model.depreciation": string
"model.description": string
"model.display_name": string
"model.expenditure_type": string
"model.flow_rate": string
"model.full_name": string
"model.main_component": string
"model.manufacturer": string
"model.model_number": string
"model.name": string
"model.owner": string
"model.picture": string
"model.power_consumption": string
"model.product_catalog_item": string
"model.rack_units": string
"model.salvage_value": string
"model.short_description": string
"model.sla": string
"model.sound_power": string
"model.status": string
"model.sys_class_name": string
"model.sys_created_by": string
"model.sys_created_on": string
"model.sys_domain": string
"model.sys_domain_path": string
"model.sys_id": string
"model.sys_mod_count": string
"model.sys_updated_by": string
"model.sys_updated_on": string
"model.type": string
"model.weight": string
"ordered_item_link.link_text": string
"ordered_item_link.link_url": string
"ordered_item_link.name": string
"ordered_item_link.sys_id": string
"ordered_item_link.target": string
"ordered_item_link.sys_class_name": string
"ordered_item_link.sys_created_by": string
"ordered_item_link.sys_created_on": string
"ordered_item_link.sys_mod_count": string
"ordered_item_link.sys_name": string
"ordered_item_link.sys_package": string
"ordered_item_link.sys_policy": string
"ordered_item_link.sys_scope": string
"ordered_item_link.sys_updated_by": string
"ordered_item_link.sys_updated_on": string
"ordered_item_link.sys_update_name": string
"sc_ic_item_staging.active": string
"sc_ic_item_staging.aprvl_defn_changed": string
"sc_ic_item_staging.availability": string
"sc_ic_item_staging.cost": string
"sc_ic_item_staging.counter": string
"sc_ic_item_staging.description": string
"sc_ic_item_staging.desktop_image": string
"sc_ic_item_staging.entitlements": string
"sc_ic_item_staging.fulfillment_group": string
"sc_ic_item_staging.fulfillment_user": string
"sc_ic_item_staging.item_type": string
"sc_ic_item_staging.layout_changed": string
"sc_ic_item_staging.mobile_image": string
"sc_ic_item_staging.name": string
"sc_ic_item_staging.recurring_cost": string
"sc_ic_item_staging.recurring_frequency": string
"sc_ic_item_staging.sc_catalogs": string
"sc_ic_item_staging.sc_categories": string
"sc_ic_item_staging.sc_cat_item": string
"sc_ic_item_staging.short_description": string
"sc_ic_item_staging.state": string
"sc_ic_item_staging.submission_message": string
"sc_ic_item_staging.sys_id": string
"sc_ic_item_staging.table_name": string
"sc_ic_item_staging.task_defn_changed": string
"sc_ic_item_staging.var_defn_changed": string
"sc_ic_item_staging.var_meta_changed": string
"sc_ic_item_staging.version": string
"sc_ic_item_staging.workflow": string
"sc_ic_item_staging.sys_class_name": string
"sc_ic_item_staging.sys_created_by": string
"sc_ic_item_staging.sys_created_on": string
"sc_ic_item_staging.sys_mod_count": string
"sc_ic_item_staging.sys_name": string
"sc_ic_item_staging.sys_package": string
"sc_ic_item_staging.sys_policy": string
"sc_ic_item_staging.sys_scope": string
"sc_ic_item_staging.sys_updated_by": string
"sc_ic_item_staging.sys_updated_on": string
"sc_ic_item_staging.sys_update_name": string
"template.active": string
"template.global": string
"template.group": string
"template.link_element": string
"template.name": string
"template.next": string
"template.next_child": string
"template.roles": string
"template.short_description": string
"template.show_on_template_bar": string
"template.stand_alone": string
"template.sys_id": string
"template.table": string
"template.template": string
"template.user": string
"template.view": string
"template.sys_class_name": string
"template.sys_created_by": string
"template.sys_created_on": string
"template.sys_mod_count": string
"template.sys_name": string
"template.sys_package": string
"template.sys_policy": string
"template.sys_scope": string
"template.sys_updated_by": string
"template.sys_updated_on": string
"template.sys_update_name": string
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
"vendor.zip": string
"workflow.access": string
"workflow.description": string
"workflow.name": string
"workflow.preview": string
"workflow.sys_domain": string
"workflow.sys_domain_path": string
"workflow.sys_id": string
"workflow.sys_overrides": string
"workflow.table": string
"workflow.template": string
"workflow.sys_class_name": string
"workflow.sys_created_by": string
"workflow.sys_created_on": string
"workflow.sys_mod_count": string
"workflow.sys_name": string
"workflow.sys_package": string
"workflow.sys_policy": string
"workflow.sys_scope": string
"workflow.sys_updated_by": string
"workflow.sys_updated_on": string
"workflow.sys_update_name": string
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
   