import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as RoomsAction from 'src/app/store/rooms/rooms.actions';
import { getRooms, isPending } from 'src/app/store/rooms/rooms.selectors';
import { getSelectedRoom } from 'src/app/store/selected-room/selected-room.selectors';
import { Room } from 'src/app/types/Room';

@Injectable({
  providedIn: 'root'
})
export class HomeFacade {
  rooms$: Observable<Room[]> = this.store.select(getRooms);
  pending$: Observable<boolean> = this.store.select(isPending);
  selectedRoom$: Observable<Room> = this.store.select(getSelectedRoom);

  constructor(private store: Store<Room[]>) {}
  getRooms() {
    this.store.dispatch(RoomsAction.loadRooms());
  }
}
