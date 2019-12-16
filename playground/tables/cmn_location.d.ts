declare interface cmn_location {
      city: GlideElement<cmn_location, glideElementType.defaultType>;
company: GlideElement<cmn_location, glideElementType.g_reference<core_company>>;
contact: GlideElement<cmn_location, glideElementType.g_reference<sys_user>>;
country: GlideElement<cmn_location, glideElementType.defaultType>;
fax_phone: GlideElement<cmn_location, glideElementType.defaultType>;
full_name: GlideElement<cmn_location, glideElementType.defaultType>;
latitude: GlideElement<cmn_location, glideElementType.defaultType>;
lat_long_error: GlideElement<cmn_location, glideElementType.defaultType>;
longitude: GlideElement<cmn_location, glideElementType.defaultType>;
name: GlideElement<cmn_location, glideElementType.defaultType>;
parent: GlideElement<cmn_location, glideElementType.g_reference<cmn_location>>;
phone: GlideElement<cmn_location, glideElementType.defaultType>;
phone_territory: GlideElement<cmn_location, glideElementType.g_reference<sys_phone_territory>>;
state: GlideElement<cmn_location, glideElementType.defaultType>;
stock_room: GlideElement<cmn_location, glideElementType.g_boolean>;
street: GlideElement<cmn_location, glideElementType.defaultType>;
sys_created_by: GlideElement<cmn_location, glideElementType.defaultType>;
sys_created_on: GlideElement<cmn_location, glideElementType.g_glide_date_time>;
sys_id: GlideElement<cmn_location, glideElementType.defaultType>;
sys_mod_count: GlideElement<cmn_location, glideElementType.defaultType>;
sys_updated_by: GlideElement<cmn_location, glideElementType.defaultType>;
sys_updated_on: GlideElement<cmn_location, glideElementType.g_glide_date_time>;
time_zone: GlideElement<cmn_location, glideElementType.defaultType>;
zip: GlideElement<cmn_location, glideElementType.defaultType>;
      _referenceKeys: never | {
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
"contact.accumulated_roles": string
"contact.active": string
"contact.avatar": string
"contact.building": string
"contact.calendar_integration": string
"contact.city": string
"contact.company": string
"contact.cost_center": string
"contact.country": string
"contact.date_format": string
"contact.default_perspective": string
"contact.department": string
"contact.email": string
"contact.employee_number": string
"contact.enable_multifactor_authn": string
"contact.failed_attempts": string
"contact.first_name": string
"contact.gender": string
"contact.home_phone": string
"contact.internal_integration_user": string
"contact.introduction": string
"contact.last_login": string
"contact.last_login_time": string
"contact.last_name": string
"contact.ldap_server": string
"contact.location": string
"contact.locked_out": string
"contact.manager": string
"contact.middle_name": string
"contact.mobile_phone": string
"contact.name": string
"contact.notification": string
"contact.password_needs_reset": string
"contact.phone": string
"contact.photo": string
"contact.preferred_language": string
"contact.roles": string
"contact.schedule": string
"contact.source": string
"contact.state": string
"contact.street": string
"contact.sys_class_name": string
"contact.sys_created_by": string
"contact.sys_created_on": string
"contact.sys_domain": string
"contact.sys_domain_path": string
"contact.sys_id": string
"contact.sys_mod_count": string
"contact.sys_updated_by": string
"contact.sys_updated_on": string
"contact.time_format": string
"contact.time_zone": string
"contact.title": string
"contact.user_name": string
"contact.user_password": string
"contact.vip": string
"contact.web_service_access_only": string
"contact.zip": string
"parent.city": string
"parent.company": string
"parent.contact": string
"parent.country": string
"parent.fax_phone": string
"parent.full_name": string
"parent.latitude": string
"parent.lat_long_error": string
"parent.longitude": string
"parent.name": string
"parent.parent": string
"parent.phone": string
"parent.phone_territory": string
"parent.state": string
"parent.stock_room": string
"parent.street": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.time_zone": string
"parent.zip": string
"phone_territory.active": string
"phone_territory.ccc": string
"phone_territory.display": string
"phone_territory.idd": string
"phone_territory.international_prefix": string
"phone_territory.name": string
"phone_territory.national_prefix": string
"phone_territory.order": string
"phone_territory.std": string
"phone_territory.std_follows_ccc": string
"phone_territory.std_optional": string
"phone_territory.sys_created_by": string
"phone_territory.sys_created_on": string
"phone_territory.sys_id": string
"phone_territory.sys_mod_count": string
"phone_territory.sys_updated_by": string
"phone_territory.sys_updated_on": string;
      }
    }
   