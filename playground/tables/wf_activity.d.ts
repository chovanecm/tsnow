declare interface wf_activity {
      activity_definition: GlideElement<wf_activity, glideElementType.g_reference<wf_element_definition>>;
activity_definition_updated: GlideElement<wf_activity, glideElementType.g_boolean>;
databus_lookup_id: GlideElement<wf_activity, glideElementType.defaultType>;
height: GlideElement<wf_activity, glideElementType.defaultType>;
input: GlideElement<wf_activity, glideElementType.defaultType>;
is_parent: GlideElement<wf_activity, glideElementType.g_boolean>;
name: GlideElement<wf_activity, glideElementType.defaultType>;
new_activity_definition: GlideElement<wf_activity, glideElementType.g_reference<wf_element_definition>>;
notes: GlideElement<wf_activity, glideElementType.defaultType>;
out_of_date: GlideElement<wf_activity, glideElementType.g_boolean>;
parent: GlideElement<wf_activity, glideElementType.g_reference<wf_activity>>;
pinned: GlideElement<wf_activity, glideElementType.g_boolean>;
pinned_version: GlideElement<wf_activity, glideElementType.g_reference<wf_versionable>>;
stage: GlideElement<wf_activity, glideElementType.g_reference<wf_stage>>;
sys_created_by: GlideElement<wf_activity, glideElementType.defaultType>;
sys_created_on: GlideElement<wf_activity, glideElementType.g_glide_date_time>;
sys_id: GlideElement<wf_activity, glideElementType.defaultType>;
sys_mod_count: GlideElement<wf_activity, glideElementType.defaultType>;
sys_updated_by: GlideElement<wf_activity, glideElementType.defaultType>;
sys_updated_on: GlideElement<wf_activity, glideElementType.g_glide_date_time>;
timeout: GlideElement<wf_activity, glideElementType.defaultType>;
vars: GlideElement<wf_activity, glideElementType.defaultType>;
width: GlideElement<wf_activity, glideElementType.defaultType>;
workflow_version: GlideElement<wf_activity, glideElementType.g_reference<wf_workflow_version>>;
x: GlideElement<wf_activity, glideElementType.defaultType>;
y: GlideElement<wf_activity, glideElementType.defaultType>;
      _referenceKeys: never | {
        "activity_definition.access": string
"activity_definition.attributes": string
"activity_definition.base_provider": string
"activity_definition.category": string
"activity_definition.default_height": string
"activity_definition.default_width": string
"activity_definition.description": string
"activity_definition.image": string
"activity_definition.name": string
"activity_definition.style": string
"activity_definition.sys_id": string
"activity_definition.version_container_id": string
"activity_definition.sys_class_name": string
"activity_definition.sys_created_by": string
"activity_definition.sys_created_on": string
"activity_definition.sys_mod_count": string
"activity_definition.sys_name": string
"activity_definition.sys_package": string
"activity_definition.sys_policy": string
"activity_definition.sys_scope": string
"activity_definition.sys_updated_by": string
"activity_definition.sys_updated_on": string
"activity_definition.sys_update_name": string
"new_activity_definition.access": string
"new_activity_definition.attributes": string
"new_activity_definition.base_provider": string
"new_activity_definition.category": string
"new_activity_definition.default_height": string
"new_activity_definition.default_width": string
"new_activity_definition.description": string
"new_activity_definition.image": string
"new_activity_definition.name": string
"new_activity_definition.style": string
"new_activity_definition.sys_id": string
"new_activity_definition.version_container_id": string
"new_activity_definition.sys_class_name": string
"new_activity_definition.sys_created_by": string
"new_activity_definition.sys_created_on": string
"new_activity_definition.sys_mod_count": string
"new_activity_definition.sys_name": string
"new_activity_definition.sys_package": string
"new_activity_definition.sys_policy": string
"new_activity_definition.sys_scope": string
"new_activity_definition.sys_updated_by": string
"new_activity_definition.sys_updated_on": string
"new_activity_definition.sys_update_name": string
"parent.activity_definition": string
"parent.activity_definition_updated": string
"parent.databus_lookup_id": string
"parent.height": string
"parent.input": string
"parent.is_parent": string
"parent.name": string
"parent.new_activity_definition": string
"parent.notes": string
"parent.out_of_date": string
"parent.parent": string
"parent.pinned": string
"parent.pinned_version": string
"parent.stage": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.timeout": string
"parent.vars": string
"parent.width": string
"parent.workflow_version": string
"parent.x": string
"parent.y": string
"pinned_version.checked_out": string
"pinned_version.checked_out_by": string
"pinned_version.published": string
"pinned_version.sys_created_by": string
"pinned_version.sys_created_on": string
"pinned_version.sys_id": string
"pinned_version.sys_mod_count": string
"pinned_version.sys_updated_by": string
"pinned_version.sys_updated_on": string
"pinned_version.valid_from": string
"pinned_version.valid_to": string
"pinned_version.version": string
"pinned_version.version_container_id": string
"pinned_version.wf_element_definition": string
"stage.name": string
"stage.ola": string
"stage.order": string
"stage.sys_created_by": string
"stage.sys_created_on": string
"stage.sys_id": string
"stage.sys_mod_count": string
"stage.sys_updated_by": string
"stage.sys_updated_on": string
"stage.value": string
"stage.workflow_version": string
"workflow_version.active": string
"workflow_version.activity_stages": string
"workflow_version.after_business_rules": string
"workflow_version.checked_out": string
"workflow_version.checked_out_by": string
"workflow_version.column_renderer": string
"workflow_version.condition": string
"workflow_version.condition_type": string
"workflow_version.description": string
"workflow_version.expected_sequences": string
"workflow_version.expected_time": string
"workflow_version.expected_time_type": string
"workflow_version.full_sequences": string
"workflow_version.journal": string
"workflow_version.max_activity_count": string
"workflow_version.name": string
"workflow_version.not_cacheable": string
"workflow_version.on_cancel": string
"workflow_version.order": string
"workflow_version.pin_type": string
"workflow_version.published": string
"workflow_version.relative_duration": string
"workflow_version.requires_ert": string
"workflow_version.run_multiple": string
"workflow_version.schedule": string
"workflow_version.stage_field": string
"workflow_version.stage_order": string
"workflow_version.start": string
"workflow_version.sys_created_by": string
"workflow_version.sys_created_on": string
"workflow_version.sys_id": string
"workflow_version.sys_mod_count": string
"workflow_version.sys_updated_by": string
"workflow_version.sys_updated_on": string
"workflow_version.table": string
"workflow_version.timezone": string
"workflow_version.validated": string
"workflow_version.workflow": string;
      }
    }
   