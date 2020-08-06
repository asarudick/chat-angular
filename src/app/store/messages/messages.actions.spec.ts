import * as fromMessages from './messages.actions';

describe('loadMessages', () => {
  it('should return an action', () => {
    expect(fromMessages.loadMessages({ id: 0 }).type).toBe('[Messages] Load Messages');
  });
});
