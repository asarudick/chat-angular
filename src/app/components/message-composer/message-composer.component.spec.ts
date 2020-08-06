import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as sendMessageStore from '../../store/send-message/send-message.reducer';
import * as selectedRoomStore from '../../store/selected-room/selected-room.reducer';
import * as userStore from '../../store/user/user.reducer';
import { MessageComposerComponent } from './message-composer.component';
import { StoreModule } from '@ngrx/store';

describe('MessageComposerComponent', () => {
  let component: MessageComposerComponent;
  let fixture: ComponentFixture<MessageComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComposerComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(userStore.featureKey, userStore.reducer),
        StoreModule.forFeature(selectedRoomStore.featureKey, selectedRoomStore.reducer),
        StoreModule.forFeature(sendMessageStore.featureKey, sendMessageStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
