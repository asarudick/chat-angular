import * as fromSendMessage from './send-message.actions';

describe('sendMessage', () => {
  it('should return an action', () => {
    expect(fromSendMessage.sendMessage({user: null, room: null, message: null}).type).toBe('[SendMessage] Send Message');
  });
});
