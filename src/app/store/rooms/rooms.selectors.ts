import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from 'src/app/types/RequestState';
import { Room } from 'src/app/types/Room';
import * as fromRooms from './rooms.reducer';

export const selectRoomsState = createFeatureSelector<RequestState<Room[]>>(
  fromRooms.featureKey
);

export const getRooms = createSelector(selectRoomsState, (request: RequestState<Room[]>) => request?.result);
export const isPending = createSelector(selectRoomsState, (request: RequestState<Room[]>) => request?.pending);
