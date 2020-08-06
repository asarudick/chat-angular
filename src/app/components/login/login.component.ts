import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFacade } from './login.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private loginFacade: LoginFacade, private router: Router) { }

  onSubmit($event: Event): void {
    $event.preventDefault();
    // TODO: Error handling when 'logging in' becomes more than just setting
    // the user state.
    this.loginFacade.login(this.loginForm.value.name, '');

    // Assumes success of the above call and navigates to the home route.
    this.router.navigate(['']);
  }

}
