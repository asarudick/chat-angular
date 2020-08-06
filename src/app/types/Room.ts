import { Message } from './Message';
import { User } from './User';

export class Room {
  constructor(
    public readonly id: number, 
    public readonly name: string,
    public readonly users: User[],
    public readonly messages: Message[]
  ){};
};
