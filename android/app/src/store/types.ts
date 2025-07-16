export interface User {
  id: number;
  name: string;
}

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

export interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: User;
}

export interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  error: string;
}

export type UserActionTypes = // discriminated union switch
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction;
