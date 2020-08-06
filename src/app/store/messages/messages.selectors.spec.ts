import * as fromMessages from './messages.reducer';
import { selectMessagesState } from './messages.selectors';

describe('Messages Selectors', () => {
  it('should select the feature state', () => {
    const initialState = { result: null, pending: false, error: null };

    const result = selectMessagesState({
      [fromMessages.featureKey]: initialState
    });

    expect(result).toBe(initialState);
  });
});
