import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Message } from 'src/app/types/Message';
import { RequestState } from 'src/app/types/RequestState';
import * as fromMessages from './messages.reducer';

export const selectMessagesState = createFeatureSelector<RequestState<Message[]>>(
  fromMessages.featureKey
);

export const getMessages = createSelector(selectMessagesState, (request: RequestState<Message[]>) => request && request.result);
