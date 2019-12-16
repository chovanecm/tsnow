declare interface asmt_metric_type {
      active: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
allow_public: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
allow_retake: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
anonymize: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
business_rule: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_script>>;
condition: GlideElement<asmt_metric_type, glideElementType.defaultType>;
default_filter: GlideElement<asmt_metric_type, glideElementType.g_choice<string>>;
delete_business_rule: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_script>>;
description: GlideElement<asmt_metric_type, glideElementType.defaultType>;
disable_ui_action: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_ui_action>>;
display_all_filters: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
display_field: GlideElement<asmt_metric_type, glideElementType.defaultType>;
duration: GlideElement<asmt_metric_type, glideElementType.defaultType>;
enable_ui_action: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_ui_action>>;
end_note: GlideElement<asmt_metric_type, glideElementType.defaultType>;
enforce_condition: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
evaluation_method: GlideElement<asmt_metric_type, glideElementType.g_choice<string>>;
filter_condition: GlideElement<asmt_metric_type, glideElementType.defaultType>;
filter_table: GlideElement<asmt_metric_type, glideElementType.defaultType>;
introduction: GlideElement<asmt_metric_type, glideElementType.defaultType>;
job: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_trigger>>;
live_feed: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
name: GlideElement<asmt_metric_type, glideElementType.defaultType>;
notify_if_overdue: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
notify_user: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
not_show_intro_note: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
one_click_survey: GlideElement<asmt_metric_type, glideElementType.g_boolean>;
overdue_notify_user: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_user>>;
portal_pagination: GlideElement<asmt_metric_type, glideElementType.g_choice<string>>;
publish_state: GlideElement<asmt_metric_type, glideElementType.g_choice<string>>;
roles: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sample_metric: GlideElement<asmt_metric_type, glideElementType.g_reference<asmt_metric>>;
scale_factor: GlideElement<asmt_metric_type, glideElementType.defaultType>;
schedule_period: GlideElement<asmt_metric_type, glideElementType.g_choice<string>>;
schedule_type: GlideElement<asmt_metric_type, glideElementType.g_choice<string>>;
scoring_type: GlideElement<asmt_metric_type, glideElementType.g_choice<string>>;
signature: GlideElement<asmt_metric_type, glideElementType.g_reference<asmt_signature>>;
source_table: GlideElement<asmt_metric_type, glideElementType.defaultType>;
survey_owners: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_domain: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_domain_path: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_id: GlideElement<asmt_metric_type, glideElementType.defaultType>;
table: GlideElement<asmt_metric_type, glideElementType.defaultType>;
url: GlideElement<asmt_metric_type, glideElementType.defaultType>;
user_field: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_class_name: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_created_by: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_created_on: GlideElement<asmt_metric_type, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_name: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_package: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_scope: GlideElement<asmt_metric_type, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<asmt_metric_type, glideElementType.defaultType>;
sys_updated_on: GlideElement<asmt_metric_type, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<asmt_metric_type, glideElementType.defaultType>;
      _referenceKeys: never | {
        "business_rule.abort_action": string
"business_rule.access": string
"business_rule.action_delete": string
"business_rule.action_insert": string
"business_rule.action_query": string
"business_rule.action_update": string
"business_rule.active": string
"business_rule.add_message": string
"business_rule.advanced": string
"business_rule.change_fields": string
"business_rule.client_callable": string
"business_rule.collection": string
"business_rule.condition": string
"business_rule.description": string
"business_rule.execute_function": string
"business_rule.filter_condition": string
"business_rule.is_rest": string
"business_rule.message": string
"business_rule.name": string
"business_rule.order": string
"business_rule.priority": string
"business_rule.rest_method": string
"business_rule.rest_method_text": string
"business_rule.rest_service": string
"business_rule.rest_service_text": string
"business_rule.rest_variables": string
"business_rule.role_conditions": string
"business_rule.script": string
"business_rule.sys_domain": string
"business_rule.sys_domain_path": string
"business_rule.sys_id": string
"business_rule.sys_overrides": string
"business_rule.template": string
"business_rule.when": string
"business_rule.sys_class_name": string
"business_rule.sys_created_by": string
"business_rule.sys_created_on": string
"business_rule.sys_mod_count": string
"business_rule.sys_name": string
"business_rule.sys_package": string
"business_rule.sys_policy": string
"business_rule.sys_scope": string
"business_rule.sys_updated_by": string
"business_rule.sys_updated_on": string
"business_rule.sys_update_name": string
"delete_business_rule.abort_action": string
"delete_business_rule.access": string
"delete_business_rule.action_delete": string
"delete_business_rule.action_insert": string
"delete_business_rule.action_query": string
"delete_business_rule.action_update": string
"delete_business_rule.active": string
"delete_business_rule.add_message": string
"delete_business_rule.advanced": string
"delete_business_rule.change_fields": string
"delete_business_rule.client_callable": string
"delete_business_rule.collection": string
"delete_business_rule.condition": string
"delete_business_rule.description": string
"delete_business_rule.execute_function": string
"delete_business_rule.filter_condition": string
"delete_business_rule.is_rest": string
"delete_business_rule.message": string
"delete_business_rule.name": string
"delete_business_rule.order": string
"delete_business_rule.priority": string
"delete_business_rule.rest_method": string
"delete_business_rule.rest_method_text": string
"delete_business_rule.rest_service": string
"delete_business_rule.rest_service_text": string
"delete_business_rule.rest_variables": string
"delete_business_rule.role_conditions": string
"delete_business_rule.script": string
"delete_business_rule.sys_domain": string
"delete_business_rule.sys_domain_path": string
"delete_business_rule.sys_id": string
"delete_business_rule.sys_overrides": string
"delete_business_rule.template": string
"delete_business_rule.when": string
"delete_business_rule.sys_class_name": string
"delete_business_rule.sys_created_by": string
"delete_business_rule.sys_created_on": string
"delete_business_rule.sys_mod_count": string
"delete_business_rule.sys_name": string
"delete_business_rule.sys_package": string
"delete_business_rule.sys_policy": string
"delete_business_rule.sys_scope": string
"delete_business_rule.sys_updated_by": string
"delete_business_rule.sys_updated_on": string
"delete_business_rule.sys_update_name": string
"disable_ui_action.action_name": string
"disable_ui_action.active": string
"disable_ui_action.client": string
"disable_ui_action.client_script_v2": string
"disable_ui_action.comments": string
"disable_ui_action.condition": string
"disable_ui_action.form_action": string
"disable_ui_action.form_button": string
"disable_ui_action.form_button_v2": string
"disable_ui_action.form_context_menu": string
"disable_ui_action.form_link": string
"disable_ui_action.form_menu_button_v2": string
"disable_ui_action.form_style": string
"disable_ui_action.hint": string
"disable_ui_action.isolate_script": string
"disable_ui_action.list_action": string
"disable_ui_action.list_banner_button": string
"disable_ui_action.list_button": string
"disable_ui_action.list_choice": string
"disable_ui_action.list_context_menu": string
"disable_ui_action.list_link": string
"disable_ui_action.list_save_with_form_button": string
"disable_ui_action.list_style": string
"disable_ui_action.name": string
"disable_ui_action.onclick": string
"disable_ui_action.order": string
"disable_ui_action.script": string
"disable_ui_action.show_insert": string
"disable_ui_action.show_multiple_update": string
"disable_ui_action.show_query": string
"disable_ui_action.show_update": string
"disable_ui_action.sys_domain": string
"disable_ui_action.sys_domain_path": string
"disable_ui_action.sys_id": string
"disable_ui_action.sys_overrides": string
"disable_ui_action.table": string
"disable_ui_action.ui11_compatible": string
"disable_ui_action.ui16_compatible": string
"disable_ui_action.sys_class_name": string
"disable_ui_action.sys_created_by": string
"disable_ui_action.sys_created_on": string
"disable_ui_action.sys_mod_count": string
"disable_ui_action.sys_name": string
"disable_ui_action.sys_package": string
"disable_ui_action.sys_policy": string
"disable_ui_action.sys_scope": string
"disable_ui_action.sys_updated_by": string
"disable_ui_action.sys_updated_on": string
"disable_ui_action.sys_update_name": string
"enable_ui_action.action_name": string
"enable_ui_action.active": string
"enable_ui_action.client": string
"enable_ui_action.client_script_v2": string
"enable_ui_action.comments": string
"enable_ui_action.condition": string
"enable_ui_action.form_action": string
"enable_ui_action.form_button": string
"enable_ui_action.form_button_v2": string
"enable_ui_action.form_context_menu": string
"enable_ui_action.form_link": string
"enable_ui_action.form_menu_button_v2": string
"enable_ui_action.form_style": string
"enable_ui_action.hint": string
"enable_ui_action.isolate_script": string
"enable_ui_action.list_action": string
"enable_ui_action.list_banner_button": string
"enable_ui_action.list_button": string
"enable_ui_action.list_choice": string
"enable_ui_action.list_context_menu": string
"enable_ui_action.list_link": string
"enable_ui_action.list_save_with_form_button": string
"enable_ui_action.list_style": string
"enable_ui_action.name": string
"enable_ui_action.onclick": string
"enable_ui_action.order": string
"enable_ui_action.script": string
"enable_ui_action.show_insert": string
"enable_ui_action.show_multiple_update": string
"enable_ui_action.show_query": string
"enable_ui_action.show_update": string
"enable_ui_action.sys_domain": string
"enable_ui_action.sys_domain_path": string
"enable_ui_action.sys_id": string
"enable_ui_action.sys_overrides": string
"enable_ui_action.table": string
"enable_ui_action.ui11_compatible": string
"enable_ui_action.ui16_compatible": string
"enable_ui_action.sys_class_name": string
"enable_ui_action.sys_created_by": string
"enable_ui_action.sys_created_on": string
"enable_ui_action.sys_mod_count": string
"enable_ui_action.sys_name": string
"enable_ui_action.sys_package": string
"enable_ui_action.sys_policy": string
"enable_ui_action.sys_scope": string
"enable_ui_action.sys_updated_by": string
"enable_ui_action.sys_updated_on": string
"enable_ui_action.sys_update_name": string
"job.application": string
"job.calendar": string
"job.claimed_by": string
"job.document": string
"job.document_key": string
"job.error_count": string
"job.job_context": string
"job.job_id": string
"job.last_error": string
"job.log": string
"job.maintenance": string
"job.max_drift": string
"job.name": string
"job.next_action": string
"job.parent": string
"job.priority": string
"job.processing_duration": string
"job.repeat": string
"job.replication_originator": string
"job.rollback_context_id": string
"job.run_count": string
"job.run_dayofmonth": string
"job.run_dayofweek": string
"job.run_month": string
"job.run_time": string
"job.run_weekinmonth": string
"job.script": string
"job.state": string
"job.system_id": string
"job.sys_created_by": string
"job.sys_created_on": string
"job.sys_id": string
"job.sys_mod_count": string
"job.sys_updated_by": string
"job.sys_updated_on": string
"job.trigger_class": string
"job.trigger_type": string
"job.upgrade_safe": string
"overdue_notify_user.accumulated_roles": string
"overdue_notify_user.active": string
"overdue_notify_user.avatar": string
"overdue_notify_user.building": string
"overdue_notify_user.calendar_integration": string
"overdue_notify_user.city": string
"overdue_notify_user.company": string
"overdue_notify_user.cost_center": string
"overdue_notify_user.country": string
"overdue_notify_user.date_format": string
"overdue_notify_user.default_perspective": string
"overdue_notify_user.department": string
"overdue_notify_user.email": string
"overdue_notify_user.employee_number": string
"overdue_notify_user.enable_multifactor_authn": string
"overdue_notify_user.failed_attempts": string
"overdue_notify_user.first_name": string
"overdue_notify_user.gender": string
"overdue_notify_user.home_phone": string
"overdue_notify_user.internal_integration_user": string
"overdue_notify_user.introduction": string
"overdue_notify_user.last_login": string
"overdue_notify_user.last_login_time": string
"overdue_notify_user.last_name": string
"overdue_notify_user.ldap_server": string
"overdue_notify_user.location": string
"overdue_notify_user.locked_out": string
"overdue_notify_user.manager": string
"overdue_notify_user.middle_name": string
"overdue_notify_user.mobile_phone": string
"overdue_notify_user.name": string
"overdue_notify_user.notification": string
"overdue_notify_user.password_needs_reset": string
"overdue_notify_user.phone": string
"overdue_notify_user.photo": string
"overdue_notify_user.preferred_language": string
"overdue_notify_user.roles": string
"overdue_notify_user.schedule": string
"overdue_notify_user.source": string
"overdue_notify_user.state": string
"overdue_notify_user.street": string
"overdue_notify_user.sys_class_name": string
"overdue_notify_user.sys_created_by": string
"overdue_notify_user.sys_created_on": string
"overdue_notify_user.sys_domain": string
"overdue_notify_user.sys_domain_path": string
"overdue_notify_user.sys_id": string
"overdue_notify_user.sys_mod_count": string
"overdue_notify_user.sys_updated_by": string
"overdue_notify_user.sys_updated_on": string
"overdue_notify_user.time_format": string
"overdue_notify_user.time_zone": string
"overdue_notify_user.title": string
"overdue_notify_user.user_name": string
"overdue_notify_user.user_password": string
"overdue_notify_user.vip": string
"overdue_notify_user.web_service_access_only": string
"overdue_notify_user.zip": string
"sample_metric.active": string
"sample_metric.add_info_label": string
"sample_metric.allow_add_info": string
"sample_metric.allow_not_applicable": string
"sample_metric.auto_gen": string
"sample_metric.category": string
"sample_metric.cond_question": string
"sample_metric.correct_answer": string
"sample_metric.correct_answer_checkbox": string
"sample_metric.correct_answer_choice": string
"sample_metric.correct_answer_template": string
"sample_metric.correct_answer_yesno": string
"sample_metric.datatype": string
"sample_metric.default_value_field": string
"sample_metric.depends_on": string
"sample_metric.description": string
"sample_metric.details": string
"sample_metric.displayed_when": string
"sample_metric.displayed_when_checkbox": string
"sample_metric.displayed_when_template": string
"sample_metric.displayed_when_yesno": string
"sample_metric.duration": string
"sample_metric.mandatory": string
"sample_metric.max": string
"sample_metric.max_weight": string
"sample_metric.method": string
"sample_metric.metric_type": string
"sample_metric.min": string
"sample_metric.name": string
"sample_metric.order": string
"sample_metric.plugin": string
"sample_metric.question": string
"sample_metric.randomize_answers": string
"sample_metric.read_only": string
"sample_metric.reference_table": string
"sample_metric.scale": string
"sample_metric.scored": string
"sample_metric.script": string
"sample_metric.source_field": string
"sample_metric.string_option": string
"sample_metric.sys_domain": string
"sample_metric.sys_domain_path": string
"sample_metric.sys_id": string
"sample_metric.template": string
"sample_metric.weight": string
"sample_metric.sys_class_name": string
"sample_metric.sys_created_by": string
"sample_metric.sys_created_on": string
"sample_metric.sys_mod_count": string
"sample_metric.sys_name": string
"sample_metric.sys_package": string
"sample_metric.sys_policy": string
"sample_metric.sys_scope": string
"sample_metric.sys_updated_by": string
"sample_metric.sys_updated_on": string
"sample_metric.sys_update_name": string
"signature.assertion": string
"signature.name": string
"signature.sys_id": string
"signature.type": string
"signature.sys_class_name": string
"signature.sys_created_by": string
"signature.sys_created_on": string
"signature.sys_mod_count": string
"signature.sys_name": string
"signature.sys_package": string
"signature.sys_policy": string
"signature.sys_scope": string
"signature.sys_updated_by": string
"signature.sys_updated_on": string
"signature.sys_update_name": string
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
   