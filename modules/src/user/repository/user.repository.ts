import { Injectable } from "@nestjs/common"
import { User } from "../domain/user.entity"
import { CreateUser } from "./user.repository.types"

@Injectable()
export class UserRepository {
  async getById(id: string): Promise<User> {
    return {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@mothership.com",
      permissions: ["shipper.team.manage"],
    }
  }

  async create({ id }: CreateUser): Promise<User> {
    return this.getById(id)
  }

  async delete(id: string): Promise<User> {
    return this.getById(id)
  }
}
