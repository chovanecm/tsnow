declare class WorkflowApprovalUtils {
    constructor();
    /**
 	* Cancel all approvals for a task
 	 @param task 
     @param comment 
    */
    cancelAll(task: GlideRecord, comment?: string): void;
}