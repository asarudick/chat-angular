// This is a facade intended to decouple component usage of the store, which is
// considered an anti-pattern.
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/types/User';
import { login } from '../../store/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginFacade {
  constructor(private store: Store<User>) {}
  login(name: string, password: string) {
    this.store.dispatch(login({name, password}));
  }
}
