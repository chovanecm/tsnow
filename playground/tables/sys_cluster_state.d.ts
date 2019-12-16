declare interface sys_cluster_state {
      allow_inbound: GlideElement<sys_cluster_state, glideElementType.g_boolean>;
iostats: GlideElement<sys_cluster_state, glideElementType.defaultType>;
most_recent_keys: GlideElement<sys_cluster_state, glideElementType.defaultType>;
most_recent_message: GlideElement<sys_cluster_state, glideElementType.g_glide_date_time>;
node_id: GlideElement<sys_cluster_state, glideElementType.defaultType>;
pause_count: GlideElement<sys_cluster_state, glideElementType.defaultType>;
ready_to_failover: GlideElement<sys_cluster_state, glideElementType.g_boolean>;
schedulers: GlideElement<sys_cluster_state, glideElementType.defaultType>;
stats: GlideElement<sys_cluster_state, glideElementType.defaultType>;
status: GlideElement<sys_cluster_state, glideElementType.defaultType>;
system_id: GlideElement<sys_cluster_state, glideElementType.defaultType>;
sys_created_by: GlideElement<sys_cluster_state, glideElementType.defaultType>;
sys_created_on: GlideElement<sys_cluster_state, glideElementType.g_glide_date_time>;
sys_id: GlideElement<sys_cluster_state, glideElementType.defaultType>;
sys_mod_count: GlideElement<sys_cluster_state, glideElementType.defaultType>;
sys_updated_by: GlideElement<sys_cluster_state, glideElementType.defaultType>;
sys_updated_on: GlideElement<sys_cluster_state, glideElementType.g_glide_date_time>;
      _referenceKeys: never | {
        ;
      }
    }
   