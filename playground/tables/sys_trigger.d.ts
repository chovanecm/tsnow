declare interface sys_trigger {
      application: GlideElement<sys_trigger, glideElementType.defaultType>;
calendar: GlideElement<sys_trigger, glideElementType.g_reference<sys_calendar>>;
claimed_by: GlideElement<sys_trigger, glideElementType.defaultType>;
document: GlideElement<sys_trigger, glideElementType.defaultType>;
document_key: GlideElement<sys_trigger, glideElementType.defaultType>;
error_count: GlideElement<sys_trigger, glideElementType.defaultType>;
job_context: GlideElement<sys_trigger, glideElementType.defaultType>;
job_id: GlideElement<sys_trigger, glideElementType.g_reference<sys_job>>;
last_error: GlideElement<sys_trigger, glideElementType.defaultType>;
log: GlideElement<sys_trigger, glideElementType.g_boolean>;
maintenance: GlideElement<sys_trigger, glideElementType.g_boolean>;
max_drift: GlideElement<sys_trigger, glideElementType.defaultType>;
name: GlideElement<sys_trigger, glideElementType.defaultType>;
next_action: GlideElement<sys_trigger, glideElementType.g_glide_date_time>;
parent: GlideElement<sys_trigger, glideElementType.g_reference<sys_trigger>>;
priority: GlideElement<sys_trigger, glideElementType.defaultType>;
processing_duration: GlideElement<sys_trigger, glideElementType.defaultType>;
repeat: GlideElement<sys_trigger, glideElementType.defaultType>;
replication_originator: GlideElement<sys_trigger, glideElementType.defaultType>;
rollback_context_id: GlideElement<sys_trigger, glideElementType.g_reference<sys_rollback_context>>;
run_count: GlideElement<sys_trigger, glideElementType.defaultType>;
run_dayofmonth: GlideElement<sys_trigger, glideElementType.defaultType>;
run_dayofweek: GlideElement<sys_trigger, glideElementType.defaultType>;
run_month: GlideElement<sys_trigger, glideElementType.defaultType>;
run_time: GlideElement<sys_trigger, glideElementType.defaultType>;
run_weekinmonth: GlideElement<sys_trigger, glideElementType.defaultType>;
script: GlideElement<sys_trigger, glideElementType.defaultType>;
state: GlideElement<sys_trigger, glideElementType.defaultType>;
system_id: GlideElement<sys_trigger, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_trigger, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_trigger, glideElementType.g_glide_date_time>;
sys_id: GlideElement<sys_trigger, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_trigger, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_trigger, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_trigger, glideElementType.g_glide_date_time>;
trigger_class: GlideElement<sys_trigger, glideElementType.defaultType>;
trigger_type: GlideElement<sys_trigger, glideElementType.defaultType>;
upgrade_safe: GlideElement<sys_trigger, glideElementType.g_boolean>;
      _referenceKeys: never | {
        "calendar.name": string
"calendar.sys_id": string
"calendar.sys_class_name": string
"calendar.sys_created_by": string
"calendar.sys_created_on": string
"calendar.sys_mod_count": string
"calendar.sys_name": string
"calendar.sys_package": string
"calendar.sys_policy": string
"calendar.sys_scope": string
"calendar.sys_updated_by": string
"calendar.sys_updated_on": string
"calendar.sys_update_name": string
"job_id.application": string
"job_id.handler_class": string
"job_id.job_details": string
"job_id.name": string
"job_id.sys_id": string
"job_id.sys_class_name": string
"job_id.sys_created_by": string
"job_id.sys_created_on": string
"job_id.sys_mod_count": string
"job_id.sys_name": string
"job_id.sys_package": string
"job_id.sys_policy": string
"job_id.sys_scope": string
"job_id.sys_updated_by": string
"job_id.sys_updated_on": string
"job_id.sys_update_name": string
"parent.application": string
"parent.calendar": string
"parent.claimed_by": string
"parent.document": string
"parent.document_key": string
"parent.error_count": string
"parent.job_context": string
"parent.job_id": string
"parent.last_error": string
"parent.log": string
"parent.maintenance": string
"parent.max_drift": string
"parent.name": string
"parent.next_action": string
"parent.parent": string
"parent.priority": string
"parent.processing_duration": string
"parent.repeat": string
"parent.replication_originator": string
"parent.rollback_context_id": string
"parent.run_count": string
"parent.run_dayofmonth": string
"parent.run_dayofweek": string
"parent.run_month": string
"parent.run_time": string
"parent.run_weekinmonth": string
"parent.script": string
"parent.state": string
"parent.system_id": string
"parent.sys_created_by": string
"parent.sys_created_on": string
"parent.sys_id": string
"parent.sys_mod_count": string
"parent.sys_updated_by": string
"parent.sys_updated_on": string
"parent.trigger_class": string
"parent.trigger_type": string
"parent.upgrade_safe": string
"rollback_context_id.active": string
"rollback_context_id.error": string
"rollback_context_id.from_version": string
"rollback_context_id.last_node_id": string
"rollback_context_id.number": string
"rollback_context_id.state": string
"rollback_context_id.sys_created_by": string
"rollback_context_id.sys_created_on": string
"rollback_context_id.sys_id": string
"rollback_context_id.sys_mod_count": string
"rollback_context_id.sys_updated_by": string
"rollback_context_id.sys_updated_on": string
"rollback_context_id.to_version": string
"rollback_context_id.type": string
"rollback_context_id.user": string;
      }
    }
   