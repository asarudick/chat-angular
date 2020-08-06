import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api as ChatApi } from 'src/app/http/chat.api';
import { HttpService } from './http.service';
import { Room } from './types/Room';
import { User } from './types/User';
import { Message } from './types/Message';
import { Reaction } from './components/messages/messages.component';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpService: HttpService){

  }
  getAll(): Observable<any> {
    return this.httpService.request(ChatApi.Endpoints.Rooms);
  }
  get(id: number): Observable<any> {
    return this.httpService.request(ChatApi.Endpoints.Room, { id });
  }
  getMessages(id: number): Observable<any> {
    return this.httpService.request(ChatApi.Endpoints.Messages, { id })
  }
  sendMessage(user: User, room: Room, message: string): Observable<any> {
    const params = { roomId: room.id, name: user.name, message, reaction: null };
    return this.httpService.request(ChatApi.Endpoints.SendMessage, { id: room.id }, params);
  }
  setReaction(room: Room, message: Message, reaction: Reaction) {
    const messageId = message.id;
    const params = { id: room.id, messageId: message.id, reaction};
    return this.httpService.request(ChatApi.Endpoints.SetReaction, { id: room.id, messageId }, params);
  }
}
