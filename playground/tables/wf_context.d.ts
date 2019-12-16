declare interface wf_context {
      active: GlideElement<wf_context, glideElementType.g_boolean>;
activity_count: GlideElement<wf_context, glideElementType.defaultType>;
activity_index: GlideElement<wf_context, glideElementType.defaultType>;
after_business_rules: GlideElement<wf_context, glideElementType.g_boolean>;
auto_start: GlideElement<wf_context, glideElementType.g_boolean>;
column_renderer: GlideElement<wf_context, glideElementType.g_reference<column_renderer>>;
cumulated_avg_ert: GlideElement<wf_context, glideElementType.g_boolean>;
due: GlideElement<wf_context, glideElementType.g_glide_date_time>;
ended: GlideElement<wf_context, glideElementType.g_glide_date_time>;
ert_long_running_actions: GlideElement<wf_context, glideElementType.defaultType>;
ert_outlier_workflow_actions: GlideElement<wf_context, glideElementType.defaultType>;
id: GlideElement<wf_context, glideElementType.defaultType>;
name: GlideElement<wf_context, glideElementType.defaultType>;
parent: GlideElement<wf_context, glideElementType.g_reference<wf_context>>;
parent_activity: GlideElement<wf_context, glideElementType.g_reference<wf_executing>>;
requires_ert: GlideElement<wf_context, glideElementType.g_boolean>;
result: GlideElement<wf_context, glideElementType.defaultType>;
return_value: GlideElement<wf_context, glideElementType.defaultType>;
running_duration: GlideElement<wf_context, glideElementType.defaultType>;
schedule: GlideElement<wf_context, glideElementType.g_reference<cmn_schedule>>;
scratchpad: GlideElement<wf_context, glideElementType.defaultType>;
stage: GlideElement<wf_context, glideElementType.g_reference<wf_stage>>;
stage_state: GlideElement<wf_context, glideElementType.defaultType>;
started: GlideElement<wf_context, glideElementType.g_glide_date_time>;
started_by: GlideElement<wf_context, glideElementType.g_reference<sys_user>>;
state: GlideElement<wf_context, glideElementType.defaultType>;
sys_created_by: GlideElement<wf_context, glideElementType.defaultType>;
sys_created_on: GlideElement<wf_context, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<wf_context, glideElementType.defaultType>;
sys_domain_path: GlideElement<wf_context, glideElementType.defaultType>;
sys_id: GlideElement<wf_context, glideElementType.defaultType>;
sys_mod_count: GlideElement<wf_context, glideElementType.defaultType>;
sys_updated_by: GlideElement<wf_context, glideElementType.defaultType>;
sys_updated_on: GlideElement<wf_context, glideElementType.g_glide_date_time>;
table: GlideElement<wf_context, glideElementType.defaultType>;
timezone: GlideElement<wf_context, glideElementType.defaultType>;
without_current_wf_actions: GlideElement<wf_context, glideElementType.defaultType>;
workflow: GlideElement<wf_context, glideElementType.g_reference<wf_workflow>>;
workflow_version: GlideElement<wf_context, glideElementType.g_reference<wf_workflow_version>>;
      _referenceKeys: never | {
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
"parent.active": string
"parent.activity_count": string
"parent.activity_index": string
"parent.after_business_rules": string
"parent.auto_start": string
"parent.column_renderer": string
"parent.cumulated_avg_ert": string
"parent.due": string
"parent.ended": string
"parent.ert_long_running_actions": string
"parent.ert_outlier_workflow_actions": string
"parent.id": string
"parent.name": string
"parent.parent": string
"parent.parent_activity": string
"parent.requires_ert": string
"parent.result": string
"parent.return_value": string
"parent.running_duration": string
"parent.schedule": string
"parent.scratchpad": string
"parent.stage": string
"parent.stage_state": string
"parent.started": string
"parent.started_by": string
"parent.state": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_domain": string
"parent.sys_domain_path": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.table": string
"parent.timezone": string
"parent.without_current_wf_actions": string
"parent.workflow": string
"parent.workflow_version": string
"parent_activity.activity": string
"parent_activity.activity_index": string
"parent_activity.context": string
"parent_activity.due": string
"parent_activity.fault_description": string
"parent_activity.input_data": string
"parent_activity.is_parent": string
"parent_activity.notify_termination": string
"parent_activity.output": string
"parent_activity.output_data": string
"parent_activity.parent": string
"parent_activity.previous_activity": string
"parent_activity.registered_events": string
"parent_activity.result": string
"parent_activity.scratchpad": string
"parent_activity.started": string
"parent_activity.state": string
"parent_activity.sys_created_by": string
"parent_activity.sys_created_on": string
"parent_activity.sys_domain": string
"parent_activity.sys_domain_path": string
"parent_activity.sys_id": string
"parent_activity.sys_mod_count": string
"parent_activity.sys_updated_by": string
"parent_activity.sys_updated_on": string
"parent_activity.workflow_version": string
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
"started_by.accumulated_roles": string
"started_by.active": string
"started_by.avatar": string
"started_by.building": string
"started_by.calendar_integration": string
"started_by.city": string
"started_by.company": string
"started_by.cost_center": string
"started_by.country": string
"started_by.date_format": string
"started_by.default_perspective": string
"started_by.department": string
"started_by.email": string
"started_by.employee_number": string
"started_by.enable_multifactor_authn": string
"started_by.failed_attempts": string
"started_by.first_name": string
"started_by.gender": string
"started_by.home_phone": string
"started_by.internal_integration_user": string
"started_by.introduction": string
"started_by.last_login": string
"started_by.last_login_time": string
"started_by.last_name": string
"started_by.ldap_server": string
"started_by.location": string
"started_by.locked_out": string
"started_by.manager": string
"started_by.middle_name": string
"started_by.mobile_phone": string
"started_by.name": string
"started_by.notification": string
"started_by.password_needs_reset": string
"started_by.phone": string
"started_by.photo": string
"started_by.preferred_language": string
"started_by.roles": string
"started_by.schedule": string
"started_by.source": string
"started_by.state": string
"started_by.street": string
"started_by.sys_class_name": string
"started_by.sys_created_by": string
"started_by.sys_created_on": string
"started_by.sys_domain": string
"started_by.sys_domain_path": string
"started_by.sys_id": string
"started_by.sys_mod_count": string
"started_by.sys_updated_by": string
"started_by.sys_updated_on": string
"started_by.time_format": string
"started_by.time_zone": string
"started_by.title": string
"started_by.user_name": string
"started_by.user_password": string
"started_by.vip": string
"started_by.web_service_access_only": string
"started_by.zip": string
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
   