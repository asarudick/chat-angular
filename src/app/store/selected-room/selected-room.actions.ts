import { createAction, props } from '@ngrx/store';
import { Room } from 'src/app/types/Room';

export const selectRoom = createAction(
  '[Rooms] Select Room',
  props<{ room: Room }>()
);
