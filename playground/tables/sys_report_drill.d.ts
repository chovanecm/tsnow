declare interface sys_report_drill {
      sys_id: GlideElement<sys_report_drill, glideElementType.defaultType>;
additional_groupby: GlideElement<sys_report_drill, glideElementType.defaultType>;
aggregate: GlideElement<sys_report_drill, glideElementType.defaultType>;
allow_data_label_overlap: GlideElement<sys_report_drill, glideElementType.g_boolean>;
axis_max_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
axis_min_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
bar_unstack: GlideElement<sys_report_drill, glideElementType.g_boolean>;
chart_background_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
chart_border_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
chart_border_radius: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_border_width: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_height: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_size: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_subtitle: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_subtitle_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
chart_subtitle_size: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_subtitle_style: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_title: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_title_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
chart_title_size: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_title_style: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_title_x_position: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_title_y_position: GlideElement<sys_report_drill, glideElementType.defaultType>;
chart_width: GlideElement<sys_report_drill, glideElementType.defaultType>;
color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
colors: GlideElement<sys_report_drill, glideElementType.defaultType>;
color_palette: GlideElement<sys_report_drill, glideElementType.g_reference<pa_chart_color_schemes>>;
column: GlideElement<sys_report_drill, glideElementType.defaultType>;
compute_percent: GlideElement<sys_report_drill, glideElementType.defaultType>;
content: GlideElement<sys_report_drill, glideElementType.defaultType>;
created_by_user: GlideElement<sys_report_drill, glideElementType.g_reference<sys_user>>;
custom_chart_size: GlideElement<sys_report_drill, glideElementType.g_boolean>;
custom_chart_title_position: GlideElement<sys_report_drill, glideElementType.g_boolean>;
custom_config: GlideElement<sys_report_drill, glideElementType.defaultType>;
decimal_precision: GlideElement<sys_report_drill, glideElementType.defaultType>;
description: GlideElement<sys_report_drill, glideElementType.defaultType>;
direction: GlideElement<sys_report_drill, glideElementType.defaultType>;
display_column_lines: GlideElement<sys_report_drill, glideElementType.g_boolean>;
display_grid: GlideElement<sys_report_drill, glideElementType.g_boolean>;
display_row_lines: GlideElement<sys_report_drill, glideElementType.g_boolean>;
donut_width_percent: GlideElement<sys_report_drill, glideElementType.defaultType>;
end_time: GlideElement<sys_report_drill, glideElementType.defaultType>;
exp_report_attrs: GlideElement<sys_report_drill, glideElementType.g_boolean>;
field: GlideElement<sys_report_drill, glideElementType.defaultType>;
field_list: GlideElement<sys_report_drill, glideElementType.defaultType>;
filter: GlideElement<sys_report_drill, glideElementType.defaultType>;
from: GlideElement<sys_report_drill, glideElementType.defaultType>;
funnel_neck_percent: GlideElement<sys_report_drill, glideElementType.defaultType>;
gauge_autoscale: GlideElement<sys_report_drill, glideElementType.g_boolean>;
group: GlideElement<sys_report_drill, glideElementType.g_reference<sys_user_group>>;
import_table: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_import_table>>;
interval: GlideElement<sys_report_drill, glideElementType.defaultType>;
is_published: GlideElement<sys_report_drill, glideElementType.g_boolean>;
is_real_time: GlideElement<sys_report_drill, glideElementType.g_boolean>;
is_scheduled: GlideElement<sys_report_drill, glideElementType.g_boolean>;
legend_align_columns: GlideElement<sys_report_drill, glideElementType.g_boolean>;
legend_background_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
legend_border_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
legend_border_radius: GlideElement<sys_report_drill, glideElementType.defaultType>;
legend_border_width: GlideElement<sys_report_drill, glideElementType.defaultType>;
legend_horizontal_alignment: GlideElement<sys_report_drill, glideElementType.defaultType>;
legend_items_left_align: GlideElement<sys_report_drill, glideElementType.g_boolean>;
legend_vertical_alignment: GlideElement<sys_report_drill, glideElementType.defaultType>;
list_ui_view: GlideElement<sys_report_drill, glideElementType.g_reference<sys_ui_view>>;
location_field: GlideElement<sys_report_drill, glideElementType.defaultType>;
lower_limit: GlideElement<sys_report_drill, glideElementType.defaultType>;
map: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_map>>;
map_source: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_map_source>>;
orderby_list: GlideElement<sys_report_drill, glideElementType.defaultType>;
others: GlideElement<sys_report_drill, glideElementType.defaultType>;
other_threshold: GlideElement<sys_report_drill, glideElementType.defaultType>;
page_hdrftr: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_page_hdrftr>>;
pivot_expanded: GlideElement<sys_report_drill, glideElementType.g_boolean>;
report_drilldown: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_drill>>;
report_source: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_source>>;
roles: GlideElement<sys_report_drill, glideElementType.defaultType>;
row: GlideElement<sys_report_drill, glideElementType.defaultType>;
score_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
sc_groupby_item_id: GlideElement<sys_report_drill, glideElementType.defaultType>;
sc_groupby_variable_id: GlideElement<sys_report_drill, glideElementType.defaultType>;
sc_stackby_item_id: GlideElement<sys_report_drill, glideElementType.defaultType>;
sc_stackby_variable_id: GlideElement<sys_report_drill, glideElementType.defaultType>;
series_name_text: GlideElement<sys_report_drill, glideElementType.defaultType>;
set_color: GlideElement<sys_report_drill, glideElementType.defaultType>;
show_chart_border: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_chart_data_label: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_chart_title: GlideElement<sys_report_drill, glideElementType.defaultType>;
show_chart_total: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_data_label_position_middle: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_empty: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_geographical_label: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_legend: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_legend_border: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_marker: GlideElement<sys_report_drill, glideElementType.g_boolean>;
show_zero: GlideElement<sys_report_drill, glideElementType.g_boolean>;
source_type: GlideElement<sys_report_drill, glideElementType.defaultType>;
start_time: GlideElement<sys_report_drill, glideElementType.defaultType>;
style_config: GlideElement<sys_report_drill, glideElementType.defaultType>;
sumfield: GlideElement<sys_report_drill, glideElementType.defaultType>;
table: GlideElement<sys_report_drill, glideElementType.defaultType>;
title: GlideElement<sys_report_drill, glideElementType.defaultType>;
title_horizontal_alignment: GlideElement<sys_report_drill, glideElementType.defaultType>;
title_vertical_alignment: GlideElement<sys_report_drill, glideElementType.defaultType>;
to: GlideElement<sys_report_drill, glideElementType.defaultType>;
trend_field: GlideElement<sys_report_drill, glideElementType.defaultType>;
type: GlideElement<sys_report_drill, glideElementType.defaultType>;
upper_limit: GlideElement<sys_report_drill, glideElementType.defaultType>;
user: GlideElement<sys_report_drill, glideElementType.defaultType>;
use_color_heatmap: GlideElement<sys_report_drill, glideElementType.g_boolean>;
use_null_in_trend: GlideElement<sys_report_drill, glideElementType.g_boolean>;
x_axis_allow_decimals: GlideElement<sys_report_drill, glideElementType.g_boolean>;
x_axis_display_grid: GlideElement<sys_report_drill, glideElementType.g_boolean>;
x_axis_grid_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
x_axis_grid_dotted: GlideElement<sys_report_drill, glideElementType.g_boolean>;
x_axis_grid_width: GlideElement<sys_report_drill, glideElementType.defaultType>;
x_axis_label_bold: GlideElement<sys_report_drill, glideElementType.g_boolean>;
x_axis_label_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
x_axis_label_size: GlideElement<sys_report_drill, glideElementType.defaultType>;
x_axis_label_tilt: GlideElement<sys_report_drill, glideElementType.defaultType>;
x_axis_opposite: GlideElement<sys_report_drill, glideElementType.g_boolean>;
x_axis_title: GlideElement<sys_report_drill, glideElementType.defaultType>;
x_axis_title_bold: GlideElement<sys_report_drill, glideElementType.g_boolean>;
x_axis_title_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
x_axis_title_size: GlideElement<sys_report_drill, glideElementType.defaultType>;
y_axis_allow_decimals: GlideElement<sys_report_drill, glideElementType.g_boolean>;
y_axis_display_grid: GlideElement<sys_report_drill, glideElementType.g_boolean>;
y_axis_from: GlideElement<sys_report_drill, glideElementType.defaultType>;
y_axis_grid_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
y_axis_grid_dotted: GlideElement<sys_report_drill, glideElementType.g_boolean>;
y_axis_grid_width: GlideElement<sys_report_drill, glideElementType.defaultType>;
y_axis_label_bold: GlideElement<sys_report_drill, glideElementType.g_boolean>;
y_axis_label_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
y_axis_label_size: GlideElement<sys_report_drill, glideElementType.defaultType>;
y_axis_label_tilt: GlideElement<sys_report_drill, glideElementType.defaultType>;
y_axis_opposite: GlideElement<sys_report_drill, glideElementType.g_boolean>;
y_axis_title: GlideElement<sys_report_drill, glideElementType.defaultType>;
y_axis_title_bold: GlideElement<sys_report_drill, glideElementType.g_boolean>;
y_axis_title_color: GlideElement<sys_report_drill, glideElementType.g_reference<sys_report_color>>;
y_axis_title_size: GlideElement<sys_report_drill, glideElementType.defaultType>;
y_axis_to: GlideElement<sys_report_drill, glideElementType.defaultType>;
sys_class_name: GlideElement<sys_report_drill, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_report_drill, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_report_drill, glideElementType.g_glide_date_time>;
sys_mod_count: GlideElement<sys_report_drill, glideElementType.defaultType>;
sys_name: GlideElement<sys_report_drill, glideElementType.defaultType>;
sys_package: GlideElement<sys_report_drill, glideElementType.g_reference<sys_package>>;
sys_policy: GlideElement<sys_report_drill, glideElementType.defaultType>;
sys_scope: GlideElement<sys_report_drill, glideElementType.g_reference<sys_scope>>;
sys_updated_by: GlideElement<sys_report_drill, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_report_drill, glideElementType.g_glide_date_time>;
sys_update_name: GlideElement<sys_report_drill, glideElementType.defaultType>;
      _referenceKeys: never | {
        "axis_max_color.color": string
"axis_max_color.display": string
"axis_max_color.name": string
"axis_max_color.sys_id": string
"axis_max_color.sys_class_name": string
"axis_max_color.sys_created_by": string
"axis_max_color.sys_created_on": string
"axis_max_color.sys_mod_count": string
"axis_max_color.sys_name": string
"axis_max_color.sys_package": string
"axis_max_color.sys_policy": string
"axis_max_color.sys_scope": string
"axis_max_color.sys_updated_by": string
"axis_max_color.sys_updated_on": string
"axis_max_color.sys_update_name": string
"axis_min_color.color": string
"axis_min_color.display": string
"axis_min_color.name": string
"axis_min_color.sys_id": string
"axis_min_color.sys_class_name": string
"axis_min_color.sys_created_by": string
"axis_min_color.sys_created_on": string
"axis_min_color.sys_mod_count": string
"axis_min_color.sys_name": string
"axis_min_color.sys_package": string
"axis_min_color.sys_policy": string
"axis_min_color.sys_scope": string
"axis_min_color.sys_updated_by": string
"axis_min_color.sys_updated_on": string
"axis_min_color.sys_update_name": string
"chart_background_color.color": string
"chart_background_color.display": string
"chart_background_color.name": string
"chart_background_color.sys_id": string
"chart_background_color.sys_class_name": string
"chart_background_color.sys_created_by": string
"chart_background_color.sys_created_on": string
"chart_background_color.sys_mod_count": string
"chart_background_color.sys_name": string
"chart_background_color.sys_package": string
"chart_background_color.sys_policy": string
"chart_background_color.sys_scope": string
"chart_background_color.sys_updated_by": string
"chart_background_color.sys_updated_on": string
"chart_background_color.sys_update_name": string
"chart_border_color.color": string
"chart_border_color.display": string
"chart_border_color.name": string
"chart_border_color.sys_id": string
"chart_border_color.sys_class_name": string
"chart_border_color.sys_created_by": string
"chart_border_color.sys_created_on": string
"chart_border_color.sys_mod_count": string
"chart_border_color.sys_name": string
"chart_border_color.sys_package": string
"chart_border_color.sys_policy": string
"chart_border_color.sys_scope": string
"chart_border_color.sys_updated_by": string
"chart_border_color.sys_updated_on": string
"chart_border_color.sys_update_name": string
"chart_subtitle_color.color": string
"chart_subtitle_color.display": string
"chart_subtitle_color.name": string
"chart_subtitle_color.sys_id": string
"chart_subtitle_color.sys_class_name": string
"chart_subtitle_color.sys_created_by": string
"chart_subtitle_color.sys_created_on": string
"chart_subtitle_color.sys_mod_count": string
"chart_subtitle_color.sys_name": string
"chart_subtitle_color.sys_package": string
"chart_subtitle_color.sys_policy": string
"chart_subtitle_color.sys_scope": string
"chart_subtitle_color.sys_updated_by": string
"chart_subtitle_color.sys_updated_on": string
"chart_subtitle_color.sys_update_name": string
"chart_title_color.color": string
"chart_title_color.display": string
"chart_title_color.name": string
"chart_title_color.sys_id": string
"chart_title_color.sys_class_name": string
"chart_title_color.sys_created_by": string
"chart_title_color.sys_created_on": string
"chart_title_color.sys_mod_count": string
"chart_title_color.sys_name": string
"chart_title_color.sys_package": string
"chart_title_color.sys_policy": string
"chart_title_color.sys_scope": string
"chart_title_color.sys_updated_by": string
"chart_title_color.sys_updated_on": string
"chart_title_color.sys_update_name": string
"color.color": string
"color.display": string
"color.name": string
"color.sys_id": string
"color.sys_class_name": string
"color.sys_created_by": string
"color.sys_created_on": string
"color.sys_mod_count": string
"color.sys_name": string
"color.sys_package": string
"color.sys_policy": string
"color.sys_scope": string
"color.sys_updated_by": string
"color.sys_updated_on": string
"color.sys_update_name": string
"color_palette.color_1": string
"color_palette.color_10": string
"color_palette.color_11": string
"color_palette.color_12": string
"color_palette.color_13": string
"color_palette.color_14": string
"color_palette.color_15": string
"color_palette.color_16": string
"color_palette.color_17": string
"color_palette.color_18": string
"color_palette.color_19": string
"color_palette.color_2": string
"color_palette.color_20": string
"color_palette.color_21": string
"color_palette.color_22": string
"color_palette.color_23": string
"color_palette.color_24": string
"color_palette.color_25": string
"color_palette.color_26": string
"color_palette.color_27": string
"color_palette.color_28": string
"color_palette.color_29": string
"color_palette.color_3": string
"color_palette.color_30": string
"color_palette.color_31": string
"color_palette.color_32": string
"color_palette.color_4": string
"color_palette.color_5": string
"color_palette.color_6": string
"color_palette.color_7": string
"color_palette.color_8": string
"color_palette.color_9": string
"color_palette.description": string
"color_palette.name": string
"color_palette.sys_domain": string
"color_palette.sys_domain_path": string
"color_palette.sys_id": string
"color_palette.sys_overrides": string
"color_palette.sys_class_name": string
"color_palette.sys_created_by": string
"color_palette.sys_created_on": string
"color_palette.sys_mod_count": string
"color_palette.sys_name": string
"color_palette.sys_package": string
"color_palette.sys_policy": string
"color_palette.sys_scope": string
"color_palette.sys_updated_by": string
"color_palette.sys_updated_on": string
"color_palette.sys_update_name": string
"created_by_user.accumulated_roles": string
"created_by_user.active": string
"created_by_user.avatar": string
"created_by_user.building": string
"created_by_user.calendar_integration": string
"created_by_user.city": string
"created_by_user.company": string
"created_by_user.cost_center": string
"created_by_user.country": string
"created_by_user.date_format": string
"created_by_user.default_perspective": string
"created_by_user.department": string
"created_by_user.email": string
"created_by_user.employee_number": string
"created_by_user.enable_multifactor_authn": string
"created_by_user.failed_attempts": string
"created_by_user.first_name": string
"created_by_user.gender": string
"created_by_user.home_phone": string
"created_by_user.internal_integration_user": string
"created_by_user.introduction": string
"created_by_user.last_login": string
"created_by_user.last_login_time": string
"created_by_user.last_name": string
"created_by_user.ldap_server": string
"created_by_user.location": string
"created_by_user.locked_out": string
"created_by_user.manager": string
"created_by_user.middle_name": string
"created_by_user.mobile_phone": string
"created_by_user.name": string
"created_by_user.notification": string
"created_by_user.password_needs_reset": string
"created_by_user.phone": string
"created_by_user.photo": string
"created_by_user.preferred_language": string
"created_by_user.roles": string
"created_by_user.schedule": string
"created_by_user.source": string
"created_by_user.state": string
"created_by_user.street": string
"created_by_user.sys_class_name": string
"created_by_user.sys_created_by": string
"created_by_user.sys_created_on": string
"created_by_user.sys_domain": string
"created_by_user.sys_domain_path": string
"created_by_user.sys_id": string
"created_by_user.sys_mod_count": string
"created_by_user.sys_updated_by": string
"created_by_user.sys_updated_on": string
"created_by_user.time_format": string
"created_by_user.time_zone": string
"created_by_user.title": string
"created_by_user.user_name": string
"created_by_user.user_password": string
"created_by_user.vip": string
"created_by_user.web_service_access_only": string
"created_by_user.zip": string
"group.active": string
"group.cost_center": string
"group.default_assignee": string
"group.description": string
"group.email": string
"group.exclude_manager": string
"group.include_members": string
"group.manager": string
"group.name": string
"group.parent": string
"group.roles": string
"group.source": string
"group.sys_created_by": string
"group.sys_created_on": string
"group.sys_id": string
"group.sys_mod_count": string
"group.sys_updated_by": string
"group.sys_updated_on": string
"group.type": string
"import_table.active": string
"import_table.created_by_user": string
"import_table.expiration_days": string
"import_table.expired": string
"import_table.expire_on_date": string
"import_table.filename": string
"import_table.name": string
"import_table.sys_created_by": string
"import_table.sys_created_on": string
"import_table.sys_domain": string
"import_table.sys_domain_path": string
"import_table.sys_id": string
"import_table.sys_mod_count": string
"import_table.sys_updated_by": string
"import_table.sys_updated_on": string
"import_table.table": string
"legend_background_color.color": string
"legend_background_color.display": string
"legend_background_color.name": string
"legend_background_color.sys_id": string
"legend_background_color.sys_class_name": string
"legend_background_color.sys_created_by": string
"legend_background_color.sys_created_on": string
"legend_background_color.sys_mod_count": string
"legend_background_color.sys_name": string
"legend_background_color.sys_package": string
"legend_background_color.sys_policy": string
"legend_background_color.sys_scope": string
"legend_background_color.sys_updated_by": string
"legend_background_color.sys_updated_on": string
"legend_background_color.sys_update_name": string
"legend_border_color.color": string
"legend_border_color.display": string
"legend_border_color.name": string
"legend_border_color.sys_id": string
"legend_border_color.sys_class_name": string
"legend_border_color.sys_created_by": string
"legend_border_color.sys_created_on": string
"legend_border_color.sys_mod_count": string
"legend_border_color.sys_name": string
"legend_border_color.sys_package": string
"legend_border_color.sys_policy": string
"legend_border_color.sys_scope": string
"legend_border_color.sys_updated_by": string
"legend_border_color.sys_updated_on": string
"legend_border_color.sys_update_name": string
"list_ui_view.group": string
"list_ui_view.hidden": string
"list_ui_view.name": string
"list_ui_view.roles": string
"list_ui_view.sys_id": string
"list_ui_view.title": string
"list_ui_view.user": string
"list_ui_view.sys_class_name": string
"list_ui_view.sys_created_by": string
"list_ui_view.sys_created_on": string
"list_ui_view.sys_mod_count": string
"list_ui_view.sys_name": string
"list_ui_view.sys_package": string
"list_ui_view.sys_policy": string
"list_ui_view.sys_scope": string
"list_ui_view.sys_updated_by": string
"list_ui_view.sys_updated_on": string
"list_ui_view.sys_update_name": string
"map.active": string
"map.is_geomap": string
"map.json_map": string
"map.key": string
"map.name": string
"map.parent": string
"map.sys_created_by": string
"map.sys_created_on": string
"map.sys_id": string
"map.sys_mod_count": string
"map.sys_updated_by": string
"map.sys_updated_on": string
"map.type": string
"map_source.active": string
"map_source.aggregate_field": string
"map_source.join_by_column": string
"map_source.name": string
"map_source.parent": string
"map_source.report_map_source_mapping": string
"map_source.sys_created_by": string
"map_source.sys_created_on": string
"map_source.sys_id": string
"map_source.sys_mod_count": string
"map_source.sys_updated_by": string
"map_source.sys_updated_on": string
"map_source.table": string
"map_source.type": string
"map_source.type_mapping": string
"page_hdrftr.ftr_data": string
"page_hdrftr.hdr_data": string
"page_hdrftr.left_ftr_content": string
"page_hdrftr.left_ftr_img": string
"page_hdrftr.left_ftr_text": string
"page_hdrftr.left_hdr_content": string
"page_hdrftr.left_hdr_img": string
"page_hdrftr.left_hdr_text": string
"page_hdrftr.mid_ftr_content": string
"page_hdrftr.mid_ftr_img": string
"page_hdrftr.mid_ftr_text": string
"page_hdrftr.mid_hdr_content": string
"page_hdrftr.mid_hdr_img": string
"page_hdrftr.mid_hdr_text": string
"page_hdrftr.name": string
"page_hdrftr.right_ftr_content": string
"page_hdrftr.right_ftr_img": string
"page_hdrftr.right_ftr_text": string
"page_hdrftr.right_hdr_content": string
"page_hdrftr.right_hdr_img": string
"page_hdrftr.right_hdr_text": string
"page_hdrftr.sys_id": string
"page_hdrftr.sys_class_name": string
"page_hdrftr.sys_created_by": string
"page_hdrftr.sys_created_on": string
"page_hdrftr.sys_mod_count": string
"page_hdrftr.sys_name": string
"page_hdrftr.sys_package": string
"page_hdrftr.sys_policy": string
"page_hdrftr.sys_scope": string
"page_hdrftr.sys_updated_by": string
"page_hdrftr.sys_updated_on": string
"page_hdrftr.sys_update_name": string
"report_drilldown.sys_id": string
"report_drilldown.additional_groupby": string
"report_drilldown.aggregate": string
"report_drilldown.allow_data_label_overlap": string
"report_drilldown.axis_max_color": string
"report_drilldown.axis_min_color": string
"report_drilldown.bar_unstack": string
"report_drilldown.chart_background_color": string
"report_drilldown.chart_border_color": string
"report_drilldown.chart_border_radius": string
"report_drilldown.chart_border_width": string
"report_drilldown.chart_height": string
"report_drilldown.chart_size": string
"report_drilldown.chart_subtitle": string
"report_drilldown.chart_subtitle_color": string
"report_drilldown.chart_subtitle_size": string
"report_drilldown.chart_subtitle_style": string
"report_drilldown.chart_title": string
"report_drilldown.chart_title_color": string
"report_drilldown.chart_title_size": string
"report_drilldown.chart_title_style": string
"report_drilldown.chart_title_x_position": string
"report_drilldown.chart_title_y_position": string
"report_drilldown.chart_width": string
"report_drilldown.color": string
"report_drilldown.colors": string
"report_drilldown.color_palette": string
"report_drilldown.column": string
"report_drilldown.compute_percent": string
"report_drilldown.content": string
"report_drilldown.created_by_user": string
"report_drilldown.custom_chart_size": string
"report_drilldown.custom_chart_title_position": string
"report_drilldown.custom_config": string
"report_drilldown.decimal_precision": string
"report_drilldown.description": string
"report_drilldown.direction": string
"report_drilldown.display_column_lines": string
"report_drilldown.display_grid": string
"report_drilldown.display_row_lines": string
"report_drilldown.donut_width_percent": string
"report_drilldown.end_time": string
"report_drilldown.exp_report_attrs": string
"report_drilldown.field": string
"report_drilldown.field_list": string
"report_drilldown.filter": string
"report_drilldown.from": string
"report_drilldown.funnel_neck_percent": string
"report_drilldown.gauge_autoscale": string
"report_drilldown.group": string
"report_drilldown.import_table": string
"report_drilldown.interval": string
"report_drilldown.is_published": string
"report_drilldown.is_real_time": string
"report_drilldown.is_scheduled": string
"report_drilldown.legend_align_columns": string
"report_drilldown.legend_background_color": string
"report_drilldown.legend_border_color": string
"report_drilldown.legend_border_radius": string
"report_drilldown.legend_border_width": string
"report_drilldown.legend_horizontal_alignment": string
"report_drilldown.legend_items_left_align": string
"report_drilldown.legend_vertical_alignment": string
"report_drilldown.list_ui_view": string
"report_drilldown.location_field": string
"report_drilldown.lower_limit": string
"report_drilldown.map": string
"report_drilldown.map_source": string
"report_drilldown.orderby_list": string
"report_drilldown.others": string
"report_drilldown.other_threshold": string
"report_drilldown.page_hdrftr": string
"report_drilldown.pivot_expanded": string
"report_drilldown.report_drilldown": string
"report_drilldown.report_source": string
"report_drilldown.roles": string
"report_drilldown.row": string
"report_drilldown.score_color": string
"report_drilldown.sc_groupby_item_id": string
"report_drilldown.sc_groupby_variable_id": string
"report_drilldown.sc_stackby_item_id": string
"report_drilldown.sc_stackby_variable_id": string
"report_drilldown.series_name_text": string
"report_drilldown.set_color": string
"report_drilldown.show_chart_border": string
"report_drilldown.show_chart_data_label": string
"report_drilldown.show_chart_title": string
"report_drilldown.show_chart_total": string
"report_drilldown.show_data_label_position_middle": string
"report_drilldown.show_empty": string
"report_drilldown.show_geographical_label": string
"report_drilldown.show_legend": string
"report_drilldown.show_legend_border": string
"report_drilldown.show_marker": string
"report_drilldown.show_zero": string
"report_drilldown.source_type": string
"report_drilldown.start_time": string
"report_drilldown.style_config": string
"report_drilldown.sumfield": string
"report_drilldown.table": string
"report_drilldown.title": string
"report_drilldown.title_horizontal_alignment": string
"report_drilldown.title_vertical_alignment": string
"report_drilldown.to": string
"report_drilldown.trend_field": string
"report_drilldown.type": string
"report_drilldown.upper_limit": string
"report_drilldown.user": string
"report_drilldown.use_color_heatmap": string
"report_drilldown.use_null_in_trend": string
"report_drilldown.x_axis_allow_decimals": string
"report_drilldown.x_axis_display_grid": string
"report_drilldown.x_axis_grid_color": string
"report_drilldown.x_axis_grid_dotted": string
"report_drilldown.x_axis_grid_width": string
"report_drilldown.x_axis_label_bold": string
"report_drilldown.x_axis_label_color": string
"report_drilldown.x_axis_label_size": string
"report_drilldown.x_axis_label_tilt": string
"report_drilldown.x_axis_opposite": string
"report_drilldown.x_axis_title": string
"report_drilldown.x_axis_title_bold": string
"report_drilldown.x_axis_title_color": string
"report_drilldown.x_axis_title_size": string
"report_drilldown.y_axis_allow_decimals": string
"report_drilldown.y_axis_display_grid": string
"report_drilldown.y_axis_from": string
"report_drilldown.y_axis_grid_color": string
"report_drilldown.y_axis_grid_dotted": string
"report_drilldown.y_axis_grid_width": string
"report_drilldown.y_axis_label_bold": string
"report_drilldown.y_axis_label_color": string
"report_drilldown.y_axis_label_size": string
"report_drilldown.y_axis_label_tilt": string
"report_drilldown.y_axis_opposite": string
"report_drilldown.y_axis_title": string
"report_drilldown.y_axis_title_bold": string
"report_drilldown.y_axis_title_color": string
"report_drilldown.y_axis_title_size": string
"report_drilldown.y_axis_to": string
"report_drilldown.sys_class_name": string
"report_drilldown.sys_created_by": string
"report_drilldown.sys_created_on": string
"report_drilldown.sys_mod_count": string
"report_drilldown.sys_name": string
"report_drilldown.sys_package": string
"report_drilldown.sys_policy": string
"report_drilldown.sys_scope": string
"report_drilldown.sys_updated_by": string
"report_drilldown.sys_updated_on": string
"report_drilldown.sys_update_name": string
"report_source.description": string
"report_source.display": string
"report_source.filter": string
"report_source.name": string
"report_source.sys_id": string
"report_source.table": string
"report_source.sys_class_name": string
"report_source.sys_created_by": string
"report_source.sys_created_on": string
"report_source.sys_mod_count": string
"report_source.sys_name": string
"report_source.sys_package": string
"report_source.sys_policy": string
"report_source.sys_scope": string
"report_source.sys_updated_by": string
"report_source.sys_updated_on": string
"report_source.sys_update_name": string
"score_color.color": string
"score_color.display": string
"score_color.name": string
"score_color.sys_id": string
"score_color.sys_class_name": string
"score_color.sys_created_by": string
"score_color.sys_created_on": string
"score_color.sys_mod_count": string
"score_color.sys_name": string
"score_color.sys_package": string
"score_color.sys_policy": string
"score_color.sys_scope": string
"score_color.sys_updated_by": string
"score_color.sys_updated_on": string
"score_color.sys_update_name": string
"x_axis_grid_color.color": string
"x_axis_grid_color.display": string
"x_axis_grid_color.name": string
"x_axis_grid_color.sys_id": string
"x_axis_grid_color.sys_class_name": string
"x_axis_grid_color.sys_created_by": string
"x_axis_grid_color.sys_created_on": string
"x_axis_grid_color.sys_mod_count": string
"x_axis_grid_color.sys_name": string
"x_axis_grid_color.sys_package": string
"x_axis_grid_color.sys_policy": string
"x_axis_grid_color.sys_scope": string
"x_axis_grid_color.sys_updated_by": string
"x_axis_grid_color.sys_updated_on": string
"x_axis_grid_color.sys_update_name": string
"x_axis_label_color.color": string
"x_axis_label_color.display": string
"x_axis_label_color.name": string
"x_axis_label_color.sys_id": string
"x_axis_label_color.sys_class_name": string
"x_axis_label_color.sys_created_by": string
"x_axis_label_color.sys_created_on": string
"x_axis_label_color.sys_mod_count": string
"x_axis_label_color.sys_name": string
"x_axis_label_color.sys_package": string
"x_axis_label_color.sys_policy": string
"x_axis_label_color.sys_scope": string
"x_axis_label_color.sys_updated_by": string
"x_axis_label_color.sys_updated_on": string
"x_axis_label_color.sys_update_name": string
"x_axis_title_color.color": string
"x_axis_title_color.display": string
"x_axis_title_color.name": string
"x_axis_title_color.sys_id": string
"x_axis_title_color.sys_class_name": string
"x_axis_title_color.sys_created_by": string
"x_axis_title_color.sys_created_on": string
"x_axis_title_color.sys_mod_count": string
"x_axis_title_color.sys_name": string
"x_axis_title_color.sys_package": string
"x_axis_title_color.sys_policy": string
"x_axis_title_color.sys_scope": string
"x_axis_title_color.sys_updated_by": string
"x_axis_title_color.sys_updated_on": string
"x_axis_title_color.sys_update_name": string
"y_axis_grid_color.color": string
"y_axis_grid_color.display": string
"y_axis_grid_color.name": string
"y_axis_grid_color.sys_id": string
"y_axis_grid_color.sys_class_name": string
"y_axis_grid_color.sys_created_by": string
"y_axis_grid_color.sys_created_on": string
"y_axis_grid_color.sys_mod_count": string
"y_axis_grid_color.sys_name": string
"y_axis_grid_color.sys_package": string
"y_axis_grid_color.sys_policy": string
"y_axis_grid_color.sys_scope": string
"y_axis_grid_color.sys_updated_by": string
"y_axis_grid_color.sys_updated_on": string
"y_axis_grid_color.sys_update_name": string
"y_axis_label_color.color": string
"y_axis_label_color.display": string
"y_axis_label_color.name": string
"y_axis_label_color.sys_id": string
"y_axis_label_color.sys_class_name": string
"y_axis_label_color.sys_created_by": string
"y_axis_label_color.sys_created_on": string
"y_axis_label_color.sys_mod_count": string
"y_axis_label_color.sys_name": string
"y_axis_label_color.sys_package": string
"y_axis_label_color.sys_policy": string
"y_axis_label_color.sys_scope": string
"y_axis_label_color.sys_updated_by": string
"y_axis_label_color.sys_updated_on": string
"y_axis_label_color.sys_update_name": string
"y_axis_title_color.color": string
"y_axis_title_color.display": string
"y_axis_title_color.name": string
"y_axis_title_color.sys_id": string
"y_axis_title_color.sys_class_name": string
"y_axis_title_color.sys_created_by": string
"y_axis_title_color.sys_created_on": string
"y_axis_title_color.sys_mod_count": string
"y_axis_title_color.sys_name": string
"y_axis_title_color.sys_package": string
"y_axis_title_color.sys_policy": string
"y_axis_title_color.sys_scope": string
"y_axis_title_color.sys_updated_by": string
"y_axis_title_color.sys_updated_on": string
"y_axis_title_color.sys_update_name": string
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
   