import { Entity, api } from "@mothership/nest"

export class User extends Entity {
  @api.IsString()
  public declare firstName: string

  @api.IsString()
  public declare lastName: string

  @api.IsEmail()
  public declare email: string

  @api.IsOptionalString()
  public declare firebaseAuthId: string
}
