import * as fromSelectedRoom from './selected-room.actions';

describe('selectRoom', () => {
  it('should return an action', () => {
    expect(fromSelectedRoom.selectRoom({ room: null }).type).toBe('[Rooms] Select Room');
  });
});
