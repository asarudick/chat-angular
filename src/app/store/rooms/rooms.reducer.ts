import { Action, createReducer, on } from '@ngrx/store';
import { RequestState } from 'src/app/types/RequestState';
import { Room } from 'src/app/types/Room';
import * as RoomsActions from './rooms.actions';

export const featureKey = 'rooms';


export const initialState: RequestState<Room[]> = {
  pending: false,
  result: null,
  error: null
};

// HACK: AOT compile requires an 'export function', hence the curious split
// below. This was found by disabling Ivy, FYI.
//
// See: https://stackoverflow.com/questions/56993101/error-building-angularngrx-8-for-production-when-using-createreducer-function

const roomsReducer = createReducer(
  initialState,

  on(RoomsActions.loadRooms, state => {
    state = { ...state, pending: true };
    return state;
  }),
  on(RoomsActions.loadRoomsSuccess, (state, action) => {
    state = { pending: false, error: null, result: action.data && [...action.data] || null };
    return state;
  }),
  on(RoomsActions.loadRoomsFailure, (state, action) => {
    // TODO: Pipe in the http error.
    state = { ...state, pending: false, error: 'Something went wrong.'};
    return state;
  }),
);

// ATTN: Read HACK above before refactoring.
export function reducer(state: RequestState<Room[]> | undefined, action: Action) {
  return roomsReducer(state, action);
}
