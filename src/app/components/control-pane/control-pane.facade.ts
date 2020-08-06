import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { interval, Observable } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, startWith } from 'rxjs/operators';
import { getUser } from 'src/app/store/user/user.selectors';
import { User } from 'src/app/types/User';

@Injectable({
  providedIn: 'root'
})
export class ControlPaneFacade {
  user$: Observable<User> = this.store.select(getUser);
  lastLoginFromNow$: Observable<string> = this.user$.pipe(
    mergeMap(user => interval(1000).pipe(map(() => moment(user.lastLoginAt).fromNow(true))) as Observable<string>),
    startWith('an instant'),
    distinctUntilChanged()
  )

  constructor(private store: Store<User>) {}
}
