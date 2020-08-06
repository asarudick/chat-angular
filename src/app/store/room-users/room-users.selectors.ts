import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from 'src/app/types/RequestState';
import { featureKey } from './room-users.reducer';
import { RoomUsers } from 'src/app/types/RoomUsers';

export const selectRoomUsersState = createFeatureSelector<RequestState<RoomUsers>>(
  featureKey
);

export const getRoomUsers = createSelector(selectRoomUsersState, (request: RequestState<RoomUsers>) => request && request.result);
