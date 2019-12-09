declare namespace internal {
    interface GlideUser {
        getCompanyID(): Packages.java.lang.String;

        getDisplayName(): Packages.java.lang.String;

        /**
         * Returns the user's email address.
         */
        getEmail(): Packages.java.lang.String;

        getID(): Packages.java.lang.String;

        /**
         * Return the user object associated with the passed-in user ID (sys_id in sys_user) or user_name.
         @param id - Unique ID (sys_id) or user_name of the desired user record.
         @return {GlideUser} User object associated with the specified sys_id or user_name.
         */
        getUserByID(id: string): GlideUser;

        /**
         * Returns an iterator containing the sysds (list) of all groups to which the user belongs. Only active groups are returned.
         */
        getMyGroups(): Packages.java.util.List<Packages.java.lang.String>

         /**
         * Returns a list of role names that includes explicitly granted roles, inherited roles, and roles acquired by group membership.
         */
        getRoles(): Packages.java.util.List<Packages.java.lang.String>

        /**
         * Returns the list of roles explicitly granted to the user.
         */
        getUserRoles(): Packages.java.util.List<Packages.java.lang.String>
        /**
         * Returns the user object associated with the passed-in user ID (sys_id in sys_user) or user_name.
         * @param sysIdOrUserName 
         */
        getUserByID(sysIdOrUserName: string): GlideUser

        getName(): Packages.java.lang.String;

        getFirstName(): Packages.java.lang.String
        getLastName(): Packages.java.lang.String
        
        getPreference(name: string): Packages.java.lang.String;

        /**
         * Determines if the current user has the specified role.


         * @param role 
         */
        hasRole(role: string): boolean;

        /**
         * Determines if the current user is a member of the specified group.
         * @param group 
         */
        isMemberOf(group: string): boolean;

        savePreference(name: string, value: string): void;
    }
}