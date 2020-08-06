import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/types/Room';
import { HomeFacade } from './home.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  rooms$: Observable<Room[]> = this.homeFacade.rooms$;
  pending$: Observable<boolean> = this.homeFacade.pending$;
  selectedRoom$: Observable<Room> = this.homeFacade.selectedRoom$;

  constructor(private homeFacade: HomeFacade) {}

  ngOnInit () {
    this.homeFacade.getRooms();
  }

}
