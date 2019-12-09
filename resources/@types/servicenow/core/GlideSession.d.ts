declare namespace internal {
    /**
     * The GlideSession API allows you to find information about the current session.
     */
    interface GlideSession {
        /**
         * Clears a session client value previously set with putClientData().

            This method is used in a client script to clear data values that were set by a server script using the putClientData() method.
         * @param parameter 
         */
        clearClientData(parameter: string): void

        /**
         * Sets a session client value that can be retrieved with getClientData(). This method is used in a server side script that runs when a form is created.
         * @param paramName 
         * @param paramValue 
         */
        putClientData(paramName: string, paramValue: string): void

        /**
         * Returns a session client value previously set with putClientData().

This method is used in a client script to retrieve data values that were set by a server script that used the putClientData() method.
         * @param parameter 
         */
        getClientData(parameter: string): Packages.java.lang.String

        /**
         * Gets the session's language code.
         */
        getLanguage(): Packages.java.lang.String

        /**
         * Gets a list of roles for the current user.
        * The list of roles does not reflect any changes made during the current user session. To get the updated list of roles, the user must log out and log back in.
         */
        getRoles(): Packages.java.lang.String

        /**
         * @example
         * US/Pacific
         */
        getTimeZoneName(): Packages.java.lang.String

        /**
         * Determines if the current session is interactive.
         * An interactive session is one that involves an end-user interacting with a user interface that then retrieves information from a server. An example of this type of session is when a user logs in using the log-in screen or uses a form to query a data store. A non-interactive session is one that only involves programmatic interaction with a server such as a SOAP request to retrieve data.
         */
        isInteractive(): boolean

        isLoggedIn(): boolean

        getClientIP(): Packages.java.lang.String

    }
}
