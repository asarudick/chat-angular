import { Component, Input } from '@angular/core';
import { Room } from 'src/app/types/Room';
import { RoomsFacade } from './rooms.facade';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent {
  @Input() selection: Room;
  @Input() rooms: Room[];

  constructor(private roomsFacade: RoomsFacade) { }

  select(room: Room) {
    this.roomsFacade.select(room);
  }

  isSelected(room: Room) {
    return this.selection === room;
  }

}
