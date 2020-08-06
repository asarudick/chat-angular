import { createAction, props } from '@ngrx/store';
import { Room } from 'src/app/types/Room';

// Room.
export const loadRooms = createAction(
  '[Rooms] Load Rooms'
);

export const loadRoomsSuccess = createAction(
  '[Rooms] Load Rooms Success',
  props<{ data: any }>()
);

export const loadRoomsFailure = createAction(
  '[Rooms] Load Rooms Failure',
  props<{ error: any }>()
);


// Room users.
export const loadRoomUsers = createAction(
  '[Rooms] Load Room Users',
  props<{ id: number }>()
);

export const loadRoomUsersSuccess = createAction(
  '[Rooms] Load Room Users Success',
  props<{ data: any }>()
);

export const loadRoomUsersFailure = createAction(
  '[Rooms] Load Room Users Failure',
  props<{ error: any }>()
);


// Room messages.
export const loadRoomMessages = createAction(
  '[Rooms] Load Room Messages',
  props<{ id: number }>()
);

export const loadRoomMessagesSuccess = createAction(
  '[Rooms] Load Room Messages Success',
  props<{ data: any }>()
);

export const loadRoomMessagesFailure = createAction(
  '[Rooms] Load Room Users Failure',
  props<{ error: any }>()
);
