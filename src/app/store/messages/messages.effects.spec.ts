import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MessagesEffects } from './messages.effects';

describe('MessagesEffects', () => {
  let actions$: Observable<any>;
  let effects: MessagesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MessagesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<MessagesEffects>(MessagesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
