import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as userStore from '../../store/user/user.reducer';

import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(userStore.featureKey, userStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
