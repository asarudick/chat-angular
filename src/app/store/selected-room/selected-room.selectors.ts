import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Room } from 'src/app/types/Room';
import * as fromSelectedRoom from './selected-room.reducer';

export const selectSelectedRoomState = createFeatureSelector<Room>(
  fromSelectedRoom.featureKey
);

export const getSelectedRoom = createSelector(selectSelectedRoomState, (room: Room) => room);
