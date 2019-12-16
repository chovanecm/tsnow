declare interface wf_stage {
      name: GlideElement<wf_stage, glideElementType.defaultType>;
ola: GlideElement<wf_stage, glideElementType.defaultType>;
order: GlideElement<wf_stage, glideElementType.defaultType>;
sys_created_by: GlideElement<wf_stage, glideElementType.defaultType>;
sys_created_on: GlideElement<wf_stage, glideElementType.g_glide_date_time>;
sys_id: GlideElement<wf_stage, glideElementType.defaultType>;
sys_mod_count: GlideElement<wf_stage, glideElementType.defaultType>;
sys_updated_by: GlideElement<wf_stage, glideElementType.defaultType>;
sys_updated_on: GlideElement<wf_stage, glideElementType.g_glide_date_time>;
value: GlideElement<wf_stage, glideElementType.defaultType>;
workflow_version: GlideElement<wf_stage, glideElementType.g_reference<wf_workflow_version>>;
      _referenceKeys: never | {
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
   