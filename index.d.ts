import React from 'react'
import * as FirestoreTypes from '@firebase/firestore-types'
import * as DatabaseTypes from '@firebase/database-types'
import * as StorageTypes from '@firebase/storage-types'
import * as AuthTypes from '@firebase/auth-types'
import { Dispatch } from 'redux'
//* * Declaration file generated by dts-gen */

export const actionTypes: {
  START: string
  SET: string
  REMOVE: string
  MERGE: string
  SET_PROFILE: string
  LOGIN: string
  LOGOUT: string
  LOGIN_ERROR: string
  NO_VALUE: string
  UNAUTHORIZED_ERROR: string
  ERROR: string
  CLEAR_ERRORS: string
  SET_LISTENER: string
  UNSET_LISTENER: string
  AUTHENTICATION_INIT_FINISHED: string
  AUTHENTICATION_INIT_STARTED: string
  SESSION_START: string
  SESSION_END: string
  FILE_UPLOAD_START: string
  FILE_UPLOAD_ERROR: string
  FILE_UPLOAD_PROGRESS: string
  FILE_UPLOAD_COMPLETE: string
  FILE_DELETE_START: string
  FILE_DELETE_ERROR: string
  FILE_DELETE_COMPLETE: string
  AUTH_UPDATE_START: string
  AUTH_UPDATE_ERROR: string
  AUTH_UPDATE_SUCCESS: string
  AUTH_EMPTY_CHANGE: string
  AUTH_LINK_ERROR: string
  AUTH_LINK_START: string
  AUTH_LINK_SUCCESS: string
  AUTH_RELOAD_ERROR: string
  AUTH_RELOAD_START: string
  AUTH_RELOAD_SUCCESS: string
  EMAIL_UPDATE_ERROR: string
  EMAIL_UPDATE_START: string
  EMAIL_UPDATE_SUCCESS: string
  PROFILE_UPDATE_START: string
  PROFILE_UPDATE_ERROR: string
  PROFILE_UPDATE_SUCCESS: string
}

export const constants: {
  actionTypes: {
    AUTHENTICATION_INIT_FINISHED: string
    AUTHENTICATION_INIT_STARTED: string
    AUTH_EMPTY_CHANGE: string
    AUTH_LINK_ERROR: string
    AUTH_LINK_START: string
    AUTH_LINK_SUCCESS: string
    AUTH_RELOAD_ERROR: string
    AUTH_RELOAD_START: string
    AUTH_RELOAD_SUCCESS: string
    AUTH_UPDATE_ERROR: string
    AUTH_UPDATE_START: string
    AUTH_UPDATE_SUCCESS: string
    CLEAR_ERRORS: string
    EMAIL_UPDATE_ERROR: string
    EMAIL_UPDATE_START: string
    EMAIL_UPDATE_SUCCESS: string
    ERROR: string
    FILE_DELETE_COMPLETE: string
    FILE_DELETE_ERROR: string
    FILE_DELETE_START: string
    FILE_UPLOAD_COMPLETE: string
    FILE_UPLOAD_ERROR: string
    FILE_UPLOAD_PROGRESS: string
    FILE_UPLOAD_START: string
    LOGIN: string
    LOGIN_ERROR: string
    LOGOUT: string
    MERGE: string
    NO_VALUE: string
    PROFILE_UPDATE_ERROR: string
    PROFILE_UPDATE_START: string
    PROFILE_UPDATE_SUCCESS: string
    REMOVE: string
    SESSION_END: string
    SESSION_START: string
    SET: string
    SET_LISTENER: string
    SET_PROFILE: string
    START: string
    UNAUTHORIZED_ERROR: string
    UNSET_LISTENER: string
  }
  defaultConfig: {
    attachAuthIsReady: boolean
    autoPopulateProfile: boolean
    dispatchOnUnsetListener: boolean
    dispatchRemoveAction: boolean
    enableEmptyAuthChanges: boolean
    enableLogging: boolean
    enableRedirectHandling: boolean
    firebaseStateName: string
    presence: any
    preserveOnEmptyAuthChange: any
    preserveOnLogout: any
    resetBeforeLogin: boolean
    sessions: string
    setProfilePopulateResults: boolean
    updateProfileOnLogin: boolean
    userProfile: any
  }
}

/**
 * Promise which resolves when auth state has loaded.
 */
export function authIsReady(store: object, ...args: any[]): any

/**
 * Factory function for creating a firebaseConnect Higher Order Component
 */
export function createFirebaseConnect(...args: any[]): any

export function createFirebaseInstance(
  firebase: any,
  configs: any,
  dispatch: any,
  ...args: any[]
): any

export function createFirestoreConnect(...args: any[]): any

export function createWithFirebase(storeKey: any): any

export function createWithFirestore(storeKey: any): any

export function firebase(...args: any[]): any

export interface ReduxState<T> {
  auth: {
    apiKey: string
    appName: string
    authDomain: string
    createdAt: string
    displayName: string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    isEmpty: boolean
    isLoaded: boolean
    lastLoginAt: string
    phoneNumber: string | null
    photoURL: string
    providerData: {
      displayName: string
      email: string
      phoneNumber: null
      photoURL: string
      providerId: string
      uid: string
    }[]
    redirectEventId: null
    stsTokenManager: {
      accessToken: string
      apiKey: string
      expirationTime: number
      refreshToken: string
    }
    uid: string
  }
  authError: null
  data: {}
  errors: any[]
  isInitializing: boolean
  listeners: {
    allIds: string[]
    byId: {}
  }
  ordered: {}
  profile: T
  requested: {}
  requesting: {}
  timestamps: {}
}

// https://github.com/prescottprue/redux-firestore#query-options
type WhereOptions = [string, FirestoreTypes.WhereFilterOp, any]
export interface FirestoreQueryOptions {
  // https://github.com/prescottprue/redux-firestore#collection
  collection: string
  // https://github.com/prescottprue/redux-firestore#document
  doc?: string
  // https://github.com/prescottprue/redux-firestore#sub-collections
  subcollections?: FirestoreQueryOptions[]
  // https://github.com/prescottprue/redux-firestore#where
  where?: WhereOptions | WhereOptions[]
  // https://github.com/prescottprue/redux-firestore#orderby
  orderBy?: string[] | string[][]
  // https://github.com/prescottprue/redux-firestore#limit
  limit?: number
  // https://github.com/prescottprue/redux-firestore#startat
  startAt?: number
  // https://github.com/prescottprue/redux-firestore#startafter
  startAfter?: number
  // https://github.com/prescottprue/redux-firestore#endat
  endAt?: number
  // https://github.com/prescottprue/redux-firestore#endbefore
  endBefore?: number
  // https://github.com/prescottprue/redux-firestore#storeas
  storeAs?: string
}

// https://github.com/prescottprue/redux-firestore#api
interface ReduxFirestoreApi {
  // https://github.com/prescottprue/redux-firestore#get
  // https://github.com/prescottprue/redux-firestore#get-1
  get: (docPath: string | FirestoreQueryOptions) => void

  // https://github.com/prescottprue/redux-firestore#set
  set: (docPath: string | FirestoreQueryOptions, data: Object) => void

  // https://github.com/prescottprue/redux-firestore#add
  add: (
    collectionPath: string | FirestoreQueryOptions,
    data: Object
  ) => Promise<{ id: string }>

  // https://github.com/prescottprue/redux-firestore#update
  update: (
    docPath: string | FirestoreQueryOptions,
    data: Object
  ) => Promise<void>

  // https://github.com/prescottprue/redux-firestore#delete
  delete: (docPath: string | FirestoreQueryOptions) => void

  // https://github.com/prescottprue/redux-firestore#runtransaction
  runTransaction: (transaction: WithFirestoreProps['firestore']) => Promise<any>

  // https://github.com/prescottprue/redux-firestore#onsnapshotsetlistener
  onSnapshot: (options: FirestoreQueryOptions) => void

  //https://github.com/prescottprue/redux-firestore#setlisteners
  setListener: (options: FirestoreQueryOptions) => void

  // https://github.com/prescottprue/redux-firestore#unsetlistener--unsetlisteners
  unsetListener: (options: FirestoreQueryOptions) => void
  unsetListeners: (options: FirestoreQueryOptions[]) => void
}

// https://github.com/prescottprue/redux-firestore#other-firebase-statics
interface FirestoreStatics {
  FieldValue: FirestoreTypes.FieldValue
  FieldPath: FirestoreTypes.FieldPath
  setLogLevel: (logLevel: FirestoreTypes.LogLevel) => void
  Blob: FirestoreTypes.Blob
  CollectionReference: FirestoreTypes.CollectionReference
  DocumentReference: FirestoreTypes.DocumentReference
  DocumentSnapshot: FirestoreTypes.DocumentSnapshot
  GeoPoint: FirestoreTypes.GeoPoint
  Query: FirestoreTypes.Query
  QueryDocumentSnapshot: FirestoreTypes.QueryDocumentSnapshot
  QuerySnapshot: FirestoreTypes.QuerySnapshot
  Timestamp: FirestoreTypes.Timestamp
  Transaction: FirestoreTypes.Transaction
  WriteBatch: FirestoreTypes.WriteBatch
}

export interface WithFirestoreProps {
  firestore: FirestoreTypes.FirebaseFirestore &
    ReduxFirestoreApi &
    FirestoreStatics
}

type Credentials =
  | {
      email: string
      password: string
    }
  | {
      provider: 'facebook' | 'google' | 'twitter'
      type: 'popup' | 'redirect'
      scopes: string[]
    }
  | AuthTypes.AuthCredential
  | {
      token: string
      profile: Object
    }
  | {
      phoneNumber: string
      applicationVerifier: AuthTypes.ApplicationVerifier
    }

interface CreateUserCredentials {
  email: string
  password: string
  signIn?: boolean // default true
}

interface UserProfile {
  email: string
  username: string
}

// http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html
interface Auth {
  auth: () => AuthTypes.FirebaseAuth

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html#logincredentials
  login: (credentials: Credentials) => Promise<AuthTypes.UserCredential>

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html#createusercredentials-profile
  createUser: (
    credentials: CreateUserCredentials,
    profile: UserProfile
  ) => Promise<AuthTypes.UserInfo>

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html#logout
  logout: VoidFunction

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html#resetpasswordcredentials
  resetPassword: (
    credentials: AuthTypes.UserCredential,
    profile: UserProfile
  ) => Promise<any>

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html#confirmpasswordresetcode-newpassword
  confirmPasswordReset: AuthTypes.FirebaseAuth['confirmPasswordReset']

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html#verifypasswordresetcodecode
  verifyPasswordResetCode: AuthTypes.FirebaseAuth['verifyPasswordResetCode']

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/auth.html#signinwithphonenumbercode
  signInWithPhoneNumber: AuthTypes.FirebaseAuth['signInWithPhoneNumber']

  updateEmail: (newEmail: string, updateInProfile: boolean) => Promise<void>
  reloadAuth: () => Promise<void>
  linkWithCredential: (
    credential: AuthTypes.AuthCredential
  ) => Promise<AuthTypes.User>

  updateAuth: (
    authUpdate: {
      displayName: string | null
      photoURL: string | null
    },
    updateInProfile: boolean
  ) => Promise<void>
}

//http://docs.react-redux-firebase.com/history/v3.0.0/docs/recipes/profile.html
interface Profile<T> {
  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/recipes/profile.html#update-profile
  updateProfile: (profile: Partial<T>, options: Object) => void
}

//http://docs.react-redux-firebase.com/history/v3.0.0/docs/storage.html
interface Storage {
  storage: () => StorageTypes.FirebaseStorage

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/storage.html#deletefile
  deleteFile: (
    path: string,
    dbPath?: string
  ) => Promise<{ path: string; dbPath: string }>

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/storage.html#uploadfile
  uploadFile: (
    path: string,
    files: File,
    dbPath?: string,
    options?: Object
  ) => Promise<StorageTypes.UploadTaskSnapshot>

  // http://docs.react-redux-firebase.com/history/v3.0.0/docs/storage.html#uploadfiles
  uploadFiles: (
    path: string,
    files: File[],
    dbPath?: string,
    options?: Object
  ) => Promise<{ uploadTaskSnapshot: StorageTypes.UploadTaskSnapshot }[]>
}

export interface WithFirebaseProps<ProfileType> {
  firebase: Auth &
    Profile<ProfileType> &
    Storage & {
      /**
       * initializeApp: ƒ initializeApp(options, rawConfig)
       * initializeAuth: ƒ ()
       */

      ref: (path: string | DatabaseTypes.Reference) => DatabaseTypes.Reference

      firestore: DatabaseTypes.FirebaseDatabase

      promiseEvents: (
        watchArray: (string | object)[],
        options: object
      ) => Promise<any>

      dispatch: Dispatch

      // http://docs.react-redux-firebase.com/history/v3.0.0/docs/api/props-firebase.html#set
      set: (
        path: string,
        value: object | string | boolean | number,
        onComplete?: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      setWithMeta: (
        path: string,
        value: object | string | boolean | number,
        onComplete: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      // http://docs.react-redux-firebase.com/history/v3.0.0/docs/api/props-firebase.html#push
      push: (
        path: string,
        value: object | string | boolean | number,
        onComplete?: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      pushWithMeta: (
        path: string,
        value: object | string | boolean | number,
        onComplete: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      // http://docs.react-redux-firebase.com/history/v3.0.0/docs/api/props-firebase.html#update
      update: (
        path: string,
        value: object | string | boolean | number,
        onComplete?: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      updateWithMeta: (
        path: string,
        value: object | string | boolean | number,
        onComplete: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      // http://docs.react-redux-firebase.com/history/v3.0.0/docs/api/props-firebase.html#remove
      remove: (
        path: string,
        value: object | string | boolean | number,
        onComplete?: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      // http://docs.react-redux-firebase.com/history/v3.0.0/docs/api/props-firebase.html#uniqueset
      uniqueSet: (
        path: string,
        value: object | string | boolean | number,
        onComplete?: Function
      ) => Promise<DatabaseTypes.DataSnapshot>

      // http://docs.react-redux-firebase.com/history/v3.0.0/docs/api/props-firebase.html#watchevent
      watchEvent: (
        type: string,
        path: string,
        storeAs: string,
        options?: object
      ) => Promise<any>

      // http://docs.react-redux-firebase.com/history/v3.0.0/docs/api/props-firebase.html#unwatchevent
      unWatchEvent: (
        type: string,
        path: string,
        queryId: string,
        options?: string
      ) => Promise<any>
    }
}

/**
 * React HOC that attaches/detaches Firebase Real Time Database listeners on mount/unmount
 */
export function firebaseConnect(...args: any[]): any

/**
 * Reducer for Firebase state
 */
export function firebaseReducer(...args: any[]): any

/**
 * Reducer for Firebase state
 */
export function firebaseStateReducer(...args: any[]): any

/**
 * React HOC that attaches/detaches Cloud Firestore listeners on mount/unmount
 */
export function firestoreConnect(...args: any[]): any

/**
 * Reducer for Firestore state
 */
export function firestoreReducer(...args: any[]): any

export function fixPath(path: string): string

/**
 * Get Firebase instance
 */
export function getFirebase(): any

export function getVal(firebase: object, path: string, notSetValue?: any): any

export function isEmpty(...args: any[]): boolean

export function isLoaded(...args: any[]): boolean

export function populate(
  state: object,
  path: string,
  populates: any,
  notSetValue?: any
): any

/**
 * React Context provider for Firebase instance (with methods wrapped in dispatch). Needed to use HOCs
 * like firebaseConnect and withFirebase.
 */
export function ReactReduxFirebaseProvider<T>(
  props: ReactReduxFirebaseProviderProps<T>
): any

/**
 * Props passed to ReactReduFirebaseContext component
 */
export interface ReactReduxFirebaseProviderProps<T> {
  value?: T
  firebase: object
  config: object
  dispatch: (action: object) => void
  children?: React.ReactNode
  initalizeAuth?: boolean
  createFirestoreInstance?: (
    firebase: object,
    config: object,
    dispatch: (action: object) => void
  ) => object
}

/**
 * React Context for Firebase instance.
 */
export namespace ReduxFirestoreContext {
  const prototype: {}
}

/**
 * Props passed to ReactReduFirebaseContext component
 */
export interface ReduxFirestoreProviderProps {
  firebase: object
  config: object
  dispatch: (action: object) => void
  createFirestoreInstance: (
    firebase: object,
    config: object,
    dispatch: (action: object) => void
  ) => object
  children?: React.ReactNode
  initalizeAuth?: boolean
}

/**
 * React Context provider for Firestore instance (with methods wrapped in dispatch). Needed to use HOCs
 * like firestoreConnect and withFirestore.
 */
export function ReduxFirestoreProvider(props: ReduxFirestoreProviderProps): any

/**
 * React Higher Order Component that passes firebase as a prop (comes from context.store.firebase)
 */
export function withFirebase(...args: any[]): any
/**
 * React Higher Order Component that passes firestore as a prop (comes from context.store.firestore)
 */
export function withFirestore(...args: any[]): any

export namespace authIsReady {
  const prototype: {}
}

export namespace createFirebaseConnect {
  const prototype: {}
}

export namespace createFirebaseInstance {
  const prototype: {}
}

export namespace createFirestoreConnect {
  const prototype: {}
}

export namespace createWithFirebase {
  const prototype: {}
}

export namespace createWithFirestore {
  const prototype: {}
}

export namespace firebase {
  const prototype: {}
}

export namespace firebaseConnect {
  const prototype: {}
}

export namespace firebaseReducer {
  const prototype: {}
}

export namespace firebaseStateReducer {
  const prototype: {}
}

export namespace firestoreConnect {
  const prototype: {}
}

export namespace firestoreReducer {
  const prototype: {}
}

export namespace fixPath {
  const prototype: {}
}

export namespace getVal {
  const prototype: {}
}

export namespace helpers {
  function fixPath(path: any): any

  function getVal(firebase: any, path: any, notSetValue?: any): any

  function isEmpty(...args: any[]): any

  function isLoaded(...args: any[]): any

  function populate(
    state: any,
    path: any,
    populates: any,
    notSetValue?: any
  ): any

  namespace fixPath {
    const prototype: {}
  }

  namespace getVal {
    const prototype: {}
  }

  namespace isEmpty {
    const prototype: {}
  }

  namespace isLoaded {
    const prototype: {}
  }

  namespace populate {
    const prototype: {}
  }
}

export namespace isEmpty {
  const prototype: {}
}

export namespace isLoaded {
  const prototype: {}
}

export namespace populate {
  const prototype: {}
}

export namespace reactReduxFirebase {
  const prototype: {}
}

export namespace reduxFirebase {
  const prototype: {}
}

export namespace reduxReactFirebase {
  const prototype: {}
}

export namespace withFirebase {
  const prototype: {}
}

export namespace withFirestore {
  const prototype: {}
}
