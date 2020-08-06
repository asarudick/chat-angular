import * as fromRooms from './rooms.actions';

describe('loadRooms', () => {
  it('should return an action', () => {
    expect(fromRooms.loadRooms().type).toBe('[Rooms] Load Rooms');
  });
});
