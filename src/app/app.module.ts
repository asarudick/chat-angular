import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
import { HttpService } from './http.service';
import { MessagesEffects } from './store/messages/messages.effects';
import * as messagesStore from './store/messages/messages.reducer';
import { RoomUsersEffects } from './store/room-users/room-users.effects';
import * as roomUsersStore from './store/room-users/room-users.reducer';
import { RoomsEffects } from './store/rooms/rooms.effects';
import * as roomsStore from './store/rooms/rooms.reducer';
import * as selectedRoomStore from './store/selected-room/selected-room.reducer';
import { SendMessageEffects } from './store/send-message/send-message.effects';
import * as sendMessageStore from './store/send-message/send-message.reducer';
import { UserEffects } from './store/user/user.effects';
import * as userStore from './store/user/user.reducer';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(userStore.featureKey, userStore.reducer),
    StoreModule.forFeature(roomsStore.featureKey, roomsStore.reducer),
    StoreModule.forFeature(roomUsersStore.featureKey, roomUsersStore.reducer),
    StoreModule.forFeature(selectedRoomStore.featureKey, selectedRoomStore.reducer),
    StoreModule.forFeature(messagesStore.featureKey, messagesStore.reducer),
    StoreModule.forFeature(sendMessageStore.featureKey, sendMessageStore.reducer),
    EffectsModule.forFeature([UserEffects, RoomsEffects, RoomUsersEffects, MessagesEffects, SendMessageEffects]),
    EffectsModule.forRoot([]),
    LoginModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [UserService, HttpService],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent, LoginComponent]
})
export class AppModule { }
