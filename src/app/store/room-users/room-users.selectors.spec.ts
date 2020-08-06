import * as fromRoomUsers from './room-users.reducer';
import { selectRoomUsersState } from './room-users.selectors';

describe('RoomUsers Selectors', () => {
  it('should select the feature state', () => {
    const initialState = { result: null, pending: false, error: null };

    const result = selectRoomUsersState({
      [fromRoomUsers.featureKey]: initialState
    });

    expect(result).toBe(initialState);
  });
});
