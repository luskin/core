import { Inject, Injectable } from "@nestjs/common"
import { UserRepository } from "./repository/user.repository"
import { User } from "./domain/user.entity"

@Injectable()
export class UserService {
  @Inject()
  private readonly repository: UserRepository

  async getUserById(id: string): Promise<User> {
    return await this.repository.getById(id)
  }
}
