import { Action, createReducer, on } from '@ngrx/store';
import { Room } from 'src/app/types/Room';
import * as SelectedRoomActions from './selected-room.actions';

export const featureKey = 'selectedRoom';

export const initialState: Room = null;

// HACK: AOT compile requires an 'export function', hence the curious split
// below. This was found by disabling Ivy, FYI.
//
// See: https://stackoverflow.com/questions/56993101/error-building-angularngrx-8-for-production-when-using-createreducer-function
const selectedRoomReducer = createReducer(
  initialState,

  on(SelectedRoomActions.selectRoom, (state, action) => {
    // Guard against redundancy.
    if (state === action.room) return state;

    state = action.room;
    return state;
  })
);

// ATTN: Read HACK above before refactoring.
export function reducer(state: Room | undefined, action: Action) {
  return selectedRoomReducer(state, action);
}
