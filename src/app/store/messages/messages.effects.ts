import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RoomService } from 'src/app/room.service';
import * as MessagesActions from './messages.actions';




@Injectable()
export class MessagesEffects {

  loadMessagess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(MessagesActions.loadMessages),
      // TODO: Find the type for this.
      switchMap((action: any) => {
        return this.roomService.getMessages(action.id).pipe(
          map(data => MessagesActions.loadMessagesSuccess({ data })),
          catchError(error => of(MessagesActions.loadMessagesFailure({ error }))))
      })
    );
  });



  setReaction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.setReaction),
      // TODO: Find the type for this.
      switchMap((action: any) => {
        this.roomService.setReaction(action.room, action.message, action.reaction).subscribe(() => {});
        return EMPTY;
      })
    );
  });



  constructor(private actions$: Actions, private roomService: RoomService) {}

}
