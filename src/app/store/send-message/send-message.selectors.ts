import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from 'src/app/types/RequestState';
import * as fromSendMessage from './send-message.reducer';

export const selectSendMessageState = createFeatureSelector<RequestState<void>>(
  fromSendMessage.featureKey
);

export const getSendMessageResult = createSelector(selectSendMessageState, (result: RequestState<void>) => result);
