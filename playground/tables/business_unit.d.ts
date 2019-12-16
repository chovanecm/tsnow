declare interface business_unit {
      bu_head: GlideElement<business_unit, glideElementType.g_reference<sys_user>>;
company: GlideElement<business_unit, glideElementType.g_reference<core_company>>;
description: GlideElement<business_unit, glideElementType.defaultType>;
hierarchy_level: GlideElement<business_unit, glideElementType.defaultType>;
name: GlideElement<business_unit, glideElementType.defaultType>;
parent: GlideElement<business_unit, glideElementType.g_reference<business_unit>>;
sys_created_by: GlideElement<business_unit, glideElementType.defaultType>;
sys_created_on: GlideElement<business_unit, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<business_unit, glideElementType.defaultType>;
sys_domain_path: GlideElement<business_unit, glideElementType.defaultType>;
sys_id: GlideElement<business_unit, glideElementType.defaultType>;
sys_mod_count: GlideElement<business_unit, glideElementType.defaultType>;
sys_updated_by: GlideElement<business_unit, glideElementType.defaultType>;
sys_updated_on: GlideElement<business_unit, glideElementType.g_glide_date_time>;
      _referenceKeys: never | {
        "bu_head.accumulated_roles": string
"bu_head.active": string
"bu_head.avatar": string
"bu_head.building": string
"bu_head.calendar_integration": string
"bu_head.city": string
"bu_head.company": string
"bu_head.cost_center": string
"bu_head.country": string
"bu_head.date_format": string
"bu_head.default_perspective": string
"bu_head.department": string
"bu_head.email": string
"bu_head.employee_number": string
"bu_head.enable_multifactor_authn": string
"bu_head.failed_attempts": string
"bu_head.first_name": string
"bu_head.gender": string
"bu_head.home_phone": string
"bu_head.internal_integration_user": string
"bu_head.introduction": string
"bu_head.last_login": string
"bu_head.last_login_time": string
"bu_head.last_name": string
"bu_head.ldap_server": string
"bu_head.location": string
"bu_head.locked_out": string
"bu_head.manager": string
"bu_head.middle_name": string
"bu_head.mobile_phone": string
"bu_head.name": string
"bu_head.notification": string
"bu_head.password_needs_reset": string
"bu_head.phone": string
"bu_head.photo": string
"bu_head.preferred_language": string
"bu_head.roles": string
"bu_head.schedule": string
"bu_head.source": string
"bu_head.state": string
"bu_head.street": string
"bu_head.sys_class_name": string
"bu_head.sys_created_by": string
"bu_head.sys_created_on": string
"bu_head.sys_domain": string
"bu_head.sys_domain_path": string
"bu_head.sys_id": string
"bu_head.sys_mod_count": string
"bu_head.sys_updated_by": string
"bu_head.sys_updated_on": string
"bu_head.time_format": string
"bu_head.time_zone": string
"bu_head.title": string
"bu_head.user_name": string
"bu_head.user_password": string
"bu_head.vip": string
"bu_head.web_service_access_only": string
"bu_head.zip": string
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
"parent.bu_head": string
"parent.company": string
"parent.description": string
"parent.hierarchy_level": string
"parent.name": string
"parent.parent": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_domain": string
"parent.sys_domain_path": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string;
      }
    }
   