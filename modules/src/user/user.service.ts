import { Inject, Injectable } from "@nestjs/common"
import { UserRepository } from "./repository/user.repository"
import { User } from "./domain/user.entity"
import { Auth } from "@core/libs"

@Injectable()
export class UserService {
  @Inject()
  private readonly repository: UserRepository

  async getById(id: string): Promise<User> {
    return await this.repository.getById(id)
  }

  async create(): Promise<User> {
    let uid: string
    try {
      uid = await Auth.createUserWithEmailAndPassword(
        "shipper@mothership.com",
        "password"
      )
      const user = await this.repository.create({ id: uid })
      return user
    } catch (error) {
      // Clean-up (TODO: move to event queue?)
      if (uid) {
        await Auth.deleteAuthUserByUID(uid)
        await this.repository.delete(uid)
      }
      throw error
    }
  }
}
