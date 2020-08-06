import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RoomService } from 'src/app/room.service';
import * as RoomsActions from './rooms.actions';

@Injectable()
export class RoomsEffects {

  loadRooms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomsActions.loadRooms),
      switchMap(() => {
        return this.roomService.getAll().pipe(
          map(data => RoomsActions.loadRoomsSuccess({ data })),
          catchError(error => of(RoomsActions.loadRoomsFailure({ error }))))
      })
    );
  });

  constructor(private actions$: Actions, private roomService: RoomService) {}
}
