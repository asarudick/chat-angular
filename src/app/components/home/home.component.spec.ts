import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as userStore from '../../store/user/user.reducer';

import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(userStore.featureKey, userStore.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
