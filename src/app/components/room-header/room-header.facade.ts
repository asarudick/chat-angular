import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import * as RoomUsersActions from 'src/app/store/room-users/room-users.actions';
import { getRoomUsers } from 'src/app/store/room-users/room-users.selectors';
import { getSelectedRoom } from 'src/app/store/selected-room/selected-room.selectors';
import { getUser } from 'src/app/store/user/user.selectors';
import { RequestState } from 'src/app/types/RequestState';
import { Room } from 'src/app/types/Room';
import { User } from 'src/app/types/User';
import { RoomUsers } from 'src/app/types/RoomUsers';

@Injectable({
  providedIn: 'root'
})
export class RoomHeaderFacade {
  // Restarts the polling needed to fetch the selected room's users.
  poll$: Observable<void> = this.selectedRoomStore.select(getSelectedRoom).pipe(
    // Used to initiate the first request upon switching to new selected room.
    map((action) => {
      this.getRoomUsers(action?.id);
      return action;
    }),
    // Handles the subsequent requests. There's a probably a more elegant way,
    // but haven't yet found it.
    switchMap((action) => {
      return interval(5000).pipe(map(() => this.getRoomUsers(action.id)));
    })
  );

  users$: Observable<User[]> = this.roomUsersStore.select(getRoomUsers).pipe(
    map((result) => {
      return result && result.users || [];
    }),
    startWith([])
  );

  user$: Observable<User> = this.userStore.select(getUser);

  constructor(
    private roomUsersStore: Store<RequestState<RoomUsers>>,
    private userStore: Store<User>,
    private selectedRoomStore: Store<Room>
  ) {
    // Not used in any async pipe, so we need to manuall subscribe to kick it off.
    this.poll$.subscribe();
  }

  getRoomUsers(id: number){
    id !== undefined && this.roomUsersStore.dispatch(RoomUsersActions.loadRoomUsers({id}));
  }

}
