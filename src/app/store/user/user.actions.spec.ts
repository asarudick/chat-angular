import * as fromUser from './user.actions';

describe('login', () => {
  it('should return an action', () => {
    expect(fromUser.login({ name: 'test', password: 'test'}).type).toBe('[User] Login');
  });
});
