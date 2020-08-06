import { Action, createReducer, on } from '@ngrx/store';
import { RequestState } from 'src/app/types/RequestState';
import * as SendMessageActions from './send-message.actions';

export const featureKey = 'sendMessage';

export const initialState: RequestState<void> = {
  pending: false,
  error: null,
  result: null
};

// HACK: AOT compile requires an 'export function', hence the curious split
// below. This was found by disabling Ivy, FYI.
//
// See: https://stackoverflow.com/questions/56993101/error-building-angularngrx-8-for-production-when-using-createreducer-function

const sendMessageReducer = createReducer(
  initialState,

  on(SendMessageActions.sendMessage, state => {
    state = { ...state, pending: true };
    return state;
  }),
  on(SendMessageActions.sendMessageSuccess, (state, action) => {
    state = { pending: false, error: null, result: action.data };
    return state;
  }),
  on(SendMessageActions.sendMessageFailure, (state, action) => {
    // TODO: Pipe in the http error.
    state = { ...state, pending: false, error: 'Something went wrong.'};
    return state;
  }),
);

// ATTN: Read HACK above before refactoring.
export function reducer(state: RequestState<void> | undefined, action: Action) {
  return sendMessageReducer(state, action);
}
