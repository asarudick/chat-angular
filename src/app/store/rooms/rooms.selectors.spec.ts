import * as fromRooms from './rooms.reducer';
import { selectRoomsState } from './rooms.selectors';

describe('Rooms Selectors', () => {
  it('should select the feature state', () => {
    const initialState = { result: null, pending: false, error: null };

    const result = selectRoomsState({
      [fromRooms.featureKey]: initialState
    });

    expect(result).toBe(initialState);
  });
});
