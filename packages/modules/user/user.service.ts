import { User } from "./user.type"

export class UserService {
  constructor() {}

  public getUser(): User {
    return {
      id: 1,
      name: "John Doe",
    }
  }
}
