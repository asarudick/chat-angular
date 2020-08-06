import * as fromUser from './user.reducer';
import { getUser } from './user.selectors';

describe('User Selectors', () => {
  it('should select the feature state', () => {
    const initialState = {name: null, lastLoginAt: null};

    const result = getUser({
      [fromUser.featureKey]: initialState
    });

    expect(result).toBe(initialState);
  });
});
