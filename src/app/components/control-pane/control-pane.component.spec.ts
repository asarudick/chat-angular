import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as userStore from '../../store/user/user.reducer';

import { ControlPaneComponent } from './control-pane.component';
import { StoreModule } from '@ngrx/store';

describe('ControlPaneComponent', () => {
  let component: ControlPaneComponent;
  let fixture: ComponentFixture<ControlPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPaneComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(userStore.featureKey, userStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
