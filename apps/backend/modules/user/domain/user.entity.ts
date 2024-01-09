import { UserPermission } from "./user-permission.type"

export class User {
  id: string
  createdAt: Date
  updatedAt: Date
  firstName: string
  lastName: string
  email: string
  permissions: Array<UserPermission>
}
