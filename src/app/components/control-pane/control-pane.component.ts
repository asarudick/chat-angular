import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/User';
import { ControlPaneFacade } from './control-pane.facade';

@Component({
  selector: 'app-control-pane',
  templateUrl: './control-pane.component.html',
  styleUrls: ['./control-pane.component.sass']
})
export class ControlPaneComponent {
  user$ : Observable<User> = this.controlPaneFacade.user$;
  lastLoginFromNow$: Observable<string> = this.controlPaneFacade.lastLoginFromNow$;

  constructor(private controlPaneFacade: ControlPaneFacade) {}
}
