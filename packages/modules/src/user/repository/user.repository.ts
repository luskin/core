import { Injectable } from "@nestjs/common"
import { User } from "../domain/user.entity"

@Injectable()
export class UserRepository {
  async getById(id: string): Promise<User> {
    return {
      id,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@mothership.com",
    }
  }
}
