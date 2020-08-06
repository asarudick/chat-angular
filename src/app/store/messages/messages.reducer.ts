import { Action, createReducer, on } from '@ngrx/store';
import { Message } from 'src/app/types/Message';
import { RequestState } from 'src/app/types/RequestState';
import * as MessagesActions from './messages.actions';

export const featureKey = 'messages';

export const initialState: RequestState<Message[]> = {
  pending: false,
  error: null,
  result: null
};

export const messagesReducer = createReducer(
  initialState,

  on(MessagesActions.loadMessages, state => {
    state = { ...state, pending: true };
    return state;
  }),
  on(MessagesActions.loadMessagesSuccess, (state, action) => {
    state = { pending: false, error: null, result: action.data || null };
    return state;
  }),
  on(MessagesActions.loadMessagesFailure, (state, action) => {
    // TODO: Pipe in the http error.
    state = { ...state, pending: false, error: 'Something went wrong.'};
    return state;
  }),
  on(MessagesActions.setReaction, (state, action) => {
    return state;
  })
);

export function reducer(state: RequestState<Message[]> | undefined, action: Action) {
  return messagesReducer(state, action)
}
