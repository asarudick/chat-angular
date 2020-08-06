import { Action, createReducer, on } from '@ngrx/store';
import { RequestState } from 'src/app/types/RequestState';
import { RoomUsers } from 'src/app/types/RoomUsers';
import * as RoomUsersActions from './room-users.actions';

export const featureKey = 'roomUsers';

export const initialState: RequestState<RoomUsers> = null;

export const roomUsersReducer = createReducer(
  initialState,

  on(RoomUsersActions.loadRoomUsers, state => {
    state = { ...state, pending: true };
    return state;
  }),
  on(RoomUsersActions.loadRoomUsersSuccess, (state, action) => {
    state = { pending: false, error: null, result: action.data || null };
    return state;
  }),
  on(RoomUsersActions.loadRoomUsersFailure, (state, action) => {
    // TODO: Pipe in the http error.
    state = { ...state, pending: false, error: 'Something went wrong.'};
    return state;
  }),
);

// ATTN: Read HACK above before refactoring.
export function reducer(state: RequestState<RoomUsers> | undefined, action: Action) {
  return roomUsersReducer(state, action);
}
