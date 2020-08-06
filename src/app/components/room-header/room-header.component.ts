import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/types/Room';
import { User } from 'src/app/types/User';
import { RoomHeaderFacade } from './room-header.facade';

@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styleUrls: ['./room-header.component.sass']
})
export class RoomHeaderComponent {
  @Input() room: Room;
  users$: Observable<User[]> = this.roomHeaderFacade.users$;
  user$ : Observable<User> = this.roomHeaderFacade.user$;

  constructor(private roomHeaderFacade: RoomHeaderFacade) {}
}
