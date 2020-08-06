import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RoomService } from 'src/app/room.service';
import * as RoomUsersActions from './room-users.actions';

@Injectable()
export class RoomUsersEffects {

  loadRoomUsers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RoomUsersActions.loadRoomUsers),
      // TODO: Find the type for this.
      switchMap((action: any) => {
        return this.roomService.get(action.id).pipe(
          map(data => RoomUsersActions.loadRoomUsersSuccess({ data })),
          catchError(error => of(RoomUsersActions.loadRoomUsersFailure({ error }))))
      })
    );
  });



  constructor(private actions$: Actions, private roomService: RoomService) {}

}
