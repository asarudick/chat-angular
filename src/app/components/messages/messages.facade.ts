import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getSelectedRoom } from 'src/app/store/selected-room/selected-room.selectors';
import { getUser } from 'src/app/store/user/user.selectors';
import { Room } from 'src/app/types/Room';
import { User } from 'src/app/types/User';
import { map, startWith } from 'rxjs/operators';
import { getMessages } from 'src/app/store/messages/messages.selectors';
import { Message } from 'src/app/types/Message';
import * as MessagesActions from 'src/app/store/messages/messages.actions';

@Injectable({
  providedIn: 'root'
})
export class MessagesFacade {
  messages$: Observable<Message[]> = this.messagesStore.select(getMessages).pipe(
    map((result) => {
      return result || [];
    }),
    startWith([])
  );
  user$: Observable<User> = this.userStore.select(getUser);
  selectedRoom$: Observable<Room> = this.selectedRoomStore.select(getSelectedRoom);
  room = null;
  subscription: Subscription;
  constructor(
    private userStore: Store<User>,
    private selectedRoomStore: Store<Room>,
    private messagesStore: Store<Message[]>
  ) {
    this.selectedRoom$.subscribe((room) => {
      this.room = room;
    });
  }

  setReaction(message, reaction) {
    this.messagesStore.dispatch(MessagesActions.setReaction({room: this.room, message, reaction}));
  }

}
