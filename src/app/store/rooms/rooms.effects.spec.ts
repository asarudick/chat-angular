import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RoomsEffects } from './rooms.effects';

describe('RoomsEffects', () => {
  let actions$: Observable<any>;
  let effects: RoomsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        RoomsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RoomsEffects>(RoomsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
