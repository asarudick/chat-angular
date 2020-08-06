import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SelectedRoomActions from 'src/app/store/selected-room/selected-room.actions';
import { Room } from 'src/app/types/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomsFacade {

  constructor(private store: Store<Room>) {}

  select(room: Room) {
    this.store.dispatch(SelectedRoomActions.selectRoom({room}));
  }
}
