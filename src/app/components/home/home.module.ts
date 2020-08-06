import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ControlPaneComponent } from '../control-pane/control-pane.component';
import { MessageComposerComponent } from '../message-composer/message-composer.component';
import { MessagesComponent } from '../messages/messages.component';
import { RoomHeaderComponent } from '../room-header/room-header.component';
import { RoomComponent } from '../room/room.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    RoomComponent,
    MessageComposerComponent,
    MessagesComponent,
    RoomsComponent,
    RoomHeaderComponent,
    ControlPaneComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: []
})
export class HomeModule { }
