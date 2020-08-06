import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import * as UserActions from './user.actions';




@Injectable()
export class UserEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UserActions.login),
      concatMap((action: any) => {

        return this.userService.login(action.name, action.password)
        .pipe(
          // 'data' is left undefined here, but would typically contain at least
          // a token received from the API.
          map(data => UserActions.loginSuccess({ data })),
          catchError(error => of(UserActions.loginFailure({ error }))))

        }
      )
    );
  });



  constructor(private actions$: Actions, private userService: UserService) {}

}
