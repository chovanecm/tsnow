declare interface asmt_metric_category {
      create_stakeholders: GlideElement<asmt_metric_category, glideElementType.g_boolean>;
description: GlideElement<asmt_metric_category, glideElementType.defaultType>;
details: GlideElement<asmt_metric_category, glideElementType.defaultType>;
filter: GlideElement<asmt_metric_category, glideElementType.defaultType>;
metric_type: GlideElement<asmt_metric_category, glideElementType.g_reference<asmt_metric_type>>;
name: GlideElement<asmt_metric_category, glideElementType.defaultType>;
order: GlideElement<asmt_metric_category, glideElementType.defaultType>;
qb_evaluation_method: GlideElement<asmt_metric_category, glideElementType.g_choice<string>>;
roles: GlideElement<asmt_metric_category, glideElementType.defaultType>;
scoring_type: GlideElement<asmt_metric_category, glideElementType.g_choice<string>>;
sys_domain: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_domain_path: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_id: GlideElement<asmt_metric_category, glideElementType.defaultType>;
table: GlideElement<asmt_metric_category, glideElementType.defaultType>;
total_metrics: GlideElement<asmt_metric_category, glideElementType.defaultType>;
weight: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_class_name: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_created_by: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_created_on: GlideElement<asmt_metric_category, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_name: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_package: GlideElement<asmt_metric_category, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_scope: GlideElement<asmt_metric_category, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<asmt_metric_category, glideElementType.defaultType>;
sys_updated_on: GlideElement<asmt_metric_category, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<asmt_metric_category, glideElementType.defaultType>;
      _referenceKeys: never | {
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
   