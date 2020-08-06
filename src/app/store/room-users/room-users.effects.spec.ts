import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RoomUsersEffects } from './room-users.effects';

describe('RoomUsersEffects', () => {
  let actions$: Observable<any>;
  let effects: RoomUsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule
      ],
      providers: [
        RoomUsersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RoomUsersEffects>(RoomUsersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
