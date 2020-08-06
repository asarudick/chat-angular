import { createAction, props } from '@ngrx/store';

export const loadRoomUsers = createAction(
  '[RoomUsers] Load Room Users',
  props<{ id: number }>()
);

export const loadRoomUsersSuccess = createAction(
  '[RoomUsers] Load Room Users Success',
  props<{ data: any }>()
);

export const loadRoomUsersFailure = createAction(
  '[RoomUsers] Load Room Users Failure',
  props<{ error: any }>()
);
