declare interface sc_category {
      active: GlideElement<sc_category, glideElementType.g_boolean>;
description: GlideElement<sc_category, glideElementType.defaultType>;
entitlement_script: GlideElement<sc_category, glideElementType.defaultType>;
header_icon: GlideElement<sc_category, glideElementType.defaultType>;
homepage_image: GlideElement<sc_category, glideElementType.defaultType>;
homepage_renderer: GlideElement<sc_category, glideElementType.g_reference<sc_homepage_renderer>>;
icon: GlideElement<sc_category, glideElementType.defaultType>;
image: GlideElement<sc_category, glideElementType.defaultType>;
location: GlideElement<sc_category, glideElementType.g_reference<cmn_location>>;
mobile_hide_description: GlideElement<sc_category, glideElementType.g_boolean>;
mobile_picture: GlideElement<sc_category, glideElementType.defaultType>;
mobile_subcategory_render_type: GlideElement<sc_category, glideElementType.defaultType>;
module: GlideElement<sc_category, glideElementType.g_reference<sys_app_module>>;
order: GlideElement<sc_category, glideElementType.defaultType>;
parent: GlideElement<sc_category, glideElementType.g_reference<sc_category>>;
roles: GlideElement<sc_category, glideElementType.defaultType>;
sc_catalog: GlideElement<sc_category, glideElementType.g_reference<sc_catalog>>;
sys_id: GlideElement<sc_category, glideElementType.defaultType>;
title: GlideElement<sc_category, glideElementType.defaultType>;
sys_class_name: GlideElement<sc_category, glideElementType.defaultType>;
sys_created_by: GlideElement<sc_category, glideElementType.defaultType>;
sys_created_on: GlideElement<sc_category, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sc_category, glideElementType.defaultType>;
sys_name: GlideElement<sc_category, glideElementType.defaultType>;
sys_package: GlideElement<sc_category, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sc_category, glideElementType.defaultType>;
sys_scope: GlideElement<sc_category, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sc_category, glideElementType.defaultType>;
sys_updated_on: GlideElement<sc_category, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sc_category, glideElementType.defaultType>;
      _referenceKeys: never | {
        "homepage_renderer.macro": string
"homepage_renderer.render_title": string
"homepage_renderer.sys_id": string
"homepage_renderer.name": string
"homepage_renderer.order": string
"homepage_renderer.sys_class_name": string
"homepage_renderer.sys_created_by": string
"homepage_renderer.sys_created_on": string
"homepage_renderer.sys_mod_count": string
"homepage_renderer.sys_name": string
"homepage_renderer.sys_package": string
"homepage_renderer.sys_policy": string
"homepage_renderer.sys_scope": string
"homepage_renderer.sys_updated_by": string
"homepage_renderer.sys_updated_on": string
"homepage_renderer.sys_update_name": string
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
"module.active": string
"module.application": string
"module.assessment": string
"module.device_type": string
"module.filter": string
"module.hint": string
"module.homepage": string
"module.image": string
"module.link_type": string
"module.map_page": string
"module.mobile_title": string
"module.mobile_view_name": string
"module.name": string
"module.order": string
"module.override_menu_roles": string
"module.query": string
"module.report": string
"module.roles": string
"module.sys_domain": string
"module.sys_domain_path": string
"module.sys_id": string
"module.sys_overrides": string
"module.timeline_page": string
"module.title": string
"module.uncancelable": string
"module.view_name": string
"module.window_name": string
"module.sys_class_name": string
"module.sys_created_by": string
"module.sys_created_on": string
"module.sys_mod_count": string
"module.sys_name": string
"module.sys_package": string
"module.sys_policy": string
"module.sys_scope": string
"module.sys_updated_by": string
"module.sys_updated_on": string
"module.sys_update_name": string
"parent.active": string
"parent.description": string
"parent.entitlement_script": string
"parent.header_icon": string
"parent.homepage_image": string
"parent.homepage_renderer": string
"parent.icon": string
"parent.image": string
"parent.location": string
"parent.mobile_hide_description": string
"parent.mobile_picture": string
"parent.mobile_subcategory_render_type": string
"parent.module": string
"parent.order": string
"parent.parent": string
"parent.roles": string
"parent.sc_catalog": string
"parent.sys_id": string
"parent.title": string
"parent.sys_class_name": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_mod_count": string
"parent.sys_name": string
"parent.sys_package": string
"parent.sys_policy": string
"parent.sys_scope": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.sys_update_name": string
"sc_catalog.active": string
"sc_catalog.background_color": string
"sc_catalog.description": string
"sc_catalog.desktop_continue_shopping": string
"sc_catalog.desktop_home_page": string
"sc_catalog.desktop_image": string
"sc_catalog.editors": string
"sc_catalog.enable_wish_list": string
"sc_catalog.manager": string
"sc_catalog.sys_id": string
"sc_catalog.title": string
"sc_catalog.sys_class_name": string
"sc_catalog.sys_created_by": string
"sc_catalog.sys_created_on": string
"sc_catalog.sys_mod_count": string
"sc_catalog.sys_name": string
"sc_catalog.sys_package": string
"sc_catalog.sys_policy": string
"sc_catalog.sys_scope": string
"sc_catalog.sys_updated_by": string
"sc_catalog.sys_updated_on": string
"sc_catalog.sys_update_name": string
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
   