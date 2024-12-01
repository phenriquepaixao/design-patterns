import { IUser } from '../interfaces/user';

const _users: IUser[] = [];

export const MyDatabaseModule = {
  add(user: IUser): void {
    _users.push(user);
  },

  remove(index: number): void {
    _users.splice(index, 1);
  },

  show(): void {
    for (const user of _users) {
      console.log(user);
    }
  }
};
