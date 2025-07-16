import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UserActionTypes,
  User,
} from '../types';

interface UserState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };   // rest parameter spread operator
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
