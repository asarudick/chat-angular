import { User } from './User';
import { Content } from './Content';
import { Reaction } from '../components/messages/messages.component';

export class Message {
  constructor(
    public readonly id: number,
    public readonly user: User,
    public readonly message: Content,
    public readonly reaction: Reaction
  ){}
}
