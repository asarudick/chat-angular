import * as fromSelectedRoom from './selected-room.reducer';
import { getSelectedRoom } from './selected-room.selectors';

describe('Rooms Selectors', () => {
  it('should select the feature state', () => {
    const result = getSelectedRoom({
      [fromSelectedRoom.featureKey]: null
    });

    expect(result).toEqual(null);
  });
});
