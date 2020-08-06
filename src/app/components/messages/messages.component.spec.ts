import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as selectedRoomStore from '../../store/selected-room/selected-room.reducer';
import * as userStore from '../../store/user/user.reducer';

import { MessagesComponent } from './messages.component';
import { StoreModule } from '@ngrx/store';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(userStore.featureKey, userStore.reducer),
        StoreModule.forFeature(selectedRoomStore.featureKey, selectedRoomStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
