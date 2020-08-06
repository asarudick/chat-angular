import { createAction, props } from '@ngrx/store';
import { Message } from 'src/app/types/Message';
import { Reaction } from 'src/app/components/messages/messages.component';
import { Room } from 'src/app/types/Room';

export const loadMessages = createAction(
  '[Messages] Load Messages',
  props<{ id: number }>()
);

export const loadMessagesSuccess = createAction(
  '[Messages] Load Messages Success',
  props<{ data: any }>()
);

export const loadMessagesFailure = createAction(
  '[Messages] Load Messages Failure',
  props<{ error: any }>()
);

export const setReaction = createAction(
  '[Messages] Set Reaction',
  props<{ room: Room, message: Message, reaction: Reaction }>()
);
