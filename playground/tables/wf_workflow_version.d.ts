declare interface wf_workflow_version {
      active: GlideElement<wf_workflow_version, glideElementType.g_boolean>;
activity_stages: GlideElement<wf_workflow_version, glideElementType.defaultType>;
after_business_rules: GlideElement<wf_workflow_version, glideElementType.g_boolean>;
checked_out: GlideElement<wf_workflow_version, glideElementType.g_glide_date_time>;
checked_out_by: GlideElement<wf_workflow_version, glideElementType.g_reference<sys_user>>;
column_renderer: GlideElement<wf_workflow_version, glideElementType.g_reference<column_renderer>>;
condition: GlideElement<wf_workflow_version, glideElementType.defaultType>;
condition_type: GlideElement<wf_workflow_version, glideElementType.defaultType>;
description: GlideElement<wf_workflow_version, glideElementType.defaultType>;
expected_sequences: GlideElement<wf_workflow_version, glideElementType.defaultType>;
expected_time: GlideElement<wf_workflow_version, glideElementType.defaultType>;
expected_time_type: GlideElement<wf_workflow_version, glideElementType.defaultType>;
full_sequences: GlideElement<wf_workflow_version, glideElementType.defaultType>;
journal: GlideElement<wf_workflow_version, glideElementType.defaultType>;
max_activity_count: GlideElement<wf_workflow_version, glideElementType.defaultType>;
name: GlideElement<wf_workflow_version, glideElementType.defaultType>;
not_cacheable: GlideElement<wf_workflow_version, glideElementType.g_boolean>;
on_cancel: GlideElement<wf_workflow_version, glideElementType.defaultType>;
order: GlideElement<wf_workflow_version, glideElementType.defaultType>;
pin_type: GlideElement<wf_workflow_version, glideElementType.defaultType>;
published: GlideElement<wf_workflow_version, glideElementType.g_boolean>;
relative_duration: GlideElement<wf_workflow_version, glideElementType.g_reference<cmn_relative_duration>>;
requires_ert: GlideElement<wf_workflow_version, glideElementType.g_boolean>;
run_multiple: GlideElement<wf_workflow_version, glideElementType.g_boolean>;
schedule: GlideElement<wf_workflow_version, glideElementType.g_reference<cmn_schedule>>;
stage_field: GlideElement<wf_workflow_version, glideElementType.defaultType>;
stage_order: GlideElement<wf_workflow_version, glideElementType.defaultType>;
start: GlideElement<wf_workflow_version, glideElementType.g_reference<wf_activity>>;
sys_created_by: GlideElement<wf_workflow_version, glideElementType.defaultType>;
sys_created_on: GlideElement<wf_workflow_version, glideElementType.g_glide_date_time>;
sys_id: GlideElement<wf_workflow_version, glideElementType.defaultType>;
sys_mod_count: GlideElement<wf_workflow_version, glideElementType.defaultType>;
sys_updated_by: GlideElement<wf_workflow_version, glideElementType.defaultType>;
sys_updated_on: GlideElement<wf_workflow_version, glideElementType.g_glide_date_time>;
table: GlideElement<wf_workflow_version, glideElementType.defaultType>;
timezone: GlideElement<wf_workflow_version, glideElementType.defaultType>;
validated: GlideElement<wf_workflow_version, glideElementType.g_boolean>;
workflow: GlideElement<wf_workflow_version, glideElementType.g_reference<wf_workflow>>;
      _referenceKeys: never | {
        "checked_out_by.accumulated_roles": string
"checked_out_by.active": string
"checked_out_by.avatar": string
"checked_out_by.building": string
"checked_out_by.calendar_integration": string
"checked_out_by.city": string
"checked_out_by.company": string
"checked_out_by.cost_center": string
"checked_out_by.country": string
"checked_out_by.date_format": string
"checked_out_by.default_perspective": string
"checked_out_by.department": string
"checked_out_by.email": string
"checked_out_by.employee_number": string
"checked_out_by.enable_multifactor_authn": string
"checked_out_by.failed_attempts": string
"checked_out_by.first_name": string
"checked_out_by.gender": string
"checked_out_by.home_phone": string
"checked_out_by.internal_integration_user": string
"checked_out_by.introduction": string
"checked_out_by.last_login": string
"checked_out_by.last_login_time": string
"checked_out_by.last_name": string
"checked_out_by.ldap_server": string
"checked_out_by.location": string
"checked_out_by.locked_out": string
"checked_out_by.manager": string
"checked_out_by.middle_name": string
"checked_out_by.mobile_phone": string
"checked_out_by.name": string
"checked_out_by.notification": string
"checked_out_by.password_needs_reset": string
"checked_out_by.phone": string
"checked_out_by.photo": string
"checked_out_by.preferred_language": string
"checked_out_by.roles": string
"checked_out_by.schedule": string
"checked_out_by.source": string
"checked_out_by.state": string
"checked_out_by.street": string
"checked_out_by.sys_class_name": string
"checked_out_by.sys_created_by": string
"checked_out_by.sys_created_on": string
"checked_out_by.sys_domain": string
"checked_out_by.sys_domain_path": string
"checked_out_by.sys_id": string
"checked_out_by.sys_mod_count": string
"checked_out_by.sys_updated_by": string
"checked_out_by.sys_updated_on": string
"checked_out_by.time_format": string
"checked_out_by.time_zone": string
"checked_out_by.title": string
"checked_out_by.user_name": string
"checked_out_by.user_password": string
"checked_out_by.vip": string
"checked_out_by.web_service_access_only": string
"checked_out_by.zip": string
"column_renderer.column": string
"column_renderer.display_value": string
"column_renderer.options": string
"column_renderer.sys_id": string
"column_renderer.table": string
"column_renderer.active": string
"column_renderer.category": string
"column_renderer.description": string
"column_renderer.media_type": string
"column_renderer.name": string
"column_renderer.scoped_name": string
"column_renderer.xml": string
"column_renderer.sys_class_name": string
"column_renderer.sys_created_by": string
"column_renderer.sys_created_on": string
"column_renderer.sys_mod_count": string
"column_renderer.sys_name": string
"column_renderer.sys_package": string
"column_renderer.sys_policy": string
"column_renderer.sys_scope": string
"column_renderer.sys_updated_by": string
"column_renderer.sys_updated_on": string
"column_renderer.sys_update_name": string
"relative_duration.active": string
"relative_duration.name": string
"relative_duration.script": string
"relative_duration.sys_id": string
"relative_duration.sys_class_name": string
"relative_duration.sys_created_by": string
"relative_duration.sys_created_on": string
"relative_duration.sys_mod_count": string
"relative_duration.sys_name": string
"relative_duration.sys_package": string
"relative_duration.sys_policy": string
"relative_duration.sys_scope": string
"relative_duration.sys_updated_by": string
"relative_duration.sys_updated_on": string
"relative_duration.sys_update_name": string
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
"schedule.sys_update_name": string
"start.activity_definition": string
"start.activity_definition_updated": string
"start.databus_lookup_id": string
"start.height": string
"start.input": string
"start.is_parent": string
"start.name": string
"start.new_activity_definition": string
"start.notes": string
"start.out_of_date": string
"start.parent": string
"start.pinned": string
"start.pinned_version": string
"start.stage": string
"start.sys_created_by": string
"start.sys_created_on": string
"start.sys_id": string
"start.sys_mod_count": string
"start.sys_updated_by": string
"start.sys_updated_on": string
"start.timeout": string
"start.vars": string
"start.width": string
"start.workflow_version": string
"start.x": string
"start.y": string
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
"workflow.sys_update_name": string;
      }
    }
   