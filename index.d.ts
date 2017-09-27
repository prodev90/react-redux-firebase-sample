/** Declaration file generated by dts-gen */

export const actionTypes: {
    AUTHENTICATION_INIT_FINISHED: string;
    AUTHENTICATION_INIT_STARTED: string;
    AUTH_UPDATE_ERROR: string;
    AUTH_UPDATE_START: string;
    AUTH_UPDATE_SUCCESS: string;
    EMAIL_UPDATE_ERROR: string;
    EMAIL_UPDATE_START: string;
    EMAIL_UPDATE_SUCCESS: string;
    ERROR: string;
    FILE_DELETE_COMPLETE: string;
    FILE_DELETE_ERROR: string;
    FILE_DELETE_START: string;
    FILE_UPLOAD_COMPLETE: string;
    FILE_UPLOAD_ERROR: string;
    FILE_UPLOAD_PROGRESS: string;
    FILE_UPLOAD_START: string;
    LOGIN: string;
    LOGIN_ERROR: string;
    LOGOUT: string;
    NO_VALUE: string;
    PROFILE_UPDATE_ERROR: string;
    PROFILE_UPDATE_START: string;
    PROFILE_UPDATE_SUCCESS: string;
    SET: string;
    SET_PROFILE: string;
    START: string;
    UNAUTHORIZED_ERROR: string;
    UNSET_LISTENER: string;
};

export const constants: {
    actionTypes: {
        AUTHENTICATION_INIT_FINISHED: string;
        AUTHENTICATION_INIT_STARTED: string;
        AUTH_UPDATE_ERROR: string;
        AUTH_UPDATE_START: string;
        AUTH_UPDATE_SUCCESS: string;
        EMAIL_UPDATE_ERROR: string;
        EMAIL_UPDATE_START: string;
        EMAIL_UPDATE_SUCCESS: string;
        ERROR: string;
        FILE_DELETE_COMPLETE: string;
        FILE_DELETE_ERROR: string;
        FILE_DELETE_START: string;
        FILE_UPLOAD_COMPLETE: string;
        FILE_UPLOAD_ERROR: string;
        FILE_UPLOAD_PROGRESS: string;
        FILE_UPLOAD_START: string;
        LOGIN: string;
        LOGIN_ERROR: string;
        LOGOUT: string;
        NO_VALUE: string;
        PROFILE_UPDATE_ERROR: string;
        PROFILE_UPDATE_START: string;
        PROFILE_UPDATE_SUCCESS: string;
        SET: string;
        SET_PROFILE: string;
        START: string;
        UNAUTHORIZED_ERROR: string;
        UNSET_LISTENER: string;
    };
    defaultConfig: {
        autoPopulateProfile: boolean;
        dispatchOnUnsetListener: boolean;
        enableEmptyAuthChanges: boolean;
        enableLogging: boolean;
        enableRedirectHandling: boolean;
        setProfilePopulateResults: boolean;
        updateProfileOnLogin: boolean;
        userProfile: any;
    };
};

/**
 * Object whose values correspond to different reducer functions.
 */
export interface ConfigObject {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  storageBucket: string
}

/**
 * Object whose values correspond to different reducer functions.
 */
export interface SettingsObject {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  storageBucket: string
}

export interface listenerConfigFunc {
  (): string[] | object[]
}

export function buildChildList(data: any, list: any, p: any): any;

export function firebase(...args: any[]): any;

export function firebaseConnect(...args: any[]): any;

export function firebaseStateReducer(...args: any[]): any;

export function fixPath(path: any): any;

export function getFirebase(): any;

export function isEmpty(data: any): any;

export function isLoaded(...args: any[]): any;

export function ordered(data: any, path: any, notSetValue: any): any;

export function populate(data: any, path: any, populates: any, notSetValue: any): any;

export function reactReduxFirebase(fbInstance: any, otherConfig: any, ...args: any[]): any;

export function reduxFirebase(fbInstance: any, otherConfig: any, ...args: any[]): any;

export function reduxReactFirebase(fbInstance: any, otherConfig: any, ...args: any[]): any;
export function orderedToJS(data: any, path: any, notSetValue?: any): any;

export function pathToJS(data: any, path: any, notSetValue?: any): any;

export function populatedDataToJS(data: any, path: any, populates: any, notSetValue?: any): any;

export function reactReduxFirebase(fbConfig: ConfigObject, otherConfig: any, ...args: any[]): any;

export function reduxFirebase(fbConfig: ConfigObject, otherConfig: any, ...args: any[]): any;

export function reduxReactFirebase(fbConfig: ConfigObject, otherConfig: any, ...args: any[]): any;
>>>>>>> master

export function toJS(data: any): any;

export namespace buildChildList {
    const prototype: {
    };

}

export namespace customToJS {
    const prototype: {
    };

}

export namespace dataToJS {
    const prototype: {
    };

}

export namespace firebase {
    const prototype: {
    };

}

export namespace firebaseConnect {
    const prototype: {
    };

}

export namespace firebaseStateReducer {
    const prototype: {
    };

}

export namespace fixPath {
    const prototype: {
    };

}

export namespace getFirebase {
    const prototype: {
    };

}

export namespace helpers {
    function buildChildList(data: any, list: any, p: any): any;

    function fixPath(path: any): any;

    function isEmpty(data: any): any;

    function isLoaded(...args: any[]): any;

    function ordered(data: any, path: any, notSetValue: any): any;

    function populate(data: any, path: any, populates: any, notSetValue: any): any;

    namespace buildChildList {
        const prototype: {
        };

    }

    namespace customToJS {
        const prototype: {
        };

    }

    namespace dataToJS {
        const prototype: {
        };

    }

    namespace fixPath {
        const prototype: {
        };

    }

    namespace isEmpty {
        const prototype: {
        };

    }

    namespace isLoaded {
        const prototype: {
        };

    }

    namespace orderedToJS {
        const prototype: {
        };

    }

    namespace pathToJS {
        const prototype: {
        };

    }

    namespace populatedDataToJS {
        const prototype: {
        };

    }

    namespace toJS {
        const prototype: {
        };

    }

}

export namespace isEmpty {
    const prototype: {
    };

}

export namespace isLoaded {
    const prototype: {
    };

}

export namespace orderedToJS {
    const prototype: {
    };

}

export namespace pathToJS {
    const prototype: {
    };

}

export namespace populatedDataToJS {
    const prototype: {
    };

}

export namespace reactReduxFirebase {
    const prototype: {
    };

}

export namespace reduxFirebase {
    const prototype: {
    };

}

export namespace reduxReactFirebase {
    const prototype: {
    };

}

export namespace toJS {
    const prototype: {
    };

}
