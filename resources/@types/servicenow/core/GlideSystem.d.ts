declare namespace internal {
    /**
     * The GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the current logged in user, etc.
     * Many of the GlideSystem methods facilitate the easy inclusion of dates in query ranges, and are most often used in filters and reporting.
     * @todo Review & finish declaration
     */
    interface GlideSystem {
        addErrorMessage(message: string): void;

        addInfoMessage(message: string): void;

        base64Decode(source: string): string;

        base64Encode(source: string): string;

        beginningOfLastMonth(): string;

        beginningOfLastWeek(): string;

        beginningOfNextWeek(): string;

        beginningOfNextMonth(): string;

        beginningOfNextYear(): string;

        beginningOfThisMonth(): string;

        beginningOfThisQuarter(): string;

        beginningOfThisWeek(): string;

        beginningOfThisYear(): string;

        dateGenerate(date: string): string;

        daysAgo(days: number): string;

        daysAgoEnd(days: number): string;

        daysAgoStart(days: number): string;

        debug(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

        endOfLastMonth(): string;

        endOfLastWeek(): string;

        endOfLastYear(): string;

        endOfNextMonth(): string;

        endOfNextWeek(): string;

        endOfNextYear(): string;

        endOfThisMonth(): string;

        endOfThisQuarter(): string;

        endOfThisWeek(): string;

        endOfThisYear(): string;

        error(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

        eventQueue(eventName: string, gr: GlideRecord, optionalParam1: string, optionalParam2: string, eventQueue?: string): void;

        eventQueueScheduled(name: string, instance: GlideRecord, parm1: string, parm2: string, expiration: object): void;

        executeNow(job: GlideRecord): string;

        generateGUID(): string;

        getCallerScopeName(): string;

        getCssCacheVersionString(): string;

        getCurrentApplicationId(): string;

        getCurrentScopeName(): string;

        getErrorMessages(id: string, args?: string[]): string;

        getMessage(id: string, object?: any): string;

        getProperty(key: string, altobject?: {}): {};

        getSession(): GlideSession;

        getSessionID(): string;

        getSessionToken(): string;

        getTimeZoneName(): string;

        getUrlOnStack(): string;

        getUser(): GlideUser;

        getUserDisplayName(): string;

        getUserID(): string;

        getUserName(): string;

        getUserNameByUserID(id: string): string;

        hasRole(roleName: string): boolean;

        include(include: string): void;

        info(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

        isDebugging(): boolean;

        isInteractive(): boolean;

        isLoggedIn(): boolean;

        isMobile(): boolean;

        log(message: primitive, source?: string): void;

        minutesAgoEnd(num: number): string;

        minutesAgoStart(num: number): string;

        monthsAgo(num: number): string;

        monthsAgoEnd(num: number): string;

        monthsAgoStart(num: number): string;

        nil(object: any): boolean;

        print(message: primitive): void;

        quartersAgoEnd(num: number): string;

        quartersAgoStart(num: number): string;

        setRedirect(uri: string): void;

        tableExists(table: string): boolean;

        warn(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

        xmlToJSON(xml: string): any;

        yearsAgo(years: number): string;

        yesterday(): string;

        /** Only available in some contexts */
        action: undefined | {
            /**
             * Get the current URI.
             * Can be converted to string using String(uri)
             */
            getGlideURI(): {
                getMap(): {
                    get(urlAttribute: string): Packages.java.lang.String | null
                }
            }
        }
    }
}

declare const gs: internal.GlideSystem