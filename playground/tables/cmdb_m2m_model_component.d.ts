declare interface cmdb_m2m_model_component {
      child: GlideElement<cmdb_m2m_model_component, glideElementType.g_reference<cmdb_model>>;
master: GlideElement<cmdb_m2m_model_component, glideElementType.g_boolean>;
model_category: GlideElement<cmdb_m2m_model_component, glideElementType.g_reference<cmdb_model_category>>;
parent: GlideElement<cmdb_m2m_model_component, glideElementType.g_reference<cmdb_model>>;
sys_created_by: GlideElement<cmdb_m2m_model_component, glideElementType.defaultType>;
sys_created_on: GlideElement<cmdb_m2m_model_component, glideElementType.g_glide_date_time>;
sys_id: GlideElement<cmdb_m2m_model_component, glideElementType.defaultType>;
sys_mod_count: GlideElement<cmdb_m2m_model_component, glideElementType.defaultType>;
sys_updated_by: GlideElement<cmdb_m2m_model_component, glideElementType.defaultType>;
sys_updated_on: GlideElement<cmdb_m2m_model_component, glideElementType.g_glide_date_time>;
      _referenceKeys: never | {
        "child.acquisition_method": string
"child.asset_tracking_strategy": string
"child.barcode": string
"child.bundle": string
"child.certified": string
"child.cmdb_ci_class": string
"child.cmdb_model_category": string
"child.comments": string
"child.cost": string
"child.depreciation": string
"child.description": string
"child.display_name": string
"child.expenditure_type": string
"child.flow_rate": string
"child.full_name": string
"child.main_component": string
"child.manufacturer": string
"child.model_number": string
"child.name": string
"child.owner": string
"child.picture": string
"child.power_consumption": string
"child.product_catalog_item": string
"child.rack_units": string
"child.salvage_value": string
"child.short_description": string
"child.sla": string
"child.sound_power": string
"child.status": string
"child.sys_class_name": string
"child.sys_created_by": string
"child.sys_created_on": string
"child.sys_domain": string
"child.sys_domain_path": string
"child.sys_id": string
"child.sys_mod_count": string
"child.sys_updated_by": string
"child.sys_updated_on": string
"child.type": string
"child.weight": string
"model_category.allow_as_master": string
"model_category.allow_in_bundle": string
"model_category.allow_pre_allocation": string
"model_category.asset_class": string
"model_category.bundle": string
"model_category.cmdb_ci_class": string
"model_category.enforce_verification": string
"model_category.name": string
"model_category.sys_created_by": string
"model_category.sys_created_on": string
"model_category.sys_domain": string
"model_category.sys_domain_path": string
"model_category.sys_id": string
"model_category.sys_mod_count": string
"model_category.sys_updated_by": string
"model_category.sys_updated_on": string
"parent.acquisition_method": string
"parent.asset_tracking_strategy": string
"parent.barcode": string
"parent.bundle": string
"parent.certified": string
"parent.cmdb_ci_class": string
"parent.cmdb_model_category": string
"parent.comments": string
"parent.cost": string
"parent.depreciation": string
"parent.description": string
"parent.display_name": string
"parent.expenditure_type": string
"parent.flow_rate": string
"parent.full_name": string
"parent.main_component": string
"parent.manufacturer": string
"parent.model_number": string
"parent.name": string
"parent.owner": string
"parent.picture": string
"parent.power_consumption": string
"parent.product_catalog_item": string
"parent.rack_units": string
"parent.salvage_value": string
"parent.short_description": string
"parent.sla": string
"parent.sound_power": string
"parent.status": string
"parent.sys_class_name": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_domain": string
"parent.sys_domain_path": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.type": string
"parent.weight": string;
      }
    }
   