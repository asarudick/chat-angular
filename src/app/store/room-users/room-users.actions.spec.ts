import * as fromRoomUsers from './room-users.actions';

describe('loadRoomUsers', () => {
  it('should return an action', () => {
    expect(fromRoomUsers.loadRoomUsers({id: 0}).type).toBe('[RoomUsers] Load Room Users');
  });
});
