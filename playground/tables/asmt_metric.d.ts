declare interface asmt_metric {
      active: GlideElement<asmt_metric, glideElementType.g_boolean>;
add_info_label: GlideElement<asmt_metric, glideElementType.defaultType>;
allow_add_info: GlideElement<asmt_metric, glideElementType.g_boolean>;
allow_not_applicable: GlideElement<asmt_metric, glideElementType.g_boolean>;
auto_gen: GlideElement<asmt_metric, glideElementType.g_boolean>;
category: GlideElement<asmt_metric, glideElementType.g_reference<asmt_metric_category>>;
cond_question: GlideElement<asmt_metric, glideElementType.defaultType>;
correct_answer: GlideElement<asmt_metric, glideElementType.defaultType>;
correct_answer_checkbox: GlideElement<asmt_metric, glideElementType.defaultType>;
correct_answer_choice: GlideElement<asmt_metric, glideElementType.defaultType>;
correct_answer_template: GlideElement<asmt_metric, glideElementType.defaultType>;
correct_answer_yesno: GlideElement<asmt_metric, glideElementType.defaultType>;
datatype: GlideElement<asmt_metric, glideElementType.defaultType>;
default_value_field: GlideElement<asmt_metric, glideElementType.defaultType>;
depends_on: GlideElement<asmt_metric, glideElementType.g_reference<asmt_metric>>;
description: GlideElement<asmt_metric, glideElementType.defaultType>;
details: GlideElement<asmt_metric, glideElementType.defaultType>;
displayed_when: GlideElement<asmt_metric, glideElementType.defaultType>;
displayed_when_checkbox: GlideElement<asmt_metric, glideElementType.defaultType>;
displayed_when_template: GlideElement<asmt_metric, glideElementType.defaultType>;
displayed_when_yesno: GlideElement<asmt_metric, glideElementType.defaultType>;
duration: GlideElement<asmt_metric, glideElementType.defaultType>;
mandatory: GlideElement<asmt_metric, glideElementType.g_boolean>;
max: GlideElement<asmt_metric, glideElementType.defaultType>;
max_weight: GlideElement<asmt_metric, glideElementType.defaultType>;
method: GlideElement<asmt_metric, glideElementType.defaultType>;
metric_type: GlideElement<asmt_metric, glideElementType.g_reference<asmt_metric_type>>;
min: GlideElement<asmt_metric, glideElementType.defaultType>;
name: GlideElement<asmt_metric, glideElementType.defaultType>;
order: GlideElement<asmt_metric, glideElementType.defaultType>;
plugin: GlideElement<asmt_metric, glideElementType.g_choice<string>>;
question: GlideElement<asmt_metric, glideElementType.defaultType>;
randomize_answers: GlideElement<asmt_metric, glideElementType.g_boolean>;
read_only: GlideElement<asmt_metric, glideElementType.g_boolean>;
reference_table: GlideElement<asmt_metric, glideElementType.defaultType>;
scale: GlideElement<asmt_metric, glideElementType.defaultType>;
scored: GlideElement<asmt_metric, glideElementType.g_boolean>;
script: GlideElement<asmt_metric, glideElementType.defaultType>;
source_field: GlideElement<asmt_metric, glideElementType.defaultType>;
string_option: GlideElement<asmt_metric, glideElementType.g_choice<string>>;
sys_domain: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_domain_path: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_id: GlideElement<asmt_metric, glideElementType.defaultType>;
template: GlideElement<asmt_metric, glideElementType.g_reference<asmt_template>>;
weight: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_class_name: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_created_by: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_created_on: GlideElement<asmt_metric, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_name: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_package: GlideElement<asmt_metric, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_scope: GlideElement<asmt_metric, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<asmt_metric, glideElementType.defaultType>;
sys_updated_on: GlideElement<asmt_metric, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<asmt_metric, glideElementType.defaultType>;
      _referenceKeys: never | {
        "category.create_stakeholders": string
"category.description": string
"category.details": string
"category.filter": string
"category.metric_type": string
"category.name": string
"category.order": string
"category.qb_evaluation_method": string
"category.roles": string
"category.scoring_type": string
"category.sys_domain": string
"category.sys_domain_path": string
"category.sys_id": string
"category.table": string
"category.total_metrics": string
"category.weight": string
"category.sys_class_name": string
"category.sys_created_by": string
"category.sys_created_on": string
"category.sys_mod_count": string
"category.sys_name": string
"category.sys_package": string
"category.sys_policy": string
"category.sys_scope": string
"category.sys_updated_by": string
"category.sys_updated_on": string
"category.sys_update_name": string
"depends_on.active": string
"depends_on.add_info_label": string
"depends_on.allow_add_info": string
"depends_on.allow_not_applicable": string
"depends_on.auto_gen": string
"depends_on.category": string
"depends_on.cond_question": string
"depends_on.correct_answer": string
"depends_on.correct_answer_checkbox": string
"depends_on.correct_answer_choice": string
"depends_on.correct_answer_template": string
"depends_on.correct_answer_yesno": string
"depends_on.datatype": string
"depends_on.default_value_field": string
"depends_on.depends_on": string
"depends_on.description": string
"depends_on.details": string
"depends_on.displayed_when": string
"depends_on.displayed_when_checkbox": string
"depends_on.displayed_when_template": string
"depends_on.displayed_when_yesno": string
"depends_on.duration": string
"depends_on.mandatory": string
"depends_on.max": string
"depends_on.max_weight": string
"depends_on.method": string
"depends_on.metric_type": string
"depends_on.min": string
"depends_on.name": string
"depends_on.order": string
"depends_on.plugin": string
"depends_on.question": string
"depends_on.randomize_answers": string
"depends_on.read_only": string
"depends_on.reference_table": string
"depends_on.scale": string
"depends_on.scored": string
"depends_on.script": string
"depends_on.source_field": string
"depends_on.string_option": string
"depends_on.sys_domain": string
"depends_on.sys_domain_path": string
"depends_on.sys_id": string
"depends_on.template": string
"depends_on.weight": string
"depends_on.sys_class_name": string
"depends_on.sys_created_by": string
"depends_on.sys_created_on": string
"depends_on.sys_mod_count": string
"depends_on.sys_name": string
"depends_on.sys_package": string
"depends_on.sys_policy": string
"depends_on.sys_scope": string
"depends_on.sys_updated_by": string
"depends_on.sys_updated_on": string
"depends_on.sys_update_name": string
"metric_type.active": string
"metric_type.allow_public": string
"metric_type.allow_retake": string
"metric_type.anonymize": string
"metric_type.business_rule": string
"metric_type.condition": string
"metric_type.default_filter": string
"metric_type.delete_business_rule": string
"metric_type.description": string
"metric_type.disable_ui_action": string
"metric_type.display_all_filters": string
"metric_type.display_field": string
"metric_type.duration": string
"metric_type.enable_ui_action": string
"metric_type.end_note": string
"metric_type.enforce_condition": string
"metric_type.evaluation_method": string
"metric_type.filter_condition": string
"metric_type.filter_table": string
"metric_type.introduction": string
"metric_type.job": string
"metric_type.live_feed": string
"metric_type.name": string
"metric_type.notify_if_overdue": string
"metric_type.notify_user": string
"metric_type.not_show_intro_note": string
"metric_type.one_click_survey": string
"metric_type.overdue_notify_user": string
"metric_type.portal_pagination": string
"metric_type.publish_state": string
"metric_type.roles": string
"metric_type.sample_metric": string
"metric_type.scale_factor": string
"metric_type.schedule_period": string
"metric_type.schedule_type": string
"metric_type.scoring_type": string
"metric_type.signature": string
"metric_type.source_table": string
"metric_type.survey_owners": string
"metric_type.sys_domain": string
"metric_type.sys_domain_path": string
"metric_type.sys_id": string
"metric_type.table": string
"metric_type.url": string
"metric_type.user_field": string
"metric_type.sys_class_name": string
"metric_type.sys_created_by": string
"metric_type.sys_created_on": string
"metric_type.sys_mod_count": string
"metric_type.sys_name": string
"metric_type.sys_package": string
"metric_type.sys_policy": string
"metric_type.sys_scope": string
"metric_type.sys_updated_by": string
"metric_type.sys_updated_on": string
"metric_type.sys_update_name": string
"template.allow_image": string
"template.name": string
"template.number": string
"template.sys_domain": string
"template.sys_domain_path": string
"template.sys_id": string
"template.sys_class_name": string
"template.sys_created_by": string
"template.sys_created_on": string
"template.sys_mod_count": string
"template.sys_name": string
"template.sys_package": string
"template.sys_policy": string
"template.sys_scope": string
"template.sys_updated_by": string
"template.sys_updated_on": string
"template.sys_update_name": string
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
   