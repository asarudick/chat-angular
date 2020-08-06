import { User } from './User';
import { Room } from './Room';

export type RoomUsers = {
  id: number;
  users: User[];
  room: Room;
}
