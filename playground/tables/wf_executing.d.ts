declare interface wf_executing {
      activity: GlideElement<wf_executing, glideElementType.g_reference<wf_activity>>;
activity_index: GlideElement<wf_executing, glideElementType.defaultType>;
context: GlideElement<wf_executing, glideElementType.g_reference<wf_context>>;
due: GlideElement<wf_executing, glideElementType.g_glide_date_time>;
fault_description: GlideElement<wf_executing, glideElementType.defaultType>;
input_data: GlideElement<wf_executing, glideElementType.defaultType>;
is_parent: GlideElement<wf_executing, glideElementType.g_boolean>;
notify_termination: GlideElement<wf_executing, glideElementType.g_boolean>;
output: GlideElement<wf_executing, glideElementType.defaultType>;
output_data: GlideElement<wf_executing, glideElementType.defaultType>;
parent: GlideElement<wf_executing, glideElementType.g_reference<wf_executing>>;
previous_activity: GlideElement<wf_executing, glideElementType.g_reference<wf_history>>;
registered_events: GlideElement<wf_executing, glideElementType.defaultType>;
result: GlideElement<wf_executing, glideElementType.defaultType>;
scratchpad: GlideElement<wf_executing, glideElementType.defaultType>;
started: GlideElement<wf_executing, glideElementType.g_glide_date_time>;
state: GlideElement<wf_executing, glideElementType.defaultType>;
sys_created_by: GlideElement<wf_executing, glideElementType.defaultType>;
sys_created_on: GlideElement<wf_executing, glideElementType.g_glide_date_time>;
sys_domain: GlideElement<wf_executing, glideElementType.defaultType>;
sys_domain_path: GlideElement<wf_executing, glideElementType.defaultType>;
sys_id: GlideElement<wf_executing, glideElementType.defaultType>;
sys_mod_count: GlideElement<wf_executing, glideElementType.defaultType>;
sys_updated_by: GlideElement<wf_executing, glideElementType.defaultType>;
sys_updated_on: GlideElement<wf_executing, glideElementType.g_glide_date_time>;
workflow_version: GlideElement<wf_executing, glideElementType.g_reference<wf_workflow_version>>;
      _referenceKeys: never | {
        "activity.activity_definition": string
"activity.activity_definition_updated": string
"activity.databus_lookup_id": string
"activity.height": string
"activity.input": string
"activity.is_parent": string
"activity.name": string
"activity.new_activity_definition": string
"activity.notes": string
"activity.out_of_date": string
"activity.parent": string
"activity.pinned": string
"activity.pinned_version": string
"activity.stage": string
"activity.sys_created_by": string
"activity.sys_created_on": string
"activity.sys_id": string
"activity.sys_mod_count": string
"activity.sys_updated_by": string
"activity.sys_updated_on": string
"activity.timeout": string
"activity.vars": string
"activity.width": string
"activity.workflow_version": string
"activity.x": string
"activity.y": string
"context.active": string
"context.activity_count": string
"context.activity_index": string
"context.after_business_rules": string
"context.auto_start": string
"context.column_renderer": string
"context.cumulated_avg_ert": string
"context.due": string
"context.ended": string
"context.ert_long_running_actions": string
"context.ert_outlier_workflow_actions": string
"context.id": string
"context.name": string
"context.parent": string
"context.parent_activity": string
"context.requires_ert": string
"context.result": string
"context.return_value": string
"context.running_duration": string
"context.schedule": string
"context.scratchpad": string
"context.stage": string
"context.stage_state": string
"context.started": string
"context.started_by": string
"context.state": string
"context.sys_created_by": string
"context.sys_created_on": string
"context.sys_domain": string
"context.sys_domain_path": string
"context.sys_id": string
"context.sys_mod_count": string
"context.sys_updated_by": string
"context.sys_updated_on": string
"context.table": string
"context.timezone": string
"context.without_current_wf_actions": string
"context.workflow": string
"context.workflow_version": string
"parent.activity": string
"parent.activity_index": string
"parent.context": string
"parent.due": string
"parent.fault_description": string
"parent.input_data": string
"parent.is_parent": string
"parent.notify_termination": string
"parent.output": string
"parent.output_data": string
"parent.parent": string
"parent.previous_activity": string
"parent.registered_events": string
"parent.result": string
"parent.scratchpad": string
"parent.started": string
"parent.state": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_domain": string
"parent.sys_domain_path": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.workflow_version": string
"previous_activity.activity": string
"previous_activity.activity_index": string
"previous_activity.context": string
"previous_activity.due": string
"previous_activity.ended": string
"previous_activity.fault_description": string
"previous_activity.input_data": string
"previous_activity.is_parent": string
"previous_activity.output": string
"previous_activity.output_data": string
"previous_activity.parent": string
"previous_activity.result": string
"previous_activity.rolled_back_by": string
"previous_activity.started": string
"previous_activity.state": string
"previous_activity.sys_created_by": string
"previous_activity.sys_created_on": string
"previous_activity.sys_domain": string
"previous_activity.sys_domain_path": string
"previous_activity.sys_id": string
"previous_activity.sys_mod_count": string
"previous_activity.sys_updated_by": string
"previous_activity.sys_updated_on": string
"previous_activity.workflow_version": string
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
   