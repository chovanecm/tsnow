declare interface sc_ic_item_staging {
      active: GlideElement<sc_ic_item_staging, glideElementType.g_boolean>;
aprvl_defn_changed: GlideElement<sc_ic_item_staging, glideElementType.g_boolean>;
availability: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
cost: GlideElement<sc_ic_item_staging, glideElementType.g_price>;
counter: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
description: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
desktop_image: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
entitlements: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
fulfillment_group: GlideElement<sc_ic_item_staging, glideElementType.g_reference<sys_user_group>>;
fulfillment_user: GlideElement<sc_ic_item_staging, glideElementType.g_reference<sys_user>>;
item_type: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
layout_changed: GlideElement<sc_ic_item_staging, glideElementType.g_boolean>;
mobile_image: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
name: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
recurring_cost: GlideElement<sc_ic_item_staging, glideElementType.g_price>;
recurring_frequency: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sc_catalogs: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sc_categories: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sc_cat_item: GlideElement<sc_ic_item_staging, glideElementType.g_reference<sc_cat_item>>;
short_description: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
state: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
submission_message: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_id: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
table_name: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
task_defn_changed: GlideElement<sc_ic_item_staging, glideElementType.g_boolean>;
var_defn_changed: GlideElement<sc_ic_item_staging, glideElementType.g_boolean>;
var_meta_changed: GlideElement<sc_ic_item_staging, glideElementType.g_boolean>;
version: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
workflow: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_class_name: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_created_by: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_created_on: GlideElement<sc_ic_item_staging, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_name: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_package: GlideElement<sc_ic_item_staging, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_scope: GlideElement<sc_ic_item_staging, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
sys_updated_on: GlideElement<sc_ic_item_staging, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sc_ic_item_staging, glideElementType.defaultType>;
      _referenceKeys: never | {
        "fulfillment_group.active": string
"fulfillment_group.cost_center": string
"fulfillment_group.default_assignee": string
"fulfillment_group.description": string
"fulfillment_group.email": string
"fulfillment_group.exclude_manager": string
"fulfillment_group.include_members": string
"fulfillment_group.manager": string
"fulfillment_group.name": string
"fulfillment_group.parent": string
"fulfillment_group.roles": string
"fulfillment_group.source": string
"fulfillment_group.sys_created_by": string
"fulfillment_group.sys_created_on": string
"fulfillment_group.sys_id": string
"fulfillment_group.sys_mod_count": string
"fulfillment_group.sys_updated_by": string
"fulfillment_group.sys_updated_on": string
"fulfillment_group.type": string
"fulfillment_user.accumulated_roles": string
"fulfillment_user.active": string
"fulfillment_user.avatar": string
"fulfillment_user.building": string
"fulfillment_user.calendar_integration": string
"fulfillment_user.city": string
"fulfillment_user.company": string
"fulfillment_user.cost_center": string
"fulfillment_user.country": string
"fulfillment_user.date_format": string
"fulfillment_user.default_perspective": string
"fulfillment_user.department": string
"fulfillment_user.email": string
"fulfillment_user.employee_number": string
"fulfillment_user.enable_multifactor_authn": string
"fulfillment_user.failed_attempts": string
"fulfillment_user.first_name": string
"fulfillment_user.gender": string
"fulfillment_user.home_phone": string
"fulfillment_user.internal_integration_user": string
"fulfillment_user.introduction": string
"fulfillment_user.last_login": string
"fulfillment_user.last_login_time": string
"fulfillment_user.last_name": string
"fulfillment_user.ldap_server": string
"fulfillment_user.location": string
"fulfillment_user.locked_out": string
"fulfillment_user.manager": string
"fulfillment_user.middle_name": string
"fulfillment_user.mobile_phone": string
"fulfillment_user.name": string
"fulfillment_user.notification": string
"fulfillment_user.password_needs_reset": string
"fulfillment_user.phone": string
"fulfillment_user.photo": string
"fulfillment_user.preferred_language": string
"fulfillment_user.roles": string
"fulfillment_user.schedule": string
"fulfillment_user.source": string
"fulfillment_user.state": string
"fulfillment_user.street": string
"fulfillment_user.sys_class_name": string
"fulfillment_user.sys_created_by": string
"fulfillment_user.sys_created_on": string
"fulfillment_user.sys_domain": string
"fulfillment_user.sys_domain_path": string
"fulfillment_user.sys_id": string
"fulfillment_user.sys_mod_count": string
"fulfillment_user.sys_updated_by": string
"fulfillment_user.sys_updated_on": string
"fulfillment_user.time_format": string
"fulfillment_user.time_zone": string
"fulfillment_user.title": string
"fulfillment_user.user_name": string
"fulfillment_user.user_password": string
"fulfillment_user.vip": string
"fulfillment_user.web_service_access_only": string
"fulfillment_user.zip": string
"sc_cat_item.active": string
"sc_cat_item.availability": string
"sc_cat_item.billable": string
"sc_cat_item.category": string
"sc_cat_item.cost": string
"sc_cat_item.custom_cart": string
"sc_cat_item.delivery_plan": string
"sc_cat_item.delivery_plan_script": string
"sc_cat_item.delivery_time": string
"sc_cat_item.description": string
"sc_cat_item.display_price_property": string
"sc_cat_item.entitlement_script": string
"sc_cat_item.group": string
"sc_cat_item.hide_sp": string
"sc_cat_item.icon": string
"sc_cat_item.ignore_price": string
"sc_cat_item.image": string
"sc_cat_item.list_price": string
"sc_cat_item.location": string
"sc_cat_item.mandatory_attachment": string
"sc_cat_item.meta": string
"sc_cat_item.mobile_hide_price": string
"sc_cat_item.mobile_picture": string
"sc_cat_item.mobile_picture_type": string
"sc_cat_item.model": string
"sc_cat_item.name": string
"sc_cat_item.no_attachment_v2": string
"sc_cat_item.no_cart": string
"sc_cat_item.no_cart_v2": string
"sc_cat_item.no_delivery_time_v2": string
"sc_cat_item.no_order": string
"sc_cat_item.no_order_now": string
"sc_cat_item.no_proceed_checkout": string
"sc_cat_item.no_quantity": string
"sc_cat_item.no_quantity_v2": string
"sc_cat_item.no_search": string
"sc_cat_item.no_wishlist_v2": string
"sc_cat_item.omit_price": string
"sc_cat_item.order": string
"sc_cat_item.ordered_item_link": string
"sc_cat_item.picture": string
"sc_cat_item.preview": string
"sc_cat_item.price": string
"sc_cat_item.recurring_frequency": string
"sc_cat_item.recurring_price": string
"sc_cat_item.request_method": string
"sc_cat_item.roles": string
"sc_cat_item.sc_catalogs": string
"sc_cat_item.sc_ic_item_staging": string
"sc_cat_item.sc_ic_version": string
"sc_cat_item.short_description": string
"sc_cat_item.show_variable_help_on_load": string
"sc_cat_item.start_closed": string
"sc_cat_item.sys_id": string
"sc_cat_item.template": string
"sc_cat_item.type": string
"sc_cat_item.use_sc_layout": string
"sc_cat_item.vendor": string
"sc_cat_item.visible_bundle": string
"sc_cat_item.visible_guide": string
"sc_cat_item.visible_standalone": string
"sc_cat_item.workflow": string
"sc_cat_item.sys_class_name": string
"sc_cat_item.sys_created_by": string
"sc_cat_item.sys_created_on": string
"sc_cat_item.sys_mod_count": string
"sc_cat_item.sys_name": string
"sc_cat_item.sys_package": string
"sc_cat_item.sys_policy": string
"sc_cat_item.sys_scope": string
"sc_cat_item.sys_updated_by": string
"sc_cat_item.sys_updated_on": string
"sc_cat_item.sys_update_name": string
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
   