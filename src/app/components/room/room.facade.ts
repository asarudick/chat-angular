import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import * as MessagesActions from 'src/app/store/messages/messages.actions';
import { getMessages } from 'src/app/store/messages/messages.selectors';
import { getSelectedRoom } from 'src/app/store/selected-room/selected-room.selectors';
import { getUser } from 'src/app/store/user/user.selectors';
import { Message } from 'src/app/types/Message';
import { RequestState } from 'src/app/types/RequestState';
import { Room } from 'src/app/types/Room';
import { User } from 'src/app/types/User';

const pollInterval = 2000;

@Injectable({
  providedIn: 'root'
})
export class RoomFacade {
  // Restarts the polling needed to fetch the selected room's messages.
  poll$: Observable<void> = this.selectedRoomStore.select(getSelectedRoom).pipe(
    // Used to initiate the first request upon switching to new selected room.
    map((action) => {
      action && this.getMessages(action.id);
      return action;
    }),
    // Handles the subsequent requests. There's a probably a more elegant way,
    // but haven't yet found it.
    switchMap((action) => {
      return interval(pollInterval).pipe(map(() => action && this.getMessages(action.id)));
    })
  );

  messages$: Observable<Message[]> = this.messagesStore.select(getMessages).pipe(
    map((result) => {
      return result || [];
    }),
    startWith([])
  );

  user$: Observable<User> = this.userStore.select(getUser);
  selectedRoom$: Observable<Room> = this.selectedRoomStore.select(getSelectedRoom);

  constructor(
    private messagesStore: Store<RequestState<Message[]>>,
    private userStore: Store<User>,
    private selectedRoomStore: Store<Room>
  ) {
    // Not used in any async pipe, so we need to manually subscribe to kick it off.
    this.poll$.subscribe();
  }

  getMessages(id: number){
    this.messagesStore.dispatch(MessagesActions.loadMessages({id}));
  }

}
