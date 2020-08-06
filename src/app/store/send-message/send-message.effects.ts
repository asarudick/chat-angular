import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RoomService } from 'src/app/room.service';
import * as SendMessageActions from './send-message.actions';
import * as MessagesActions from '../messages/messages.actions';




@Injectable()
export class SendMessageEffects {
  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SendMessageActions.sendMessage),
      // TODO: Find the type for this.
      switchMap((action: any) => {
        return this.roomService.sendMessage(action.user, action.room, action.message).pipe(
          map(data => SendMessageActions.sendMessageSuccess({ data, room: action.room })),
          catchError(error => of(SendMessageActions.sendMessageFailure({ error }))))
      })
    );
  });

  sendMessageSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SendMessageActions.sendMessageSuccess),
      // TODO: Find the type for this.
      switchMap((action: any) => [
        MessagesActions.loadMessages({ id: action.room.id })
      ])
    );
  });
  constructor(private actions$: Actions, private roomService: RoomService) {}

}
