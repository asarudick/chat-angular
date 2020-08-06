import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../types/User';
import * as UserActions from './user.actions';

export const featureKey = 'user';

export const initialState: User = {
  name: null,
  lastLoginAt: null
};

// HACK: AOT compile requires an 'export function', hence the curious split
// below. This was found by disabling Ivy, FYI.
//
// See: https://stackoverflow.com/questions/56993101/error-building-angularngrx-8-for-production-when-using-createreducer-function

const userReducer = createReducer(
  initialState,
  on(UserActions.loginSuccess, (state, action) => {
    // Update user name and login time.
    state = { ...state, name: action.data.name, lastLoginAt: Date.now()}
    return state;
  }),
  on(UserActions.loginFailure, (state, action) => state),
);

// ATTN: Read HACK above before refactoring.
export function reducer(state: User | undefined, action: Action) {
  return userReducer(state, action);
}
