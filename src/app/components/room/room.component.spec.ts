import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as messagesStore from '../../store/messages/messages.reducer';
import * as selectedRoomStore from '../../store/selected-room/selected-room.reducer';
import * as userStore from '../../store/user/user.reducer';

import { RoomComponent } from './room.component';
import { RoomService } from 'src/app/room.service';
import { StoreModule } from '@ngrx/store';

describe('RoomComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomComponent ],
      providers: [RoomService],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(userStore.featureKey, userStore.reducer),
        StoreModule.forFeature(selectedRoomStore.featureKey, selectedRoomStore.reducer),
        StoreModule.forFeature(messagesStore.featureKey, messagesStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
