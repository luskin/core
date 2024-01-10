import { Entity, api } from '@mothership/nest';

export class User extends Entity {
  @api.IsString()
  firstName: string;
  @api.IsString()
  lastName: string;
  @api.IsEmail()
  email: string;
  @api.IsOptionalString()
  firebaseAuthId: string;
}
