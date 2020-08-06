import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/types/Message';
import { Room } from 'src/app/types/Room';
import { RoomFacade } from './room.facade';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent {
  @Input() selection: Room;
  messages$: Observable<Message[]> = this.roomFacade.messages$;
  constructor(private roomFacade: RoomFacade){}
}
