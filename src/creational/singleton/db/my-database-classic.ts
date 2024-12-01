import { IUser } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private _users: IUser[] = [];

  private constructor() {
    //new is not allowed outside class
  }

  public static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: IUser): void {
    this._users.push(user);
  }

  remove(index: number): void {
    this._users.splice(index, 1);
  }

  show(): void {
    for (const user of this._users) {
      console.log(user);
    }
  }
}
