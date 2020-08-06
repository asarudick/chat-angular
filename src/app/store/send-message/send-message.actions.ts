import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/types/User';
import { Room } from 'src/app/types/Room';

export const sendMessage = createAction(
  '[SendMessage] Send Message',
  props<{ user: User, room: Room, message: string }>()
);

export const sendMessageSuccess = createAction(
  '[SendMessage] Send Message Success',
  props<{ data: any, room: Room }>()
);

export const sendMessageFailure = createAction(
  '[SendMessage] Send Message Failure',
  props<{ error: any }>()
);
