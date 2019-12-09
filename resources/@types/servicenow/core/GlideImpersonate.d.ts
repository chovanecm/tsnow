/**
 * he global GlideImpersonate API enables administrators to pose as another authenticated user for testing purposes.
* Use the GlideImpersonate API when you need to act as another user so to test functionality within your application. When impersonating another user, the administrator has access to exactly what the impersonated user would have access to in the system, including the same menus and modules.
- Note: The system records anything the administrator does while impersonating another user as having been done by that user.
 */
declare class GlideImpersonate {
    /**
     * Verifies whether the specified user can perform debugging on scripts.
     * In order for a user to be able to debug scripts, they must be on a developer instance. Debugging is not allowed on production instances.
     * @param userSysId - sys_Id of the user to verify for debugging capability.
     * NOTE: The documented behvaiour expects sys_id. However, it seems to accept user name as well.
     */
    canDebug(userSysId: string): boolean

    /**
     * Verifies whether the current user can impersonate the specified user.
    * If the current user is not assigned the admin role, the user to impersonate is inactive, or there are other issues with impersonating the specified user, the method returns "false" and the user cannot be impersonated.
     * @param userSysId sys_Id of the user to impersonate
     */
    canImpersonate(userSysId: string): boolean

    /**
     * Sets the user ID for the current administrator to the passed-in user ID, enabling the administrator to act as that user.
     * When impersonating another user, the administrator has access to exactly what the impersonated user would have access to in the system, including the same menus and modules. Only use this method when testing functionality in an application. Ensure that once you are finished impersonating a user that you call the method again with the administrator sys_Id to stop the impersonation.
     * @param userSysId - sys_id of the user to impersonate. NOTE: Works with user name as well (undocumented)
     * @returns sys_id of the user that was logged in prior to the impersonation request
     */
    impersonate(userSysId: string): string

    /**
     * Determines whether the current user is impersonating another user.
     */
    isImpersonating(): boolean
}