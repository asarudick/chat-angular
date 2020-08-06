import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as roomUsersStore from '../../store/room-users/room-users.reducer';
import * as selectedRoomStore from '../../store/selected-room/selected-room.reducer';
import * as userStore from '../../store/user/user.reducer';

import { RoomHeaderComponent } from './room-header.component';
import { StoreModule } from '@ngrx/store';

describe('RoomHeaderComponent', () => {
  let component: RoomHeaderComponent;
  let fixture: ComponentFixture<RoomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomHeaderComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(userStore.featureKey, userStore.reducer),
        StoreModule.forFeature(selectedRoomStore.featureKey, selectedRoomStore.reducer),
        StoreModule.forFeature(roomUsersStore.featureKey, roomUsersStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
