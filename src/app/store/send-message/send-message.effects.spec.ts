import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SendMessageEffects } from './send-message.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SendMessageEffects', () => {
  let actions$: Observable<any>;
  let effects: SendMessageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SendMessageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SendMessageEffects>(SendMessageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
