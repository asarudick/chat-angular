import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSelectedRoom } from 'src/app/store/selected-room/selected-room.selectors';
import * as SendMessageActions from 'src/app/store/send-message/send-message.actions';
import { getSendMessageResult } from 'src/app/store/send-message/send-message.selectors';
import { getUser } from 'src/app/store/user/user.selectors';
import { RequestState } from 'src/app/types/RequestState';
import { Room } from 'src/app/types/Room';
import { User } from 'src/app/types/User';

@Injectable({
  providedIn: 'root'
})
export class MessageComposerFacade {
  public result$: Observable<RequestState<void>> = this.sendMessageStore.select(getSendMessageResult);

  private user$: Observable<User> = this.userStore.select(getUser);
  private selectedRoom$: Observable<Room> = this.selectedRoomStore.select(getSelectedRoom);

  private user: User;
  private selectedRoom: Room;

  constructor(
    private sendMessageStore: Store<RequestState<void>>,
    private userStore: Store<User>,
    private selectedRoomStore: Store<Room>
  ) {
    this.user$.subscribe((user) => {
      this.user = user;
    });
    this.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room;
    });
  }

  sendMessage(message: string){
    this.sendMessageStore.dispatch(SendMessageActions.sendMessage({user: this.user, room: this.selectedRoom, message}));
  }

}
