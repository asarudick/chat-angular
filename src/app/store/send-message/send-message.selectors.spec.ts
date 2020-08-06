import * as fromSendMessage from './send-message.reducer';
import { selectSendMessageState } from './send-message.selectors';

describe('SendMessage Selectors', () => {
  it('should select the feature state', () => {
    const initialState = { result: null, pending: false, error: null };

    const result = selectSendMessageState({
      [fromSendMessage.featureKey]: initialState
    });

    expect(result).toBe(initialState);
  });
});
