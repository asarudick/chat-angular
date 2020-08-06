import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as roomsStore from '../../store/rooms/rooms.reducer';

import { RoomsComponent } from './rooms.component';
import { StoreModule } from '@ngrx/store';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(roomsStore.featureKey, roomsStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
