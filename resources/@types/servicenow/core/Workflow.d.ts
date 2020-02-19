/**
* Workflow scripts provide an interface with the workflow engine.
* Use these methods to manipulate workflows.
*/
declare class Workflow {
    /* TODO 
    getVersion
    getVersionFromName
    */

    constructor();
    /**
     * Sends the specified event (message) into the workflow context to pass along to the executing activities.
Typical use of this method is to enable activities that wait for some action to occur before proceeding. For additional information on using broadcastEvent, refer to Workflow event-specific functions.
For a list of the available OOB events, refer to [Workflow events in the base system]{@link https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/workflow-administration/reference/r_WorkflowEventsInTheBaseSystem.html?_ga=2.71665363.1546660236.1582031553-759934647.1580471925}.
     * @param contextId The context ID.
     * @param eventName The name of the event.
     * @example
    //where current is a task record with a workflow context
      var wf = new Workflow().getRunningFlows(current);
      while(wf.next()) {     
          new Workflow().broadcastEvent(wf.sys_id, 'resume');
      }
     */
    broadcastEvent(contextId: string, eventName: string): void;

    /**
     * Cancels all running workflows on this record by broadcasting the cancel event to activities in all running workflows on this record.
     * @param record GlideRecord on any table. All workflows running on this record will be cancelled.
     */
    cancel(record: GlideRecord): void;

    /**
     * Cancels this running context by broadcasting a cancel event to activities in this workflow context.
     * @param context GlideRecord of the running context to cancel.
     * @example
      // If a workflow has started for this item, cancel it, where current is a task record with a workflow context
      if ((current.stage == 'Request Cancelled') && current.context 
          && !current.context.nil()) {
      var w = new Workflow();
      var gr = new GlideRecord('wf_context');
      
      if (gr.get(current.context)) 
          w.cancelContext(gr);
      }
     */
    cancelContext(context: GlideRecord): void;

    /**
     * Deletes all the workflows on the record.
     * @param current GlideRecord for which the caller wants to delete all workflows. This can be any record on any table.
     */
    deleteWorkflow(current: GlideRecord): void;

    /**
     * Fires the named event on the input record.
        Used in Activities Approval Coordinator, Timer, Lock, and some others.
     * @param eventRecord The event record.
     * @param eventName The name of the event to send to the executing workflow.
     @example
     //where current is a task record with a workflow context
      var w = new Workflow(); 
      w.fireEvent(current, 'execute');
     */
    fireEvent(eventRecord: GlideRecord, eventName: string): void;

    /**
     * Fires the named event on the record specified by record ID.
Used in Activities Approval Coordinator, Timer, Lock, and some others.
     * @param eventRecordId The sys_id of the glide record.
     * @param eventName The name of the event to send to the executing workflow.
     @example
     var wkfw = new Workflow();
      wkfw.fireEventById('f2400ec10b0a3c1c00ca5bb5c6fae427','Timer');
     */
    fireEventById(eventRecordId: string, eventName: string): void;

    /**
     * Gets all workflow contexts for the input record.
        The input record is any record on any table for which the caller wants the running workflow contexts.
     * @param record GlideRecord for which the caller wants a list of all workflow contexts .
      @returns GlideRecord on table wf_context filtered for all workflow contexts for the input record (in any state, e.g. running, cancelled, finished).

      @example
      //where current is a task record with a workflow context
      var wkfw = new Workflow();
      gs.print(wkfw.getContexts(current).started);
     */
    getContexts(record: GlideRecord): GlideRecord<wf_context>;

    /**
     * NOTE: This is a poorly documented method in the ServiceNow documentation!
     * 
     * Gets the appropriate workflow return value for the input workflow ID. This is either the workflow checked out by the current user or the published workflow with the most recent date.
    *  This is either the workflow checked out by the current user or the published workflow with the most recent date. This method is available starting with the Fuji release.
     * @param workflowId The sys_id of the workflow (table wf_workflow)
     * @returns The return value of the workflow as specified by the Return Value activity. Workflows without a Return Value activity return a null value.
     */
    getReturnValue(workflowId: string): any;

    /**
     * Gets all the currently running workflow contexts for the input record.
     * The input record is any record on any table for which the caller wants the running workflow contexts.
     * @param record GlideRecord of the record for which the caller wants a list of all running workflows.
      * @returns GlideRecord on table wf_context and filtered for all executing workflow contexts.
     */
    getRunningFlows(record: GlideRecord): GlideRecord<wf_context>;

    /**
     * Returns the sys_id of the workflow associated with the specified workflow name.
     * @param workflowName Name of the workflow.
      @return The sys_id of the workflow associated with the passed in name.
      @example
      var wflw = new Workflow();
      gs.print(wflw.getWorkflowFromName('Emergency Change'));
     */
    getWorkflowFromName(workflowName: string): string;

    /**
     * Determines if a specified record has any workflow contexts associated to it.
    This includes running and completed workflow contexts.
     * @param record GlideRecord under scrutiny. This GlideRecord can be from any table.

     @returns True, if record has associated workflow; otherwise, returns False.

     */
    hasWorkflow(record: GlideRecord): boolean;

    /**
     * Recalculates the approvals and tasks for a workflow by adding new approvals and tasks while not resetting current approvals and tasks.
Use this script to add an additional company to a change request, without resetting current approvals for companies already in the workflow.
     * @param current GlideRecord of the record this workflow is executing. This can by any record on any table.
     * @param maintainStateFlag If True, maintains all approvals and tasks in their current state.
     */
    restartWorkflow(current: GlideRecord, maintainStateFlag: boolean): void;

    /**
    * Test to see if a workflow is complete (finished, cancelled, or any of the other finished states). 
    * @param grContext
    *            GlideRecord from table wf_context of the workflow to test
    * @returns true if the workflow is in any of the completed states
     */
    isComplete(grContext: GlideRecord): boolean;
}