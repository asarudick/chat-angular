import { Injectable, NgModule } from '@angular/core';
import { CanActivate, Router, RouterModule, Routes, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { getUser } from './store/user/user.selectors';
import { User } from './types/User';

@Injectable({
  providedIn: 'root'
})
export class isAuthorizedGuard implements CanActivate {
  isAuthorized: boolean;
  constructor (private store: Store<User>, private router: Router) {
    // Existence equates to being logged in.
    this.store.select(getUser).subscribe(user => {
      this.isAuthorized = !!user.name
    });
  }
  canActivate(): boolean | UrlTree {
    return this.isAuthorized || this.router.parseUrl('login');
  }
}

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [isAuthorizedGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [isAuthorizedGuard]
})
export class AppRoutingModule { }
